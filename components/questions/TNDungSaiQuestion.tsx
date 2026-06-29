'use client';

import { ExtendedQuestion } from '@/lib/exam-config/types';

interface TNDungSaiQuestionProps {
  question: ExtendedQuestion;
  index: number;
  showAnswer?: boolean;
}

/**
 * Trắc nghiệm Đúng/Sai (True/False with 4 statements)
 * Each question has 4 statements (a, b, c, d), student chooses Đúng or Sai for each
 */
export default function TNDungSaiQuestion({ question, index, showAnswer }: TNDungSaiQuestionProps) {
  const statements = question.statements || [];

  return (
    <div className="space-y-3 text-sm">
      <p className="font-bold">
        Câu {index} ({question.maxScore} điểm): <span className="font-medium">{question.text}</span>
      </p>

      <div className="pl-4 space-y-2">
        <p className="text-xs text-slate-500 italic">
          Trong mỗi ý dưới đây, hãy chọn Đúng hoặc Sai:
        </p>

        <div className="space-y-1.5">
          {statements.map((stmt, sIdx) => (
            <div
              key={sIdx}
              className={`flex items-start gap-3 p-2 rounded-lg ${
                showAnswer
                  ? stmt.isCorrect
                    ? 'bg-emerald-50 border border-emerald-200'
                    : 'bg-rose-50 border border-rose-200'
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              <span className="font-bold text-slate-600">
                {String.fromCharCode(97 + sIdx)})
              </span>
              <span className="flex-1">{stmt.text}</span>
              {showAnswer ? (
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded ${
                    stmt.isCorrect
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  {stmt.isCorrect ? 'Đúng' : 'Sai'}
                </span>
              ) : (
                <div className="flex gap-3 text-xs">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <span className="w-4 h-4 border border-slate-400 rounded-sm"></span>
                    <span>Đ</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <span className="w-4 h-4 border border-slate-400 rounded-sm"></span>
                    <span>S</span>
                  </label>
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAnswer && (
          <p className="text-[10px] text-slate-400 italic mt-2">
            * Điểm tính lũy tiến: 1 ý đúng = 0.1đ, 2 ý đúng = 0.25đ, 3 ý đúng = 0.5đ, 4 ý đúng = 1đ
          </p>
        )}
      </div>

      {showAnswer && question.explanation && (
        <div className="mt-2 pl-4 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200">
          <span className="font-semibold text-slate-700">Giải thích:</span> {question.explanation}
        </div>
      )}
    </div>
  );
}
