'use client';

import { Book, SkipForward } from 'lucide-react';
import { TextbookSeriesCode, TextbookSeries } from '@/lib/exam-config/types';

interface Step3Props {
  textbookSeries: TextbookSeriesCode | null;
  availableTextbooks: TextbookSeries[];
  onTextbookChange: (series: TextbookSeriesCode | null) => void;
}

const TEXTBOOK_COLORS: Record<TextbookSeriesCode, string> = {
  CANH_DIEU: 'from-orange-400 to-red-500',
  KET_NOI: 'from-blue-400 to-indigo-500',
  CHAN_TROI: 'from-emerald-400 to-teal-500',
  GLOBAL_SUCCESS: 'from-purple-400 to-pink-500',
  I_LEARN_SMART: 'from-cyan-400 to-blue-500',
  FRIENDS_PLUS: 'from-yellow-400 to-orange-500',
  ENGLISH_DISCOVERY: 'from-rose-400 to-red-500',
  BRIGHT: 'from-amber-400 to-yellow-500',
  EXPLORE_ENGLISH: 'from-green-400 to-emerald-500',
};

export default function Step3Textbook({
  textbookSeries,
  availableTextbooks,
  onTextbookChange,
}: Step3Props) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
          <Book className="w-4 h-4" />
          Chọn Bộ sách (Tùy chọn)
        </label>
        <p className="text-xs text-slate-500">
          Chọn bộ sách giáo khoa để AI tạo đề phù hợp với nội dung bài học.
          Bước này không bắt buộc.
        </p>
      </div>

      {/* Skip Option */}
      <button
        onClick={() => onTextbookChange(null)}
        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
          textbookSeries === null
            ? 'border-blue-500 bg-blue-50'
            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
            <SkipForward className="w-6 h-6 text-slate-400" />
          </div>
          <div>
            <div
              className={`font-medium ${
                textbookSeries === null ? 'text-blue-700' : 'text-slate-700'
              }`}
            >
              Không chọn bộ sách
            </div>
            <div className="text-xs text-slate-400">
              Sử dụng ngữ liệu/bài tập tổng quát, không theo sách cụ thể
            </div>
          </div>
        </div>
      </button>

      {/* Info Note */}
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
        <p className="text-xs text-amber-700">
          <span className="font-medium">Lưu ý:</span> Theo quy định hiện hành, đề kiểm tra
          định kỳ (Giữa kỳ, Cuối kỳ) sử dụng <strong>ngữ liệu ngoài SGK</strong> cho phần
          Đọc hiểu. Việc chọn bộ sách chủ yếu giúp AI tham khảo nội dung kiến thức phù hợp.
        </p>
      </div>

      {/* Textbook Options */}
      {availableTextbooks.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {availableTextbooks.map((book) => (
            <button
              key={book.code}
              onClick={() => onTextbookChange(book.code)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                textbookSeries === book.code
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                    TEXTBOOK_COLORS[book.code] || 'from-slate-400 to-slate-500'
                  } flex items-center justify-center`}
                >
                  <Book className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div
                    className={`font-medium ${
                      textbookSeries === book.code ? 'text-blue-700' : 'text-slate-700'
                    }`}
                  >
                    {book.nameVi}
                  </div>
                  {book.nameVi !== book.name && (
                    <div className="text-xs text-slate-400">{book.name}</div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {availableTextbooks.length === 0 && (
        <div className="text-center py-6 text-slate-400 bg-slate-50 rounded-xl">
          Không có bộ sách phù hợp với môn học đã chọn
        </div>
      )}

      {/* Summary */}
      {textbookSeries && (
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
          <div className="flex items-center gap-2 text-emerald-700 text-sm">
            <span className="font-medium">Đã chọn:</span>
            <span>
              {availableTextbooks.find((t) => t.code === textbookSeries)?.nameVi}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
