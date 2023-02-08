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
        pr && styles.rPaddings
      } flex h-[100vh]  flex-col bg-gradient-contact pt-16`}
      id='analitics'
    >
      <motion.div
        initial='hidden'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
        className={`
        flex  h-full  w-full items-center justify-between pt-16 xs:flex-col lg:flex-row`}
      >
        <AnaliticsInfo />
        <CustomRadarChart />
      </motion.div>
    </div>
  );
};

export default Analitics;
