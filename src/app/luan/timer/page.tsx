import * as React from 'react';
import BaseAccount from '@/components/luan/account/BaseAccount';
import { Timer } from '@/components/luan/test/timer/Timer';

const HomePage = () => {
  return (
    <div className="h-screen bg-white">
      <Timer />
    </div>
  );
};

export default HomePage;
