'use client';

import React, { useState } from 'react';

interface Concept {
  id: string;
  name: string;
  keywords: string[];
  relatedConcepts: string[];
  importance: string;
}

interface DiscursiveAnswerProps {
  concepts: Concept[];
  onAnalysisComplete?: (analysis: AnalysisResult) => void;
}

interface AnalysisResult {
  conceptsFound: string[];
  conceptsMissing: string[];
  relatedConcepts: string[];
  suggestions: string[];
  score: number;
}

export default function DiscursiveAnswer({
  concepts,
  onAnalysisComplete,
}: DiscursiveAnswerProps) {
  const [answer, setAnswer] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeAnswer = () => {
    setIsAnalyzing(true);

    // Simular análise (em um caso real, isso seria feito por um modelo de IA)
    setTimeout(() => {
      const conceptsFound = concepts
        .filter((concept) =>
          concept.keywords.some((keyword) =>
            answer.toLowerCase().includes(keyword.toLowerCase())
          )
        )
        .map((concept) => concept.name);

      const conceptsMissing = concepts
        .filter((concept) => !conceptsFound.includes(concept.name))
        .map((concept) => concept.name);

      const relatedConcepts = concepts
        .filter((concept) => conceptsFound.includes(concept.name))
        .flatMap((concept) => concept.relatedConcepts);

      const suggestions = conceptsMissing.map(
        (concept) => `Considere mencionar o conceito de ${concept}`
      );

      const score = Math.round(
        (conceptsFound.length / concepts.length) * 100
      );

      const result: AnalysisResult = {
        conceptsFound,
        conceptsMissing,
        relatedConcepts,
        suggestions,
        score,
      };

      setAnalysis(result);
      setIsAnalyzing(false);

      if (onAnalysisComplete) {
        onAnalysisComplete(result);
      }
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <label
          htmlFor="answer"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Sua Resposta
        </label>
        <textarea
          id="answer"
          rows={6}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
          placeholder="Digite sua resposta aqui..."
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={analyzeAnswer}
          disabled={!answer.trim() || isAnalyzing}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-offset-gray-800"
        >
          {isAnalyzing ? 'Analisando...' : 'Analisar Resposta'}
        </button>
      </div>

      {analysis && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Análise da Resposta
              </h3>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  analysis.score >= 70
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : analysis.score >= 40
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}
              >
                {analysis.score}%
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Conceitos Identificados
                </h4>
                <div className="flex flex-wrap gap-2">
                  {analysis.conceptsFound.map((concept) => (
                    <span
                      key={concept}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {analysis.conceptsMissing.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Conceitos que Podem Ser Mencionados
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.conceptsMissing.map((concept) => (
                      <span
                        key={concept}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {analysis.relatedConcepts.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Conceitos Relacionados
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.relatedConcepts.map((concept) => (
                      <span
                        key={concept}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {analysis.suggestions.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sugestões de Melhoria
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {analysis.suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 