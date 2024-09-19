import * as React from 'react';
import productImage from '../product-img.png';

export const ProductInformation = () => {
  return (
    <div className="mx-auto flex items-center justify-center space-x-12">
      <div className="rounded-2xl border-0">
        <img src={productImage.src} alt="" />
      </div>
      <div className="grid w-[500px]">
        <h3 className="mb-4 text-lg font-bold text-white">Apple AirPods (3rd Generation)</h3>
        <button className="mb-4 h-[25px] w-[35px] rounded-[8px] bg-green-200 text-xs text-green-800">
          Tag
        </button>
        <div className="text-5xl font-extrabold">$179.00</div>
        <button className="mb-5 mt-5 h-[30px] rounded-[6px] bg-gray-900 text-white">Buy</button>
        <div className="mt-10 rounded-[5px] border-pink-500 bg-white p-2 text-black">
          <div className="pb-2 font-bold">AirPods</div>
          <p className="text-xs font-light">
            Experience impressive sound with Apple Airpods (3rd Generation), featuring spatial audio
            and adaptive EQ.
          </p>
        </div>
      </div>
    </div>
  );
};
