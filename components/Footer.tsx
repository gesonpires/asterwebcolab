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
    <footer 
      className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
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
              <ul className="space-y-2" role="list">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-md px-2 py-1 inline-block"
                      aria-label={`${link.name}${link.href.startsWith('http') ? ' (abre em nova aba)' : ''}`}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
          <p className="text-gray-800 dark:text-gray-200">
            Plataforma de ensino de astronomia e física
          </p>
          <p className="text-gray-800 dark:text-gray-200">
            © 2024 AsterWeb. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 