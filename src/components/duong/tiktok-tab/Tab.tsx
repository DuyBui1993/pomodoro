'use client';
import * as React from 'react';
import { MdHome } from 'react-icons/md';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { FaSquarePlus } from 'react-icons/fa6';
import { RiMessageLine } from 'react-icons/ri';
import { IoPersonOutline } from 'react-icons/io5';

const TABs = [
  {
    icon: <MdHome fontSize={30} />,
    text: 'Home',
    id: 'home',
    tabContent: <div className="create-content">Create Content</div>,
  },
  {
    icon: <MdOutlineShoppingBag fontSize={30} />,
    text: 'Shop',
    id: 'shop',
    tabContent: <div className="shop">Tiktok Shop</div>,
  },
  // {
  //   icon: <FaSquarePlus fontSize={20} />,
  //   text: '',
  //   id: '',
  // },
  {
    icon: <RiMessageLine fontSize={30} />,
    text: 'Inbox',
    id: 'inbox',
    tabContent: <div className="inbox">Message</div>,
  },
  {
    icon: <IoPersonOutline fontSize={30} />,
    text: 'Profile',
    id: 'profile',
    tabContent: <div className="profile">Profile</div>,
  },
];

const TabItems = ({ onClick, icon, text, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`flex-1 cursor-pointer items-center justify-center space-y-1 px-4 py-2 text-center ${isActive ? 'text-white opacity-100' : 'opacity-50'}`}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <div className="text-xs font-bold">{text}</div>
    </div>
  );
};
export const Tab = () => {
  const [activeTab, setActiveTab] = React.useState('home');
  return (
    <div className="flex justify-between bg-black text-white">
      <TabItems
        onClick={() => setActiveTab(TABs[0].id)}
        isActive={activeTab === TABs[0].id}
        icon={TABs[0].icon}
        text={TABs[0].text}
      />
      <div className="relative flex-1">
        <TabItems
          onClick={() => setActiveTab(TABs[1].id)}
          isActive={activeTab === TABs[1].id}
          icon={TABs[1].icon}
          text={TABs[1].text}
        />
      </div>

      <div className="flex flex-1 cursor-pointer justify-center">
        <div className="mt-2 flex h-[40px] items-center rounded-xl bg-white px-2 text-black">
          <FaSquarePlus fontSize={35} />
        </div>
      </div>

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
    </div>
  );
};
