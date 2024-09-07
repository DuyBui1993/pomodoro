import * as React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

export const AddTaskAction = () => {
  return (
    <div className="mt-4">
      <button className="text-md flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border border-dashed border-gray-400 bg-red-800 bg-opacity-20 px-2.5 py-4 text-white text-opacity-60">
        <span className="">
          <FaPlusCircle />
        </span>
        <span className="font-bold">Add Task</span>
      </button>
    </div>
  );
};
