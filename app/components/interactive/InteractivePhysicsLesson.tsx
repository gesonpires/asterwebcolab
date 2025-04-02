'use client';

import React, { useState } from 'react';
import PhysicsSimulation from './PhysicsSimulation';
import DiscursiveAnswer from './DiscursiveAnswer';

interface Concept {
  id: string;
  name: string;
  keywords: string[];
  relatedConcepts: string[];
  importance: string;
}

interface InteractivePhysicsLessonProps {
  currentStep: number;
  simulationData: {
    mass: number;
    force: number;
    friction: number;
  };
  onStepComplete: (step: number) => void;
  onSimulationUpdate: (data: any) => void;
  concepts: Concept[];
}

export default function InteractivePhysicsLesson({
  currentStep,
  simulationData,
  onStepComplete,
  onSimulationUpdate,
  concepts,
}: InteractivePhysicsLessonProps) {
  const [simulationState, setSimulationState] = useState({
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
    acceleration: { x: 0, y: 0 },
    time: 0,
  });

  const [trajectory, setTrajectory] = useState<Array<{ x: number; y: number }>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleSimulationUpdate = (data: any) => {
    setSimulationState(data);
    onSimulationUpdate(data);
  };

  const handleAnalysisComplete = (analysis: any) => {
    if (analysis.score >= 70) {
      onStepComplete(currentStep);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Observação do Movimento
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Observe a simulação abaixo e analise como o objeto se comporta quando uma força é aplicada.
              </p>

              <div className="mb-6">
                <PhysicsSimulation
                  state={simulationState}
                  trajectory={trajectory}
                  width={600}
                  height={400}
                />
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  {isRunning ? 'Pausar' : 'Iniciar'} Simulação
                </button>
                <button
                  onClick={() => {
                    setIsRunning(false);
                    setSimulationState({
                      position: { x: 0, y: 0 },
                      velocity: { x: 0, y: 0 },
                      acceleration: { x: 0, y: 0 },
                      time: 0,
                    });
                    setTrajectory([]);
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Reiniciar
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Análise do Movimento
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Com base na sua observação, descreva como o objeto se comporta quando uma força é aplicada.
                Considere os seguintes aspectos:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
                <li>Como o objeto começa a se mover?</li>
                <li>O que acontece com a velocidade do objeto?</li>
                <li>Como a massa afeta o movimento?</li>
                <li>O que acontece quando a força é removida?</li>
              </ul>

              <DiscursiveAnswer
                concepts={concepts}
                onAnalysisComplete={handleAnalysisComplete}
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Análise do Movimento de Projétil
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Observe a simulação do movimento de projétil e analise os seguintes aspectos:
              </p>

              <div className="mb-6">
                <PhysicsSimulation
                  state={simulationState}
                  trajectory={trajectory}
                  width={600}
                  height={400}
                />
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  {isRunning ? 'Pausar' : 'Iniciar'} Simulação
                </button>
                <button
                  onClick={() => {
                    setIsRunning(false);
                    setSimulationState({
                      position: { x: 0, y: 0 },
                      velocity: { x: 10, y: 10 },
                      acceleration: { x: 0, y: -9.81 },
                      time: 0,
                    });
                    setTrajectory([]);
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Reiniciar
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Análise do Movimento de Projétil
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Com base na sua observação, descreva como o projétil se comporta durante o movimento.
                Considere os seguintes aspectos:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
                <li>Como a trajetória do projétil se forma?</li>
                <li>O que acontece com a velocidade vertical?</li>
                <li>Como a velocidade horizontal se comporta?</li>
                <li>O que determina o alcance do projétil?</li>
              </ul>

              <DiscursiveAnswer
                concepts={concepts}
                onAnalysisComplete={handleAnalysisComplete}
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Lição Concluída!
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Você completou com sucesso a análise dos movimentos físicos.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose dark:prose-invert max-w-none">
        {renderStep()}
      </div>
    </div>
  );
} 