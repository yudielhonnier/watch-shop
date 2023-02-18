import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import Pricing from '@/sections/Pricing';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe('Pricing', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);

  it('should render Pricing component correctly', () => {
    render(<Pricing pr={true} pricingRef={null} />);

    const title = screen.getByText('Pricing');

    expect(title).toBeInTheDocument();
  });
});