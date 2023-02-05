import React from 'react';

import { IPlans } from '@/constant/types';

const PricingCard = ({ isAdvanced, category, range, description }: IPlans) => {
  return (
    <div
      className={`border-yellow-border rounded-lg border-2 ${
        isAdvanced
          ? 'bg-primary h-[400px] w-[350px]'
          : 'bg-primary/50 h-[300px] w-[300px]'
      }  relative flex items-center justify-center`}
    >
      <div className='flex-col items-center justify-center break-words px-12 text-center'>
        <p className={`  flex  justify-center py-2 text-3xl font-extrabold `}>
          {category}
        </p>
        <p className={`text-custom-yellow  flex justify-center p-4 `}>
          {range}
        </p>
        <p className={` text-2xl font-extrabold  `}>{description}</p>
        <button
          className={`bg-primary border-yellow-border absolute -bottom-5  left-0 right-0 mr-auto ml-auto h-[40px]  w-[250px] rounded-full border-2 lg:w-[180px]  `}
        >
          See
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
