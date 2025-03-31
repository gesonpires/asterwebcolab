import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserProfile from '../UserProfile';
import { User, ExperienceLevel } from '../../../models/User';

const mockUser: User = {
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  bio: 'Test bio',
  preferences: {
    theme: 'light',
    language: 'pt-BR',
    emailNotifications: true,
    showProgress: true,
    showAchievements: true,
    accessibility: {
      fontSize: 'medium',
      highContrast: false,
      reduceAnimations: false,
    },
  },
  interests: [
    {
      id: '1',
      name: 'Test Interest',
      level: ExperienceLevel.BEGINNER,
    },
  ],
  createdAt: new Date('2024-03-14T00:00:00Z'),
  lastLogin: new Date('2024-03-14T00:00:00Z'),
  avatar: '/test-avatar.png',
  isActive: true,
  education: {
    level: 'GRADUATE',
    institution: 'Test University',
    field: 'Physics',
  },
  primaryLanguage: 'pt-BR',
  secondaryLanguages: ['en-US'],
  privacy: {
    showEmail: true,
    showProgress: true,
    showSocial: true,
    publicProfile: true,
  },
};

describe('UserProfile', () => {
  it('deve exibir as informações da conta corretamente', () => {
    render(<UserProfile user={mockUser} />);

    // Verificar informações básicas
    expect(screen.getByTestId('user-name')).toHaveTextContent('Test User');
    expect(screen.getByTestId('user-email')).toHaveTextContent('test@example.com');
    expect(screen.getByTestId('user-bio')).toHaveTextContent('Test bio');

    // Verificar preferências
    expect(screen.getByTestId('user-theme')).toHaveTextContent('light');
    expect(screen.getByTestId('user-language')).toHaveTextContent('pt-BR');
    expect(screen.getByTestId('user-notifications')).toHaveTextContent('Ativadas');

    // Verificar áreas de interesse
    expect(screen.getByTestId('interest-1')).toBeInTheDocument();
    expect(screen.getByText('Test Interest')).toBeInTheDocument();
    expect(screen.getByText('Nível: BEGINNER')).toBeInTheDocument();

    // Verificar datas
    expect(screen.getByTestId('user-created-at')).toHaveTextContent('Membro desde: 14/03/2024');
    expect(screen.getByTestId('user-last-login')).toHaveTextContent('Último acesso: 14/03/2024');
  });

  it('allows editing profile information', async () => {
    const mockUpdateProfile = jest.fn();
    render(<UserProfile user={mockUser} onUpdateProfile={mockUpdateProfile} />);

    // Iniciar edição
    fireEvent.click(screen.getByTestId('edit-profile-button'));

    // Editar nome
    const nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'Updated Name' } });

    // Editar bio
    const bioInput = screen.getByTestId('bio-input');
    fireEvent.change(bioInput, { target: { value: 'Updated bio' } });

    // Salvar alterações
    fireEvent.click(screen.getByTestId('save-button'));

    await waitFor(() => {
      expect(mockUpdateProfile).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Updated Name',
          bio: 'Updated bio',
        })
      );
    });
  });

  it('cancels editing without saving changes', () => {
    const mockUpdateProfile = jest.fn();
    render(<UserProfile user={mockUser} onUpdateProfile={mockUpdateProfile} />);

    // Iniciar edição
    fireEvent.click(screen.getByTestId('edit-profile-button'));

    // Editar nome
    const nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'Updated Name' } });

    // Cancelar edição
    fireEvent.click(screen.getByTestId('cancel-button'));

    // Verificar se o nome original ainda está sendo exibido
    expect(screen.getByTestId('user-name')).toHaveTextContent(mockUser.name);
    expect(mockUpdateProfile).not.toHaveBeenCalled();
  });

  it('toggles email notifications preference', async () => {
    const mockUpdateProfile = jest.fn();
    render(<UserProfile user={mockUser} onUpdateProfile={mockUpdateProfile} />);

    // Iniciar edição
    fireEvent.click(screen.getByTestId('edit-profile-button'));

    // Alternar notificações por email
    const checkbox = screen.getByTestId('email-notifications-toggle');
    fireEvent.click(checkbox);

    // Salvar alterações
    fireEvent.click(screen.getByTestId('save-button'));

    await waitFor(() => {
      expect(mockUpdateProfile).toHaveBeenCalledWith(
        expect.objectContaining({
          preferences: expect.objectContaining({
            emailNotifications: false,
          }),
        })
      );
    });
  });

  it('displays user interests correctly', () => {
    render(<UserProfile user={mockUser} />);

    const interestElement = screen.getByTestId('interest-1');
    expect(interestElement).toBeInTheDocument();
    expect(interestElement).toHaveTextContent('Test Interest');
    expect(interestElement).toHaveTextContent('Nível: BEGINNER');
  });

  it('displays account information correctly', () => {
    render(<UserProfile user={mockUser} />);

    expect(screen.getByTestId('user-name')).toHaveTextContent('Test User');
    expect(screen.getByTestId('user-email')).toHaveTextContent('test@example.com');
    expect(screen.getByTestId('user-bio')).toHaveTextContent('Test bio');
    expect(screen.getByTestId('user-theme')).toHaveTextContent('light');
    expect(screen.getByTestId('user-language')).toHaveTextContent('pt-BR');
    expect(screen.getByTestId('user-notifications')).toHaveTextContent('Ativadas');
    expect(screen.getByTestId('interest-1')).toBeInTheDocument();
    expect(screen.getByText('Test Interest')).toBeInTheDocument();
    expect(screen.getByText('Nível: BEGINNER')).toBeInTheDocument();
    expect(screen.getByTestId('user-created-at')).toHaveTextContent('Membro desde: 14/03/2024');
  });

  it('displays edit profile button', () => {
    render(<UserProfile user={mockUser} />);
    expect(screen.getByTestId('edit-profile-button')).toBeInTheDocument();
  });

  it('displays user avatar', () => {
    render(<UserProfile user={mockUser} />);
    const avatar = screen.getByTestId('user-avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('rounded-full', 'object-cover');
  });
});
