import * as React from 'react';
import { HiOutlineDocumentReport, HiOutlineDotsVertical } from 'react-icons/hi';
import { IconButton } from '@/components/duy/IconButton';
import { CiSettings } from 'react-icons/ci';
import { FaRegCircleCheck, FaRegCircleUser } from 'react-icons/fa6';

export const Header = () => {
  return (
    <div className="mx-auto flex max-w-[620px] items-center justify-between border-b-[1px] border-b-black border-opacity-10 p-2">
      <div className="logo flex items-center space-x-1 text-lg">
        <FaRegCircleCheck />
        <span className="font-medium">Pomofocus</span>
      </div>
      <div className="actions flex space-x-2">
        <IconButton icon={<HiOutlineDocumentReport fontSize={18} />} text="Report" />
        <IconButton icon={<CiSettings fontSize={18} />} text="Setting" />
        <IconButton icon={<FaRegCircleUser fontSize={18} />} text="Sign in" />
        <IconButton icon={<HiOutlineDotsVertical fontSize={18} />} text="" />
      </div>
    </div>
  );
};
