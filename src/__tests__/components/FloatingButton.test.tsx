// todo: fix console warning : The tag <close.svg> is unrecognized in this browser.
//todo: add cypres e2e to test links
import React from 'react';
import { I18nextProvider } from 'react-i18next';

import FloatingButton from '@/components/FloatingButton';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import i18n from '@/utils/i18n';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('FloatingButton', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);
  const mockFloatingBtn = {
    icon: null,
    color: 'red',
    style: 'w-full',
    handleScroll: null,
    customRef: null,
  };

  it.only('should render FloatingButton component correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <FloatingButton
          icon={mockFloatingBtn.icon}
          color={mockFloatingBtn.color}
          style={mockFloatingBtn.style}
          handleScroll={() => mockFloatingBtn.handleScroll}
          customRef={mockFloatingBtn.customRef}
        />
      </I18nextProvider>
    );

    const button = screen.getByRole('button');

    //buttons[1] = FloatingButton show explore button
    expect(button).toBeInTheDocument();
  });
});
