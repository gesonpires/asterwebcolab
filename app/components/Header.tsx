'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {isLoading && (
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            )}
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className={`transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoadingComplete={() => setIsLoading(false)}
              priority
              quality={90}
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Cadernos Digitais
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/trilhas"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Trilhas
            </Link>
            <Link
              href="/cadernos"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Cadernos
            </Link>
            <Link
              href="/glossario"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Glossário
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 