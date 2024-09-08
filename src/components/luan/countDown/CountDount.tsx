'use client';
import * as React from 'react';
import CountDownTab from '@/components/luan/countDown/CountDownTab';
import { Header } from '@/components/luan/countDown/CountDownHeader';
import { PomodoroAbout } from '@/components/luan/countDown/about/PomodoroAbout';
import PomodoroFooter from '@/components/luan/countDown/about/PomodoroFooter';
import PomodoroAddTask from '@/components/luan/countDown/task/PomodoroAddTask';
import { PomodoroTaskList } from '@/components/luan/countDown/task/PomodoroTaskList';

export const CountDown = () => {
  return (
    <>
      <div className="h-screen bg-[rgb(186,73,73)]">
        <div className="mx-auto max-w-[620px] p-4">
          <Header />
          <div className="px-16">
            <CountDownTab />
            <PomodoroTaskList />
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
    </>
  );
};
