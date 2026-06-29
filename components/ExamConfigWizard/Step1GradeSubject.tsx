'use client';

import { BookOpen, GraduationCap } from 'lucide-react';
import { EducationLevel, SubjectCode, SubjectInfo } from '@/lib/exam-config/types';
import { EDUCATION_LEVELS } from '@/lib/exam-config/constants';

interface Step1Props {
  grade: number | null;
  subject: SubjectCode | null;
  educationLevel: EducationLevel | null;
  availableSubjects: SubjectInfo[];
  onGradeChange: (grade: number) => void;
  onSubjectChange: (subject: SubjectCode) => void;
}

export default function Step1GradeSubject({
  grade,
  subject,
  educationLevel,
  availableSubjects,
  onGradeChange,
  onSubjectChange,
}: Step1Props) {
  const levelInfo = educationLevel
    ? EDUCATION_LEVELS.find((l) => l.code === educationLevel)
    : null;

  return (
    <div className="space-y-6">
      {/* Grade Selection */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
          <GraduationCap className="w-4 h-4" />
          Chọn Lớp
        </label>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1.5 sm:gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => (
            <button
              key={g}
              onClick={() => onGradeChange(g)}
              className={`py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium border-2 transition-all ${
                grade === g
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-slate-200 hover:border-slate-300 text-slate-600 hover:bg-slate-50'
              }`}
            >
              Lớp {g}
            </button>
          ))}
        </div>

        {/* Education Level Badge */}
        {levelInfo && (
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-xs text-slate-600">
            <span>Cấp học:</span>
            <span className="font-medium text-slate-800">{levelInfo.nameVi}</span>
          </div>
        )}
      </div>

      {/* Subject Selection */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
          <BookOpen className="w-4 h-4" />
          Chọn Môn học
        </label>

        {availableSubjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {availableSubjects.map((s) => (
              <button
                key={s.code}
                onClick={() => onSubjectChange(s.code)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  subject === s.code
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <div
                      className={`font-medium ${
                        subject === s.code ? 'text-blue-700' : 'text-slate-700'
                      }`}
                    >
                      {s.nameVi}
                    </div>
                    <div className="text-xs text-slate-400">{s.name}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400 bg-slate-50 rounded-xl">
            Vui lòng chọn lớp trước
          </div>
        )}
      </div>

      {/* Summary */}
      {grade && subject && (
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
          <div className="flex items-center gap-2 text-emerald-700 text-sm">
            <span className="font-medium">Đã chọn:</span>
            <span>
              Lớp {grade} - {availableSubjects.find((s) => s.code === subject)?.nameVi}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
