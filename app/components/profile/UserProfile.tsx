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
    theme: string;
    language: string;
    emailNotifications: boolean;
  };
}

export default function UserProfile({
  user,
  onUpdateProfile,
}: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<EditFormData>({
    name: user.name,
    bio: user.bio,
    preferences: { ...user.preferences },
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
      name: user.name,
      bio: user.bio,
      preferences: { ...user.preferences },
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative w-20 h-20">
          <Image
            src={user.avatar}
            alt={user.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
        </div>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nome
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Bio
            </label>
            <textarea
              value={formData.bio}
              onChange={e => setFormData({ ...formData, bio: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
            />
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.preferences.emailNotifications}
                onChange={e =>
                  setFormData({
                    ...formData,
                    preferences: {
                      ...formData.preferences,
                      emailNotifications: e.target.checked,
                    },
                  })
                }
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Receber notificações por email
              </span>
            </label>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Salvar
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Sobre
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{user.bio}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Preferências
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                Tema: {user.preferences.theme}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Idioma: {user.preferences.language}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Notificações por email:{' '}
                {user.preferences.emailNotifications
                  ? 'Ativadas'
                  : 'Desativadas'}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Áreas de Interesse
            </h3>
            <div className="space-y-2">
              {user.interests.map(interest => (
                <div
                  key={interest.id}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-600 dark:text-gray-400">
                    {interest.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Nível: {interest.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Informações da Conta
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                Membro desde:{' '}
                {new Date(user.createdAt).toLocaleDateString('pt-BR')}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Último acesso:{' '}
                {new Date(user.lastLogin).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Editar Perfil
          </button>
        </>
      )}
    </div>
  );
}
