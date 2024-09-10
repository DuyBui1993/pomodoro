import * as React from 'react';
import { Header } from '@/components/facebook-tab/Header';
import { Tab } from '@/components/facebook-tab/Tab';

export const HomePage = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto h-screen w-1/2">
        <div className="mx-auto mb-6 p-4">
          <Header />
          <Tab />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
