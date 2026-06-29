// Types for curriculum data (based on CT GDPT 2018)

export type SubjectCode = 'TOAN' | 'NGU_VAN' | 'TIENG_ANH';
export type CapHoc = 'TIEU_HOC' | 'THCS' | 'THPT';
export type BookSet = 'KET_NOI' | 'CANH_DIEU' | 'CHAN_TROI' | 'GLOBAL_SUCCESS';
export type LearningMode = 'TIMELINE' | 'CHU_DE';
export type MucDo = 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'van_dung_cao';

// Core curriculum standard (same across all book sets)
export interface CurriculumStandard {
  id: string;
  mon: SubjectCode;
  lop: number;
  cap_hoc: CapHoc;
  mach: string;          // Main content strand
  chu_de: string;        // Topic name
  yeu_cau_can_dat: string[];  // Learning outcomes
  tien_quyet: string[];  // Prerequisite topic IDs
  muc_do_goi_y: MucDo[];  // Suggested cognitive levels
}

// Book-specific mapping (creates timeline)
export interface BookMapping {
  chu_de_chuan_id: string;
  bo_sach: BookSet;
  ten_bai: string;       // Lesson name in textbook
  so_tiet: number;       // Number of periods
  tuan: number;          // Week number (1-35)
  hoc_ky: 1 | 2;         // Semester
  thu_tu: number;        // Order within week
}

// User's learning session
export interface LearningSession {
  user_id: string;
  mon: SubjectCode;
  lop: number;
  bo_sach: BookSet;
  che_do: LearningMode;
  vi_tri_hien_tai: {
    tuan?: number;
    chu_de_id?: string;
  };
  tien_do: number;       // Progress 0-1
  chu_de_hoan_thanh: string[];  // Completed topic IDs
}

// Timeline week structure
export interface TimelineWeek {
  tuan: number;
  hoc_ky: 1 | 2;
  chu_de_ids: string[];
  ten_bai: string[];
  is_kiem_tra: boolean;
  loai_kiem_tra?: 'giua_ky_1' | 'cuoi_ky_1' | 'giua_ky_2' | 'cuoi_ky_2';
}

// Topic tree node for topic-based learning
export interface TopicNode {
  id: string;
  ten: string;
  mach: string;
  children?: TopicNode[];
  chu_de?: CurriculumStandard;
  completed?: boolean;
}

// Helper functions
export function getCapHoc(lop: number): CapHoc {
  if (lop <= 5) return 'TIEU_HOC';
  if (lop <= 9) return 'THCS';
  return 'THPT';
}

export function getSubjectName(code: SubjectCode): string {
  switch (code) {
    case 'TOAN': return 'Toán';
    case 'NGU_VAN': return 'Ngữ văn';
    case 'TIENG_ANH': return 'Tiếng Anh';
  }
}

export function getBookSetName(code: BookSet): string {
  switch (code) {
    case 'KET_NOI': return 'Kết nối tri thức';
    case 'CANH_DIEU': return 'Cánh Diều';
    case 'CHAN_TROI': return 'Chân trời sáng tạo';
    case 'GLOBAL_SUCCESS': return 'Global Success';
  }
}
