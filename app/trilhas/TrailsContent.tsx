'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TrailCard from '../components/trails/TrailCard';
import TrailCardSkeleton from '../components/trails/TrailCardSkeleton';

interface Trail {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  modules: string[];
}

export default function TrailsContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    // Simulate API call
    const fetchTrails = async () => {
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setTrails([
          {
            id: 1,
            title: 'Fundamentos Matemáticos',
            description: 'Aprenda os conceitos fundamentais da matemática necessários para compreender a física moderna.',
            image: '/images/trails/math-fundamentals.jpg',
            duration: '4 semanas',
            level: 'Iniciante',
            modules: ['Álgebra Básica', 'Geometria', 'Trigonometria', 'Cálculo Introdutório'],
          },
          // Add more trails as needed
        ]);
      } catch (error) {
        console.error('Error fetching trails:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrails();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
      >
        Trilhas de Aprendizado
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // Show skeletons while loading
          Array.from({ length: 3 }).map((_, index) => (
            <TrailCardSkeleton key={index} />
          ))
        ) : (
          // Show actual trail cards
          trails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))
        )}
      </div>
    </div>
  );
} 