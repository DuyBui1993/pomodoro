import { IconButton } from '@/components/oanh/IconButton';

import * as React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

export const Header = () => {
  return (
    <div className="mx-auto flex max-w-[620px] items-center justify-between border-b-gray-400 p-2">
      <div className="logo flex items-center space-x-1 text-lg">
        <span className="text-4xl font-extrabold text-blue-600">facebook</span>
      </div>
      <div className="actions mt-3 flex gap-4">
        <FaPlusCircle fontSize={22} />
        <IoSearchOutline fontSize={22} />
        <FaFacebookMessenger fontSize={22} />
      </div>
    </div>
  );
};
