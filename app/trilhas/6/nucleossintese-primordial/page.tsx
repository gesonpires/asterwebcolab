'use client';

import React from 'react';
import { FaStarOfLife } from 'react-icons/fa';

export default function NucleossintesePrimordial() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-slide-up">
        <div className="flex items-center mb-8">
          <FaStarOfLife className="text-4xl text-purple-500 mr-4" />
          <h1 className="text-4xl font-bold">Nucleossíntese Primordial</h1>
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">O Big Bang e os Primeiros Elementos</h2>
          <p className="text-lg mb-6">
            A nucleossíntese primordial ocorreu nos primeiros minutos após o Big Bang, quando o
            universo estava extremamente quente e denso. Este processo foi responsável pela formação
            dos elementos mais leves do universo.
          </p>
          <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Condições Necessárias</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Temperatura: bilhões de graus Kelvin</li>
              <li>Densidade: aproximadamente 10⁹ kg/m³</li>
              <li>Tempo: primeiros 3-20 minutos após o Big Bang</li>
              <li>Expansão rápida do universo</li>
            </ul>
          </div>
        </section>
        {/* ... rest of your content ... */}
      </div>
    </div>
  );
}
