import React from 'react';
import { I18nextProvider } from 'react-i18next';

import Feature from '@/components/Feature';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import reacti18nextMock from '@/__mocks__/reacti18nextMock';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('Feature ', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(() => {
    intersectionObserverMock();
    reacti18nextMock();
  });

  const mockCard = {
    name: 'String',
    description: 'String',
    haveTitle: true,
    width2: 'String',
    height2: 'String',
    index: 0,
  };

  it.only('should render Feature  component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Feature
          name={mockCard.name}
          description={mockCard.description}
          haveTitle={mockCard.haveTitle}
          width2={mockCard.width2}
          height2={mockCard.height2}
          index={mockCard.index}
        />
      </I18nextProvider>
    );

    //pass the key that t() function recibe in the component
    const headline = screen.getByText('headline');

    expect(headline).toBeInTheDocument();
  });
});
