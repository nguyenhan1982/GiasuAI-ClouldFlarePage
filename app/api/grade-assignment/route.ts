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
      problemImages,
      studentImages,
      assignmentDate,
      studentName,
      apiKey,
      model
    } = body;

    if (!problemImages?.length || !studentImages?.length) {
      return NextResponse.json(
        { error: "Vui lòng upload ảnh đề bài và bài làm." },
        { status: 400 }
      );
    }

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

    const subjectContext = {
      'Toán': 'Toán học với các dạng bài tính toán, hình học, đại số',
      'Ngữ văn': 'Ngữ văn với các dạng bài đọc hiểu, tập làm văn, chính tả',
      'Tiếng Anh': 'Tiếng Anh với các dạng bài ngữ pháp, từ vựng, viết câu'
    };

    const prompt = `Bạn là một giáo viên dạy ${subject} lớp ${grade} tại Việt Nam.
Nhiệm vụ: Chấm điểm bài làm của học sinh${studentName ? ` (${studentName})` : ''} dựa trên đề bài được cung cấp.

Ngày làm bài: ${assignmentDate}
Môn học: ${subject} - ${subjectContext[subject as keyof typeof subjectContext] || ''}

HƯỚNG DẪN:
1. Đọc kỹ đề bài (ảnh hoặc PDF) để hiểu yêu cầu từng câu hỏi.
2. Đọc kỹ bài làm của học sinh (ảnh hoặc PDF).
3. Chấm điểm chi tiết từng câu (bao gồm cả cách trình bày và kết quả).
4. Phân tích lỗi sai về logic hoặc tính toán/ngữ pháp.
5. Đưa ra nhận xét mang tính khích lệ, không chê bai.
6. Gợi ý cách cải thiện cụ thể.

LƯU Ý:
- Trích xuất chính xác nội dung đề bài (problemText) và bài làm (studentWorkText) từ ảnh hoặc file PDF.
- Nếu học sinh làm đúng một phần, vẫn cho điểm từng phần.
- Tổng điểm tối đa là 10.0 điểm.
- Ngôn ngữ: Tiếng Việt, thân thiện, khích lệ.

Trả về JSON với format:
{
  "score": 8.0,
  "totalPoints": 10.0,
  "feedback": "Nhận xét tổng quát về bài làm...",
  "details": [
    {
      "question": "Câu 1",
      "problemText": "Nội dung đề bài câu 1...",
      "studentWorkText": "Bài làm của học sinh câu 1...",
      "studentAnswer": "Đáp án học sinh đưa ra",
      "correctAnswer": "Đáp án đúng",
      "isCorrect": true,
      "points": 2.0,
      "maxPoints": 2.0,
      "comment": "Nhận xét cho câu này..."
    }
  ],
  "weaknesses": ["Điểm yếu 1", "Điểm yếu 2"],
  "strengths": ["Điểm mạnh 1", "Điểm mạnh 2"],
  "practiceSuggestions": [
    {
      "topic": "Chủ đề cần ôn tập",
      "sampleProblem": "Bài tập mẫu để luyện tập"
    }
  ]
}`;

    // Helper to extract MIME type and base64 data from data URL
    const parseDataUrl = (dataUrl: string): { mimeType: string; data: string } => {
      // Format: data:image/png;base64,xxxxx or data:application/pdf;base64,xxxxx
      if (dataUrl.includes(',')) {
        const [header, data] = dataUrl.split(',');
        // Extract mime type from "data:image/png;base64"
        const mimeMatch = header.match(/data:([^;]+);/);
        const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
        return { mimeType, data };
      }
      // Fallback: assume it's raw base64 PNG
      return { mimeType: 'image/png', data: dataUrl };
    };

    // Prepare multimodal content
    const contents: any[] = [{ text: prompt }];

    // Add problem files (images or PDFs)
    for (const fileData of problemImages) {
      const { mimeType, data } = parseDataUrl(fileData);
      contents.push({
        inlineData: {
          mimeType,
          data
        }
      });
    }

    // Add student work files (images or PDFs)
    for (const fileData of studentImages) {
      const { mimeType, data } = parseDataUrl(fileData);
      contents.push({
        inlineData: {
          mimeType,
          data
        }
      });
    }

    const response = await ai.models.generateContent({
      model: model || "gemini-3.1-flash-lite",
      contents: contents,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            totalPoints: { type: Type.NUMBER },
            feedback: { type: Type.STRING },
            details: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  problemText: { type: Type.STRING },
                  studentWorkText: { type: Type.STRING },
                  studentAnswer: { type: Type.STRING },
                  correctAnswer: { type: Type.STRING },
                  isCorrect: { type: Type.BOOLEAN },
                  points: { type: Type.NUMBER },
                  maxPoints: { type: Type.NUMBER },
                  comment: { type: Type.STRING }
                },
                required: ["question", "problemText", "studentAnswer", "correctAnswer", "isCorrect", "points", "maxPoints", "comment"]
              }
            },
            weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            practiceSuggestions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  topic: { type: Type.STRING },
                  sampleProblem: { type: Type.STRING }
                },
                required: ["topic", "sampleProblem"]
              }
            }
          },
          required: ["score", "totalPoints", "feedback", "details", "weaknesses", "strengths", "practiceSuggestions"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Không nhận được kết quả từ AI.");
    }

    const result = JSON.parse(text.trim());

    // Add session metadata
    const gradingSession = {
      id: `session_${Date.now()}`,
      date: assignmentDate,
      grade,
      subject,
      ...result
    };

    return NextResponse.json(gradingSession);

  } catch (error: any) {
    console.error("Lỗi chấm bài:", error);
    return NextResponse.json(
      { error: error.message || "Xảy ra lỗi trong quá trình chấm bài." },
      { status: 500 }
    );
  }
}
