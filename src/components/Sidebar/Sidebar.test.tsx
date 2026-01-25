import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('renders correctly', () => {
    render(
      <Sidebar sectionIds={['home']}>
        <div>Menu</div>
      </Sidebar>,
    );
    expect(screen.getByText('Achmad Ahlar R.')).toBeInTheDocument();
  });
});
