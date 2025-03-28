'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { trails } from '../../data';
import { useStudentProgress } from '@/hooks/useStudentProgress';
import ModuleContent from '@/components/trails/ModuleContent';
import ModuleQuiz from '@/components/trails/ModuleQuiz';
import { useState } from 'react';

const ModulePage = () => {
  const { trailId, moduleId } = useParams();
  const trailIdNum = Number(trailId);
  const trail = trails.find(t => t.id === trailIdNum);
  const [activeTab, setActiveTab] = useState<'content' | 'quiz'>('content');
  const { markModuleAsCompleted } = useStudentProgress();

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

  const moduleIndex = trail.modules.findIndex(m => (m as any).slug === moduleId);


  if (moduleIndex === -1) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Módulo não encontrado
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            O módulo que você está procurando não existe.
          </p>
        </div>
      </div>
    );
  }

  const currentModule = trail.modules[moduleIndex];
  const handleQuizComplete = () => {
    markModuleAsCompleted(trailIdNum, moduleId as string);
  };

  return (
    <div className="min-h-screen py-12">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {currentModule.title}
              </h1>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === 'content'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Conteúdo
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === 'quiz'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Quiz
                </button>
              </div>
            </div>

            {activeTab === 'content' ? (
              <ModuleContent trailId={trailIdNum} moduleId={moduleId as string} />
            ) : (
              <ModuleQuiz
                trailId={trailIdNum}
                moduleId={moduleId as string}
                onComplete={handleQuizComplete}
              />
            )}
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default ModulePage;
