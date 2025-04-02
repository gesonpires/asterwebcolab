'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { UserProgressService } from '@/services/UserProgressService';
import { UserProgress } from '@/models/UserProgress';
import {
  UserProgress as UserProgressModel,
  Achievement,
} from '../../models/UserProgress';

interface ProgressDashboardProps {
  userId: string;
}

export default function ProgressDashboard({ userId }: ProgressDashboardProps) {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [suggestions, setSuggestions] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, [userId]);

  const loadProgress = async () => {
    try {
      const progressService = UserProgressService.getInstance();
      const progressData = await progressService.generateProgressReport(userId);
      const suggestionsData =
        await progressService.getPersonalizedSuggestions(userId);
      setProgress(progressData);
      setSuggestions(suggestionsData);
    } catch (error) {
      console.error('Erro ao carregar progresso:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className="flex items-center justify-center min-h-[400px]"
        data-testid="progress-loading"
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
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

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    return `${hours} ${hours === 1 ? 'hora' : 'horas'}`;
  };

  // Calcula a porcentagem de conclusão
  const calculatePercentage = (value: number, total: number) => {
    return total > 0 ? Math.round((value / total) * 100) : 0;
  };

  // Renderiza o círculo de progresso
  const ProgressCircle = ({ percentage }: { percentage: number }) => (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#eee"
          strokeWidth="3"
        />
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="3"
          strokeDasharray={`${percentage}, 100`}
        />
        <text
          x="18"
          y="20.35"
          className="text-xs font-medium text-gray-900 dark:text-white text-center"
          textAnchor="middle"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );

  // Renderiza uma conquista
  const AchievementCard = ({ achievement }: { achievement: Achievement }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{achievement.icon}</div>
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">
            {achievement.title}
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6" data-testid="progress-dashboard">
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
              <span className="text-gray-900 dark:text-white font-medium">
                {progress.overallProgress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress.overallProgress}%` }}
                transition={{ duration: 0.5 }}
                className="bg-blue-600 h-2.5 rounded-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">Tempo Total</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {formatTime(progress.stats.totalTimeSpent)}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">Módulos Completados</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {progress.stats.modulesCompleted}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Estatísticas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">Quizzes</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {progress.stats.quizzesTaken}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">Exercícios</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {progress.stats.exercisesCompleted}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">Média</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {progress.stats.averageScore}%
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">Conquistas</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {progress.achievements.length}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Conquistas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {progress.achievements.map(achievement => (
            <div
              key={achievement.id}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex items-center space-x-4"
            >
              <span className="text-2xl">{achievement.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Sugestões</h2>
        <div className="space-y-2">
          {suggestions?.achievementHints.map((hint: string, index: number) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-blue-500">💡</span>
              <p className="text-gray-700 dark:text-gray-300">{hint}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
