'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TrailCard from '../components/trails/TrailCard';
import TrailCardSkeleton from '../components/trails/TrailCardSkeleton';
import { trails } from './data';

export default function TrailsContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredTrails = selectedLevel === 'all'
    ? trails
    : trails.filter(trail => trail.level.toLowerCase() === selectedLevel.toLowerCase());

  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Trilhas de Aprendizado
        </h1>

        <div className="mb-8">
          <label className="text-gray-700 dark:text-gray-300 mr-4">Filtrar por nível:</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-gray-700 dark:text-gray-300"
          >
            <option value="all">Todos os níveis</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediário">Intermediário</option>
            <option value="avançado">Avançado</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Show skeletons while loading
            Array.from({ length: 6 }).map((_, index) => (
              <TrailCardSkeleton key={index} />
            ))
          ) : (
            // Show actual trail cards
            filteredTrails.map((trail) => (
              <TrailCard key={trail.id} trail={trail} />
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
} 