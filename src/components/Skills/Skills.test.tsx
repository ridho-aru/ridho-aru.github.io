import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  it('renders correctly', () => {
    render(<Skills />);
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
  });
});
