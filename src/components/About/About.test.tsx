import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders correctly', () => {
    render(<About />);
    const heading = screen.getByText('About Me');
    expect(heading).toBeInTheDocument();
  });
});
