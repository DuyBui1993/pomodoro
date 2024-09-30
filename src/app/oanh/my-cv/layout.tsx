import { Inter } from 'next/font/google';
import React from 'react';
import { ContentNavbar } from '@/components/oanh/cv/ContentNavbar';
import { HeaderResume } from '@/components/oanh/cv/HeaderResume';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto h-screen w-[850px] bg-white p-4 text-black">
          <HeaderResume />
          <ContentNavbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
