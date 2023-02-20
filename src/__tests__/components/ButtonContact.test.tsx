// todo: fix console warning : The tag <close.svg> is unrecognized in this browser.
//todo: add cypres e2e to test links
import { I18nextProvider } from 'react-i18next';

import ButtonContact from '@/components/ButtonContact';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('ButtonContact', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);
  const mockSocialNetwork = {
    src: '/svg/facebook.svg',
    text: 'Facebook',
  };

  it.only('should render ButtonContact component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ButtonContact
          src={mockSocialNetwork.src}
          text={mockSocialNetwork.text}
        />
      </I18nextProvider>
    );

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });
});
