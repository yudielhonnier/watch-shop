import React from 'react';

import Feature from '@/components/Feature';
import PageTitle from '@/components/PageTitle';

import { features } from '@/constant/clock';
import { IPaddingRight } from '@/constant/types';

const Features = ({ pr }: IPaddingRight) => {
  return (
    <div
      className={` flex-col  ${
        pr && 'pr-24'
      } h-[100vh] bg-gradient-features  pl-24  pt-16`}
      id='features'
    >
      <div className=''>
        <PageTitle
          title='Features'
          subtitle='Analyze and draw your own conclusions'
        />
      </div>
      <div className='flex flex-row items-center justify-between gap-16 '>
        {/* todo:bug customAll color inside tailwind config dont work,if i change the with either */}
        {/* this div have a bug, to show it i need create this same div with the same properties in another component */}
        <div className=' text-primary h-[5px] w-[50px] rounded-lg bg-custom-yellow ' />
        <div className='flex flex-row items-center justify-center gap-28 '>
          {features.map((f) => (
            <Feature
              key={f.name}
              width2={f.width2}
              height2={f.height2}
              name={f.name}
              description={f.description}
              haveTitle={f.haveTitle}
            />
          ))}
        </div>
        <div className=' text-primary h-[5px] w-[50px] rounded-lg bg-custom-yellow' />
      </div>
    </div>
  );
};

export default Features;
