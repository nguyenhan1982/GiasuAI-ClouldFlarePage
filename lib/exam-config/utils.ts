import {
  EducationLevel,
  SubjectCode,
  SubjectInfo,
  TextbookSeries,
  ExamTypeInfo,
  ExamTypeCode,
  DifficultyFramework,
  ExamBlueprint,
  TextbookSeriesCode,
} from './types';
import {
  EDUCATION_LEVELS,
  SUBJECTS,
  TEXTBOOK_SERIES,
  EXAM_TYPES,
  DIFFICULTY_FRAMEWORKS,
  getDefaultBlueprint as getDefaultBlueprintFromConstants,
} from './constants';

/**
 * Get education level from grade number
 */
export function getEducationLevel(grade: number): EducationLevel {
  if (grade >= 1 && grade <= 5) return 'TIEU_HOC';
  if (grade >= 6 && grade <= 9) return 'THCS';
  return 'THPT';
}

/**
 * Get education level info from grade number
 */
export function getEducationLevelInfo(grade: number) {
  const level = getEducationLevel(grade);
  return EDUCATION_LEVELS.find((l) => l.code === level)!;
}

/**
 * Get applicable subjects for an education level
 */
export function getApplicableSubjects(level: EducationLevel): SubjectInfo[] {
  return SUBJECTS.filter((s) => s.applicableLevels.includes(level));
}

/**
 * Get subject info by code
 */
export function getSubjectInfo(code: SubjectCode): SubjectInfo | undefined {
  return SUBJECTS.find((s) => s.code === code);
}

/**
 * Get the correct subject code based on education level
 * (Tiếng Việt for elementary, Ngữ văn for secondary)
 */
export function getNormalizedSubjectCode(
  subject: SubjectCode,
  level: EducationLevel
): SubjectCode {
  if (subject === 'TIENG_VIET' && level !== 'TIEU_HOC') {
    return 'NGU_VAN';
  }
  if (subject === 'NGU_VAN' && level === 'TIEU_HOC') {
    return 'TIENG_VIET';
  }
  return subject;
}

/**
 * Check if a subject is applicable for a given grade
 */
export function isSubjectApplicable(
  subject: SubjectCode,
  grade: number
): boolean {
  const level = getEducationLevel(grade);
  const subjectInfo = getSubjectInfo(subject);
  return subjectInfo?.applicableLevels.includes(level) ?? false;
}

/**
 * Get applicable textbook series for a subject and education level
 */
export function getApplicableTextbooks(
  subject: SubjectCode,
  level: EducationLevel
): TextbookSeries[] {
  return TEXTBOOK_SERIES.filter(
    (t) => t.subjects.includes(subject) && t.levels.includes(level)
  );
}

/**
 * Get textbook series info by code
 */
export function getTextbookInfo(
  code: TextbookSeriesCode
): TextbookSeries | undefined {
  return TEXTBOOK_SERIES.find((t) => t.code === code);
}

/**
 * Get applicable exam types for an education level
 */
export function getApplicableExamTypes(
  level: EducationLevel
): ExamTypeInfo[] {
  return EXAM_TYPES.filter((e) => e.applicableLevels.includes(level));
}

/**
 * Get exam type info by code
 */
export function getExamTypeInfo(code: ExamTypeCode): ExamTypeInfo | undefined {
  return EXAM_TYPES.find((e) => e.code === code);
}

/**
 * Check if exam type requires province selection
 */
export function examTypeRequiresProvince(examType: ExamTypeCode): boolean {
  const info = getExamTypeInfo(examType);
  return info?.requiresProvince ?? false;
}

/**
 * Get appropriate difficulty framework for education level and exam type
 */
export function getDifficultyFramework(
  level: EducationLevel,
  examType: ExamTypeCode
): DifficultyFramework {
  // Special case: Tốt nghiệp THPT uses Biết-Hiểu-Vận dụng
  if (examType === 'TOT_NGHIEP_THPT') {
    return DIFFICULTY_FRAMEWORKS.find(
      (f) => f.code === 'BIET_HIEU_VANDUNG'
    )!;
  }

  // Tiểu học uses TT27 3 levels
  if (level === 'TIEU_HOC') {
    return DIFFICULTY_FRAMEWORKS.find((f) => f.code === 'TT27_3_MUC')!;
  }

  // THCS/THPT uses TT22 4 levels
  return DIFFICULTY_FRAMEWORKS.find((f) => f.code === 'TT22_4_MUC')!;
}

/**
 * Get default difficulty distribution as percentages
 */
export function getDefaultDifficultyDistribution(
  level: EducationLevel,
  examType: ExamTypeCode
): Record<string, number> {
  const framework = getDifficultyFramework(level, examType);
  const distribution: Record<string, number> = {};
  framework.levels.forEach((l) => {
    distribution[l.code] = l.percentage;
  });
  return distribution;
}

/**
 * Get default exam duration in minutes
 */
export function getDefaultDuration(
  examType: ExamTypeCode,
  subject?: SubjectCode
): number {
  const examInfo = getExamTypeInfo(examType);
  let duration = examInfo?.defaultDurationMinutes ?? 60;

  // Special cases for Tốt nghiệp THPT
  if (examType === 'TOT_NGHIEP_THPT' && subject) {
    if (subject === 'NGU_VAN') return 120;
    if (subject === 'TIENG_ANH') return 50;
    return 90;
  }

  return duration;
}

/**
 * Get default blueprint for a grade/subject/examType combination
 */
export function getDefaultBlueprint(
  grade: number,
  subject: SubjectCode,
  examType: ExamTypeCode
): ExamBlueprint {
  return getDefaultBlueprintFromConstants(grade, subject, examType);
}

/**
 * Validate blueprint completeness
 */
export function validateBlueprint(
  blueprint: Partial<ExamBlueprint>
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!blueprint.grade) errors.push('Chưa chọn lớp');
  if (!blueprint.subject) errors.push('Chưa chọn môn học');
  if (!blueprint.examType) errors.push('Chưa chọn loại đề');

  // Check province requirement
  if (blueprint.examType === 'TUYEN_SINH_10' && !blueprint.province) {
    errors.push('Cần chọn Tỉnh/Thành phố cho đề tuyển sinh 10');
  }

  // Check sections
  if (!blueprint.sections || blueprint.sections.length === 0) {
    errors.push('Cấu trúc đề không hợp lệ');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Convert old Subject type to new SubjectCode
 */
export function legacySubjectToCode(
  legacySubject: string,
  grade: number
): SubjectCode {
  const level = getEducationLevel(grade);

  switch (legacySubject) {
    case 'Toán':
      return 'TOAN';
    case 'Ngữ văn':
      return level === 'TIEU_HOC' ? 'TIENG_VIET' : 'NGU_VAN';
    case 'Tiếng Anh':
      return 'TIENG_ANH';
    default:
      return 'TOAN';
  }
}

/**
 * Convert SubjectCode to Vietnamese display name
 */
export function subjectCodeToVietnamese(code: SubjectCode): string {
  const info = getSubjectInfo(code);
  return info?.nameVi ?? code;
}

/**
 * Convert SubjectCode to legacy Subject type for backward compatibility
 */
export function subjectCodeToLegacy(code: SubjectCode): 'Toán' | 'Ngữ văn' | 'Tiếng Anh' {
  switch (code) {
    case 'TOAN':
      return 'Toán';
    case 'TIENG_VIET':
    case 'NGU_VAN':
      return 'Ngữ văn';
    case 'TIENG_ANH':
      return 'Tiếng Anh';
    default:
      return 'Toán';
  }
}

/**
 * Get total question count from blueprint
 */
export function getTotalQuestionCount(blueprint: ExamBlueprint): number {
  return blueprint.sections.reduce(
    (sum, section) => sum + (section.questionCount ?? 0),
    0
  );
}

/**
 * Format duration for display
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} phút`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) return `${hours} giờ`;
  return `${hours} giờ ${mins} phút`;
}

/**
 * Get exam type display name with grade context
 */
export function getExamTypeDisplayName(
  examType: ExamTypeCode,
  grade?: number
): string {
  const info = getExamTypeInfo(examType);
  if (!info) return examType;

  // Add context for special exam types
  if (examType === 'TUYEN_SINH_10') {
    return 'Thi tuyển sinh vào lớp 10';
  }
  if (examType === 'TOT_NGHIEP_THPT') {
    return 'Thi tốt nghiệp THPT';
  }

  return info.nameVi;
}
