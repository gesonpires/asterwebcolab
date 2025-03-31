import React from 'react';

export const metadata = {
  title: 'Perfil do Usuário | Plataforma de Educação',
  description: 'Gerencie seu perfil e acompanhe seu progresso na plataforma.',
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Seu Perfil</h1>
          {children}
        </div>
      </div>
    </main>
  );
}
