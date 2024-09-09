'use client';
import * as React from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaSortDown, FaSortUp } from 'react-icons/fa';

const ButtonAddTask = ({ onClick }) => {
  return (
    <div className="mt-4">
      <button
        onClick={onClick}
        className="text-md flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md border border-dashed border-gray-600 bg-red-400 bg-opacity-40 py-3 text-blue-600 text-opacity-50"
      >
        <span className="">
          <FaCirclePlus />
        </span>
        <span className="font-bold">Add Task</span>
      </button>
    </div>
  );
};

const toFixedWhenNeed = (number: string) => {
  const n = parseFloat(number);
  if (n === 0) {
    return 0;
  }
  if (n % 1 === 0) {
    return n;
  }
  return n.toFixed(1);
};

export const AddTask = ({ oneSaveTask }) => {
  const [mode, setMode] = React.useState<'add' | 'view'>('view');
  const [task, setTask] = React.useState('');
  const [estPomodoros, setEstPomodoros] = React.useState<string>('1');

  const handleSave = () => {
    if (!task) {
      return;
    }
    oneSaveTask({
      task,
      estPomodoros,
    });
  };
  return (
    <div className="mt-4">
      {mode === 'view' && (
        <ButtonAddTask
          onClick={() => {
            setMode('add');
          }}
        />
      )}
      {mode == 'add' && (
        <div className="space-y-4 overflow-hidden rounded-xl bg-white text-black">
          <div className="space-y-2 p-4">
            <input
              onChange={(e) => setTask(e.target.value)}
              autoFocus
              placeholder="What are your working on?"
              type="text"
              className="w-full rounded-md py-3 text-2xl text-black outline-none"
            />
            <p className="font-bold">Est Pomodoros</p>
            <div className="flex space-x-1">
              <input
                value={toFixedWhenNeed(estPomodoros)}
                onChange={(e) => setEstPomodoros(parseInt(e.target.value))}
                type="number"
                className="mr-2 w-20 rounded-md border border-gray-400 p-2 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                onClick={() => {
                  const parsePoint = parseFloat(estPomodoros);
                  setEstPomodoros((parsePoint + 1).toFixed(1));
                }}
                className="flex h-10 w-10 items-center rounded-md border border-gray-400 bg-white text-center text-gray-700"
              >
                <span className="relative top-1 flex flex-1 justify-center text-xl">
                  <FaSortUp />
                </span>
              </button>
              <button
                onClick={() => {
                  if (estPomodoros <= 0) {
                    return;
                  }
                  const parsePoint = parseFloat(estPomodoros);
                  if (parsePoint <= 1) {
                    const result = (parsePoint - 0.1).toFixed(1);
                    setEstPomodoros(result);
                    return;
                  }
                  const result = (parsePoint - 1).toFixed(1);
                  setEstPomodoros(result);
                }}
                className="flex h-10 w-10 items-center rounded-md border border-gray-400 bg-white text-center text-gray-700"
              >
                <span className="relative bottom-1 flex flex-1 justify-center text-xl">
                  <FaSortDown />
                </span>
              </button>
            </div>
            <div className="font-sm mt-8 flex items-center space-x-2 text-orange-300">
              <button className="text-xs font-bold">+ Add Note</button>
              <button className="text-xs font-bold">+ Add Project</button>
            </div>
          </div>

          <div className="mt-2 flex justify-between bg-gray-200 p-4">
            <button
              onClick={() => setMode('view')}
              className="rounded-md bg-red-900 px-4 py-2 text-white"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleSave();
                setMode('view');
              }}
              className="rounded-md bg-blue-900 px-4 py-2 text-white"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
