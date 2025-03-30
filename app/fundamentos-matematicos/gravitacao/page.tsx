'use client';

import React from 'react';
import { DefinitionBox, TheoremBox, ProofBlock, ExampleBox, NoteBox } from '../components';
import { FaSquareRootAlt } from 'react-icons/fa';

export default function GravitacaoPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
            <FaSquareRootAlt className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Gravitação
          </h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Geometria Diferencial</h2>

          <DefinitionBox title="Tensor Métrico">
            O tensor métrico gμν define a geometria do espaço-tempo e determina como medir distâncias e intervalos de tempo.
          </DefinitionBox>

          <TheoremBox title="Símbolos de Christoffel">
            Os símbolos de Christoffel são dados por:
            {`
              Γᵅμν = ½gᵅβ(∂μgβν + ∂νgβμ - ∂βgμν)
            `}
          </TheoremBox>

          <ExampleBox title="Métrica de Schwarzschild">
            A métrica de Schwarzschild para um corpo esfericamente simétrico:
            ds² = -(1-2GM/rc²)c²dt² + (1-2GM/rc²)⁻¹dr² + r²(dθ² + sin²θdφ²)
          </ExampleBox>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Equações de Campo</h2>

          <DefinitionBox title="Tensor de Einstein">
            O tensor de Einstein Gμν relaciona a geometria do espaço-tempo com a distribuição de matéria e energia:
            Gμν = Rμν - ½Rgμν
          </DefinitionBox>

          <TheoremBox title="Equações de Campo de Einstein">
            As equações de campo completas, incluindo a constante cosmológica:
            Gμν + Λgμν = 8πG/c⁴Tμν
          </TheoremBox>

          <ProofBlock>
            As equações podem ser derivadas do princípio de ação mínima aplicado à ação de Einstein-Hilbert:
            S = ∫d⁴x√(-g)(R - 2Λ) + Smatéria
          </ProofBlock>

          <NoteBox>
            A constante cosmológica Λ foi originalmente introduzida por Einstein para obter um universo estático,
            mas hoje é interpretada como energia escura.
          </NoteBox>
        </section>
      </div>
    </div>
  );
}
