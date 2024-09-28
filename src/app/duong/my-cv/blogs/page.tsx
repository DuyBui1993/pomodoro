import * as React from 'react';
import { Header } from '@/components/duong/my-cv/Header';
import { NavBar } from '@/components/duong/my-cv/NavBar';
import { BlogsPage } from '@/components/duong/my-cv/BlogsPage';

const Page = () => {
  return (
    <div className="h-screen bg-white">
      <div className="mx-auto w-1/2 bg-white pt-10">
        <div className="mx-auto mb-5">
          <Header />
        </div>
        <hr />
        <div className="p-4">
          <NavBar activeTab="blogs" />
        </div>
        <hr />
      </div>
      <div className="mx-auto mt-10 w-1/2">
        <BlogsPage />
      </div>
    </div>
  );
};

export default Page;
