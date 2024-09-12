import * as React from 'react';
import { Tab } from '@/components/duong/tiktok-tab/Tab';
import { Content } from '@/components/duong/tiktok-tab/Content';

export const HomePage = () => {
  return (
    <div className="h-screen bg-white">
      <div className="items item mx-auto flex h-full w-[1050px] flex-col">
        <Content />
        <Tab />
      </div>
    </div>
  );
};

export default HomePage;
