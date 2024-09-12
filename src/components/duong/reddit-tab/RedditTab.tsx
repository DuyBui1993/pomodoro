'use client';
import * as React from 'react';
import { MdHome } from 'react-icons/md';
import { RiGroup2Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa6';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa6';

const TABs = [
  {
    icon: <MdHome fontSize={30} />,
    text: 'Home',
    id: 'home',
    tabContent: <div className="home">Create Content</div>,
  },
  {
    icon: <RiGroup2Line fontSize={30} />,
    text: 'Communities',
    id: 'communities',
    tabContent: <div className="communities">Tiktok Shop</div>,
  },
  {
    icon: <FaPlus fontSize={30} />,
    text: 'Create',
    id: 'create',
  },
  {
    icon: <IoChatbubbleEllipsesOutline fontSize={30} />,
    text: 'Chat',
    id: 'chat',
    tabContent: <div className="chat">Message</div>,
  },
  {
    icon: <FaRegBell fontSize={30} />,
    text: 'Notification',
    id: 'notification',
    tabContent: <div className="notification">Profile</div>,
  },
];

const TabItems = ({ onClick, icon, text, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`flex-1 cursor-pointer items-center justify-center space-y-1 px-4 py-2 text-center ${isActive ? 'text-black opacity-100' : 'opacity-50'}`}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <div className="text-xs font-bold">{text}</div>
    </div>
  );
};
export const RedditTab = () => {
  const [activeTab, setActiveTab] = React.useState('home');
  return (
    <div className="flex justify-between border-t-2 border-gray-400 bg-white text-gray-500">
      <TabItems
        onClick={() => setActiveTab(TABs[0].id)}
        isActive={activeTab === TABs[0].id}
        icon={TABs[0].icon}
        text={TABs[0].text}
      />
      <TabItems
        onClick={() => setActiveTab(TABs[1].id)}
        isActive={activeTab === TABs[1].id}
        icon={TABs[1].icon}
        text={TABs[1].text}
      />
      <TabItems
        onClick={() => setActiveTab(TABs[2].id)}
        isActive={activeTab === TABs[2].id}
        icon={TABs[2].icon}
        text={TABs[2].text}
      />
      <TabItems
        onClick={() => setActiveTab(TABs[3].id)}
        isActive={activeTab === TABs[3].id}
        icon={TABs[3].icon}
        text={TABs[3].text}
      />
      <div className="relative flex-1">
        <TabItems
          onClick={() => setActiveTab(TABs[4].id)}
          isActive={activeTab === TABs[4].id}
          icon={TABs[4].icon}
          text={TABs[4].text}
        />
        <div className="absolute right-[70px] top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-600">
          <div className="text-xs font-bold text-white">6</div>
        </div>
      </div>
    </div>
  );
};
