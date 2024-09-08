'use client';
import * as React from 'react';
import { TabCountDown } from '@/components/oanh/TabCountDown';

const TABS = [
  {
    id: 1,
    label: 'Pomodoro',
    initialValue: '25:00',
    value: 25 * 60,
  },
  {
    id: 2,
    label: 'Short Break',
    initialValue: '05:00',
    value: 5 * 60,
  },
  {
    id: 3,
    label: 'Long Break',
    initialValue: '15:00',
    value: 15 * 60,
  },
];

const convertSecondsToTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
export const CountDown = () => {
  const [activeTab, setActiveTab] = React.useState(TABS[0].id);
  const activeItem = TABS.findIndex((tab) => tab.id === activeTab);
  const [currentTime, setCurrentTime] = React.useState(TABS[activeItem].value);
  const [state, setState] = React.useState('PAUSE');

  React.useEffect(() => {
    const intervalHolder = setInterval(() => {
      if (state === 'RUNNING' && currentTime > 0) {
        setCurrentTime((prevTime) => prevTime - 1);
      }
    }, 1000);
    return () => clearInterval(intervalHolder);
  }, [state, currentTime]);

  return (
    <div>
      <div className="mx-auto mt-10 h-[300px] w-[480px] justify-center rounded-[8px] bg-white bg-opacity-10">
        <div className="mx-auto mt-4 flex justify-center gap-4 p-2 text-white">
          {TABS.map((tabItem) => (
            <TabCountDown
              onClick={() => {
                setActiveTab(tabItem.id);
                setCurrentTime(tabItem.value);
                setState('PAUSE');
              }}
              active={activeTab === tabItem.id}
              key={tabItem.id}
              label={tabItem.label}
            />
          ))}
        </div>
        <div className="mx-auto mt-4 flex justify-center p-2 text-8xl text-white">
          {convertSecondsToTime(currentTime)}
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              setState(state === 'RUNNING' ? 'PAUSE' : 'RUNNING');
            }}
            className="bordered mt-2 rounded-md border-2 bg-white p-4 px-12 py-3 text-2xl font-medium text-red-800 drop-shadow"
          >
            {state === 'RUNNING' ? 'PAUSE' : 'START'}
          </button>
        </div>
      </div>
    </div>
  );
};
