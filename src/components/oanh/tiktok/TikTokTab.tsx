'use client';
import * as React from 'react';
import { FaHome } from 'react-icons/fa';

import { AiOutlineUser } from 'react-icons/ai';
import { RiShoppingBagFill } from 'react-icons/ri';
import { PiChatCenteredText } from 'react-icons/pi';
import { HiMiniPlus } from 'react-icons/hi2';

const Tab = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome fontSize={30} />,
    tabContent: <div>Home</div>,
  },
  {
    id: 2,
    name: 'Shop',
    icon: <RiShoppingBagFill fontSize={30} />,
    tabContent: <div>Shop</div>,
  },
  {
    id: 3,
    name: 'video',
    icon: <HiMiniPlus fontSize={25} />,
    tabContent: <div> Selfie </div>,
  },
  {
    id: 4,
    name: 'Inbox',
    icon: <PiChatCenteredText fontSize={30} />,
    tabContent: <div>Inbox</div>,
  },
  {
    id: 5,
    name: 'Profile',
    icon: <AiOutlineUser fontSize={30} />,
    tabContent: <div>Profile</div>,
  },
];

export const TikTokTab = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <div className="">
      <div className="mx-auto mt-4 p-2 text-2xl">{Tab[tabIndex].tabContent}</div>
      <div className="fixed bottom-0 flex justify-center bg-black py-2 text-white text-opacity-70">
        {Tab.map((tab, index) => {
          const isActive = tabIndex === index;
          return (
            <div
              className={`flex flex-col items-center ${isActive ? 'text-white opacity-100' : ''} px-10 py-2`}
              onClick={() => setTabIndex(index)}
            >
              <div
                className={`flex items-center justify-center ${index === 2 ? 'rounded-2xl border-l-4 border-r-4 border-l-cyan-400 border-r-red-400 border-opacity-70 bg-white px-4 py-2 text-black' : ''}`}
              >
                {tab.icon}
              </div>
              <div className="py-1 text-center text-xs font-bold">{index !== 2 && tab.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
