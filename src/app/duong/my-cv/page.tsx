import * as React from 'react';
import { Header } from '@/components/duong/my-cv/Header';
import { NavBar } from '@/components/duong/my-cv/NavBar';
import { AboutPage } from '@/components/duong/my-cv/AboutPage';

const HomePage = () => {
  return (
    <div className="bg-white pb-16">
      <div className="mx-auto w-1/2 bg-white pt-10">
        <div className="mx-auto mb-5">
          <Header />
        </div>
        <hr />
        <div className="p-4">
          <NavBar activeTab="about" />
        </div>
        <hr />
      </div>
      <div className="mx-auto mt-10 w-1/2">
        <AboutPage />
      </div>
    </div>
  );
};

export default HomePage;
