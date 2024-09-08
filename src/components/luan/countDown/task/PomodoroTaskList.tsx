import * as React from 'react';
import { IconButton } from '@/components/duy/IconButton';
import { HiOutlineDotsVertical } from 'react-icons/hi';

export const PomodoroTaskList = () => {
  return (
    <div className="mt-8 flex items-center justify-between border-b pb-4 text-white">
      <div className="font-bold">Tasks</div>
      <IconButton icon={<HiOutlineDotsVertical fontSize={18} />} text="" />
    </div>
  );
};
