// export default Pricing
import { motion } from 'framer-motion';
import React from 'react';

import PricingCard from '@/components/PricingCard';
import PricingTitle from '@/components/PricingTitle';

import { pricing } from '@/constant';
import { IPaddingRight } from '@/constant/types';

import { zoomIn } from '../utils/motion';

const Pricing = ({ pr }: IPaddingRight) => {
  return (
    <div
      className={` bg-gradient-pricing pl-24 xs:h-full  ${
        pr && 'pr-24'
      } flex flex-col pt-16`}
      id='pricing'
    >
      <motion.div
        initial='hidden'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
      >
        <PricingTitle />
      </motion.div>
      <div className='flex  items-center justify-center gap-20 pt-20 pb-8 xs:flex-col lg:flex-row '>
        {pricing.map((v) => (
          <motion.div
            key={v.id}
            variants={zoomIn(0.5, 0.5)}
            initial='hidden'
            whileInView='show'
          >
            <PricingCard
              isAdvanced={v.isAdvanced}
              category={v.category}
              range={v.range}
              description={v.description}
              color={v.color}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
