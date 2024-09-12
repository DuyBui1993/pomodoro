import * as React from 'react';
import { RedditHeader } from '@/components/oanh/reddit/RedditHeader';
import { RedditTab } from '@/components/oanh/reddit/RedditTab';

const HomePage = () => {
  return (
    <div className="h-screen bg-white">
      <div className="mx-auto h-full w-[640px] p-4 font-extrabold text-black">
        <RedditHeader />
        <RedditTab />
      </div>
    </div>
  );
};
export default HomePage;
