// todo: fix console warning : The tag <close.svg> is unrecognized in this browser.
//todo: add cypres e2e to test links
import { I18nextProvider } from 'react-i18next';

import ContactClock from '@/components/ContactClock';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('ContactClock', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);

  it.only('should render ContactClock component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactClock />
      </I18nextProvider>
    );

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });
});
