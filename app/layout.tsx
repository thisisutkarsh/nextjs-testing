import '~/assets/styles/base.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'PetCareBot',
  description: 'AI-powered chatbot for pet parents',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
