'use client';

import { ExtendedQuestion, QuestionFormatCode } from '@/lib/exam-config/types';
import TN4LCQuestion from './TN4LCQuestion';
import TNDungSaiQuestion from './TNDungSaiQuestion';
import TNTraLoiNganQuestion from './TNTraLoiNganQuestion';
import TuLuanQuestion from './TuLuanQuestion';

interface QuestionRendererProps {
  question: ExtendedQuestion;
  index: number;
  showAnswer?: boolean;
}

/**
 * Dispatcher component that renders the appropriate question type
 */
export default function QuestionRenderer({
  question,
  index,
  showAnswer,
}: QuestionRendererProps) {
  const format = question.format as QuestionFormatCode;

  switch (format) {
    case 'TN_4LC':
      return (
        <TN4LCQuestion
          question={question}
          index={index}
          showAnswer={showAnswer}
        />
      );

    case 'TN_DUNG_SAI':
      return (
        <TNDungSaiQuestion
          question={question}
          index={index}
          showAnswer={showAnswer}
        />
      );

    case 'TN_TRA_LOI_NGAN':
      return (
        <TNTraLoiNganQuestion
          question={question}
          index={index}
          showAnswer={showAnswer}
        />
      );

    case 'TU_LUAN':
      return (
        <TuLuanQuestion
          question={question}
          index={index}
          showAnswer={showAnswer}
          isShortEssay={false}
        />
      );

    case 'TU_LUAN_NGAN':
      return (
        <TuLuanQuestion
          question={question}
          index={index}
          showAnswer={showAnswer}
          isShortEssay={true}
        />
      );

    // Legacy support for old question types
    default:
      // Handle legacy 'multiple_choice' and 'essay' types
      const legacyType = (question as any).type;
      if (legacyType === 'multiple_choice') {
        return (
          <TN4LCQuestion
            question={question}
            index={index}
            showAnswer={showAnswer}
          />
        );
      }
      if (legacyType === 'essay') {
        return (
          <TuLuanQuestion
            question={question}
            index={index}
            showAnswer={showAnswer}
            isShortEssay={false}
          />
        );
      }

      // Fallback for unknown types
      return (
        <div className="text-sm text-slate-500 italic">
          Câu {index}: Định dạng câu hỏi không được hỗ trợ ({format || legacyType})
        </div>
      );
  }
}

/**
 * Render multiple questions grouped by section
 */
interface QuestionListProps {
  questions: ExtendedQuestion[];
  showAnswer?: boolean;
  startIndex?: number;
}

export function QuestionList({
  questions,
  showAnswer,
  startIndex = 1,
}: QuestionListProps) {
  return (
    <div className="space-y-4">
      {questions.map((question, idx) => (
        <QuestionRenderer
          key={question.id}
          question={question}
          index={startIndex + idx}
          showAnswer={showAnswer}
        />
      ))}
    </div>
  );
}
