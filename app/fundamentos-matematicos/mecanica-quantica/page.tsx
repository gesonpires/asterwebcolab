'use client';

import React from 'react';
import { DefinitionBox, TheoremBox, ProofBlock, ExampleBox, NoteBox } from '../components';
import { FaAtom } from 'react-icons/fa';

export default function MecanicaQuanticaPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
            <FaAtom className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Mecânica Quântica
          </h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Espaços de Hilbert</h2>

          <DefinitionBox title="Espaço de Hilbert">
            Um espaço de Hilbert é um espaço vetorial completo com produto interno, onde os estados quânticos são representados como vetores.
          </DefinitionBox>

          <TheoremBox title="Propriedades do Produto Interno">
            Para vetores |ψ⟩, |φ⟩ em um espaço de Hilbert:
            {`
              1. ⟨ψ|φ⟩ = ⟨φ|ψ⟩* (conjugado)
              2. ⟨ψ|aφ₁ + bφ₂⟩ = a⟨ψ|φ₁⟩ + b⟨ψ|φ₂⟩ (linearidade)
              3. ⟨ψ|ψ⟩ ≥ 0, com igualdade se e somente se |ψ⟩ = 0
            `}
          </TheoremBox>

          <ExampleBox title="Base Ortonormal">
            Os autoestados de spin de um elétron {|↑⟩, |↓⟩} formam uma base ortonormal:
            ⟨↑|↑⟩ = ⟨↓|↓⟩ = 1, ⟨↑|↓⟩ = ⟨↓|↑⟩ = 0
          </ExampleBox>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Operadores Lineares</h2>

          <DefinitionBox title="Operador Hermitiano">
            Um operador A é hermitiano se A = A†, onde A† é o adjunto de A.
            Operadores hermitianos representam observáveis físicos.
          </DefinitionBox>

          <TheoremBox title="Autovalores de Operadores Hermitianos">
            Os autovalores de um operador hermitiano são sempre reais.
          </TheoremBox>

          <ProofBlock>
            Seja |ψ⟩ um autovetor de A com autovalor λ:
            A|ψ⟩ = λ|ψ⟩
            ⟨ψ|A|ψ⟩ = ⟨ψ|A†|ψ⟩ = λ*⟨ψ|ψ⟩
            Portanto, λ = λ*
          </ProofBlock>

          <NoteBox>
            A medição de um observável sempre resulta em um de seus autovalores,
            com probabilidade dada pelo quadrado da amplitude do estado na base dos autovetores.
          </NoteBox>
        </section>
      </div>
    </div>
  );
}
