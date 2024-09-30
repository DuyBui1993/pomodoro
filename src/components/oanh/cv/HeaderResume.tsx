import User from '../img/Shape.png';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import * as React from 'react';

export const HeaderResume = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div>
        <img className="h-[50px] w-[50px] rounded-full" src={User.src} alt="Avatar" />
      </div>
      <div className="mt-2 text-black">
        <h1 className="text-2xl font-bold">HOANG OANH</h1>
        <p className="text-lg"> Software Engineer</p>
      </div>

      <div className="actions mt-3 flex gap-4 pb-5 text-black">
        <FaGithub fontSize={25} />

        <IoLogoLinkedin fontSize={25} />

        <FaFacebook fontSize={25} />
      </div>
    </div>
  );
};
