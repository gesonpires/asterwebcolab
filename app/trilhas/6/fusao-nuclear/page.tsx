'use client';

import { motion } from 'framer-motion';
import { FaAtom } from 'react-icons/fa';

const MotionDiv = motion.div;

export default function FusaoNuclear() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex items-center mb-8">
        <FaAtom className="text-4xl text-blue-500 mr-4" />
        <h1 className="text-4xl font-bold">Fusão Nuclear</h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">O Processo de Fusão Nuclear</h2>
        <p className="text-lg mb-4">
          A fusão nuclear é o processo pelo qual núcleos atômicos leves se combinam para formar
          núcleos mais pesados, liberando uma quantidade imensa de energia no processo. Este é o
          mesmo mecanismo que alimenta as estrelas, incluindo nosso Sol.
        </p>
        <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Condições Necessárias</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Temperaturas extremamente altas (milhões de graus Celsius)</li>
            <li>Alta pressão para manter o plasma confinado</li>
            <li>Densidade suficiente de núcleos atômicos</li>
            <li>Tempo de confinamento adequado</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Reações de Fusão Mais Comuns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Deutério-Trítio (D-T)</h3>
            <p>
              A reação mais promissora para reatores de fusão, combinando isótopos de hidrogênio
              para formar hélio e um nêutron, liberando 17.6 MeV de energia.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Próton-Próton</h3>
            <p>
              A principal reação que ocorre no Sol, onde quatro prótons se fundem para formar um
              núcleo de hélio através de uma série de etapas.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Aplicações e Perspectivas</h2>
        <p className="text-lg mb-6">
          A fusão nuclear representa uma das mais promissoras fontes de energia limpa para o futuro
          da humanidade. Alguns dos principais projetos e aplicações incluem:
        </p>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              ITER (International Thermonuclear Experimental Reactor)
            </h3>
            <p>
              O maior projeto internacional de fusão nuclear, visando demonstrar a viabilidade
              comercial da fusão como fonte de energia.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Reatores de Confinamento Magnético</h3>
            <p>
              Tokamaks e Stellarators são os principais designs de reatores que usam campos
              magnéticos para confinar o plasma.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Fusão por Confinamento Inercial</h3>
            <p>
              Utiliza lasers de alta potência ou feixes de partículas para comprimir e aquecer o
              combustível até atingir as condições de fusão.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Desafios e Futuro</h2>
        <div className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg">
          <p className="text-lg mb-4">
            Apesar dos avanços significativos, ainda existem diversos desafios técnicos e
            científicos a serem superados:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Manutenção do plasma em condições estáveis por longos períodos</li>
            <li>Desenvolvimento de materiais resistentes às condições extremas</li>
            <li>Aumento da eficiência energética do processo</li>
            <li>Redução dos custos de construção e operação</li>
          </ul>
        </div>
      </section>
    </MotionDiv>
  );
}
