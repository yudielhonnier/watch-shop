import { motion } from 'framer-motion';
import Link from 'next/link';
import { Close, Menu } from 'public/svg';
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
      <div className='text-extrabold hidden items-center justify-between text-lg xs:w-[70%]   sm:flex sm:gap-2 lg:w-[50%]'>
        {navLinks.map((nav) => (
          <div key={nav.id} className='truncate'>
            <Link href={`#${nav.id}`}>{nav.title}</Link>
          </div>
        ))}
      </div>

      {/* hamburguer icon */}
      <div className='flex  items-center  justify-between sm:hidden'>
        <div
          onClick={() => setToggle((toggle) => !toggle)}
          className='flex h-[28px] w-[28px] items-center justify-center object-contain'
        >
          {toggle ? <Close /> : <Menu />}
        </div>
        {/* side menu */}
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } sidebar absolute top-20 left-0 mx-4 my-2 min-w-[140px] rounded-xl bg-custom-black p-6`}
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
      <div className='flex h-[40%] items-center justify-center lg:w-[15%]   '>
        <button className=' h-full  w-full rounded-full bg-custom-yellow px-2 text-2xl text-custom-black/80 xs:text-xl  '>
          Explore
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
