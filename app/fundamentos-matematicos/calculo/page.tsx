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

          <DefinitionBox 
            title="Derivada"
            content="A derivada de uma função f em um ponto x₀ é o limite:"
            formula="f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}"
          />

          <TheoremBox 
            title="Regras de Derivação"
            content="Para funções f e g deriváveis:"
            formula="\\begin{align*} 1. &\\ (f + g)' = f' + g' \\\\ 2. &\\ (fg)' = f'g + fg' \\\\ 3. &\\ (f/g)' = \\frac{f'g - fg'}{g^2} \\\\ 4. &\\ (f \\circ g)' = (f' \\circ g)g' \\end{align*}"
          />

          <ExampleBox 
            title="Derivada de x²"
            content="Usando a definição:"
            formula="\\begin{align*} f(x) &= x^2 \\\\ f'(x) &= \\lim_{h \\to 0} \\frac{(x + h)^2 - x^2}{h} \\\\ &= \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h} \\\\ &= \\lim_{h \\to 0} \\frac{2xh + h^2}{h} \\\\ &= \\lim_{h \\to 0} 2x + h \\\\ &= 2x \\end{align*}"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Integrais</h2>

          <DefinitionBox 
            title="Integral Definida"
            content="A integral definida de f de a até b é:"
            formula="\\int_a^b f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*)\\Delta x"
          />

          <TheoremBox 
            title="Teorema Fundamental do Cálculo"
            content="Se F é uma primitiva de f, então:"
            formula="\\int_a^b f(x)dx = F(b) - F(a)"
          />

          <ProofBlock>
            Seja P uma partição de [a,b] e F uma primitiva de f:
            {`
              F(b) - F(a) = Σ(F(xᵢ) - F(xᵢ₋₁)) = Σf(cᵢ)(xᵢ - xᵢ₋₁) = ∫(a→b) f(x)dx
            `}
          </ProofBlock>

          <NoteBox
            title="Observação"
            content="O Teorema Fundamental do Cálculo estabelece a conexão entre derivação e integração, sendo fundamental para o desenvolvimento do cálculo."
          />
        </section>
      </div>
    </div>
  );
}
