import type { Metadata } from 'next';
import { Shield, Database, Brain, Eye, Trash2, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chính sách Bảo mật - Gia Sư AI',
  description: 'Chính sách bảo mật của Gia Sư AI — cách chúng tôi bảo vệ dữ liệu cá nhân của bạn.',
};

const sections = [
  {
    icon: Shield,
    color: 'bg-blue-500',
    shadow: 'shadow-blue-200',
    title: 'Cam kết cốt lõi',
    content: (
      <>
        <p className="mt-2 text-base text-slate-500">
          Gia Sư AI được xây dựng trên nguyên tắc <strong className="text-slate-700">dữ liệu của bạn thuộc về bạn</strong>.
          Chúng tôi không thu thập, không lưu trữ, và không có khả năng đọc nội dung cá nhân của bạn trên server của Gia Sư AI.
        </p>
        <ul className="mt-3 space-y-1 text-base text-slate-500 list-none">
          {[
            'Bài làm và kết quả chấm điểm của học sinh',
            'Đề thi được tạo bởi AI',
            'Thông tin cài đặt và API key của bạn',
            'Bất kỳ dữ liệu cá nhân nào bạn nhập vào app',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: Database,
    color: 'bg-emerald-500',
    shadow: 'shadow-emerald-200',
    title: 'Dữ liệu được lưu ở đâu?',
    content: (
      <div className="mt-2 space-y-3 text-base text-slate-500">
        <p>
          <strong className="text-slate-700">Tạm thời trên trình duyệt của bạn</strong> — dữ liệu được lưu trong
          IndexedDB (bộ nhớ cục bộ của trình duyệt). App hoạt động đầy đủ ngay cả khi offline.
        </p>
        <p>
          <strong className="text-slate-700">Đồng bộ vào Google Drive của chính bạn</strong> — nếu bạn chọn đăng nhập
          bằng Google, dữ liệu sẽ được lưu vào vùng dữ liệu ẩn (appDataFolder) trong
          Google Drive của bạn. Chúng tôi chỉ có quyền truy cập các file do chính app tạo ra
          (scope <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">drive.file</code> và <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">drive.appdata</code>),
          không thể đọc các file khác trong Drive của bạn.
        </p>
      </div>
    ),
  },
  {
    icon: Brain,
    color: 'bg-violet-500',
    shadow: 'shadow-violet-200',
    title: 'AI xử lý dữ liệu như thế nào?',
    content: (
      <div className="mt-2 space-y-3 text-base text-slate-500">
        <p>
          Các tính năng AI (tạo đề thi, chấm bài, gợi ý ôn tập) gọi đến Google Gemini API.
          Quá trình này diễn ra <strong className="text-slate-700">thông qua server của Gia Sư AI</strong> nhưng
          chúng tôi <strong className="text-slate-700">không ghi log</strong> nội dung bạn gửi đến AI.
        </p>
        <p>
          Dữ liệu AI nhận được chịu sự điều chỉnh bởi chính sách riêng của Google Gemini.
        </p>
        <p>
          Bạn có thể sử dụng API key Gemini của chính mình (nhập trong phần Cài đặt) để có
          toàn quyền kiểm soát việc gọi AI.
        </p>
      </div>
    ),
  },
  {
    icon: Eye,
    color: 'bg-amber-500',
    shadow: 'shadow-amber-200',
    title: 'Quyền truy cập Google Drive',
    content: (
      <div className="mt-2 space-y-3 text-base text-slate-500">
        <p>
          Khi đăng nhập bằng Google, Gia Sư AI yêu cầu quyền truy cập giới hạn:
        </p>
        <div className="bg-slate-50 rounded-lg p-4 space-y-2">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 text-green-500">✓</span>
            <p><strong className="text-slate-700">openid, email, profile</strong> — để xác định bạn là ai (hiển thị tên và ảnh đại diện)</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 text-green-500">✓</span>
            <p><strong className="text-slate-700">drive.file</strong> — chỉ đọc/ghi các file do Gia Sư AI tạo ra trong Drive của bạn</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 mt-0.5 text-green-500">✓</span>
            <p><strong className="text-slate-700">drive.appdata</strong> — lưu dữ liệu vào vùng ẩn riêng của app, không hiển thị trong Drive của bạn</p>
          </div>
        </div>
        <p>
          App <strong>không thể</strong> xem, sửa, hay xóa các file khác của bạn.
          Bạn có thể thu hồi quyền truy cập bất cứ lúc nào tại{' '}
          <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            myaccount.google.com/permissions
          </a>.
        </p>
      </div>
    ),
  },
  {
    icon: Trash2,
    color: 'bg-rose-500',
    shadow: 'shadow-rose-200',
    title: 'Quyền của bạn',
    content: (
      <ul className="mt-2 space-y-2 text-base text-slate-500">
        {[
          'Xem toàn bộ dữ liệu: vào phần Lịch sử trong app',
          'Xuất dữ liệu: tải file JSON về máy bất cứ lúc nào',
          'Xóa dữ liệu: sử dụng chức năng "Xóa Toàn Bộ Dữ Liệu" trong Cài đặt',
          'Thu hồi quyền Google: myaccount.google.com/permissions → Gia Sư AI → Remove',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-rose-400" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 mb-5">
            <Shield size={28} className="text-blue-500" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Chính sách Bảo mật
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Gia Sư AI được thiết kế với nguyên tắc:{' '}
            <span className="font-semibold text-slate-700">dữ liệu học tập của bạn không bao giờ chạm vào server của chúng tôi.</span>
          </p>
          <p className="mt-2 text-sm text-slate-400">Cập nhật lần cuối: tháng 6 năm 2026</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map(({ icon: Icon, color, shadow, title, content }) => (
            <div key={title} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className={`flex items-center justify-center h-12 w-12 rounded-xl ${color} text-white shadow-lg ${shadow}`}>
                  <Icon size={22} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
                {content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-slate-700 text-white shadow-lg shadow-slate-200">
              <Mail size={22} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Liên hệ</h2>
              <p className="mt-1 text-base text-slate-500">
                Nếu bạn có câu hỏi về chính sách bảo mật hoặc muốn yêu cầu xóa dữ liệu,
                hãy liên hệ:{' '}
                <a
                  href="mailto:nguyenhuuhan1982@gmail.com"
                  className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  nguyenhuuhan1982@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-10 text-center">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
          >
            ← Quay về trang chủ
          </a>
        </div>

      </div>
    </div>
  );
}
