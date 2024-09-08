import { CountDownIconButton } from '@/components/luan/countDown/CountDownIconButton';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Link from 'next/link';
import { MdFacebook } from 'react-icons/md';

const PomodoroFooter = () => {
  return (
    <div>
      <div className="mx-auto flex max-w-[620px] flex-col items-center p-6 text-red-950 opacity-70">
        <div className="mb-3 flex gap-4 font-bold">
          <a href="#" className=" ">
            HOME
          </a>
          <a href="#" className=" ">
            PRIVACY
          </a>
          <a href="#" className=" ">
            TERMS
          </a>
          <a href="#" className=" ">
            CONTACT
          </a>
          <a href="#" className="">
            SIMPLE PAGE
          </a>
        </div>

        <div className="mb-3 flex text-gray-400">
          <a href="#">
            <CountDownIconButton icon={<MdFacebook fontSize={50} />} text="" />
          </a>
          <a href="#">
            <CountDownIconButton icon={<AiFillTwitterCircle fontSize={50} />} text="" />
          </a>
        </div>

        <div className="mb-2">
          <p>
            Made with &lt;3 <Link href="#"> Yuya Uzu</Link>
          </p>
        </div>
        <div className="opacity-70">
          <p>&copy;Pomofocus 2024. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default PomodoroFooter;
