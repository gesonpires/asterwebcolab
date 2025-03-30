'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Trilhas', href: '/trilhas' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Cadernos', href: '/cadernos' },
  { name: 'Fundamentos Matemáticos', href: '/fundamentos-matematicos' },
  { name: 'Glossário', href: '/glossario' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Previne scroll quando menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg w-full">
      <div className="max-w-7xl mx-auto w-full">
        <nav className="relative px-4 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo - sempre visível */}
            <div className="flex-none">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="ASTER Logo"
                  className="h-8 w-8"
                  width={32}
                  height={32}
                  priority
                />
                <span className="text-lg font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  ASTERWebColab
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Controls - sempre visível em telas menores */}
            <div className="flex items-center gap-2 flex-none">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                aria-label="Menu"
              >
                <svg
                  className="h-6 w-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-white dark:bg-gray-800 z-50">
              <nav className="container mx-auto px-4 py-6">
                <div className="flex flex-col gap-4">
                  {navigation.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
