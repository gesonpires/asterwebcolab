// app/layout.tsx
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';
import { Providers } from './providers';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { defaultMetadata } from './config/metadata';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
            <Navigation />
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8" role="main">
              {children}
            </main>
            <Footer />
            <Analytics mode="production" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
