import { ItemLatestReview } from '@/components/luan/test/exercise-1/ItemLatestreview';

const AppleAirPods = () => {
  return (
    <div className="h-[960px] w-[1600px] bg-[#16325B] text-white">
      <div className="mx-auto w-[1200px]">
        <div>
          <div className={`flex items-center justify-center gap-10 pt-8`}>
            <div className="basis-[45%]">
              <img
                src="../../img/applyAirPods.png"
                alt="Apple AirPods"
                className="w-[542px] rounded-[20px]"
              />
            </div>

            <div className="basis-[55%]">
              <div>
                <p className={`pt-0 text-3xl font-bold`}>Apple AirPods (3rd Generation)</p>
                <div className={`p-4`}>
                  <p
                    className={`font-sm my-2 h-[28px] w-[42px] items-center justify-center rounded bg-[#CFF7D3] p-1 text-green-300`}
                  >
                    Tag
                  </p>
                  <p className={`text-3xl font-bold`}>$ 179.00</p>
                </div>
              </div>
              <div className={`my-8 flex items-center justify-center rounded-[8px] bg-[#2C2C2C]`}>
                Buy
              </div>
              <div className={`rounded-[8px] bg-white px-1 py-2 text-black`}>
                <p>Airpods</p>
                <p>Experience immersive sound with Apple AirPods (3rd Generation),</p>
                <p>featuring spatial audio and adaptive EQ.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`px-2 py-20 font-bold text-white`}>Latest reviews</div>
        <div className={`flex justify-center gap-4 rounded-[8px]`}>
          <ItemLatestReview
            countStar={5}
            title={'Amazong Sound'}
            review={'Review body'}
            avt={'../../img/applyAirPods.png'}
            message={`The audio quality is fantastic,and the fit is comfortable.`}
            time={'07/11/2023'}
          />
          <ItemLatestReview
            countStar={2}
            title={'Amazong Sound'}
            review={'Review body'}
            avt={'../../img/applyAirPods.png'}
            message={`The audio quality is fantastic,and the fit is comfortable.`}
            time={'07/11/2023'}
          />
          <ItemLatestReview
            countStar={0}
            title={'Amazong Sound'}
            review={'Review body'}
            avt={'../../img/applyAirPods.png'}
            message={`The audio quality is fantastic,and the fit is comfortable.`}
            time={'07/11/2023'}
          />
        </div>
      </div>
    </div>
  );
};
export default AppleAirPods;
