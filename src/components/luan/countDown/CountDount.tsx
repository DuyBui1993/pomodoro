'use client';
import * as React from 'react';
import CountDownTab from '@/components/luan/countDown/CountDownTab';
import { Header } from '@/components/luan/countDown/CountDownHeader';

export const CountDown = () => {
  return (
    <div>
      <Header />
      <CountDownTab />
    </div>
  );
};
