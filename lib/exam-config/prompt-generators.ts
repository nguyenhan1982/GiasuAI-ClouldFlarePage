import {
  ExamBlueprint,
  SubjectCode,
  ExamTypeCode,
  QuestionFormatCode,
} from './types';
import {
  SUBJECTS,
  EXAM_TYPES,
  DIFFICULTY_FRAMEWORKS,
  QUESTION_FORMATS,
} from './constants';
import { formatDuration } from './utils';

/**
 * Generate AI prompt for exam generation based on blueprint
 */
export function generateExamPrompt(blueprint: ExamBlueprint): string {
  const subjectInfo = SUBJECTS.find((s) => s.code === blueprint.subject);
  const examTypeInfo = EXAM_TYPES.find((e) => e.code === blueprint.examType);
  const difficultyFramework = DIFFICULTY_FRAMEWORKS.find(
    (f) => f.code === blueprint.difficultyFramework
  );

  // Build structure description
  const structureDesc = blueprint.sections
    .map((section) => {
      const formats = section.questionFormats
        .map((f) => QUESTION_FORMATS.find((qf) => qf.code === f)?.nameVi)
        .filter(Boolean)
        .join(', ');

      return `- ${section.nameVi}: ${section.points} điểm (${section.questionCount || 'nhiều'} câu, dạng: ${formats})${
        section.hasReadingPassage ? ' [CÓ ĐOẠN VĂN ĐỌC HIỂU]' : ''
      }`;
    })
    .join('\n');

  // Build explicit question list with numbering
  let questionNumber = 1;
  const questionList = blueprint.sections
    .map((section) => {
      const count = section.questionCount || 5;
      const format = section.questionFormats[0];
      const formatInfo = QUESTION_FORMATS.find((qf) => qf.code === format);
      const pointsPerQuestion = section.points / count;

      const questions: string[] = [];
      for (let i = 0; i < count; i++) {
        questions.push(
          `   Câu ${questionNumber++}: ${formatInfo?.nameVi || format} (${pointsPerQuestion.toFixed(2)} điểm)`
        );
      }
      return `**${section.nameVi}** (${count} câu × ${pointsPerQuestion.toFixed(2)}đ = ${section.points}đ):\n${questions.join('\n')}`;
    })
    .join('\n\n');

  const totalQuestions = blueprint.sections.reduce(
    (sum, s) => sum + (s.questionCount || 5),
    0
  );

  // Build difficulty distribution
  const difficultyDesc = Object.entries(blueprint.difficultyDistribution)
    .map(([code, pct]) => {
      const level = difficultyFramework?.levels.find((l) => l.code === code);
      return `${level?.nameVi || code}: ${pct}%`;
    })
    .join(', ');

  // Get subject-specific instructions
  const subjectInstructions = getSubjectInstructions(
    blueprint.subject,
    blueprint.grade,
    blueprint.examType
  );

  // Get question format instructions
  const formatInstructions = getFormatInstructions(blueprint);

  // Build topic-specific instructions for KIEM_TRA_CHU_DE / KIEM_TRA_BAI_HOC
  let topicInstructions = '';
  if ((blueprint.examType === 'KIEM_TRA_CHU_DE' || blueprint.examType === 'KIEM_TRA_BAI_HOC') && blueprint.topicName) {
    const isLesson = blueprint.examType === 'KIEM_TRA_BAI_HOC';
    const label = isLesson ? 'BÀI HỌC' : 'CHỦ ĐỀ';
    topicInstructions = `
## ${label} KIỂM TRA (QUAN TRỌNG)
**${label}: ${blueprint.topicName}**

⚠️ TẤT CẢ CÂU HỎI PHẢI TẬP TRUNG VÀO ${label} NÀY!
Không được tạo câu hỏi ngoài phạm vi ${isLesson ? 'bài học' : 'chủ đề'} "${blueprint.topicName}".
`;

    if (blueprint.topicYeuCauCanDat && blueprint.topicYeuCauCanDat.length > 0) {
      topicInstructions += `
**Yêu cầu cần đạt của chủ đề:**
${blueprint.topicYeuCauCanDat.map((yc, i) => `${i + 1}. ${yc}`).join('\n')}

Các câu hỏi PHẢI bám sát các yêu cầu cần đạt trên. Mỗi câu hỏi nên liên quan đến ít nhất một yêu cầu cần đạt.
`;
    }
  }

  return `Bạn là Chuyên gia Khảo thí Giáo dục Việt Nam, am hiểu sâu về Chương trình GDPT 2018.

## THÔNG TIN ĐỀ THI
- Lớp: ${blueprint.grade}
- Môn: ${subjectInfo?.nameVi}
- Loại đề: ${examTypeInfo?.nameVi}${blueprint.topicName ? ` (${blueprint.examType === 'KIEM_TRA_BAI_HOC' ? 'Bài học' : 'Chủ đề'}: ${blueprint.topicName})` : ''}
- Thời gian: ${formatDuration(blueprint.durationMinutes)}
- Tổng điểm: ${blueprint.totalPoints}
- **TỔNG SỐ CÂU HỎI: ${totalQuestions} câu (BẮT BUỘC tạo đủ số này)**
${topicInstructions}

## CẤU TRÚC ĐỀ THI
${structureDesc}

## DANH SÁCH CÂU HỎI CẦN TẠO (BẮT BUỘC TẠO ĐỦ ${totalQuestions} CÂU)
${questionList}

⚠️ **QUAN TRỌNG**: Bạn PHẢI tạo CHÍNH XÁC ${totalQuestions} câu hỏi như danh sách trên.
Không được bỏ sót bất kỳ câu nào. Kiểm tra lại trước khi trả về.

## PHÂN BỔ MỨC ĐỘ (${difficultyFramework?.nameVi})
${difficultyDesc}

${subjectInstructions}

${formatInstructions}

## YÊU CẦU OUTPUT JSON
Trả về JSON với cấu trúc:
{
  "title": "Tiêu đề đề thi",
  "durationMinutes": ${blueprint.durationMinutes},
  "readingPassages": [
    {
      "id": "passage_1",
      "content": "Nội dung đoạn văn đọc hiểu (nếu có)",
      "sectionId": "id của section tương ứng"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "format": "TN_4LC|TN_DUNG_SAI|TN_TRA_LOI_NGAN|TU_LUAN|TU_LUAN_NGAN",
      "sectionId": "id của section",
      "text": "Nội dung câu hỏi",
      "readingPassageId": "id của passage (nếu câu hỏi dựa vào đoạn văn)",

      // Cho TN_4LC
      "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
      "correctOptionIndex": 0,

      // Cho TN_DUNG_SAI
      "statements": [
        {"text": "Ý a...", "isCorrect": true},
        {"text": "Ý b...", "isCorrect": false},
        {"text": "Ý c...", "isCorrect": true},
        {"text": "Ý d...", "isCorrect": false}
      ],

      // Cho TN_TRA_LOI_NGAN
      "correctAnswer": "Đáp án",

      // Cho TU_LUAN
      "sampleAnswer": "Đáp án mẫu chi tiết",

      "difficultyLevel": "Mã mức độ",
      "maxScore": 0.5,
      "explanation": "Giải thích đáp án"
    }
  ]
}

## LƯU Ý QUAN TRỌNG
1. ⚠️ BẮT BUỘC TẠO ĐỦ ${totalQuestions} CÂU HỎI - KHÔNG ĐƯỢC ÍT HƠN!
2. Mỗi câu có đúng điểm số như danh sách trên.
3. Phân bổ mức độ khó theo tỉ lệ đã cho.
4. Nội dung phù hợp với học sinh lớp ${blueprint.grade}.
5. Ngữ liệu đọc hiểu PHẢI lấy ngoài SGK (theo quy định CT GDPT 2018).
6. Mỗi câu hỏi PHẢI có explanation.${blueprint.topicName ? `
7. ⚠️ TẤT CẢ CÂU HỎI PHẢI THUỘC ${blueprint.examType === 'KIEM_TRA_BAI_HOC' ? 'BÀI HỌC' : 'CHỦ ĐỀ'} "${blueprint.topicName}" - KHÔNG LẠC ĐỀ!` : ''}

**KIỂM TRA CUỐI: Đảm bảo mảng questions có CHÍNH XÁC ${totalQuestions} phần tử!${blueprint.topicName ? ` Đảm bảo tất cả câu hỏi đều về ${blueprint.examType === 'KIEM_TRA_BAI_HOC' ? 'bài học' : 'chủ đề'} "${blueprint.topicName}"!` : ''}**`;
}

/**
 * Get subject-specific instructions
 */
function getSubjectInstructions(
  subject: SubjectCode,
  grade: number,
  examType: ExamTypeCode
): string {
  switch (subject) {
    case 'TOAN':
      return getToanInstructions(grade, examType);
    case 'TIENG_VIET':
      return getTiengVietInstructions(grade);
    case 'NGU_VAN':
      return getNguVanInstructions(grade, examType);
    case 'TIENG_ANH':
      return getTiengAnhInstructions(grade, examType);
    default:
      return '';
  }
}

function getToanInstructions(grade: number, examType: ExamTypeCode): string {
  let content = `
## HƯỚNG DẪN MÔN TOÁN`;

  if (grade <= 5) {
    content += `
- Mạch kiến thức: Số và phép tính (60-75%), Hình học-Đo lường (15-30%), Thống kê (5-10%)
- Dạng bài: Khoanh đáp án, điền số, đặt tính rồi tính, giải toán có lời văn
- Sử dụng các số và phép tính phù hợp với phạm vi kiến thức lớp ${grade}`;
  } else if (grade <= 9) {
    content += `
- Mạch kiến thức: Số và Đại số, Hình học và Đo lường, Thống kê và Xác suất
- Dạng bài tự luận: Rút gọn biểu thức, giải phương trình, chứng minh hình học
- Có bài toán thực tế, gắn với bối cảnh đời sống`;
  }

  if (examType === 'TOT_NGHIEP_THPT') {
    content += `
- ĐỊNH DẠNG TN MỚI 2025:
  + Phần I: 12 câu TN 4 lựa chọn
  + Phần II: 4 câu TN Đúng/Sai (mỗi câu 4 ý a-d)
  + Phần III: 6 câu TN trả lời ngắn (điền đáp số)
- Nội dung: Hàm số, đạo hàm, tích phân, số phức, hình không gian, xác suất thống kê`;
  }

  if (examType === 'TUYEN_SINH_10') {
    content += `
- Dạng đề: 100% Tự luận
- Cấu trúc khung: Rút gọn căn thức, hệ phương trình, bài toán thực tế, hình học đường tròn
- Có câu vận dụng cao (bất đẳng thức, cực trị)`;
  }

  return content;
}

function getTiengVietInstructions(grade: number): string {
  return `
## HƯỚNG DẪN MÔN TIẾNG VIỆT (Tiểu học)

- Cấu trúc: Kiểm tra ĐỌC (10đ) + Kiểm tra VIẾT (10đ)
- Phần Đọc: Đọc thành tiếng + Đọc hiểu văn bản (TN + TL ngắn)
- Phần Viết: Chính tả + Viết câu/đoạn văn ngắn
- Văn bản đọc hiểu KHÔNG lấy trong SGK đã học
- Độ dài văn bản đọc: Lớp ${grade} khoảng ${grade <= 2 ? '30-50' : grade <= 4 ? '70-80' : '80-100'} tiếng`;
}

function getNguVanInstructions(grade: number, examType: ExamTypeCode): string {
  let content = `
## HƯỚNG DẪN MÔN NGỮ VĂN

- Cấu trúc: Đọc hiểu (4-5đ) + Viết (5-6đ)
- Ngữ liệu đọc hiểu: BẮT BUỘC lấy ngoài SGK
- Câu hỏi đọc hiểu theo 4 mức: nhận biết → thông hiểu → vận dụng → vận dụng cao`;

  if (examType === 'TOT_NGHIEP_THPT') {
    content += `
- ĐỊNH DẠNG TN THPT 2025: 100% Tự luận, 120 phút
- Phần Đọc hiểu: 4 điểm, 5 câu theo mức Biết-Hiểu-Vận dụng
- Phần Viết: 6 điểm (Đoạn nghị luận 2đ + Bài nghị luận 4đ)
- Đề thường yêu cầu bàn về vấn đề từ ngữ liệu đọc hiểu`;
  }

  const genresByGrade: Record<number, string> = {
    6: 'kể lại trải nghiệm, tả cảnh sinh hoạt, đoạn ghi cảm xúc về thơ',
    7: 'biểu cảm về con người/sự việc, nghị luận về vấn đề đời sống, thuyết minh quy tắc',
    8: 'nghị luận văn học, nghị luận xã hội, thuyết minh',
    9: 'nghị luận xã hội, nghị luận văn học (phân tích tác phẩm)',
  };

  if (genresByGrade[grade]) {
    content += `
- Kiểu bài viết trọng tâm lớp ${grade}: ${genresByGrade[grade]}`;
  }

  return content;
}

function getTiengAnhInstructions(grade: number, examType: ExamTypeCode): string {
  let content = `
## HƯỚNG DẪN MÔN TIẾNG ANH

**BẮT BUỘC: TẤT CẢ CÂU HỎI, ĐÁP ÁN VÀ GIẢI THÍCH PHẢI VIẾT BẰNG TIẾNG ANH.**`;

  if (grade <= 5) {
    content += `
- Chuẩn đầu ra: Hướng tới bậc A1 (cuối tiểu học)
- 4 kỹ năng: Nghe, Nói, Đọc, Viết (chú trọng Nghe & Nói)
- Dạng bài: nghe-nối, nghe-chọn, đọc-chọn, sắp xếp từ thành câu
- KHÔNG tạo câu hỏi yêu cầu xem hình/tranh`;
  } else if (grade <= 9) {
    content += `
- Chuẩn đầu ra: A2 (cuối lớp 7) → tiệm cận B1 (cuối lớp 9)
- 4 kỹ năng: Listening, Reading, Writing, Language
- Độ dài đoạn đọc: Lớp ${grade} khoảng ${grade <= 7 ? '100-150' : '150-200'} từ`;
  }

  if (examType === 'TOT_NGHIEP_THPT') {
    content += `
- ĐỊNH DẠNG TN THPT 2025: 40 câu TN / 50 phút (môn tự chọn)
- DẠNG BÀI MỚI (không còn dạng cũ):
  1. Đọc điền từ/cụm từ vào thông báo, quảng cáo
  2. Sắp xếp câu thành đoạn hội thoại/lá thư
  3. Đọc điền mệnh đề/câu vào đoạn văn
  4. Đọc hiểu 2 đoạn (8 câu + 10 câu)
- KHÔNG CÒN: chọn từ đồng/trái nghĩa rời, tìm lỗi sai, chọn câu sát nghĩa
- ~30% từ vựng ở mức B1-B2`;
  }

  return content;
}

/**
 * Get format-specific instructions
 */
function getFormatInstructions(blueprint: ExamBlueprint): string {
  const formats = new Set<QuestionFormatCode>();
  blueprint.sections.forEach((s) => s.questionFormats.forEach((f) => formats.add(f)));

  const instructions: string[] = ['## HƯỚNG DẪN ĐỊNH DẠNG CÂU HỎI'];

  if (formats.has('TN_4LC')) {
    instructions.push(`
**TN_4LC (Trắc nghiệm 4 lựa chọn):**
- Có 4 phương án A, B, C, D
- correctOptionIndex: 0=A, 1=B, 2=C, 3=D
- Chỉ có 1 đáp án đúng`);
  }

  if (formats.has('TN_DUNG_SAI')) {
    instructions.push(`
**TN_DUNG_SAI (Trắc nghiệm Đúng/Sai):**
- Mỗi câu có 4 ý (a, b, c, d)
- Mỗi ý học sinh chọn Đúng hoặc Sai
- statements là mảng 4 phần tử {text, isCorrect}
- Điểm tính lũy tiến theo số ý đúng`);
  }

  if (formats.has('TN_TRA_LOI_NGAN')) {
    instructions.push(`
**TN_TRA_LOI_NGAN (Trắc nghiệm trả lời ngắn):**
- Học sinh điền đáp số hoặc từ ngắn
- correctAnswer là đáp án chính xác
- Có thể thêm acceptableAnswers cho các cách viết khác`);
  }

  if (formats.has('TU_LUAN') || formats.has('TU_LUAN_NGAN')) {
    instructions.push(`
**TU_LUAN / TU_LUAN_NGAN:**
- sampleAnswer là đáp án mẫu chi tiết
- TU_LUAN_NGAN: Trả lời ngắn 1-2 câu
- TU_LUAN: Viết đoạn/bài văn hoàn chỉnh`);
  }

  return instructions.join('\n');
}

/**
 * Generate response schema for Gemini API
 */
export function generateResponseSchema() {
  // Import Type from @google/genai would be needed here
  // For now, return the schema structure
  return {
    type: 'OBJECT',
    properties: {
      title: { type: 'STRING' },
      durationMinutes: { type: 'INTEGER' },
      readingPassages: {
        type: 'ARRAY',
        items: {
          type: 'OBJECT',
          properties: {
            id: { type: 'STRING' },
            content: { type: 'STRING' },
            sectionId: { type: 'STRING' },
          },
          required: ['id', 'content', 'sectionId'],
        },
      },
      questions: {
        type: 'ARRAY',
        items: {
          type: 'OBJECT',
          properties: {
            id: { type: 'STRING' },
            format: { type: 'STRING' },
            sectionId: { type: 'STRING' },
            text: { type: 'STRING' },
            readingPassageId: { type: 'STRING' },
            options: { type: 'ARRAY', items: { type: 'STRING' } },
            correctOptionIndex: { type: 'INTEGER' },
            statements: {
              type: 'ARRAY',
              items: {
                type: 'OBJECT',
                properties: {
                  text: { type: 'STRING' },
                  isCorrect: { type: 'BOOLEAN' },
                },
                required: ['text', 'isCorrect'],
              },
            },
            correctAnswer: { type: 'STRING' },
            sampleAnswer: { type: 'STRING' },
            difficultyLevel: { type: 'STRING' },
            maxScore: { type: 'NUMBER' },
            explanation: { type: 'STRING' },
          },
          required: ['id', 'format', 'sectionId', 'text', 'maxScore'],
        },
      },
    },
    required: ['title', 'durationMinutes', 'questions'],
  };
}
