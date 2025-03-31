'use client';

import MathDisplay from '../components/MathDisplay';

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Teste de Renderização de Equações
      </h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl mb-2">Equação Simples:</h2>
          <MathDisplay math="x^2 + 2x + 1 = 0" />
        </div>

        <div>
          <h2 className="text-xl mb-2">Fração:</h2>
          <MathDisplay math="\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}" />
        </div>

        <div>
          <h2 className="text-xl mb-2">Integral:</h2>
          <MathDisplay math="\\int_{a}^{b} f(x) dx" />
        </div>
      </div>
    </div>
  );
}
