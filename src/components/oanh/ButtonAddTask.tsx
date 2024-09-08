import { FaPlusCircle } from 'react-icons/fa';
import * as React from 'react';

export const ButtonAddTask = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-md mt-4 flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border-[2px] border-dashed border-gray-300 border-opacity-60 bg-red-900 bg-opacity-20 px-2.5 py-4 text-white text-opacity-50 hover:bg-red-950 hover:bg-opacity-20 hover:text-opacity-70"
    >
      <span className="">
        <FaPlusCircle fontSize={18} />
      </span>
      <span className="font-bold">Add Task</span>
    </button>
  );
};
