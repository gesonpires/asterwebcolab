'use client';

import { motion } from 'framer-motion';
import { FaBomb } from 'react-icons/fa';

const MotionDiv = motion.div;

export default function NucleossinteseExplosiva() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex items-center mb-8">
        <FaBomb className="text-4xl text-red-500 mr-4" />
        <h1 className="text-4xl font-bold">Nucleossíntese Explosiva</h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Eventos Explosivos no Universo</h2>
        <p className="text-lg mb-6">
          A nucleossíntese explosiva ocorre em eventos astronômicos violentos, como supernovas e
          colisões de estrelas de nêutrons, onde condições extremas permitem a formação de elementos
          mais pesados que o ferro.
        </p>
        <div className="bg-red-100 dark:bg-red-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Condições Extremas</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Temperatura: bilhões de graus Kelvin</li>
            <li>Densidade: superior a 10¹⁰ kg/m³</li>
            <li>Fluxo intenso de nêutrons</li>
            <li>Duração: frações de segundo a alguns segundos</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tipos de Supernovas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Supernova Tipo Ia</h3>
            <p>
              Ocorre em sistemas binários quando uma anã branca acreta matéria de sua companheira
              até atingir o limite de Chandrasekhar, resultando em uma explosão termonuclear.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Supernova Tipo II</h3>
            <p>
              Resultado do colapso do núcleo de uma estrela massiva, produzindo uma onda de choque
              que ejeta as camadas externas e sintetiza elementos pesados.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Processos de Captura de Nêutrons</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Processo-r (rápido)</h3>
            <p>
              Ocorre em ambientes ricos em nêutrons, como supernovas e fusões de estrelas de
              nêutrons, onde múltiplos nêutrons são capturados antes do decaimento beta.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Processo-s (lento)</h3>
            <p>
              Acontece em estrelas gigantes vermelhas, onde nêutrons são capturados mais lentamente,
              permitindo o decaimento beta entre capturas.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Processo-p (próton)</h3>
            <p>
              Envolve a captura de prótons em ambientes ricos em prótons, como camadas externas de
              supernovas, produzindo isótopos raros.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Elementos Produzidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Supernovas</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Elementos do grupo do ferro</li>
              <li>Elementos pesados até o urânio</li>
              <li>Isótopos radioativos</li>
              <li>Elementos do processo-r</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Kilonova</h3>
            <p>
              Fusão de estrelas de nêutrons que produz grandes quantidades de elementos pesados,
              incluindo ouro, platina e outros metais raros através do processo-r.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Importância para o Universo</h2>
        <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg">
          <p className="text-lg mb-4">A nucleossíntese explosiva é fundamental para:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Produção de elementos mais pesados que o ferro</li>
            <li>Enriquecimento químico das galáxias</li>
            <li>Formação de elementos radioativos</li>
            <li>Origem dos metais preciosos</li>
            <li>Compreensão da evolução química do universo</li>
          </ul>
        </div>
      </section>
    </MotionDiv>
  );
}
