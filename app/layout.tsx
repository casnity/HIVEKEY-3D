import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import { Providers } from '@/components/Providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Flow Hive 65 | Precision, perfected.',
  description: 'Flagship mechanical performance, refined to its purest form.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-black text-white antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
