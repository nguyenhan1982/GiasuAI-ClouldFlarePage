'use client';

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import {
  EducationLevel,
  SubjectCode,
  ExamTypeCode,
  TextbookSeriesCode,
  ExamBlueprint,
  ExamConfigWizardState,
} from '@/lib/exam-config/types';
import {
  getEducationLevel,
  getApplicableSubjects,
  getApplicableExamTypes,
  getApplicableTextbooks,
  getDefaultBlueprint,
  examTypeRequiresProvince,
  validateBlueprint,
} from '@/lib/exam-config/utils';
import { getCurriculumById } from '@/lib/curriculum/curriculum-data';
import { CANH_DIEU_TOAN_6_HK1_GUIDES } from '@/lib/curriculum/canh-dieu-toan6-hk1-guide';
import { CANH_DIEU_TOAN_6_HK2_GUIDES } from '@/lib/curriculum/canh-dieu-toan6-hk2-guide';
import { KET_NOI_TOAN_6_HK1_GUIDES } from '@/lib/curriculum/ket-noi-toan6-hk1-guide';
import { KET_NOI_TOAN_6_HK2_GUIDES } from '@/lib/curriculum/ket-noi-toan6-hk2-guide';
import { CHAN_TROI_TOAN_6_HK1_GUIDES } from '@/lib/curriculum/chan-troi-toan6-hk1-guide';
import { CHAN_TROI_TOAN_6_HK2_GUIDES } from '@/lib/curriculum/chan-troi-toan6-hk2-guide';
import { CANH_DIEU_NGU_VAN_6_HK1_GUIDES } from '@/lib/curriculum/canh-dieu-nguvan6-hk1-guide';
import { CANH_DIEU_NGU_VAN_6_HK2_GUIDES } from '@/lib/curriculum/canh-dieu-nguvan6-hk2-guide';
import { KET_NOI_NGU_VAN_6_HK1_GUIDES } from '@/lib/curriculum/ket-noi-nguvan6-hk1-guide';
import { KET_NOI_NGU_VAN_6_HK2_GUIDES } from '@/lib/curriculum/ket-noi-nguvan6-hk2-guide';
import { CHAN_TROI_NGU_VAN_6_HK1_GUIDES } from '@/lib/curriculum/chan-troi-nguvan6-hk1-guide';
import { CHAN_TROI_NGU_VAN_6_HK2_GUIDES } from '@/lib/curriculum/chan-troi-nguvan6-hk2-guide';
import { GLOBAL_SUCCESS_TIENG_ANH_6_HK1_GUIDES } from '@/lib/curriculum/global-success-tienganh6-hk1-guide';
import { GLOBAL_SUCCESS_TIENG_ANH_6_HK2_GUIDES } from '@/lib/curriculum/global-success-tienganh6-hk2-guide';

const ALL_LESSON_GUIDES = [
  ...CANH_DIEU_TOAN_6_HK1_GUIDES,
  ...CANH_DIEU_TOAN_6_HK2_GUIDES,
  ...KET_NOI_TOAN_6_HK1_GUIDES,
  ...KET_NOI_TOAN_6_HK2_GUIDES,
  ...CHAN_TROI_TOAN_6_HK1_GUIDES,
  ...CHAN_TROI_TOAN_6_HK2_GUIDES,
  ...CANH_DIEU_NGU_VAN_6_HK1_GUIDES,
  ...CANH_DIEU_NGU_VAN_6_HK2_GUIDES,
  ...KET_NOI_NGU_VAN_6_HK1_GUIDES,
  ...KET_NOI_NGU_VAN_6_HK2_GUIDES,
  ...CHAN_TROI_NGU_VAN_6_HK1_GUIDES,
  ...CHAN_TROI_NGU_VAN_6_HK2_GUIDES,
  ...GLOBAL_SUCCESS_TIENG_ANH_6_HK1_GUIDES,
  ...GLOBAL_SUCCESS_TIENG_ANH_6_HK2_GUIDES,
];

const TOTAL_STEPS = 4;

export interface UseExamConfigReturn {
  // State
  state: ExamConfigWizardState;
  currentStep: number;
  totalSteps: number;

  // Navigation
  canGoNext: boolean;
  canGoBack: boolean;
  goNext: () => void;
  goBack: () => void;
  goToStep: (step: number) => void;

  // Setters
  setGrade: (grade: number) => void;
  setSubject: (subject: SubjectCode) => void;
  setExamType: (examType: ExamTypeCode) => void;
  setProvince: (province: string | null) => void;
  setTextbookSeries: (series: TextbookSeriesCode | null) => void;
  setTopic: (topicId: string | null, topicName: string | null) => void;
  setLesson: (lessonId: string | null, lessonName: string | null) => void;
  setBlueprint: (blueprint: ExamBlueprint) => void;

  // Computed
  educationLevel: EducationLevel | null;
  availableSubjects: ReturnType<typeof getApplicableSubjects>;
  availableExamTypes: ReturnType<typeof getApplicableExamTypes>;
  availableTextbooks: ReturnType<typeof getApplicableTextbooks>;
  requiresProvince: boolean;
  requiresTopic: boolean;
  requiresLesson: boolean;
  blueprint: ExamBlueprint | null;

  // Actions
  reset: () => void;
  generateBlueprint: () => ExamBlueprint | null;
}

const initialState: ExamConfigWizardState = {
  currentStep: 1,
  grade: null,
  educationLevel: null,
  subject: null,
  examType: null,
  province: null,
  textbookSeries: null,
  topicId: null,
  topicName: null,
  lessonId: null,
  lessonName: null,
  blueprint: null,
  isValid: false,
};

export function useExamConfig(
  presetGrade?: number,
  presetSubject?: SubjectCode,
  presetTopicId?: string,
  presetTopicName?: string,
  presetLessonId?: string,
  presetLessonName?: string
): UseExamConfigReturn {
  // Create initial state with preset values if provided
  const [state, setState] = useState<ExamConfigWizardState>(() => {
    if (presetGrade && presetSubject) {
      const educationLevel = getEducationLevel(presetGrade);
      // If lesson is preset, auto-select KIEM_TRA_BAI_HOC exam type and skip to step 3
      if (presetLessonId && presetLessonName) {
        let detectedTextbook: TextbookSeriesCode = 'CANH_DIEU';
        if (presetLessonId.startsWith('KN_') || presetLessonId.startsWith('KN_NV6_')) {
          detectedTextbook = 'KET_NOI';
        } else if (presetLessonId.startsWith('CT_') || presetLessonId.startsWith('CT_NV6_')) {
          detectedTextbook = 'CHAN_TROI';
        } else if (presetLessonId.startsWith('GS_')) {
          detectedTextbook = 'GLOBAL_SUCCESS';
        }

        return {
          ...initialState,
          grade: presetGrade,
          educationLevel,
          subject: presetSubject,
          examType: 'KIEM_TRA_BAI_HOC',
          lessonId: presetLessonId,
          lessonName: presetLessonName,
          textbookSeries: detectedTextbook,
          currentStep: 3,
        };
      }
      // If topic is preset, auto-select KIEM_TRA_CHU_DE exam type and skip to step 3
      if (presetTopicId && presetTopicName) {
        return {
          ...initialState,
          grade: presetGrade,
          educationLevel,
          subject: presetSubject,
          examType: 'KIEM_TRA_CHU_DE',
          topicId: presetTopicId,
          topicName: presetTopicName,
          currentStep: 3, // Skip to step 3 (Exam type) since grade/subject/topic are preset
        };
      }
      return {
        ...initialState,
        grade: presetGrade,
        educationLevel,
        subject: presetSubject,
        currentStep: 2, // Skip to step 2 since grade & subject are preset
      };
    }
    return initialState;
  });

  // Track previous preset values to detect changes
  const prevPresetRef = useRef({ presetGrade, presetSubject, presetTopicId, presetTopicName, presetLessonId, presetLessonName });

  // Update state when preset values change (e.g., coming from LearningTab)
  useEffect(() => {
    const prev = prevPresetRef.current;
    const hasPresetChanged =
      prev.presetGrade !== presetGrade ||
      prev.presetSubject !== presetSubject ||
      prev.presetTopicId !== presetTopicId ||
      prev.presetTopicName !== presetTopicName ||
      prev.presetLessonId !== presetLessonId ||
      prev.presetLessonName !== presetLessonName;

    if (hasPresetChanged && presetGrade && presetSubject) {
      const educationLevel = getEducationLevel(presetGrade);

      // If lesson is preset, auto-select KIEM_TRA_BAI_HOC exam type
      if (presetLessonId && presetLessonName) {
        let detectedTextbook: TextbookSeriesCode = 'CANH_DIEU';
        if (presetLessonId.startsWith('KN_') || presetLessonId.startsWith('KN_NV6_')) {
          detectedTextbook = 'KET_NOI';
        } else if (presetLessonId.startsWith('CT_') || presetLessonId.startsWith('CT_NV6_')) {
          detectedTextbook = 'CHAN_TROI';
        } else if (presetLessonId.startsWith('GS_')) {
          detectedTextbook = 'GLOBAL_SUCCESS';
        }

        setState({
          ...initialState,
          grade: presetGrade,
          educationLevel,
          subject: presetSubject,
          examType: 'KIEM_TRA_BAI_HOC',
          lessonId: presetLessonId,
          lessonName: presetLessonName,
          textbookSeries: detectedTextbook,
          currentStep: 3,
        });
      } else if (presetTopicId && presetTopicName) {
        setState({
          ...initialState,
          grade: presetGrade,
          educationLevel,
          subject: presetSubject,
          examType: 'KIEM_TRA_CHU_DE',
          topicId: presetTopicId,
          topicName: presetTopicName,
          currentStep: 3, // Skip to step 3 (Exam type) since grade/subject/topic are preset
        });
      } else {
        setState({
          ...initialState,
          grade: presetGrade,
          educationLevel,
          subject: presetSubject,
          currentStep: 2, // Skip to step 2 since grade & subject are preset
        });
      }
    }

    prevPresetRef.current = { presetGrade, presetSubject, presetTopicId, presetTopicName, presetLessonId, presetLessonName };
  }, [presetGrade, presetSubject, presetTopicId, presetTopicName, presetLessonId, presetLessonName]);

  // Computed values
  const educationLevel = useMemo(() => {
    if (!state.grade) return null;
    return getEducationLevel(state.grade);
  }, [state.grade]);

  const availableSubjects = useMemo(() => {
    if (!educationLevel) return [];
    return getApplicableSubjects(educationLevel);
  }, [educationLevel]);

  const availableExamTypes = useMemo(() => {
    if (!educationLevel) return [];
    return getApplicableExamTypes(educationLevel);
  }, [educationLevel]);

  const availableTextbooks = useMemo(() => {
    if (!state.subject || !educationLevel) return [];
    const textbooks = getApplicableTextbooks(state.subject, educationLevel);
    if (state.subject === 'TIENG_ANH' && state.grade === 6) {
      return textbooks.filter(t => t.code === 'GLOBAL_SUCCESS');
    }
    return textbooks;
  }, [state.subject, educationLevel, state.grade]);

  const requiresProvince = useMemo(() => {
    if (!state.examType) return false;
    return examTypeRequiresProvince(state.examType);
  }, [state.examType]);

  const requiresTopic = useMemo(() => {
    return state.examType === 'KIEM_TRA_CHU_DE';
  }, [state.examType]);

  const requiresLesson = useMemo(() => {
    return state.examType === 'KIEM_TRA_BAI_HOC';
  }, [state.examType]);

  // Check if current step is complete
  // Step order: 1=Grade/Subject, 2=Textbook(optional), 3=ExamType, 4=Preview
  const isStepComplete = useCallback((step: number): boolean => {
    switch (step) {
      case 1:
        return state.grade !== null && state.subject !== null;
      case 2:
        // Textbook is optional, always can proceed
        return true;
      case 3:
        if (state.examType === null) return false;
        if (requiresProvince && !state.province) return false;
        if (requiresTopic && !state.topicId) return false;
        if (requiresLesson && !state.lessonId) return false;
        return true;
      case 4:
        return state.blueprint !== null;
      default:
        return false;
    }
  }, [state, requiresProvince, requiresTopic, requiresLesson]);

  const canGoNext = useMemo(() => {
    return state.currentStep < TOTAL_STEPS && isStepComplete(state.currentStep);
  }, [state.currentStep, isStepComplete]);

  const canGoBack = state.currentStep > 1;

  // Generate blueprint
  const generateBlueprint = useCallback((): ExamBlueprint | null => {
    if (!state.grade || !state.subject || !state.examType) return null;

    const blueprint = getDefaultBlueprint(
      state.grade,
      state.subject,
      state.examType
    );

    // Add optional fields
    if (state.textbookSeries) {
      blueprint.textbookSeries = state.textbookSeries;
    }
    if (state.province) {
      blueprint.province = state.province;
    }

    // Add topic info for KIEM_TRA_CHU_DE exam type
    if (state.examType === 'KIEM_TRA_CHU_DE' && state.topicId && state.topicName) {
      blueprint.topicId = state.topicId;
      blueprint.topicName = state.topicName;
      const topicData = getCurriculumById(state.topicId);
      if (topicData) {
        blueprint.topicYeuCauCanDat = topicData.yeu_cau_can_dat;
      }
    }

    // Add lesson info for KIEM_TRA_BAI_HOC exam type
    if (state.examType === 'KIEM_TRA_BAI_HOC' && state.lessonId && state.lessonName) {
      blueprint.topicId = state.lessonId;
      blueprint.topicName = state.lessonName;
      const lessonGuide = ALL_LESSON_GUIDES.find(l => l.bai_id === state.lessonId);
      if (lessonGuide) {
        blueprint.topicYeuCauCanDat = lessonGuide.muc_tieu;
      }
    }

    return blueprint;
  }, [state.grade, state.subject, state.examType, state.textbookSeries, state.province, state.topicId, state.topicName, state.lessonId, state.lessonName]);

  // Navigation
  const goNext = useCallback(() => {
    if (!canGoNext) return;

    setState((prev) => {
      const nextStep = prev.currentStep + 1;

      // Generate blueprint when entering step 4
      if (nextStep === 4 && prev.grade && prev.subject && prev.examType) {
        const blueprint = getDefaultBlueprint(
          prev.grade,
          prev.subject,
          prev.examType
        );
        if (prev.textbookSeries) {
          blueprint.textbookSeries = prev.textbookSeries;
        }
        if (prev.province) {
          blueprint.province = prev.province;
        }

        // Add topic info for KIEM_TRA_CHU_DE exam type
        if (prev.examType === 'KIEM_TRA_CHU_DE' && prev.topicId && prev.topicName) {
          blueprint.topicId = prev.topicId;
          blueprint.topicName = prev.topicName;
          // Get yeuCauCanDat from curriculum data
          const topicData = getCurriculumById(prev.topicId);
          if (topicData) {
            blueprint.topicYeuCauCanDat = topicData.yeu_cau_can_dat;
          }
        }

        // Add lesson info for KIEM_TRA_BAI_HOC exam type
        if (prev.examType === 'KIEM_TRA_BAI_HOC' && prev.lessonId && prev.lessonName) {
          blueprint.topicId = prev.lessonId;
          blueprint.topicName = prev.lessonName;
          const lessonGuide = ALL_LESSON_GUIDES.find(l => l.bai_id === prev.lessonId);
          if (lessonGuide) {
            blueprint.topicYeuCauCanDat = lessonGuide.muc_tieu;
          }
        }

        const validation = validateBlueprint(blueprint);

        return {
          ...prev,
          currentStep: nextStep,
          blueprint,
          isValid: validation.valid,
        };
      }

      return {
        ...prev,
        currentStep: nextStep,
      };
    });
  }, [canGoNext]);

  const goBack = useCallback(() => {
    if (!canGoBack) return;
    setState((prev) => ({
      ...prev,
      currentStep: prev.currentStep - 1,
    }));
  }, [canGoBack]);

  const goToStep = useCallback((step: number) => {
    if (step < 1 || step > TOTAL_STEPS) return;

    // Can only go to completed steps or the next incomplete step
    let canGo = true;
    for (let i = 1; i < step; i++) {
      if (!isStepComplete(i)) {
        canGo = false;
        break;
      }
    }

    if (canGo) {
      setState((prev) => ({
        ...prev,
        currentStep: step,
      }));
    }
  }, [isStepComplete]);

  // Setters
  const setGrade = useCallback((grade: number) => {
    const newLevel = getEducationLevel(grade);
    setState((prev) => {
      // Reset subject if not applicable to new level
      const subjects = getApplicableSubjects(newLevel);
      const subjectStillValid = prev.subject && subjects.some(s => s.code === prev.subject);

      return {
        ...prev,
        grade,
        educationLevel: newLevel,
        subject: subjectStillValid ? prev.subject : null,
        // Reset downstream selections
        examType: null,
        province: null,
        textbookSeries: null,
        blueprint: null,
        isValid: false,
      };
    });
  }, []);

  const setSubject = useCallback((subject: SubjectCode) => {
    setState((prev) => ({
      ...prev,
      subject,
      // Reset textbook when subject changes
      textbookSeries: null,
      blueprint: null,
      isValid: false,
    }));
  }, []);

  const setExamType = useCallback((examType: ExamTypeCode) => {
    setState((prev) => ({
      ...prev,
      examType,
      // Reset province if not needed
      province: examTypeRequiresProvince(examType) ? prev.province : null,
      blueprint: null,
      isValid: false,
    }));
  }, []);

  const setProvince = useCallback((province: string | null) => {
    setState((prev) => ({
      ...prev,
      province,
      blueprint: null,
      isValid: false,
    }));
  }, []);

  const setTextbookSeries = useCallback((series: TextbookSeriesCode | null) => {
    setState((prev) => ({
      ...prev,
      textbookSeries: series,
      blueprint: null,
      isValid: false,
    }));
  }, []);

  const setTopic = useCallback((topicId: string | null, topicName: string | null) => {
    setState((prev) => ({
      ...prev,
      topicId,
      topicName,
      blueprint: null,
      isValid: false,
    }));
  }, []);

  const setLesson = useCallback((lessonId: string | null, lessonName: string | null) => {
    setState((prev) => ({
      ...prev,
      lessonId,
      lessonName,
      blueprint: null,
      isValid: false,
    }));
  }, []);

  const setBlueprint = useCallback((blueprint: ExamBlueprint) => {
    setState((prev) => ({
      ...prev,
      blueprint,
      isValid: validateBlueprint(blueprint).valid,
    }));
  }, []);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    currentStep: state.currentStep,
    totalSteps: TOTAL_STEPS,

    canGoNext,
    canGoBack,
    goNext,
    goBack,
    goToStep,

    setGrade,
    setSubject,
    setExamType,
    setProvince,
    setTextbookSeries,
    setTopic,
    setLesson,
    setBlueprint,

    educationLevel,
    availableSubjects,
    availableExamTypes,
    availableTextbooks,
    requiresProvince,
    requiresTopic,
    requiresLesson,
    blueprint: state.blueprint,

    reset,
    generateBlueprint,
  };
}
