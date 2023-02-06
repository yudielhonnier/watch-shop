import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import ButtonContact from '@/components/ButtonContact';
import PageTitle from '@/components/PageTitle';

import { IPaddingRight } from '@/constant/types';

import { watchContact } from '../constant/clock';
import { clockVariants } from '../utils/motion';

const Contact = ({ pr }: IPaddingRight) => {
  return (
    <div
      className={` pl-24 ${pr && 'pr-24'} h-[100vh]  bg-gradient-contact pt-16`}
      id='contact'
    >
      <motion.div
        initial='hidden'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
      >
        <PageTitle title='Contact' subtitle='' />
      </motion.div>
      <div className=' relative flex flex-col items-center gap-6 pt-8 '>
        {/* todo:add media querys */}
        <motion.div
          variants={clockVariants('left')}
          initial='hidden'
          whileInView='show'
          className='absolute right-40 top-5 h-[260px] w-[250px]'
        >
          <Image
            fill
            sizes='(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                       33vw'
            priority={true}
            src={watchContact.imgurl}
            alt={watchContact.name}
            className='z-[999]  rounded-lg object-contain '
          />
        </motion.div>
        <div className='flex w-[80%] flex-col  '>
          <div
            // todo:remove bg-yellow when the img bg is posted
            className={`flex flex-col  `}
          >
            <div className='bg-primary  text-bold text-primary justify-center rounded-t-lg text-2xl'>
              <div className=' text-primary h-[8px] w-[100%] rounded-t-lg bg-custom-yellow ' />
            </div>
            <div className=' break-words   rounded-b-lg  bg-box-primary/80 p-8 '>
              <p className={` py-2 text-3xl font-extrabold text-custom-yellow`}>
                Have you joined our family yet?
              </p>
              <div className='w-[60%]'>
                <p className='py-8'>
                  Hi there friend, our Watchesshop community is growing at a
                  fast pace please give us some love on our social networks
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-start gap-6 pt-8 '>
            <ButtonContact src='/svg/facebook.svg' text='Hello' />
            <ButtonContact src='/svg/instagram.svg' text='Hello' />
            <ButtonContact src='/svg/twitter.svg' text='Hello' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
