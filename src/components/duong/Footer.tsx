import * as React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

const Link = ({ href, children }) => {
  return (
    <a className="font-bold text-orange-500" href={href}>
      {children}
    </a>
  );
};
export const Footer = () => {
  return (
    <div>
      <div className="actions flex space-x-3">
        <Link href="#">HOME</Link>
        <Link href="#">PRIVACY</Link>
        <Link href="#">TERMS</Link>
        <Link href="#">CONTACT</Link>
        <Link href="#">SIMPLE PAGE</Link>
      </div>
      <div className="actions flex cursor-pointer justify-center space-x-5 p-5">
        <FaFacebook fontSize={35} />
        <FaTwitter fontSize={35} />
        <FaPinterest fontSize={35} />
      </div>
      <div className="flex justify-center space-x-1.5">
        <p>Made with love by</p>
        <Link href="#">Yuya Uzu</Link>
      </div>
    </div>
  );
};
