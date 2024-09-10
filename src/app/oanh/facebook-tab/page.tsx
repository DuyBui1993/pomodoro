import { Header } from '@/components/oanh/facebook/Header';
import * as React from 'react';
import { FacebookTab } from '@/components/oanh/facebook/FacebookTab';

const HomePage = () => {
  return (
    <div className="h-screen bg-white">
      <div className="mx-auto w-[640px] p-4">
        <Header />
        <FacebookTab />
      </div>
    </div>
  );
};
export default HomePage;
