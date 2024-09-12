import * as React from 'react';
import { PiList } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';

export const RedditHeader = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="logo flex items-center space-x-1 text-2xl text-black">
        <PiList fontSize={30} />
        <span className="p-2 font-medium text-red-500">Reddit</span>
      </div>
      <div className="actions flex">
        <FiSearch fontSize={25} />
      </div>
    </div>
  );
};
