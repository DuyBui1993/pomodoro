import * as React from 'react';
import { Header } from '@/components/duong/pomodoro/Header';
import { CountDown } from '@/components/duong/pomodoro/CountDown';
import { CurrentTask } from '@/components/duong/pomodoro/CurrentTask';
import { TaskList } from '@/components/duong/pomodoro/TaskList';
import { AddTask } from '@/components/duong/pomodoro/AddTask';
import { IntroPomodoro } from '@/components/duong/pomodoro/IntroPomodoro';
import { Footer } from '@/components/duong/pomodoro/Footer';

const HomePage = () => {
  return (
    <div className="bg-white">
      <div className="h-screen bg-red-300 text-blue-900">
        <div className="mx-auto max-w-[620px] p-4">
          <Header />
          <div className="px-18">
            <CountDown />
            <CurrentTask />
            <TaskList />
            <AddTask />
          </div>
        </div>
      </div>

      <div className="mx-auto w-1/2 p-12 text-blue-950">
        <IntroPomodoro />
      </div>
      <div className="w-screen bg-zinc-200 text-blue-950">
        <div className="mx-auto max-w-[450px] p-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
