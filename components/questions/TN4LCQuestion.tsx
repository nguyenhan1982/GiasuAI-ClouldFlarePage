'use client';

import { ExtendedQuestion } from '@/lib/exam-config/types';

interface TN4LCQuestionProps {
  question: ExtendedQuestion;
  index: number;
  showAnswer?: boolean;
}

/**
 * Trắc nghiệm 4 lựa chọn (Multiple Choice with 4 options)
 */
export default function TN4LCQuestion({ question, index, showAnswer }: TN4LCQuestionProps) {
  const options = question.options || [];

  return (
    <div className="space-y-2 text-sm">
      <p className="font-bold">
        Câu {index} ({question.maxScore} điểm): <span className="font-medium">{question.text}</span>
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 pl-4">
        {options.map((option, oIdx) => {
          const isCorrect = question.correctOptionIndex === oIdx;
          const optionText = option.replace(/^[A-D]\.\s*/i, '');

          return (
            <div
              key={oIdx}
              className={showAnswer && isCorrect ? 'text-emerald-700 font-semibold' : ''}
            >
              <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span> {optionText}
              {showAnswer && isCorrect && <span className="ml-1 text-emerald-600">✓</span>}
            </div>
          );
        })}
      </div>

      {showAnswer && question.explanation && (
        <div className="mt-2 pl-4 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200">
          <span className="font-semibold text-slate-700">Giải thích:</span> {question.explanation}
        </div>
      )}
    </div>
  );
}
