'use client';
import * as React from 'react';
import { Header } from '@/components/oanh/Header';
import { CountDown } from '@/components/oanh/CountDown';
import { AboutPomodoro } from '@/components/oanh/AboutPomodoro';
import { FooterPomodoro } from '@/components/oanh/FooterPomodoro';
import { CurrentTask } from '@/components/oanh/CurrentTask';
import { TaskList } from '@/components/oanh/TaskList';
import { AddTaskAction } from '@/components/oanh/AddTaskAction';

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
const HomePage = () => {
  const [bgColor, setBgColor] = React.useState(initBgColor[0].bgColor);

  const indexTab = (indexTab: number) => {
    setBgColor(initBgColor[indexTab].bgColor);
  };

  return (
    <div className="bg-white">
      <div className={`h-screen ${bgColor}`}>
        <div className="mx-auto max-w-[640px] p-4">
          <Header />
          <div className="px-16">
            <CountDown indexTab={indexTab} />
            <CurrentTask />
            <TaskList />
            <AddTaskAction />
          </div>
        </div>
      </div>
      <div className="mx-auto w-[45%] p-12 text-red-950">
        <AboutPomodoro />
      </div>

      <hr />

      <FooterPomodoro />
    </div>
  );
};
export default HomePage;
