import React from 'react';
import { I18nextProvider } from 'react-i18next';

import PageTitle from '@/components/PageTitle';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import reacti18nextMock from '@/__mocks__/reacti18nextMock';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('PageTitle', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(() => {
    intersectionObserverMock();
    reacti18nextMock();
  });

  const mockPage = {
    title: 'title',
    subtitle: 'subtitle',
  };

  it.only('should render PageTitle component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PageTitle title={mockPage.title} subtitle={mockPage.subtitle} />
      </I18nextProvider>
    );

    //pass the key that t() function recibe in the component
    const btn = screen.getByRole('heading');

    expect(btn).toBeInTheDocument();
  });
});
