'use client';

import { useState } from 'react';
import { Subject, TestDifficulty, TestConfig, GeminiModel } from '@/lib/types';
import { BookOpen, Sparkles, AlertCircle, Loader2 } from 'lucide-react';

interface TestConfigProps {
  apiKey?: string;
  model?: GeminiModel;
  onGenerate: (config: TestConfig) => void;
  isLoading: boolean;
}

export default function TestConfigForm({ apiKey, model, onGenerate, isLoading }: TestConfigProps) {
  const [grade, setGrade] = useState<number>(6);
  const [subject, setSubject] = useState<Subject>('Toán');
  const difficulty: TestDifficulty = 'Trung bình';
  const numMc = 6;
  const numEssay = 2;
  const [durationMinutes, setDurationMinutes] = useState<number>(90);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (!apiKey?.trim()) {
      setLocalError('Vui lòng nhập API Key trong phần Cài đặt (icon chìa khóa ở góc phải).');
      return;
    }

    onGenerate({
      grade,
      subject,
      difficulty,
      numMc,
      numEssay,
      durationMinutes,
      apiKey: apiKey.trim(),
      model,
    });
  };

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Cấu hình Đề thi AI</h2>
          <p className="text-sm text-slate-500">Thiết lập tham số và tạo đề thi</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {localError && (
          <div className="bg-rose-50 border border-rose-100 text-rose-700 text-sm p-4 rounded-2xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{localError}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Grade */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 block">Khối lớp</label>
            <select
              value={grade}
              onChange={(e) => {
                const newGrade = parseInt(e.target.value);
                setGrade(newGrade);
                // Thời gian: Lớp 1-5: 60 phút, Lớp 6-12: 90 phút
                setDurationMinutes(newGrade <= 5 ? 60 : 90);
              }}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl px-4 py-3 text-base outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(g => (
                <option key={g} value={g}>Lớp {g}</option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 block">Môn học</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value as Subject)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl px-4 py-3 text-base outline-none"
            >
              <option value="Toán">Toán học</option>
              <option value="Ngữ văn">Ngữ văn</option>
              <option value="Tiếng Anh">Tiếng Anh</option>
            </select>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 block">Thời gian</label>
            <select
              value={durationMinutes}
              onChange={(e) => setDurationMinutes(parseInt(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl px-4 py-3 text-base outline-none"
            >
              <option value={15}>15 phút</option>
              <option value={60}>60 phút</option>
              <option value={90}>90 phút</option>
            </select>
          </div>
        </div>

        {/* Structure info */}
        <div className="bg-blue-50/50 border border-blue-100/50 rounded-2xl p-5">
          <div className="flex items-start gap-4">
            <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-slate-800">Cấu trúc đề thi</p>
              <p className="text-xs text-slate-500 mt-1">
                6 câu trắc nghiệm (3 điểm) + 2 câu tự luận (7 điểm) = 10 điểm
              </p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Đang tạo đề...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span>Tạo Đề Thi AI</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
