'use client';

import { useState, useRef, useMemo } from 'react';
import { ReviewProblem, Subject, GeminiModel, GradingSession } from '@/lib/types';
import {
  Lightbulb,
  Loader2,
  BookOpen,
  Download,
  RefreshCw,
  AlertCircle,
  Image
} from 'lucide-react';

interface GradingReviewProps {
  sessions: GradingSession[];
  grade: number;
  subject: Subject;
  apiKey: string;
  model?: GeminiModel;
}

export default function GradingReview({ sessions, grade, subject, apiKey, model }: GradingReviewProps) {
  // Filter frequent mistakes by grade and subject from parent filter
  const frequentMistakes = useMemo(() => {
    const filteredSessions = sessions.filter(
      s => s.grade === grade && s.subject === subject
    );
    const mistakeCount: Record<string, number> = {};
    filteredSessions.forEach(session => {
      session.weaknesses?.forEach(w => {
        mistakeCount[w] = (mistakeCount[w] || 0) + 1;
      });
    });
    return Object.entries(mistakeCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([mistake]) => mistake);
  }, [sessions, grade, subject]);
  const [numProblems, setNumProblems] = useState<number>(5);
  const [problems, setProblems] = useState<ReviewProblem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isGeneratingPng, setIsGeneratingPng] = useState(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const generateReview = async () => {
    if (!apiKey) {
      setError('Vui lòng nhập API Key.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade,
          subject,
          frequentMistakes,
          numProblems,
          apiKey,
          model
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Không thể tạo đề ôn tập.');
      }

      setProblems(data.problems);
    } catch (err: any) {
      setError(err.message || 'Xảy ra lỗi khi tạo đề ôn tập.');
    } finally {
      setLoading(false);
    }
  };

  const downloadPdf = async () => {
    if (!reviewRef.current) return;

    setIsGeneratingPdf(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = reviewRef.current;
      const filename = `De_on_tap_${subject}_Lop_${grade}.pdf`;

      const opt = {
        margin: 10,
        filename: filename,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false
        },
        jsPDF: {
          unit: 'mm' as const,
          format: 'a4' as const,
          orientation: 'portrait' as const
        }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Lỗi tạo PDF:', error);
      alert('Có lỗi khi tạo PDF. Vui lòng thử lại.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const downloadPng = async () => {
    if (!reviewRef.current) return;

    setIsGeneratingPng(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(reviewRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const link = document.createElement('a');
      link.download = `De_on_tap_${subject}_Lop_${grade}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Lỗi tạo PNG:', error);
      alert('Có lỗi khi tạo PNG. Vui lòng thử lại.');
    } finally {
      setIsGeneratingPng(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Dễ':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Trung bình':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Khó':
        return 'bg-rose-100 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-slate-800">Đề Ôn Tập</h2>
        <p className="text-sm text-slate-500">
          Tạo bài tập ôn tập dựa trên điểm yếu của học sinh
        </p>
      </div>

      {/* Configuration */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
        <h3 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          Cấu Hình Đề Ôn Tập
        </h3>

        <div className="mb-4">
          <div className="w-48">
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Số bài tập
            </label>
            <select
              value={numProblems}
              onChange={(e) => setNumProblems(Number(e.target.value))}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[3, 5, 7, 10].map(n => (
                <option key={n} value={n}>{n} bài</option>
              ))}
            </select>
          </div>
        </div>

        {/* Frequent Mistakes */}
        {frequentMistakes.length > 0 && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
            <p className="text-sm font-medium text-amber-700 mb-2">
              Lỗi thường gặp (sẽ được ưu tiên trong đề):
            </p>
            <div className="flex flex-wrap gap-2">
              {frequentMistakes.map((mistake, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs"
                >
                  {mistake}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={generateReview}
          disabled={loading || !apiKey}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Đang tạo đề...
            </>
          ) : problems.length > 0 ? (
            <>
              <RefreshCw className="w-5 h-5" />
              Tạo Đề Mới
            </>
          ) : (
            <>
              <Lightbulb className="w-5 h-5" />
              Tạo Đề Ôn Tập
            </>
          )}
        </button>

        {!apiKey && (
          <p className="mt-2 text-sm text-amber-600 text-center">
            Vui lòng nhập API Key ở trang chính để sử dụng tính năng này.
          </p>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-rose-700">{error}</p>
        </div>
      )}

      {/* Problems List */}
      {problems.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              Đề Ôn Tập ({problems.length} bài)
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadPng}
                disabled={isGeneratingPng}
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl flex items-center gap-2 transition-colors disabled:opacity-50"
              >
                {isGeneratingPng ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Đang tạo PNG...
                  </>
                ) : (
                  <>
                    <Image className="w-4 h-4" />
                    Lưu thành file PNG
                  </>
                )}
              </button>
              <button
                onClick={downloadPdf}
                disabled={isGeneratingPdf}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center gap-2 transition-colors disabled:opacity-50"
              >
                {isGeneratingPdf ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Đang tạo PDF...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Lưu thành file PDF
                  </>
                )}
              </button>
            </div>
          </div>

          <div ref={reviewRef} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <div className="text-center mb-6 pb-4 border-b border-slate-200">
              <h1 className="text-xl font-bold text-slate-800">ĐỀ ÔN TẬP {subject.toUpperCase()}</h1>
              <p className="text-slate-600">Lớp {grade}</p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, idx) => (
                <div key={problem.id} className="pb-4 border-b border-slate-100 last:border-0">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="w-7 h-7 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500">{problem.topic}</span>
                      <span className={`px-2 py-0.5 text-xs rounded-full border ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="text-slate-800 leading-relaxed whitespace-pre-wrap ml-10">
                    {problem.problemText}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!loading && problems.length === 0 && (
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center">
          <Lightbulb className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">
            Nhấn &quot;Tạo Đề Ôn Tập&quot; để bắt đầu.
          </p>
        </div>
      )}
    </div>
  );
}
