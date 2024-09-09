import * as React from 'react';
import { FaceBookTabList } from '@/components/duy/FacebookTab/FaceBookTabList';
import { FaceBookTabHeader } from '@/components/duy/FacebookTab/FaceBookTabHeader';

const FaceBookTabPage = () => {
  return (
    <div className="h-screen bg-white">
      <div className="mx-auto w-[1024px] space-y-1">
        <FaceBookTabHeader />
        <FaceBookTabList />
      </div>
    </div>
  );
};

export default FaceBookTabPage;
