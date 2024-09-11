'use client';
import * as React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { RiInbox2Line } from 'react-icons/ri';
import { RiUser3Line } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';

const TAB_LIST = [
  {
    icon: <AiFillHome />,
    text: 'Home',
    id: 'home',
  },
  {
    icon: <RiShoppingBagFill />,
    text: 'Shop',
    id: 'shop',
  },
  {
    icon: <RiInbox2Line />,
    text: 'Inbox',
    id: 'inbox',
  },
  {
    icon: <RiUser3Line />,
    text: 'Profile',
    id: 'profile',
  },
];

const TabItem = ({ onClick, icon, text, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`flex-1 cursor-pointer items-center justify-center space-y-1 px-4 py-2 text-center text-3xl ${isActive ? 'text-white opacity-100' : 'opacity-80'}`}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <div className="text-xs font-bold">{text}</div>
    </div>
  );
};

export const TikTokBottomTabList = () => {
  const [activeTab, setActiveTab] = React.useState('home');
  return (
    <div className="flex justify-between border-b bg-black py-2 text-white">
      <TabItem
        onClick={() => setActiveTab(TAB_LIST[0].id)}
        isActive={activeTab === TAB_LIST[0].id}
        icon={TAB_LIST[0].icon}
        text={TAB_LIST[0].text}
      />
      <div className="relative flex-1">
        <TabItem
          onClick={() => setActiveTab(TAB_LIST[1].id)}
          isActive={activeTab === TAB_LIST[1].id}
          icon={TAB_LIST[1].icon}
          text={TAB_LIST[1].text}
        />
        <div className="absolute right-16 top-2 h-2 w-2 rounded-full bg-red-400 bg-red-600"></div>
      </div>

      <div className="flex flex-1 cursor-pointer justify-center">
        <div className="flex h-[40px] items-center rounded-xl border-x-[5px] border-solid border-l-cyan-400 border-r-red-400 bg-white px-2 text-black">
          <MdAdd className="text-3xl" />
        </div>
      </div>

      <TabItem
        onClick={() => setActiveTab(TAB_LIST[2].id)}
        isActive={activeTab === TAB_LIST[2].id}
        icon={TAB_LIST[2].icon}
        text={TAB_LIST[2].text}
      />
      <TabItem
        onClick={() => setActiveTab(TAB_LIST[3].id)}
        isActive={activeTab === TAB_LIST[2].id}
        icon={TAB_LIST[3].icon}
        text={TAB_LIST[3].text}
      />
    </div>
  );
};
