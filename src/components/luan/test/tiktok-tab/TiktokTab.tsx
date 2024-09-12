'use client';
import { GoHome, GoPlus } from 'react-icons/go';
import { RiShoppingBagFill } from 'react-icons/ri';
import { MdOutlineInbox } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import React from 'react';

const TAB = [
  {
    id: 1,
    name: 'Home',
    icon: <GoHome fontSize={24} />,
  },
  {
    id: 2,
    name: 'Shop',
    icon: <RiShoppingBagFill fontSize={24} />,
  },
  {
    id: 3,
    name: 'Plus',
    icon: <GoPlus fontSize={24} />,
  },
  {
    id: 4,
    name: 'Inbox',
    icon: <MdOutlineInbox fontSize={24} />,
  },
  {
    id: 5,
    name: 'Profile',
    icon: <FaRegUser fontSize={24} />,
  },
];

export const TiktokTab = () => {
  const [activeTab, setActiveTab] = React.useState(TAB[0].id);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black py-4">
      {' '}
      <div className="flex items-end justify-center gap-2 border-t-2 border-white p-2 text-white text-opacity-70">
        {TAB.map((value, index) => (
          <div
            key={value.id}
            onClick={() => setActiveTab(index)}
            className={`m-2 cursor-pointer ${activeTab === index ? 'text-white' : ''}`}
          >
            <div
              className={`flex flex-col items-center ${
                index === 2
                  ? 'mb-4 rounded-2xl border-l-4 border-r-4 border-l-blue-700 border-r-fuchsia-400 border-opacity-70 bg-white px-4 py-2 text-black'
                  : ''
              }`}
            >
              {value.icon}
              {index !== 2 && <span className="p-2 text-xs">{value.name}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
