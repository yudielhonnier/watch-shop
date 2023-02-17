import Contact from '@/sections/Contact';

//this testUtils path is because jest think that all files inside __test__ are tests
import { render, screen } from '../../utils/testUtils';

describe('Contact', () => {
  it('should render Contact component correctly', () => {
    render(<Contact pr={true} contactRef={null} />);

    const title = screen.getByText('Contact');

    expect(title).toBeInTheDocument();
  });
});
