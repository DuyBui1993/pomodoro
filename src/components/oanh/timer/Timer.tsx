'use client';
import * as React from 'react';

const convertSecondsToTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
export const Timer = () => {
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
    <div className="flex h-[720px] w-[1280px] items-center justify-center bg-[#BDC3FE]">
      <div className="flex h-[552px] w-[639px] flex-col justify-center bg-white text-center">
        <h1 className="mb-12 text-2xl font-bold text-black">Timer</h1>
        <div className="mb-10 font-mono text-5xl text-black">
          <span className="rounded border bg-[#BDC3FE] px-5 text-black">
            {convertSecondsToTime(time)}
          </span>
        </div>
        <div className="my-4 flex items-center justify-center gap-4">
          <button
            onClick={() => {
              setState('RUNNING');
            }}
            className="rounded bg-[#03AE85] px-8 py-2 text-white hover:opacity-90"
          >
            START
          </button>
          <button
            onClick={() => {
              setState('STOP');
            }}
            className="rounded border-[1px] px-8 py-2 text-black"
          >
            STOP
          </button>
          <button
            className="rounded bg-[#FD6259] px-8 py-2 text-white hover:opacity-90"
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
