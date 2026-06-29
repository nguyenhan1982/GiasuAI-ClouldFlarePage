export type Subject = 'Toán' | 'Ngữ văn' | 'Tiếng Anh';

export type TestDifficulty = 'Dễ' | 'Trung bình' | 'Khó';

export type QuestionType = 'multiple_choice' | 'essay';

export type GeminiModel = 'gemini-3-flash-preview' | 'gemini-3.1-flash-lite' | 'gemini-3.5-flash';

export const GEMINI_MODELS: { id: GeminiModel; name: string }[] = [
  { id: 'gemini-3-flash-preview', name: 'Gemini 3 Flash' },
  { id: 'gemini-3.1-flash-lite', name: 'Gemini 3.1 Flash Lite' },
  { id: 'gemini-3.5-flash', name: 'Gemini 3.5 Flash' },
];

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[];
  correctOptionIndex?: number;
  explanation?: string;
  sampleAnswer?: string;
  maxScore: number;
}

export interface TestTemplate {
  id: string;
  title: string;
  grade: number;
  subject: Subject;
  difficulty: TestDifficulty;
  durationMinutes: number;
  readingPassage?: string;  // Đoạn văn đọc hiểu (cho Ngữ văn lớp 6)
  questions: Question[];
  createdAt: string;
}

export interface TestConfig {
  grade: number;
  subject: Subject;
  difficulty: TestDifficulty;
  numMc: number;
  numEssay: number;
  durationMinutes: number;
  apiKey?: string;
  model?: GeminiModel;
}

// ============ HỆ THỐNG CHẤM BÀI ============

export interface QuestionDetail {
  question: string;           // Tiêu đề câu (vd: "Câu 1")
  problemText: string;        // Nội dung đề bài (trích xuất từ ảnh)
  studentWorkText: string;    // Bài làm học sinh (trích xuất từ ảnh)
  studentAnswer: string;      // Đáp án học sinh đưa ra
  correctAnswer: string;      // Đáp án đúng
  isCorrect: boolean;         // Đúng/Sai
  points: number;             // Điểm câu này
  maxPoints: number;          // Điểm tối đa
  comment: string;            // Nhận xét/gợi ý cải thiện
}

export interface PracticeSuggestion {
  topic: string;
  sampleProblem: string;
}

export interface GradingSession {
  id: string;                           // Timestamp-based ID
  date: string;                         // Ngày làm bài (YYYY-MM-DD)
  grade: number;                        // Lớp
  subject: Subject;                     // Môn học
  score: number;                        // Điểm đạt được
  totalPoints: number;                  // Tổng điểm tối đa
  feedback: string;                     // Nhận xét tổng quát từ AI
  details: QuestionDetail[];            // Chi tiết từng câu
  weaknesses: string[];                 // Điểm yếu cần cải thiện
  strengths: string[];                  // Điểm mạnh
  practiceSuggestions: PracticeSuggestion[];  // Bài tập gợi ý
}

export interface StudentProfile {
  name: string;                         // Tên học sinh
  sessions: GradingSession[];           // Lịch sử các phiên chấm bài
  frequentMistakes: string[];           // Top 5 lỗi thường gặp
  overallProgress: string;              // Đánh giá tổng quát từ AI
}

export interface ReviewProblem {
  id: string;
  topic: string;                              // Chủ đề (vd: "Phân số")
  problemText: string;                        // Nội dung bài toán
  difficulty: TestDifficulty;                 // Độ khó
  solution?: string;                          // Lời giải (optional)
}

export interface GradingRequest {
  grade: number;
  subject: Subject;
  problemImages: string[];      // Base64 images của đề bài
  studentImages: string[];      // Base64 images của bài làm
  assignmentDate: string;       // YYYY-MM-DD
  studentName?: string;
  apiKey: string;
  model?: GeminiModel;
}

// ============ HỆ THỐNG GIA SƯ AI ============

export interface TutorMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface TutorPreference {
  preferredStyle: string;       // Phong cách giải thích học sinh thích
  savedSolutions: string[];     // Các lời giải đã lưu
  likedExplanations?: string[]; // Các cách giải thích học sinh thích (để AI tham khảo)
  updatedAt: string;
}

export interface TutorSession {
  id: string;
  grade: number;
  subject: Subject;
  problem: string;              // Đề bài hiện tại
  messages: TutorMessage[];     // Lịch sử chat
  createdAt: string;
}
