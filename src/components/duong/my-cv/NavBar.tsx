'use client';
import * as React from 'react';

const NavItems = [
  {
    icon: <a href="/duong/my-cv">About</a>,
    id: 'about',
  },
  {
    icon: <a href="/duong/my-cv/blogs">Blogs</a>,
    id: 'blogs',
  },
  {
    icon: <a href="/duong/my-cv/projects">Projects</a>,
    id: 'projects',
  },
  {
    icon: <a href="/duong/my-cv/contact">Contact</a>,
    id: 'contact',
  },
];

const NavBarItems = ({ icon, isActive }) => {
  return (
    <div
      className={`justify-center space-x-16 rounded-[10px] p-[8px] text-xl font-medium ${isActive ? 'bg-black text-white' : ''}`}
    >
      <div className="flex justify-center space-x-16 text-xl font-medium">{icon}</div>
    </div>
  );
};

export const NavBar = ({ activeTab }) => {
  // const [activeItem, setActiveItem] = React.useState(activeTab || 'about');
  const activeItem = activeTab;
  return (
    <div className="flex justify-center space-x-16 rounded-[8px] text-xl font-medium text-black">
      <NavBarItems isActive={activeItem === NavItems[0].id} icon={NavItems[0].icon} />
      <NavBarItems isActive={activeItem === NavItems[1].id} icon={NavItems[1].icon} />
      <NavBarItems isActive={activeItem === NavItems[2].id} icon={NavItems[2].icon} />
      <NavBarItems isActive={activeItem === NavItems[3].id} icon={NavItems[3].icon} />
    </div>
  );
};
