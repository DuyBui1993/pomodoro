import * as React from 'react';
import { Header } from '@/components/oanh/Header';
import { CountDown } from '@/components/oanh/CountDown';
import { AboutPomodoro } from '@/components/oanh/AboutPomodoro';
import { FooterPomodoro } from '@/components/oanh/FooterPomodoro';
import { CurrentTask } from '@/components/oanh/CurrentTask';
import { TaskList } from '@/components/oanh/TaskList';
import { ButtonAddTask } from '@/components/oanh/ButtonAddTask';

const HomePage = () => {
  return (
    <div className="bg-white">
      <div className="h-screen bg-[rgb(186,73,73)]">
        <div className="mx-auto max-w-[640px] p-4">
          <Header />
          <div className="px-16">
            <CountDown />
            <CurrentTask />
            <TaskList />
            <ButtonAddTask />
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
