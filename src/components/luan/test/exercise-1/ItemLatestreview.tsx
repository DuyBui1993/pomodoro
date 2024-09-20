import { IoIosStar } from 'react-icons/io';

export const ItemLatestReview = ({ countStar, title, review, avt, message, time }) => {
  const start = <IoIosStar className={`text-yellow-300`} />;
  return (
    <div
      className={`items-center justify-center  gap-8 space-y-8 rounded-lg border-2 border-white px-4 pb-4 pt-8`}
    >
      <div className="header space-y-2">
        <div className={`mb-1 flex`}>
          {countStar > 0 &&
            Array.from({ length: countStar }, (_, index) => <span key={index}>{start}</span>)}
        </div>
        <div className="">
          <div className={`text-3xl font-bold`}>{title}</div>
          <div className={`text-sm`}>{review}</div>
        </div>
      </div>
      <div className={`flex space-x-2`}>
        <img className={`h-[30px] w-[30px] rounded-full`} src={avt} alt="avt" />
        <div className="flex-1">
          <div>{message}</div>
          <div>{time}</div>
        </div>
      </div>
    </div>
  );
};
