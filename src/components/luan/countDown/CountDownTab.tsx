import * as React from 'react';
import { CountDownTabContent } from '@/components/luan/countDown/CountDownTabContent';
import { convertSecondsToTime } from '@/components/luan/utils/Utils';

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

const CountDownTab = () => {
  const [activeTab, setActiveTab] = React.useState(TABS[0].id);

  const activeIndexTab = TABS.findIndex((item) => item.id === activeTab);
  const [currentTime, setCurrentTime] = React.useState(TABS[activeIndexTab].value);

  return (
    <div>
      <div className="mx-auto mt-8 justify-center rounded-[8px] bg-white bg-opacity-10">
        <div className="mx-auto mt-6 flex justify-center gap-4 p-2 text-xl text-white">
          {TABS.map((tabItem) => (
            <CountDownTabContent
              onClick={() => {
                setActiveTab(tabItem.id);
                setCurrentTime(tabItem.value);
              }}
              active={activeTab === tabItem.id}
              key={tabItem.id}
              label={tabItem.label}
            />
          ))}
        </div>
        <div>
          <div className="mx-auto mt-4 flex justify-center p-2 text-xl">
            <div className="text-8xl font-bold">{convertSecondsToTime(currentTime)}</div>
          </div>
        </div>

        <div className="mx-auto mt-5 flex justify-center p-2 text-xl">
          <button
            onClick={() => {
              setCurrentTime(currentTime - 1);
            }}
            className="mb-4 rounded bg-white p-4 font-bold text-red-700"
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
};
export default CountDownTab;
