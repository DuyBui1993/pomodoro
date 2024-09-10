import * as React from 'react';
import { TikTokHeader } from '@/components/duy/TikTokTab/TikTokHeader';
import { TikTokBottomTabList } from '@/components/duy/TikTokTab/TikTokBottomTabList';

const TikTokTabPage = () => {
  return (
    <div className="h-screen bg-white">
      <div className="items item mx-auto flex h-full w-[1024px] flex-col">
        <TikTokHeader />
        <TikTokBottomTabList />
      </div>
    </div>
  );
};

export default TikTokTabPage;
