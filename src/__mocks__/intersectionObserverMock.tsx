//1- IntersectionObserver isn't available in test environment
const intersectionObserverMock = () => {
  window.IntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  // 2 - The width(0) and height(0) of chart should be greater than 0,
  jest.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(100);
  jest.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(100);
};

export default intersectionObserverMock;
