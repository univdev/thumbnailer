import type { Metadata } from 'next';
import 'normalize.css';
import '@/shared/styles/global.css';
import '@/shared/styles/fonts.css';
import MuiTheme from '@/core/MuiTheme/MuiTheme';

export const metadata: Metadata = {
  title: 'Thumbnailer',
  description: '기술 블로그에 사용할 썸네일을 제작하는 서비스입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MuiTheme>
        <body>{children}</body>
      </MuiTheme>
    </html>
  );
}
