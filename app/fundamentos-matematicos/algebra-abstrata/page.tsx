'use client';

import React from 'react';
import { DefinitionBox, TheoremBox, ProofBlock, ExampleBox, NoteBox } from '../components';
import { FaSquareRootAlt } from 'react-icons/fa';

export default function AlgebraAbstrataPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
            <FaSquareRootAlt className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Álgebra Abstrata</h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Grupos</h2>

          <DefinitionBox term="Grupo">
            Um conjunto G com uma operação binária * que satisfaz:
            {`
              1. Fechamento: ∀a,b ∈ G, a*b ∈ G
              2. Associatividade: ∀a,b,c ∈ G, (a*b)*c = a*(b*c)
              3. Elemento neutro: ∃e ∈ G: ∀a ∈ G, a*e = e*a = a
              4. Inversos: ∀a ∈ G, ∃a⁻¹ ∈ G: a*a⁻¹ = a⁻¹*a = e
            `}
          </DefinitionBox>

          <TheoremBox title="Teorema de Lagrange">
            Se H é um subgrupo de um grupo finito G, então |H| divide |G|.
          </TheoremBox>

          <ExampleBox title="Grupo das Permutações">
            O conjunto S₃ de todas as permutações de 3 elementos forma um grupo não-abeliano.
          </ExampleBox>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Anéis e Corpos</h2>

          <DefinitionBox term="Anel">
            Um conjunto R com duas operações + e · que satisfaz:
            {`
              1. (R,+) é um grupo abeliano
              2. (R,·) é um monóide
              3. Distributividade: a·(b+c) = a·b + a·c
            `}
          </DefinitionBox>

          <TheoremBox title="Propriedades de Anéis">
            Para todo a,b,c em um anel R:
            {`
              1. a·0 = 0·a = 0
              2. a(-b) = (-a)b = -(ab)
              3. (-a)(-b) = ab
            `}
          </TheoremBox>

          <ProofBlock>Para o item 1: a·0 = a·(0+0) = a·0 + a·0 Portanto, a·0 = 0</ProofBlock>

          <NoteBox>
            A teoria de anéis e corpos é fundamental para a criptografia e teoria de códigos, além
            de ter aplicações importantes em física quântica.
          </NoteBox>
        </section>
      </div>
    </div>
  );
}
