import { motion } from 'framer-motion';
import React from 'react';

import ButtonContact from '@/components/ButtonContact';
import ContactClock from '@/components/ContactClock';
import ContactJoined from '@/components/ContactJoined';
import PageTitle from '@/components/PageTitle';

import { IPaddingRight } from '@/constant/types';
import { styles } from '@/styles/styles';

const Contact = ({ pr }: IPaddingRight) => {
  return (
    <div
      className={` pl-24 ${
        pr && styles.paddings
      } flex flex-col bg-gradient-contact  pt-16 xs:h-full lg:h-[100vh]`}
      id='contact'
    >
      <motion.div
        initial='hidden'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
      >
        <PageTitle title='Contact' subtitle='' />
      </motion.div>
      <div className=' relative flex flex-col items-center gap-6 py-8 '>
        <div className='flex w-[100%] flex-col  '>
          <div className='flex h-[100%] w-[100%] flex-col  '>
            <ContactJoined />
          </div>
          <div className='relative flex flex-row  items-center justify-start gap-6 pt-8 lg:static '>
            <ButtonContact src='/svg/facebook.svg' text='Hello' />
            <ButtonContact src='/svg/instagram.svg' text='Hello' />
            <ButtonContact src='/svg/twitter.svg' text='Hello' />
            {/* todo:set this component here  because when the info text is stretched, the size
        properties are modified */}
            <ContactClock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
