'use client';

import { GradingSession } from '@/lib/types';
import {
  Clock,
  ChevronRight,
  BookOpen,
  Trash2
} from 'lucide-react';

interface GradingHistoryProps {
  sessions: GradingSession[];
  onViewSession: (session: GradingSession) => void;
  onDeleteSession?: (sessionId: string) => void;
}

export default function GradingHistory({
  sessions,
  onViewSession,
  onDeleteSession
}: GradingHistoryProps) {
  // Sort sessions by date (newest first), use ID as secondary sort for same date
  const sortedSessions = [...sessions].sort((a, b) => {
    const dateCompare = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateCompare !== 0) return dateCompare;
    return b.id.localeCompare(a.id);
  });

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-emerald-600 bg-emerald-50 border-emerald-100';
    if (percentage >= 60) return 'text-blue-600 bg-blue-50 border-blue-100';
    if (percentage >= 40) return 'text-amber-600 bg-amber-50 border-amber-100';
    return 'text-rose-600 bg-rose-50 border-rose-100';
  };

  const getScoreEmoji = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return '🌟';
    if (percentage >= 80) return '😊';
    if (percentage >= 60) return '👍';
    if (percentage >= 40) return '💪';
    return '📚';
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (sessions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm text-center">
          <Clock className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-800 mb-2">Chưa Có Lịch Sử</h2>
          <p className="text-slate-500">
            Hãy chấm bài để xem lịch sử học tập.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Lịch Sử Chấm Bài</h2>
          <p className="text-sm text-slate-500">
            {sortedSessions.length} bài làm
          </p>
        </div>
      </div>

      {/* Sessions List */}
      <div className="space-y-3">
        {sortedSessions.map((session) => (
          <div
            key={session.id}
            className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => onViewSession(session)}
              className="w-full p-4 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${getScoreColor(session.score, session.totalPoints)}`}>
                    <span className="text-xl font-bold">
                      {((session.score / session.totalPoints) * 10).toFixed(1)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-slate-400" />
                      <p className="font-semibold text-slate-800">
                        {session.subject} - Lớp {session.grade}
                      </p>
                      <span className="text-lg">{getScoreEmoji(session.score, session.totalPoints)}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-0.5">
                      {formatDate(session.date)}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {session.details.length} câu • {((session.score / session.totalPoints) * 10).toFixed(2)}/10 điểm
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-slate-300" />
                </div>
              </div>

              {/* Quick summary */}
              {session.feedback && (
                <p className="mt-3 text-sm text-slate-600 line-clamp-2 border-t border-slate-50 pt-3">
                  {session.feedback}
                </p>
              )}
            </button>

            {/* Delete button */}
            {onDeleteSession && (
              <div className="px-4 pb-3 flex justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (confirm('Bạn có chắc muốn xóa bài làm này?')) {
                      onDeleteSession(session.id);
                    }
                  }}
                  className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {sortedSessions.length === 0 && (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center">
          <p className="text-slate-500">Không tìm thấy bài làm nào phù hợp.</p>
        </div>
      )}
    </div>
  );
}
