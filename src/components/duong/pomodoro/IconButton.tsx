import * as React from 'react';

interface Props {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export const IconButton = ({ icon, text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center space-x-1 rounded-md bg-white bg-opacity-20 px-2.5 py-1.5 text-sm"
    >
      <div>{icon}</div>
      {text && <div>{text}</div>}
    </button>
  );
};
