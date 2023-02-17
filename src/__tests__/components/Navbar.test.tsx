// todo: fix console.error warning The tag <close.svg> is unrecognized in this browser.
import Navbar from '@/components/Navbar';

//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '@/utils/testUtils';

describe.only('Navbar', () => {
  it.only('should render Navbar component correctly', () => {
    render(<Navbar />);

    const exploreButton = screen.getByRole('button');

    expect(exploreButton).toBeInTheDocument();
  });
});
