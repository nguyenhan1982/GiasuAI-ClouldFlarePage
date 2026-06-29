export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

const getAiClient = (apiKey: string) => {
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      prompt,
      grade,
      subject,
      preferredStyle,
      apiKey,
      model,
      extractImage,
      imageBase64
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

    // Handle image text extraction
    if (extractImage && imageBase64) {
      const extractionPrompt = `Trích xuất nội dung bài toán/đề bài từ ảnh này.
Chuyển đổi các ký hiệu toán học sang Unicode (ví dụ: x², √, ×, ÷, ≤, ≥, π, ∑).
Chỉ trả về nội dung đề bài, không giải.`;

      const response = await ai.models.generateContent({
        model: model || "gemini-3.1-flash-lite",
        contents: [
          {
            role: "user",
            parts: [
              {
                inlineData: {
                  mimeType: "image/jpeg",
                  data: imageBase64
                }
              },
              { text: extractionPrompt }
            ]
          }
        ]
      });

      const extractedText = response.text;
      if (!extractedText) {
        throw new Error("Không thể trích xuất text từ ảnh.");
      }

      return NextResponse.json({ extractedText: extractedText.trim() });
    }

    // Handle normal tutoring request
    if (!prompt) {
      return NextResponse.json(
        { error: "Vui lòng nhập đề bài." },
        { status: 400 }
      );
    }

    // Build the system prompt
    let systemPrompt = `Bạn là một gia sư ${subject} giỏi, đang dạy học sinh lớp ${grade} tại Việt Nam.

GIỚI HẠN PHẠM VI HỖ TRỢ (RẤT QUAN TRỌNG):
- Bạn CHỈ được phép hỗ trợ giải đáp các câu hỏi hoặc yêu cầu thuộc 2 lĩnh vực:
  1. Đề bài cần giải (ví dụ: giải bài tập toán, bài tập tiếng Anh, bài làm văn, câu hỏi trắc nghiệm/tự luận,...).
  2. Chủ đề cần ôn tập (giảng giải khái niệm lý thuyết học tập, giải thích kiến thức, tóm tắt bài học trong chương trình).
- Nếu yêu cầu hoặc câu hỏi của học sinh KHÔNG liên quan đến 2 lĩnh vực này (ví dụ: trò chuyện tán gẫu linh tinh, hỏi chuyện đời tư/xã hội ngoài lề, yêu cầu viết mã nguồn lập trình ứng dụng, kể chuyện phiếm giải trí không liên quan học tập,...), bạn phải TỪ CHỐI trả lời một cách lịch sự bằng tiếng Việt và nhắc nhở học sinh rằng: "Là một Gia sư AI, mình chỉ hỗ trợ giải quyết các đề bài cần giải hoặc giảng giải các chủ đề cần ôn tập của môn ${subject} lớp ${grade}. Bạn vui lòng gửi câu hỏi liên quan đến bài học nhé!"

NHIỆM VỤ:
- Giải thích bài toán một cách chi tiết, dễ hiểu
- Hướng dẫn từng bước để học sinh tự làm được
- Sử dụng ngôn ngữ phù hợp với học sinh lớp ${grade}
- Khuyến khích học sinh tư duy, không chỉ đưa đáp án

ĐỊNH DẠNG (RẤT QUAN TRỌNG):
- TUYỆT ĐỐI KHÔNG sử dụng LaTeX hoặc ký hiệu $...$ (ví dụ: KHÔNG viết $\\frac{1}{4}$)
- Viết phân số dạng: 1/4 hoặc ¼ hoặc "một phần tư"
- Sử dụng Unicode cho ký hiệu toán học: ×, ÷, ², ³, √, π, ≤, ≥, ∑, ∫, ½, ⅓, ¼, ⅕
- Có thể dùng **bold** để nhấn mạnh
- Chia thành các bước rõ ràng
- Cuối bài có phần tóm tắt hoặc mẹo nhớ nếu phù hợp`;

    // Add preferred style if available
    if (preferredStyle) {
      systemPrompt += `\n\nPHONG CÁCH HỌC TẬP CỦA HỌC SINH:
${preferredStyle}

Hãy áp dụng phong cách giải thích phù hợp với mong muốn của học sinh trên.`;
    }

    const fullPrompt = `${systemPrompt}\n\n---\n\nĐỀ BÀI / YÊU CẦU:\n${prompt}`;

    const response = await ai.models.generateContent({
      model: model || "gemini-3.1-flash-lite",
      contents: fullPrompt
    });

    const text = response.text;
    if (!text) {
      throw new Error("Không nhận được phản hồi từ AI.");
    }

    return NextResponse.json({ response: text.trim() });

  } catch (error: any) {
    console.error("Lỗi gia sư AI:", error);
    return NextResponse.json(
      { error: error.message || "Xảy ra lỗi trong quá trình xử lý." },
      { status: 500 }
    );
  }
}
