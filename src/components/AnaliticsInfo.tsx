import { motion } from 'framer-motion';
import React from 'react';

import { styles } from '@/styles/styles';

import { zoomIn } from '../utils/motion';

const AnaliticsInfo = () => {
  return (
    <motion.div
      variants={zoomIn(0.1, 0.5)}
      initial='hidden'
      whileInView='show'
      className={`flex flex-col sm:w-[100%] lg:w-[50%] ${styles.lPaddings} `}
    >
      <p className={` py-2 ${styles.titles} text-custom-yellow`}>WatchSh⌚p</p>
      <p className={` py-2 ${styles.titles}`}>The Best Watches Here</p>
      <p className='pt-8 '>
        Welcome to Watches , the premier destination for the
      </p>
      <p className='pb-8 '>highest quality watches on the market.</p>
      <div className='flex gap-12 py-8 text-2xl xs:text-xl'></div>
    </motion.div>
  );
};

export default AnaliticsInfo;
