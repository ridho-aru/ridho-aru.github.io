import { render, screen } from '@testing-library/react';
import profileImg from '@/assets/profile.webp'; // Just a placeholder image
import ProjectCard, { type ProjectItem } from './ProjectCard';

const mockItem: ProjectItem = {
  title: 'Test Project',
  category: 'Web App',
  tech: ['React', 'Node'],
  images: [profileImg],
  link: 'https://example.com',
};

describe('ProjectCard', () => {
  it('renders correctly', () => {
    render(<ProjectCard item={mockItem} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });
});
