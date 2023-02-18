import Carrousel from '@/components/Carrousel';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('Carrousel', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);

  it.only('should render Carrousel component correctly', () => {
    render(<Carrousel showTypes={false} />);

    const images = screen.getAllByRole('img');

    expect(images[0]).toBeInTheDocument();
  });
});
