// app/trilhas/page.tsx
import { generateMetadata } from '../config/metadata';
import type { Metadata } from 'next';
import TrailsContent from './TrailsContent';

export const metadata: Metadata = generateMetadata(
  'Trilhas de Aprendizado',
  'Explore nossas trilhas de aprendizado em Astronomia, desde conceitos básicos até tópicos avançados.',
  '/images/trails/hero.jpg',
  '/trilhas'
);

export default function TrailsPage() {
  return <TrailsContent />;
}
