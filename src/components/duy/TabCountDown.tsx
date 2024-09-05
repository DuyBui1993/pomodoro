import * as React from 'react';

export const TabCountDown = ({ label, active, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div
        className={`mx-auto rounded-md bg-opacity-40 px-3.5 py-0.5 text-sm font-bold ${active ? 'bg-red-950' : ''}`}
      >
        {label}
      </div>
    </div>
  );
};
