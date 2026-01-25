import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  it('renders correctly', () => {
    render(<Hero />);
    expect(screen.getByText(/Achmad Ahlar Ridha/i)).toBeInTheDocument();
  });
});
