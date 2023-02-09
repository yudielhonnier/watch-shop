import { motion } from 'framer-motion';
import React from 'react';

import { styles } from '@/styles/styles';

import { slideIn } from '../utils/motion';

const AnaliticsInfo = () => {
  return (
    <motion.div
      variants={slideIn('left', 'tween', 0.1, 0.5)}
      initial='hidden'
      whileInView='show'
      className={`flex flex-col xs:w-[100%] xs:text-center lg:w-[50%] lg:text-start  `}
    >
      <p className={` py-2 ${styles.titles} `}>
        Our <span className='text-custom-yellow'>watches</span> are sold
        commonly on <span className='text-custom-yellow'>United State</span> and{' '}
        <span className='text-custom-yellow'>Europe</span>
      </p>
      <p className={` py-2 ${styles.subtitles}`}>
        Bellow is a graph with the types of watches delivered in this regions
      </p>
    </motion.div>
  );
};

export default AnaliticsInfo;
