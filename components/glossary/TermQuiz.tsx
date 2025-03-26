'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface TermQuizProps {
  termId: string;
}

const bigBangQuestions: Question[] = [
  {
    question: 'O que o Big Bang não é?',
    options: [
      'Uma explosão no espaço',
      'O início do tempo e do espaço',
      'A expansão do universo',
      'A origem da matéria e energia'
    ],
    correctAnswer: 0,
    explanation: 'O Big Bang não foi uma explosão no espaço, mas sim a expansão do próprio espaço-tempo. É um conceito diferente de uma explosão tradicional, pois não houve um "centro" ou "ponto de origem" no espaço.'
  },
  {
    question: 'Qual evidência mais forte suporta a teoria do Big Bang?',
    options: [
      'A existência de galáxias',
      'A radiação cósmica de fundo',
      'A presença de estrelas',
      'A existência de planetas'
    ],
    correctAnswer: 1,
    explanation: 'A radiação cósmica de fundo (CMB) é considerada a evidência mais forte do Big Bang. É a radiação térmica remanescente do universo primitivo, que permeia todo o cosmos.'
  },
  {
    question: 'Quando aproximadamente ocorreu o Big Bang?',
    options: [
      '4,6 bilhões de anos atrás',
      '13,8 bilhões de anos atrás',
      '100 bilhões de anos atrás',
      '1 bilhão de anos atrás'
    ],
    correctAnswer: 1,
    explanation: 'O Big Bang ocorreu há aproximadamente 13,8 bilhões de anos. Esta é a idade estimada do universo baseada nas observações da radiação cósmica de fundo e da taxa de expansão do universo.'
  }
];

const TermQuiz = ({ termId }: TermQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const questions = termId === 'big-bang' ? bigBangQuestions : [];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
  };

  if (questions.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Questão {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm font-semibold text-blue-500">
            Pontuação: {score}/{currentQuestion + 1}
          </span>
        </div>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {questions[currentQuestion].question}
        </h4>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showExplanation && handleAnswer(index)}
              className={`w-full p-3 rounded-lg text-left transition-colors ${
                showExplanation
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : selectedAnswer === index
                    ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
              }`}
              disabled={showExplanation}
            >
              {option}
            </button>
          ))}
        </div>

        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
          >
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {questions[currentQuestion].explanation}
            </p>
          </motion.div>
        )}

        <div className="mt-6 flex justify-end">
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={nextQuestion}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Próxima Questão
            </button>
          ) : (
            <button
              onClick={resetQuiz}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Tentar Novamente
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TermQuiz; 