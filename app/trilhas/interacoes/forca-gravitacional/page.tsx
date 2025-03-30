'use client';

import { motion } from 'framer-motion';
import { FaWater } from 'react-icons/fa';

export default function ForcaGravitacional() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <FaWater className="w-12 h-12 text-primary-600" />
          <h1 className="text-4xl font-bold">Força Gravitacional</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">A força que nos mantém conectados</h2>
          <p className="text-lg mb-6">
            A gravidade é uma das forças mais familiares em nossa vida cotidiana. É ela que mantém
            os planetas em órbita ao redor do Sol, a Lua ao redor da Terra e nos mantém firmes no
            chão.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Características da gravidade</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-lg mb-2">É sempre uma força de atração</li>
            <li className="text-lg mb-2">Atua entre qualquer objeto que possua massa</li>
            <li className="text-lg mb-2">É a mais fraca das forças fundamentais</li>
            <li className="text-lg mb-2">Tem alcance infinito</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Manifestações da gravidade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">No Sistema Solar</h3>
              <p className="text-lg">Mantém os planetas em suas órbitas e o sistema solar unido.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Na Terra</h3>
              <p className="text-lg">Mantém a atmosfera e os oceanos na superfície do planeta.</p>
            </div>
          </div>

          <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Destaque</h3>
            <p className="text-lg">
              A gravidade é a força que molda a estrutura do universo em grande escala, desde a
              formação de galáxias até o movimento dos planetas.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
