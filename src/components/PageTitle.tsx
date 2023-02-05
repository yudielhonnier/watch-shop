import React from 'react';

import { styles } from '@/constant/styles';

import { IPageTitle } from '../constant/types';

const PageTitle = ({ title, subtitle }: IPageTitle) => {
  return (
    <div className='flex flex-col '>
      <p className={` py-2 ${styles.titles}`}>{title}</p>
      <p className='${styles.subtitles} py-8'>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
