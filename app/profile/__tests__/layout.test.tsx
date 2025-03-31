import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileLayout from '../layout';

describe('ProfileLayout', () => {
  it('renders children correctly', () => {
    render(
      <ProfileLayout>
        <div data-testid="test-child">Test Content</div>
      </ProfileLayout>
    );

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('displays the correct page title', () => {
    render(
      <ProfileLayout>
        <div>Test Content</div>
      </ProfileLayout>
    );

    expect(screen.getByText('Seu Perfil')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    render(
      <ProfileLayout>
        <div>Test Content</div>
      </ProfileLayout>
    );

    const main = screen.getByRole('main');
    expect(main).toHaveClass('min-h-screen', 'bg-gray-50', 'dark:bg-gray-900');
  });

  it('maintains proper layout structure', () => {
    render(
      <ProfileLayout>
        <div>Test Content</div>
      </ProfileLayout>
    );

    const container = screen.getByRole('main').firstChild;
    expect(container).toHaveClass('max-w-7xl', 'mx-auto');
  });

  it('applies correct heading styles', () => {
    render(
      <ProfileLayout>
        <div>Test Content</div>
      </ProfileLayout>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass(
      'text-3xl',
      'font-bold',
      'text-gray-900',
      'dark:text-white',
      'mb-8'
    );
  });
});
