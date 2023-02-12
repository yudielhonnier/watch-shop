import React from 'react';

import Carrousel from '@/components/Carrousel';
import HomeTitle from '@/components/HeroTitle';
import Navbar from '@/components/Navbar';

import { IHeroProps } from '@/constant/types';
import { styles } from '@/styles/styles';

const Hero = ({ pr, heroRef }: IHeroProps) => {
  return (
    <div
      // dont put pl-24 here because i need that navbar ocupe all width screen'
      className='flex-col bg-gradient-hero 2xs:h-full '
      id='home'
      ref={heroRef}
    >
      <Navbar />
      <div
        className={`
      ${pr && styles.rPaddings}
        flex justify-between  pt-16 2xs:flex-col lg:flex-row`}
      >
        <HomeTitle />
        <Carrousel showTypes={false} />
      </div>
    </div>
  );
};

export default Hero;
