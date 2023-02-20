import { motion } from 'framer-motion';
import React from 'react';

import { ICard } from '@/constant/types';

import { fadeIn } from '../utils/motion';

const Feature = ({
  name,
  description,
  width2,
  height2,
  haveTitle,
  index,
}: ICard) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      initial='hidden'
      whileInView='show'
      className='flex h-[100%] flex-row items-center justify-center sm:w-[40%] lg:w-[30%]'
    >
      <div
        // todo:remove bg-yellow when the img bg is posted
        className={`flex flex-col ${width2} ${height2} `}
      >
        <div className='bg-yellow text-bold flex flex-row justify-center rounded-t-lg bg-custom-yellow text-2xl text-custom-black '>
          {haveTitle && <p>Feature</p>}
        </div>
        <div className=' flex h-[100%] flex-col break-words rounded-b-lg bg-custom-black/80 px-5'>
          <p className='py-7 text-custom-yellow '>{name}</p>
          <p className='pb-16'>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Feature;
