import { Inter } from 'next/font/google';
import React, { FC } from 'react';
import { SidebarContent } from '@/components/luan/test/cv/SidebarContent';

const inter = Inter({ subsets: ['latin'] });

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`grid grid-cols-[300px_1fr] bg-white`}>
          <SidebarContent />
          <div className={`h-screen overflow-y-auto`}>{children}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
