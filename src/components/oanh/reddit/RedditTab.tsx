'use client';
import * as React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { BsChatDots } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { GoBell } from 'react-icons/go';
import { IoPeopleCircleOutline } from 'react-icons/io5';

const Tab = [
  {
    id: 1,
    name: 'Home',
    icon: <AiFillHome fontSize={30} />,
  },
  {
    id: 2,
    name: 'Communities',
    icon: <IoPeopleCircleOutline fontSize={30} />,
  },
  {
    id: 3,
    name: 'Create',
    icon: <HiOutlinePlus fontSize={30} />,
  },
  {
    id: 4,
    name: 'Chat',
    icon: <BsChatDots fontSize={30} />,
  },
  {
    id: 5,
    name: 'Inbox',
    icon: <GoBell fontSize={30} />,
  },
];

export const RedditTab = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <div className="fixed bottom-0 flex justify-center border-t-[1px] border-black bg-white py-2 text-black text-opacity-60">
      {Tab.map((tab, index) => {
        const isActive = tabIndex === index;
        return (
          <div>
            <div
              onClick={() => setTabIndex(index)}
              key={tab.id}
              className={`flex flex-col items-center ${isActive ? 'font-bold text-black' : ''} px-10 py-2`}
            >
              <div className={`flex flex-col items-center px-2 py-1`}>
                {tab.icon}
                {index === 4 && (
                  <div className="absolute ml-4 flex h-4 w-4 items-center justify-center rounded-full bg-red-600">
                    <span className="text-xs text-white">6</span>
                  </div>
                )}
              </div>
              <div className="py-1 text-center text-sm font-bold">{tab.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
