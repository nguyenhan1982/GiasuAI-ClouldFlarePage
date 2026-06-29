import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type } from "@google/genai";

const getAiClient = (apiKey: string) => {
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      grade,
      subject,
      frequentMistakes,
      numProblems,
      apiKey,
      model
    } = body;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Vui lòng nhập API Key." },
        { status: 400 }
      );
    }

    const ai = getAiClient(apiKey);
    if (!ai) {
      return NextResponse.json(
        { error: "API Key không hợp lệ." },
        { status: 500 }
      );
    }

    const mistakesContext = frequentMistakes?.length > 0
      ? `Học sinh thường mắc các lỗi sau: ${frequentMistakes.join(', ')}`
      : 'Chưa có thông tin về lỗi thường gặp của học sinh.';

    const count = numProblems || 5;

    const prompt = `Bạn là một giáo viên ${subject} lớp ${grade} tại Việt Nam.
Hãy tạo đề ôn tập gồm ${count} bài tập giúp học sinh củng cố kiến thức.

${mistakesContext}

YÊU CẦU:
1. Các bài tập phải phù hợp với chương trình lớp ${grade} tại Việt Nam.
2. Tập trung vào các dạng bài mà học sinh hay sai (nếu có thông tin).
3. Độ khó đa dạng: Dễ (2 bài), Trung bình (2 bài), Khó (1 bài).
4. Mỗi bài có lời giải chi tiết.
5. Ngôn ngữ: Tiếng Việt, rõ ràng, dễ hiểu.

${subject === 'Tiếng Anh' ? 'LƯU Ý: Đề bài phải bằng tiếng Anh, lời giải có thể bằng tiếng Việt.' : ''}

Trả về JSON array:
[
  {
    "id": "review_1",
    "topic": "Chủ đề (vd: Phân số, Đọc hiểu, Grammar)",
    "problemText": "Nội dung bài tập...",
    "difficulty": "Dễ" | "Trung bình" | "Khó",
    "solution": "Lời giải chi tiết..."
  }
]`;

    const response = await ai.models.generateContent({
      model: model || "gemini-3.1-flash-lite",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              topic: { type: Type.STRING },
              problemText: { type: Type.STRING },
              difficulty: { type: Type.STRING },
              solution: { type: Type.STRING }
            },
            required: ["id", "topic", "problemText", "difficulty", "solution"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Không nhận được dữ liệu từ AI.");
    }

    const problems = JSON.parse(text.trim());
    return NextResponse.json({ problems });

  } catch (error: any) {
    console.error("Lỗi tạo đề ôn tập:", error);
    return NextResponse.json(
      { error: error.message || "Xảy ra lỗi trong quá trình tạo đề ôn tập." },
      { status: 500 }
    );
  }
}
