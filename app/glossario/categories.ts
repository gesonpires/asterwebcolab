export interface TermCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export const categories: TermCategory[] = [
  {
    id: 'solar-system',
    name: 'Sistema Solar',
    icon: '🌍',
    color: 'bg-blue-500',
    description: 'Conceitos relacionados ao nosso sistema planetário'
  },
  {
    id: 'stars',
    name: 'Estrelas',
    icon: '⭐',
    color: 'bg-yellow-500',
    description: 'Tudo sobre as estrelas e seus ciclos de vida'
  },
  {
    id: 'galaxies',
    name: 'Galáxias',
    icon: '🌌',
    color: 'bg-purple-500',
    description: 'Estruturas cósmicas e suas características'
  },
  {
    id: 'cosmology',
    name: 'Cosmologia',
    icon: '🌠',
    color: 'bg-indigo-500',
    description: 'O estudo do universo como um todo'
  }
]; 