'use client';

import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';

export default function ForcaEletromagnetica() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <FaLightbulb className="w-12 h-12 text-primary-600" />
          <h1 className="text-4xl font-bold">Força Eletromagnética</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">A força da tecnologia moderna</h2>
          <p className="text-lg mb-6">
            A força eletromagnética é responsável por praticamente todas as interações que vemos no
            dia a dia. Ela é a força que mantém os átomos unidos, permite que a eletricidade flua e
            é a base da tecnologia moderna.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Manifestações da força eletromagnética</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Eletricidade</h3>
              <p className="text-lg">O fluxo de elétrons que alimenta nossa sociedade moderna.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Magnetismo</h3>
              <p className="text-lg">A força que atrai ou repele materiais magnéticos.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Luz</h3>
              <p className="text-lg">A radiação eletromagnética que nos permite ver o mundo.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Ligações Químicas</h3>
              <p className="text-lg">Mantém os átomos unidos formando moléculas.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Importância na vida moderna</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-lg mb-2">Comunicação via rádio e internet</li>
            <li className="text-lg mb-2">Geração e distribuição de energia elétrica</li>
            <li className="text-lg mb-2">Dispositivos eletrônicos</li>
            <li className="text-lg mb-2">Imagens médicas (raios-X, ressonância magnética)</li>
          </ul>

          <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Destaque</h3>
            <p className="text-lg">
              A força eletromagnética é a base de toda a tecnologia moderna e é essencial para a
              vida como a conhecemos, desde a estrutura dos átomos até as comunicações globais.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
