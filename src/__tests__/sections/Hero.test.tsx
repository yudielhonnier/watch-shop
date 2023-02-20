import { I18nextProvider } from 'react-i18next';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import reacti18nextMock from '@/__mocks__/reacti18nextMock';
import Hero from '@/sections/Hero';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe('Hero', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(() => {
    intersectionObserverMock();
    reacti18nextMock();
  });

  it('should render Hero component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Hero pr={true} heroRef={null} />
      </I18nextProvider>
    );
    const title = screen.getByText('WatchSh⌚p');

    expect(title).toBeInTheDocument();
  });
});
