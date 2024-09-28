'use client';
import * as React from 'react';

const AudioUI = () => {
  const audioRef = React.useRef<any>(null);
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <audio ref={audioRef} controls>
        <source src="https://file-examples.com/storage/fe58a1f07d66f447a9512f1/2017/11/file_example_MP3_700KB.mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="space-x-2 space-y-2">
        <button
          className="rounded-2xl border-2 p-2"
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.play();
            }
          }}
        >
          Play
        </button>

        <button
          className="rounded-2xl border-2 p-2"
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.pause();
            }
          }}
        >
          Pause
        </button>
        <button
          className="rounded-2xl border-2 p-2"
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.load();
            }
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AudioUI;
