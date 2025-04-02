'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { UserProgressService } from '../services/UserProgressService';
import { Achievement } from '../models/UserProgress';

export default function ProgressDashboard({ userId }: { userId: string }) {
  const [progress, setProgress] = useState<{
    overallProgress: number;
    timeSpent: number;
    achievements: Achievement[];
    stats: {
      modulesCompleted: number;
      quizzesTaken: number;
      exercisesCompleted: number;
      averageScore: number;
      totalAchievements: number;
    };
  } | null>(null);
  const [suggestions, setSuggestions] = useState<{
    nextModule?: string;
    recommendedPractice?: string;
    achievementHints: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const progressService = UserProgressService.getInstance();
        const progressData = await progressService.generateProgressReport(userId);
        const suggestionsData = await progressService.getPersonalizedSuggestions(userId);

        setProgress(progressData);
        setSuggestions(suggestionsData);
      } catch (error) {
        console.error('Erro ao carregar progresso:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div 
          role="status"
          data-testid="loading-spinner"
          className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        >
          <span className="sr-only">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!progress) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-700 dark:text-gray-300">Nenhum progresso encontrado.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progresso Geral */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Progresso Geral</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300">Conclusão Geral</span>
              <span className="text-gray-900 dark:text-white font-medium" data-testid="overall-progress">
                {Math.round(progress.overallProgress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-blue-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress.overallProgress}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">Tempo Total</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">{Math.round(progress.timeSpent / 60)} horas</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">Módulos Completados</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white" data-testid="modules-completed">
                {progress.stats.modulesCompleted}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Estatísticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Estatísticas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">Quizzes</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white" data-testid="quizzes-taken">
              {progress.stats.quizzesTaken}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">Exercícios</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white" data-testid="exercises-completed">
              {progress.stats.exercisesCompleted}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">Média</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white" data-testid="average-score">
              {Math.round(progress.stats.averageScore)}%
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">Conquistas</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white" data-testid="total-achievements">
              {progress.stats.totalAchievements}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Conquistas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Conquistas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {progress.achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex items-center space-x-4"
              data-testid={`achievement-${achievement.id}`}
            >
              <span className="text-2xl">{achievement.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sugestões */}
      {suggestions && suggestions.achievementHints.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Sugestões</h2>
          <div className="space-y-2">
            {suggestions.achievementHints.map((hint, index) => (
              <div key={index} className="flex items-center space-x-2" data-testid={`suggestion-${index}`}>
                <span className="text-blue-500">💡</span>
                <p className="text-gray-700 dark:text-gray-300">{hint}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
