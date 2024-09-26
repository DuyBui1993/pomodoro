'use client';
import Link from 'next/link';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import * as React from 'react';

import image from '../../img/logo_Java.png';
import Image from 'next/image';

const socialIcons = [
  { Icon: FaGithub, href: 'https://github.com/889Anonymous' },
  { Icon: FaFacebookSquare, href: 'https://www.facebook.com/luandan2k2/' },
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/nguyen-truong-luan-897a14280/' },
];

const tabNavbar = [
  {
    value: 'Home',
    key: 'HOME',
    href: '/luan/cv/',
  },
  {
    value: 'Projects',
    key: 'PROJECT',
    href: '/luan/cv/projects',
  },
  {
    value: 'Services',
    key: 'SERVICE',
    href: '/luan/cv/services',
  },
  {
    value: 'Testimonials',
    key: 'TESTIMONIAL',
    href: '/luan/cv/testimonials',
  },
  {
    value: 'CV',
    key: 'CV',
    href: '/luan/cv/cv',
  },
  {
    value: 'Contact',
    key: 'CONTACT',
    href: '/luan/cv/contact',
  },
];
export const SidebarContent = () => {
  return (
    <div>
      <div className="flex h-screen flex-col justify-between bg-slate-100 px-2">
        <div>
          <div className="mb-6 flex justify-center">
            <Image
              src={image.src}
              alt="Avatar User"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <nav>
            <ul className="space-y-2">
              {tabNavbar.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="block py-2 text-gray-700 hover:text-gray-900">
                    {item.value}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mb-4 flex justify-center space-x-4 text-red-700">
          {socialIcons.map(({ Icon, href }) => (
            <Link key={href} href={href} className="text-gray-500 hover:text-gray-700">
              <Icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
