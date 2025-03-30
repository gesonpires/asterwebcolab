'use client';

import React from 'react';
import { DefinitionBox, TheoremBox, ProofBlock, ExampleBox, NoteBox } from '../components';
import { FaVectorSquare } from 'react-icons/fa';

export default function AlgebraLinearPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
            <FaVectorSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Álgebra Linear</h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Espaços Vetoriais</h2>

          <DefinitionBox term="Espaço Vetorial">
            Um conjunto V com operações de adição e multiplicação por escalar que satisfazem os
            axiomas de espaço vetorial.
          </DefinitionBox>

          <TheoremBox title="Propriedades de Espaços Vetoriais">
            Para todo u, v, w ∈ V e a, b ∈ ℝ:
            {`
              1. u + v = v + u (comutatividade)
              2. (u + v) + w = u + (v + w) (associatividade)
              3. ∃ 0 ∈ V: v + 0 = v (elemento neutro)
              4. ∀ v ∈ V, ∃ -v: v + (-v) = 0 (inverso aditivo)
              5. a(bv) = (ab)v (associatividade da multiplicação)
              6. 1v = v (elemento identidade)
              7. a(u + v) = au + av (distributividade)
              8. (a + b)v = av + bv (distributividade)
            `}
          </TheoremBox>

          <ExampleBox title="R² como Espaço Vetorial">
            O conjunto ℝ² com as operações usuais de adição e multiplicação por escalar é um espaço
            vetorial.
          </ExampleBox>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Transformações Lineares</h2>

          <DefinitionBox term="Transformação Linear">
            Uma função T: V → W é linear se:
            {`
              1. T(u + v) = T(u) + T(v)
              2. T(av) = aT(v)
            `}
          </DefinitionBox>

          <TheoremBox title="Núcleo e Imagem">
            Seja T: V → W uma transformação linear. Então:
            {`
              1. ker(T) é um subespaço de V
              2. im(T) é um subespaço de W
              3. dim(V) = dim(ker(T)) + dim(im(T))
            `}
          </TheoremBox>

          <ProofBlock>
            Para o item 1, sejam u, v ∈ ker(T) e a ∈ ℝ: T(u + v) = T(u) + T(v) = 0 + 0 = 0 T(av) =
            aT(v) = a0 = 0
          </ProofBlock>

          <NoteBox>
            O teorema do núcleo e imagem é fundamental para entender a estrutura das transformações
            lineares e suas aplicações em física.
          </NoteBox>
        </section>
      </div>
    </div>
  );
}
