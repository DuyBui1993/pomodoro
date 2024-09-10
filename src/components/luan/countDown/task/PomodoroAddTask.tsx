import * as React from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import PomodoroAddItemTask from '@/components/luan/countDown/task/PomodoroAddItemTask';
import { PomodoroTaskList } from '@/components/luan/countDown/task/PomodoroTaskList';

const PomodoroAddTask = () => {
  const [mode, setMode] = React.useState('view');
  const [task, setTask] = React.useState<Task[]>([]);

  const addTask = (newTask: Task) => {
    setTask((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };
  const updateMode = () => {
    setMode('view');
  };
  return (
    <>
      <div>
        <PomodoroTaskList task={task} />
      </div>
      <div className="mx-auto mt-8">
        {mode === 'view' && (
          <button
            onClick={() => {
              setMode('add');
            }}
            className="flex w-full items-center justify-center rounded-[8px] border-2 border-dashed px-2.5 py-4 text-white text-opacity-60"
          >
            <span className="">
              <FaCirclePlus />
            </span>
            <span className="ml-2 font-bold">Add Task</span>
          </button>
        )}
        {mode === 'add' && <PomodoroAddItemTask addTask={addTask} updateMode={updateMode} />}
      </div>
    </>
  );
};
export default PomodoroAddTask;
