'use client';

import React from 'react';
import { DefinitionBox, TheoremBox, ProofBlock, ExampleBox, NoteBox } from '../components';
import { FaInfinity } from 'react-icons/fa';

export default function RelatividadePage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
            <FaInfinity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Relatividade
          </h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Transformações de Lorentz</h2>

          <DefinitionBox title="Transformações de Lorentz">
            As transformações de Lorentz são um conjunto de equações que descrevem como as medidas de espaço e tempo de um evento mudam entre referenciais inerciais diferentes.
          </DefinitionBox>

          <TheoremBox title="Transformação de Lorentz em uma dimensão">
            Para um movimento ao longo do eixo x com velocidade v, as transformações são:
            {`
              x' = γ(x - vt)
              t' = γ(t - vx/c²)
              onde γ = 1/√(1 - v²/c²)
            `}
          </TheoremBox>

          <ProofBlock>
            A derivação parte dos postulados da relatividade especial e da invariância da velocidade da luz.
          </ProofBlock>

          <ExampleBox title="Dilatação do Tempo">
            Um múon com tempo de vida próprio de 2.2μs viaja a 0.995c. Calcule o tempo de vida observado na Terra.
            Solução: t = γt₀ = (1/√(1-0.995²))×2.2μs ≈ 22μs
          </ExampleBox>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Espaço-Tempo de Minkowski</h2>

          <DefinitionBox title="Métrica de Minkowski">
            A métrica de Minkowski define o intervalo espaço-temporal invariante:
            ds² = c²dt² - dx² - dy² - dz²
          </DefinitionBox>

          <NoteBox>
            A invariância do intervalo espaço-temporal é fundamental para entender a causalidade na relatividade especial.
          </NoteBox>
        </section>
      </div>
    </div>
  );
}
