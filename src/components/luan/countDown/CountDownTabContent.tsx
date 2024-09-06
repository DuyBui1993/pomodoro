import * as React from 'react';

export const CountDownTabContent = ({ label, active, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div
        className={`text-l mx-auto rounded-[4px] bg-red-800 p-1 ${active ? 'text-red-500' : ''}`}
      >
        {label}
      </div>
    </div>
  );
};
