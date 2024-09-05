import * as React from 'react';
import { Header } from '@/components/duy/Header';
import { CountDown } from '@/components/duy/CountDown';

const HomePage = () => {
  return (
    <div className="h-screen bg-[rgb(186,73,73)]">
      <div className="mx-auto p-4">
        <Header />
        <CountDown />
      </div>
    </div>
  );
};

export default HomePage;
