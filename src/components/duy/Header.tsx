import * as React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { IconButton } from '@/components/duy/IconButton';
import { MdDashboard } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineAssignmentInd } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Header = () => {
  return (
    <div className="mx-auto flex max-w-[620px] items-center justify-between border-b border-b-gray-100 border-opacity-80 p-2">
      <div className="logo flex items-center space-x-1 text-lg">
        <FaCheckCircle />
        <span className="font-medium">Pomofocus</span>
      </div>
      <div className="actions flex space-x-2">
        <IconButton icon={<MdDashboard fontSize={18} />} text="Report" />
        <IconButton icon={<CiSettings fontSize={18} />} text="Setting" />
        <IconButton icon={<MdOutlineAssignmentInd fontSize={18} />} text="Sign in" />
        <IconButton icon={<BsThreeDotsVertical fontSize={18} />} text="" />
      </div>
    </div>
  );
};
