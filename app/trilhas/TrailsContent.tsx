'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TrailCard from '@/components/trails/TrailCard';

const trails = [
  {
    id: 1,
    title: 'Fundamentos de Astronomia',
    description: 'Aprenda os conceitos básicos da astronomia, desde o sistema solar até as galáxias.',
    image: '/images/trails/astronomy-basics.jpg',
    duration: '4 semanas',
    level: 'Iniciante',
    modules: [
      'Introdução à Astronomia',
      'Sistema Solar',
      'Estrelas e Constelações',
      'Galáxias e Universo'
    ]
  },
  {
    id: 2,
    title: 'Gravitação Universal',
    description: 'Explore as leis que governam o movimento dos corpos celestes.',
    image: '/images/trails/gravity.jpg',
    duration: '3 semanas',
    level: 'Intermediário',
    modules: [
      'Leis de Kepler',
      'Lei da Gravitação Universal',
      'Órbitas e Trajetórias'
    ]
  },
  {
    id: 3,
    title: 'Astrofísica Moderna',
    description: 'Descubra os mistérios dos buracos negros, matéria escura e energia escura.',
    image: '/images/trails/astrophysics.jpg',
    duration: '6 semanas',
    level: 'Avançado',
    modules: [
      'Relatividade Especial',
      'Buracos Negros',
      'Matéria e Energia Escura',
      'Cosmologia Moderna'
    ]
  },
  {
    id: 4,
    title: 'Estrelas',
    description: 'Entenda qual a importância da existênci das estrelas para a composição química do Universo.',
    image: '/images/trails/stars.jpg',
    duration: '4 semanas',
    level: 'Intermediário',
    modules: [
      'Tipos de estrelas',
      'Diagrama HR',
      'Evolução Estelar'
    ]
  },
  {
    id: 5,
    title: 'Interações na natureza',
    description: 'Aprenda o que é o modelo-padrão e fique por dentro do que é mais atual no entendimento da matéria.',
    image: '/images/trails/interactions.jpg',
    duration: '4 semanas',
    level: 'Avançado',
    modules: [
      'Tipos de interações',
      'Mediadores',
      'Modelo-padrão de interações'
    ]
  },
  {
    id: 6,
    title: 'Nucleossíntese',
    description: 'Descubra como e onde foram produzidos os elementos químicos.',
    image: '/images/trails/p-table.jpg',
    duration: '4 semanas',
    level: 'Avançado',
    modules: [
      'Fusão Nuclear',
      'Tunelamento quântico',
      'Cadeia p-p',
      'Ciclo CNO'
    ]
  }
];

export default function TrailsContent() {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

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
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2"
          >
            <option value="all">Todos os níveis</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediário">Intermediário</option>
            <option value="avançado">Avançado</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>
      </motion.div>
    </div>
  );
} 