import { I18nextProvider } from 'react-i18next';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import reacti18nextMock from '@/__mocks__/reacti18nextMock';
import Pricing from '@/sections/Pricing';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe('Pricing', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(() => {
    intersectionObserverMock();
    reacti18nextMock();
  });

  it('should render Pricing component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Pricing pr={true} pricingRef={null} />
      </I18nextProvider>
    );

    const title = screen.getByText('title');

    expect(title).toBeInTheDocument();
  });
});
