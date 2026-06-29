'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Loader2, BookOpen } from 'lucide-react';
import { useExamConfig } from './hooks/useExamConfig';
import Step1GradeSubject from './Step1GradeSubject';
import Step2ExamType from './Step2ExamType';
import Step3Textbook from './Step3Textbook';
import Step4Structure from './Step4Structure';
import { ExamBlueprint, SubjectCode } from '@/lib/exam-config/types';
import { Subject } from '@/lib/types';
import { getCurriculumByGradeSubject } from '@/lib/curriculum/curriculum-data';

// Convert Subject (Vietnamese) to SubjectCode
function subjectToCode(subject?: Subject): SubjectCode | undefined {
  if (!subject) return undefined;
  switch (subject) {
    case 'Toán': return 'TOAN';
    case 'Ngữ văn': return 'NGU_VAN';
    case 'Tiếng Anh': return 'TIENG_ANH';
    default: return undefined;
  }
}

interface ExamConfigWizardProps {
  apiKey?: string;
  onGenerate: (blueprint: ExamBlueprint) => void;
  isLoading: boolean;
  // Preset values from LearningTab context
  presetGrade?: number;
  presetSubject?: Subject;
  presetTopicId?: string;
  presetTopicName?: string;
  presetLessonId?: string;
  presetLessonName?: string;
}

const STEP_TITLES = [
  'Lớp & Môn học',
  'Bộ sách (tùy chọn)',
  'Loại đề thi',
  'Xem trước & Tạo đề',
];

export default function ExamConfigWizard({
  apiKey,
  onGenerate,
  isLoading,
  presetGrade,
  presetSubject,
  presetTopicId,
  presetTopicName,
  presetLessonId,
  presetLessonName,
}: ExamConfigWizardProps) {
  const config = useExamConfig(
    presetGrade,
    subjectToCode(presetSubject),
    presetTopicId,
    presetTopicName,
    presetLessonId,
    presetLessonName
  );
  const [localError, setLocalError] = useState<string | null>(null);

  // Get available topics for KIEM_TRA_CHU_DE exam type
  const availableTopics = useMemo(() => {
    if (!config.state.grade || !config.state.subject) return [];
    // Convert SubjectCode to curriculum subject type
    const subject = config.state.subject as 'TOAN' | 'NGU_VAN' | 'TIENG_ANH';
    if (!['TOAN', 'NGU_VAN', 'TIENG_ANH'].includes(subject)) return [];
    return getCurriculumByGradeSubject(config.state.grade, subject);
  }, [config.state.grade, config.state.subject]);

  const handleGenerate = () => {
    setLocalError(null);

    if (!apiKey?.trim()) {
      setLocalError('Vui lòng nhập API Key trong phần Cài đặt (icon chìa khóa ở góc phải).');
      return;
    }

    if (!config.blueprint) {
      setLocalError('Vui lòng hoàn thành các bước cấu hình.');
      return;
    }

    onGenerate(config.blueprint);
  };

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Tạo Đề Thi AI</h2>
        <p className="text-sm text-slate-500 mt-1">
          Thiết lập cấu hình chi tiết cho đề thi
        </p>
      </div>

      {/* Preset context banner from LearningTab */}
      {presetTopicName && presetGrade && presetSubject && (
        <div className="mb-6 bg-indigo-50 border border-indigo-100 rounded-xl p-4">
          <div className="flex items-center gap-2 text-indigo-700">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">
              Luyện tập: {presetTopicName}
            </span>
          </div>
          <p className="text-xs text-indigo-600 mt-1 ml-6">
            Lớp {presetGrade} • {presetSubject}
          </p>
        </div>
      )}

      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {STEP_TITLES.map((title, index) => {
            const stepNum = index + 1;
            const isActive = config.currentStep === stepNum;
            const isCompleted = config.currentStep > stepNum;
            const isAccessible = stepNum <= config.currentStep;

            return (
              <div
                key={stepNum}
                className={`flex-1 ${index < STEP_TITLES.length - 1 ? 'pr-2' : ''}`}
              >
                <button
                  onClick={() => isAccessible && config.goToStep(stepNum)}
                  disabled={!isAccessible}
                  className={`w-full text-left ${isAccessible ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : isCompleted
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {isCompleted ? '✓' : stepNum}
                    </div>
                    <span
                      className={`text-xs font-medium hidden sm:inline ${
                        isActive ? 'text-blue-600' : isCompleted ? 'text-emerald-600' : 'text-slate-400'
                      }`}
                    >
                      {title}
                    </span>
                  </div>
                  <div
                    className={`h-1 rounded-full ${
                      isCompleted ? 'bg-emerald-500' : isActive ? 'bg-blue-600' : 'bg-slate-200'
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Error Message */}
      {localError && (
        <div className="mb-6 bg-rose-50 border border-rose-100 text-rose-700 text-sm p-4 rounded-2xl">
          {localError}
        </div>
      )}

      {/* Step Content */}
      <div className="min-h-[300px]">
        {config.currentStep === 1 && (
          <Step1GradeSubject
            grade={config.state.grade}
            subject={config.state.subject}
            educationLevel={config.educationLevel}
            availableSubjects={config.availableSubjects}
            onGradeChange={config.setGrade}
            onSubjectChange={config.setSubject}
          />
        )}

        {config.currentStep === 2 && (
          <Step3Textbook
            textbookSeries={config.state.textbookSeries}
            availableTextbooks={config.availableTextbooks}
            onTextbookChange={config.setTextbookSeries}
          />
        )}

        {config.currentStep === 3 && (
          <Step2ExamType
            examType={config.state.examType}
            province={config.state.province}
            availableExamTypes={config.availableExamTypes}
            requiresProvince={config.requiresProvince}
            onExamTypeChange={config.setExamType}
            onProvinceChange={config.setProvince}
            availableTopics={availableTopics}
            selectedTopicId={config.state.topicId}
            onTopicChange={config.setTopic}
            selectedLessonId={config.state.lessonId}
            onLessonChange={config.setLesson}
            textbookSeries={config.state.textbookSeries}
            subject={config.state.subject}
          />
        )}

        {config.currentStep === 4 && (
          <Step4Structure
            blueprint={config.blueprint}
            onBlueprintChange={config.setBlueprint}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
        <button
          onClick={config.goBack}
          disabled={!config.canGoBack || isLoading}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            config.canGoBack && !isLoading
              ? 'text-slate-600 hover:bg-slate-100'
              : 'text-slate-300 cursor-not-allowed'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Quay lại
        </button>

        {config.currentStep < config.totalSteps ? (
          <button
            onClick={config.goNext}
            disabled={!config.canGoNext || isLoading}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              config.canGoNext && !isLoading
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Tiếp tục
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleGenerate}
            disabled={!config.blueprint || isLoading}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium shadow-lg transition-all ${
              config.blueprint && !isLoading
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Đang tạo đề...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Tạo Đề Thi AI
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
