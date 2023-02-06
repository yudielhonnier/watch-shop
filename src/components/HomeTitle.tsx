import { motion } from 'framer-motion';
import React from 'react';

import { styles } from '@/styles/styles';

import { fadeIn } from '../utils/motion';

const HomeTitle = () => {
  return (
    <div className='flex flex-col pt-48 pr-24 pl-24 md:pr-24 lg:pr-24'>
      <p className={` py-2 ${styles.titles} text-custom-yellow`}>WatchSh⌚p</p>
      <p className={` py-2 ${styles.titles}`}>The Best Watches Here</p>
      <p className='pt-8 '>
        Welcome to Watches , the premier destination for the
      </p>
      <p className='pb-8 '>highest quality watches on the market.</p>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='flex gap-12 py-8'
      >
        <button className='bg-primary h-[40px] w-[250px] rounded-full border-2 border-yellow-border lg:w-[180px] '>
          Features
        </button>
        <button className='h-[40px] w-[250px] rounded-full  bg-custom-yellow text-black lg:w-[180px] '>
          Order Now
        </button>
      </motion.div>
    </div>
  );
};

export default HomeTitle;
