import { Header } from '@/components/oanh/facebook/Header';
import * as React from 'react';
import { TikTokTab } from '@/components/oanh/tiktok/TikTokTab';
import { TikTokHeader } from '@/components/oanh/tiktok/TikTokHeader';

const HomePage = () => {
  return (
    <div className="h-screen bg-white">
      <div className="mx-auto h-full w-[640px] p-4 font-extrabold text-black">
        <TikTokHeader />
        <TikTokTab />
      </div>
    </div>
  );
};
export default HomePage;
