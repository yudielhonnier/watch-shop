import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { styles } from '@/styles/styles';

const PricingTitle = () => {
  const { t } = useTranslation('pricing');

  return (
    <motion.div
      initial='hidden'
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1.5, delayChildren: 0.5 }}
    >
      <div className='flex flex-col '>
        <p className={`2xs:text-center lg:text-start ${styles.titles}`}>
          {t('title')}
        </p>
        <p className={`pt-8 2xs:text-center lg:text-start ${styles.subtitles}`}>
          {t('subtitle')}
        </p>
      </div>
    </motion.div>
  );
};

export default PricingTitle;
