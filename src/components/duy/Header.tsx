import * as React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { IconButton } from '@/components/duy/IconButton';
import { MdDashboard } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineAssignmentInd } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';

export const Header = () => {
  return (
    <div className="mx-auto flex max-w-[620px] items-center justify-between border-b border-b-gray-100 border-opacity-80 p-2">
      <div className="logo flex items-center space-x-1 text-lg">
        <FaCheckCircle />
        <span className="font-medium">Pomofocus</span>
      </div>
      <div className="actions flex gap-2">
        <IconButton icon={<MdDashboard />} text="Report" />
        <IconButton icon={<CiSettings />} text="Setting" />
        <IconButton icon={<MdOutlineAssignmentInd />} text="Sign in" />
      </div>
    </div>
  );
};
