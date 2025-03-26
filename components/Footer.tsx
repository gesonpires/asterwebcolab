'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Navegação',
    links: [
      { name: 'Início', href: '/' },
      { name: 'Trilhas', href: '/trilhas' },
      { name: 'Cadernos', href: '/cadernos' },
      { name: 'Glossário', href: '/glossario' },
    ],
  },
  {
    title: 'Sobre',
    links: [
      { name: 'Nossa Equipe', href: '/sobre' },
      { name: 'Contato', href: '/contato' },
      { name: 'Política de Privacidade', href: '/privacidade' },
      { name: 'Termos de Uso', href: '/termos' },
    ],
  },
  {
    title: 'Social',
    links: [
      { name: 'Twitter', href: 'https://twitter.com/asterwebcolab' },
      { name: 'GitHub', href: 'https://github.com/asterwebcolab' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/asterwebcolab' },
      { name: 'YouTube', href: 'https://youtube.com/asterwebcolab' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerLinks.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ASTERWebColab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 