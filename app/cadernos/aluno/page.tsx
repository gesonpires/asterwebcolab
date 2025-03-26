'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { topics, getLevelColor, Topic } from '../data/topics';

type FilterStatus = 'all' | 'in-progress' | 'completed';

const StudentWorkbook = () => {
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Simulated progress data (in a real app, this would come from a database)
  const progress: { [key: string]: number } = {
    'astronomia-basica': 30,
  };

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const topicProgress = progress[topic.id] || 0;
    
    switch (filter) {
      case 'in-progress':
        return matchesSearch && topicProgress > 0 && topicProgress < 100;
      case 'completed':
        return matchesSearch && topicProgress === 100;
      default:
        return matchesSearch;
    }
  });

  const renderProgressBar = (topic: Topic) => {
    const topicProgress = progress[topic.id] || 0;
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${topicProgress}%` }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Caderno Digital
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore os tópicos e acompanhe seu progresso
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex gap-2">
            {(['all', 'in-progress', 'completed'] as FilterStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === status
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {status === 'all' ? 'Todos' : status === 'in-progress' ? 'Em Progresso' : 'Concluídos'}
              </button>
            ))}
          </div>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar tópicos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {topic.title}
                  </h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(topic.level)}`}>
                    {topic.level === 'basic' ? 'Básico' : topic.level === 'intermediate' ? 'Intermediário' : 'Avançado'}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {topic.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>⏱️ {topic.duration}</span>
                  <span>{progress[topic.id] || 0}% concluído</span>
                </div>

                {renderProgressBar(topic)}

                <Link
                  href={`/cadernos/aluno/${topic.id}`}
                  className="mt-4 w-full inline-block text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Continuar
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Nenhum tópico encontrado com os filtros atuais.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentWorkbook; 