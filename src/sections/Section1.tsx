import React from 'react';

import Carrousel from '@/components/Carrousel';
import HomeTitle from '@/components/HomeTitle';
import Navbar from '@/components/Navbar';

import { IPaddingRight } from '@/constant/types';
import { styles } from '@/styles/styles';

const Section1 = ({ pr }: IPaddingRight) => {
  return (
    <div
      // dont put pl-24 here because i need that navbar ocupe all width screen'
      className='flex-col bg-gradient-section1 xs:h-full '
      id='home'
    >
      <Navbar />
      <div
        className={`
      ${pr && styles.rPaddings}
        flex justify-between  pt-16 xs:flex-col lg:flex-row`}
      >
        <HomeTitle />
        <Carrousel showTypes={false} />
      </div>
    </div>
  );
};

export default Section1;
