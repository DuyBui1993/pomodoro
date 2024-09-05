import * as React from 'react';

export const TabCountDown = ({ label, initialValue, active, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className={`text-l mx-auto bg-red-800 p-1 ${active ? 'text-red-500' : ''}`}>{label}</div>
      {active && <div className="text-6xl">{initialValue}</div>}
    </div>
  );
};
