import * as React from 'react';
import AirPods from '../img/applyAirPods.png';
import User from '../img/Shape.png';
import { ItemReview } from '@/components/oanh/exercise-1/ItemReview';

export const AppleAirPods = () => {
  return (
    <div className="h-[960px] w-[1600px] bg-[#16325B] text-white">
      <div className="mx-auto w-[1200px]">
        <div>
          <div className="flex items-center justify-center gap-10 pt-8">
            <div className="basis-[50%]">
              <img src={AirPods.src} alt="AirPods" className="w-[542px] rounded" />
            </div>

            <div className="basis-[50%]">
              <div>
                <p className="text-3xl font-bold">Apple AirPods (3rd Generation)</p>
                <div className="py-3">
                  <p className="font-sm my-4 mt-2 flex h-[28px] w-[42px] items-center justify-center rounded bg-[#CFF7D3] text-green-300">
                    Tag
                  </p>
                  <p className="text-5xl font-bold">$ 179.00</p>
                </div>
              </div>
              <div className="my-4 flex items-center justify-center rounded bg-[#2C2C2C] p-1.5">
                Buy
              </div>
              <div className="rounded bg-white px-5 py-3 text-black">
                <h2 className="text-sm font-semibold">Airpods</h2>
                <p>
                  Experience immersive sound with Apple AirPods (3rd Generation),
                  <br /> featuring spatial audio and adaptive EQ.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 px-2 font-bold text-white">Latest reviews</div>
        <div className="mt-4 flex justify-center gap-12 rounded">
          <ItemReview
            countStar={5}
            title="Amazong Sound"
            review="Review body"
            avt={User.src}
            message="The audio quality is fantastic, and the fit is comfortable."
            time="07/11/2023"
          />
          <ItemReview
            countStar={2}
            title="Highly Recommend"
            review="Perfect for daily use with amazing battery life."
            avt={User.src}
            message="Reviewer name"
            time="07/11/2023"
          />
          <ItemReview
            countStar={0}
            title="Superb Fit"
            review="They stay secure even during intense workouts."
            avt={User.src}
            message="Reviewer name"
            time="07/11/2023"
          />
        </div>
      </div>
    </div>
  );
};
