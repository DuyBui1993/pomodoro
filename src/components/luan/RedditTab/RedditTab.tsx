'use client';
import * as React from 'react';
import { RiGroup2Line } from 'react-icons/ri';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { CiBellOn } from 'react-icons/ci';
import { IoMdHome } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';

const TAB = [
  {
    id: 1,
    name: 'Home',
    icon: <IoMdHome fontSize={24} />,
  },
  {
    id: 2,
    name: 'Communities',
    icon: <RiGroup2Line fontSize={24} />,
  },
  {
    id: 3,
    name: 'Create',
    icon: <GoPlus fontSize={24} />,
  },
  {
    id: 4,
    name: 'Chat',
    icon: <IoChatbubbleEllipsesOutline fontSize={24} />,
  },
  {
    id: 5,
    name: 'Inbox',
    icon: <CiBellOn fontSize={24} />,
  },
];

export const RedditTab = () => {
  const [activeTab, setActiveTab] = React.useState(TAB[0].id);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white py-4 text-black">
      {' '}
      <div className="flex items-end justify-center gap-1 border-t-2 border-white p-2 text-opacity-70">
        {TAB.map((value, index) => (
          <div
            key={value.id}
            onClick={() => setActiveTab(index)}
            className={`m-2 cursor-pointer ${activeTab === index ? 'font-bold text-black' : ''}`}
          >
            <div className={`flex flex-col items-center`}>
              {value.icon}

              <div
                className={` ${index === 4 ? 'absolute ml-6 h-4 w-4 rounded-full bg-red-400' : ''}`}
              >
                {index === 4 && <div className="px-1 pb-2 text-xs">6</div>}
              </div>
              <span className="p-2 text-xs">{value.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//