import React from 'react';

import { IPlans } from '@/constant/types';

const PricingCard = ({
  isAdvanced,
  category,
  range,
  description,
  color,
}: IPlans) => {
  return (
    <div
      className={`rounded-lg border-2 border-yellow-border ${
        isAdvanced
          ? 'bg-primary h-[400px] w-[350px]'
          : 'bg-primary/50 h-[300px] w-[300px]'
      }
      ${color}  relative flex items-center justify-center`}
    >
      <div className='flex-col items-center justify-center break-words px-12 text-center'>
        <p className={`  flex  justify-center py-2 text-3xl font-extrabold `}>
          {category}
        </p>
        <p className={`flex  justify-center p-4 text-custom-yellow `}>
          {range}
        </p>
        <p className={` text-2xl font-extrabold  `}>{description}</p>
        <button
          className={`bg-primary absolute -bottom-5 left-0  right-0 mr-auto ml-auto h-[40px] w-[250px]  rounded-full border-2 border-yellow-border lg:w-[180px]  `}
        >
          See
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
