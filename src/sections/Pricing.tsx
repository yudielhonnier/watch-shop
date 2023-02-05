// export default Pricing

import React from 'react';

import PricingCard from '@/components/PricingCard';
import PricingTitle from '@/components/PricingTitle';

import { pricing } from '@/constant/clock';
import { IPaddingRight } from '@/constant/types';

const Pricing = ({ pr }: IPaddingRight) => {
  return (
    <div
      className={` h-[100vh] bg-gradient-pricing pl-24 ${pr && 'pr-24'} pt-16`}
      id='pricing'
    >
      <PricingTitle />
      <div className='flex flex-row items-center justify-center gap-20 pt-20 '>
        {pricing.map((v) => (
          <PricingCard
            isAdvanced={v.isAdvanced}
            key={v.id}
            category={v.category}
            range={v.range}
            description={v.description}
            color={v.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
