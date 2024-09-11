import * as React from 'react';
import { RedditContent } from '@/components/duong/reddit-tab/RedditContent';
import { RedditTab } from '@/components/duong/reddit-tab/RedditTab';

export const HomePage = () => {
  return (
    <div className="h-screen bg-white">
      <div className="items item mx-auto flex h-full w-[1050px] flex-col">
        <RedditContent />
        <RedditTab />
      </div>
    </div>
  );
};

export default HomePage;
