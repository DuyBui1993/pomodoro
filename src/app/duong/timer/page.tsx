import * as React from 'react';
import { TimerCountDown } from '@/components/duong/timer/TimerCountDown';

const HomePage = () => {
  return (
    <div className="bg-white">
      <div className="flex h-screen bg-pink-900 pt-20 text-blue-950">
        <div className="mx-auto">
          <TimerCountDown />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
