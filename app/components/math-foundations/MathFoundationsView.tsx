'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaVectorSquare, FaCalculator, FaSquareRootAlt, FaInfinity, FaWaveSquare } from 'react-icons/fa';

interface MathTopic {
  id: string;
  title: string;
  description: string;
  icon: any;
  prerequisites: string[];
  difficulty: 'basic' | 'intermediate' | 'advanced';
  relatedTopics: string[];
  applications: string[];
}

const mathTopics: MathTopic[] = [
  {
    id: 'algebra-linear',
    title: 'Álgebra Linear',
    description: 'Fundamentos de vetores, matrizes e transformações lineares',
    icon: FaVectorSquare,
    prerequisites: [],
    difficulty: 'basic',
    relatedTopics: ['relatividade', 'mecanica-quantica'],
    applications: ['Transformações de Lorentz', 'Espaços de Hilbert'],
  },
  {
    id: 'calculo',
    title: 'Cálculo Diferencial e Integral',
    description: 'Derivadas, integrais e equações diferenciais',
    icon: FaCalculator,
    prerequisites: ['algebra-linear'],
    difficulty: 'intermediate',
    relatedTopics: ['gravitacao', 'relatividade'],
    applications: ['Equações de Campo', 'Geodésicas'],
  },
  {
    id: 'algebra-abstrata',
    title: 'Álgebra Abstrata',
    description: 'Grupos, anéis e teoria de Lie',
    icon: FaSquareRootAlt,
    prerequisites: ['algebra-linear'],
    difficulty: 'advanced',
    relatedTopics: ['mecanica-quantica'],
    applications: ['Simetrias Quânticas', 'Grupos de Gauge'],
  },
  {
    id: 'analise-funcional',
    title: 'Análise Funcional',
    description: 'Espaços métricos, topológicos e de Hilbert',
    icon: FaInfinity,
    prerequisites: ['calculo'],
    difficulty: 'advanced',
    relatedTopics: ['mecanica-quantica'],
    applications: ['Formalismo de Dirac', 'Operadores Quânticos'],
  },
  {
    id: 'geometria-diferencial',
    title: 'Geometria Diferencial',
    description: 'Variedades, tensores e conexões',
    icon: FaWaveSquare,
    prerequisites: ['calculo', 'algebra-linear'],
    difficulty: 'advanced',
    relatedTopics: ['relatividade', 'gravitacao'],
    applications: ['Relatividade Geral', 'Teoria de Gauge'],
  },
];

export default function MathFoundationsView() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Fundamentos Matemáticos</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Explore os conceitos matemáticos essenciais para compreender física moderna, relatividade e
        mecânica quântica.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mathTopics.map(topic => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`p-3 rounded-lg ${
                  topic.difficulty === 'basic'
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    : topic.difficulty === 'intermediate'
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                    : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                }`}
              >
                <topic.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{topic.title}</h2>
                <span
                  className={`text-sm ${
                    topic.difficulty === 'basic'
                      ? 'text-green-700 dark:text-green-400'
                      : topic.difficulty === 'intermediate'
                      ? 'text-yellow-700 dark:text-yellow-400'
                      : 'text-red-700 dark:text-red-400'
                  }`}
                >
                  {topic.difficulty === 'basic'
                    ? 'Básico'
                    : topic.difficulty === 'intermediate'
                    ? 'Intermediário'
                    : 'Avançado'}
                </span>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">{topic.description}</p>

            {topic.prerequisites.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Pré-requisitos:</h3>
                <div className="flex flex-wrap gap-2">
                  {topic.prerequisites.map(prereq => (
                    <span
                      key={prereq}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      {mathTopics.find(t => t.id === prereq)?.title}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Aplicações:</h3>
              <div className="flex flex-wrap gap-2">
                {topic.applications.map(app => (
                  <span
                    key={app}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/fundamentos-matematicos/${topic.id}`}
              className="inline-flex items-center text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Explorar tópico
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 