/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Analitics from '@/sections/Analitics';
import Contact from '@/sections/Contact';
import Features from '@/sections/Features';
import Hero from '@/sections/Hero';
import Pricing from '@/sections/Pricing';

import { ArrowUp1, SignUp } from '~/svg';

//todo: add dinamic env like JK
{
  /* todo:fix the buttonUp feature */
}
export default function HomePage() {
  const heroRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.LegacyRef<HTMLDivElement>) => {
    // to cast the ref value
    if (ref instanceof HTMLDivElement) {
      window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='flex flex-col text-white'>
        <Hero pr={false} heroRef={heroRef} />
        <Features pr={true} />
        <Analitics pr={true} />
        <Pricing pr={true} />
        <Contact pr={true} />
      </main>

      {/* todo:&#11014 translate to a icon */}
      <div>
        <button
          className='scroll-top-btn flex flex-row items-center justify-center bg-custom-yellow/60 hover:bg-custom-black'
          onClick={() => handleScroll(heroRef)}
        >
          <ArrowUp1 color='white' />
        </button>
        <button className='download-btn flex flex-row items-center justify-center bg-custom-yellow/60 hover:bg-custom-black'>
          <SignUp color='white' />
        </button>
      </div>
    </Layout>
  );
}
