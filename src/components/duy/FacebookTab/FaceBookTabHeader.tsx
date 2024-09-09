import * as React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { FaFacebookMessenger } from 'react-icons/fa6';

export const FaceBookTabHeader = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="logo text-4xl font-extrabold text-blue-500">Facebook</div>
      <div className="actions flex space-x-4 text-4xl text-black">
        <div>
          <IoIosAddCircle />
        </div>
        <div>
          <IoSearch />
        </div>
        <div>
          <FaFacebookMessenger />
        </div>
      </div>
    </div>
  );
};
