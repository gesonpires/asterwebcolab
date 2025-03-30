'use client';

import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';

export default function InteracoesNaVidaCotidiana() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <FaLeaf className="w-12 h-12 text-primary-600" />
          <h1 className="text-4xl font-bold">Interações na Vida Cotidiana</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">As forças em nosso dia a dia</h2>
          <p className="text-lg mb-6">
            As interações na natureza não se limitam apenas às forças fundamentais. Elas também se
            manifestam em processos biológicos, climáticos e ecológicos que nos rodeiam
            constantemente.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Exemplos Práticos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Fenômenos Atmosféricos</h3>
              <p className="text-lg">
                Formação de nuvens, chuva e ventos são resultado de interações entre diferentes
                forças na atmosfera.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Processos Biológicos</h3>
              <p className="text-lg">
                A fotossíntese e a respiração celular são exemplos de interações químicas essenciais
                para a vida.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Ciclos Naturais</h3>
              <p className="text-lg">
                O ciclo da água e o ciclo do carbono são exemplos de interações complexas na
                natureza.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Ecossistemas</h3>
              <p className="text-lg">
                As interações entre diferentes espécies e seu ambiente formam ecossistemas
                complexos.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Aplicações Tecnológicas</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-lg mb-2">Energia renovável (solar, eólica)</li>
            <li className="text-lg mb-2">Agricultura sustentável</li>
            <li className="text-lg mb-2">Tratamento de água</li>
            <li className="text-lg mb-2">Reciclagem de materiais</li>
          </ul>

          <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Destaque</h3>
            <p className="text-lg">
              Compreender as interações na natureza é crucial para desenvolver tecnologias
              sustentáveis e preservar o equilíbrio do nosso planeta.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
