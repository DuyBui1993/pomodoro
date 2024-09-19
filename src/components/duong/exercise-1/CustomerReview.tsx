import * as React from 'react';
import productImage from '../product-img.png';
import { IoStar } from 'react-icons/io5';

export const CustomerReview = () => {
  return (
    <div className="mx-auto grid w-[1060px] space-y-10 text-white">
      <h3 className="font-bold">Latest reviews</h3>
      <div className="flex justify-center space-x-16">
        <div className="rounded-[5px] border-[1px] border-gray-300 p-4">
          <div className="mb-4 flex text-yellow-400">
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
          </div>
          <div className="mb-4">
            <div className="text-lg">Amazing Sound</div>
            <div className="text-xs font-extralight">Review body</div>
          </div>
          <div className="flex">
            <div className="mr-3">
              <img className="h-[30px] w-[30px] rounded-full" src={productImage.src} alt="" />
            </div>
            <div className="text-xs">
              <div className="font-bold">Reviewer name</div>
              <div className="text-xs">
                The audio quality is fantastic and the fit is comfortable.
              </div>
              <div className="text-xs font-extralight">08/06/2024</div>
            </div>
          </div>
        </div>
        <div className="rounded-[5px] border-[1px] border-gray-300 p-4">
          <div className="mb-4 flex text-yellow-400">
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
          </div>
          <div className="mb-4">
            <div className="text-lg">Amazing Sound</div>
            <div className="text-xs font-extralight">Review body</div>
          </div>
          <div className="flex">
            <div className="mr-3">
              <img className="h-[30px] w-[30px] rounded-full" src={productImage.src} alt="" />
            </div>
            <div className="text-xs">
              <div className="font-bold">Reviewer name</div>
              <div className="text-xs">
                The audio quality is fantastic and the fit is comfortable.
              </div>
              <div className="text-xs font-extralight">08/06/2024</div>
            </div>
          </div>
        </div>
        <div className="rounded-[5px] border-[1px] border-gray-300 p-4">
          <div className="mb-4 flex text-yellow-400">
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
            <IoStar fontSize={15} />
          </div>
          <div className="mb-4">
            <div className="text-lg">Amazing Sound</div>
            <div className="text-xs font-extralight">Review body</div>
          </div>
          <div className="flex">
            <div className="mr-3">
              <img className="h-[30px] w-[30px] rounded-full" src={productImage.src} alt="" />
            </div>
            <div className="text-xs">
              <div className="font-bold">Reviewer name</div>
              <div className="text-xs">
                The audio quality is fantastic and the fit is comfortable.
              </div>
              <div className="text-xs font-extralight">08/06/2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
