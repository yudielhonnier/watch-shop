import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import Features from '@/sections/Features';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe('Features', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);

  it('should render Features component correctly', () => {
    render(<Features pr={true} featuresRef={null} />);

    const title = screen.getByText('Features');

    expect(title).toBeInTheDocument();
  });
});
