'use client';
import * as React from 'react';

const convertSecondsToTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
export const TimerCountDown = () => {
  const [time, setTime] = React.useState(0);
  const [state, setState] = React.useState<'STOP' | 'RUNNING'>('STOP');

  React.useEffect(() => {
    const intervalHolder = setInterval(() => {
      if (state === 'RUNNING') {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);
    return () => clearInterval(intervalHolder);
  }, [state]);
  return (
    <div className="flex h-[720px] w-[1000px] items-center justify-center bg-cyan-600">
      <div className="flex h-[500px] w-[600px] flex-col justify-center bg-pink-200 text-center">
        <h1 className="mb-12 text-3xl font-extrabold text-blue-950">Timer</h1>
        <div className="mb-10 text-5xl font-medium text-blue-950">
          <span className="rounded border bg-gray-400 px-5 text-blue-950">
            {convertSecondsToTime(time)}
          </span>
        </div>
        <div className="my-4 flex items-center justify-center gap-4 font-medium">
          <button
            onClick={() => {
              setState('RUNNING');
            }}
            className="rounded bg-green-500 px-8 py-2 text-blue-950 hover:bg-orange-400"
          >
            START
          </button>
          <button
            onClick={() => {
              setState('STOP');
            }}
            className="rounded border-[1px] bg-red-500 px-8 py-2 text-blue-950 hover:bg-violet-500"
          >
            STOP
          </button>
          <button
            className="rounded bg-yellow-400 px-8 py-2 text-blue-950 hover:bg-blue-400"
            onClick={() => {
              setState('STOP');
              setTime(0);
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
