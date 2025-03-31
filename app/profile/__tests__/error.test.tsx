import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfileError from '../error';

describe('ProfileError', () => {
  const mockError = new Error('Test error message');
  const mockReset = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders error message correctly', () => {
    render(<ProfileError error={mockError} reset={mockReset} />);

    expect(screen.getByText('Ops! Algo deu errado')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('displays default error message when no message is provided', () => {
    const errorWithoutMessage = new Error();
    render(<ProfileError error={errorWithoutMessage} reset={mockReset} />);

    expect(screen.getByText('Não foi possível carregar seu perfil.')).toBeInTheDocument();
  });

  it('calls reset function when retry button is clicked', () => {
    render(<ProfileError error={mockError} reset={mockReset} />);

    const retryButton = screen.getByText('Tentar Novamente');
    fireEvent.click(retryButton);

    expect(mockReset).toHaveBeenCalledTimes(1);
  });

  it('includes a link to home page', () => {
    render(<ProfileError error={mockError} reset={mockReset} />);

    const homeLink = screen.getByText('Voltar para Home');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('displays warning icon', () => {
    render(<ProfileError error={mockError} reset={mockReset} />);

    const warningIcon = screen.getByRole('img', { name: 'error' });
    expect(warningIcon).toBeInTheDocument();
    expect(warningIcon).toHaveTextContent('⚠️');
  });

  it('applies correct styling to buttons', () => {
    render(<ProfileError error={mockError} reset={mockReset} />);

    const retryButton = screen.getByText('Tentar Novamente');
    const homeLink = screen.getByText('Voltar para Home');

    expect(retryButton).toHaveClass(
      'bg-indigo-600',
      'text-white',
      'rounded-lg',
      'hover:bg-indigo-700'
    );

    expect(homeLink).toHaveClass(
      'bg-gray-200',
      'dark:bg-gray-700',
      'rounded-lg',
      'hover:bg-gray-300',
      'dark:hover:bg-gray-600'
    );
  });

  it('maintains proper layout structure', () => {
    render(<ProfileError error={mockError} reset={mockReset} />);

    const container = screen.getByTestId('error-container');
    expect(container).toHaveClass('container', 'mx-auto', 'px-4', 'py-8');

    const errorCard = screen.getByTestId('error-card');
    expect(errorCard).toHaveClass(
      'bg-white',
      'dark:bg-gray-900',
      'shadow',
      'rounded-lg',
      'p-8',
      'text-center'
    );
  });

  it('applies correct text styles', () => {
    render(<ProfileError error={mockError} reset={mockReset} />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass(
      'text-2xl',
      'font-bold',
      'text-gray-900',
      'dark:text-white',
      'mb-4'
    );

    const message = screen.getByText('Test error message');
    expect(message).toHaveClass('text-gray-600', 'dark:text-gray-400', 'mb-6');
  });
});
