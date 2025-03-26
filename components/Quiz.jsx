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
    <div className="bg-white rounded shadow p-6 max-w-md">
      <h2 className="text-xl font-semibold mb-4">Quiz</h2>
      <p className="mb-4">{data.question}</p>
      <form onSubmit={handleSubmit}>
        {data.options.map((option, index) => (
          <label key={index} className="block mb-2">
            <input
              type="radio"
              name="quiz"
              value={option}
              onChange={() => setSelected(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
      {feedback && (
        <p
          className={`mt-4 font-semibold ${
            feedback === 'Correto!' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
