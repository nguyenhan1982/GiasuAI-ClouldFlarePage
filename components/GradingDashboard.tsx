'use client';

import { StudentProfile, GradingSession } from '@/lib/types';
import {
  TrendingUp,
  Award,
  BookCheck,
  Calendar,
  AlertTriangle,
  Star,
  BarChart3
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';

interface GradingDashboardProps {
  profile: StudentProfile;
  onViewSession: (session: GradingSession) => void;
}

// Format date from "YYYY-MM-DD" to "Ngày làm bài: DD/MM/YYYY"
const formatDate = (dateStr: string): string => {
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `Ngày làm bài: ${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
};

export default function GradingDashboard({ profile, onViewSession }: GradingDashboardProps) {
  const sessions = profile.sessions || [];

  // Calculate statistics
  const totalSessions = sessions.length;
  const averageScore = totalSessions > 0
    ? sessions.reduce((sum, s) => sum + (s.score / s.totalPoints) * 10, 0) / totalSessions
    : 0;

  // Get latest session by date (use ID as secondary sort since ID is timestamp-based)
  const latestSession = totalSessions > 0
    ? [...sessions].sort((a, b) => {
        const dateCompare = new Date(b.date).getTime() - new Date(a.date).getTime();
        if (dateCompare !== 0) return dateCompare;
        // If same date, use ID (timestamp-based) as secondary sort
        return b.id.localeCompare(a.id);
      })[0]
    : null;
  const latestScore = latestSession
    ? (latestSession.score / latestSession.totalPoints) * 10
    : 0;

  // Prepare chart data - sort by date and show ALL sessions (use ID as secondary sort)
  const sortedSessions = [...sessions].sort((a, b) => {
    const dateCompare = new Date(a.date).getTime() - new Date(b.date).getTime();
    if (dateCompare !== 0) return dateCompare;
    // If same date, use ID (timestamp-based) as secondary sort
    return a.id.localeCompare(b.id);
  });
  const chartData = sortedSessions.map((session) => ({
    name: session.date.slice(5), // MM-DD format
    fullDate: session.date,
    score: Number(((session.score / session.totalPoints) * 10).toFixed(1)),
    subject: session.subject,
    grade: session.grade
  }));

  // Calculate x-axis interval based on data length
  const xAxisInterval = chartData.length > 20 ? Math.floor(chartData.length / 15) : 0;

  // Get frequent mistakes and strengths
  const mistakeCount: Record<string, number> = {};
  const strengthCount: Record<string, number> = {};

  sessions.forEach(session => {
    session.weaknesses?.forEach(w => {
      mistakeCount[w] = (mistakeCount[w] || 0) + 1;
    });
    session.strengths?.forEach(s => {
      strengthCount[s] = (strengthCount[s] || 0) + 1;
    });
  });

  const topMistakes = Object.entries(mistakeCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const topStrengths = Object.entries(strengthCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-emerald-600';
    if (score >= 6) return 'text-blue-600';
    if (score >= 4) return 'text-amber-600';
    return 'text-rose-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 8) return 'bg-emerald-50 border-emerald-100';
    if (score >= 6) return 'bg-blue-50 border-blue-100';
    if (score >= 4) return 'bg-amber-50 border-amber-100';
    return 'bg-rose-50 border-rose-100';
  };

  if (totalSessions === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm text-center">
          <BarChart3 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-800 mb-2">Chưa Có Dữ Liệu</h2>
          <p className="text-slate-500">
            Hãy chấm bài đầu tiên để xem tiến độ học tập của bạn.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Tiến Độ Học Tập</h2>
          <p className="text-sm text-slate-500">
            {profile.name ? `Học sinh: ${profile.name}` : 'Theo dõi kết quả học tập'}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-xl">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-slate-500">Điểm TB</span>
          </div>
          <p className={`text-3xl font-bold ${getScoreColor(averageScore)}`}>
            {averageScore.toFixed(1)}
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-50 rounded-xl">
              <BookCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-sm text-slate-500">Số Bài</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">{totalSessions}</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-amber-50 rounded-xl">
              <Award className="w-5 h-5 text-amber-600" />
            </div>
            <span className="text-sm text-slate-500">Điểm Mới Nhất</span>
          </div>
          <p className={`text-3xl font-bold ${getScoreColor(latestScore)}`}>
            {latestScore.toFixed(1)}
          </p>
        </div>
      </div>

      {/* Progress Chart */}
      {chartData.length > 1 && (
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-500" />
            Biểu Đồ Tiến Độ
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  axisLine={{ stroke: '#e2e8f0' }}
                  interval={xAxisInterval}
                  angle={-45}
                  textAnchor="end"
                  height={50}
                />
                <YAxis
                  domain={[0, 10]}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                  axisLine={{ stroke: '#e2e8f0' }}
                  tickCount={6}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-lg">
                          <p className="font-semibold text-slate-800">{data.fullDate}</p>
                          <p className="text-sm text-slate-500">{data.subject} - Lớp {data.grade}</p>
                          <p className="text-lg font-bold text-blue-600 mt-1">{data.score} điểm</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: '#2563eb' }}
                >
                  <LabelList
                    dataKey="score"
                    position="top"
                    offset={8}
                    style={{ fontSize: 10, fill: '#64748b', fontWeight: 500 }}
                  />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Weaknesses & Strengths */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Weaknesses */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h3 className="font-semibold text-amber-800">Lỗ Hổng Kiến Thức</h3>
          </div>
          {topMistakes.length > 0 ? (
            <ul className="space-y-2">
              {topMistakes.map(([mistake, count], idx) => (
                <li key={idx} className="flex items-center justify-between text-sm">
                  <span className="text-amber-700">{mistake}</span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-600 rounded-full text-xs">
                    {count} lần
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-amber-600 italic">Chưa có dữ liệu</p>
          )}
        </div>

        {/* Strengths */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-5 h-5 text-emerald-600" />
            <h3 className="font-semibold text-emerald-800">Điểm Mạnh</h3>
          </div>
          {topStrengths.length > 0 ? (
            <ul className="space-y-2">
              {topStrengths.map(([strength, count], idx) => (
                <li key={idx} className="flex items-center justify-between text-sm">
                  <span className="text-emerald-700">{strength}</span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded-full text-xs">
                    {count} lần
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-emerald-600 italic">Chưa có dữ liệu</p>
          )}
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-500" />
          Bài Làm Gần Đây
        </h3>
        <div className="space-y-3">
          {[...sortedSessions].reverse().slice(0, 5).map((session) => (
            <button
              key={session.id}
              onClick={() => onViewSession(session)}
              className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-colors hover:shadow-sm ${getScoreBg((session.score / session.totalPoints) * 10)}`}
            >
              <div className="flex items-center gap-3">
                <div className="text-left">
                  <p className="text-sm text-slate-500">{formatDate(session.date)}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-xl font-bold ${getScoreColor((session.score / session.totalPoints) * 10)}`}>
                  {((session.score / session.totalPoints) * 10).toFixed(2)}/10
                </p>
                <p className="text-xs text-slate-500">
                  {((session.score / session.totalPoints) * 100).toFixed(0)}%
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Overall Progress */}
      {profile.overallProgress && (
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6">
          <h3 className="font-semibold text-blue-800 mb-2">Đánh Giá Tổng Quát</h3>
          <p className="text-sm text-blue-700 leading-relaxed">
            {profile.overallProgress}
          </p>
        </div>
      )}
    </div>
  );
}
