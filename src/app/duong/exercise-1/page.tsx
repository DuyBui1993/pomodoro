import * as React from 'react';
import { ProductInformation } from '@/components/duong/exercise-1/ProductInformation';
import { CustomerReview } from '@/components/duong/exercise-1/CustomerReview';

const HomePage = () => {
  return (
    <div className="bg-blue-950">
      <div className="h-screen space-y-28">
        <div className="mx-auto pt-20">
          <ProductInformation />
        </div>
        <div className="px-8">
          <CustomerReview />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
