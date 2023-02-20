import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { styles } from '@/styles/styles';

import { IPageTitle } from '../constant/types';

const PageTitle = ({ title, subtitle }: IPageTitle) => {
  const { t } = useTranslation('contact');
  return (
    <motion.div
      initial='hidden'
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1.5, delayChildren: 0.5 }}
    >
      <div className='flex flex-col '>
        <h1 className={`  2xs:text-center lg:text-start ${styles.titles}`}>
          {t(`${title}`)}
        </h1>
        <p className={`${styles.subtitles} py-8`}>{t(`${subtitle}`)}</p>
      </div>
    </motion.div>
  );
};

export default PageTitle;
