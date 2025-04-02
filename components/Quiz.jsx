// components/Quiz.jsx
'use client';

import { useState } from 'react';

export default function Quiz({ data }) {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected === data.correctAnswer) {
      setFeedback('Correto!');
    } else {
      setFeedback('Tente novamente.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Quiz</h2>
      <p className="mb-4 text-gray-800 dark:text-gray-200">{data.question}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {data.options.map((option, index) => (
          <label 
            key={index} 
            className="flex items-center p-3 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900"
          >
            <input
              type="radio"
              name="quiz"
              value={option}
              onChange={() => setSelected(option)}
              className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label={option}
            />
            <span className="ml-3 text-gray-900 dark:text-gray-100">{option}</span>
          </label>
        ))}
        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors"
          aria-label="Enviar resposta"
        >
          Enviar
        </button>
      </form>
      {feedback && (
        <p
          className={`mt-4 font-semibold ${
            feedback === 'Correto!' 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'
          }`}
          role="alert"
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
