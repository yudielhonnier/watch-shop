//this testUtils path is because jest think that all files inside __test__ are tests

import Analitics from '@/sections/Analitics';

import { render, screen } from '../../utils/testUtils';

describe('Analitics', () => {
  //to solve console.warns
  beforeEach(() => {
    //1- IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

    // 2 - The width(0) and height(0) of chart should be greater than 0,
    jest
      .spyOn(HTMLElement.prototype, 'clientHeight', 'get')
      .mockReturnValue(100);
    jest
      .spyOn(HTMLElement.prototype, 'clientWidth', 'get')
      .mockReturnValue(100);
  });

  it('should render Analitics component correctly', () => {
    render(<Analitics pr={true} analiticsRef={null} />);

    const title = screen.getByText('watches');

    expect(title).toBeInTheDocument();
  });
});
