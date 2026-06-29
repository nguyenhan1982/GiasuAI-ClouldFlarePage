import {
  EducationLevel,
  EducationLevelInfo,
  SubjectInfo,
  SubjectCode,
  TextbookSeries,
  ExamTypeInfo,
  ExamTypeCode,
  DifficultyFramework,
  QuestionFormat,
  Province,
  ExamSection,
  ExamBlueprint,
} from './types';

// ============ EDUCATION LEVELS ============
export const EDUCATION_LEVELS: EducationLevelInfo[] = [
  {
    code: 'TIEU_HOC',
    name: 'Elementary',
    nameVi: 'Tiểu học',
    grades: [1, 2, 3, 4, 5],
  },
  {
    code: 'THCS',
    name: 'Middle School',
    nameVi: 'THCS',
    grades: [6, 7, 8, 9],
  },
  {
    code: 'THPT',
    name: 'High School',
    nameVi: 'THPT',
    grades: [10, 11, 12],
  },
];

// ============ SUBJECTS ============
export const SUBJECTS: SubjectInfo[] = [
  {
    code: 'TOAN',
    name: 'Math',
    nameVi: 'Toán',
    applicableLevels: ['TIEU_HOC', 'THCS', 'THPT'],
    icon: '🔢',
  },
  {
    code: 'TIENG_VIET',
    name: 'Vietnamese',
    nameVi: 'Tiếng Việt',
    applicableLevels: ['TIEU_HOC'],
    icon: '📖',
  },
  {
    code: 'NGU_VAN',
    name: 'Literature',
    nameVi: 'Ngữ văn',
    applicableLevels: ['THCS', 'THPT'],
    icon: '📚',
  },
  {
    code: 'TIENG_ANH',
    name: 'English',
    nameVi: 'Tiếng Anh',
    applicableLevels: ['TIEU_HOC', 'THCS', 'THPT'],
    icon: '🌐',
  },
];

// ============ TEXTBOOK SERIES ============
export const TEXTBOOK_SERIES: TextbookSeries[] = [
  // Vietnamese textbooks
  {
    code: 'CANH_DIEU',
    name: 'Canh Dieu',
    nameVi: 'Cánh Diều',
    subjects: ['TOAN', 'TIENG_VIET', 'NGU_VAN'],
    levels: ['TIEU_HOC', 'THCS', 'THPT'],
  },
  {
    code: 'KET_NOI',
    name: 'Ket Noi Tri Thuc',
    nameVi: 'Kết nối tri thức với cuộc sống',
    subjects: ['TOAN', 'TIENG_VIET', 'NGU_VAN'],
    levels: ['TIEU_HOC', 'THCS', 'THPT'],
  },
  {
    code: 'CHAN_TROI',
    name: 'Chan Troi Sang Tao',
    nameVi: 'Chân trời sáng tạo',
    subjects: ['TOAN', 'TIENG_VIET', 'NGU_VAN'],
    levels: ['TIEU_HOC', 'THCS', 'THPT'],
  },
  // English textbooks
  {
    code: 'GLOBAL_SUCCESS',
    name: 'Global Success',
    nameVi: 'Global Success',
    subjects: ['TIENG_ANH'],
    levels: ['TIEU_HOC', 'THCS', 'THPT'],
  },
  {
    code: 'I_LEARN_SMART',
    name: 'i-Learn Smart World/Start',
    nameVi: 'i-Learn Smart World/Start',
    subjects: ['TIENG_ANH'],
    levels: ['TIEU_HOC', 'THCS', 'THPT'],
  },
  {
    code: 'FRIENDS_PLUS',
    name: 'Friends Plus',
    nameVi: 'Friends Plus',
    subjects: ['TIENG_ANH'],
    levels: ['THCS', 'THPT'],
  },
  {
    code: 'ENGLISH_DISCOVERY',
    name: 'English Discovery',
    nameVi: 'English Discovery',
    subjects: ['TIENG_ANH'],
    levels: ['THCS', 'THPT'],
  },
  {
    code: 'BRIGHT',
    name: 'Bright',
    nameVi: 'Bright',
    subjects: ['TIENG_ANH'],
    levels: ['THCS', 'THPT'],
  },
  {
    code: 'EXPLORE_ENGLISH',
    name: 'Explore English',
    nameVi: 'Explore English',
    subjects: ['TIENG_ANH'],
    levels: ['TIEU_HOC', 'THCS'],
  },
];

// ============ EXAM TYPES ============
export const EXAM_TYPES: ExamTypeInfo[] = [
  {
    code: 'KIEM_TRA_CHU_DE',
    name: 'Topic Test',
    nameVi: 'Kiểm tra theo chủ đề',
    applicableLevels: ['TIEU_HOC', 'THCS', 'THPT'],
    defaultDurationMinutes: 30,
    description: 'Kiểm tra theo chủ đề bài học (từ Tab Học bài)',
  },
  {
    code: 'KIEM_TRA_BAI_HOC',
    name: 'Lesson Test',
    nameVi: 'Kiểm tra theo bài học',
    applicableLevels: ['TIEU_HOC', 'THCS', 'THPT'],
    defaultDurationMinutes: 15,
    description: 'Kiểm tra kiến thức theo từng bài học cụ thể',
  },
  {
    code: 'KIEM_TRA_THUONG_XUYEN',
    name: 'Regular Test',
    nameVi: 'Kiểm tra thường xuyên',
    applicableLevels: ['TIEU_HOC', 'THCS', 'THPT'],
    defaultDurationMinutes: 15,
    description: 'Bài kiểm tra ngắn theo bài học',
  },
  {
    code: 'GIUA_KY_1',
    name: 'Midterm 1',
    nameVi: 'Giữa kỳ 1',
    applicableLevels: ['TIEU_HOC', 'THCS', 'THPT'],
    defaultDurationMinutes: 45,
    description: 'Kiểm tra giữa học kỳ 1',
  },
  {
    code: 'CUOI_KY_1',
    name: 'Final 1',
    nameVi: 'Cuối kỳ 1',
    applicableLevels: ['TIEU_HOC', 'THCS', 'THPT'],
    defaultDurationMinutes: 60,
    description: 'Kiểm tra cuối học kỳ 1',
  },
  {
    code: 'GIUA_KY_2',
    name: 'Midterm 2',
    nameVi: 'Giữa kỳ 2',
    applicableLevels: ['TIEU_HOC', 'THCS', 'THPT'],
    defaultDurationMinutes: 45,
    description: 'Kiểm tra giữa học kỳ 2',
  },
  {
    code: 'CUOI_KY_2',
    name: 'Final 2',
    nameVi: 'Cuối kỳ 2',
    applicableLevels: ['TIEU_HOC', 'THCS', 'THPT'],
    defaultDurationMinutes: 60,
    description: 'Kiểm tra cuối học kỳ 2 / Cuối năm',
  },
  {
    code: 'TUYEN_SINH_10',
    name: 'Grade 10 Entrance',
    nameVi: 'Thi tuyển sinh lớp 10',
    applicableLevels: ['THCS'],
    defaultDurationMinutes: 120,
    requiresProvince: true,
    description: 'Thi tuyển sinh vào lớp 10 THPT',
  },
  {
    code: 'TOT_NGHIEP_THPT',
    name: 'THPT Graduation',
    nameVi: 'Thi tốt nghiệp THPT',
    applicableLevels: ['THPT'],
    defaultDurationMinutes: 90,
    description: 'Thi tốt nghiệp THPT (format mới từ 2025)',
  },
  {
    code: 'HSG',
    name: 'Gifted Student',
    nameVi: 'Thi học sinh giỏi',
    applicableLevels: ['THCS', 'THPT'],
    defaultDurationMinutes: 150,
    description: 'Thi học sinh giỏi cấp trường/huyện/tỉnh',
  },
];

// ============ DIFFICULTY FRAMEWORKS ============
export const DIFFICULTY_FRAMEWORKS: DifficultyFramework[] = [
  {
    code: 'TT27_3_MUC',
    name: 'TT27 3 Levels',
    nameVi: 'Thông tư 27 (3 mức - Tiểu học)',
    levels: [
      {
        code: 'M1',
        name: 'Level 1',
        nameVi: 'Mức 1 - Nhận biết/Áp dụng trực tiếp',
        percentage: 50,
      },
      {
        code: 'M2',
        name: 'Level 2',
        nameVi: 'Mức 2 - Kết nối/Giải quyết vấn đề tương tự',
        percentage: 30,
      },
      {
        code: 'M3',
        name: 'Level 3',
        nameVi: 'Mức 3 - Vận dụng giải quyết vấn đề mới',
        percentage: 20,
      },
    ],
    applicableLevels: ['TIEU_HOC'],
  },
  {
    code: 'TT22_4_MUC',
    name: 'TT22 4 Levels',
    nameVi: 'Thông tư 22 (4 mức - THCS/THPT)',
    levels: [
      {
        code: 'NHAN_BIET',
        name: 'Recognition',
        nameVi: 'Nhận biết',
        percentage: 35,
      },
      {
        code: 'THONG_HIEU',
        name: 'Understanding',
        nameVi: 'Thông hiểu',
        percentage: 35,
      },
      {
        code: 'VAN_DUNG',
        name: 'Application',
        nameVi: 'Vận dụng',
        percentage: 20,
      },
      {
        code: 'VAN_DUNG_CAO',
        name: 'High Application',
        nameVi: 'Vận dụng cao',
        percentage: 10,
      },
    ],
    applicableLevels: ['THCS', 'THPT'],
  },
  {
    code: 'BIET_HIEU_VANDUNG',
    name: 'Know-Understand-Apply',
    nameVi: 'Biết - Hiểu - Vận dụng (TN THPT 2025+)',
    levels: [
      {
        code: 'BIET',
        name: 'Know',
        nameVi: 'Biết',
        percentage: 35,
      },
      {
        code: 'HIEU',
        name: 'Understand',
        nameVi: 'Hiểu',
        percentage: 35,
      },
      {
        code: 'VAN_DUNG',
        name: 'Apply',
        nameVi: 'Vận dụng',
        percentage: 30,
      },
    ],
    applicableLevels: ['THPT'],
    applicableExamTypes: ['TOT_NGHIEP_THPT'],
  },
];

// ============ QUESTION FORMATS ============
export const QUESTION_FORMATS: QuestionFormat[] = [
  {
    code: 'TN_4LC',
    name: 'Multiple Choice',
    nameVi: 'Trắc nghiệm 4 lựa chọn',
    description: '4 phương án, chọn 1 đáp án đúng',
    scoringMethod: 'binary',
  },
  {
    code: 'TN_DUNG_SAI',
    name: 'True/False',
    nameVi: 'Trắc nghiệm Đúng/Sai',
    description: 'Mỗi câu có 4 ý (a-d), mỗi ý chọn Đúng/Sai',
    scoringMethod: 'partial',
    subItems: 4,
  },
  {
    code: 'TN_TRA_LOI_NGAN',
    name: 'Short Answer',
    nameVi: 'Trắc nghiệm trả lời ngắn',
    description: 'Điền đáp số hoặc từ ngắn',
    scoringMethod: 'binary',
  },
  {
    code: 'TU_LUAN',
    name: 'Essay',
    nameVi: 'Tự luận',
    description: 'Viết bài/đoạn văn hoàn chỉnh',
    scoringMethod: 'rubric',
  },
  {
    code: 'TU_LUAN_NGAN',
    name: 'Short Essay',
    nameVi: 'Tự luận ngắn',
    description: 'Trả lời ngắn 1-2 câu',
    scoringMethod: 'rubric',
  },
  {
    code: 'DOC_THANH_TIENG',
    name: 'Read Aloud',
    nameVi: 'Đọc thành tiếng',
    description: 'Đọc đoạn văn thành tiếng (Tiếng Việt tiểu học)',
    scoringMethod: 'rubric',
  },
  {
    code: 'LISTENING',
    name: 'Listening',
    nameVi: 'Nghe',
    description: 'Nghe và trả lời câu hỏi',
    scoringMethod: 'binary',
  },
  {
    code: 'SPEAKING',
    name: 'Speaking',
    nameVi: 'Nói',
    description: 'Hỏi đáp hoặc mô tả',
    scoringMethod: 'rubric',
  },
];

// ============ PROVINCES (Major cities and some provinces) ============
export const PROVINCES: Province[] = [
  // Major cities
  { code: 'HN', name: 'Hà Nội', region: 'BAC' },
  { code: 'HCM', name: 'TP. Hồ Chí Minh', region: 'NAM' },
  { code: 'DN', name: 'Đà Nẵng', region: 'TRUNG' },
  { code: 'HP', name: 'Hải Phòng', region: 'BAC' },
  { code: 'CT', name: 'Cần Thơ', region: 'NAM' },
  // Northern provinces
  { code: 'BN', name: 'Bắc Ninh', region: 'BAC' },
  { code: 'HD', name: 'Hải Dương', region: 'BAC' },
  { code: 'HY', name: 'Hưng Yên', region: 'BAC' },
  { code: 'TB', name: 'Thái Bình', region: 'BAC' },
  { code: 'NB', name: 'Ninh Bình', region: 'BAC' },
  { code: 'ND', name: 'Nam Định', region: 'BAC' },
  { code: 'VP', name: 'Vĩnh Phúc', region: 'BAC' },
  { code: 'BG', name: 'Bắc Giang', region: 'BAC' },
  { code: 'QN', name: 'Quảng Ninh', region: 'BAC' },
  { code: 'TN', name: 'Thái Nguyên', region: 'BAC' },
  { code: 'PT', name: 'Phú Thọ', region: 'BAC' },
  { code: 'LS', name: 'Lạng Sơn', region: 'BAC' },
  { code: 'HB', name: 'Hòa Bình', region: 'BAC' },
  // Central provinces
  { code: 'TH', name: 'Thanh Hóa', region: 'TRUNG' },
  { code: 'NA', name: 'Nghệ An', region: 'TRUNG' },
  { code: 'HT', name: 'Hà Tĩnh', region: 'TRUNG' },
  { code: 'QB', name: 'Quảng Bình', region: 'TRUNG' },
  { code: 'QT', name: 'Quảng Trị', region: 'TRUNG' },
  { code: 'TTH', name: 'Thừa Thiên Huế', region: 'TRUNG' },
  { code: 'QNa', name: 'Quảng Nam', region: 'TRUNG' },
  { code: 'QNg', name: 'Quảng Ngãi', region: 'TRUNG' },
  { code: 'BD', name: 'Bình Định', region: 'TRUNG' },
  { code: 'PY', name: 'Phú Yên', region: 'TRUNG' },
  { code: 'KH', name: 'Khánh Hòa', region: 'TRUNG' },
  // Southern provinces
  { code: 'BDg', name: 'Bình Dương', region: 'NAM' },
  { code: 'DNa', name: 'Đồng Nai', region: 'NAM' },
  { code: 'BR', name: 'Bà Rịa - Vũng Tàu', region: 'NAM' },
  { code: 'LA', name: 'Long An', region: 'NAM' },
  { code: 'TG', name: 'Tiền Giang', region: 'NAM' },
  { code: 'BT', name: 'Bến Tre', region: 'NAM' },
  { code: 'VL', name: 'Vĩnh Long', region: 'NAM' },
  { code: 'AG', name: 'An Giang', region: 'NAM' },
  { code: 'DT', name: 'Đồng Tháp', region: 'NAM' },
  { code: 'KG', name: 'Kiên Giang', region: 'NAM' },
  { code: 'HG', name: 'Hậu Giang', region: 'NAM' },
  { code: 'ST', name: 'Sóc Trăng', region: 'NAM' },
  { code: 'BL', name: 'Bạc Liêu', region: 'NAM' },
  { code: 'CM', name: 'Cà Mau', region: 'NAM' },
  // Highland provinces
  { code: 'DL', name: 'Đắk Lắk', region: 'TRUNG' },
  { code: 'GL', name: 'Gia Lai', region: 'TRUNG' },
  { code: 'KT', name: 'Kon Tum', region: 'TRUNG' },
  { code: 'LĐ', name: 'Lâm Đồng', region: 'TRUNG' },
];

// ============ DEFAULT EXAM SECTIONS BY SUBJECT/LEVEL/TYPE ============

// Kiểm tra theo chủ đề (ngắn gọn, tập trung)
const KIEM_TRA_CHU_DE_SECTIONS: ExamSection[] = [
  {
    id: 'tn',
    name: 'Multiple Choice',
    nameVi: 'Phần Trắc nghiệm',
    points: 5,
    questionFormats: ['TN_4LC'],
    questionCount: 5,
    description: '5 câu × 1 điểm',
  },
  {
    id: 'tl',
    name: 'Essay',
    nameVi: 'Phần Tự luận',
    points: 5,
    questionFormats: ['TU_LUAN_NGAN', 'TU_LUAN'],
    questionCount: 2,
    description: '2 câu tự luận',
  },
];

// Toán Tiểu học - Cuối kỳ
const TOAN_TIEU_HOC_CUOI_KY: ExamSection[] = [
  {
    id: 'tn',
    name: 'Multiple Choice',
    nameVi: 'Phần Trắc nghiệm',
    points: 3,
    questionFormats: ['TN_4LC'],
    questionCount: 6,
    description: '6 câu × 0.5 điểm',
  },
  {
    id: 'tl',
    name: 'Essay',
    nameVi: 'Phần Tự luận',
    points: 7,
    questionFormats: ['TU_LUAN_NGAN', 'TU_LUAN'],
    questionCount: 4,
    description: 'Đặt tính, giải toán có lời văn',
  },
];

// Toán THCS - Cuối kỳ
const TOAN_THCS_CUOI_KY: ExamSection[] = [
  {
    id: 'tn',
    name: 'Multiple Choice',
    nameVi: 'Phần Trắc nghiệm',
    points: 3,
    questionFormats: ['TN_4LC'],
    questionCount: 12,
    description: '12 câu × 0.25 điểm',
  },
  {
    id: 'tl',
    name: 'Essay',
    nameVi: 'Phần Tự luận',
    points: 7,
    questionFormats: ['TU_LUAN'],
    questionCount: 5,
    description: 'Rút gọn, giải PT, hình học...',
  },
];

// Toán THPT - Tốt nghiệp (format 2025+)
const TOAN_TOT_NGHIEP_THPT: ExamSection[] = [
  {
    id: 'tn_4lc',
    name: 'Multiple Choice',
    nameVi: 'Phần I - TN nhiều lựa chọn',
    points: 3,
    questionFormats: ['TN_4LC'],
    questionCount: 12,
    description: '12 câu × 0.25 điểm',
  },
  {
    id: 'tn_ds',
    name: 'True/False',
    nameVi: 'Phần II - TN Đúng/Sai',
    points: 4,
    questionFormats: ['TN_DUNG_SAI'],
    questionCount: 4,
    description: '4 câu × 4 ý (điểm lũy tiến)',
  },
  {
    id: 'tn_ngan',
    name: 'Short Answer',
    nameVi: 'Phần III - TN trả lời ngắn',
    points: 3,
    questionFormats: ['TN_TRA_LOI_NGAN'],
    questionCount: 6,
    description: '6 câu × 0.5 điểm',
  },
];

// Ngữ văn THCS - Cuối kỳ
const NGU_VAN_THCS_CUOI_KY: ExamSection[] = [
  {
    id: 'doc_hieu',
    name: 'Reading',
    nameVi: 'Phần Đọc hiểu',
    points: 4,
    questionFormats: ['TU_LUAN_NGAN'],
    questionCount: 5,
    hasReadingPassage: true,
    description: 'Ngữ liệu ngoài SGK',
  },
  {
    id: 'viet',
    name: 'Writing',
    nameVi: 'Phần Viết',
    points: 6,
    questionFormats: ['TU_LUAN'],
    questionCount: 2,
    description: 'Nghị luận văn học/xã hội',
  },
];

// Ngữ văn THPT - Tốt nghiệp
const NGU_VAN_TOT_NGHIEP_THPT: ExamSection[] = [
  {
    id: 'doc_hieu',
    name: 'Reading',
    nameVi: 'Phần Đọc hiểu',
    points: 4,
    questionFormats: ['TU_LUAN_NGAN'],
    questionCount: 5,
    hasReadingPassage: true,
    description: 'Ngữ liệu ngoài SGK, 5 câu theo mức Biết→Vận dụng',
  },
  {
    id: 'viet',
    name: 'Writing',
    nameVi: 'Phần Viết',
    points: 6,
    questionFormats: ['TU_LUAN'],
    questionCount: 2,
    description: 'Đoạn nghị luận (2đ) + Bài nghị luận (4đ)',
  },
];

// Tiếng Anh THCS - Cuối kỳ
const TIENG_ANH_THCS_CUOI_KY: ExamSection[] = [
  {
    id: 'listening',
    name: 'Listening',
    nameVi: 'Phần Nghe',
    points: 2,
    questionFormats: ['LISTENING', 'TN_4LC'],
    questionCount: 8,
    description: 'Nghe chọn đáp án, điền thông tin',
  },
  {
    id: 'language',
    name: 'Language',
    nameVi: 'Phần Ngôn ngữ',
    points: 2.5,
    questionFormats: ['TN_4LC'],
    questionCount: 10,
    description: 'Ngữ âm, từ vựng, ngữ pháp',
  },
  {
    id: 'reading',
    name: 'Reading',
    nameVi: 'Phần Đọc hiểu',
    points: 2.5,
    questionFormats: ['TN_4LC', 'TU_LUAN_NGAN'],
    questionCount: 10,
    hasReadingPassage: true,
    description: 'Đọc hiểu đoạn, điền từ',
  },
  {
    id: 'writing',
    name: 'Writing',
    nameVi: 'Phần Viết',
    points: 3,
    questionFormats: ['TU_LUAN_NGAN', 'TU_LUAN'],
    questionCount: 4,
    description: 'Sắp xếp câu, viết lại câu, viết đoạn',
  },
];

// Tiếng Anh THPT - Tốt nghiệp (format 2025+)
const TIENG_ANH_TOT_NGHIEP_THPT: ExamSection[] = [
  {
    id: 'reading_1',
    name: 'Gap-fill Reading',
    nameVi: 'Phần I - Đọc điền thông tin',
    points: 2,
    questionFormats: ['TN_4LC'],
    questionCount: 8,
    description: 'Đọc điền từ/cụm từ vào thông báo, quảng cáo',
  },
  {
    id: 'arrange',
    name: 'Sentence Arrangement',
    nameVi: 'Phần II - Sắp xếp câu',
    points: 2,
    questionFormats: ['TN_4LC'],
    questionCount: 8,
    description: 'Sắp xếp câu thành đoạn hội thoại/thư',
  },
  {
    id: 'gap_fill',
    name: 'Clause Gap-fill',
    nameVi: 'Phần III - Điền mệnh đề/câu',
    points: 2,
    questionFormats: ['TN_4LC'],
    questionCount: 8,
    hasReadingPassage: true,
    description: 'Điền câu vào đoạn văn',
  },
  {
    id: 'reading_2',
    name: 'Reading Comprehension',
    nameVi: 'Phần IV - Đọc hiểu',
    points: 4,
    questionFormats: ['TN_4LC'],
    questionCount: 16,
    hasReadingPassage: true,
    description: '2 đoạn văn × 8 câu, có câu suy luận',
  },
];

// Tiếng Việt Tiểu học - Cuối kỳ
const TIENG_VIET_TIEU_HOC_CUOI_KY: ExamSection[] = [
  {
    id: 'doc_thanh_tieng',
    name: 'Read Aloud',
    nameVi: 'Đọc thành tiếng',
    points: 3,
    questionFormats: ['DOC_THANH_TIENG'],
    questionCount: 1,
    description: 'Đọc đoạn văn + trả lời 1 câu hỏi',
  },
  {
    id: 'doc_hieu',
    name: 'Reading',
    nameVi: 'Đọc hiểu',
    points: 7,
    questionFormats: ['TN_4LC', 'TU_LUAN_NGAN'],
    questionCount: 6,
    hasReadingPassage: true,
    description: 'Văn bản ngoài SGK',
  },
];

// ============ DEFAULT BLUEPRINT FACTORY ============
export function getDefaultBlueprint(
  grade: number,
  subject: SubjectCode,
  examType: ExamTypeCode
): ExamBlueprint {
  const educationLevel: EducationLevel =
    grade <= 5 ? 'TIEU_HOC' : grade <= 9 ? 'THCS' : 'THPT';

  // Get appropriate difficulty framework
  let difficultyFramework: DifficultyFramework;
  if (examType === 'TOT_NGHIEP_THPT') {
    difficultyFramework = DIFFICULTY_FRAMEWORKS.find(
      (f) => f.code === 'BIET_HIEU_VANDUNG'
    )!;
  } else if (educationLevel === 'TIEU_HOC') {
    difficultyFramework = DIFFICULTY_FRAMEWORKS.find(
      (f) => f.code === 'TT27_3_MUC'
    )!;
  } else {
    difficultyFramework = DIFFICULTY_FRAMEWORKS.find(
      (f) => f.code === 'TT22_4_MUC'
    )!;
  }

  // Create difficulty distribution from framework
  const difficultyDistribution: Record<string, number> = {};
  difficultyFramework.levels.forEach((level) => {
    difficultyDistribution[level.code] = level.percentage;
  });

  // Get exam type info for duration
  const examTypeInfo = EXAM_TYPES.find((e) => e.code === examType)!;
  let durationMinutes = examTypeInfo.defaultDurationMinutes;

  // Adjust duration for specific cases
  if (examType === 'TOT_NGHIEP_THPT') {
    if (subject === 'NGU_VAN') durationMinutes = 120;
    else if (subject === 'TIENG_ANH') durationMinutes = 50;
    else durationMinutes = 90;
  } else if (examType === 'TUYEN_SINH_10') {
    durationMinutes = 120;
  }

  // Get sections based on subject/level/type
  let sections: ExamSection[];

  if (examType === 'KIEM_TRA_CHU_DE' || examType === 'KIEM_TRA_BAI_HOC') {
    // Kiểm tra theo chủ đề / bài học: sử dụng cấu trúc ngắn gọn
    sections = KIEM_TRA_CHU_DE_SECTIONS;
  } else if (examType === 'TOT_NGHIEP_THPT') {
    if (subject === 'TOAN') sections = TOAN_TOT_NGHIEP_THPT;
    else if (subject === 'NGU_VAN') sections = NGU_VAN_TOT_NGHIEP_THPT;
    else if (subject === 'TIENG_ANH') sections = TIENG_ANH_TOT_NGHIEP_THPT;
    else sections = TOAN_TOT_NGHIEP_THPT;
  } else if (subject === 'TOAN') {
    if (educationLevel === 'TIEU_HOC') sections = TOAN_TIEU_HOC_CUOI_KY;
    else sections = TOAN_THCS_CUOI_KY;
  } else if (subject === 'NGU_VAN' || subject === 'TIENG_VIET') {
    if (educationLevel === 'TIEU_HOC') sections = TIENG_VIET_TIEU_HOC_CUOI_KY;
    else sections = NGU_VAN_THCS_CUOI_KY;
  } else if (subject === 'TIENG_ANH') {
    // TOT_NGHIEP_THPT already handled in the first branch above
    sections = TIENG_ANH_THCS_CUOI_KY;
  } else {
    sections = TOAN_THCS_CUOI_KY; // Default fallback
  }

  // Calculate total points
  const totalPoints = sections.reduce((sum, s) => sum + s.points, 0);

  return {
    id: `blueprint_${Date.now()}`,
    educationLevel,
    grade,
    subject,
    examType,
    difficultyFramework: difficultyFramework.code,
    difficultyDistribution,
    durationMinutes,
    totalPoints,
    sections,
    createdAt: new Date().toISOString(),
  };
}

// ============ HELPER: Get duration adjustment for special exams ============
export function getSpecialDuration(
  examType: ExamTypeCode,
  subject: SubjectCode
): number | null {
  if (examType === 'TOT_NGHIEP_THPT') {
    if (subject === 'NGU_VAN') return 120;
    if (subject === 'TIENG_ANH') return 50;
    return 90;
  }
  if (examType === 'TUYEN_SINH_10') {
    return 120;
  }
  return null;
}
