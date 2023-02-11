import { motion } from 'framer-motion';
import React from 'react';

import Feature from '@/components/Feature';
import PageTitle from '@/components/PageTitle';

import { features } from '@/constant';
import { IPaddingRight } from '@/constant/types';
import { styles } from '@/styles/styles';

import { fadeIn } from '../utils/motion';

const Features = ({ pr }: IPaddingRight) => {
  return (
    <div
      className={`flex flex-col  ${
        pr && styles.xPaddings
      } bg-gradient-features pt-16 2xs:h-full  lg:h-[100vh]`}
      id='features'
    >
      <motion.div
        initial='hidden'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
        className='pb-8 2xs:text-center lg:text-start'
      >
        <PageTitle
          title='Features'
          subtitle='Analyze and draw your own conclusions'
        />
      </motion.div>
      <div className='flex flex-row items-center gap-14 p-4 2xs:justify-center lg:h-[50%] lg:h-[70%]  lg:justify-between'>
        <div className=' text-primary h-[5px] w-[50px] rounded-lg bg-custom-yellow 2xs:hidden lg:flex' />
        <div className='flex  h-[100%] w-[100%] items-center justify-center gap-14 2xs:flex-col  lg:flex-row'>
          {features.length > 0 &&
            features.map((f, i) => (
              <motion.div
                variants={fadeIn('right', 'spring', i * 0.5, 0.75)}
                initial='hidden'
                whileInView='show'
                key={f.name}
                className='flex h-[100%] flex-row items-center justify-center sm:w-[40%] lg:w-[30%]'
              >
                <Feature
                  width2={f.width2}
                  height2={f.height2}
                  name={f.name}
                  description={f.description}
                  haveTitle={f.haveTitle}
                />
              </motion.div>
            ))}
        </div>
        <div className=' text-primary h-[5px] w-[50px] rounded-lg bg-custom-yellow 2xs:hidden lg:flex' />
      </div>
    </div>
  );
};

export default Features;
