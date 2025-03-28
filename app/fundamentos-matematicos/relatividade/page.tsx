'use client';

import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Componente para seções colapsáveis
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full py-4 px-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
        <FaChevronRight
          className={`transform transition-transform ${
            isOpen ? 'rotate-90' : ''
          } text-gray-500 dark:text-gray-400`}
        />
      </button>
      {isOpen && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
};

// Componente para fórmulas matemáticas
const Formula = ({ formula, display = true }: { formula: string; display?: boolean }) => {
  const html = katex.renderToString(formula, {
    displayMode: display,
    throwOnError: false,
  });

  return (
    <div className="my-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default function RelatividadePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Fundamentos Matemáticos da Relatividade
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Desenvolvimento matemático rigoroso da teoria da relatividade especial e geral,
            incluindo o formalismo tensorial e geometria diferencial.
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Relatividade Especial */}
          <Section title="1. Relatividade Especial">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  1.1 Transformações de Lorentz
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  As transformações de Lorentz descrevem como as coordenadas espaciais e temporais
                  de um evento se transformam entre referenciais inerciais.
                </p>
                <Formula formula="t' = \\gamma(t - \\frac{vx}{c^2})" />
                <Formula formula="x' = \\gamma(x - vt)" />
                <Formula formula="y' = y" />
                <Formula formula="z' = z" />
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  onde <Formula formula="\\gamma = \\frac{1}{\\sqrt{1-v^2/c^2}}" display={false} /> é o fator de Lorentz.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  1.2 Métrica de Minkowski
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  O intervalo espaço-temporal invariante é dado pela métrica de Minkowski:
                </p>
                <Formula formula="ds^2 = -c^2dt^2 + dx^2 + dy^2 + dz^2" />
              </div>
            </div>
          </Section>

          {/* Relatividade Geral */}
          <Section title="2. Relatividade Geral">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  2.1 Tensor Métrico
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  O tensor métrico <Formula formula="g_{\\mu\\nu}" display={false} /> descreve a geometria do espaço-tempo:
                </p>
                <Formula formula="ds^2 = g_{\\mu\\nu}dx^\\mu dx^\\nu" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  2.2 Equações de Einstein
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  As equações de campo de Einstein relacionam a geometria do espaço-tempo com a
                  distribuição de matéria e energia:
                </p>
                <Formula formula="R_{\\mu\\nu} - \\frac{1}{2}Rg_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4}T_{\\mu\\nu}" />
              </div>
            </div>
          </Section>

          {/* Exercícios */}
          <Section title="3. Exercícios Propostos">
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Exercício 1:
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Derive as transformações de Lorentz a partir dos postulados da relatividade
                  especial e da invariância da velocidade da luz.
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Exercício 2:
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Calcule o tensor de Riemann para a métrica de Schwarzschild.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Referências */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Referências
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Weinberg, S. - Gravitation and Cosmology</li>
            <li>Misner, Thorne & Wheeler - Gravitation</li>
            <li>Wald, R. M. - General Relativity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}