'use client';
import './globals.css';
import { Inter, Vazirmatn } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });
const vazir = Vazirmatn({ subsets: ['arabic'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const locale = router?.locale || 'en';
  const isRtl = locale === 'fa';
  const fontClass = isRtl ? vazir.className : inter.className;

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <body className={fontClass}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}