import Image from 'next/image';
import React from 'react';

import ButtonContact from '@/components/ButtonContact';
import PageTitle from '@/components/PageTitle';

import { IPaddingRight } from '@/constant/types';

import { watchContact } from '../constant/clock';

const Contact = ({ pr }: IPaddingRight) => {
  return (
    <div
      className={` pl-24 ${pr && 'pr-24'} h-[100vh]  bg-gradient-contact pt-16`}
      id='contact'
    >
      <PageTitle title='Contact' subtitle='' />
      <div className=' relative flex flex-col items-center gap-6 pt-8 '>
        {/* todo:add media querys */}
        <div className='absolute right-40 top-5 h-[260px] w-[250px]'>
          <Image
            fill
            src={watchContact.imgurl}
            alt={watchContact.name}
            className='z-[999]  rounded-lg object-contain '
          />
        </div>
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
