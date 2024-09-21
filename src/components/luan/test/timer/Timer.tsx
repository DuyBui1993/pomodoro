'use client';
import * as React from 'react';
import { convertSecondsToTime } from '@/components/luan/utils/Utils';

export const Timer = () => {
  const [time, setTime] = React.useState(0);
  const [state, setState] = React.useState<'RUNNING' | 'STOP'>('STOP');

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
        <h1 className="py-5 text-2xl font-bold text-black">Timer</h1>
        <div className="font-mono text-5xl text-black">
          <span id="timer" className="rounded border bg-[#BDC3FE] px-5 text-black">
            {convertSecondsToTime(time)}
          </span>
        </div>
        <div className="my-8 flex items-center justify-center gap-4">
          <button
            id="start"
            onClick={() => {
              setState('RUNNING');
            }}
            className="rounded bg-[#03AE85] px-8 py-2 text-white"
          >
            START
          </button>
          <button
            id="stop"
            onClick={() => {
              setState('STOP');
            }}
            className="rounded border-[1px] px-8 py-2 text-black hover:opacity-90"
          >
            STOP
          </button>
          <button
            id="reset"
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
