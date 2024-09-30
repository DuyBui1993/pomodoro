'use client';
import * as React from 'react';

export const Audio = () => {
  const audioRef = React.useRef<any>(null);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <audio controls autoPlay ref={audioRef}>
        <source
          src="https://file-examples.com/storage/fe58a1f07d66f447a9512f1/2017/11/file_example_MP3_700KB.mp3"
          type="audio/ogg"
        />
      </audio>
      <div className="my-4 flex items-center justify-center gap-4 text-black">
        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.play();
            }
          }}
          className="rounded border px-8 py-2"
        >
          PLAY
        </button>
        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.pause();
            }
          }}
          className="rounded border px-8 py-2"
        >
          PAUSE
        </button>
        <button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.load();
              audioRef.current.pause();
            }
          }}
          className="rounded border px-8 py-2"
        >
          RESET
        </button>
      </div>
    </div>
  );
};
