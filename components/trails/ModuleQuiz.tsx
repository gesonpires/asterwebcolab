'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { moduleQuizzes } from '@/app/trilhas/data/modules';

interface ModuleQuizProps {
  trailId: number;
  moduleId: string;
  onComplete: () => void;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const ModuleQuiz = ({ trailId, moduleId, onComplete }: ModuleQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const quiz = moduleQuizzes[trailId]?.[moduleId];

  if (!quiz) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">
          Quiz em desenvolvimento...
        </p>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    const correctAnswers = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);
    const finalScore = (correctAnswers / quiz.questions.length) * 100;
    setScore(finalScore);
    setShowResults(true);
    if (finalScore >= 70) {
      onComplete();
    }
  };

  if (showResults) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Resultado do Quiz
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Você acertou {Math.round(score)}% das questões!
        </p>
        {score >= 70 ? (
          <div className="p-6 bg-green-50 dark:bg-green-900 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">
              Parabéns!
            </h3>
            <p className="text-green-700 dark:text-green-300">
              Você completou o módulo com sucesso!
            </p>
          </div>
        ) : (
          <div className="p-6 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
              Quase lá!
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300">
              Você precisa acertar pelo menos 70% para completar o módulo.
            </p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setSelectedAnswers([]);
                setShowResults(false);
                setScore(0);
              }}
              className="mt-4 px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
            >
              Tentar Novamente
            </button>
          </div>
        )}
      </motion.div>
    );
  }

  const currentQuestionData = quiz.questions[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8"
    >
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Questão {currentQuestion + 1} de {quiz.questions.length}
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {Math.round((currentQuestion / quiz.questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{
              width: `${(currentQuestion / quiz.questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {currentQuestionData.question}
        </h3>
        <div className="space-y-4">
          {currentQuestionData.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg transition-colors ${
                selectedAnswers[currentQuestion] === index
                  ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500'
                  : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswers[currentQuestion] === undefined}
          className={`px-6 py-2 rounded-lg transition-colors ${
            selectedAnswers[currentQuestion] === undefined
              ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {currentQuestion === quiz.questions.length - 1
            ? 'Finalizar'
            : 'Próxima'}
        </button>
      </div>
    </motion.div>
  );
};

export default ModuleQuiz; 