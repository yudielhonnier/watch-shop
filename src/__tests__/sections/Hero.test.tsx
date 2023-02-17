import React from 'react';

import Hero from '@/sections/Hero';

//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '../../utils/testUtils';

describe('Hero', () => {
  it('should render Hero component correctly', () => {
    render(<Hero pr={true} heroRef={null} />);

    const title = screen.getByText('WatchSh⌚p');

    expect(title).toBeInTheDocument();
  });
});
