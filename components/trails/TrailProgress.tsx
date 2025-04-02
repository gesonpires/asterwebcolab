'use client';

import { motion } from 'framer-motion';
import { useProgress } from '@/hooks/useProgress';

interface TrailProgressProps {
  trailId: number;
  modules: string[];
}

export default function TrailProgress({ trailId, modules }: TrailProgressProps) {
  const { getModuleProgress, getTrailProgress } = useProgress(trailId);
  const progress = getTrailProgress();

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Progresso da Trilha
        </span>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="mt-4 space-y-2">
        {modules.map((module, index) => {
          const moduleProgress = getModuleProgress(module);
          return (
            <div
              key={index}
              className="flex items-center text-sm"
            >
              {moduleProgress.completed ? (
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span className={`${moduleProgress.completed ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'}`}>
                {module}
              </span>
              {moduleProgress.lastAccessed && (
                <span className="ml-auto text-xs text-gray-600 dark:text-gray-400">
                  Último acesso: {new Date(moduleProgress.lastAccessed).toLocaleDateString()}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
} 