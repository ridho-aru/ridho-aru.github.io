import { render, screen } from '@testing-library/react';
import Experience from './Experience';

describe('Experience', () => {
  it('renders correctly', () => {
    render(<Experience />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });
});
