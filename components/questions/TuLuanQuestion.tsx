'use client';

import { ExtendedQuestion } from '@/lib/exam-config/types';

interface TuLuanQuestionProps {
  question: ExtendedQuestion;
  index: number;
  showAnswer?: boolean;
  isShortEssay?: boolean;
}

/**
 * Tự luận / Tự luận ngắn (Essay / Short Essay)
 */
export default function TuLuanQuestion({
  question,
  index,
  showAnswer,
  isShortEssay,
}: TuLuanQuestionProps) {
  const lineCount = isShortEssay ? 3 : 6;

  return (
    <div className="space-y-3 text-sm">
      <p className="font-bold">
        Câu {index} ({question.maxScore} điểm): <span className="font-medium">{question.text}</span>
      </p>

      <div className="pl-4">
        {showAnswer && question.sampleAnswer ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-emerald-700 mb-2">Đáp án mẫu:</p>
            <div className="text-slate-700 whitespace-pre-wrap leading-relaxed">
              {question.sampleAnswer}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-slate-400 italic text-xs">Bài làm:</div>
            {Array.from({ length: lineCount }).map((_, i) => (
              <div
                key={i}
                className="border-b border-dashed border-gray-300 h-6"
              />
            ))}
          </div>
        )}

        {/* Rubric for essay grading */}
        {showAnswer && question.rubric && question.rubric.length > 0 && (
          <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-slate-700 mb-2">Rubric chấm điểm:</p>
            <div className="space-y-2">
              {question.rubric.map((level, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <span className="font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded">
                    {level.points}đ
                  </span>
                  <span className="text-slate-600">{level.criteria}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showAnswer && question.explanation && !question.rubric && (
        <div className="mt-2 pl-4 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200">
          <span className="font-semibold text-slate-700">Hướng dẫn chấm:</span>{' '}
          {question.explanation}
        </div>
      )}
    </div>
  );
}
