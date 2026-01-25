import { render, screen } from '@testing-library/react';
import PortfolioSection from './PortfolioSection';

describe('PortfolioSection', () => {
  it('renders correctly', () => {
    render(<PortfolioSection />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });
});
