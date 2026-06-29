'use client';

import { ExtendedQuestion } from '@/lib/exam-config/types';

interface TNTraLoiNganQuestionProps {
  question: ExtendedQuestion;
  index: number;
  showAnswer?: boolean;
}

/**
 * Trắc nghiệm trả lời ngắn (Short Answer)
 * Student writes a short answer (number, word, or short phrase)
 */
export default function TNTraLoiNganQuestion({ question, index, showAnswer }: TNTraLoiNganQuestionProps) {
  return (
    <div className="space-y-2 text-sm">
      <p className="font-bold">
        Câu {index} ({question.maxScore} điểm): <span className="font-medium">{question.text}</span>
      </p>

      <div className="pl-4">
        {showAnswer ? (
          <div className="flex items-center gap-2">
            <span className="text-slate-600">Đáp án:</span>
            <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
              {question.correctAnswer}
            </span>
            {question.acceptableAnswers && question.acceptableAnswers.length > 0 && (
              <span className="text-xs text-slate-500">
                (Chấp nhận: {question.acceptableAnswers.join(', ')})
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-slate-600">Trả lời:</span>
            <span className="border-b-2 border-dashed border-slate-400 inline-block w-40 h-6"></span>
          </div>
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
