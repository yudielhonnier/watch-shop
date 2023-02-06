import { motion } from 'framer-motion';
import React from 'react';

import Feature from '@/components/Feature';
import PageTitle from '@/components/PageTitle';

import { features } from '@/constant/clock';
import { IPaddingRight } from '@/constant/types';

import { fadeIn } from '../utils/motion';

const Features = ({ pr }: IPaddingRight) => {
  return (
    <div
      className={` flex-col  ${
        pr && 'pr-24'
      } h-[100vh] bg-gradient-features  pl-24  pt-16`}
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
      <div className='flex flex-row items-center justify-between gap-16 p-4'>
        {/* todo:bug customAll color inside tailwind config dont work,if i change the with either */}
        {/* this div have a bug, to show it i need create this same div with the same properties in another component */}
        <div className=' text-primary h-[5px] w-[50px] rounded-lg bg-custom-yellow ' />
        <div className='flex flex-row items-center justify-center gap-20 '>
          {features.map((f, i) => (
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
        <div className=' text-primary h-[5px] w-[50px] rounded-lg bg-custom-yellow' />
      </div>
    </div>
  );
};

export default Features;
