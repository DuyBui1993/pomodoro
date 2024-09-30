import * as React from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className="grid justify-between text-black">
      <div className="">
        <div className="space-y-3">
          <div className="flex cursor-pointer items-center space-x-4">
            <FaPhoneSquareAlt className="hover:text-green-500" fontSize={40} />
            <a className="font-mono text-xl hover:text-green-500" href="tel:0856504943">
              (+84) 085 650 4943
            </a>
          </div>
          <div className="flex cursor-pointer items-center space-x-4">
            <IoIosMail className="hover:text-indigo-400" fontSize={40} />
            <a
              className="font-mono text-xl hover:text-indigo-400"
              href="mailto:trieuduong0806@gmail.com"
              target="_blank"
            >
              trieuduong0806@gmail.com
            </a>
          </div>
          <div className="flex cursor-pointer items-center space-x-4">
            <FaFacebookSquare className="hover:text-blue-500" fontSize={40} />
            <a
              className="font-mono text-xl hover:text-blue-500"
              href="https://www.facebook.com/trieuduong.08062001"
              target="_blank"
            >
              Trieu Duong
            </a>
          </div>
          <div className="flex cursor-pointer items-center space-x-4">
            <FaInstagramSquare className="hover:text-amber-600" fontSize={40} />
            <a
              className="font-mono text-xl hover:text-amber-600"
              href="https://www.instagram.com/goodguyfr.nptd/"
              target="_blank"
            >
              goodguyfr.nptd
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
