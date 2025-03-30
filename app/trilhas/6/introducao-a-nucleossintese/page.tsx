'use client';

import { motion } from 'framer-motion';
import { FaAtom } from 'react-icons/fa';

const MotionDiv = motion.div;

export default function IntroducaoNucleossintese() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex items-center mb-8">
        <FaAtom className="text-4xl text-blue-500 mr-4" />
        <h1 className="text-4xl font-bold">Introdução à Nucleossíntese</h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">O que é Nucleossíntese?</h2>
        <p className="text-lg mb-6">
          A nucleossíntese é o processo de criação de novos núcleos atômicos a partir de nucleons
          (prótons e nêutrons) pré-existentes. Este processo é responsável pela formação de todos os
          elementos químicos que conhecemos no universo.
        </p>
        <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Tipos Principais de Nucleossíntese</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Nucleossíntese Primordial (Big Bang)</li>
            <li>Nucleossíntese Estelar</li>
            <li>Nucleossíntese Explosiva (Supernovas)</li>
            <li>Nucleossíntese por Captura de Nêutrons</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Importância Histórica</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Teoria B²FH</h3>
            <p>
              Em 1957, Margaret Burbidge, Geoffrey Burbidge, William Fowler e Fred Hoyle publicaram
              um trabalho revolucionário explicando como os elementos são sintetizados nas estrelas.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Alpher, Bethe e Gamow</h3>
            <p>
              O trabalho αβγ de 1948 estabeleceu as bases para a compreensão da nucleossíntese
              primordial durante o Big Bang.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Conceitos Fundamentais</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Abundância dos Elementos</h3>
            <p>
              O universo é composto principalmente por hidrogênio (75%) e hélio (23%), com todos os
              outros elementos constituindo apenas 2% da matéria bariônica.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Energia de Ligação Nuclear</h3>
            <p>
              A energia necessária para manter os núcleons unidos no núcleo atômico, fundamental
              para entender a estabilidade dos elementos e as reações nucleares.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Processos de Fusão e Fissão</h3>
            <p>
              Reações nucleares que podem liberar ou absorver energia, dependendo da massa dos
              núcleos envolvidos e da curva de energia de ligação por nucleon.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Importância para a Ciência Moderna</h2>
        <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg">
          <p className="text-lg mb-4">
            O estudo da nucleossíntese é fundamental para diversas áreas da ciência:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Compreensão da evolução do universo</li>
            <li>Desenvolvimento de modelos estelares</li>
            <li>Estudo da origem dos elementos químicos</li>
            <li>Avanços em física nuclear e de partículas</li>
            <li>Aplicações em astrofísica nuclear</li>
          </ul>
        </div>
      </section>
    </MotionDiv>
  );
}
