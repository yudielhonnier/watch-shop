import { motion } from 'framer-motion';
import React from 'react';

import ButtonContact from '@/components/ButtonContact';
import ContactClock from '@/components/ContactClock';
import ContactInvitation from '@/components/ContactInvitation';
import PageTitle from '@/components/PageTitle';

import { socialNetwork } from '@/constant';
import { IPaddingRight } from '@/constant/types';
import { styles } from '@/styles/styles';

const Contact = ({ pr }: IPaddingRight) => {
  return (
    <div
      className={` pl-24 ${
        pr && styles.paddings
      } xs:h-full flex flex-col  bg-gradient-contact pt-16 lg:h-[100vh]`}
      id='contact'
    >
      <motion.div
        initial='hidden'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
      >
        <PageTitle title='Contact' subtitle='' />
      </motion.div>
      <div className=' relative flex flex-col items-center gap-6 pt-8 '>
        <div className='flex flex-col 2xs:w-[100%] sm:w-[80%]  '>
          <ContactInvitation />
          {/* footer dont extract in a footer component cause Contactclock depend of footer and contactInvitation */}
          <div className='h-0.5 w-[100%] bg-custom-yellow ' />
          <div className='relative flex h-[75px] w-[100%]  items-center justify-between gap-4 pt-8 2xs:flex-col lg:static   '>
            <div className=' flex h-[100%] w-[100%]  flex-row items-center justify-start gap-4  '>
              {socialNetwork &&
                socialNetwork.map((n) => (
                  <ButtonContact key={n.src} src={n.src} text={n.text} />
                ))}
              {/* todo:set this component here  because when the info text is stretched, the size
        properties are modified */}
              <ContactClock />
            </div>
            <div className=' w-[100%] pr-8 text-center '>
              <p>© 2023 Watchshop,Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
