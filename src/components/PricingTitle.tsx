import { useTranslation } from 'next-i18next';
import React from 'react';

import { styles } from '@/styles/styles';

const PricingTitle = () => {
  const { t } = useTranslation('pricing');

  return (
    <div className='flex flex-col '>
      <p className={`py-2 2xs:text-center ${styles.titles}`}>{t('title')}</p>
      <p className={`pt-8  ${styles.subtitles}`}>
        Check out our different purchase plans
      </p>
    </div>
  );
};

export default PricingTitle;
