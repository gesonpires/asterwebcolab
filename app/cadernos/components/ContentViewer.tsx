'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { exercises } from '../data/exercises';
import InteractiveExercises from './InteractiveExercises';

interface ContentSection {
  id: string;
  title: string;
  content: (TextContent | ImageContent | VideoContent | InteractiveContent)[];
}

interface TextContent {
  type: 'text';
  text: string;
  highlight?: boolean;
}

interface ImageContent {
  type: 'image';
  src: string;
  caption: string;
  alt: string;
}

interface VideoContent {
  type: 'video';
  src: string;
  title: string;
}

interface InteractiveContent {
  type: 'interactive';
  component: 'simulation' | 'exercise' | 'quiz';
  data: any;
}

interface ContentViewerProps {
  sections: ContentSection[];
  onProgress?: (sectionId: string, progress: number) => void;
  isTeacher?: boolean;
}

const ContentViewer = ({ sections, onProgress, isTeacher = false }: ContentViewerProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState<{ [key: string]: string }>({});

  const handleNoteChange = (sectionId: string, note: string) => {
    setNotes(prev => ({
      ...prev,
      [sectionId]: note
    }));
  };

  const handleExerciseComplete = (score: number) => {
    onProgress?.(sections[currentSection].id, score);
  };

  const renderContent = (content: (TextContent | ImageContent | VideoContent | InteractiveContent)[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'text':
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 ${item.highlight ? 'bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg' : ''}`}
            >
              <p className="text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: item.text }} />
            </motion.div>
          );

        case 'image':
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="relative h-64 md:h-96">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
              {item.caption && (
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                  {item.caption}
                </p>
              )}
            </motion.div>
          );

        case 'video':
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={item.src}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                {item.title}
              </p>
            </motion.div>
          );

        case 'interactive':
          if (item.component === 'exercise' || item.component === 'quiz') {
            const exerciseSet = exercises[item.data.id];
            if (exerciseSet) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <InteractiveExercises
                    exerciseSet={exerciseSet}
                    onComplete={handleExerciseComplete}
                  />
                </motion.div>
              );
            }
          }
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
            >
              <p className="text-center text-gray-600 dark:text-gray-400">
                Componente interativo em desenvolvimento...
              </p>
            </motion.div>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Anterior
          </button>

          <span className="text-gray-600 dark:text-gray-400">
            {currentSection + 1} de {sections.length}
          </span>

          <button
            onClick={() => {
              setCurrentSection(Math.min(sections.length - 1, currentSection + 1));
              onProgress?.(sections[currentSection].id, 100);
            }}
            disabled={currentSection === sections.length - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Próximo
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {sections[currentSection].title}
                </h2>

                {renderContent(sections[currentSection].content)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Teacher's Panel */}
          {isTeacher && (
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Anotações do Professor
                  </h3>
                  <button
                    onClick={() => setShowNotes(!showNotes)}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    {showNotes ? 'Ocultar' : 'Mostrar'}
                  </button>
                </div>

                <AnimatePresence>
                  {showNotes && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <textarea
                        value={notes[sections[currentSection].id] || ''}
                        onChange={(e) => handleNoteChange(sections[currentSection].id, e.target.value)}
                        placeholder="Adicione suas anotações aqui..."
                        className="w-full h-48 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentViewer; 