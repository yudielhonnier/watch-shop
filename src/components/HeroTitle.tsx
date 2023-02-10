import { motion } from 'framer-motion';
import React from 'react';

import { styles } from '@/styles/styles';

import { zoomIn } from '../utils/motion';

const HeroTitle = () => {
  return (
    <motion.div
      variants={zoomIn(0.1, 0.5)}
      initial='hidden'
      whileInView='show'
      className={` flex-col  2xs:pt-2 sm:w-[100%] lg:w-[50%] lg:pt-48 ${styles.xPaddings} `}
    >
      <p className={` py-2 ${styles.titles} text-custom-yellow`}>WatchSh⌚p</p>
      <p className={` py-2 ${styles.titles}`}>The Best Watches Here</p>
      <p className='pt-8 '>
        Welcome to Watches , the premier destination for the
      </p>
      <p className='pb-8 '>highest quality watches on the market.</p>
      <div className='flex gap-12 py-8 text-2xl 2xs:text-xl'>
        <button className='bg-primary h-[40px] w-[250px] rounded-full border-2 border-yellow-border lg:w-[180px] '>
          Catalogue
        </button>
        <button className='h-[40px] w-[250px] rounded-full  bg-custom-yellow text-custom-black/80 lg:w-[180px] '>
          Order Now
        </button>
      </div>
    </motion.div>
  );
};

export default HeroTitle;
