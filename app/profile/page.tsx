'use client';

import React from 'react';
import UserProfile from '../components/profile/UserProfile';
import ProgressDashboard from '../components/progress/ProgressDashboard';
import { User } from '../models/User';
import { UserProgress } from '../models/UserProgress';

// Dados mockados para exemplo
const mockUser: User = {
  id: '1',
  email: 'usuario@exemplo.com',
  name: 'Usuário Exemplo',
  avatar: '/default-avatar.png',
  bio: 'Desenvolvedor apaixonado por tecnologia e educação.',
  createdAt: new Date('2024-01-01').toISOString(),
  lastLogin: new Date().toISOString(),
  isActive: true,
  preferences: {
    theme: 'system',
    language: 'pt-BR',
    emailNotifications: true,
    accessibility: {
      highContrast: false,
      fontSize: 'normal',
    },
  },
  interests: [
    { id: '1', name: 'Frontend', level: 'INTERMEDIATE' },
    { id: '2', name: 'Backend', level: 'BEGINNER' },
    { id: '3', name: 'DevOps', level: 'BEGINNER' },
  ],
  languages: ['pt-BR', 'en'],
  socialContacts: {
    github: 'usuario',
    linkedin: 'usuario-exemplo',
  },
  privacySettings: {
    profileVisibility: 'public',
    showProgress: true,
  },
};

const mockProgress: UserProgress = {
  userId: '1',
  trails: [
    {
      trailId: 'frontend-basics',
      modules: [
        { moduleId: 'html', completed: true, score: 95 },
        { moduleId: 'css', completed: true, score: 88 },
        { moduleId: 'javascript', completed: false, score: 0 },
      ],
      started: new Date('2024-01-15').toISOString(),
      lastAccessed: new Date('2024-03-10').toISOString(),
      completed: false,
      overallProgress: 66,
    },
    {
      trailId: 'react-fundamentals',
      modules: [
        { moduleId: 'intro', completed: true, score: 100 },
        { moduleId: 'components', completed: false, score: 0 },
      ],
      started: new Date('2024-02-01').toISOString(),
      lastAccessed: new Date('2024-03-15').toISOString(),
      completed: false,
      overallProgress: 50,
    },
  ],
  achievements: [
    {
      id: '1',
      title: 'Primeiro Módulo',
      description: 'Completou seu primeiro módulo',
      icon: '🎯',
      earnedAt: new Date('2024-01-20').toISOString(),
      criteria: 'complete_first_module',
    },
    {
      id: '2',
      title: 'Streak Iniciante',
      description: 'Manteve uma streak de 7 dias',
      icon: '🔥',
      earnedAt: new Date('2024-02-01').toISOString(),
      criteria: 'maintain_7_day_streak',
    },
  ],
  totalTimeSpent: 2160, // 36 horas em minutos
  lastActive: new Date().toISOString(),
  streakDays: 15,
  overallProgress: 58,
  stats: {
    modulesCompleted: 3,
    exercisesSolved: 24,
    quizzesTaken: 6,
    averageScore: 94,
  },
};

export default function ProfilePage() {
  const handleUpdateProfile = async (updatedUser: Partial<User>) => {
    // Aqui você implementaria a lógica para atualizar o perfil no backend
    console.log('Atualizando perfil:', updatedUser);
  };

  return (
    <div className="container mx-auto px-4 py-8" data-testid="profile-container">
      <div className="grid grid-cols-1 gap-8" data-testid="profile-grid">
        <UserProfile user={mockUser} onUpdateProfile={handleUpdateProfile} />
        <ProgressDashboard userProgress={mockProgress} />
      </div>
    </div>
  );
}
