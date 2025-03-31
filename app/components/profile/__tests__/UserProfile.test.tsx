import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserProfile from '../UserProfile';
import { User } from '../../../models/User';

const mockUser: User = {
  id: 'test-user-123',
  name: 'Test User',
  email: 'test@example.com',
  avatar: '/test-avatar.png',
  bio: 'Test bio',
  preferences: {
    theme: 'light',
    language: 'pt-BR',
    emailNotifications: true,
  },
  interests: [
    {
      id: 'interest-1',
      name: 'Test Interest',
      level: 'BEGINNER',
    },
  ],
  createdAt: new Date('2024-03-18'),
  lastLogin: new Date('2024-03-18'),
};

describe('UserProfile', () => {
  it('deve exibir as informações da conta corretamente', () => {
    render(<UserProfile user={mockUser} />);

    // Verificar informações básicas
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Test bio')).toBeInTheDocument();

    // Verificar preferências
    expect(screen.getByText('light')).toBeInTheDocument();
    expect(screen.getByText('Português')).toBeInTheDocument();
    expect(screen.getByText('Ativadas')).toBeInTheDocument();

    // Verificar áreas de interesse
    expect(screen.getByText('Test Interest')).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === 'Nível: BEGINNER';
      })
    ).toBeInTheDocument();

    // Verificar datas
    const dates = screen.getAllByText('18/03/2024');
    expect(dates).toHaveLength(2);
  });

  it('allows editing profile information', async () => {
    const mockUpdateProfile = jest.fn();
    render(<UserProfile user={mockUser} onUpdateProfile={mockUpdateProfile} />);

    // Iniciar edição
    fireEvent.click(screen.getByText('Editar Perfil'));

    // Editar nome
    const nameInput = screen.getByDisplayValue(mockUser.name);
    fireEvent.change(nameInput, { target: { value: 'Updated Name' } });

    // Editar bio
    const bioInput = screen.getByDisplayValue(mockUser.bio);
    fireEvent.change(bioInput, { target: { value: 'Updated bio' } });

    // Salvar alterações
    fireEvent.click(screen.getByText('Salvar'));

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
    fireEvent.click(screen.getByText('Editar Perfil'));

    // Editar nome
    const nameInput = screen.getByDisplayValue(mockUser.name);
    fireEvent.change(nameInput, { target: { value: 'Updated Name' } });

    // Cancelar edição
    fireEvent.click(screen.getByText('Cancelar'));

    // Verificar se o nome original ainda está sendo exibido
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(mockUpdateProfile).not.toHaveBeenCalled();
  });

  it('toggles email notifications preference', async () => {
    const mockUpdateProfile = jest.fn();
    render(<UserProfile user={mockUser} onUpdateProfile={mockUpdateProfile} />);

    // Iniciar edição
    fireEvent.click(screen.getByText('Editar Perfil'));

    // Alternar notificações por email
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    // Salvar alterações
    fireEvent.click(screen.getByText('Salvar'));

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

    const interest = screen.getByText('Test Interest');
    const level = screen.getByText('Nível: BEGINNER');

    expect(interest).toBeInTheDocument();
    expect(level).toBeInTheDocument();
  });

  it('displays account information correctly', () => {
    render(<UserProfile user={mockUser} />);

    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Test bio')).toBeInTheDocument();
    expect(screen.getByText('light')).toBeInTheDocument();
    expect(screen.getByText('Português')).toBeInTheDocument();
    expect(screen.getByText('Ativadas')).toBeInTheDocument();
    expect(screen.getByText('Test Interest')).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === 'Nível: BEGINNER';
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return element?.textContent === '18/03/2024';
      })
    ).toBeInTheDocument();
  });

  it('displays edit profile button', () => {
    render(<UserProfile user={mockUser} />);
    expect(screen.getByText('Editar Perfil')).toBeInTheDocument();
  });

  it('displays user avatar', () => {
    render(<UserProfile user={mockUser} />);
    const avatar = screen.getByAltText('Test User');
    expect(avatar).toHaveAttribute('src', '/test-avatar.png');
    expect(avatar).toHaveClass('w-20', 'h-20', 'rounded-full');
  });
});
