'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/auth-context';
import { useGradingData } from '@/hooks/useGradingData';
import { TestTemplate, TestConfig, GeminiModel, GEMINI_MODELS, GradingSession, StudentProfile, Subject, TutorPreference } from '@/lib/types';
import { ExamBlueprint, subjectCodeToLegacy } from '@/lib/exam-config';
import ExamConfigWizard from '@/components/ExamConfigWizard';
import TestTaker from '@/components/TestTaker';
import GradeForm from '@/components/GradeForm';
import GradeResult from '@/components/GradeResult';
import GradingDashboard from '@/components/GradingDashboard';
import GradingHistory from '@/components/GradingHistory';
import GradingReview from '@/components/GradingReview';
import TutorChat from '@/components/TutorChat';
import LearningTab from '@/components/LearningTab';
import {
  Plus,
  AlertCircle,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Printer,
  PenTool,
  Settings,
  X,
  Key,
  Cpu,
  LogOut,
  BarChart3,
  Clock,
  Lightbulb,
  Download,
  Upload,
  User,
  Cloud,
  CloudOff,
  RefreshCw,
  Filter,
  Trash2,
  AlertTriangle,
  MessageCircle,
  BookMarked,
  FileEdit
} from 'lucide-react';

const API_KEY_STORAGE = 'gemini_api_key';
const MODEL_STORAGE = 'gemini_model';
const STUDENT_NAME_STORAGE = 'student_name';

type MainTab = 'learn' | 'create' | 'grade' | 'tutor';
type GradeView = 'dashboard' | 'grade' | 'result' | 'history' | 'review';

export default function AppPage() {
  const { user, isLoggedIn, isLoading: authLoading, logout } = useAuth();
  const router = useRouter();

  // Google Drive data hook
  const {
    sessions,
    settings: driveSettings,
    isLoading: driveLoading,
    isSyncing,
    error: driveError,
    addSession,
    updateSession,
    deleteSession: deleteSessionFromDrive,
    updateSettings: updateDriveSettings,
    refresh: refreshDrive,
    deleteAllData,
  } = useGradingData();

  // Main tab state
  const [activeTab, setActiveTab] = useState<MainTab>('learn');

  // Test creation state
  const [testView, setTestView] = useState<'config' | 'taking'>('config');
  const [testTemplate, setTestTemplate] = useState<TestTemplate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Grading state
  const [gradeView, setGradeView] = useState<GradeView>('grade');
  const [currentSession, setCurrentSession] = useState<GradingSession | null>(null);

  // Grading filters
  const [filterGrade, setFilterGrade] = useState<number | 'all'>('all');
  const [filterSubject, setFilterSubject] = useState<Subject | 'all'>('all');

  // Tutor state
  const [tutorGrade, setTutorGrade] = useState<number>(6);
  const [tutorSubject, setTutorSubject] = useState<Subject>('Toán');
  const [tutorContext, setTutorContext] = useState<{ topicName?: string; yeuCauCanDat?: string[] } | null>(null);

  // Learning context for ExamConfigWizard preset
  const [learningContext, setLearningContext] = useState<{
    grade?: number;
    subject?: Subject;
    topicId?: string;
    topicName?: string;
    lessonId?: string;
    lessonName?: string;
  } | null>(null);

  // Settings state (local + drive)
  const [showSettings, setShowSettings] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState<GeminiModel>('gemini-3.1-flash-lite');
  const [studentName, setStudentName] = useState('');

  // Filter sessions based on grade and subject
  // Normalize sessions - add default grade/subject for old data
  const normalizedSessions = sessions.map(session => ({
    ...session,
    grade: session.grade || 6,
    subject: session.subject || 'Toán' as Subject
  }));

  // Filter sessions based on grade and subject
  const filteredSessions = normalizedSessions.filter(session => {
    const gradeMatch = filterGrade === 'all' || session.grade === filterGrade;
    const subjectMatch = filterSubject === 'all' || session.subject === filterSubject;
    return gradeMatch && subjectMatch;
  });

  // Create profile from filtered sessions (after studentName is declared)
  const profile: StudentProfile = {
    name: studentName || user?.name || '',
    sessions: filteredSessions,
    frequentMistakes: filteredSessions.flatMap(s => s.weaknesses).filter((v, i, a) => a.indexOf(v) === i).slice(0, 10),
    overallProgress: ''
  };

  // Get unique grades and subjects from all sessions for filter options
  const availableGrades = Array.from(new Set(sessions.map(s => s.grade))).sort((a, b) => a - b);
  const availableSubjects = Array.from(new Set(sessions.map(s => s.subject))) as Subject[];

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !isLoggedIn) {
      router.push('/');
    }
  }, [authLoading, isLoggedIn, router]);

  // Load settings from localStorage (fallback) and drive
  useEffect(() => {
    const savedApiKey = localStorage.getItem(API_KEY_STORAGE);
    const savedModel = localStorage.getItem(MODEL_STORAGE) as GeminiModel;
    const savedStudentName = localStorage.getItem(STUDENT_NAME_STORAGE);
    if (savedApiKey) setApiKey(savedApiKey);
    if (savedModel) setModel(savedModel);
    if (savedStudentName) setStudentName(savedStudentName);
  }, []);

  // Sync settings from Drive when loaded
  useEffect(() => {
    if (driveSettings) {
      if (driveSettings.apiKey) setApiKey(driveSettings.apiKey);
      if (driveSettings.model) setModel(driveSettings.model as GeminiModel);
      if (driveSettings.studentName) setStudentName(driveSettings.studentName);
    }
  }, [driveSettings]);

  // Save settings (local + drive)
  const handleSaveSettings = async () => {
    // Save to localStorage as backup
    if (apiKey.trim()) {
      localStorage.setItem(API_KEY_STORAGE, apiKey.trim());
    } else {
      localStorage.removeItem(API_KEY_STORAGE);
    }
    localStorage.setItem(MODEL_STORAGE, model);
    if (studentName.trim()) {
      localStorage.setItem(STUDENT_NAME_STORAGE, studentName.trim());
    } else {
      localStorage.removeItem(STUDENT_NAME_STORAGE);
    }

    // Save to Google Drive
    await updateDriveSettings({
      apiKey: apiKey.trim() || undefined,
      model,
      studentName: studentName.trim() || undefined,
    });

    setShowSettings(false);
  };

  // Test generation with new ExamBlueprint
  const handleGenerateTestFromBlueprint = async (blueprint: ExamBlueprint) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/generate-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blueprint,
          apiKey: apiKey.trim(),
          model,
        }),
      });

      const responseText = await response.text();

      if (!response.ok) {
        let errorMessage = 'Lỗi không xác định khi liên kết server AI.';
        try {
          if (responseText) {
            const errData = JSON.parse(responseText);
            errorMessage = errData.error || errorMessage;
          }
        } catch {
          if (responseText) {
            errorMessage = responseText;
          }
        }
        throw new Error(errorMessage);
      }

      if (!responseText) {
        throw new Error('Server không trả về dữ liệu.');
      }

      const data = JSON.parse(responseText);

      // Transform questions - handle both new format and legacy format
      const questionsWithIds = data.questions.map((q: any, idx: number) => ({
        ...q,
        id: q.id || `q_${Date.now()}_${idx}`,
        // Map new format to legacy type for TestTaker compatibility
        type: q.type || (q.format === 'TN_4LC' ? 'multiple_choice' :
              q.format === 'TU_LUAN' || q.format === 'TU_LUAN_NGAN' ? 'essay' : q.format),
      }));

      // Get subject in Vietnamese for display
      const subjectVi = subjectCodeToLegacy(blueprint.subject);

      const newTemplate: TestTemplate = {
        id: `template_${Date.now()}`,
        title: data.title,
        grade: blueprint.grade,
        subject: subjectVi,
        difficulty: 'Trung bình', // Default for now
        durationMinutes: data.durationMinutes || blueprint.durationMinutes,
        readingPassage: data.readingPassages?.[0]?.content || data.readingPassage || undefined,
        questions: questionsWithIds,
        createdAt: new Date().toISOString(),
      };

      setTestTemplate(newTemplate);
      setTestView('taking');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Không thể tạo đề thi.');
    } finally {
      setIsLoading(false);
    }
  };

  // Legacy test generation (backward compatible)
  const handleGenerateTest = async (config: TestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/generate-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });

      const responseText = await response.text();

      if (!response.ok) {
        let errorMessage = 'Lỗi không xác định khi liên kết server AI.';
        try {
          if (responseText) {
            const errData = JSON.parse(responseText);
            errorMessage = errData.error || errorMessage;
          }
        } catch {
          if (responseText) {
            errorMessage = responseText;
          }
        }
        throw new Error(errorMessage);
      }

      if (!responseText) {
        throw new Error('Server không trả về dữ liệu.');
      }

      const data = JSON.parse(responseText);

      const questionsWithIds = data.questions.map((q: any, idx: number) => ({
        ...q,
        id: `q_${Date.now()}_${idx}`,
      }));

      const newTemplate: TestTemplate = {
        id: `template_${Date.now()}`,
        title: data.title,
        grade: config.grade,
        subject: config.subject,
        difficulty: config.difficulty,
        durationMinutes: data.durationMinutes || 45,
        readingPassage: data.readingPassage || undefined,
        questions: questionsWithIds,
        createdAt: new Date().toISOString(),
      };

      setTestTemplate(newTemplate);
      setTestView('taking');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Không thể tạo đề thi.');
    } finally {
      setIsLoading(false);
    }
  };

  // Grading handlers
  const handleGradingComplete = async (session: GradingSession) => {
    await addSession(session);
    setCurrentSession(session);
    setGradeView('result');
  };

  const handleViewSession = (session: GradingSession) => {
    setCurrentSession(session);
    setGradeView('result');
  };

  const handleDeleteSession = async (sessionId: string) => {
    await deleteSessionFromDrive(sessionId);
  };

  const handleExportProfile = () => {
    const dataStr = JSON.stringify(profile, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hoc_tap_${profile.name || 'student'}_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const data = JSON.parse(event.target?.result as string) as StudentProfile;
        // Import sessions one by one
        for (const session of data.sessions) {
          await addSession(session);
        }
      } catch {
        alert('File không hợp lệ');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const handleDeleteAllData = async () => {
    setIsDeleting(true);
    try {
      await deleteAllData();
      // Clear local storage as well
      localStorage.removeItem(API_KEY_STORAGE);
      localStorage.removeItem(MODEL_STORAGE);
      localStorage.removeItem(STUDENT_NAME_STORAGE);
      // Reset local state
      setApiKey('');
      setModel('gemini-3.1-flash-lite');
      setStudentName('');
      setShowDeleteConfirm(false);
      setShowSettings(false);
    } catch (err) {
      console.error('Failed to delete all data:', err);
      alert('Có lỗi xảy ra khi xóa dữ liệu. Vui lòng thử lại.');
    } finally {
      setIsDeleting(false);
    }
  };

  if (authLoading || (isLoggedIn && driveLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-500 font-medium">
            {driveLoading ? 'Đang tải dữ liệu từ Google Drive...' : 'Đang tải...'}
          </p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  const gradeNavItems = [
    { id: 'grade' as GradeView, icon: PenTool, label: 'Chấm bài', highlight: true },
    { id: 'dashboard' as GradeView, icon: BarChart3, label: 'Tiến độ' },
    { id: 'history' as GradeView, icon: Clock, label: 'Lịch sử' },
    { id: 'review' as GradeView, icon: Lightbulb, label: 'Ôn tập' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header - Mobile responsive */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-sm no-print">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-3 flex items-center justify-between gap-2">
          {/* Logo - compact on mobile */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="bg-blue-600 text-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-slate-800">Gia Sư AI</h1>
              <p className="text-[10px] text-slate-400 font-medium">Học tập cá nhân hóa</p>
            </div>
          </div>

          {/* Tabs - Icons only on mobile */}
          <div className="flex items-center bg-slate-100 rounded-lg sm:rounded-xl p-0.5 sm:p-1">
            <button
              onClick={() => setActiveTab('learn')}
              className={`p-2 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-sm font-medium transition-all ${
                activeTab === 'learn'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              title="Học bài"
            >
              <span className="flex items-center gap-1.5">
                <BookMarked className="w-4 h-4" />
                <span className="hidden sm:inline">Học bài</span>
              </span>
            </button>
            <button
              onClick={() => { setActiveTab('create'); setTestView('config'); setLearningContext(null); }}
              className={`p-2 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-sm font-medium transition-all ${
                activeTab === 'create'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              title="Làm bài"
            >
              <span className="flex items-center gap-1.5">
                <FileEdit className="w-4 h-4" />
                <span className="hidden sm:inline">Làm bài</span>
              </span>
            </button>
            <button
              onClick={() => { setActiveTab('grade'); setGradeView('grade'); }}
              className={`p-2 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-sm font-medium transition-all ${
                activeTab === 'grade'
                  ? 'bg-white text-emerald-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              title="Chấm bài"
            >
              <span className="flex items-center gap-1.5">
                <PenTool className="w-4 h-4" />
                <span className="hidden sm:inline">Chấm bài</span>
              </span>
            </button>
            <button
              onClick={() => { setActiveTab('tutor'); setTutorContext(null); }}
              className={`p-2 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-sm font-medium transition-all ${
                activeTab === 'tutor'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
              title="Giảng bài"
            >
              <span className="flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Giảng bài</span>
              </span>
            </button>
          </div>

          {/* User section - Compact on mobile */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Sync status - hidden on mobile */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
              {isSyncing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-blue-500" />
                  <span className="hidden md:inline text-blue-500">Đang đồng bộ...</span>
                </>
              ) : driveError ? (
                <>
                  <CloudOff className="w-4 h-4 text-rose-500" />
                  <span className="hidden md:inline text-rose-500">Lỗi đồng bộ</span>
                </>
              ) : (
                <>
                  <Cloud className="w-4 h-4 text-emerald-500" />
                  <span className="hidden md:inline text-emerald-500">Đã đồng bộ</span>
                </>
              )}
            </div>
            <button
              onClick={refreshDrive}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg sm:rounded-xl transition-colors"
              title="Làm mới dữ liệu"
              disabled={isSyncing}
            >
              <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg sm:rounded-xl transition-colors"
              title="Cài đặt"
            >
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            {user && (
              <div className="flex items-center gap-1 sm:gap-2 pl-1 sm:pl-2 border-l border-slate-200">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="p-1.5 sm:p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg sm:rounded-xl transition-colors"
                  title="Đăng xuất"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tab: Học bài */}
        {activeTab === 'learn' && (
          <LearningTab
            apiKey={apiKey}
            model={model}
            onNavigateToExam={(grade, subject, topicId, topicName, lessonId, lessonName) => {
              setLearningContext({ grade, subject, topicId, topicName, lessonId, lessonName });
              setActiveTab('create');
              setTestView('config');
            }}
            onNavigateToTutor={(grade, subject, topicName, yeuCauCanDat) => {
              setTutorGrade(grade);
              setTutorSubject(subject);
              setTutorContext({ topicName, yeuCauCanDat });
              setActiveTab('tutor');
            }}
          />
        )}

        {/* Tab: Làm bài */}
        {activeTab === 'create' && (
          <>
            {error && (
              <div className="bg-rose-50 border border-rose-100 text-rose-700 p-4 rounded-2xl mb-6 shadow-sm flex items-start gap-3 max-w-2xl mx-auto">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">Gặp lỗi</p>
                  <p className="text-xs text-rose-600">{error}</p>
                </div>
              </div>
            )}

            {isLoading ? (
              <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <p className="text-slate-500 font-medium text-sm">Đang tạo đề thi bằng AI...</p>
              </div>
            ) : testView === 'config' ? (
              <div className="space-y-6">
                {/* Banner */}
                <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-3xl p-6 shadow-xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        AI Powered
                      </span>
                      <h2 className="text-2xl font-bold mt-2">Tạo Đề Thi Thông Minh</h2>
                      <p className="text-slate-300 text-sm mt-1">
                        Hỗ trợ lớp 1 đến lớp 12 • Trắc nghiệm & Tự luận
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-white/10 p-3 rounded-xl text-center">
                        <BookOpen className="w-5 h-5 text-yellow-300 mx-auto" />
                        <span className="block text-xs mt-1">Lớp 1-12</span>
                      </div>
                      <div className="bg-white/10 p-3 rounded-xl text-center">
                        <Printer className="w-5 h-5 text-green-300 mx-auto" />
                        <span className="block text-xs mt-1">PDF</span>
                      </div>
                      <div className="bg-white/10 p-3 rounded-xl text-center">
                        <CheckCircle2 className="w-5 h-5 text-blue-300 mx-auto" />
                        <span className="block text-xs mt-1">Chuẩn</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ExamConfigWizard
                  apiKey={apiKey}
                  onGenerate={handleGenerateTestFromBlueprint}
                  isLoading={isLoading}
                  presetGrade={learningContext?.grade}
                  presetSubject={learningContext?.subject}
                  presetTopicId={learningContext?.topicId}
                  presetTopicName={learningContext?.topicName}
                  presetLessonId={learningContext?.lessonId}
                  presetLessonName={learningContext?.lessonName}
                />
              </div>
            ) : (
              testTemplate && (
                <div>
                  <button
                    onClick={() => setTestView('config')}
                    className="mb-4 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl inline-flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    Tạo đề mới
                  </button>
                  <TestTaker
                    test={testTemplate}
                    onCancel={() => setTestView('config')}
                  />
                </div>
              )
            )}
          </>
        )}

        {/* Tab: Chấm Bài */}
        {activeTab === 'grade' && (
          <div className="pb-20">
            {/* Sub navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 z-40">
              <div className="max-w-lg mx-auto flex items-center justify-around">
                {gradeNavItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setGradeView(item.id)}
                    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                      gradeView === item.id || (gradeView === 'result' && item.id === 'grade')
                        ? item.highlight
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                          : 'text-emerald-600 bg-emerald-50'
                        : item.highlight
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </nav>

            {/* Filter and Export/Import */}
            <div className="flex items-center justify-between mb-4 bg-white border border-slate-100 rounded-2xl p-3 shadow-sm">
              {/* Filters */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-slate-500">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Lọc:</span>
                </div>
                <select
                  value={filterGrade === 'all' ? 'all' : filterGrade}
                  onChange={(e) => setFilterGrade(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Tất cả lớp</option>
                  {availableGrades.map(g => (
                    <option key={g} value={g}>Lớp {g}</option>
                  ))}
                </select>
                <select
                  value={filterSubject === 'all' ? 'all' : filterSubject}
                  onChange={(e) => setFilterSubject(e.target.value === 'all' ? 'all' : e.target.value as Subject)}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Tất cả môn</option>
                  {availableSubjects.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {(filterGrade !== 'all' || filterSubject !== 'all') && (
                  <button
                    onClick={() => { setFilterGrade('all'); setFilterSubject('all'); }}
                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Xóa bộ lọc
                  </button>
                )}
              </div>

              {/* Export/Import buttons */}
              <div className="flex gap-1">
                <button
                  onClick={handleExportProfile}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                  title="Xuất dữ liệu"
                >
                  <Download className="w-5 h-5" />
                </button>
                <label className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer" title="Nhập dữ liệu">
                  <Upload className="w-5 h-5" />
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportProfile}
                    className="hidden"
                />
              </label>
              </div>
            </div>

            {gradeView === 'dashboard' && (
              <GradingDashboard
                profile={profile}
                onViewSession={handleViewSession}
              />
            )}

            {gradeView === 'grade' && (
              <GradeForm
                apiKey={apiKey}
                model={model}
                onComplete={handleGradingComplete}
              />
            )}

            {gradeView === 'result' && currentSession && (
              <GradeResult
                session={currentSession}
                onBack={() => setGradeView('grade')}
                onSubjectChange={async (newSubject) => {
                  // Update current session with new subject
                  const updatedSession = { ...currentSession, subject: newSubject };
                  setCurrentSession(updatedSession);
                  // Sync to Google Drive
                  await updateSession(updatedSession);
                }}
              />
            )}

            {gradeView === 'history' && (
              <GradingHistory
                sessions={profile.sessions}
                onViewSession={handleViewSession}
                onDeleteSession={handleDeleteSession}
              />
            )}

            {gradeView === 'review' && (
              <GradingReview
                sessions={sessions}
                grade={filterGrade === 'all' ? 6 : filterGrade}
                subject={filterSubject === 'all' ? 'Toán' : filterSubject}
                apiKey={apiKey}
                model={model}
              />
            )}
          </div>
        )}

        {/* Tab: Gia Sư */}
        {activeTab === 'tutor' && (
          <div className="space-y-6">
            {/* Banner */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white rounded-3xl p-6 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    AI Tutor
                  </span>
                  <h2 className="text-2xl font-bold mt-2">Gia Sư AI Cá Nhân</h2>
                  <p className="text-purple-200 text-sm mt-1">
                    Giải bài tập theo nhiều cách • Học theo phong cách của bạn
                  </p>
                </div>
                <div className="flex gap-3">
                  <select
                    value={tutorGrade}
                    onChange={(e) => setTutorGrade(Number(e.target.value))}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(g => (
                      <option key={g} value={g} className="text-slate-800">Lớp {g}</option>
                    ))}
                  </select>
                  <select
                    value={tutorSubject}
                    onChange={(e) => setTutorSubject(e.target.value as Subject)}
                    className="px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    <option value="Toán" className="text-slate-800">Toán</option>
                    <option value="Ngữ văn" className="text-slate-800">Ngữ văn</option>
                    <option value="Tiếng Anh" className="text-slate-800">Tiếng Anh</option>
                  </select>
                </div>
              </div>
            </div>

            <TutorChat
              grade={tutorGrade}
              subject={tutorSubject}
              apiKey={apiKey}
              model={model}
              preference={driveSettings?.tutorPreference || null}
              onSavePreference={async (pref) => {
                await updateDriveSettings({ tutorPreference: pref });
              }}
              initialTopic={tutorContext?.topicName}
              initialContext={tutorContext?.yeuCauCanDat}
            />
          </div>
        )}
      </main>

      {/* Footer - only show on create tab */}
      {activeTab === 'create' && (
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-400 no-print">
          <p>© 2026 Gia Sư AI. Thiết kế cho học sinh Việt Nam.</p>
        </footer>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Cài Đặt AI
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-slate-100 rounded-xl"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <div className="space-y-5">
              {/* Student Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-500" />
                  Tên học sinh
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Nhập tên học sinh"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* API Key */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <Key className="w-4 h-4 text-amber-500" />
                  Gemini API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Nhập API Key"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-slate-400">
                  Lấy API Key miễn phí tại{' '}
                  <a
                    href="https://aistudio.google.com/apikey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google AI Studio
                  </a>
                </p>
              </div>

              {/* Model Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-500" />
                  Mô hình AI
                </label>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value as GeminiModel)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {GEMINI_MODELS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSaveSettings}
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Lưu Cài Đặt
              </button>

              {/* Danger Zone */}
              <div className="pt-4 mt-4 border-t border-slate-200">
                <p className="text-xs text-slate-400 mb-3">Vùng nguy hiểm</p>
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="w-full py-3 bg-rose-50 text-rose-600 border border-rose-200 rounded-xl font-semibold hover:bg-rose-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Xóa Toàn Bộ Dữ Liệu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-rose-100 rounded-full">
                <AlertTriangle className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Xác Nhận Xóa Dữ Liệu</h3>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-slate-600">
                Bạn có chắc chắn muốn xóa <span className="font-semibold text-rose-600">toàn bộ dữ liệu</span> của ứng dụng trên Google Drive?
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                <p className="text-sm text-amber-700">
                  <strong>Lưu ý:</strong> Hành động này sẽ xóa vĩnh viễn:
                </p>
                <ul className="text-sm text-amber-600 mt-2 space-y-1 list-disc list-inside">
                  <li>Tất cả bài làm đã chấm ({sessions.length} bài)</li>
                  <li>Cài đặt API Key và mô hình AI</li>
                  <li>Thông tin học sinh</li>
                </ul>
              </div>
              <p className="text-sm text-slate-500">
                Dữ liệu không thể khôi phục sau khi xóa.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                disabled={isDeleting}
                className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors disabled:opacity-50"
              >
                Hủy
              </button>
              <button
                onClick={handleDeleteAllData}
                disabled={isDeleting}
                className="flex-1 py-3 bg-rose-600 text-white rounded-xl font-semibold hover:bg-rose-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Đang xóa...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    Xóa Vĩnh Viễn
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
