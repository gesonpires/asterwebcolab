'use client';

import { motion } from 'framer-motion';
import { FaFlask, FaAtom } from 'react-icons/fa';

const MotionDiv = motion.div;

export default function AplicacoesImplicacoes() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex items-center mb-8">
        <FaFlask className="text-4xl text-indigo-500 mr-4" />
        <h1 className="text-4xl font-bold">Aplicações e Implicações</h1>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Aplicações na Ciência Moderna</h2>
        <p className="text-lg mb-6">
          O estudo da nucleossíntese tem diversas aplicações práticas e implicações teóricas que
          impactam diferentes áreas da ciência e tecnologia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Astrofísica</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Modelagem de evolução estelar</li>
              <li>Previsão de eventos astronômicos</li>
              <li>Estudo da composição galáctica</li>
              <li>Datação de objetos celestes</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Física Nuclear</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Desenvolvimento de reatores de fusão</li>
              <li>Pesquisa de novos elementos</li>
              <li>Estudo de reações nucleares</li>
              <li>Tecnologias de energia limpa</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Impacto na Tecnologia</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Energia Nuclear</h3>
            <p>
              Compreender a nucleossíntese é fundamental para o desenvolvimento de tecnologias de
              fusão nuclear controlada, que promete ser uma fonte de energia limpa e praticamente
              inesgotável.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Medicina Nuclear</h3>
            <p>
              O conhecimento dos processos de nucleossíntese contribui para a produção de isótopos
              radioativos utilizados em diagnóstico e tratamento de doenças.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Materiais Avançados</h3>
            <p>
              A compreensão da formação de elementos permite o desenvolvimento de novos materiais
              com propriedades específicas para aplicações tecnológicas.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Implicações para a Vida</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Origem da Vida</h3>
            <p>
              A nucleossíntese explica a origem dos elementos essenciais para a vida, como carbono,
              nitrogênio, oxigênio e fósforo, fornecendo base para estudos de astrobiologia.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Sustentabilidade</h3>
            <p>
              O entendimento dos ciclos de elementos no universo contribui para o desenvolvimento de
              tecnologias sustentáveis e gestão de recursos naturais.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Perspectivas Futuras</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Pesquisa e Desenvolvimento</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Novos métodos de produção de energia</li>
              <li>Síntese de elementos superpesados</li>
              <li>Tecnologias de propulsão espacial</li>
              <li>Materiais para exploração espacial</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Desafios</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Controle de fusão nuclear</li>
              <li>Produção eficiente de energia</li>
              <li>Gestão de resíduos nucleares</li>
              <li>Segurança nuclear</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Impacto na Sociedade</h2>
        <div className="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-lg">
          <p className="text-lg mb-4">
            O estudo da nucleossíntese tem implicações significativas para:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Desenvolvimento de fontes de energia limpa</li>
            <li>Avanços em tratamentos médicos</li>
            <li>Compreensão da nossa origem cósmica</li>
            <li>Inovações tecnológicas</li>
            <li>Educação científica e conscientização ambiental</li>
          </ul>
        </div>
      </section>
    </MotionDiv>
  );
}
