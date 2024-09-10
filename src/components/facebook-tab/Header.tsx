import * as React from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { FaFacebookMessenger } from 'react-icons/fa';

export const Header = () => {
  return (
    <div>
      <div className="flex justify-between pb-6">
        <div className="logo ml-20 text-lg font-extrabold text-blue-700">Facebook</div>
        <div className="actions mr-20 flex space-x-6 text-black">
          <div>
            <FaPlus fontSize={20} />
          </div>
          <div>
            <IoSearch fontSize={20} />
          </div>
          <div>
            <FaFacebookMessenger fontSize={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
