'use client';

import { useState, useRef } from 'react';
import { TestTemplate } from '@/lib/types';
import { Download, FileCode, ArrowLeft, Loader2, Printer } from 'lucide-react';

interface TestTakerProps {
  test: TestTemplate;
  onCancel: () => void;
}

export default function TestTaker({ test, onCancel }: TestTakerProps) {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const examRef = useRef<HTMLDivElement>(null);

  const downloadPdf = async () => {
    if (!examRef.current) return;

    setIsGeneratingPdf(true);
    try {
      // Dynamic import html2pdf
      const html2pdf = (await import('html2pdf.js')).default;

      const element = examRef.current;
      const filename = `De_thi_${test.subject}_Lop_${test.grade}.pdf`;

      const opt = {
        margin: 10,
        filename: filename,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false
        },
        jsPDF: {
          unit: 'mm' as const,
          format: 'a4' as const,
          orientation: 'portrait' as const
        }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Lỗi tạo PDF:', error);
      alert('Có lỗi khi tạo PDF. Vui lòng thử lại.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const downloadExamHtml = () => {
    const mcQuestions = test.questions.filter(q => q.type === 'multiple_choice');
    const essayQuestions = test.questions.filter(q => q.type === 'essay');

    const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>${test.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white py-10 px-4">
    <div class="max-w-4xl mx-auto p-8 space-y-8">
        <div class="grid grid-cols-2 gap-4 pb-6 border-b-2 border-black">
            <div class="text-center">
                <h3 class="text-xs font-bold uppercase">SỞ GIÁO DỤC VÀ ĐÀO TẠO</h3>
                <p class="text-[10px]">Mã đề: ĐỀ-102</p>
            </div>
            <div class="text-center">
                <h3 class="text-sm font-bold uppercase">ĐỀ KIỂM TRA ĐỊNH KỲ</h3>
                <p class="text-xs">Môn: ${test.subject} — Lớp ${test.grade}</p>
                <p class="text-xs">Thời gian: ${test.durationMinutes} phút</p>
            </div>
        </div>
        <div class="border p-4 text-sm space-y-2">
            <div>Họ tên: _________________ SBD: _______</div>
            <div>Lớp: _______</div>
        </div>
        ${test.readingPassage ? `
        <div class="space-y-4">
            <h4 class="font-bold uppercase border-l-4 border-black pl-2">PHẦN I. ĐỌC HIỂU</h4>
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p class="text-sm font-semibold text-gray-600 mb-2 italic">Đọc đoạn văn sau và trả lời các câu hỏi:</p>
                <div class="text-sm italic whitespace-pre-wrap">${test.readingPassage}</div>
            </div>
        </div>` : ''}
        ${mcQuestions.length > 0 ? `
        <div class="space-y-4">
            <h4 class="font-bold uppercase border-l-4 border-black pl-2">${test.readingPassage ? 'CÂU HỎI TRẮC NGHIỆM' : 'PHẦN I. TRẮC NGHIỆM'}</h4>
            ${mcQuestions.map((q, idx) => `
            <div class="space-y-2">
                <p class="font-bold">Câu ${idx + 1}: ${q.text}</p>
                <div class="grid grid-cols-2 gap-2 pl-4">
                    ${q.options?.map((opt, i) => `<div>${String.fromCharCode(65 + i)}. ${opt.replace(/^[A-D]\.\s*/i, '')}</div>`).join('') || ''}
                </div>
            </div>
            `).join('')}
        </div>` : ''}
        ${essayQuestions.length > 0 ? `
        <div class="space-y-4">
            <h4 class="font-bold uppercase border-l-4 border-black pl-2">PHẦN II. TỰ LUẬN</h4>
            ${essayQuestions.map((q, idx) => `
            <div class="space-y-2">
                <p class="font-bold">Câu ${idx + 1 + mcQuestions.length} (${q.maxScore} điểm): ${q.text}</p>
                <div class="space-y-2 pl-4">
                    <div class="border-b border-dashed h-6"></div>
                    <div class="border-b border-dashed h-6"></div>
                    <div class="border-b border-dashed h-6"></div>
                </div>
            </div>
            `).join('')}
        </div>` : ''}
        <div class="text-center pt-6 border-t">
            <p class="font-bold">--- HẾT ---</p>
        </div>
    </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `De_thi_${test.subject}_Lop_${test.grade}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const mcQuestions = test.questions.filter(q => q.type === 'multiple_choice');
  const essayQuestions = test.questions.filter(q => q.type === 'essay');

  return (
    <div className="max-w-4xl mx-auto px-4 py-2">
      {/* Control bar - Mobile responsive */}
      <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-3 sm:p-5 mb-4 sm:mb-6 shadow-sm no-print">
        {/* Top row: Back button + Title */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-0">
          <button
            onClick={onCancel}
            className="p-2 sm:px-3.5 sm:py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl sm:rounded-2xl cursor-pointer flex items-center gap-1.5 flex-shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Tạo đề khác</span>
          </button>
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md uppercase">
              {test.subject} • Lớp {test.grade}
            </span>
            <h1 className="text-sm sm:text-base font-bold text-slate-800 mt-1 truncate">{test.title}</h1>
          </div>
        </div>

        {/* Bottom row: Download buttons */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-2 sm:mt-3">
          <button
            onClick={downloadExamHtml}
            className="p-2.5 sm:px-4 sm:py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer"
            title="Tải file HTML"
          >
            <FileCode className="w-4 h-4" />
            <span className="hidden sm:inline">HTML</span>
          </button>
          <button
            onClick={handlePrint}
            className="p-2.5 sm:px-4 sm:py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer"
            title="In đề thi"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">In</span>
          </button>
          <button
            onClick={downloadPdf}
            disabled={isGeneratingPdf}
            className="p-2.5 sm:px-4 sm:py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer disabled:cursor-wait"
            title="Lưu thành file PDF"
          >
            {isGeneratingPdf ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">PDF</span>
          </button>
        </div>
      </div>

      {/* Exam paper - Thêm ref để export PDF */}
      <div ref={examRef} className="bg-white print-paper border border-slate-200 shadow-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
        {/* Header - Stack on mobile */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 sm:gap-4 pb-4 sm:pb-6 border-b-2 border-slate-900">
          <div className="text-center space-y-1 order-2 sm:order-1">
            <h3 className="text-[10px] sm:text-xs font-bold uppercase">SỞ GIÁO DỤC VÀ ĐÀO TẠO</h3>
            <p className="text-[9px] sm:text-[10px] text-zinc-500">Mã đề: ĐỀ-102</p>
          </div>
          <div className="text-center order-1 sm:order-2">
            <h3 className="text-xs sm:text-sm font-extrabold uppercase">ĐỀ KIỂM TRA ĐỊNH KỲ</h3>
            <p className="text-[11px] sm:text-xs font-bold">Môn: {test.subject} — Lớp {test.grade}</p>
            <p className="text-[10px] sm:text-xs text-zinc-600">Thời gian: {test.durationMinutes} phút</p>
          </div>
        </div>

        {/* Student info */}
        <div className="border border-black p-4 text-sm space-y-3 font-mono">
          <div>
            <span className="font-bold">Họ & tên:</span>
            <span className="border-b border-dashed border-black inline-block w-[60%] h-4 ml-2"></span>
            <span className="ml-4 font-bold">SBD:</span>
            <span className="border-b border-dashed border-black inline-block w-20 h-4 ml-2"></span>
          </div>
          <div>
            <span className="font-bold">Lớp:</span>
            <span className="border-b border-dashed border-black inline-block w-32 h-4 ml-2"></span>
          </div>
        </div>

        {/* Grading table - Mobile: 2x2, Desktop: 1x4 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border border-black divide-x divide-black text-center text-xs font-mono">
          <div className="py-2 border-b sm:border-b-0 border-black">
            <span className="font-bold block">Trắc nghiệm</span>
            <div className="h-6">......</div>
          </div>
          <div className="py-2 border-b sm:border-b-0 border-black">
            <span className="font-bold block">Tự luận</span>
            <div className="h-6">......</div>
          </div>
          <div className="py-2">
            <span className="font-bold block">Tổng điểm</span>
            <div className="h-6">......</div>
          </div>
          <div className="py-2">
            <span className="font-bold block">Chữ ký</span>
            <div className="h-6">......</div>
          </div>
        </div>

        {/* Reading Passage - For Ngữ văn */}
        {test.readingPassage && (
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase border-l-4 border-black pl-2">
              PHẦN I. ĐỌC HIỂU
            </h4>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-slate-600 mb-2 italic">Đọc đoạn văn sau và trả lời các câu hỏi:</p>
              <div className="text-sm leading-relaxed whitespace-pre-wrap text-slate-800 italic">
                {test.readingPassage}
              </div>
            </div>
          </div>
        )}

        {/* MC Questions */}
        {mcQuestions.length > 0 && (
          <div className="space-y-5">
            <h4 className="text-sm font-extrabold uppercase border-l-4 border-black pl-2">
              {test.readingPassage ? 'CÂU HỎI TRẮC NGHIỆM' : `PHẦN I. TRẮC NGHIỆM`} ({mcQuestions.length} Câu)
            </h4>
            <div className="space-y-4">
              {mcQuestions.map((q, idx) => (
                <div key={q.id} className="space-y-2 text-sm avoid-break">
                  <p className="font-bold">
                    Câu {idx + 1} ({q.maxScore || 0.5} điểm): <span className="font-medium">{q.text}</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-1.5 pl-2 sm:pl-4">
                    {q.options?.map((option, oIdx) => (
                      <div key={oIdx}>
                        <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span> {option.replace(/^[A-D]\.\s*/i, '')}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Essay Questions */}
        {essayQuestions.length > 0 && (
          <div className="space-y-5">
            <h4 className="text-sm font-extrabold uppercase border-l-4 border-black pl-2">
              PHẦN II. TỰ LUẬN ({essayQuestions.length} Câu - 7.0 Điểm)
            </h4>
            <div className="space-y-8">
              {essayQuestions.map((q, idx) => {
                // Tính số dòng dựa trên điểm (nhiều điểm = nhiều dòng viết)
                // Tối thiểu 12 dòng, mỗi điểm thêm 5 dòng
                const lineCount = Math.max(12, Math.ceil((q.maxScore || 2) * 5));
                return (
                  <div key={q.id} className="space-y-4 text-sm">
                    <p className="font-bold">
                      Câu {idx + 1 + mcQuestions.length} ({q.maxScore} điểm): <span className="font-medium">{q.text}</span>
                    </p>
                    <div className="pl-4">
                      <div className="text-slate-400 italic text-xs mb-2 print:hidden">Bài làm:</div>
                      {Array.from({ length: lineCount }).map((_, i) => (
                        <div key={i} className="border-b border-dashed border-gray-400 h-8 mb-1"></div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center pt-8 border-t">
          <p className="font-bold italic uppercase text-xs">--- HẾT ---</p>
        </div>
      </div>
    </div>
  );
}
