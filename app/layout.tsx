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
      <body>
          <Providers>
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8" role="main">
                {children}
              </main>
              <Footer />
              <Analytics />
            </div>
          </Providers>
      </body>
    </html>
  );
}
