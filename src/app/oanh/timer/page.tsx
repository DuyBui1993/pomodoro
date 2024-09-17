import { Timer } from '@/components/oanh/timer/Timer';

const HomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="mx-auto p-4">
        <Timer />
      </div>
    </div>
  );
};
export default HomePage;
