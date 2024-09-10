'use client';
import React from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { RiGroupLine, RiNotification4Line } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsShopWindow } from 'react-icons/bs';

const tab = [
  {
    id: 1,
    icon: <FaHouseUser fontSize={22} />,
  },
  {
    id: 2,
    icon: <MdOndemandVideo fontSize={22} />,
  },
  {
    id: 3,
    icon: <RiGroupLine fontSize={22} />,
  },
  {
    id: 4,
    icon: <BsShopWindow fontSize={22} />,
  },
  {
    id: 5,
    icon: <RiNotification4Line fontSize={22} />,
  },
  {
    id: 6,
    icon: <GiHamburgerMenu fontSize={22} />,
  },
];

export const UiFaceBookTabList = () => {
  const [activeTab, setActiveTab] = React.useState(tab[0].id);
  return (
    <div className="flex border-b-2">
      {tab.map((item, index) => {
        return (
          <div>
            <div
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
              }}
              className={`px-5 py-2 ${activeTab === item.id ? 'border-b border-blue-600 text-blue-600' : ''} `}
            >
              {item.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};
