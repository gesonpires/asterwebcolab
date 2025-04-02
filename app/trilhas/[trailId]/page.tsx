'use client';

import { useParams } from 'next/navigation';
import { trails } from '../data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function TrailPage() {
  const params = useParams();
  const trailId = Number(params.trailId);
  const trail = trails.find(t => t.id === trailId);

  if (!trail) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{trail.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={trail.image} 
            alt={trail.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{trail.description}</p>
          <div className="flex gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded">
              {trail.duration}
            </span>
            <span className={`px-3 py-1 rounded ${
              trail.level === 'Iniciante'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : trail.level === 'Intermediário'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }`}>
              {trail.level}
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Módulos</h2>
          <div className="space-y-4">
            {trail.modules.map(module => (
              <Link 
                key={module.id}
                href={`/trilhas/${trailId}/${module.slug}`}
                className="block border rounded-lg p-4 hover:shadow-md transition-shadow hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{module.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{module.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
