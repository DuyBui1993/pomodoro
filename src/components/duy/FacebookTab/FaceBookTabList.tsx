'use client';
import * as React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { CiShop } from 'react-icons/ci';
import { RiNotification4Line } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

const TAB_LIST = [
  {
    icon: <FaHome />,
    id: 'home',
  },
  {
    icon: <MdOndemandVideo />,
    id: 'watch',
  },
  {
    icon: <BsPeople />,
    id: 'groups',
  },
  {
    icon: <CiShop />,
    id: 'marketplace',
  },
  {
    icon: <RiNotification4Line />,
    id: 'notifications',
  },
  {
    icon: <GiHamburgerMenu />,
    id: 'menu',
  },
];

export const FaceBookTabList = () => {
  const [activeTab, setActiveTab] = React.useState('home');
  return (
    <div className="flex justify-between border-b text-black">
      {TAB_LIST.map((tab) => {
        return (
          <div
            onClick={() => {
              setActiveTab(tab.id);
            }}
            key={tab.id}
            className={`flex flex-1 cursor-pointer items-center justify-center px-4 py-2 text-4xl ${activeTab === tab.id ? 'border-b border-blue-500 text-blue-500' : ''}`}
          >
            {tab.icon}
          </div>
        );
      })}
    </div>
  );
};
