'use client';
import * as React from 'react';
import { Header } from '@/components/duy/Header';
import { CountDown } from '@/components/duy/CountDown';
import { CurrentTask } from '@/components/duy/CurrentTask';
import { TaskList } from '@/components/duy/TaskList';
import { AddTaskAction } from '@/components/duy/AddTaskAction';
import { AboutPomodoro } from '@/components/duy/AboutPomodoro';
import { FooterPomodoro } from '@/components/duy/FooterPomodoro';

const bgColors = {
  pomodoro: 'bg-[rgb(186,73,73)]',
  'short-break': 'bg-[rgb(73,186,186)]',
  'long-break': 'bg-[rgb(255,136,91)]',
};

const HomePage = () => {
  const [activeTab, setActiveTab] = React.useState('pomodoro');
  return (
    <div className="bg-white">
      <div className={`h-screen transition-all duration-700 ${bgColors[activeTab]}`}>
        <div className="mx-auto max-w-[620px] p-4">
          <Header />
          <div className="px-16">
            <CountDown activeTab={activeTab} onChangeActiveTab={setActiveTab} />
            <CurrentTask />
            <TaskList />
            <AddTaskAction />
          </div>
        </div>
      </div>

      <div className="mx-auto w-1/2 p-12 text-red-950">
        <AboutPomodoro />
      </div>

      <hr />

      <FooterPomodoro />
    </div>
  );
};

export default HomePage;
