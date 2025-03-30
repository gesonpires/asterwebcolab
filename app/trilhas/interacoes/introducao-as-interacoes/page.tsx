'use client';

import { motion } from 'framer-motion';
import { FaAtom } from 'react-icons/fa';

export default function IntroducaoAsInteracoes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <FaAtom className="w-12 h-12 text-primary-600" />
          <h1 className="text-4xl font-bold">Introdução às Interações</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">O que são as interações fundamentais?</h2>
          <p className="text-lg mb-6">
            As interações fundamentais são as forças básicas que governam todo o universo. Elas são
            responsáveis por todas as interações que observamos, desde o movimento dos planetas até
            o comportamento das partículas subatômicas.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Por que estudar as interações?</h2>
          <p className="text-lg mb-6">
            Compreender as interações fundamentais é essencial para entender como o universo
            funciona. Elas explicam desde fenômenos cotidianos até os processos mais complexos que
            ocorrem no cosmos.
          </p>

          <h2 className="text-2xl font-semibold mb-4">As quatro forças fundamentais</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-lg mb-2">Força Gravitacional</li>
            <li className="text-lg mb-2">Força Eletromagnética</li>
            <li className="text-lg mb-2">Força Nuclear Forte</li>
            <li className="text-lg mb-2">Força Nuclear Fraca</li>
          </ul>

          <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Destaque</h3>
            <p className="text-lg">
              Cada uma dessas forças tem características únicas e atua em diferentes escalas, desde
              o infinitamente pequeno até o infinitamente grande.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
