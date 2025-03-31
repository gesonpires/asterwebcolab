import { render, screen } from '@testing-library/react';
import ProfilePage from '../page';

// Mock dos componentes
jest.mock('@/components/profile/UserProfile', () => ({
  UserProfile: () => <div data-testid="user-profile">User Profile Component</div>,
}));

jest.mock('@/components/progress/ProgressDashboard', () => ({
  default: () => <div data-testid="progress-dashboard">Progress Dashboard Component</div>,
}));

describe('ProfilePage', () => {
  const mockUserId = 'test-user-123';

  it('deve manter a estrutura de layout correta', () => {
    render(<ProfilePage params={{ userId: mockUserId }} />);
    expect(screen.getByTestId('profile-container')).toBeInTheDocument();
  });

  it('deve aplicar o espaçamento correto entre os componentes', () => {
    render(<ProfilePage params={{ userId: mockUserId }} />);
    expect(screen.getByTestId('profile-grid')).toBeInTheDocument();
  });

  it('deve renderizar o UserProfile com o userId correto', () => {
    render(<ProfilePage params={{ userId: mockUserId }} />);
    expect(screen.getByTestId('user-profile')).toBeInTheDocument();
  });

  it('deve renderizar o ProgressDashboard com o userId correto', () => {
    render(<ProfilePage params={{ userId: mockUserId }} />);
    expect(screen.getByTestId('progress-dashboard')).toBeInTheDocument();
  });
});
