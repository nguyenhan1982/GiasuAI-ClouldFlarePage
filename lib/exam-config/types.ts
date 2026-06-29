// ============ EDUCATION LEVELS ============
export type EducationLevel = 'TIEU_HOC' | 'THCS' | 'THPT';

export interface EducationLevelInfo {
  code: EducationLevel;
  name: string;
  nameVi: string;
  grades: number[];
}

// ============ SUBJECTS ============
export type SubjectCode = 'TOAN' | 'TIENG_VIET' | 'NGU_VAN' | 'TIENG_ANH';

export interface SubjectInfo {
  code: SubjectCode;
  name: string;
  nameVi: string;
  applicableLevels: EducationLevel[];
  icon?: string;
}

// ============ TEXTBOOK SERIES ============
export type TextbookSeriesCode =
  // Vietnamese textbooks (Toán, Ngữ văn/Tiếng Việt)
  | 'CANH_DIEU'
  | 'KET_NOI'
  | 'CHAN_TROI'
  // English textbooks
  | 'GLOBAL_SUCCESS'
  | 'I_LEARN_SMART'
  | 'FRIENDS_PLUS'
  | 'ENGLISH_DISCOVERY'
  | 'BRIGHT'
  | 'EXPLORE_ENGLISH';

export interface TextbookSeries {
  code: TextbookSeriesCode;
  name: string;
  nameVi: string;
  subjects: SubjectCode[];
  levels: EducationLevel[];
}

// ============ EXAM TYPES ============
export type ExamTypeCode =
  | 'KIEM_TRA_CHU_DE'      // Kiểm tra theo chủ đề (từ Tab Học bài)
  | 'KIEM_TRA_BAI_HOC'     // Kiểm tra theo bài học
  | 'KIEM_TRA_THUONG_XUYEN'
  | 'GIUA_KY_1'
  | 'CUOI_KY_1'
  | 'GIUA_KY_2'
  | 'CUOI_KY_2'
  | 'TUYEN_SINH_10'
  | 'TOT_NGHIEP_THPT'
  | 'HSG';

export interface ExamTypeInfo {
  code: ExamTypeCode;
  name: string;
  nameVi: string;
  applicableLevels: EducationLevel[];
  defaultDurationMinutes: number;
  requiresProvince?: boolean;
  description?: string;
}

// ============ DIFFICULTY FRAMEWORKS ============
export type DifficultyFrameworkCode =
  | 'TT27_3_MUC'        // Tiểu học: M1, M2, M3
  | 'TT22_4_MUC'        // THCS/THPT: Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao
  | 'BIET_HIEU_VANDUNG'; // Tốt nghiệp THPT từ 2025: Biết, Hiểu, Vận dụng

export interface DifficultyLevel {
  code: string;
  name: string;
  nameVi: string;
  percentage: number; // 0-100
}

export interface DifficultyFramework {
  code: DifficultyFrameworkCode;
  name: string;
  nameVi: string;
  levels: DifficultyLevel[];
  applicableLevels: EducationLevel[];
  applicableExamTypes?: ExamTypeCode[];
}

// ============ QUESTION FORMATS ============
export type QuestionFormatCode =
  | 'TN_4LC'           // Trắc nghiệm 4 lựa chọn
  | 'TN_DUNG_SAI'      // Trắc nghiệm Đúng/Sai (4 ý)
  | 'TN_TRA_LOI_NGAN'  // Trắc nghiệm trả lời ngắn
  | 'TU_LUAN'          // Tự luận (bài văn)
  | 'TU_LUAN_NGAN'     // Tự luận ngắn/đoạn
  | 'DOC_THANH_TIENG'  // Đọc thành tiếng (Tiếng Việt tiểu học)
  | 'LISTENING'        // Nghe (Tiếng Anh)
  | 'SPEAKING';        // Nói (Tiếng Anh)

export type ScoringMethod = 'binary' | 'partial' | 'rubric';

export interface QuestionFormat {
  code: QuestionFormatCode;
  name: string;
  nameVi: string;
  description: string;
  scoringMethod: ScoringMethod;
  subItems?: number; // e.g., 4 cho TN_DUNG_SAI
}

// ============ PROVINCES ============
export type Region = 'BAC' | 'TRUNG' | 'NAM';

export interface Province {
  code: string;
  name: string;
  region: Region;
}

// ============ KNOWLEDGE DOMAINS ============
export interface KnowledgeDomain {
  code: string;
  name: string;
  nameVi: string;
  weight: number; // 0-1 (tỉ lệ trong đề)
  requirementCodes?: string[]; // Yêu cầu cần đạt
}

// ============ EXAM SECTIONS ============
export interface ExamSection {
  id: string;
  name: string;
  nameVi: string;
  points: number;
  questionFormats: QuestionFormatCode[];
  questionCount?: number;
  description?: string;
  hasReadingPassage?: boolean;
}

// ============ EXAM BLUEPRINT ============
export interface ExamBlueprint {
  id: string;
  educationLevel: EducationLevel;
  grade: number;
  subject: SubjectCode;
  textbookSeries?: TextbookSeriesCode;
  examType: ExamTypeCode;
  province?: string; // Cho tuyển sinh 10

  // Topic info (cho KIEM_TRA_CHU_DE)
  topicId?: string;
  topicName?: string;
  topicYeuCauCanDat?: string[]; // Learning outcomes của chủ đề

  // Framework
  difficultyFramework: DifficultyFrameworkCode;
  difficultyDistribution: Record<string, number>; // level code -> percentage

  // Structure
  durationMinutes: number;
  totalPoints: number;
  sections: ExamSection[];

  // Content
  knowledgeDomains?: KnowledgeDomain[];

  // Metadata
  isCustom?: boolean;
  createdAt?: string;
}

// ============ EXTENDED QUESTION TYPE ============
export interface TrueFalseStatement {
  text: string;
  isCorrect: boolean;
}

export interface RubricLevel {
  level: string;
  criteria: string;
  points: number;
}

export interface ExtendedQuestion {
  id: string;
  format: QuestionFormatCode;
  sectionId: string;

  // Content
  text: string;
  readingPassageId?: string; // Reference to reading passage

  // For TN_4LC
  options?: string[];
  correctOptionIndex?: number;

  // For TN_DUNG_SAI
  statements?: TrueFalseStatement[];

  // For TN_TRA_LOI_NGAN
  correctAnswer?: string;
  acceptableAnswers?: string[];

  // For TU_LUAN
  sampleAnswer?: string;
  rubric?: RubricLevel[];

  // Metadata
  difficultyLevel: string;
  knowledgeDomain?: string;
  maxScore: number;
  explanation?: string;
}

// ============ READING PASSAGE ============
export interface ReadingPassage {
  id: string;
  content: string;
  sectionId: string;
  source?: string;
  wordCount?: number;
}

// ============ EXTENDED TEST TEMPLATE ============
export interface ExtendedTestTemplate {
  id: string;
  title: string;
  blueprint: ExamBlueprint;
  readingPassages?: ReadingPassage[];
  questions: ExtendedQuestion[];
  createdAt: string;
}

// ============ WIZARD STATE ============
export interface ExamConfigWizardState {
  currentStep: number;
  grade: number | null;
  educationLevel: EducationLevel | null;
  subject: SubjectCode | null;
  examType: ExamTypeCode | null;
  province: string | null;
  textbookSeries: TextbookSeriesCode | null;
  topicId: string | null;        // Chủ đề (cho KIEM_TRA_CHU_DE)
  topicName: string | null;      // Tên chủ đề
  lessonId: string | null;       // Bài học (cho KIEM_TRA_BAI_HOC)
  lessonName: string | null;     // Tên bài học
  blueprint: ExamBlueprint | null;
  isValid: boolean;
}
