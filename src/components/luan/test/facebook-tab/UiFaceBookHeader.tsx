import { IoMdSearch } from 'react-icons/io';
import { FaFacebookMessenger } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';

export const UIFaceBookHeader = () => {
  return (
    <div className="flex gap-4 pb-2 pt-2">
      <div>
        <p className="pl-2 pr-20 text-2xl font-bold text-blue-600">facebook</p>
      </div>
      <div className="flex justify-end gap-3 pl-20 pt-1">
        <AiFillPlusCircle fontSize={22} />
        <IoMdSearch fontSize={22} />
        <FaFacebookMessenger fontSize={22} />
      </div>
    </div>
  );
};
