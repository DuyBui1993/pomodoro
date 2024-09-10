import * as React from 'react';

const PomodoroAddItemTask = ({ addTask, updateMode }) => {
  const [task, setTask] = React.useState('');
  const [est, setEst] = React.useState(1.0);
  const [note, setNote] = React.useState('');
  const [modeNote, setModeNote] = React.useState('view');
  const [taskId, setTaskId] = React.useState(0);

  const saveTask = () => {
    const newTask = {
      taskId: taskId,
      taskName: task,
      est: est,
      note: note,
    };
    if (task.trim()) {
      addTask(newTask);
      setTask('');
      setEst(1.0);
      setNote('');
      setModeNote('view');
      setTaskId((prevId) => prevId + 1);
    }
  };

  return (
    <div className="w-max[460px] h-max[690px] rounded-[8px] bg-white">
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="What are you working on?"
        type="text"
        className="mb-2 w-full rounded-md p-3 py-3 text-xl italic text-black outline-none"
      />

      <strong className="p-3">Est Pomodoros</strong>
      <div className="p-3">
        <div className="flex gap-3">
          <p className="w-20 rounded-[4px] bg-gray-300 p-4 py-1">{est}</p>
          <button
            className="rounded-[4px] border-2 border-b-4 border-opacity-5 pb-1 pl-4 pr-4 pt-1"
            onClick={() => {
              if (est < 1) {
                setEst((prevEst) => parseFloat((prevEst + 0.1).toFixed(1)));
              } else {
                setEst((prevEst) => parseFloat((prevEst + 1).toFixed(1)));
              }
            }}
          >
            +
          </button>
          <button
            className="rounded-[4px] border-2 border-b-4 border-opacity-5 pb-1 pl-4 pr-4 pt-1"
            onClick={() => {
              if (est > 0) {
                if (est <= 1) {
                  setEst((prevEst) => parseFloat((prevEst - 0.1).toFixed(1)));
                } else {
                  setEst((prevEst) => parseFloat((prevEst - 1).toFixed(1)));
                }
              }
            }}
          >
            -
          </button>
        </div>
        <div className="m-2 flex gap-3 text-gray-600">
          {modeNote === 'view' && (
            <button onClick={() => setModeNote('add')} className="underline">
              + Add Notes
            </button>
          )}
          {modeNote === 'add' && (
            <input
              onChange={(e) => setNote(e.target.value)}
              value={note}
              placeholder="Some notes ..."
              type="text"
              className="mt-2 rounded p-2"
            />
          )}

          <button className="underline">+ Add Project</button>
        </div>
      </div>

      <div className="flex justify-end gap-3 rounded bg-gray-300 p-3 pr-4 text-black">
        <button
          onClick={() => {
            updateMode();
          }}
          className="font-bold"
        >
          Cancel
        </button>
        <button
          onClick={saveTask}
          className="rounded-[4px] border-2 bg-gray-900 pb-1 pl-4 pr-4 pt-1 font-bold text-white text-opacity-60"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PomodoroAddItemTask;
