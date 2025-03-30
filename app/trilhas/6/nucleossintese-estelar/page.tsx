'use client';

import { motion } from 'framer-motion';
import { FaStarOfLife } from 'react-icons/fa';

const MotionDiv = motion.div;

export default function NucleossinteseEstelar() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex items-center mb-8">
        <FaStarOfLife className="text-4xl text-yellow-500 mr-4" />
        <h1 className="text-4xl font-bold">Nucleossíntese Estelar</h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">O Interior das Estrelas</h2>
        <p className="text-lg mb-6">
          A nucleossíntese estelar é o processo pelo qual as estrelas produzem elementos mais
          pesados a partir do hidrogênio e hélio. Este processo é fundamental para a evolução
          química do universo.
        </p>
        <div className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Condições no Núcleo Estelar</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Temperatura: 15-100 milhões de Kelvin</li>
            <li>Densidade: 10⁴ a 10⁶ kg/m³</li>
            <li>Pressão extremamente alta</li>
            <li>Campo gravitacional intenso</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cadeia de Reações</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">1. Cadeia Próton-Próton</h3>
            <p>
              Processo principal em estrelas como o Sol, onde quatro prótons se fundem para formar
              um núcleo de hélio através de uma série de etapas intermediárias.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">2. Ciclo CNO</h3>
            <p>
              Dominante em estrelas mais massivas, usa carbono, nitrogênio e oxigênio como
              catalisadores para converter hidrogênio em hélio mais eficientemente.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">3. Processo Triplo-Alfa</h3>
            <p>
              Fusão de três núcleos de hélio para formar carbono, crucial para a produção de
              elementos mais pesados e para a vida como conhecemos.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Elementos Produzidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Sequência Principal</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Hélio (a partir do hidrogênio)</li>
              <li>Carbono (a partir do hélio)</li>
              <li>Nitrogênio (via ciclo CNO)</li>
              <li>Oxigênio (fusão de carbono)</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Estágios Avançados</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Neônio (fusão de oxigênio)</li>
              <li>Magnésio (fusão de carbono)</li>
              <li>Silício (fusão de oxigênio)</li>
              <li>Ferro (limite da fusão)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Evolução Estelar</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Estrelas de Baixa Massa</h3>
            <p>
              Como o Sol, produzem principalmente hélio e terminam como anãs brancas após passar
              pela fase de gigante vermelha.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Estrelas Massivas</h3>
            <p>
              Produzem elementos mais pesados em camadas concêntricas, como uma cebola, até
              desenvolverem um núcleo de ferro que eventualmente colapsa.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Importância Cosmológica</h2>
        <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg">
          <p className="text-lg mb-4">A nucleossíntese estelar é crucial para:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Enriquecimento químico do meio interestelar</li>
            <li>Formação de planetas rochosos</li>
            <li>Origem dos elementos necessários à vida</li>
            <li>Evolução química das galáxias</li>
            <li>Compreensão da história do universo</li>
          </ul>
        </div>
      </section>
    </MotionDiv>
  );
}
