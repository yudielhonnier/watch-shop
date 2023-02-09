/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: [...fontFamily.sans],
        poppins: ['var(--poppins-font)', ...fontFamily.sans],
      },
      screens: {
        xs: '320px',
        sm: '481px',
        ...defaultTheme.screens,
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        'custom-black': '#0d0c0f',
        'custom-yellow': '#e2ce32',
        'yellow-border': '#989561',
        white: '#e4e4e4',
        'box-primary': '#171717',
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
      height: {
        '88vh': '88vh',
      },
      backgroundImage: {
        'gradient-section1':
          "radial-gradient(circle at 88% 8%, rgba(226, 206, 50, 0.2) 0%, rgba(23, 23, 23, 1) 11%, rgba(13, 12, 15, 0) 100%),radial-gradient(circle at 0% 47%, rgba(226, 206, 50, 0.5) 0%, rgba(23, 23, 23, 0.8) 15%, rgba(13, 12, 15, 1) 100%),url('/images/section1-bg.jpg')",
        'gradient-features':
          "radial-gradient(circle at 100% 100%, rgba(226, 206, 50, 0.5) 0%, rgba(23, 23, 23, 0.8) 15%, rgba(13, 12, 15, 1) 100%),url('/images/features4-bg.jpg')",
        'gradient-pricing':
          "radial-gradient(circle at 100% 100%, rgba(226, 206, 50, 0.5) 0%, rgba(23, 23, 23, 0.8) 15%, rgba(13, 12, 15, 1) 100%),url('/images/pricing-bg.jpg')",
        'gradient-contact':
          "radial-gradient(circle at 100% 100%, rgba(226, 206, 50, 0.5) 0%, rgba(23, 23, 23, 0.8) 15%, rgba(13, 12, 15, 1) 100%),url('/images/contact-bg.jpg')",
        'gradient-navbar':
          "lineal-gradient(circle at 100% 100%, rgba(226, 206, 50, 0.5) 0%, rgba(23, 23, 23, 0.8) 15%, rgba(13, 12, 15, 1) 100%)')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
