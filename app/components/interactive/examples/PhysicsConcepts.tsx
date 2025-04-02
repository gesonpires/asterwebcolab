'use client';

import React from 'react';
import DiscursiveAnswer from '../DiscursiveAnswer';

const physicsConcepts = [
  {
    id: 'newton-first-law',
    name: 'Primeira Lei de Newton',
    keywords: ['inércia', 'repouso', 'movimento retilíneo', 'força resultante', 'equilíbrio'],
    relatedConcepts: ['força', 'massa', 'aceleração'],
    importance: 1.0,
  },
  {
    id: 'newton-second-law',
    name: 'Segunda Lei de Newton',
    keywords: ['força', 'massa', 'aceleração', 'F = ma', 'resultante'],
    relatedConcepts: ['força', 'massa', 'aceleração', 'primeira lei'],
    importance: 1.0,
  },
  {
    id: 'newton-third-law',
    name: 'Terceira Lei de Newton',
    keywords: ['ação', 'reação', 'forças de interação', 'pares de forças'],
    relatedConcepts: ['força', 'interação', 'sistema'],
    importance: 0.8,
  },
  {
    id: 'force',
    name: 'Força',
    keywords: ['força', 'newton', 'N', 'interação', 'empurrar', 'puxar'],
    relatedConcepts: ['massa', 'aceleração', 'gravidade'],
    importance: 0.9,
  },
  {
    id: 'mass',
    name: 'Massa',
    keywords: ['massa', 'quilograma', 'kg', 'inércia', 'quantidade de matéria'],
    relatedConcepts: ['força', 'aceleração', 'gravidade'],
    importance: 0.9,
  },
];

export default function PhysicsConcepts() {
  const handleAnalysis = (analysis: any) => {
    console.log('Análise da resposta:', analysis);
    // Aqui você pode implementar lógica adicional, como:
    // - Salvar a resposta do aluno
    // - Atualizar o progresso
    // - Gerar recomendações personalizadas
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Exercício: Leis de Newton
      </h2>
      
      <div className="prose dark:prose-invert max-w-none mb-6">
        <p>
          Explique como as três leis de Newton se aplicam a uma situação cotidiana.
          Por exemplo, você pode descrever o que acontece quando:
        </p>
        <ul>
          <li>Um carro freia bruscamente</li>
          <li>Uma pessoa empurra uma parede</li>
          <li>Um objeto cai em queda livre</li>
        </ul>
        <p>
          Em sua resposta, tente identificar:
        </p>
        <ul>
          <li>As forças envolvidas</li>
          <li>Como a massa afeta o movimento</li>
          <li>Os pares de ação e reação</li>
          <li>O papel da inércia</li>
        </ul>
      </div>

      <DiscursiveAnswer
        question="Descreva uma situação cotidiana e explique como as três leis de Newton se aplicam a ela."
        concepts={physicsConcepts}
        onAnalyze={handleAnalysis}
      />
    </div>
  );
} 