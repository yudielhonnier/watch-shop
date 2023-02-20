import React from 'react';
import { I18nextProvider } from 'react-i18next';

import AnaliticsInfo from '@/components/AnaliticsInfo';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import reacti18nextMock from '@/__mocks__/reacti18nextMock';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('AnaliticsInfo', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(() => {
    intersectionObserverMock();
    reacti18nextMock();
  });

  it.only('should render AnaliticsInfo component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <AnaliticsInfo />
      </I18nextProvider>
    );

    //pass the key that t() function recibe in the component
    const subtitle = screen.getByText('info.graph-description');

    expect(subtitle).toBeInTheDocument();
  });
});
