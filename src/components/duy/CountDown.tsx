'use client';
import * as React from 'react';
import { TabCountDown } from '@/components/duy/TabCountDown';

const TABS = [
  {
    id: 1,
    label: 'Pomodoro',
    initialValue: '25:00',
  },
  {
    id: 2,
    label: 'Short Break',
    initialValue: '05:00',
  },
  {
    id: 3,
    label: 'Long Break',
    initialValue: '15:00',
  },
];

export const CountDown = () => {
  const [activeTab, setActiveTab] = React.useState(TABS[0].id);
  return (
    <div className="mx-auto mt-4 flex max-w-[620px] justify-center gap-2">
      {TABS.map((tabItem) => {
        return (
          <TabCountDown
            onClick={() => {
              setActiveTab(tabItem.id);
            }}
            active={activeTab === tabItem.id}
            key={tabItem.id}
            label={tabItem.label}
            initialValue={tabItem.initialValue}
          />
        );
      })}
    </div>
  );
};
