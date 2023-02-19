import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { styles } from '@/styles/styles';

import { slideIn } from '../utils/motion';

const AnaliticsInfo = () => {
  const { t } = useTranslation('analitics');

  return (
    <motion.div
      variants={slideIn('left', 'tween', 0.1, 0.5)}
      initial='hidden'
      whileInView='show'
      className={`xs:w-[100%] xs:text-center flex flex-col lg:w-[50%] lg:text-start  `}
    >
      <p className={` py-2 ${styles.titles} `}>
        {t('info.our')}{' '}
        <span className='text-custom-yellow'> {t('info.watches')}</span>{' '}
        {t('info.are-sold')}
        <span className='text-custom-yellow'> {t('info.state1')}</span>{' '}
        {t('info.and')}
        <span className='text-custom-yellow'> {t('info.state2')}</span>
      </p>
      <p className={` py-2 ${styles.subtitles}`}>
        {t('info.graph-description')}
      </p>
    </motion.div>
  );
};

export default AnaliticsInfo;
