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
        pr && 'pr-24'
      } h-full bg-gradient-features lg:h-[100vh]  ${styles.lPaddings} pt-16`}
      id='features'
    >
      <motion.div
        initial='hidden'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
        className='pb-8'
      >
        <PageTitle
          title='Features'
          subtitle='Analyze and draw your own conclusions'
        />
      </motion.div>
      <div className='flex flex-row items-center gap-16 p-4 xs:justify-center lg:justify-between'>
        {/* todo:bug customAll color inside tailwind config dont work,if i change the with either */}
        {/* this div have a bug, to show it i need create this same div with the same properties in another component */}
        <div className=' text-primary h-[5px] w-[50px] rounded-lg bg-custom-yellow xs:hidden lg:flex' />
        <div className='flex   items-center justify-center gap-20 xs:flex-col lg:flex-row'>
          {features.length > 0 &&
            features.map((f, i) => (
              <motion.div
                variants={fadeIn('right', 'spring', i * 0.5, 0.75)}
                initial='hidden'
                whileInView='show'
                key={f.name}
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
        <div className=' text-primary h-[5px] w-[50px] rounded-lg bg-custom-yellow xs:hidden lg:flex' />
      </div>
    </div>
  );
};

export default Features;
