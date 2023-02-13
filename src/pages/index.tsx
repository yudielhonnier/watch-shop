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

import useScrollPosition from '@/hooks/useScrollPosition';

import FloatingButton from '@/components/FloatingButton';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Analitics from '@/sections/Analitics';
import Contact from '@/sections/Contact';
import Features from '@/sections/Features';
import Hero from '@/sections/Hero';
import Pricing from '@/sections/Pricing';

import { ArrowUp1, SignUp } from '~/svg';

//todo: add dinamic env like JK
export default function HomePage() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const featuresRef = React.useRef<HTMLDivElement>(null);
  const analiticsRef = React.useRef<HTMLDivElement>(null);
  const pricingRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  const scrollYPosition = useScrollPosition();

  const handleScroll = (ref: HTMLDivElement | null) => {
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
        <Features pr={true} featuresRef={featuresRef} />
        <Analitics pr={true} analiticsRef={analiticsRef} />
        <Pricing pr={true} pricingRef={pricingRef} />
        <Contact pr={true} contactRef={contactRef} />
      </main>

      {/* floating buttons */}
      <div className={`${scrollYPosition > 100 ? 'flex' : 'hidden'}`}>
        {/* todo:add media query to this buttons */}
        <FloatingButton
          color='white'
          icon={ArrowUp1}
          handleScroll={handleScroll}
          customRef={heroRef}
          style='bottom-1'
        />

        <FloatingButton color='white' icon={SignUp} style='bottom-20' />
      </div>
    </Layout>
  );
}
