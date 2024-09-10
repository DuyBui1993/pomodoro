import * as React from 'react';
import { FC } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { CountDownIconButton } from '@/components/luan/countDown/CountDownIconButton';

interface PomodoroTaskListProps {
  task: Task[];
}

export const PomodoroTaskList: FC<PomodoroTaskListProps> = ({ task }) => {
  return (
    <div className="mt-8 items-center justify-between border-b pb-4 text-white">
      <div className="flex items-center justify-between">
        <div className="font-bold">Tasks</div>
        <CountDownIconButton icon={<HiOutlineDotsVertical fontSize={18} />} text="" />
      </div>
      <div>
        {task.map((item) => {
          const { taskId, taskName, est, note } = item;
          return (
            <div className="mb-2 mt-2 rounded bg-white bg-opacity-10 pb-1" key={taskId}>
              <div className="flex justify-between px-4 py-1">
                <p className="p-2">{taskName}</p>
                <div className="flex">
                  <p className="p-2"> 0 / {est}</p>
                  <CountDownIconButton icon={<HiOutlineDotsVertical fontSize={18} />} text="" />
                </div>
              </div>
              <div className="m-2 mx-16 rounded-[8px] bg-[rgb(96,85,21)] px-16">{note}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
