'use client';

import { useState, useEffect } from 'react';
import { Subject, GeminiModel } from '@/lib/types';
import {
  SubjectCode,
  BookSet,
  LearningMode,
  CurriculumStandard,
  getSubjectName,
  getBookSetName,
  getCapHoc,
  TimelineWeek,
} from '@/lib/curriculum/types';
import {
  getCurriculumByGradeSubject,
  getTopicsByMach,
  CANH_DIEU_TOAN_6_TIMELINE,
  KET_NOI_TOAN_6_TIMELINE,
  CHAN_TROI_TOAN_6_TIMELINE,
  CANH_DIEU_NGU_VAN_6_TIMELINE,
  KET_NOI_NGU_VAN_6_TIMELINE,
  CHAN_TROI_NGU_VAN_6_TIMELINE,
  GLOBAL_SUCCESS_TIENG_ANH_6_TIMELINE,
} from '@/lib/curriculum/curriculum-data';
import {
  CANH_DIEU_TOAN_6_HK1_GUIDES,
  TIMELINE_TO_GUIDE_MAP,
  getLessonGuideByTimelineName,
  LessonGuide,
} from '@/lib/curriculum/canh-dieu-toan6-hk1-guide';
import {
  TIMELINE_TO_GUIDE_MAP_HK2,
  getLessonGuideByTimelineNameHK2,
} from '@/lib/curriculum/canh-dieu-toan6-hk2-guide';
import {
  getLessonGuideByTimelineNameKNTTHK1,
} from '@/lib/curriculum/ket-noi-toan6-hk1-guide';
import {
  getLessonGuideByTimelineNameKNTTHK2,
} from '@/lib/curriculum/ket-noi-toan6-hk2-guide';
import {
  getLessonGuideByTimelineNameCTSTHK1,
} from '@/lib/curriculum/chan-troi-toan6-hk1-guide';
import {
  getLessonGuideByTimelineNameCTSTHK2,
} from '@/lib/curriculum/chan-troi-toan6-hk2-guide';

// Import Ngữ Văn guides
import { CANH_DIEU_NGU_VAN_6_HK1_GUIDES } from '@/lib/curriculum/canh-dieu-nguvan6-hk1-guide';
import { CANH_DIEU_NGU_VAN_6_HK2_GUIDES } from '@/lib/curriculum/canh-dieu-nguvan6-hk2-guide';
import { KET_NOI_NGU_VAN_6_HK1_GUIDES } from '@/lib/curriculum/ket-noi-nguvan6-hk1-guide';
import { KET_NOI_NGU_VAN_6_HK2_GUIDES } from '@/lib/curriculum/ket-noi-nguvan6-hk2-guide';
import { CHAN_TROI_NGU_VAN_6_HK1_GUIDES } from '@/lib/curriculum/chan-troi-nguvan6-hk1-guide';
import { CHAN_TROI_NGU_VAN_6_HK2_GUIDES } from '@/lib/curriculum/chan-troi-nguvan6-hk2-guide';

// Import English guides
import { GLOBAL_SUCCESS_TIENG_ANH_6_HK1_GUIDES } from '@/lib/curriculum/global-success-tienganh6-hk1-guide';
import { GLOBAL_SUCCESS_TIENG_ANH_6_HK2_GUIDES } from '@/lib/curriculum/global-success-tienganh6-hk2-guide';

// Unified helper to get lesson guide for either Semester 1 or Semester 2, either book set, and either subject
function getLessonGuideByTimelineNameUnified(tenBai: string, bookSet?: BookSet, subject?: SubjectCode): LessonGuide | undefined {
  if (subject === 'TIENG_ANH') {
    const guides = [...GLOBAL_SUCCESS_TIENG_ANH_6_HK1_GUIDES, ...GLOBAL_SUCCESS_TIENG_ANH_6_HK2_GUIDES];
    for (const guide of guides) {
      const guideMatch = guide.tieu_de.match(/(Unit\s+\d+)/i)?.[1];
      const weekMatch = tenBai.match(/(Unit\s+\d+)/i)?.[1];
      if (guideMatch && weekMatch && guideMatch.toLowerCase() === weekMatch.toLowerCase()) {
        return guide;
      }
    }
    return undefined;
  }

  if (subject === 'NGU_VAN') {
    const guides = 
      bookSet === 'KET_NOI'
        ? [...KET_NOI_NGU_VAN_6_HK1_GUIDES, ...KET_NOI_NGU_VAN_6_HK2_GUIDES]
        : bookSet === 'CHAN_TROI'
        ? [...CHAN_TROI_NGU_VAN_6_HK1_GUIDES, ...CHAN_TROI_NGU_VAN_6_HK2_GUIDES]
        : [...CANH_DIEU_NGU_VAN_6_HK1_GUIDES, ...CANH_DIEU_NGU_VAN_6_HK2_GUIDES];

    for (const guide of guides) {
      const guideMatch = guide.tieu_de.match(/(Bài\s+\d+)/i)?.[1];
      const weekMatch = tenBai.match(/(Bài\s+\d+)/i)?.[1];
      if (guideMatch && weekMatch && guideMatch.toLowerCase() === weekMatch.toLowerCase()) {
        return guide;
      }
    }
    return undefined;
  }

  // Default Math
  if (bookSet === 'KET_NOI') {
    return getLessonGuideByTimelineNameKNTTHK1(tenBai) || getLessonGuideByTimelineNameKNTTHK2(tenBai);
  }
  if (bookSet === 'CHAN_TROI') {
    return getLessonGuideByTimelineNameCTSTHK1(tenBai) || getLessonGuideByTimelineNameCTSTHK2(tenBai);
  }
  return getLessonGuideByTimelineName(tenBai) || getLessonGuideByTimelineNameHK2(tenBai);
}
import {
  BookMarked,
  Calendar,
  FolderTree,
  ChevronRight,
  CheckCircle2,
  Circle,
  BookOpen,
  Target,
  Lightbulb,
  Play,
  MessageCircle,
  GraduationCap,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface LearningTabProps {
  apiKey: string;
  model: GeminiModel;
  onNavigateToExam: (
    grade: number,
    subject: Subject,
    topicId?: string,
    topicName?: string,
    lessonId?: string,
    lessonName?: string
  ) => void;
  onNavigateToTutor: (grade: number, subject: Subject, topicName?: string, yeuCauCanDat?: string[]) => void;
}

const GRADES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const SUBJECTS: { code: SubjectCode; label: string }[] = [
  { code: 'TOAN', label: 'Toán' },
  { code: 'NGU_VAN', label: 'Ngữ văn' },
  { code: 'TIENG_ANH', label: 'Tiếng Anh' },
];
const BOOK_SETS: { code: BookSet; label: string }[] = [
  { code: 'KET_NOI', label: 'Kết nối tri thức' },
  { code: 'CANH_DIEU', label: 'Cánh Diều' },
  { code: 'CHAN_TROI', label: 'Chân trời sáng tạo' },
];

// Convert SubjectCode to Subject type
function subjectCodeToSubject(code: SubjectCode): Subject {
  switch (code) {
    case 'TOAN': return 'Toán';
    case 'NGU_VAN': return 'Ngữ văn';
    case 'TIENG_ANH': return 'Tiếng Anh';
  }
}

// Generate timeline weeks (simplified)
function generateTimeline(lop: number, curriculum: CurriculumStandard[]): TimelineWeek[] {
  const weeks: TimelineWeek[] = [];
  const topicsPerWeek = Math.ceil(curriculum.length / 35);
  for (let i = 1; i <= 35; i++) {
    const hoc_ky = i <= 18 ? 1 : 2;
    let is_kiem_tra = false;
    let loai_kiem_tra: any = undefined;

    if (i === 9) { is_kiem_tra = true; loai_kiem_tra = 'giua_ky_1'; }
    else if (i === 18) { is_kiem_tra = true; loai_kiem_tra = 'cuoi_ky_1'; }
    else if (i === 27) { is_kiem_tra = true; loai_kiem_tra = 'giua_ky_2'; }
    else if (i === 35) { is_kiem_tra = true; loai_kiem_tra = 'cuoi_ky_2'; }

    const startIdx = (i - 1) * topicsPerWeek;
    const weekTopics = curriculum.slice(startIdx, startIdx + topicsPerWeek);

    weeks.push({
      tuan: i,
      hoc_ky: hoc_ky as 1 | 2,
      chu_de_ids: weekTopics.map(t => t.id),
      ten_bai: weekTopics.map(t => t.chu_de),
      is_kiem_tra,
      loai_kiem_tra
    });
  }
  return weeks;
}

export default function LearningTab({
  apiKey,
  model,
  onNavigateToExam,
  onNavigateToTutor,
}: LearningTabProps) {
  // Selection state
  const [selectedGrade, setSelectedGrade] = useState<number>(6);
  const [selectedSubject, setSelectedSubject] = useState<SubjectCode>('TOAN');
  const [selectedBookSet, setSelectedBookSet] = useState<BookSet>('CANH_DIEU');
  const [learningMode, setLearningMode] = useState<LearningMode>('TIMELINE');

  // View state
  const [selectedTopic, setSelectedTopic] = useState<CurriculumStandard | null>(null);
  const [selectedLessonGuide, setSelectedLessonGuide] = useState<LessonGuide | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [expandedExamples, setExpandedExamples] = useState<number[]>([]);
  const [expandedExercises, setExpandedExercises] = useState<number[]>([]);
  const [expandedMach, setExpandedMach] = useState<string[]>([]);
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([]);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  // Enforce Global Success for English subject
  useEffect(() => {
    if (selectedSubject === 'TIENG_ANH') {
      setSelectedBookSet('GLOBAL_SUCCESS');
    } else if (selectedBookSet === 'GLOBAL_SUCCESS') {
      setSelectedBookSet('CANH_DIEU');
    }
  }, [selectedSubject, selectedBookSet]);

  // Time utilities for school year
  const getSchoolYearStart = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const startYear = now.getMonth() >= 8 ? currentYear : currentYear - 1;
    return new Date(startYear, 8, 5); // Sept 5th
  };

  const schoolYearStart = getSchoolYearStart();

  const getCurrentWeek = () => {
    const now = new Date();
    if (now < schoolYearStart) {
      return 1;
    }
    const diffMs = now.getTime() - schoolYearStart.getTime();
    const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000)) + 1;
    return Math.min(Math.max(diffWeeks, 1), 35);
  };

  const [currentWeek] = useState(getCurrentWeek());

  // Get curriculum data
  const curriculum = getCurriculumByGradeSubject(selectedGrade, selectedSubject);
  const topicsByMach = getTopicsByMach(selectedGrade, selectedSubject);
  
  // Get timeline based on book, grade, subject
  const timeline = (() => {
    if (selectedGrade === 6) {
      if (selectedSubject === 'TOAN') {
        if (selectedBookSet === 'CANH_DIEU') return CANH_DIEU_TOAN_6_TIMELINE;
        if (selectedBookSet === 'KET_NOI') return KET_NOI_TOAN_6_TIMELINE;
        if (selectedBookSet === 'CHAN_TROI') return CHAN_TROI_TOAN_6_TIMELINE;
      } else if (selectedSubject === 'NGU_VAN') {
        if (selectedBookSet === 'CANH_DIEU') return CANH_DIEU_NGU_VAN_6_TIMELINE;
        if (selectedBookSet === 'KET_NOI') return KET_NOI_NGU_VAN_6_TIMELINE;
        if (selectedBookSet === 'CHAN_TROI') return CHAN_TROI_NGU_VAN_6_TIMELINE;
      } else if (selectedSubject === 'TIENG_ANH') {
        if (selectedBookSet === 'GLOBAL_SUCCESS') return GLOBAL_SUCCESS_TIENG_ANH_6_TIMELINE;
      }
    }
    return generateTimeline(selectedGrade, curriculum);
  })();

  // Load completed topics from localStorage
  useEffect(() => {
    const key = `completed_topics_${selectedGrade}_${selectedSubject}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      setCompletedTopics(JSON.parse(saved));
    } else {
      setCompletedTopics([]);
    }
  }, [selectedGrade, selectedSubject]);

  // Save completed topics
  const toggleTopicComplete = (topicId: string) => {
    const key = `completed_topics_${selectedGrade}_${selectedSubject}`;
    const newCompleted = completedTopics.includes(topicId)
      ? completedTopics.filter(id => id !== topicId)
      : [...completedTopics, topicId];
    setCompletedTopics(newCompleted);
    localStorage.setItem(key, JSON.stringify(newCompleted));
  };

  const toggleMach = (mach: string) => {
    setExpandedMach(prev =>
      prev.includes(mach) ? prev.filter(m => m !== mach) : [...prev, mach]
    );
  };

  // Render lesson guide detail view
  if (selectedLessonGuide) {
    return (
      <div className="space-y-6">
        {/* Back button */}
        <button
          onClick={() => {
            setSelectedLessonGuide(null);
            setQuizAnswers({});
            setQuizSubmitted(false);
          }}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span className="text-sm font-medium">Quay lại danh sách</span>
        </button>

        {/* Lesson header */}
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <BookMarked className="w-64 h-64 -mr-16 -mb-16" />
          </div>
          <div>
            <span className="bg-indigo-500/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
              Chương {selectedLessonGuide.chuong} • {selectedLessonGuide.so_tiet} tiết
            </span>
            <h2 className="text-3xl font-bold mt-3 leading-tight">{selectedLessonGuide.tieu_de}</h2>
            <p className="text-indigo-200 text-sm mt-2">
              Lớp {selectedGrade} • {getSubjectName(selectedSubject)} • {getBookSetName(selectedBookSet)}
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-lg">
            <Target className="w-5 h-5 text-blue-500" />
            Mục Tiêu Bài Học
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {selectedLessonGuide.muc_tieu.map((mt, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600 bg-slate-50 p-3 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{mt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Knowledge */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-6">
          <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 text-lg border-b border-slate-100 pb-3">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            Kiến Thức Trọng Tâm
          </h3>
          <div className="space-y-6">
            {selectedLessonGuide.kien_thuc.map((kt, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="font-semibold text-indigo-900 text-base">{kt.tieu_de}</h4>
                <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100/50 space-y-2">
                  {kt.noi_dung.map((nd, ndIdx) => (
                    <p key={ndIdx} className="text-sm text-slate-600 leading-relaxed">• {nd}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulas / Key rules */}
        {selectedLessonGuide.cong_thuc && selectedLessonGuide.cong_thuc.length > 0 && (
          <div className="bg-amber-50/40 border border-amber-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2 text-lg">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Công Thức & Ghi Nhớ Nhanh
            </h3>
            <ul className="space-y-2">
              {selectedLessonGuide.cong_thuc.map((ct, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700 font-mono text-sm bg-white/60 p-2.5 rounded-lg border border-amber-100/50">
                  <span className="text-amber-500 font-bold">⇒</span>
                  <span>{ct}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Examples */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg border-b border-slate-100 pb-3">
            <GraduationCap className="w-5 h-5 text-purple-500" />
            Ví Dụ Minh Họa (Có Lời Giải)
          </h3>
          <div className="space-y-4">
            {selectedLessonGuide.vi_du.map((vd, idx) => {
              const showSol = expandedExamples.includes(idx);
              return (
                <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden">
                  <div className="p-4 bg-slate-50 flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">Ví dụ {idx + 1}</span>
                      <p className="text-sm font-medium text-slate-800 leading-relaxed whitespace-pre-line">{vd.de_bai}</p>
                    </div>
                    <button
                      onClick={() => setExpandedExamples(prev =>
                        prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
                      )}
                      className="text-xs bg-white text-indigo-600 border border-indigo-200 px-3 py-1.5 rounded-lg font-medium hover:bg-indigo-50 transition-colors flex-shrink-0"
                    >
                      {showSol ? 'Ẩn lời giải' : 'Xem lời giải'}
                    </button>
                  </div>
                  {showSol && (
                    <div className="p-4 border-t border-slate-100 bg-emerald-50/20 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                      <p className="font-semibold text-emerald-800 mb-1">Lời giải chi tiết:</p>
                      {vd.loi_giai}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Exercises */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg border-b border-slate-100 pb-3">
            <Play className="w-5 h-5 text-blue-500" />
            Bài Tập Vận Dụng
          </h3>
          <div className="space-y-4">
            {selectedLessonGuide.luyen_tap.map((lt, idx) => {
              const showAns = expandedExercises.includes(idx);
              return (
                <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden">
                  <div className="p-4 bg-slate-50 flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Bài tập {idx + 1}</span>
                      <p className="text-sm font-medium text-slate-800 leading-relaxed whitespace-pre-line">{lt.de_bai}</p>
                    </div>
                    <button
                      onClick={() => setExpandedExercises(prev =>
                        prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
                      )}
                      className="text-xs bg-white text-blue-600 border border-blue-200 px-3 py-1.5 rounded-lg font-medium hover:bg-blue-50 transition-colors flex-shrink-0"
                    >
                      {showAns ? 'Ẩn đáp án' : 'Xem đáp án'}
                    </button>
                  </div>
                  {showAns && (
                    <div className="p-4 border-t border-slate-100 bg-blue-50/20 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                      <p className="font-semibold text-blue-800 mb-1">Đáp án gợi ý:</p>
                      {lt.dap_an}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Quiz! */}
        {selectedLessonGuide.cau_hoi_on_tap && selectedLessonGuide.cau_hoi_on_tap.length > 0 && (
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg border-b border-slate-100 pb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Trắc Nghiệm Củng Cố Nhanh
            </h3>
            <div className="space-y-6">
              {selectedLessonGuide.cau_hoi_on_tap.map((q, qIdx) => {
                const selectedOption = quizAnswers[qIdx];
                const isCorrect = selectedOption === q.dap_an_dung;
                return (
                  <div key={qIdx} className="space-y-3 bg-slate-50/40 p-4 rounded-xl border border-slate-100">
                    <p className="text-sm font-semibold text-slate-800">Câu {qIdx + 1}: {q.cau_hoi}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {q.dap_an.map((opt, oIdx) => {
                        const isChosen = selectedOption === oIdx;
                        let optStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700';
                        if (quizSubmitted) {
                          if (oIdx === q.dap_an_dung) {
                            optStyle = 'bg-emerald-50 border-emerald-300 text-emerald-700 font-medium';
                          } else if (isChosen) {
                            optStyle = 'bg-rose-50 border-rose-300 text-rose-700';
                          } else {
                            optStyle = 'bg-white opacity-50 border-slate-200 text-slate-400';
                          }
                        } else if (isChosen) {
                          optStyle = 'bg-indigo-50 border-indigo-300 text-indigo-700 font-medium';
                        }
                        return (
                          <button
                            key={oIdx}
                            disabled={quizSubmitted}
                            onClick={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }))}
                            className={`w-full p-3 rounded-xl border text-left text-xs transition-all ${optStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {quizSubmitted && q.giai_thich && (
                      <div className="mt-2 text-xs bg-white p-3 rounded-lg border border-slate-100 text-slate-600 leading-relaxed">
                        <span className="font-bold text-indigo-600">Giải thích:</span> {q.giai_thich}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end gap-3 pt-2">
              {quizSubmitted ? (
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl transition-all"
                >
                  Làm lại
                </button>
              ) : (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < selectedLessonGuide.cau_hoi_on_tap.length}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600 text-white text-sm font-medium rounded-xl transition-all"
                >
                  Nộp bài & Kiểm tra
                </button>
              )}
            </div>
          </div>
        )}

        {/* Takeaways / Ghi nhớ */}
        <div className="bg-indigo-50/50 border border-indigo-100/50 rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-indigo-900 mb-4 flex items-center gap-2 text-lg">
            <Target className="w-5 h-5 text-indigo-600" />
            Bài Học Rút Ra
          </h3>
          <ul className="space-y-2">
            {selectedLessonGuide.ghi_nho.map((gn, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="text-emerald-500 font-bold mt-0.5">✔</span>
                <span>{gn}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action buttons */}
        <div className="grid sm:grid-cols-2 gap-4">
          <button
            onClick={() => {
              // Find the related topic ID
              const timelineWeek = timeline.find(w => w.ten_bai.some(tb => {
                const guide = getLessonGuideByTimelineNameUnified(tb, selectedBookSet, selectedSubject);
                return guide?.bai_id === selectedLessonGuide.bai_id;
              }));
              const topicId = timelineWeek?.chu_de_ids[0];
              onNavigateToExam(
                selectedGrade,
                subjectCodeToSubject(selectedSubject),
                topicId || '',
                selectedLessonGuide.tieu_de,
                selectedLessonGuide.bai_id,
                selectedLessonGuide.tieu_de
              );
            }}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/10"
          >
            <Play className="w-5 h-5" />
            Luyện tập theo bài học
          </button>
          <button
            onClick={() => onNavigateToTutor(
              selectedGrade,
              subjectCodeToSubject(selectedSubject),
              selectedLessonGuide.tieu_de,
              selectedLessonGuide.kien_thuc.flatMap(kt => kt.noi_dung)
            )}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 text-white rounded-2xl font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/10"
          >
            <MessageCircle className="w-5 h-5" />
            Hỏi Gia Sư bài này
          </button>
        </div>
      </div>
    );
  }

  // Calculate progress
  const progress = curriculum.length > 0
    ? (completedTopics.length / curriculum.length) * 100
    : 0;

  // Render topic detail view
  if (selectedTopic) {
    return (
      <div className="space-y-6">
        {/* Back button */}
        <button
          onClick={() => setSelectedTopic(null)}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span className="text-sm font-medium">Quay lại danh sách</span>
        </button>

        {/* Topic header */}
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-3xl p-6 shadow-xl">
          <div className="flex items-start justify-between">
            <div>
              <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {selectedTopic.mach}
              </span>
              <h2 className="text-2xl font-bold mt-3">{selectedTopic.chu_de}</h2>
              <p className="text-indigo-200 text-sm mt-1">
                Lớp {selectedTopic.lop} • {getSubjectName(selectedTopic.mon)}
              </p>
            </div>
            <button
              onClick={() => toggleTopicComplete(selectedTopic.id)}
              className={`p-3 rounded-xl transition-colors ${
                completedTopics.includes(selectedTopic.id)
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <CheckCircle2 className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Learning outcomes */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-500" />
            Yêu Cầu Cần Đạt
          </h3>
          <ul className="space-y-3">
            {selectedTopic.yeu_cau_can_dat.map((yc, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{yc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Suggested cognitive levels */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            Mức Độ Nhận Thức
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedTopic.muc_do_goi_y.map((md, idx) => {
              const labels: Record<string, { text: string; color: string }> = {
                'nhan_biet': { text: 'Nhận biết', color: 'bg-blue-100 text-blue-700' },
                'thong_hieu': { text: 'Thông hiểu', color: 'bg-green-100 text-green-700' },
                'van_dung': { text: 'Vận dụng', color: 'bg-amber-100 text-amber-700' },
                'van_dung_cao': { text: 'Vận dụng cao', color: 'bg-rose-100 text-rose-700' },
              };
              const label = labels[md] || { text: md, color: 'bg-slate-100 text-slate-700' };
              return (
                <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium ${label.color}`}>
                  {label.text}
                </span>
              );
            })}
          </div>
        </div>

        {/* Textbook lessons list for this topic */}
        {selectedGrade === 6 && 
         ((selectedSubject === 'TOAN' || selectedSubject === 'NGU_VAN') && (selectedBookSet === 'CANH_DIEU' || selectedBookSet === 'KET_NOI' || selectedBookSet === 'CHAN_TROI') ||
          (selectedSubject === 'TIENG_ANH' && selectedBookSet === 'GLOBAL_SUCCESS')) && (
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-indigo-500" />
              Bài Học Theo Sách Giáo Khoa {selectedBookSet === 'CANH_DIEU' ? 'Cánh Diều' : selectedBookSet === 'KET_NOI' ? 'Kết Nối Tri Thức' : selectedBookSet === 'CHAN_TROI' ? 'Chân Trời Sáng Tạo' : 'Global Success'}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {(() => {
                const lessons: LessonGuide[] = [];
                const targetTimeline = timeline;
                targetTimeline.forEach(week => {
                  if (week.chu_de_ids.includes(selectedTopic.id)) {
                    week.ten_bai.forEach(tb => {
                      const guide = getLessonGuideByTimelineNameUnified(tb, selectedBookSet, selectedSubject);
                      if (guide && !lessons.some(l => l.bai_id === guide.bai_id)) {
                        lessons.push(guide);
                      }
                    });
                  }
                });

                if (lessons.length === 0) {
                  return <p className="text-sm text-slate-500 col-span-2">Chưa có bài học chi tiết cho chủ đề này.</p>;
                }

                return lessons.map((guide) => (
                  <div
                    key={guide.bai_id}
                    className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/20 hover:bg-indigo-50/40 hover:shadow-sm transition-all flex flex-col justify-between gap-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{guide.tieu_de}</p>
                      <p className="text-xs text-slate-400 mt-1">{selectedSubject === 'NGU_VAN' ? 'Học kỳ' : 'Chương'} {guide.chuong} • {guide.so_tiet} tiết</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedLessonGuide(guide)}
                        className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        Học bài chi tiết
                      </button>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="grid sm:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigateToExam(
              selectedGrade,
              subjectCodeToSubject(selectedSubject),
              selectedTopic.id,
              selectedTopic.chu_de
            )}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
          >
            <Play className="w-5 h-5" />
            Luyện Tập
          </button>
          <button
            onClick={() => onNavigateToTutor(
              selectedGrade,
              subjectCodeToSubject(selectedSubject),
              selectedTopic.chu_de,
              selectedTopic.yeu_cau_can_dat
            )}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 text-white rounded-2xl font-semibold hover:bg-purple-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Hỏi Gia Sư
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-3xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Học Bài
            </span>
            <h2 className="text-2xl font-bold mt-2">Chương Trình Học</h2>
            <p className="text-indigo-200 text-sm mt-1">
              Theo chuẩn GDPT 2018 • Lớp 1-12
            </p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white/10 p-3 rounded-xl text-center">
              <BookMarked className="w-5 h-5 text-yellow-300 mx-auto" />
              <span className="block text-xs mt-1">{curriculum.length} chủ đề</span>
            </div>
            <div className="bg-white/10 p-3 rounded-xl text-center">
              <GraduationCap className="w-5 h-5 text-green-300 mx-auto" />
              <span className="block text-xs mt-1">{Math.round(progress)}% hoàn thành</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selection controls */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Grade */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Lớp</label>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(Number(e.target.value))}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {GRADES.map(g => (
                <option key={g} value={g}>Lớp {g}</option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Môn học</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value as SubjectCode)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {SUBJECTS.map(s => (
                <option key={s.code} value={s.code}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* Book set */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Bộ sách</label>
            <select
              value={selectedBookSet}
              onChange={(e) => setSelectedBookSet(e.target.value as BookSet)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {selectedSubject === 'TIENG_ANH' ? (
                <option value="GLOBAL_SUCCESS">Global Success</option>
              ) : (
                BOOK_SETS.map(b => (
                  <option key={b.code} value={b.code}>{b.label}</option>
                ))
              )}
            </select>
          </div>
        </div>
      </div>

      {/* Mode toggle */}
      <div className="flex items-center justify-center gap-2 bg-slate-100 rounded-xl p-1">
        <button
          onClick={() => setLearningMode('TIMELINE')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            learningMode === 'TIMELINE'
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-800'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Theo Timeline</span>
        </button>
        <button
          onClick={() => setLearningMode('CHU_DE')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            learningMode === 'CHU_DE'
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-800'
          }`}
        >
          <FolderTree className="w-4 h-4" />
          <span>Theo Chủ Đề</span>
        </button>
      </div>

      {/* Progress bar */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">Tiến độ học tập</span>
          <span className="text-sm font-bold text-indigo-600">{completedTopics.length}/{curriculum.length} chủ đề</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content based on mode */}
      {learningMode === 'TIMELINE' ? (
        // Timeline view
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-500" />
            Timeline Năm Học (35 tuần)
          </h3>

          <div className="space-y-2 max-h-[500px] overflow-y-auto">
            {timeline.map((week) => {
              const weekTopics = week.chu_de_ids
                ? (week.chu_de_ids.map(id => curriculum.find(t => t.id === id)).filter(Boolean) as CurriculumStandard[])
                : [];
              const isCurrentWeek = week.tuan === currentWeek;
              const isExpanded = expandedWeeks.includes(week.tuan);
              const weekCompleted = weekTopics.length > 0 && weekTopics.every(t => completedTopics.includes(t.id));

              const getWeekLabel = (w: TimelineWeek) => {
                if (w.is_kiem_tra) {
                  if (w.loai_kiem_tra === 'giua_ky_1') return `Tuần ${w.tuan} - Giữa kỳ 1`;
                  if (w.loai_kiem_tra === 'cuoi_ky_1') return `Tuần ${w.tuan} - Cuối kỳ 1`;
                  if (w.loai_kiem_tra === 'giua_ky_2') return `Tuần ${w.tuan} - Giữa kỳ 2`;
                  if (w.loai_kiem_tra === 'cuoi_ky_2') return `Tuần ${w.tuan} - Cuối kỳ 2`;
                }
                return `Tuần ${w.tuan}`;
              };

              return (
                <div
                  key={week.tuan}
                  className={`rounded-xl border transition-colors overflow-hidden ${
                    isCurrentWeek
                      ? 'border-indigo-300 bg-indigo-50'
                      : week.is_kiem_tra
                        ? 'border-amber-200 bg-amber-50'
                        : 'border-slate-100'
                  }`}
                >
                  {/* Week header - clickable */}
                  <button
                    onClick={() => setExpandedWeeks(prev =>
                      prev.includes(week.tuan) ? prev.filter(w => w !== week.tuan) : [...prev, week.tuan]
                    )}
                    className={`w-full p-3 flex items-center justify-between hover:bg-slate-50/50 transition-colors ${
                      isExpanded ? 'border-b border-slate-100' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        weekCompleted
                          ? 'bg-emerald-500 text-white'
                          : isCurrentWeek
                            ? 'bg-indigo-600 text-white'
                            : week.is_kiem_tra
                              ? 'bg-amber-500 text-white'
                              : 'bg-slate-100 text-slate-600'
                      }`}>
                        {weekCompleted ? '✓' : week.tuan}
                      </span>
                      <div className="text-left">
                        <p className={`text-sm font-medium ${
                          isCurrentWeek ? 'text-indigo-700' : 'text-slate-700'
                        }`}>
                          {getWeekLabel(week)}
                          {isCurrentWeek && (
                            <span className="ml-2 text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                              Tuần hiện tại
                            </span>
                          )}
                        </p>
                        {week.ten_bai && week.ten_bai.length > 0 && (
                          <div className="text-[11px] text-slate-500 mt-1 max-w-md">
                            <span className="font-semibold text-slate-600">Bài học:</span> {week.ten_bai.join('; ')}
                          </div>
                        )}
                        {weekTopics.length > 0 && (
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {weekTopics.length} chủ đề chuẩn • {weekTopics.filter(t => completedTopics.includes(t.id)).length} hoàn thành
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        week.hoc_ky === 1 ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                      }`}>
                        HK{week.hoc_ky}
                      </span>
                      {weekTopics.length > 0 && (
                        isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded week content */}
                  {isExpanded && weekTopics.length > 0 && (
                    <div className="p-3 space-y-2 bg-white">
                      {/* Textbook Lessons (Cánh Diều, Kết Nối Tri Thức & Chân Trời Sáng Tạo) */}
                      {selectedGrade === 6 && 
                       ((selectedSubject === 'TOAN' || selectedSubject === 'NGU_VAN') && (selectedBookSet === 'CANH_DIEU' || selectedBookSet === 'KET_NOI' || selectedBookSet === 'CHAN_TROI') ||
                        (selectedSubject === 'TIENG_ANH' && selectedBookSet === 'GLOBAL_SUCCESS')) && week.ten_bai && week.ten_bai.length > 0 && (
                        <div className="space-y-2 mb-3 border-b border-dashed border-slate-100 pb-3">
                           <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Bài học theo sách giáo khoa:</p>
                           {week.ten_bai.map((lessonName, idx) => {
                             const guide = getLessonGuideByTimelineNameUnified(lessonName, selectedBookSet, selectedSubject);
                             if (!guide) return null;
                             return (
                               <div
                                 key={idx}
                                 className="p-3 rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50/30 to-purple-50/10 hover:shadow-sm transition-all flex items-center justify-between gap-3"
                               >
                                 <div className="flex items-center gap-3">
                                   <BookOpen className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                   <div>
                                     <p className="text-sm font-semibold text-slate-800">{guide.tieu_de}</p>
                                     <p className="text-[10px] text-slate-400 mt-0.5">{guide.so_tiet} tiết • {selectedSubject === 'NGU_VAN' ? 'Học kỳ' : selectedSubject === 'TIENG_ANH' ? 'Unit' : 'Chương'} {guide.chuong}</p>
                                   </div>
                                 </div>
                                 <div className="flex gap-2">
                                   <button
                                     onClick={(e) => {
                                       e.stopPropagation();
                                       setSelectedLessonGuide(guide);
                                     }}
                                     className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-1"
                                   >
                                     <BookOpen className="w-3.5 h-3.5" />
                                     Học bài
                                   </button>
                                   <button
                                     onClick={(e) => {
                                       e.stopPropagation();
                                       onNavigateToTutor(
                                         selectedGrade,
                                         subjectCodeToSubject(selectedSubject),
                                         guide.tieu_de,
                                         guide.kien_thuc.flatMap(kt => kt.noi_dung)
                                       );
                                     }}
                                     className="p-1.5 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
                                     title="Hỏi gia sư"
                                   >
                                     <MessageCircle className="w-4 h-4" />
                                   </button>
                                 </div>
                               </div>
                             );
                           })}
                        </div>
                      )}

                      {selectedGrade === 6 && 
                       ((selectedSubject === 'TOAN' || selectedSubject === 'NGU_VAN') && (selectedBookSet === 'CANH_DIEU' || selectedBookSet === 'KET_NOI' || selectedBookSet === 'CHAN_TROI') ||
                        (selectedSubject === 'TIENG_ANH' && selectedBookSet === 'GLOBAL_SUCCESS')) && (
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Chủ đề đánh giá (chuẩn):</p>
                      )}
                      {weekTopics.map((topic, idx) => {
                        const isCompleted = completedTopics.includes(topic.id);
                        return (
                          <div
                            key={topic.id}
                            className={`p-3 rounded-lg border ${
                              isCompleted ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-start gap-2 flex-1">
                                <button
                                  onClick={(e) => { e.stopPropagation(); toggleTopicComplete(topic.id); }}
                                  className="mt-0.5"
                                >
                                  {isCompleted ? (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                  ) : (
                                    <Circle className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                                  )}
                                </button>
                                <div className="flex-1">
                                  <p className={`text-sm font-medium ${isCompleted ? 'text-slate-500 line-through' : 'text-slate-700'}`}>
                                    {topic.chu_de}
                                  </p>
                                  <p className="text-xs text-slate-400 mt-0.5">
                                    {topic.mach} • {topic.yeu_cau_can_dat.length} yêu cầu
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onNavigateToExam(selectedGrade, subjectCodeToSubject(selectedSubject), topic.id, topic.chu_de);
                                  }}
                                  className="p-1.5 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                                  title="Luyện tập"
                                >
                                  <Play className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onNavigateToTutor(selectedGrade, subjectCodeToSubject(selectedSubject), topic.chu_de, topic.yeu_cau_can_dat);
                                  }}
                                  className="p-1.5 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
                                  title="Hỏi gia sư"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedTopic(topic);
                                  }}
                                  className="p-1.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
                                  title="Xem chi tiết"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // Topic-based view
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <FolderTree className="w-5 h-5 text-indigo-500" />
            Chủ Đề Theo Mạch Nội Dung
          </h3>

          {curriculum.length === 0 ? (
            <p className="text-center text-slate-500 py-8">
              Chưa có dữ liệu chủ đề cho lớp {selectedGrade} môn {getSubjectName(selectedSubject)}.
            </p>
          ) : (
            <div className="space-y-3">
              {Object.entries(topicsByMach).map(([mach, topics]) => (
                <div key={mach} className="border border-slate-100 rounded-xl overflow-hidden">
                  {/* Mach header */}
                  <button
                    onClick={() => toggleMach(mach)}
                    className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-indigo-500" />
                      <span className="font-medium text-slate-700">{mach}</span>
                      <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                        {topics.length} chủ đề
                      </span>
                    </div>
                    {expandedMach.includes(mach) ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {/* Topics list */}
                  {expandedMach.includes(mach) && (
                    <div className="divide-y divide-slate-100">
                      {topics.map((topic) => {
                        const isCompleted = completedTopics.includes(topic.id);
                        return (
                          <div
                            key={topic.id}
                            className={`p-3 hover:bg-slate-50 transition-colors ${
                              isCompleted ? 'bg-emerald-50/50' : ''
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-start gap-3 flex-1">
                                <button
                                  onClick={() => toggleTopicComplete(topic.id)}
                                  className="mt-0.5"
                                >
                                  {isCompleted ? (
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                  ) : (
                                    <Circle className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                                  )}
                                </button>
                                <div className="flex-1 cursor-pointer" onClick={() => setSelectedTopic(topic)}>
                                  <p className={`text-sm font-medium ${
                                    isCompleted ? 'text-slate-500 line-through' : 'text-slate-700'
                                  }`}>
                                    {topic.chu_de}
                                  </p>
                                  <p className="text-xs text-slate-400 mt-0.5">
                                    {topic.yeu_cau_can_dat.length} yêu cầu cần đạt
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => onNavigateToExam(selectedGrade, subjectCodeToSubject(selectedSubject), topic.id, topic.chu_de)}
                                  className="p-1.5 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                                  title="Luyện tập"
                                >
                                  <Play className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => onNavigateToTutor(selectedGrade, subjectCodeToSubject(selectedSubject), topic.chu_de, topic.yeu_cau_can_dat)}
                                  className="p-1.5 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
                                  title="Hỏi gia sư"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => setSelectedTopic(topic)}
                                  className="p-1.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
                                  title="Xem chi tiết"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 gap-4">
        <button
          onClick={() => onNavigateToExam(selectedGrade, subjectCodeToSubject(selectedSubject))}
          className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-50 text-blue-600 border border-blue-200 rounded-2xl font-semibold hover:bg-blue-100 transition-colors"
        >
          <Play className="w-5 h-5" />
          Tạo Đề Luyện Tập
        </button>
        <button
          onClick={() => onNavigateToTutor(selectedGrade, subjectCodeToSubject(selectedSubject))}
          className="flex items-center justify-center gap-2 px-6 py-4 bg-purple-50 text-purple-600 border border-purple-200 rounded-2xl font-semibold hover:bg-purple-100 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Hỏi Gia Sư AI
        </button>
      </div>
    </div>
  );
}
