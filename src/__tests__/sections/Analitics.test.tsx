//this testUtils path is because jest think that all files inside __test__ are tests

import { I18nextProvider } from 'react-i18next';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import reacti18nextMock from '@/__mocks__/reacti18nextMock';
import Analitics from '@/sections/Analitics';
import i18n from '@/utils/i18n';

import { render, screen } from '../../utils/testUtils';
describe('Analitics', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(() => {
    intersectionObserverMock();
    reacti18nextMock();
  });

  it('should render Analitics component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Analitics pr={true} analiticsRef={null} />
      </I18nextProvider>
    );

    //pass the key that t() function recibe in the component
    const title = screen.getByText('info.watches');

    expect(title).toBeInTheDocument();
  });
});
