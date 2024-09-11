'use client';
import * as React from 'react';
import { GoHome } from 'react-icons/go';
import { MdOutlineLiveTv } from 'react-icons/md';
import { IoPeopleOutline } from 'react-icons/io5';
import { LuStore } from 'react-icons/lu';
import { FaRegBell } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

const TABs = [
  {
    tabName: <GoHome fontSize={20} />,
    tabContent: <div className="Home">Home Facebook</div>,
  },
  {
    tabName: <MdOutlineLiveTv fontSize={20} />,
    tabContent: <div className="Reels">Reels Facebook</div>,
  },
  {
    tabName: <IoPeopleOutline fontSize={20} />,
    tabContent: <div className="Friend request">Friend request Facebook</div>,
  },
  {
    tabName: <LuStore fontSize={20} />,
    tabContent: <div className="Marketplaces">Marketplaces Facebook</div>,
  },
  {
    tabName: <FaRegBell fontSize={20} />,
    tabContent: <div className="Notification">Notification Facebook</div>,
  },
  {
    tabName: <IoMenu fontSize={20} />,
    tabContent: <div className="Menu">Menu Facebook</div>,
  },
];
export const Tab = (props) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <div>
      <div className="actions flex justify-between border-b-2 text-black">
        {TABs.map((tab, index) => {
          const { tabName, tabContent } = tab;
          const isActive = tabIndex === index;

          return (
            <div
              className={`flex cursor-pointer items-center justify-center px-4 py-2 ${isActive ? 'border-b border-blue-700 text-blue-700' : ''}`}
              onClick={() => setTabIndex(index)}
            >
              {tabName}
            </div>
          );
        })}
      </div>
      <div className="tab-content text-lg font-bold text-blue-700">{TABs[tabIndex].tabContent}</div>
    </div>
  );
};

Tab.prototype = {};
Tab.defaultProps = {};
