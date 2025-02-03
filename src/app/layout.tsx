import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import 'normalize.css';
import '@/shared/styles/fonts.css';
import '@/shared/styles/tailwind.css';
import '@/shared/styles/global.css';
import { ThemeProvider } from '@/shared/components/ThemeProvider';
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
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <body>{children}</body>
      </ThemeProvider>
      <GoogleAnalytics gaId="G-8H3EYQ1LTL" />
    </html>
  );
}
