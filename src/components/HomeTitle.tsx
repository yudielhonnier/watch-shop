import React from 'react';

import { styles } from '@/constant/styles';

const HomeTitle = () => {
  return (
    <div className='flex flex-col pt-48 pr-24 pl-24 md:pr-24 lg:pr-24'>
      <p className={` py-2 ${styles.titles} text-custom-yellow`}>WatchSh⌚p</p>
      <p className={` py-2 ${styles.titles}`}>The Best Watches Here</p>
      <p className='pt-8 '>
        Welcome to Watches , the premier destination for the
      </p>
      <p className='pb-8 '>highest quality watches on the market.</p>
      <div className='flex gap-12 py-8'>
        <button className='bg-primary border-yellow-border h-[40px] w-[250px] rounded-full border-2 lg:w-[180px] '>
          Features
        </button>
        <button className='bg-custom-yellow text-primary h-[40px]  w-[250px] rounded-full lg:w-[180px] '>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default HomeTitle;
