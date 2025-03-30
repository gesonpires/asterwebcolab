'use client';

import React from 'react';
import { DefinitionBox, TheoremBox, ProofBlock, ExampleBox, NoteBox } from '../components';
import { FaInfinity } from 'react-icons/fa';

export default function AnaliseFuncionalPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
            <FaInfinity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Análise Funcional</h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Espaços de Hilbert</h2>

          <DefinitionBox title="Espaço de Hilbert">
            Um espaço vetorial completo com produto interno ⟨·,·⟩ que induz uma norma:
            {`
              ||x|| = √⟨x,x⟩
            `}
          </DefinitionBox>

          <TheoremBox title="Desigualdade de Cauchy-Schwarz">
            Para todo x,y em um espaço de Hilbert H:
            {`
              |⟨x,y⟩| ≤ ||x|| ||y||
            `}
          </TheoremBox>

          <ProofBlock>
            Para todo λ ∈ ℂ: 0 ≤ ||x + λy||² = ||x||² + |λ|²||y||² + 2Re(λ⟨x,y⟩) Escolhendo λ =
            -⟨x,y⟩/||y||²: 0 ≤ ||x||² - |⟨x,y⟩|²/||y||²
          </ProofBlock>

          <ExampleBox title="ℓ²">
            O espaço das sequências quadrado-somáveis com produto interno: ⟨x,y⟩ = Σxₙyₙ*
          </ExampleBox>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Operadores Lineares</h2>

          <DefinitionBox title="Operador Limitado">
            Um operador linear T: H₁ → H₂ é limitado se:
            {`
              ||T|| = sup{||Tx|| : ||x|| ≤ 1} < ∞
            `}
          </DefinitionBox>

          <TheoremBox title="Teorema de Representação de Riesz">
            Para todo funcional linear limitado φ em um espaço de Hilbert H, existe um único y ∈ H
            tal que:
            {`
              φ(x) = ⟨x,y⟩ ∀x ∈ H
            `}
          </TheoremBox>

          <NoteBox>
            O teorema de Riesz é fundamental para a teoria de operadores e tem aplicações
            importantes em mecânica quântica.
          </NoteBox>
        </section>
      </div>
    </div>
  );
}
