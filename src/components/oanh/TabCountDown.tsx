import * as React from 'react';

// @ts-ignore
export const TabCountDown = ({ label, active, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div
        className={`text-l mx-auto mt-6 rounded-[4px] bg-opacity-40 p-1 ${active ? 'bg-red-950' : ''}`}
      >
        {label}
      </div>
    </div>
  );
};
