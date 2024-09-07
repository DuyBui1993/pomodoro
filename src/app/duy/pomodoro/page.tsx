import * as React from 'react';
import { Header } from '@/components/duy/Header';
import { CountDown } from '@/components/duy/CountDown';
import { CurrentTask } from '@/components/duy/CurrentTask';
import { TaskList } from '@/components/duy/TaskList';
import { AddTaskAction } from '@/components/duy/AddTaskAction';
import { AboutPomodoro } from '@/components/duy/AboutPomodoro';
import { FooterPomodoro } from '@/components/duy/FooterPomodoro';

const HomePage = () => {
  return (
    <div className="bg-white">
      <div className="h-screen bg-[rgb(186,73,73)]">
        <div className="mx-auto max-w-[620px] p-4">
          <Header />
          <CountDown />
          <CurrentTask />
          <TaskList />
          <AddTaskAction />
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
