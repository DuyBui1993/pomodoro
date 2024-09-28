import * as React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { IconButton } from '@/components/duong/pomodoro/IconButton';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { IoSettings } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import { CiMenuKebab } from 'react-icons/ci';

export const Header = () => {
  return (
    <div className="mx-auto flex items-center justify-between border-b border-b-gray-700 border-opacity-10 pb-4">
      <div className="logo flex items-center space-x-1 text-lg">
        <FaCircleCheck />
        <span className="font-extrabold">Pomofocus</span>
      </div>
      <div className="actions flex space-x-2">
        <IconButton icon={<HiOutlineDocumentReport fontSize={18} />} text="Report" />
        <IconButton icon={<IoSettings fontSize={18} />} text="Setting" />
        <IconButton icon={<MdAccountCircle fontSize={18} />} text="Sign in" />
        <IconButton icon={<CiMenuKebab fontSize={18} />} text="" />
      </div>
    </div>
  );
};
