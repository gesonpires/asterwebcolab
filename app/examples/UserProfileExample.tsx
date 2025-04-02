'use client';

import React from 'react';
import UserProfile from '../components/profile/UserProfile';
import { User, ExperienceLevel } from '@/models/User';

// Dados de exemplo de um usuário
const mockUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao.silva@exemplo.com',
  avatar: 'https://i.pravatar.cc/150?img=1',
  bio: 'Desenvolvedor Full Stack apaixonado por tecnologia e inovação. Atualmente focado em desenvolvimento web com React e Node.js.',
  isActive: true,
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
    { id: '1', name: 'Desenvolvimento Web', level: ExperienceLevel.ADVANCED },
    { id: '2', name: 'Inteligência Artificial', level: ExperienceLevel.INTERMEDIATE },
    { id: '3', name: 'Cloud Computing', level: ExperienceLevel.BEGINNER },
  ],
  education: {
    level: 'bachelor',
    institution: 'Universidade Federal de Tecnologia',
    field: 'Ciência da Computação',
    graduationYear: 2020,
  },
  primaryLanguage: 'Português',
  secondaryLanguages: ['Inglês', 'Espanhol'],
  social: {
    github: 'https://github.com/joaosilva',
    linkedin: 'https://linkedin.com/in/joaosilva',
    twitter: 'https://twitter.com/joaosilva',
    website: 'https://joaosilva.dev',
  },
  privacy: {
    showEmail: true,
    showProgress: true,
    showSocial: true,
    publicProfile: true,
  },
  createdAt: new Date('2023-01-15T10:00:00Z'),
  lastLogin: new Date('2024-03-20T15:30:00Z'),
};

export default function UserProfileExample() {
  const handleUpdateProfile = async (updatedUser: User) => {
    // Aqui você implementaria a lógica para salvar as alterações
    // Por exemplo, fazer uma chamada à API
    console.log('Perfil atualizado:', updatedUser);
    
    // Simular um delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Atualizar os dados do usuário (em um caso real, isso viria do servidor)
    Object.assign(mockUser, updatedUser);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Exemplo de Perfil de Usuário
        </h1>
        
        <UserProfile 
          user={mockUser}
          onUpdateProfile={handleUpdateProfile}
        />
      </div>
    </div>
  );
} 