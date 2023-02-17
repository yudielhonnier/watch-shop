import NotFoundPage from '@/pages/404';

//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '../utils/testUtils';

describe('404', () => {
  it('renders a heading', () => {
    render(<NotFoundPage />);

    const heading = screen.getByText(/not found/i);

    expect(heading).toBeInTheDocument();
  });
});
