import * as React from 'react';
import { IconButton } from '@/components/duy/IconButton';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const TaskList = () => {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="font-bold">Tasks</div>
      <IconButton icon={<BsThreeDotsVertical fontSize={18} />} text="" />
    </div>
  );
};
