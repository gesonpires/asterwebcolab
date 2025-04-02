'use client';

import React, { useState } from 'react';
import InteractivePhysicsLesson from './InteractivePhysicsLesson';

const newtonLawsConcepts = [
  {
    id: 'inertia',
    name: 'Inércia',
    keywords: ['resistência', 'movimento', 'repouso', 'velocidade'],
    relatedConcepts: ['massa', 'força', 'aceleração'],
    importance: 'fundamental',
  },
  {
    id: 'force',
    name: 'Força',
    keywords: ['interação', 'aceleração', 'massa', 'direção'],
    relatedConcepts: ['inércia', 'aceleração', 'massa'],
    importance: 'fundamental',
  },
  {
    id: 'reaction',
    name: 'Ação e Reação',
    keywords: ['par', 'igual', 'oposta', 'direção'],
    relatedConcepts: ['força', 'interação', 'sistema'],
    importance: 'fundamental',
  },
];

export default function NewtonLawsLesson() {
  const [currentStep, setCurrentStep] = useState(0);
  const [simulationData, setSimulationData] = useState({
    mass: 1,
    force: 10,
    friction: 0.1,
  });

  const handleStepComplete = (step: number) => {
    setCurrentStep(step + 1);
  };

  const handleSimulationUpdate = (data: any) => {
    setSimulationData(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Aula Interativa: Leis de Newton
        </h1>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
            Objetivos da Aula
          </h2>
          <ul className="list-disc list-inside text-green-700 dark:text-green-300">
            <li>Compreender o conceito de inércia</li>
            <li>Analisar a relação entre força e aceleração</li>
            <li>Identificar pares de ação e reação</li>
            <li>Desenvolver habilidades de observação e análise</li>
          </ul>
        </div>

        <InteractivePhysicsLesson
          currentStep={currentStep}
          simulationData={simulationData}
          onStepComplete={handleStepComplete}
          onSimulationUpdate={handleSimulationUpdate}
          concepts={newtonLawsConcepts}
        />

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Dicas para Análise
          </h2>
          <ul className="list-disc list-inside text-blue-700 dark:text-blue-300">
            <li>Observe atentamente o movimento dos objetos</li>
            <li>Note como as forças afetam o movimento</li>
            <li>Relacione suas observações com as leis de Newton</li>
            <li>Use dados quantitativos para suportar suas conclusões</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 