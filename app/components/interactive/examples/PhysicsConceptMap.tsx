'use client';

import React, { useState } from 'react';
import ConceptMap from '../ConceptMap';

const physicsConcepts = [
  {
    id: 'mechanics',
    name: 'Mecânica',
    description: 'Ramo da física que estuda o movimento e as forças',
    relatedConcepts: ['newton-laws', 'energy', 'momentum'],
    category: 'fundamental',
  },
  {
    id: 'newton-laws',
    name: 'Leis de Newton',
    description: 'Três leis fundamentais que descrevem o movimento dos corpos',
    relatedConcepts: ['force', 'mass', 'acceleration', 'inertia'],
    category: 'fundamental',
  },
  {
    id: 'force',
    name: 'Força',
    description: 'Interação que pode alterar o movimento de um corpo',
    relatedConcepts: ['newton-laws', 'mass', 'acceleration'],
    category: 'fundamental',
  },
  {
    id: 'mass',
    name: 'Massa',
    description: 'Medida da inércia de um corpo',
    relatedConcepts: ['force', 'acceleration', 'gravity'],
    category: 'fundamental',
  },
  {
    id: 'acceleration',
    name: 'Aceleração',
    description: 'Taxa de variação da velocidade',
    relatedConcepts: ['force', 'mass', 'velocity'],
    category: 'fundamental',
  },
  {
    id: 'energy',
    name: 'Energia',
    description: 'Capacidade de realizar trabalho',
    relatedConcepts: ['work', 'power', 'conservation'],
    category: 'fundamental',
  },
  {
    id: 'momentum',
    name: 'Quantidade de Movimento',
    description: 'Produto da massa pela velocidade',
    relatedConcepts: ['force', 'collision', 'conservation'],
    category: 'fundamental',
  },
  {
    id: 'work',
    name: 'Trabalho',
    description: 'Transferência de energia através de uma força',
    relatedConcepts: ['force', 'energy', 'power'],
    category: 'fundamental',
  },
  {
    id: 'power',
    name: 'Potência',
    description: 'Taxa de realização de trabalho',
    relatedConcepts: ['work', 'energy', 'time'],
    category: 'fundamental',
  },
  {
    id: 'conservation',
    name: 'Conservação',
    description: 'Princípio de conservação de grandezas físicas',
    relatedConcepts: ['energy', 'momentum', 'angular-momentum'],
    category: 'fundamental',
  },
];

export default function PhysicsConceptMap() {
  const [selectedConcept, setSelectedConcept] = useState<any>(null);

  const handleConceptClick = (concept: any) => {
    setSelectedConcept(concept);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Mapa Conceitual: Mecânica Clássica
        </h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Instruções
          </h2>
          <ul className="list-disc list-inside text-blue-700 dark:text-blue-300">
            <li>Explore o mapa conceitual clicando nos nós</li>
            <li>Observe as relações entre os conceitos</li>
            <li>Arraste os nós para reorganizar o mapa</li>
            <li>Use o zoom e a navegação para explorar diferentes partes</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ConceptMap
              concepts={physicsConcepts}
              onNodeClick={handleConceptClick}
            />
          </div>

          <div className="lg:col-span-1">
            {selectedConcept ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedConcept.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {selectedConcept.description}
                </p>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Conceitos Relacionados
                  </h4>
                  <ul className="space-y-1">
                    {selectedConcept.relatedConcepts.map((relatedId: string) => {
                      const relatedConcept = physicsConcepts.find(
                        (c) => c.id === relatedId
                      );
                      return (
                        <li
                          key={relatedId}
                          className="text-sm text-gray-700 dark:text-gray-300"
                        >
                          • {relatedConcept?.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Clique em um conceito no mapa para ver mais detalhes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 