'use client';

import React from 'react';
import { DefinitionBox, TheoremBox, ProofBlock, ExampleBox, NoteBox } from '../components';
import { FaWaveSquare } from 'react-icons/fa';

export default function GeometriaDiferencialPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
            <FaWaveSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Geometria Diferencial
          </h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Variedades</h2>

          <DefinitionBox term="Variedade Diferencial">
            Um espaço topológico M com um atlas de cartas (Uᵢ,φᵢ) tais que:
            {`
              1. M = ∪Uᵢ
              2. φᵢ: Uᵢ → ℝⁿ é um homeomorfismo
              3. φᵢ∘φⱼ⁻¹ é C∞
            `}
          </DefinitionBox>

          <TheoremBox title="Teorema de Whitney">
            Toda variedade diferenciável n-dimensional pode ser imersa em ℝ²ⁿ⁺¹.
          </TheoremBox>

          <ExampleBox title="Esfera S²">
            A esfera unitária em ℝ³ é uma variedade 2-dimensional com atlas:
            {`
              U₁ = S² - {(0,0,1)}
              U₂ = S² - {(0,0,-1)}
              φ₁(x,y,z) = (x/(1-z), y/(1-z))
              φ₂(x,y,z) = (x/(1+z), y/(1+z))
            `}
          </ExampleBox>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Conexões e Curvatura</h2>

          <DefinitionBox term="Conexão de Levi-Civita">
            Uma conexão ∇ em uma variedade riemanniana (M,g) é de Levi-Civita se:
            {`
              1. ∇g = 0 (métrica)
              2. T(X,Y) = ∇XY - ∇YX - [X,Y] = 0 (sem torção)
            `}
          </DefinitionBox>

          <TheoremBox title="Tensor de Curvatura">
            O tensor de curvatura R é definido por:
            {`
              R(X,Y)Z = ∇X∇YZ - ∇Y∇XZ - ∇[X,Y]Z
            `}
          </TheoremBox>

          <ProofBlock>
            A curvatura mede o não-comutativismo da derivada covariante: R(X,Y)Z = ∇X∇YZ - ∇Y∇XZ -
            ∇[X,Y]Z = ∇X∇YZ - ∇Y∇XZ - ∇XY - ∇YX
          </ProofBlock>

          <NoteBox>
            A geometria diferencial é fundamental para a teoria da relatividade geral, onde a
            curvatura do espaço-tempo é determinada pela distribuição de matéria e energia.
          </NoteBox>
        </section>
      </div>
    </div>
  );
}
