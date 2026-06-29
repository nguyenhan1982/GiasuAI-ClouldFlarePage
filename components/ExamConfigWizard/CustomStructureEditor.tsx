'use client';

import { useState, useEffect } from 'react';
import {
  Plus,
  Trash2,
  Save,
  History,
  X,
  Edit3,
  Check,
  BookOpen
} from 'lucide-react';
import { ExamSection, QuestionFormatCode } from '@/lib/exam-config/types';
import { QUESTION_FORMATS } from '@/lib/exam-config/constants';

// Types for saved structures
export interface SavedCustomStructure {
  id: string;
  name: string;
  sections: ExamSection[];
  totalPoints: number;
  createdAt: string;
  // Context info
  grade?: number;
  subject?: string;
  examType?: string;
}

const STORAGE_KEY = 'custom_exam_structures';

// LocalStorage helpers
export function getSavedStructures(): SavedCustomStructure[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveStructure(structure: SavedCustomStructure): void {
  if (typeof window === 'undefined') return;
  const existing = getSavedStructures();
  const updated = [structure, ...existing.filter(s => s.id !== structure.id)].slice(0, 10); // Keep max 10
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function deleteStructure(id: string): void {
  if (typeof window === 'undefined') return;
  const existing = getSavedStructures();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.filter(s => s.id !== id)));
}

interface CustomStructureEditorProps {
  defaultSections: ExamSection[];
  onSectionsChange: (sections: ExamSection[]) => void;
  context?: {
    grade?: number;
    subject?: string;
    examType?: string;
  };
}

export default function CustomStructureEditor({
  defaultSections,
  onSectionsChange,
  context
}: CustomStructureEditorProps) {
  const [sections, setSections] = useState<ExamSection[]>(defaultSections);
  const [savedStructures, setSavedStructures] = useState<SavedCustomStructure[]>([]);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showLoadDialog, setShowLoadDialog] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);

  // Load saved structures on mount
  useEffect(() => {
    setSavedStructures(getSavedStructures());
  }, []);

  // Sync with parent
  useEffect(() => {
    onSectionsChange(sections);
  }, [sections, onSectionsChange]);

  const totalPoints = sections.reduce((sum, s) => sum + s.points, 0);

  // Add new section
  const addSection = () => {
    const newSection: ExamSection = {
      id: `section_${Date.now()}`,
      name: 'New Section',
      nameVi: 'Phần mới',
      points: 2,
      questionFormats: ['TU_LUAN'],
      questionCount: 2,
      description: ''
    };
    setSections([...sections, newSection]);
    setEditingSectionId(newSection.id);
  };

  // Update section
  const updateSection = (id: string, updates: Partial<ExamSection>) => {
    setSections(sections.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  // Remove section
  const removeSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id));
  };

  // Save current structure
  const handleSave = () => {
    if (!saveName.trim()) return;

    const structure: SavedCustomStructure = {
      id: `custom_${Date.now()}`,
      name: saveName.trim(),
      sections,
      totalPoints,
      createdAt: new Date().toISOString(),
      ...context
    };

    saveStructure(structure);
    setSavedStructures(getSavedStructures());
    setShowSaveDialog(false);
    setSaveName('');
  };

  // Load saved structure
  const handleLoad = (structure: SavedCustomStructure) => {
    setSections(structure.sections);
    setShowLoadDialog(false);
  };

  // Delete saved structure
  const handleDelete = (id: string) => {
    deleteStructure(id);
    setSavedStructures(getSavedStructures());
  };

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={addSection}
          className="flex items-center gap-1.5 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium rounded-lg transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Thêm phần
        </button>

        <button
          onClick={() => setShowSaveDialog(true)}
          className="flex items-center gap-1.5 px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-medium rounded-lg transition-colors"
        >
          <Save className="w-3.5 h-3.5" />
          Lưu cấu trúc
        </button>

        {savedStructures.length > 0 && (
          <button
            onClick={() => setShowLoadDialog(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-medium rounded-lg transition-colors"
          >
            <History className="w-3.5 h-3.5" />
            Tải đã lưu ({savedStructures.length})
          </button>
        )}
      </div>

      {/* Sections List */}
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="bg-white border border-slate-200 rounded-xl p-4"
          >
            {editingSectionId === section.id ? (
              // Edit mode
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={section.nameVi}
                    onChange={(e) => updateSection(section.id, { nameVi: e.target.value })}
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium"
                    placeholder="Tên phần"
                  />
                  <button
                    onClick={() => setEditingSectionId(null)}
                    className="p-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Số điểm</label>
                    <input
                      type="number"
                      value={section.points}
                      onChange={(e) => updateSection(section.id, { points: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                      min="0"
                      max="10"
                      step="0.5"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Số câu</label>
                    <input
                      type="number"
                      value={section.questionCount || 1}
                      onChange={(e) => updateSection(section.id, { questionCount: parseInt(e.target.value) || 1 })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                      min="1"
                      max="50"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-xs text-slate-500 mb-1 block">Dạng câu hỏi</label>
                    <select
                      value={section.questionFormats[0]}
                      onChange={(e) => updateSection(section.id, { questionFormats: [e.target.value as QuestionFormatCode] })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                    >
                      {QUESTION_FORMATS.map((format) => (
                        <option key={format.code} value={format.code}>
                          {format.nameVi}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Mô tả (tùy chọn)</label>
                  <input
                    type="text"
                    value={section.description || ''}
                    onChange={(e) => updateSection(section.id, { description: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
                    placeholder="Ví dụ: 6 câu × 0.5 điểm"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={section.hasReadingPassage || false}
                      onChange={(e) => updateSection(section.id, { hasReadingPassage: e.target.checked })}
                      className="rounded"
                    />
                    Có đoạn văn đọc hiểu
                  </label>
                </div>
              </div>
            ) : (
              // View mode
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-slate-800">
                      {section.nameVi}
                    </span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {section.points} điểm
                    </span>
                  </div>

                  {section.description && (
                    <p className="text-sm text-slate-500 mt-1">{section.description}</p>
                  )}

                  <div className="flex flex-wrap gap-2 mt-2">
                    {section.questionFormats.map((formatCode, i) => {
                      const format = QUESTION_FORMATS.find(f => f.code === formatCode);
                      return format ? (
                        <span
                          key={i}
                          className="px-2 py-1 bg-slate-100 text-xs text-slate-600 rounded-lg"
                        >
                          {format.nameVi}
                        </span>
                      ) : null;
                    })}
                  </div>

                  {section.hasReadingPassage && (
                    <div className="mt-2 flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-lg w-fit">
                      <BookOpen className="w-3 h-3" />
                      <span>Có đoạn văn đọc hiểu</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  {section.questionCount && (
                    <div className="text-right mr-2">
                      <div className="text-xl font-bold text-slate-700">
                        {section.questionCount}
                      </div>
                      <div className="text-xs text-slate-400">câu</div>
                    </div>
                  )}

                  <button
                    onClick={() => setEditingSectionId(section.id)}
                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => removeSection(section.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    disabled={sections.length <= 1}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Total */}
      <div className={`flex items-center justify-between p-4 border rounded-xl ${
        totalPoints === 10 ? 'bg-emerald-50 border-emerald-100' : 'bg-amber-50 border-amber-100'
      }`}>
        <span className={`font-medium ${totalPoints === 10 ? 'text-emerald-800' : 'text-amber-800'}`}>
          Tổng điểm
        </span>
        <span className={`text-2xl font-bold ${totalPoints === 10 ? 'text-emerald-700' : 'text-amber-700'}`}>
          {totalPoints} điểm
        </span>
      </div>

      {totalPoints !== 10 && (
        <p className="text-xs text-amber-600 text-center">
          ⚠️ Tổng điểm nên bằng 10. Hiện tại: {totalPoints} điểm
        </p>
      )}

      {/* Save Dialog */}
      {showSaveDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-800">Lưu cấu trúc đề thi</h3>
              <button onClick={() => setShowSaveDialog(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <input
              type="text"
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              placeholder="Tên cấu trúc (VD: Toán 6 cuối kỳ)"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm mb-4"
              autoFocus
            />

            <div className="flex gap-2">
              <button
                onClick={() => setShowSaveDialog(false)}
                className="flex-1 py-2.5 text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                Hủy
              </button>
              <button
                onClick={handleSave}
                disabled={!saveName.trim()}
                className="flex-1 py-2.5 text-sm text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 rounded-xl"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Load Dialog */}
      {showLoadDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl max-h-[80vh] overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-800">Chọn cấu trúc đã lưu</h3>
              <button onClick={() => setShowLoadDialog(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {savedStructures.map((structure) => (
                <div
                  key={structure.id}
                  className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <button
                    onClick={() => handleLoad(structure)}
                    className="flex-1 text-left"
                  >
                    <p className="font-medium text-slate-800">{structure.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {structure.sections.length} phần • {structure.totalPoints} điểm
                      {structure.grade && ` • Lớp ${structure.grade}`}
                    </p>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(structure.id);
                    }}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowLoadDialog(false)}
              className="w-full mt-4 py-2.5 text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
