import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { styles } from '@/styles/styles';

import { zoomIn } from '../utils/motion';

const HeroTitle = () => {
  const { t } = useTranslation('hero');

  return (
    <motion.div
      variants={zoomIn(0.1, 0.5)}
      initial='hidden'
      whileInView='show'
      className={` flex-col  2xs:pt-2 sm:w-[100%] lg:w-[50%] lg:pt-48 ${styles.xPaddings} `}
    >
      <p className={` py-2 ${styles.titles} text-custom-yellow`}>
        {t('title.full-name')}
      </p>
      <p className={` py-2 ${styles.titles}`}>{t('title.description')}</p>
      <p className='pt-8 '>{t('title.wellcome1')}</p>
      <p className='pb-8 '>{t('title.wellcome2')}</p>
      <div className='flex gap-12 py-8 text-2xl 2xs:text-xl'>
        <button className='bg-primary h-[40px] w-[250px] rounded-full border-2 border-yellow-border lg:w-[180px] '>
          {t('title.catalogue')}
        </button>
        <button className='h-[40px] w-[250px] overflow-hidden  rounded-full bg-custom-yellow text-custom-black/80 2xs:pt-1.5 xs:pt-0 lg:w-[180px]'>
          {t('title.order-now')}
        </button>
      </div>
    </motion.div>
  );
};

export default HeroTitle;
