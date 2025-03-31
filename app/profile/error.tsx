'use client';

import React from 'react';

export default function ProfileError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div data-testid="error-container" className="container mx-auto px-4 py-8">
      <div
        data-testid="error-card"
        className="bg-white dark:bg-gray-900 shadow rounded-lg p-8 text-center"
      >
        <div className="text-red-600 dark:text-red-400 text-6xl mb-4">
          <span role="img" aria-label="error">
            ⚠️
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ops! Algo deu errado
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {error.message || 'Não foi possível carregar seu perfil.'}
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Tentar Novamente
          </button>
          <a
            href="/"
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Voltar para Home
          </a>
        </div>
      </div>
    </div>
  );
}
