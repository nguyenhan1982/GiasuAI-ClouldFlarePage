import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Gia Sư AI - Hệ Thống Học Tập Cá Nhân Hóa',
  description: 'Hệ thống hỗ trợ học tập cá nhân hóa cho học sinh phổ thông với AI',
  verification: {
    google: 'Pu24aTvv3fqf2_gt-KP5-MS3XPej11D7H80k846WOX8',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-slate-50">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
