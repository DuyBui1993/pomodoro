import * as React from 'react';
import { IconButton } from './IconButton';
import { CiMenuKebab } from 'react-icons/ci';

export const TaskList = () => {
  return (
    <div className="flex items-center justify-between border-b border-blue-400 pb-4">
      <div className="font-bold">Tasks</div>
      <IconButton icon={<CiMenuKebab fontSize={18} />} text="" />
    </div>
  );
};
