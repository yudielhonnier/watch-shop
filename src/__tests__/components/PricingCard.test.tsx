// todo: fix console warning : The tag <close.svg> is unrecognized in this browser.
//todo: add cypres e2e to test links
import React from 'react';
import { I18nextProvider } from 'react-i18next';

import PricingCard from '@/components/PricingCard';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('PricingCard', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);

  const mockPlan = {
    category: 'Advanced',
    range: '>1000',
    description: 'This card is a mock',
    isAdvanced: false,
    color: 'red',
    size: 'w-full',
  };

  it.only('should render PricingCard component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PricingCard
          category={mockPlan.category}
          range={mockPlan.range}
          description={mockPlan.description}
          isAdvanced={mockPlan.isAdvanced}
          color={mockPlan.color}
          size={mockPlan.size}
        />
      </I18nextProvider>
    );

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
