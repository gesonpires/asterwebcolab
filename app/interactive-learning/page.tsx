'use client';

import { useState } from 'react';
import InteractivePhysicsLesson from '@/app/components/interactive/examples/InteractivePhysicsLesson';
import NewtonLawsLesson from '@/app/components/interactive/examples/NewtonLawsLesson';
import ProjectileMotionSimulation from '@/app/components/interactive/examples/ProjectileMotionSimulation';

export default function InteractiveLearning() {
  const [activeLesson, setActiveLesson] = useState('physics');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Aprendizado Interativo de Física
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Selecione uma Lição
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveLesson('physics')}
              className={`px-4 py-2 rounded-md ${
                activeLesson === 'physics'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Física Geral
            </button>
            <button
              onClick={() => setActiveLesson('newton')}
              className={`px-4 py-2 rounded-md ${
                activeLesson === 'newton'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Leis de Newton
            </button>
            <button
              onClick={() => setActiveLesson('projectile')}
              className={`px-4 py-2 rounded-md ${
                activeLesson === 'projectile'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Movimento de Projéteis
            </button>
          </div>
        </div>

        <div className="mt-8">
          {activeLesson === 'physics' && <InteractivePhysicsLesson />}
          {activeLesson === 'newton' && <NewtonLawsLesson />}
          {activeLesson === 'projectile' && <ProjectileMotionSimulation />}
        </div>
      </div>
    </div>
  );
} 