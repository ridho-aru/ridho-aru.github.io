import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
  it('renders correctly', () => {
    render(<Contact />);
    expect(screen.getByText("Let's Work Together")).toBeInTheDocument();
  });
});
