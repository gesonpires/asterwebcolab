// app/layout.tsx
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';
import { Providers } from './providers';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASTERWebColab',
  description: 'Plataforma educacional para o ensino de Astronomia',
  metadataBase: new URL('https://asterwebcolab.vercel.app'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="container mx-auto px-4 py-8 flex-grow" role="main">
            {children}
          </main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
