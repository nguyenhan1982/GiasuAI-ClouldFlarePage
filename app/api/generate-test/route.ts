import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from "@google/genai";
import {
  ExamBlueprint,
  generateExamPrompt,
  generateResponseSchema,
} from '@/lib/exam-config';

const getAiClient = (customApiKey?: string) => {
  const apiKey = customApiKey || process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

/**
 * Convert our schema format to Gemini Type format
 */
function convertToGeminiSchema(schema: ReturnType<typeof generateResponseSchema>): any {
  const typeMap: Record<string, any> = {
    'OBJECT': Type.OBJECT,
    'ARRAY': Type.ARRAY,
    'STRING': Type.STRING,
    'INTEGER': Type.INTEGER,
    'NUMBER': Type.NUMBER,
    'BOOLEAN': Type.BOOLEAN,
  };

  function convert(obj: any): any {
    if (!obj) return obj;

    if (obj.type && typeof obj.type === 'string') {
      const converted: any = { type: typeMap[obj.type] || obj.type };

      if (obj.properties) {
        converted.properties = {};
        for (const [key, value] of Object.entries(obj.properties)) {
          converted.properties[key] = convert(value);
        }
      }

      if (obj.items) {
        converted.items = convert(obj.items);
      }

      if (obj.required) {
        converted.required = obj.required;
      }

      return converted;
    }

    return obj;
  }

  return convert(schema);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check if using new blueprint system or legacy system
    if (body.blueprint) {
      return handleBlueprintRequest(body);
    } else {
      return handleLegacyRequest(body);
    }
  } catch (error: any) {
    console.error("Lỗi tạo đề thi:", error);
    return NextResponse.json(
      { error: error.message || "Xảy ra lỗi trong quá trình tạo đề thi." },
      { status: 500 }
    );
  }
}

/**
 * Handle new blueprint-based exam generation
 */
async function handleBlueprintRequest(body: {
  blueprint: ExamBlueprint;
  apiKey?: string;
  model?: string;
}) {
  const { blueprint, apiKey: customApiKey, model } = body;

  const ai = getAiClient(customApiKey);
  if (!ai) {
    return NextResponse.json(
      { error: "Chưa cấu hình API Key của Gemini. Vui lòng nhập API key." },
      { status: 500 }
    );
  }

  // Calculate expected total questions
  const expectedQuestions = blueprint.sections.reduce(
    (sum, section) => sum + (section.questionCount || 5),
    0
  );

  // Generate prompt from blueprint
  const prompt = generateExamPrompt(blueprint);

  // Generate response schema
  const schema = generateResponseSchema();
  const geminiSchema = convertToGeminiSchema(schema);

  const response = await ai.models.generateContent({
    model: model || "gemini-3.1-flash-lite",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: geminiSchema
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("Không nhận được dữ liệu từ AI.");
  }

  const testData = JSON.parse(text.trim());

  // Validate number of questions returned
  const actualQuestions = testData.questions?.length || 0;
  if (actualQuestions < expectedQuestions) {
    console.warn(
      `[VALIDATION WARNING] AI trả về ${actualQuestions} câu, nhưng yêu cầu ${expectedQuestions} câu. ` +
      `Blueprint: Lớp ${blueprint.grade}, ${blueprint.subject}, ${blueprint.examType}`
    );

    // Add warning to response
    testData._warning = `AI chỉ tạo được ${actualQuestions}/${expectedQuestions} câu hỏi. Vui lòng tạo lại đề.`;
  }

  // Add blueprint metadata to response
  return NextResponse.json({
    ...testData,
    blueprint: blueprint,
    generatedAt: new Date().toISOString(),
    _expectedQuestions: expectedQuestions,
    _actualQuestions: actualQuestions,
  });
}

/**
 * Handle legacy TestConfig-based exam generation (backward compatible)
 */
async function handleLegacyRequest(body: {
  grade?: number;
  subject?: string;
  difficulty?: string;
  numMc?: number;
  numEssay?: number;
  durationMinutes?: number;
  apiKey?: string;
  model?: string;
}) {
  const { grade, subject, difficulty, numMc, numEssay, durationMinutes, apiKey: customApiKey, model } = body;

  if (!grade || !subject || !difficulty) {
    return NextResponse.json(
      { error: "Thiếu thông tin lớp, môn học hoặc độ khó." },
      { status: 400 }
    );
  }

  const ai = getAiClient(customApiKey);
  if (!ai) {
    return NextResponse.json(
      { error: "Chưa cấu hình API Key của Gemini. Vui lòng nhập API key." },
      { status: 500 }
    );
  }

  const nMc = parseInt(String(numMc)) || 0;
  const nEssay = parseInt(String(numEssay)) || 0;
  const dMin = parseInt(String(durationMinutes)) || 45;

  if (nMc === 0 && nEssay === 0) {
    return NextResponse.json(
      { error: "Số câu hỏi không thể bằng 0." },
      { status: 400 }
    );
  }

  let structurePrompt = "";
  if (grade === 1 && subject === "Ngữ văn") {
    structurePrompt = `
Đề thi TIẾNG VIỆT LỚP 1 gồm 2 phần:
1. PHẦN A. KIỂM TRA ĐỌC (10 điểm): ${nMc} câu hỏi trắc nghiệm/điền khuyết đơn giản.
2. PHẦN B. KIỂM TRA VIẾT (10 điểm): ${nEssay} câu hỏi tự luận viết chính tả, tập chép.
`;
  } else if (grade === 1 && subject === "Tiếng Anh") {
    structurePrompt = `
Đề thi TIẾNG ANH LỚP 1 (10 điểm):
- ${nMc} câu Trắc nghiệm từ vựng, ngữ pháp đơn giản.
- ${nEssay} câu Tự luận viết chữ đơn giản.

**BẮT BUỘC:**
1. TẤT CẢ CÂU HỎI VÀ ĐÁP ÁN PHẢI VIẾT BẰNG TIẾNG ANH.
2. KHÔNG được tạo câu hỏi yêu cầu xem hình/tranh (như "Look at the picture", "What is in the picture").
3. Chỉ tạo câu hỏi dạng văn bản thuần túy.

Ví dụ câu hỏi tốt:
- "What color is the sky?"
- "How many legs does a cat have?"
- "Complete the word: A_PLE (a fruit)"
`;
  } else if (grade === 6 && subject === "Ngữ văn") {
    structurePrompt = `
Đề thi NGỮ VĂN LỚP 6 theo GDPT 2018:

**PHẦN I. ĐỌC HIỂU (4.5-5 điểm):**
- BẮT BUỘC phải có một đoạn văn/bài thơ/ngữ liệu văn học (150-300 từ) để học sinh đọc hiểu.
- Ngữ liệu phải phù hợp với học sinh lớp 6 (có thể là đoạn trích từ truyện ngắn, bài thơ, văn bản nhật dụng, truyền thuyết, cổ tích...).
- ${nMc} câu trắc nghiệm dựa trên ngữ liệu đó (hỏi về nội dung, nghệ thuật, từ ngữ, biện pháp tu từ...).

**PHẦN II. VIẾT (5-5.5 điểm):**
- ${nEssay} câu tập làm văn (kể chuyện, miêu tả, biểu cảm...).

Tổng điểm: 10.

**LƯU Ý QUAN TRỌNG:**
- Trường "readingPassage" PHẢI chứa đoạn văn/ngữ liệu đọc hiểu.
- Các câu hỏi trắc nghiệm phải liên quan đến nội dung đoạn văn đó.
`;
  } else if (grade === 6 && subject === "Tiếng Anh") {
    structurePrompt = `
Đề thi TIẾNG ANH LỚP 6 (10 điểm):
- ${nMc} câu Trắc nghiệm (Ngữ pháp, Từ vựng, Đọc hiểu) = 5 điểm.
- ${nEssay} câu Tự luận (Writing) = 5 điểm.

**BẮT BUỘC: TẤT CẢ CÂU HỎI, ĐÁP ÁN VÀ GIẢI THÍCH PHẢI VIẾT BẰNG TIẾNG ANH.**
Ví dụ câu trắc nghiệm: "Choose the correct answer: She ___ to school every day."
Ví dụ câu tự luận: "Write a short paragraph (50-70 words) about your favorite hobby."
`;
  } else {
    structurePrompt = `
Đề thi gồm 2 phần:
1. TRẮC NGHIỆM: ${nMc} câu (0.5 điểm/câu) = 3 điểm.
2. TỰ LUẬN: ${nEssay} câu = 7 điểm.
`;
  }

  const prompt = `Bạn là Chuyên gia Khảo thí Giáo dục Việt Nam.
Thiết kế đề thi:
- Lớp ${grade}, Môn ${subject}
- Thời gian: ${dMin} phút

${structurePrompt}

Yêu cầu:
- Trắc nghiệm: 4 phương án A, B, C, D. correctOptionIndex: 0=A, 1=B, 2=C, 3=D.
- Có explanation cho trắc nghiệm, sampleAnswer cho tự luận.

Trả về JSON:
{
  "title": "Tiêu đề đề thi",
  "durationMinutes": ${dMin},
  "readingPassage": "Đoạn văn/ngữ liệu đọc hiểu (BẮT BUỘC cho Ngữ văn lớp 6, để trống cho các môn khác)",
  "questions": [
    {
      "type": "multiple_choice",
      "text": "Câu hỏi",
      "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
      "correctOptionIndex": 0,
      "explanation": "Giải thích",
      "maxScore": 0.5
    },
    {
      "type": "essay",
      "text": "Câu hỏi tự luận",
      "sampleAnswer": "Đáp án mẫu",
      "maxScore": 3.0
    }
  ]
}`;

  const response = await ai.models.generateContent({
    model: model || "gemini-3.1-flash-lite",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          durationMinutes: { type: Type.INTEGER },
          readingPassage: { type: Type.STRING },
          questions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                type: { type: Type.STRING },
                text: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                correctOptionIndex: { type: Type.INTEGER },
                explanation: { type: Type.STRING },
                sampleAnswer: { type: Type.STRING },
                maxScore: { type: Type.NUMBER }
              },
              required: ["type", "text", "maxScore"]
            }
          }
        },
        required: ["title", "durationMinutes", "questions"]
      }
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("Không nhận được dữ liệu từ AI.");
  }

  const testData = JSON.parse(text.trim());
  return NextResponse.json(testData);
}
