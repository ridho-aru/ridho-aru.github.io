import { render, screen } from '@testing-library/react';
import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  it('renders the title correctly', () => {
    const title = 'Test Title';
    render(<SectionHeader title={title} />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(title);
  });
});
