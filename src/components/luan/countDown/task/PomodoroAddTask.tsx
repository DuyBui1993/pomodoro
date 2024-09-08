import * as React from 'react';
import { FaCirclePlus } from 'react-icons/fa6';

const PomodoroAddTask = () => {
  return (
    <div className="mx-auto mt-8">
      <button className="flex w-full items-center justify-center rounded-[8px] border-2 border-dashed px-2.5 py-4 text-white text-opacity-60">
        <span className="">
          <FaCirclePlus />
        </span>
        <span className="ml-2 font-bold">Add Task</span>
      </button>
    </div>
  );
};
export default PomodoroAddTask;
