import { IoMdStar } from 'react-icons/io';

export const ItemReview = ({ countStar, title, review, avt, message, time }) => {
  const starIcon = <IoMdStar className="text-yellow-300" />;
  const stars = Array.from({ length: countStar });

  return (
    <div className="basis-[33%] rounded-lg border border-white p-8 text-white">
      <div className="space-y-2">
        <div className="flex">
          {stars.map((item, index) => (
            <div key={index}>{starIcon}</div>
          ))}
        </div>

        <div>
          <div className={`text-3xl font-bold ${stars.length === 0 ? 'mt-5' : ''}`}>{title}</div>
          <div className="text-sm">{review}</div>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        <img className="h-[30px] w-[30px] rounded-full" src={avt} alt="Avatar" />
        <div className="flex-1">
          <div className="text-sm">{message}</div>
          <div className="text-xs">{time}</div>
        </div>
      </div>
    </div>
  );
};
