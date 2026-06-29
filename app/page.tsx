'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/auth-context';
import GoogleLoginButton from '@/components/GoogleLoginButton';
import {
  GraduationCap,
  BookOpen,
  PenTool,
  TrendingUp,
  Cloud,
  Shield,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function LandingPage() {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  // Redirect to app if already logged in
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.push('/app');
    }
  }, [isLoggedIn, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
          <p className="text-white/80 font-medium">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (isLoggedIn) {
    return null;
  }

  const features = [
    {
      icon: BookOpen,
      title: 'Tạo Đề Thi AI',
      description: 'Tạo đề thi tự động cho lớp 1-12 với nhiều môn học. Trắc nghiệm và tự luận.',
      color: 'bg-blue-500'
    },
    {
      icon: PenTool,
      title: 'Chấm Bài Thông Minh',
      description: 'Upload ảnh bài làm, AI chấm điểm chi tiết và đưa ra nhận xét.',
      color: 'bg-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Theo Dõi Tiến Độ',
      description: 'Biểu đồ tiến độ học tập, phân tích điểm mạnh và điểm yếu.',
      color: 'bg-amber-500'
    },
    {
      icon: Cloud,
      title: 'Lưu Trữ Google Drive',
      description: 'Dữ liệu được lưu an toàn trên Google Drive cá nhân của bạn.',
      color: 'bg-purple-500'
    }
  ];

  const benefits = [
    'Hoàn toàn miễn phí',
    'Hỗ trợ lớp 1 đến lớp 12',
    'Đồng bộ trên mọi thiết bị',
    'Bảo mật dữ liệu riêng tư'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 text-white p-2 rounded-xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Gia Sư AI</h1>
              <p className="text-xs text-blue-300">Học tập cá nhân hóa</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-blue-200 font-medium">Powered by Google Gemini AI</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Hệ Thống Học Tập
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Cá Nhân Hóa</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Hỗ trợ học tập cho học sinh phổ thông từ lớp 1 đến lớp 12.
            Tạo đề thi, chấm bài tự động và theo dõi tiến độ với AI.
          </p>

          {/* Login Button */}
          <div className="flex flex-col items-center gap-4">
            <GoogleLoginButton
              onSuccess={() => router.push('/app')}
              onError={(err) => console.error('Login error:', err)}
            />
            <p className="text-sm text-slate-400">
              Đăng nhập để lưu dữ liệu học tập của bạn
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Tính Năng Nổi Bật
          </h3>
          <p className="text-slate-400">
            Công cụ học tập toàn diện cho học sinh Việt Nam
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Dữ Liệu An Toàn & Riêng Tư
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Toàn bộ dữ liệu học tập của bạn được lưu trữ trên Google Drive cá nhân.
            Chúng tôi không lưu trữ bất kỳ dữ liệu nào trên server.
            Bạn hoàn toàn kiểm soát dữ liệu của mình.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Gia Sư AI. Thiết kế cho học sinh Việt Nam.
          </p>
        </div>
      </footer>
    </div>
  );
}
