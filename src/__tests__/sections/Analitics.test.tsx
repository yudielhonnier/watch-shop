//this testUtils path is because jest think that all files inside __test__ are tests

import intersectionObserverMock from '@/__mocks__/intersectionObserverMock';
import Analitics from '@/sections/Analitics';

import { render, screen } from '../../utils/testUtils';
describe('Analitics', () => {
  //to solve console.warns  IntersectionObserver not available on this device.
  beforeEach(intersectionObserverMock);

  it('should render Analitics component correctly', () => {
    render(<Analitics pr={true} analiticsRef={null} />);

    const title = screen.getByText('watches');

    expect(title).toBeInTheDocument();
  });
});
