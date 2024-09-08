import * as React from 'react';
import { FaCirclePlus } from 'react-icons/fa6';

export const AddTask = () => {
  return (
    <div className="mt-4">
      <button className="text-md flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border border-dashed border-gray-600 bg-red-400 bg-opacity-40 py-3 text-blue-600 text-opacity-50">
        <span className="">
          <FaCirclePlus />
        </span>
        <span className="font-bold">Add Task</span>
      </button>
    </div>
  );
};
