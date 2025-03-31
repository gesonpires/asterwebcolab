import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileLoading from '../loading';

describe('ProfileLoading', () => {
  it('renders loading skeletons', () => {
    render(<ProfileLoading />);
    const skeletons = screen.getAllByTestId(/.*-skeleton/);
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('applies correct layout classes', () => {
    render(<ProfileLoading />);
    const container = screen.getByTestId('loading-container');
    expect(container).toHaveClass('container', 'mx-auto', 'px-4', 'py-8');
  });

  it('applies animation classes correctly', () => {
    render(<ProfileLoading />);
    const skeletons = screen.getAllByTestId('stat-card-skeleton');
    skeletons.forEach(element => {
      expect(element).toHaveClass(
        'bg-gray-100',
        'dark:bg-gray-800',
        'p-6',
        'rounded-lg',
        'animate-pulse'
      );
    });
  });

  it('renders profile section skeleton', () => {
    render(<ProfileLoading />);
    const profileSkeleton = screen.getByTestId('user-profile-skeleton');
    expect(profileSkeleton).toBeInTheDocument();
  });

  it('renders progress section skeleton', () => {
    render(<ProfileLoading />);
    const progressSkeleton = screen.getByTestId('progress-dashboard-skeleton');
    expect(progressSkeleton).toBeInTheDocument();
  });
});
