import { motion } from 'framer-motion';
import React from 'react';

import AnaliticsInfo from '@/components/AnaliticsInfo';
import CustomRadarChart from '@/components/charts/CustomRadarChart';

import { IPaddingRight } from '@/constant/types';
import { styles } from '@/styles/styles';

const Analitics = ({ pr }: IPaddingRight) => {
  return (
    <div
      className={` pl-24 ${
        pr && styles.paddings
      } flex flex-col bg-custom-black pt-16 xs:h-full lg:h-[100vh]`}
      id='analitics'
    >
      <motion.div
        initial='hidden'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
        className={`
        flex  h-full  w-full items-center justify-between xs:flex-col lg:flex-row`}
      >
        <AnaliticsInfo />
        <div className='h-[100%] h-[100%] xs:w-[100%] lg:w-[50%]'>
          <CustomRadarChart />
        </div>
      </motion.div>
    </div>
  );
};

export default Analitics;
