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

//todo: add dinamic env like JK
export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='flex flex-col text-white'>
        <Hero pr={false} />
        <Features pr={true} />
        <Analitics pr={true} />
        <Pricing pr={true} />
        <Contact pr={true} />
      </main>
    </Layout>
  );
}
