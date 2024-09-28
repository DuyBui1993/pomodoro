import * as React from 'react';
import avatar from './signature.jpg';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';

export const Header = () => {
  return (
    <div className="grid justify-center text-center text-black">
      <div className="mx-auto mb-5 h-[110px] w-[110px] items-center overflow-hidden rounded-full border-0">
        <img className="h-full w-full object-cover" src={avatar.src} alt="" />
      </div>
      <div className="mb-10">
        <div className="mb-3 text-4xl font-semibold">Trieu Duong</div>
        <div className="text-xl font-thin">The Members of Avengers - Idiot Man</div>
      </div>
      <div className="mx-10 flex items-center justify-center space-x-12 text-black">
        <a href="https://github.com/goodguyfr" target="_blank">
          <IoLogoGithub fontSize={30} />
        </a>
        <a href="https://www.linkedin.com/in/trieuduong0806/" target="_blank">
          <IoLogoLinkedin fontSize={30} />
        </a>
        <a href="#">
          <FaXTwitter fontSize={30} />
        </a>
      </div>
    </div>
  );
};
