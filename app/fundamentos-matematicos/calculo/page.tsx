'use client';

import React from 'react';
import { DefinitionBox, TheoremBox, ProofBlock, ExampleBox, NoteBox } from '../components';
import { FaCalculator } from 'react-icons/fa';

export default function CalculoPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
            <FaCalculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Cálculo Diferencial e Integral
          </h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Derivadas</h2>

          <DefinitionBox term="Derivada">
            A derivada de uma função f em um ponto x₀ é o limite:
            {`
              f'(x₀) = lim(h→0) [f(x₀ + h) - f(x₀)]/h
            `}
          </DefinitionBox>

          <TheoremBox title="Regras de Derivação">
            Para funções f e g deriváveis:
            {`
              1. (f + g)' = f' + g'
              2. (fg)' = f'g + fg'
              3. (f/g)' = (f'g - fg')/g²
              4. (f∘g)' = (f'∘g)g'
            `}
          </TheoremBox>

          <ExampleBox title="Derivada de x²">
            Usando a definição:
            {`
              f(x) = x²
              f'(x) = lim(h→0) [(x + h)² - x²]/h
              = lim(h→0) [x² + 2xh + h² - x²]/h
              = lim(h→0) [2xh + h²]/h
              = lim(h→0) 2x + h
              = 2x
            `}
          </ExampleBox>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Integrais</h2>

          <DefinitionBox term="Integral Definida">
            A integral definida de f de a até b é:
            {`
              ∫(a→b) f(x)dx = lim(n→∞) Σ(i=1→n) f(xᵢ*)Δx
            `}
          </DefinitionBox>

          <TheoremBox title="Teorema Fundamental do Cálculo">
            Se F é uma primitiva de f, então:
            {`
              ∫(a→b) f(x)dx = F(b) - F(a)
            `}
          </TheoremBox>

          <ProofBlock>
            Seja P uma partição de [a,b] e F uma primitiva de f: F(b) - F(a) = Σ(F(xᵢ) - F(xᵢ₋₁)) =
            Σf(cᵢ)(xᵢ - xᵢ₋₁) = ∫(a→b) f(x)dx
          </ProofBlock>

          <NoteBox>
            O Teorema Fundamental do Cálculo estabelece a conexão entre derivação e integração,
            sendo fundamental para o desenvolvimento do cálculo.
          </NoteBox>
        </section>
      </div>
    </div>
  );
}
