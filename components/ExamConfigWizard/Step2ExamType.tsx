'use client';

import { FileText, MapPin, Clock, BookOpen } from 'lucide-react';
import { ExamTypeCode, ExamTypeInfo } from '@/lib/exam-config/types';
import { PROVINCES } from '@/lib/exam-config/constants';
import { CurriculumStandard } from '@/lib/curriculum/types';
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
import { TextbookSeriesCode, SubjectCode } from '@/lib/exam-config/types';

const ALL_LESSONS = [
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

const CHAPTER_NAMES: Record<number, string> = {
  1: 'Chương I: Số tự nhiên / Tập hợp các số tự nhiên',
  2: 'Chương II: Số nguyên / Tính chất chia hết',
  3: 'Chương III: Hình học trực quan / Số nguyên',
  4: 'Chương IV: Một số yếu tố thống kê và xác suất / Một số hình phẳng trong thực tiễn',
  5: 'Chương V: Phân số và số thập phân / Tính đối xứng của hình phẳng',
  6: 'Chương VI: Hình học phẳng / Phân số',
  7: 'Chương VII: Số thập phân',
  8: 'Chương VIII: Những hình hình học cơ bản',
  9: 'Chương IX: Dữ liệu và xác suất thực nghiệm',
};

const NGUVAN_SEMESTER_NAMES: Record<number, string> = {
  1: 'Học kỳ 1',
  2: 'Học kỳ 2',
};

const ENGLISH_UNIT_NAMES: Record<number, string> = {
  1: 'Unit 1: My New School',
  2: 'Unit 2: My Home',
  3: 'Unit 3: My Friends',
  4: 'Unit 4: My Neighbourhood',
  5: 'Unit 5: Natural Wonders of Viet Nam',
  6: 'Unit 6: Our Tet Holiday',
  7: 'Unit 7: Television',
  8: 'Unit 8: Sports and Games',
  9: 'Unit 9: Cities of the World',
  10: 'Unit 10: Our Houses in the Future',
  11: 'Unit 11: Our Greener World',
  12: 'Unit 12: Robots',
};

interface Step2Props {
  examType: ExamTypeCode | null;
  province: string | null;
  availableExamTypes: ExamTypeInfo[];
  requiresProvince: boolean;
  onExamTypeChange: (examType: ExamTypeCode) => void;
  onProvinceChange: (province: string | null) => void;
  // Topic selection for KIEM_TRA_CHU_DE
  availableTopics?: CurriculumStandard[];
  selectedTopicId?: string | null;
  onTopicChange?: (topicId: string | null, topicName: string | null) => void;
  // Lesson selection for KIEM_TRA_BAI_HOC
  selectedLessonId?: string | null;
  onLessonChange?: (lessonId: string | null, lessonName: string | null) => void;
  // Textbook series to filter lessons
  textbookSeries?: TextbookSeriesCode | null;
  // Subject for filtering lessons (Math vs Ngữ Văn)
  subject?: SubjectCode | null;
}

const EXAM_TYPE_ICONS: Record<ExamTypeCode, string> = {
  KIEM_TRA_CHU_DE: '📚',
  KIEM_TRA_BAI_HOC: '📖',
  KIEM_TRA_THUONG_XUYEN: '📝',
  GIUA_KY_1: '📋',
  CUOI_KY_1: '📄',
  GIUA_KY_2: '📋',
  CUOI_KY_2: '📄',
  TUYEN_SINH_10: '🎯',
  TOT_NGHIEP_THPT: '🎓',
  HSG: '🏆',
};

export default function Step2ExamType({
  examType,
  province,
  availableExamTypes,
  requiresProvince,
  onExamTypeChange,
  onProvinceChange,
  availableTopics = [],
  selectedTopicId,
  onTopicChange,
  selectedLessonId,
  onLessonChange,
  textbookSeries,
  subject,
}: Step2Props) {
  // Group topics by mach (content strand)
  const topicsByMach = availableTopics.reduce((acc, topic) => {
    if (!acc[topic.mach]) acc[topic.mach] = [];
    acc[topic.mach].push(topic);
    return acc;
  }, {} as Record<string, CurriculumStandard[]>);

  // Filter lessons based on textbookSeries and subject
  const lessons = (() => {
    if (subject === 'TIENG_ANH') {
      return [...GLOBAL_SUCCESS_TIENG_ANH_6_HK1_GUIDES, ...GLOBAL_SUCCESS_TIENG_ANH_6_HK2_GUIDES];
    }
    if (subject === 'NGU_VAN') {
      if (textbookSeries === 'KET_NOI') return [...KET_NOI_NGU_VAN_6_HK1_GUIDES, ...KET_NOI_NGU_VAN_6_HK2_GUIDES];
      if (textbookSeries === 'CHAN_TROI') return [...CHAN_TROI_NGU_VAN_6_HK1_GUIDES, ...CHAN_TROI_NGU_VAN_6_HK2_GUIDES];
      return [...CANH_DIEU_NGU_VAN_6_HK1_GUIDES, ...CANH_DIEU_NGU_VAN_6_HK2_GUIDES];
    }
    // Default: Math
    if (textbookSeries === 'KET_NOI') return [...KET_NOI_TOAN_6_HK1_GUIDES, ...KET_NOI_TOAN_6_HK2_GUIDES];
    if (textbookSeries === 'CHAN_TROI') return [...CHAN_TROI_TOAN_6_HK1_GUIDES, ...CHAN_TROI_TOAN_6_HK2_GUIDES];
    return [...CANH_DIEU_TOAN_6_HK1_GUIDES, ...CANH_DIEU_TOAN_6_HK2_GUIDES];
  })();

  // Group lessons by chuong
  const lessonsByChuong = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.chuong]) acc[lesson.chuong] = [];
    acc[lesson.chuong].push(lesson);
    return acc;
  }, {} as Record<number, typeof lessons>);

  const handleTopicSelect = (topicId: string) => {
    const topic = availableTopics.find(t => t.id === topicId);
    onTopicChange?.(topicId, topic?.chu_de || null);
  };

  const handleLessonSelect = (lessonId: string) => {
    const lesson = ALL_LESSONS.find(l => l.bai_id === lessonId);
    onLessonChange?.(lessonId, lesson?.tieu_de || null);
  };
  // Group provinces by region
  const provincesByRegion = PROVINCES.reduce((acc, p) => {
    if (!acc[p.region]) acc[p.region] = [];
    acc[p.region].push(p);
    return acc;
  }, {} as Record<string, typeof PROVINCES>);

  const regionNames = {
    BAC: 'Miền Bắc',
    TRUNG: 'Miền Trung',
    NAM: 'Miền Nam',
  };

  return (
    <div className="space-y-6">
      {/* Exam Type Selection */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
          <FileText className="w-4 h-4" />
          Chọn Loại đề
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {availableExamTypes.map((type) => (
            <button
              key={type.code}
              onClick={() => onExamTypeChange(type.code)}
              className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 text-left transition-all ${
                examType === type.code
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">{EXAM_TYPE_ICONS[type.code]}</span>
                <div className="flex-1 min-w-0">
                  <div
                    className={`font-medium text-sm sm:text-base ${
                      examType === type.code ? 'text-blue-700' : 'text-slate-700'
                    }`}
                  >
                    {type.nameVi}
                  </div>
                  {type.description && (
                    <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 truncate">{type.description}</div>
                  )}
                  <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-500 mt-1">
                    <Clock className="w-3 h-3" />
                    {type.defaultDurationMinutes} phút
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Province Selection (for Tuyển sinh 10) */}
      {requiresProvince && (
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
            <MapPin className="w-4 h-4" />
            Chọn Tỉnh/Thành phố
            <span className="text-rose-500">*</span>
          </label>

          <p className="text-xs text-slate-500 mb-3">
            Cấu trúc đề tuyển sinh lớp 10 có thể khác nhau theo địa phương
          </p>

          <select
            value={province || ''}
            onChange={(e) => onProvinceChange(e.target.value || null)}
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Chọn Tỉnh/Thành phố --</option>
            {Object.entries(provincesByRegion).map(([region, provinces]) => (
              <optgroup key={region} label={regionNames[region as keyof typeof regionNames]}>
                {provinces.map((p) => (
                  <option key={p.code} value={p.code}>
                    {p.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      )}

      {/* Topic Selection (for Kiểm tra theo chủ đề) */}
      {examType === 'KIEM_TRA_CHU_DE' && availableTopics.length > 0 && (
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
            <BookOpen className="w-4 h-4" />
            Chọn Chủ đề
            <span className="text-rose-500">*</span>
          </label>

          <p className="text-xs text-slate-500 mb-3">
            Chọn chủ đề bạn muốn kiểm tra kiến thức
          </p>

          <select
            value={selectedTopicId || ''}
            onChange={(e) => handleTopicSelect(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Chọn Chủ đề --</option>
            {Object.entries(topicsByMach).map(([mach, topics]) => (
              <optgroup key={mach} label={mach}>
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.chu_de}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>

          {/* Show selected topic info */}
          {selectedTopicId && (
            <div className="mt-3 bg-indigo-50 border border-indigo-100 rounded-xl p-3">
              <div className="text-sm text-indigo-700">
                <span className="font-medium">Chủ đề đã chọn: </span>
                {availableTopics.find(t => t.id === selectedTopicId)?.chu_de}
              </div>
              {availableTopics.find(t => t.id === selectedTopicId)?.yeu_cau_can_dat && (
                <div className="mt-2">
                  <span className="text-xs text-indigo-600 font-medium">Yêu cầu cần đạt:</span>
                  <ul className="mt-1 space-y-0.5">
                    {availableTopics.find(t => t.id === selectedTopicId)?.yeu_cau_can_dat.slice(0, 3).map((yc, i) => (
                      <li key={i} className="text-xs text-indigo-600">• {yc}</li>
                    ))}
                    {(availableTopics.find(t => t.id === selectedTopicId)?.yeu_cau_can_dat.length || 0) > 3 && (
                      <li className="text-xs text-indigo-500">... và {(availableTopics.find(t => t.id === selectedTopicId)?.yeu_cau_can_dat.length || 0) - 3} yêu cầu khác</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Lesson Selection (for Kiểm tra theo bài học) */}
      {examType === 'KIEM_TRA_BAI_HOC' && (
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
            <BookOpen className="w-4 h-4" />
            Chọn Bài học
            <span className="text-rose-500">*</span>
          </label>

          <p className="text-xs text-slate-500 mb-3">
            Chọn bài học bạn muốn kiểm tra kiến thức
          </p>

          <select
            value={selectedLessonId || ''}
            onChange={(e) => handleLessonSelect(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Chọn Bài học --</option>
            {Object.entries(lessonsByChuong).map(([chuong, lessons]) => (
              <optgroup key={chuong} label={subject === 'NGU_VAN' ? (NGUVAN_SEMESTER_NAMES[Number(chuong)] || `Học kỳ ${chuong}`) : subject === 'TIENG_ANH' ? (ENGLISH_UNIT_NAMES[Number(chuong)] || `Unit ${chuong}`) : (CHAPTER_NAMES[Number(chuong)] || `Chương ${chuong}`)}>
                {lessons.map((lesson) => (
                  <option key={lesson.bai_id} value={lesson.bai_id}>
                    {lesson.tieu_de}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>

          {/* Show selected lesson info */}
          {selectedLessonId && (
            <div className="mt-3 bg-indigo-50 border border-indigo-100 rounded-xl p-3">
              <div className="text-sm text-indigo-700">
                <span className="font-medium">Bài học đã chọn: </span>
                {ALL_LESSONS.find(l => l.bai_id === selectedLessonId)?.tieu_de}
              </div>
              {ALL_LESSONS.find(l => l.bai_id === selectedLessonId)?.muc_tieu && (
                <div className="mt-2">
                  <span className="text-xs text-indigo-600 font-medium">Mục tiêu học tập:</span>
                  <ul className="mt-1 space-y-0.5">
                    {ALL_LESSONS.find(l => l.bai_id === selectedLessonId)?.muc_tieu.slice(0, 3).map((yc, i) => (
                      <li key={i} className="text-xs text-indigo-600">• {yc}</li>
                    ))}
                    {(ALL_LESSONS.find(l => l.bai_id === selectedLessonId)?.muc_tieu.length || 0) > 3 && (
                      <li className="text-xs text-indigo-500">... và {(ALL_LESSONS.find(l => l.bai_id === selectedLessonId)?.muc_tieu.length || 0) - 3} mục tiêu khác</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Info box for KIEM_TRA_CHU_DE */}
      {examType === 'KIEM_TRA_CHU_DE' && (
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">📚</span>
            <div className="text-sm text-indigo-800">
              <p className="font-medium">Kiểm tra theo chủ đề</p>
              <p className="mt-1 text-indigo-700">
                Đề kiểm tra sẽ tập trung vào chủ đề bạn đã chọn, giúp củng cố kiến thức một cách hiệu quả.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Info box for KIEM_TRA_BAI_HOC */}
      {examType === 'KIEM_TRA_BAI_HOC' && (
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">📖</span>
            <div className="text-sm text-indigo-800">
              <p className="font-medium">Kiểm tra theo bài học</p>
              <p className="mt-1 text-indigo-700">
                Đề kiểm tra sẽ tập trung vào nội dung và mục tiêu học tập của bài học đã chọn.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Info box for special exam types */}
      {examType === 'TOT_NGHIEP_THPT' && (
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">ℹ️</span>
            <div className="text-sm text-amber-800">
              <p className="font-medium">Định dạng đề thi tốt nghiệp THPT từ 2025</p>
              <ul className="mt-2 space-y-1 text-amber-700">
                <li>• Toán: TN 4 lựa chọn + TN Đúng/Sai + TN trả lời ngắn (90 phút)</li>
                <li>• Ngữ văn: 100% Tự luận (120 phút)</li>
                <li>• Tiếng Anh: 40 câu TN (50 phút, môn tự chọn)</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {examType === 'TUYEN_SINH_10' && (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">ℹ️</span>
            <div className="text-sm text-blue-800">
              <p className="font-medium">Lưu ý về đề tuyển sinh lớp 10</p>
              <p className="mt-1 text-blue-700">
                Cấu trúc đề do Sở GD-ĐT từng tỉnh/thành quy định. App sẽ sử dụng cấu trúc
                khung phổ biến và có thể điều chỉnh theo địa phương.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      {examType && (!requiresProvince || province) && (
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
          <div className="flex items-center gap-2 text-emerald-700 text-sm">
            <span className="font-medium">Đã chọn:</span>
            <span>
              {availableExamTypes.find((t) => t.code === examType)?.nameVi}
              {province && ` - ${PROVINCES.find((p) => p.code === province)?.name}`}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
