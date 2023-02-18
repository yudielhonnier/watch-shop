import React from 'react';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import Hero from '@/sections/Hero';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe('Hero', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);

  it('should render Hero component correctly', () => {
    render(<Hero pr={true} heroRef={null} />);

    const title = screen.getByText('WatchSh⌚p');

    expect(title).toBeInTheDocument();
  });
});
