import { useTranslation } from 'next-i18next';
import React from 'react';

import Feature from '@/components/Feature';
import PageTitle from '@/components/PageTitle';

import { features } from '@/constant';
import { IFeaturesProps } from '@/constant/types';

const Features = ({ featuresRef }: IFeaturesProps) => {
  const { t } = useTranslation('features');
  return (
    <div
      className='flex flex-col  bg-gradient-features px-2 pt-16 2xs:h-full  2xs:items-center lg:h-[100vh] lg:items-start'
      id='features'
      ref={featuresRef}
    >
      <PageTitle title={t('title')} subtitle={t('subtitle')} />
      <div className='flex flex-row items-center gap-14 p-4 2xs:justify-center sm:w-[100%] lg:h-[60%]  lg:justify-between'>
        <div className=' text-primary h-[5px] w-[50px] rounded-lg bg-custom-yellow 2xs:hidden lg:flex' />
        <div className='flex  h-[100%] w-[100%] items-center justify-center gap-14 2xs:flex-col  lg:flex-row'>
          {features.length > 0 &&
            features.map((f, i) => (
              <Feature
                key={f.name}
                width2={f.width2}
                height2={f.height2}
                name={t(`feature.${f.id}.name`)}
                description={t(`feature.${f.id}.description`)}
                haveTitle={f.haveTitle}
                index={i}
              />
            ))}
        </div>
        <div className=' text-primary h-[5px] w-[50px] rounded-lg bg-custom-yellow 2xs:hidden lg:flex' />
      </div>
    </div>
  );
};

export default Features;
