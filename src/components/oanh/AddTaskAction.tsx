'use client';
import { ButtonAddTask } from '@/components/oanh/ButtonAddTask';
import { IoCaretDownOutline, IoCaretUpOutline, IoLockClosedSharp } from 'react-icons/io5';
import * as React from 'react';

const toFixedWhenNeed = (num: string) => {
  const n = parseFloat(num);
  if (n === 0) {
    return 0;
  }
  if (n % 1 === 0) {
    return n;
  }
  return n.toFixed(1);
};

export const AddTaskAction = () => {
  const [mode, setMode] = React.useState('view');
  const [task, setTask] = React.useState('');
  const [estPomodoros, setEstPomodoros] = React.useState('1');
  const [modeNote, setModeNote] = React.useState('view');
  const [note, setNote] = React.useState('');

  return (
    <div className="mt-4">
      {mode == 'view' && (
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
              placeholder="What are your working on ?"
              type="text"
              className="w-full rounded-md py-3 text-2xl italic text-black outline-none"
            />
            <p className="font-bold">Est Pomodoros</p>
            <div className="flex space-x-1">
              <input
                value={toFixedWhenNeed(estPomodoros)}
                onChange={(e) => setEstPomodoros(parseInt(e.target.value))}
                type="number"
                className="mr-2 h-10 w-20 rounded-md bg-gray-200 p-2 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                onClick={() => {
                  const parsePoint = parseFloat(estPomodoros);
                  setEstPomodoros(
                    parsePoint < 1 ? (parsePoint + 0.1).toFixed(1) : (parsePoint + 1).toFixed(0),
                  );
                }}
                className="mt-1 flex h-8 w-9 items-center rounded-md border border-gray-400 bg-white text-center text-gray-500"
              >
                <span className="relative flex flex-1 justify-center">
                  <IoCaretUpOutline />
                </span>
              </button>
              <button
                onClick={() => {
                  const parsePoint = parseFloat(estPomodoros);
                  if (parsePoint > 0) {
                    if (parsePoint <= 1) {
                      setEstPomodoros((parsePoint - 0.1).toFixed(1));
                    } else {
                      setEstPomodoros((parsePoint - 1).toFixed(0));
                    }
                  }
                }}
                className="mt-1 flex h-8 w-9 items-center rounded-md border border-gray-400 bg-white text-center text-gray-500"
              >
                <span className="relative flex flex-1 justify-center">
                  <IoCaretDownOutline />
                </span>
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-2 text-sm text-gray-500">
              {modeNote == 'view' && (
                <button
                  className="underline"
                  onClick={() => {
                    setModeNote('add');
                  }}
                >
                  + Add Note
                </button>
              )}
              {modeNote == 'add' && (
                <input
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Some notes..."
                  type="text"
                  className="rounded-md bg-gray-200 p-2 py-3 italic text-black outline-none"
                />
              )}

              <button className="underline">+ Add Project</button>
              <span className="flex-2 relative mb-1 flex justify-center">
                <IoLockClosedSharp />
              </span>
            </div>
          </div>
          <div className="mb-6 mt-2 flex items-center justify-end gap-4 bg-gray-200 p-4">
            <button
              onClick={() => {
                alert('The input data will be lost. Are you sure you want to close it?');
                setMode('view');
                setModeNote('view');
              }}
              className="rounded-md bg-red-800 px-4 py-2 text-white"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setMode('view');
              }}
              className="rounded-md bg-green-800 px-4 py-2 text-white"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
