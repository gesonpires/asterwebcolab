'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import TermQuiz from './TermQuiz';

interface TermCardProps {
  term: {
    id: string;
    term: string;
    definition: string;
    example: string;
    image: string;
    relatedTerms: string[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
  };
}

const TermCard = ({ term }: TermCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={term.image}
          alt={term.term}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{term.term}</h3>
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[term.difficulty]}`}>
            {term.difficulty === 'beginner' ? 'Iniciante' : 
             term.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {term.definition}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4"
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">Exemplo:</h4>
                <p className="text-gray-600 dark:text-gray-300">{term.example}</p>
              </div>

              {term.relatedTerms.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Termos Relacionados:</h4>
                  <div className="flex flex-wrap gap-2">
                    {term.relatedTerms.map((relatedTerm) => (
                      <span
                        key={relatedTerm}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {relatedTerm}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowQuiz(!showQuiz)}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {showQuiz ? 'Fechar Quiz' : 'Teste seu conhecimento'}
              </button>

              <AnimatePresence>
                {showQuiz && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4"
                  >
                    <TermQuiz termId={term.id} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TermCard; 