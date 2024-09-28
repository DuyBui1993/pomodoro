import * as React from 'react';

export const UnderlineTitle = ({ text }) => {
  return (
    <div className="mb-6">
      <h3 className="mb-1 text-2xl font-bold">{text}</h3>
      <div className="h-1 w-8 rounded bg-red-300" />
    </div>
  );
};
