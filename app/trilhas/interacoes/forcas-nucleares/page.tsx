'use client';

import { motion } from 'framer-motion';
import { FaAtom } from 'react-icons/fa';

export default function ForcasNucleares() {
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
          <h1 className="text-4xl font-bold">Forças Nucleares</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">As forças do núcleo atômico</h2>
          <p className="text-lg mb-6">
            No interior dos átomos, existem forças ainda mais poderosas que governam o comportamento
            das partículas subatômicas. Estas são as forças nucleares, que atuam em escalas muito
            pequenas mas com intensidades extraordinárias.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Força Nuclear Forte</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Características</h3>
            <ul className="list-disc pl-6">
              <li className="text-lg mb-2">É a mais forte das forças fundamentais</li>
              <li className="text-lg mb-2">Mantém os prótons e nêutrons unidos no núcleo</li>
              <li className="text-lg mb-2">Atua apenas em distâncias muito pequenas</li>
              <li className="text-lg mb-2">É essencial para a estabilidade dos átomos</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Força Nuclear Fraca</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Características</h3>
            <ul className="list-disc pl-6">
              <li className="text-lg mb-2">
                Responsável por certos tipos de decaimento radioativo
              </li>
              <li className="text-lg mb-2">Atua em distâncias ainda menores que a força forte</li>
              <li className="text-lg mb-2">É mais fraca que a força eletromagnética</li>
              <li className="text-lg mb-2">Desempenha papel crucial na evolução estelar</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Importância no Universo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Fusão Nuclear</h3>
              <p className="text-lg">
                Processo que alimenta as estrelas e produz elementos químicos.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Radioatividade</h3>
              <p className="text-lg">
                Fenômeno que permite datação de materiais e aplicações médicas.
              </p>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Destaque</h3>
            <p className="text-lg">
              As forças nucleares são essenciais para a existência da matéria como a conhecemos,
              governando os processos que ocorrem no interior dos átomos e nas estrelas.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
