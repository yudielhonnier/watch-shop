// todo: fix console warning : The tag <close.svg> is unrecognized in this browser.
//todo: add cypres e2e to test links
import { I18nextProvider } from 'react-i18next';

import Navbar from '@/components/Navbar';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import { MockSessionProvider } from '@/__mocks__/sessionMock';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('Navbar', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);
  const mockOpenModal = () => {
    print('opening');
  };

  it.only('should render Navbar component correctly', () => {
    render(
      <MockSessionProvider>
        <I18nextProvider i18n={i18n}>
          <Navbar openModal={mockOpenModal} />
        </I18nextProvider>
      </MockSessionProvider>
    );

    const buttons = screen.getAllByRole('button');

    //buttons[1] = navbar show explore button
    expect(buttons[1]).toBeInTheDocument();
  });
});
