'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { topics, getLevelColor, getResourceIcon, Topic, TeacherResource } from '../data/topics';

type FilterStatus = 'all' | 'in-progress' | 'not-started';
type ResourceType = TeacherResource['type'];

const TeacherWorkbook = () => {
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedResourceType, setSelectedResourceType] = useState<ResourceType | null>(null);

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // In a real app, this would come from a database
    const hasStarted = true; // Placeholder
    
    switch (filter) {
      case 'in-progress':
        return matchesSearch && hasStarted;
      case 'not-started':
        return matchesSearch && !hasStarted;
      default:
        return matchesSearch;
    }
  });

  const filteredResources = selectedTopic?.resources?.filter(resource =>
    !selectedResourceType || resource.type === selectedResourceType
  ) || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Caderno do Professor
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Material didático e recursos para educadores
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex gap-2">
            {(['all', 'in-progress', 'not-started'] as FilterStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === status
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {status === 'all' ? 'Todos' : status === 'in-progress' ? 'Em Andamento' : 'Não Iniciados'}
              </button>
            ))}
          </div>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar tópicos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-gray-300"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTopics.map((topic) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer ${
                    selectedTopic?.id === topic.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedTopic(selectedTopic?.id === topic.id ? null : topic)}
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

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>⏱️ {topic.duration}</span>
                      <Link
                        href={`/cadernos/professor/${topic.id}`}
                        className="text-blue-500 hover:text-blue-600"
                      >
                        Ver conteúdo
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <AnimatePresence mode="wait">
            {selectedTopic && (
              <motion.div
                key="sidebar"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Recursos do Professor
                </h3>

                {/* Resource Type Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(['document', 'presentation', 'activity', 'assessment'] as ResourceType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedResourceType(selectedResourceType === type ? null : type)}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        selectedResourceType === type
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {getResourceIcon(type)} {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Objectives */}
                {selectedTopic.objectives && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Objetivos
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                      {selectedTopic.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Prerequisites */}
                {selectedTopic.prerequisites && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Pré-requisitos
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                      {selectedTopic.prerequisites.map((prerequisite, index) => (
                        <li key={index}>{prerequisite}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Resources */}
                {filteredResources.length > 0 ? (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Materiais
                    </h4>
                    <div className="space-y-3">
                      {filteredResources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{getResourceIcon(resource.type)}</span>
                            <div>
                              <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                                {resource.title}
                              </h5>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {resource.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Nenhum recurso encontrado com os filtros selecionados.
                  </p>
                )}

                {/* Teacher Notes */}
                {selectedTopic.teacherNotes && (
                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Notas do Professor
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {selectedTopic.teacherNotes}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TeacherWorkbook; 