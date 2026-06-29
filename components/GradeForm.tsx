'use client';

import { useState, useRef } from 'react';
import { Subject, GradingSession, GeminiModel } from '@/lib/types';
import {
  Upload,
  X,
  Camera,
  FileText,
  Loader2,
  CheckCircle2,
  AlertCircle,
  File
} from 'lucide-react';

interface GradeFormProps {
  apiKey?: string;
  model?: GeminiModel;
  onComplete: (session: GradingSession) => void;
}

export default function GradeForm({ apiKey, model, onComplete }: GradeFormProps) {
  const [grade, setGrade] = useState<number>(6);
  const [subject, setSubject] = useState<Subject>('Toán');
  const [studentName, setStudentName] = useState('');
  const [assignmentDate, setAssignmentDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [problemFiles, setProblemFiles] = useState<{ data: string; type: string; name: string }[]>([]);
  const [studentFiles, setStudentFiles] = useState<{ data: string; type: string; name: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const problemInputRef = useRef<HTMLInputElement>(null);
  const studentInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'problem' | 'student'
  ) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        const fileInfo = {
          data: base64,
          type: file.type,
          name: file.name
        };
        if (type === 'problem') {
          setProblemFiles(prev => [...prev, fileInfo]);
        } else {
          setStudentFiles(prev => [...prev, fileInfo]);
        }
      };
      reader.readAsDataURL(file);
    });

    e.target.value = '';
  };

  const removeFile = (index: number, type: 'problem' | 'student') => {
    if (type === 'problem') {
      setProblemFiles(prev => prev.filter((_, i) => i !== index));
    } else {
      setStudentFiles(prev => prev.filter((_, i) => i !== index));
    }
  };

  const isPdf = (fileType: string) => fileType === 'application/pdf';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!apiKey?.trim()) {
      setError('Vui lòng nhập API Key trong phần Cài đặt (icon ⚙️) ở Trang chủ.');
      return;
    }

    if (problemFiles.length === 0) {
      setError('Vui lòng upload đề bài (ảnh hoặc PDF).');
      return;
    }

    if (studentFiles.length === 0) {
      setError('Vui lòng upload bài làm (ảnh hoặc PDF).');
      return;
    }

    setIsLoading(true);

    try {
      // Extract base64 data for API (backward compatible)
      const problemImages = problemFiles.map(f => f.data);
      const studentImages = studentFiles.map(f => f.data);

      const response = await fetch('/api/grade-assignment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade,
          subject,
          problemImages,
          studentImages,
          assignmentDate,
          studentName: studentName.trim() || undefined,
          apiKey: apiKey.trim(),
          model
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Lỗi chấm bài.');
      }

      onComplete(data);

      // Reset form
      setProblemFiles([]);
      setStudentFiles([]);

    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600">
          <Camera className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Chấm Bài AI</h2>
          <p className="text-sm text-slate-500">Upload đề bài và bài làm (ảnh hoặc PDF)</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-rose-50 border border-rose-100 text-rose-700 text-sm p-4 rounded-2xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Info Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Lớp</label>
            <select
              value={grade}
              onChange={(e) => setGrade(parseInt(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(g => (
                <option key={g} value={g}>Lớp {g}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Môn</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value as Subject)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none"
            >
              <option value="Toán">Toán</option>
              <option value="Ngữ văn">Ngữ văn</option>
              <option value="Tiếng Anh">Tiếng Anh</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Ngày</label>
            <input
              type="date"
              value={assignmentDate}
              onChange={(e) => setAssignmentDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Tên HS</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Tùy chọn"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>

        {/* Upload Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem Files */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-500" />
              Đề Bài <span className="text-rose-500">*</span>
            </label>

            <div
              onClick={() => problemInputRef.current?.click()}
              className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50 hover:bg-blue-50/50"
            >
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-500">Click để upload</p>
              <p className="text-xs text-slate-400 mt-1">PNG, JPG, PDF</p>
            </div>

            <input
              ref={problemInputRef}
              type="file"
              accept="image/*,.pdf,application/pdf"
              multiple
              onChange={(e) => handleFileUpload(e, 'problem')}
              className="hidden"
            />

            {problemFiles.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {problemFiles.map((file, idx) => (
                  <div key={idx} className="relative group">
                    {isPdf(file.type) ? (
                      <div className="w-16 h-16 bg-rose-50 border border-rose-200 rounded-lg flex flex-col items-center justify-center">
                        <File className="w-6 h-6 text-rose-500" />
                        <span className="text-[10px] text-rose-600 mt-1">PDF</span>
                      </div>
                    ) : (
                      <img
                        src={file.data}
                        alt={`Đề ${idx + 1}`}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => removeFile(idx, 'problem')}
                      className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Student Files */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Camera className="w-4 h-4 text-emerald-500" />
              Bài Làm <span className="text-rose-500">*</span>
            </label>

            <div
              onClick={() => studentInputRef.current?.click()}
              className="border-2 border-dashed border-slate-200 hover:border-emerald-400 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50 hover:bg-emerald-50/50"
            >
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-500">Click để upload</p>
              <p className="text-xs text-slate-400 mt-1">PNG, JPG, PDF</p>
            </div>

            <input
              ref={studentInputRef}
              type="file"
              accept="image/*,.pdf,application/pdf"
              multiple
              onChange={(e) => handleFileUpload(e, 'student')}
              className="hidden"
            />

            {studentFiles.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {studentFiles.map((file, idx) => (
                  <div key={idx} className="relative group">
                    {isPdf(file.type) ? (
                      <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-lg flex flex-col items-center justify-center">
                        <File className="w-6 h-6 text-emerald-500" />
                        <span className="text-[10px] text-emerald-600 mt-1">PDF</span>
                      </div>
                    ) : (
                      <img
                        src={file.data}
                        alt={`Bài làm ${idx + 1}`}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => removeFile(idx, 'student')}
                      className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Đang chấm bài...</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>Bắt Đầu Chấm Bài</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
