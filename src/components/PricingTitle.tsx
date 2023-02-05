import React from 'react';

import { styles } from '@/constant/styles';

const PricingTitle = () => {
  return (
    <div className='flex flex-col '>
      <p className={` py-2 ${styles.titles}`}>Pricing</p>
      <p className={`pt-8  ${styles.subtitles}`}>
        Check out our different purchase plans
      </p>
    </div>
  );
};

export default PricingTitle;
