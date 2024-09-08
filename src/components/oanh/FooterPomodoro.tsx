import * as React from 'react';
import { IoLogoFacebook } from 'react-icons/io5';
import { IconButton } from '@/components/oanh/IconButton';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from '@/components/oanh/Link';

export const FooterPomodoro = () => {
  return (
    <div>
      <div className="mx-auto flex max-w-[620px] flex-col items-center p-6 text-red-950 opacity-70">
        <div className="mb-3 flex gap-4 font-bold">
          <a href="#">HOME</a>
          <a href="#">PRIVACY</a>
          <a href="#">TERMS</a>
          <a href="#">CONTACT</a>
          <a href="#">SIMPLE PAGE</a>
        </div>

        <div className="mb-3 flex text-gray-400">
          <a href="#">
            <IconButton icon={<IoLogoFacebook fontSize={50} />} text="" />
          </a>
          <a href="#">
            <IconButton icon={<AiFillTwitterCircle fontSize={50} />} text="" />
          </a>
          <a href="#">
            <img
              src="https://pomofocus.io/icons/stripe-climate-badge.png"
              className="ml-3 mt-2 h-11 w-11 rounded-[50%] bg-gray-400 p-2"
            />
          </a>
        </div>

        <div className="mb-2">
          <p>
            Made with &lt;3 <Link href="#"> Yuya Uzu</Link>
          </p>
        </div>
        <div className="text-sm opacity-70">
          <p>&copy;Pomofocus 2024. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
