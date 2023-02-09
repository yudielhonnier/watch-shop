import { motion } from 'framer-motion';
import Link from 'next/link';
import { Close } from 'public/svg';
import React, { useState } from 'react';

import { navLinks } from '@/constant';
import { styles } from '@/styles/styles';
import { navVariants } from '@/utils/motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');

  const handleLinkOnClick = (nav: { id?: string; title: string }) => {
    setActive(nav.title);
    setToggle((toggle) => !toggle);
  };

  return (
    <motion.div
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`flex h-[12vh] w-full  items-center  justify-between  bg-box-primary/70  ${styles.xPaddings}`}
    >
      {/* link list */}
      <div className='text-extrabold hidden w-[50%] items-center justify-between   text-xl sm:flex sm:gap-2'>
        {navLinks.map((nav) => (
          <Link key={nav.id} href={`#${nav.id}`}>
            {nav.title}
          </Link>
        ))}
      </div>

      {/* hamburguer icon */}
      <div className='flex  items-center  justify-between sm:hidden'>
        <div
          onClick={() => setToggle((toggle) => !toggle)}
          className='h-[28px] w-[28px] object-contain'
        >
          <Close />
        </div>
        {/* side menu */}
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } bg-custom-black-gradient sidebar absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className='flex flex-1 list-none flex-col items-start justify-end'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins text-[16px] font-medium ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => handleLinkOnClick(nav)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* explore button*/}
      <div className='flex h-[40%] w-[20%] items-end justify-center sm:w-[12%]  '>
        <button className='text-extrabold   h-full w-full rounded-full bg-custom-yellow text-2xl text-custom-black sm:text-xl '>
          Explore
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
