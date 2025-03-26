'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { trails } from '../data';
import { useStudentProgress } from '@/hooks/useStudentProgress';

const TrailPage = () => {
  const { trailId } = useParams();
  const trailIdNum = Number(trailId);
  const trail = trails.find(t => t.id === trailIdNum);
  const { getTrailProgress, getTrailCompletionPercentage } = useStudentProgress();

  if (!trail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Trilha não encontrada
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            A trilha que você está procurando não existe.
          </p>
        </div>
      </div>
    );
  }

  const trailProgress = getTrailProgress(trailIdNum);
  const completionPercentage = getTrailCompletionPercentage(trailIdNum, trail.modules.length);

  return (
    <div className="min-h-screen py-12">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna da Esquerda - Informações da Trilha */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={trail.image}
                  alt={trail.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {trail.title}
                  </h1>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    trail.level === 'Iniciante' ? 'bg-green-100 text-green-800' :
                    trail.level === 'Intermediário' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {trail.level}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {trail.description}
                </p>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Duração estimada: {trail.duration}
                </div>

                {/* Barra de Progresso da Trilha */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Progresso da Trilha
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {Math.round(completionPercentage)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita - Módulos e Progresso */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Módulos do Curso
              </h2>
              <div className="space-y-4">
                {trail.modules.map((module, index) => {
                  const moduleId = module.toLowerCase().replace(/\s+/g, '-');
                  const moduleProgress = trailProgress[moduleId];
                  
                  return (
                    <motion.article
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <span className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full mr-4">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <a
                          href={`/trilhas/${trailIdNum}/${moduleId}`}
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {module}
                        </a>
                        {moduleProgress && (
                          <div className="mt-1">
                            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                              <span>Progresso</span>
                              <span>{moduleProgress.completed ? '100%' : '0%'}</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1">
                              <div
                                className="bg-blue-600 h-1 rounded-full transition-all duration-500"
                                style={{ width: moduleProgress.completed ? '100%' : '0%' }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default TrailPage; 