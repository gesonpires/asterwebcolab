'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface ExerciseSet {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

interface InteractiveExercisesProps {
  exerciseSet: ExerciseSet;
  onComplete?: (score: number) => void;
}

const InteractiveExercises = ({ exerciseSet, onComplete }: InteractiveExercisesProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === exerciseSet.questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
    
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < exerciseSet.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
      onComplete?.(score);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Exercício Concluído!
        </h3>
        
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Sua pontuação:
          </p>
          <div className="text-4xl font-bold text-blue-500">
            {score} / {exerciseSet.questions.length}
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            ({Math.round((score / exerciseSet.questions.length) * 100)}%)
          </p>
        </div>

        <button
          onClick={handleRetry}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Tentar Novamente
        </button>
      </motion.div>
    );
  }

  const question = exerciseSet.questions[currentQuestion];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {exerciseSet.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {exerciseSet.description}
        </p>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Questão {currentQuestion + 1} de {exerciseSet.questions.length}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Pontuação: {score}
        </span>
      </div>

      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6"
      >
        <p className="text-gray-900 dark:text-white mb-4">
          {question.text}
        </p>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-lg text-left transition-colors ${
                selectedAnswer === null
                  ? 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                  : selectedAnswer === index
                    ? index === question.correctAnswer
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
                      : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
                    : index === question.correctAnswer
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
                      : 'bg-gray-50 dark:bg-gray-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6"
          >
            <div className={`p-4 rounded-lg ${
              selectedAnswer === question.correctAnswer
                ? 'bg-green-50 dark:bg-green-900/20'
                : 'bg-red-50 dark:bg-red-900/20'
            }`}>
              <p className={`text-sm ${
                selectedAnswer === question.correctAnswer
                  ? 'text-green-800 dark:text-green-400'
                  : 'text-red-800 dark:text-red-400'
              }`}>
                {selectedAnswer === question.correctAnswer ? '✓ Correto!' : '✗ Incorreto'}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {question.explanation}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedAnswer !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-end"
        >
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {currentQuestion < exerciseSet.questions.length - 1 ? 'Próxima' : 'Concluir'}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveExercises; 