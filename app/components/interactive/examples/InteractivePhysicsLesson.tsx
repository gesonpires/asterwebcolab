'use client';

import React, { useState } from 'react';
import PhysicsSimulation from '../PhysicsSimulation';
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

export default function InteractivePhysicsLesson() {
  const [simulationData, setSimulationData] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSimulationUpdate = (data: any) => {
    setSimulationData(data);
  };

  const handleAnalysis = (analysis: any) => {
    console.log('Análise da resposta:', analysis);
    // Aqui você pode implementar lógica adicional, como:
    // - Salvar a resposta do aluno
    // - Atualizar o progresso
    // - Gerar recomendações personalizadas
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Leis de Newton: Uma Abordagem Interativa
        </h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Objetivos de Aprendizagem
          </h2>
          <ul className="list-disc list-inside text-blue-700 dark:text-blue-300">
            <li>Compreender os princípios fundamentais das Leis de Newton</li>
            <li>Identificar aplicações das leis em situações cotidianas</li>
            <li>Desenvolver habilidades de análise e resolução de problemas</li>
            <li>Construir uma compreensão conceitual sólida da mecânica newtoniana</li>
          </ul>
        </div>

        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Passo 1: Observação e Análise
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300">
              Observe a simulação abaixo e analise o movimento do objeto. 
              Note como ele se comporta quando diferentes forças são aplicadas.
            </p>

            <PhysicsSimulation
              type="newton-laws"
              initialConditions={{
                force: 0.5,
                mass: 1,
              }}
              onUpdate={handleSimulationUpdate}
            />

            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Pergunta para Reflexão
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Descreva o que você observou na simulação e explique como isso se relaciona com a Primeira Lei de Newton.
              </p>

              <DiscursiveAnswer
                question="Como a simulação demonstra a Primeira Lei de Newton?"
                concepts={physicsConcepts}
                onAnalyze={handleAnalysis}
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Passo 2: Movimento de Projétil
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300">
              Agora, vamos analisar o movimento de um projétil. 
              Observe como a trajetória é afetada pela velocidade inicial e pelo ângulo de lançamento.
            </p>

            <PhysicsSimulation
              type="projectile"
              initialConditions={{
                velocity: 5,
                angle: 45,
                gravity: 9.81,
              }}
              onUpdate={handleSimulationUpdate}
            />

            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Análise do Movimento
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Explique como a Segunda Lei de Newton se aplica ao movimento do projétil.
                Considere as forças atuantes e como elas afetam a trajetória.
              </p>

              <DiscursiveAnswer
                question="Como a Segunda Lei de Newton explica o movimento do projétil?"
                concepts={physicsConcepts}
                onAnalyze={handleAnalysis}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            disabled={currentStep === 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          
          <button
            onClick={() => setCurrentStep(prev => Math.min(2, prev + 1))}
            disabled={currentStep === 2}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
} 