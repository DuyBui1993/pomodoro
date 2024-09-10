'use client';
import * as React from 'react';
import CountDownTab from '@/components/luan/countDown/CountDownTab';
import { Header } from '@/components/luan/countDown/CountDownHeader';
import PomodoroAddTask from '@/components/luan/countDown/task/PomodoroAddTask';
import { PomodoroAbout } from '@/components/luan/countDown/about/PomodoroAbout';
import PomodoroFooter from '@/components/luan/countDown/about/PomodoroFooter';

const initBgColor = [
  {
    bgColor: 'bg-[rgb(186,73,73)]',
  },
  {
    bgColor: 'bg-[rgb(56,133,138)]',
  },
  {
    bgColor: 'bg-[rgb(57,112,151)]',
  },
];

export const CountDown = () => {
  const [bgColor, setBgColor] = React.useState(initBgColor[0].bgColor);

  const sendIndexTab = (indexTab: number) => {
    setBgColor(initBgColor[indexTab].bgColor);
  };

  return (
    <div className="bg-white">
      <div className={`${bgColor}`}>
        <div className="mx-auto h-full max-w-[620px] p-4">
          <Header />
          <div className="px-16">
            <CountDownTab indexTab={sendIndexTab} />
            <PomodoroAddTask />
          </div>
        </div>
      </div>
      <div className="mx-auto w-1/2 p-12 text-red-950">
        <PomodoroAbout />
      </div>
      <hr />
      <div>
        <PomodoroFooter />
      </div>
    </div>
  );
};
