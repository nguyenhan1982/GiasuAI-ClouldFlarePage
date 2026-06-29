'use client';

import { useState, useRef, useEffect } from 'react';
import { GradingSession, Subject } from '@/lib/types';
import {
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  Lightbulb,
  Star,
  ArrowLeft,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Check,
  FileText,
  PenLine
} from 'lucide-react';

const SUBJECTS: { value: Subject; label: string }[] = [
  { value: 'Toán', label: 'Toán' },
  { value: 'Ngữ văn', label: 'Ngữ văn' },
  { value: 'Tiếng Anh', label: 'Tiếng Anh' },
];

interface GradeResultProps {
  session: GradingSession;
  onBack: () => void;
  onSubjectChange?: (newSubject: Subject) => void;
}

export default function GradeResult({ session, onBack, onSubjectChange }: GradeResultProps) {
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [currentSubject, setCurrentSubject] = useState<Subject>(session.subject);
  const [expandedDetails, setExpandedDetails] = useState<Record<number, boolean>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDetailExpand = (idx: number) => {
    setExpandedDetails(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSubjectDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubjectChange = (newSubject: Subject) => {
    setCurrentSubject(newSubject);
    setShowSubjectDropdown(false);
    onSubjectChange?.(newSubject);
  };
  const percentage = (session.score / session.totalPoints) * 100;

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-emerald-600 bg-emerald-50';
    if (percentage >= 60) return 'text-blue-600 bg-blue-50';
    if (percentage >= 40) return 'text-amber-600 bg-amber-50';
    return 'text-rose-600 bg-rose-50';
  };

  const getScoreEmoji = () => {
    if (percentage >= 90) return '🌟';
    if (percentage >= 80) return '😊';
    if (percentage >= 60) return '👍';
    if (percentage >= 40) return '💪';
    return '📚';
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </button>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Kết Quả Chấm Bài</h2>
          <div className="flex items-center gap-1 text-sm text-slate-500">
            {/* Editable Subject */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline cursor-pointer font-medium"
                title="Nhấn để đổi môn học"
              >
                {currentSubject}
                <ChevronDown className="w-3 h-3" />
              </button>

              {/* Dropdown */}
              {showSubjectDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50 min-w-[120px]">
                  {SUBJECTS.map((subj) => (
                    <button
                      key={subj.value}
                      onClick={() => handleSubjectChange(subj.value)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 flex items-center justify-between ${
                        currentSubject === subj.value ? 'text-blue-600 font-medium' : 'text-slate-700'
                      }`}
                    >
                      {subj.label}
                      {currentSubject === subj.value && (
                        <Check className="w-4 h-4 text-blue-600" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span>- Lớp {session.grade} • {session.date}</span>
          </div>
        </div>
      </div>

      {/* Score Card */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 mb-1">Điểm số</p>
            <div className="flex items-baseline gap-2">
              <span className={`text-4xl font-bold ${getScoreColor().split(' ')[0]}`}>
                {((session.score / session.totalPoints) * 10).toFixed(2)}
              </span>
              <span className="text-xl text-slate-400">/ 10</span>
              <span className="text-2xl ml-2">{getScoreEmoji()}</span>
            </div>
          </div>
          <div className={`px-4 py-2 rounded-2xl ${getScoreColor()}`}>
            <span className="font-bold">{Math.round(percentage)}%</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-600 leading-relaxed">{session.feedback}</p>
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Strengths */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h3 className="font-semibold text-emerald-800">Điểm Mạnh</h3>
          </div>
          <ul className="space-y-2">
            {session.strengths.map((s, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-emerald-700">
                <Star className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="w-5 h-5 text-amber-600" />
            <h3 className="font-semibold text-amber-800">Cần Cải Thiện</h3>
          </div>
          <ul className="space-y-2">
            {session.weaknesses.map((w, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-amber-700">
                <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Detail Questions */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-500" />
          Chi Tiết Từng Câu
        </h3>

        <div className="space-y-4">
          {session.details.map((detail, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border ${
                detail.isCorrect
                  ? 'bg-emerald-50/50 border-emerald-100'
                  : 'bg-rose-50/50 border-rose-100'
              }`}
            >
              {/* Header with question and score */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {detail.isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-500" />
                  )}
                  <span className="font-semibold text-slate-800">{detail.question}</span>
                </div>
                <span className={`text-sm font-bold ${
                  detail.isCorrect ? 'text-emerald-600' : 'text-rose-600'
                }`}>
                  {detail.points}/{detail.maxPoints} điểm
                </span>
              </div>

              {/* Expandable full content */}
              {(detail.problemText || detail.studentWorkText) && (
                <div className="mb-3">
                  <button
                    onClick={() => toggleDetailExpand(idx)}
                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium mb-2"
                  >
                    {expandedDetails[idx] ? (
                      <>
                        <ChevronUp className="w-3 h-3" />
                        Thu gọn chi tiết
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3 h-3" />
                        Xem đề bài & bài làm gốc
                      </>
                    )}
                  </button>

                  {expandedDetails[idx] && (
                    <div className="space-y-3 border-l-2 border-slate-200 pl-3 ml-1">
                      {/* Full Problem Text */}
                      {detail.problemText && (
                        <div>
                          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            Đề bài (trích xuất từ ảnh/PDF):
                          </p>
                          <div className="text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-100 whitespace-pre-wrap">
                            {detail.problemText}
                          </div>
                        </div>
                      )}

                      {/* Full Student Work Text */}
                      {detail.studentWorkText && (
                        <div>
                          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                            <PenLine className="w-3 h-3" />
                            Bài làm học sinh (trích xuất từ ảnh/PDF):
                          </p>
                          <div className="text-sm text-slate-700 bg-blue-50 p-3 rounded-lg border border-blue-100 whitespace-pre-wrap">
                            {detail.studentWorkText}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Answer comparison */}
              <div className="grid md:grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Đáp án học sinh:</p>
                  <p className={`text-sm p-2 rounded-lg ${
                    detail.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {detail.studentAnswer || '(Không có đáp án)'}
                  </p>
                </div>
                {!detail.isCorrect && (
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Đáp án đúng:</p>
                    <p className="text-sm p-2 rounded-lg bg-emerald-100 text-emerald-800">
                      {detail.correctAnswer}
                    </p>
                  </div>
                )}
              </div>

              {/* Comment */}
              <p className="text-sm text-slate-600 italic">{detail.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Suggestions */}
      {session.practiceSuggestions.length > 0 && (
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6">
          <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Bài Tập Gợi Ý
          </h3>
          <div className="space-y-3">
            {session.practiceSuggestions.map((suggestion, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl">
                <p className="text-xs text-blue-600 font-semibold mb-1">{suggestion.topic}</p>
                <p className="text-sm text-slate-700">{suggestion.sampleProblem}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
