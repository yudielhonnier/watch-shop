import React from 'react';

import Carrousel from '@/components/Carrousel';
import HomeTitle from '@/components/HomeTitle';
import Navbar from '@/components/Navbar';

import { IPaddingRight } from '@/constant/types';

const Section1 = ({ pr }: IPaddingRight) => {
  return (
    <div
      className='min-h-[100vh] flex-1 flex-row bg-gradient-section1'
      id='home'
    >
      <Navbar />
      <div
        className={`
      ${pr && 'pr-24'}
       flex flex-wrap justify-between pt-16    `}
      >
        <HomeTitle />
        <Carrousel showTypes={false} />
      </div>
    </div>
  );
};

export default Section1;
