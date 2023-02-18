import AnaliticsInfo from '@/components/AnaliticsInfo';

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('AnaliticsInfo', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);

  it.only('should render AnaliticsInfo component correctly', () => {
    render(<AnaliticsInfo />);

    const subtitle = screen.getByText(
      'Bellow is a graph with the types of watches delivered in this regions'
    );

    expect(subtitle).toBeInTheDocument();
  });
});
