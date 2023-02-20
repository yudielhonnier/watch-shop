import { I18nextProvider } from 'react-i18next';

import Carrousel from '@/components/Carrousel';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('Carrousel', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);

  it.only('should render Carrousel component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Carrousel showTypes={false} />
      </I18nextProvider>
    );

    const images = screen.getAllByRole('img');

    expect(images[0]).toBeInTheDocument();
  });
});
