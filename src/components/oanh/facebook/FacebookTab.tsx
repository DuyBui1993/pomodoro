'use client';
import { FaBell, FaHome } from 'react-icons/fa';
import * as React from 'react';
import { GoPeople } from 'react-icons/go';
import { LuStore } from 'react-icons/lu';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';

const Tab = [
  {
    id: 1,
    icon: <FaHome fontSize={25} />,
    tabContent: <div>Home</div>,
  },
  {
    id: 2,
    icon: <MdOutlineOndemandVideo fontSize={25} />,
    tabContent: <div>Video</div>,
  },
  {
    id: 3,
    icon: <GoPeople fontSize={25} />,
    tabContent: <div>Groups</div>,
  },
  {
    id: 4,
    icon: <LuStore fontSize={25} />,
    tabContent: <div>Marketplace</div>,
  },
  {
    id: 5,
    icon: <FaBell fontSize={25} />,
    tabContent: <div>Notifications</div>,
  },
  {
    id: 6,
    icon: <IoMenu fontSize={25} />,
    tabContent: <div>Menu</div>,
  },
];

export const FacebookTab = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <div>
      <div className="mt-2 flex justify-center border-b-[1px]">
        {Tab.map((tab, index) => {
          const isActive = tabIndex === index;
          return (
            <div
              key={tab.id}
              className={` ${isActive ? 'border-b-[1px] border-b-blue-700 text-blue-600' : ''} px-10 py-2`}
              onClick={() => setTabIndex(index)}
            >
              {tab.icon}
            </div>
          );
        })}
      </div>
      <div className="text-blue mx-auto mt-4 flex justify-center p-2 text-4xl">
        {Tab[tabIndex].tabContent}
      </div>
    </div>
  );
};
