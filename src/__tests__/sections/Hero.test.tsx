import { I18nextProvider } from 'react-i18next';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import reacti18nextMock from '@/__mocks__/reacti18nextMock';
import { MockSessionProvider } from '@/__mocks__/sessionMock';
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
      <MockSessionProvider>
        <I18nextProvider i18n={i18n}>
          <Hero pr={true} heroRef={null} />
        </I18nextProvider>
      </MockSessionProvider>
    );
    const title = screen.getByText('title.full-name');

    expect(title).toBeInTheDocument();
  });
});
