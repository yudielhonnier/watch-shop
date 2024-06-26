'use-client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';

import { navLinks } from '@/constant';
import { styles } from '@/styles/styles';
import { navVariants } from '@/utils/motion';

import { Close, Menu, World } from '~/svg';

const Navbar = ({ openModal }: { openModal: () => void }) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('home');
  // const [providers, setProviders] = useState(null);
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();
  const { t } = useTranslation('hero');

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     setProviders(res);
  //   })();
  // }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === 'en' ? 'es' : 'en';

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
      <div className='text-extrabold hidden items-center justify-between text-lg 2xs:w-[70%]   sm:flex sm:gap-2 lg:w-[50%]'>
        {navLinks.map((nav) => (
          <div key={nav.id}>
            <Link href={`#${nav.id}`}>{t(`navbar.${nav.id}`)}</Link>
          </div>
        ))}
      </div>
      {/* hamburguer icon */}
      <div className='flex  items-center  justify-between sm:hidden'>
        <div
          onClick={() => setToggle((toggle) => !toggle)}
          className='flex h-[28px] w-[28px] items-center justify-center object-contain'
        >
          {/* is='x3d' to suppresses test warnings about  The tag <close.svg> is unrecognized in this browser. */}
          {toggle ? (
            <Close
              is='x3d'
              width='80%'
              height='100%'
              class='fill-current text-custom-yellow'
            />
          ) : (
            <Menu
              is='x3d'
              width='80%'
              height='100%'
              class='fill-current text-custom-yellow'
            />
          )}
        </div>
        {/* side menu */}
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } sidebar absolute top-20 -left-1 mx-4 my-2 min-w-[140px] rounded-xl bg-custom-black/90 p-6`}
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
                <a href={`#${nav.id}`}>{t(`navbar.${nav.id}`)}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => onToggleLanguageClick(changeTo)}
        className='flex flex-row items-center justify-center '
      >
        <div className='w-[32px] '>
          <World
            is='x3d'
            width='80%'
            height='100%'
            class='fill-current text-custom-yellow'
          />
        </div>
        <p className='text-extrabold text-lg text-white'>
          {t(`${router.locale}`, { changeTo })}
        </p>
      </button>
      {/* explore button*/}
      <div className='flex h-[40%] items-center justify-center lg:w-[15%]   '>
        {/* todo: check how use GoogleProvider */}
        {/* {providers ? (
          Object.values(providers).map((provider) => (
            <button
              key={provider.name}
              onClick={() => {
                signIn(provider.id);
              }}
              className=' h-full  w-full rounded-full bg-custom-yellow px-2 text-2xl text-custom-black/80 2xs:text-xl  '
            >
              {t('navbar.explore')}
            </button>
          ))
        ) : (
          <button className=' h-full  w-full rounded-full bg-custom-yellow px-2 text-2xl text-custom-black/80 2xs:text-xl  '>
            sign out
          </button>
        )} */}
        {!session && !loading ? (
          <button
            onClick={() => {
              // signIn(provider.id);.
              return openModal();
            }}
            className=' h-full  w-full rounded-full bg-custom-yellow px-2 text-2xl text-custom-black/80 2xs:text-xl  '
          >
            {t('navbar.explore')}
          </button>
        ) : (
          <button
            onClick={() => {
              signOut();
            }}
            className=' h-full  w-full rounded-full bg-custom-yellow px-2 text-2xl text-custom-black/80 2xs:text-xl  '
          >
            Logout
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
