/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */
import localFont from '@next/font/local';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

//this is for config your font global
const poppinsBold = localFont({
  subsets: ['latin'],
  src: '../../public/fonts/poppins-Medium.ttf',
  variable: '--poppins-font',
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={`${poppinsBold.variable} font-poppins text-white`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
