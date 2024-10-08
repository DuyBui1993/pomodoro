'use client';
import * as React from 'react';
import { TabCountDown } from '@/components/duy/TabCountDown';

const TABS = [
  {
    id: 'pomodoro',
    label: 'Pomodoro',
    initialValue: '25:00',
    value: 25 * 60,
  },
  {
    id: 'short-break',
    label: 'Short Break',
    initialValue: '05:00',
    value: 5 * 60,
  },
  {
    id: 'long-break',
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

export const CountDown = ({ activeTab, onChangeActiveTab }) => {
  const currentActiveTabIndex = TABS.findIndex((tab) => tab.id === activeTab);
  const [currentTime, setCurrentTime] = React.useState(TABS[currentActiveTabIndex].value);
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
    <div className="mx-auto mt-12 flex flex-col justify-center">
      <div className="rounded-md bg-white bg-opacity-10 py-8">
        <div className="flex justify-center space-x-2">
          {TABS.map((tabItem) => {
            return (
              <TabCountDown
                onClick={() => {
                  onChangeActiveTab(tabItem.id);
                  setCurrentTime(tabItem.value);
                }}
                active={activeTab === tabItem.id}
                key={tabItem.id}
                label={tabItem.label}
              />
            );
          })}
        </div>
        <div className="my-8 text-center text-8xl font-bold">
          {convertSecondsToTime(currentTime)}
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              setState(state === 'RUNNING' ? 'PAUSE' : 'RUNNING');
            }}
            className="bordered rounded-md border-2 bg-white px-12 py-3 text-xl font-bold tracking-wide text-red-600 text-opacity-70 drop-shadow"
          >
            {state === 'RUNNING' ? 'PAUSE' : 'START'}
          </button>
        </div>
      </div>
    </div>
  );
};
