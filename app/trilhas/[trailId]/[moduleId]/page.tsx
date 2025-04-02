'use client';

import { useParams } from 'next/navigation';
import { trails } from '../../data';
import { moduleContents } from '../../data/modules';
import { notFound } from 'next/navigation';
import ModuleContent from '@/components/trails/ModuleContent';

export default function ModulePage() {
  const params = useParams();
  const trailId = Number(params.trailId);
  const moduleSlug = params.moduleId as string;
  
  const trail = trails.find(t => t.id === trailId);
  if (!trail) {
    notFound();
  }

  const module = trail.modules.find(m => m.slug === moduleSlug);
  if (!module) {
    notFound();
  }

  const content = moduleContents[trailId]?.[moduleSlug];
  if (!content) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{module.title}</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{module.description}</p>
        {content.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h2>
            <ModuleContent content={section.content} />
          </div>
        ))}
      </div>
    </div>
  );
}
