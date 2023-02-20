import '@testing-library/jest-dom/extend-expect';

// Allow router mocks.
// eslint-disable-next-line no-undef
jest.mock('next/router', () => require('next-router-mock'));

//to solve TypeError: window.ResizeObserver is not a constructor in Analitics Section
global.ResizeObserver = require('resize-observer-polyfill');
