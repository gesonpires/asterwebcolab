'use client';

import React, { useState } from 'react';
import { User } from '@/models/User';
import Image from 'next/image';

interface UserProfileProps {
  user: User;
  onUpdateProfile?: (updatedUser: User) => Promise<void>;
}

interface EditFormData {
  name: string;
  bio: string;
  preferences: {
    theme: 'light' | 'dark';
    language: string;
    emailNotifications: boolean;
    showProgress: boolean;
    showAchievements: boolean;
    accessibility: {
      fontSize: 'small' | 'medium' | 'large';
      highContrast: boolean;
      reduceAnimations: boolean;
    };
  };
  education: {
    level: string;
    institution?: string;
    field?: string;
    graduationYear?: number;
  };
  primaryLanguage: string;
  secondaryLanguages: string[];
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  privacy: {
    showEmail: boolean;
    showProgress: boolean;
    showSocial: boolean;
    publicProfile: boolean;
  };
}

export default function UserProfile({
  user,
  onUpdateProfile,
}: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<EditFormData>({
    name: user.name || '',
    bio: user.bio || '',
    preferences: { ...user.preferences },
    education: { ...user.education },
    primaryLanguage: user.primaryLanguage,
    secondaryLanguages: [...user.secondaryLanguages],
    social: { ...user.social },
    privacy: { ...user.privacy },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateProfile) {
      await onUpdateProfile({
        ...user,
        ...formData,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user.name || '',
      bio: user.bio || '',
      preferences: { ...user.preferences },
      education: { ...user.education },
      primaryLanguage: user.primaryLanguage,
      secondaryLanguages: [...user.secondaryLanguages],
      social: { ...user.social },
      privacy: { ...user.privacy },
    });
    setIsEditing(false);
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      role="region"
      aria-label="Perfil do usuário"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative w-20 h-20">
          <Image
            src={user.avatar || '/images/default-avatar.png'}
            alt={`Foto de perfil de ${user.name}`}
            fill
            className="rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
            data-testid="user-avatar"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {user.email}
          </p>
        </div>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              aria-label="Nome do usuário"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Biografia
            </label>
            <textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              aria-label="Biografia do usuário"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Cancelar edição"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Salvar alterações"
            >
              Salvar
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Biografia
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {user.bio || 'Nenhuma biografia disponível.'}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Preferências
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Tema:</span> {user.preferences.theme === 'light' ? 'Claro' : 'Escuro'}
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Idioma:</span> {user.preferences.language}
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">Notificações por email:</span> {user.preferences.emailNotifications ? 'Ativadas' : 'Desativadas'}
              </li>
            </ul>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Editar perfil"
          >
            Editar Perfil
          </button>
        </div>
      )}
    </div>
  );
}
