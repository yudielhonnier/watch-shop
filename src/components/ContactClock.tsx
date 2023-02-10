import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { watchContact } from '../constant';
import { clockVariants } from '../utils/motion';

{
  /* todo:add media querys */
}
const ContactClock = () => {
  return (
    <motion.div
      variants={clockVariants('left')}
      initial='hidden'
      whileInView='show'
      className=' absolute  xs:-top-5 xs:-right-3 xs:h-[200%] xs:w-[20%]  lg:top-3 lg:right-20 lg:h-[75%] lg:w-[20%] '
    >
      <Image
        fill
        sizes='(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                       33vw'
        priority={true}
        src={watchContact.imgurl}
        alt={watchContact.name}
        className='z-[999]  rounded-lg object-contain '
      />
    </motion.div>
  );
};

export default ContactClock;
