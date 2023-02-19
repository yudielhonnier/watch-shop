// todo: fix console warning : The tag <close.svg> is unrecognized in this browser.
//todo: add cypres e2e to test links
import Navbar from '@/components/Navbar';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('Navbar', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);

  it.only('should render Navbar component correctly', () => {
    render(<Navbar />);

    const buttons = screen.getAllByRole('button');

    //buttons[1] = navbar show explore button
    expect(buttons[1]).toBeInTheDocument();
  });
});
