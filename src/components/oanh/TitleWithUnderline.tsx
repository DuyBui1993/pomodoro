import * as React from 'react';

export const TitleWithUnderline = ({ text }) => {
  return (
    <div className="mb-6">
      <h3 className="mb-1 text-2xl font-bold">{text}</h3>
      <div className="h-1 w-7 bg-red-400 opacity-70" />
    </div>
  );
};
