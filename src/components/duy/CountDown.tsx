'use client';
import * as React from 'react';
import { TabCountDown } from '@/components/duy/TabCountDown';

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
  const currentActiveTabIndex = TABS.findIndex((tab) => tab.id === activeTab);

  const [currentTime, setCurrentTime] = React.useState(TABS[currentActiveTabIndex].value);

  return (
    <div className="mx-auto mt-12 flex max-w-[620px] flex-col justify-center px-20">
      <div className="rounded-md bg-white bg-opacity-10 py-8">
        <div className="flex justify-center space-x-2">
          {TABS.map((tabItem) => {
            return (
              <TabCountDown
                onClick={() => {
                  setActiveTab(tabItem.id);
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
              setCurrentTime(currentTime - 1);
              // setCurrentTime((prev) => prev - 1);
            }}
            className="bordered rounded-md border-2 bg-white px-12 py-3 text-2xl font-medium text-red-800 drop-shadow"
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
};
