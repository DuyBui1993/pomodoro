import * as React from 'react';
import { IconButton } from '@/components/oanh/IconButton';
import { MdInsertChartOutlined } from 'react-icons/md';
import { CiSettings } from 'react-icons/ci';
import { FaUserCircle } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';

export const Header = () => {
  return (
    <div className="mx-auto flex max-w-[620px] items-center justify-between border-b-[1px] border-b-gray-400 p-2 text-white">
      <div className="logo flex items-center space-x-1 text-lg">
        <FaCheckCircle />
        <span className="font-medium">Pomofocus</span>
      </div>
      <div className="actions flex gap-2">
        <IconButton icon={<MdInsertChartOutlined fontSize={18} />} text="Report" />
        <IconButton icon={<CiSettings fontSize={18} />} text="Setting" />
        <IconButton icon={<FaUserCircle fontSize={18} />} text="Sign in" />
        <IconButton icon={<BsThreeDotsVertical fontSize={18} />} text="" />
      </div>
    </div>
  );
};
