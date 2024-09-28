import * as React from 'react';
import { Header } from '@/components/duong/my-cv/Header';
import { NavBar } from '@/components/duong/my-cv/NavBar';
import { Contact } from '@/components/duong/my-cv/Contact';

const Page = () => {
  return (
    <div className="h-screen bg-white">
      <div className="mx-auto w-1/2 bg-white pt-10">
        <div className="mx-auto mb-5">
          <Header />
        </div>
        <hr />
        <div className="p-4">
          <NavBar activeTab="contact" />
        </div>
        <hr />
      </div>
      <div className="mx-auto mt-10 w-1/2">
        <Contact />
      </div>
    </div>
  );
};

export default Page;
