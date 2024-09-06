import * as React from 'react';
import { CountDown } from '@/components/luan/countDown/CountDount';

const HomePage = () => {
  return (
    <div className="h-screen bg-[rgb(186,73,73)]">
      <div className="mx-auto p-4">
        <CountDown />
      </div>
    </div>
  );
};

export default HomePage;
