'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

export interface LayoutProps {
  children: React.ReactNode;
}

const RecoilContextProvider = ({ children }: LayoutProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContextProvider;
