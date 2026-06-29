'use client';

import { useState, useCallback } from 'react';
import { FileText, Clock, Target, BookOpen, CheckCircle2, Settings2 } from 'lucide-react';
import { ExamBlueprint, ExamSection } from '@/lib/exam-config/types';
import {
  SUBJECTS,
  EXAM_TYPES,
  DIFFICULTY_FRAMEWORKS,
  QUESTION_FORMATS,
  TEXTBOOK_SERIES,
} from '@/lib/exam-config/constants';
import { formatDuration } from '@/lib/exam-config/utils';
import CustomStructureEditor from './CustomStructureEditor';

interface Step4Props {
  blueprint: ExamBlueprint | null;
  onBlueprintChange?: (blueprint: ExamBlueprint) => void;
}

type StructureMode = 'default' | 'custom';

export default function Step4Structure({ blueprint, onBlueprintChange }: Step4Props) {
  const [mode, setMode] = useState<StructureMode>('default');

  const handleSectionsChange = useCallback((sections: ExamSection[]) => {
    if (!blueprint || !onBlueprintChange) return;

    const totalPoints = sections.reduce((sum, s) => sum + s.points, 0);
    onBlueprintChange({
      ...blueprint,
      sections,
      totalPoints,
      isCustom: true,
    });
  }, [blueprint, onBlueprintChange]);

  if (!blueprint) {
    return (
      <div className="text-center py-12 text-slate-400">
        Vui lòng hoàn thành các bước trước để xem cấu trúc đề
      </div>
    );
  }

  const subjectInfo = SUBJECTS.find((s) => s.code === blueprint.subject);
  const examTypeInfo = EXAM_TYPES.find((e) => e.code === blueprint.examType);
  const difficultyFramework = DIFFICULTY_FRAMEWORKS.find(
    (f) => f.code === blueprint.difficultyFramework
  );
  const textbookInfo = blueprint.textbookSeries
    ? TEXTBOOK_SERIES.find((t) => t.code === blueprint.textbookSeries)
    : null;

  return (
    <div className="space-y-6">
      {/* Header Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-5">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Lớp {blueprint.grade}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">{subjectInfo?.icon}</span>
            <span className="font-medium">{subjectInfo?.nameVi}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            <span className="font-medium">{examTypeInfo?.nameVi}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-medium">{formatDuration(blueprint.durationMinutes)}</span>
          </div>
        </div>
        {textbookInfo && (
          <div className="mt-3 text-blue-100 text-sm">
            Bộ sách: {textbookInfo.nameVi}
          </div>
        )}
      </div>

      {/* Mode Toggle */}
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <Target className="w-4 h-4" />
          Cấu trúc đề thi
        </h3>

        <div className="flex bg-slate-100 rounded-lg p-1">
          <button
            onClick={() => setMode('default')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              mode === 'default'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Mặc định
          </button>
          <button
            onClick={() => setMode('custom')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1 ${
              mode === 'custom'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Settings2 className="w-3 h-3" />
            Tùy chỉnh
          </button>
        </div>
      </div>

      {/* Structure Content */}
      {mode === 'default' ? (
        // Default structure view
        <div>
          <div className="space-y-3">
            {blueprint.sections.map((section, index) => {
              const formats = section.questionFormats.map((f) =>
                QUESTION_FORMATS.find((qf) => qf.code === f)
              );

              return (
                <div
                  key={section.id}
                  className="bg-slate-50 border border-slate-100 rounded-xl p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-slate-800">
                          {section.nameVi}
                        </span>
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {section.points} điểm
                        </span>
                      </div>

                      {section.description && (
                        <p className="text-sm text-slate-500 mt-1">{section.description}</p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-2">
                        {formats.map(
                          (format, i) =>
                            format && (
                              <span
                                key={i}
                                className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-600 rounded-lg"
                              >
                                {format.nameVi}
                              </span>
                            )
                        )}
                      </div>
                    </div>

                    {section.questionCount && (
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-700">
                          {section.questionCount}
                        </div>
                        <div className="text-xs text-slate-400">câu</div>
                      </div>
                    )}
                  </div>

                  {section.hasReadingPassage && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">
                      <BookOpen className="w-3 h-3" />
                      <span>Có đoạn văn đọc hiểu</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Total */}
          <div className="mt-4 flex items-center justify-between p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
            <span className="font-medium text-emerald-800">Tổng điểm</span>
            <span className="text-2xl font-bold text-emerald-700">
              {blueprint.totalPoints} điểm
            </span>
          </div>
        </div>
      ) : (
        // Custom structure editor
        <CustomStructureEditor
          defaultSections={blueprint.sections}
          onSectionsChange={handleSectionsChange}
          context={{
            grade: blueprint.grade,
            subject: subjectInfo?.nameVi,
            examType: examTypeInfo?.nameVi,
          }}
        />
      )}

      {/* Difficulty Distribution */}
      {difficultyFramework && (
        <div>
          <h3 className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
            <CheckCircle2 className="w-4 h-4" />
            Phân bổ mức độ ({difficultyFramework.nameVi})
          </h3>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <div className="space-y-3">
              {difficultyFramework.levels.map((level) => {
                const percentage =
                  blueprint.difficultyDistribution[level.code] || level.percentage;

                return (
                  <div key={level.code}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-slate-600">{level.nameVi}</span>
                      <span className="font-medium text-slate-800">{percentage}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Ready Message */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
          <div>
            <p className="font-medium text-emerald-800">Sẵn sàng tạo đề!</p>
            <p className="text-sm text-emerald-600 mt-1">
              {mode === 'custom'
                ? 'Cấu trúc tùy chỉnh của bạn sẽ được sử dụng. Nhấn "Tạo Đề Thi AI" để tiếp tục.'
                : 'Nhấn nút "Tạo Đề Thi AI" để AI sinh đề theo cấu trúc trên.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
