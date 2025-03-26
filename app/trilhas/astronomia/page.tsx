// app/trilhas/astronomia/page.tsx

import Quiz from '@/components/Quiz'; // Ajuste o path se necessário

export default function AstronomiaPage() {
  const quizData = {
    question: 'Qual é o maior planeta do sistema solar?',
    options: ['Terra', 'Marte', 'Júpiter', 'Saturno'],
    correctAnswer: 'Júpiter',
  };

  return (
    <>
      <h1>Astronomia</h1>
      <p>Conteúdo introdutório sobre Astronomia.</p>
      <Quiz data={quizData} />
    </>
  );
}
