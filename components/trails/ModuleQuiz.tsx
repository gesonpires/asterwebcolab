
import React, { useState } from 'react';
import { Question } from '@/app/trilhas/data/modules';





interface ModuleQuizProps {



  questions: Question[];
  onComplete: (score: number, totalQuestions: number) => void;
}








const ModuleQuiz: React.FC<ModuleQuizProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);


  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);











  if (!questions || questions.length === 0) {
    return <div className="p-4 text-center">Nenhuma questão disponível para este módulo.</div>;
  }





  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {




    // Check if answer is correct and update score
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }











    // Move to next question or complete quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      const finalScore = score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0);
      onComplete(finalScore, questions.length);
    }
  };


  if (quizCompleted) {
    const finalScore = score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0);
    const percentage = Math.round((finalScore / questions.length) * 100);

    return (










































      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Quiz Completo!</h2>
        <div className="text-center mb-6">
          <p className="text-lg mb-2">
            Sua pontuação: <span className="font-bold">{finalScore}</span> de {questions.length} ({percentage}%)
          </p>
          {percentage >= 70 ? (
            <p className="text-green-600 font-semibold">Parabéns! Você completou este módulo com sucesso.</p>
          ) : (
            <p className="text-amber-600 font-semibold">Tente novamente para melhorar sua pontuação.</p>
          )}
        </div>
      </div>
    );
  }


  const currentQ = questions[currentQuestion];

  return (






    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Quiz do Módulo</h2>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">






          <p className="text-sm text-gray-500">
            Questão {currentQuestion + 1} de {questions.length}
          </p>
          <div className="bg-gray-200 h-2 rounded-full w-2/3">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>








        <h3 className="text-lg font-medium">{currentQ.question}</h3>
      </div>




















      <div className="space-y-3 mb-6">
        {currentQ.options.map((option, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedAnswer === index
                ? 'bg-blue-100 border-blue-500 shadow-sm'
                : 'hover:bg-gray-50 hover:border-gray-300'
            }`}
            onClick={() => handleAnswerSelect(index)}
          >
            <div className="flex items-start">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                selectedAnswer === index ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}>
                {String.fromCharCode(65 + index)}
              </div>
              <div dangerouslySetInnerHTML={{ __html: option }} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            selectedAnswer !== null
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={selectedAnswer === null}
          onClick={handleNextQuestion}






        >



          {currentQuestion < questions.length - 1 ? 'Próxima Questão' : 'Finalizar Quiz'}
        </button>
      </div>

    </div>
  );
};


export default ModuleQuiz;
