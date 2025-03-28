'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { moduleContents } from '@/app/trilhas/data/modules';


interface ImageContent {
  image: string;
  caption?: string;
}

interface VideoContent {
  video: string;
}

type Content = string | ImageContent | VideoContent;

interface ContentSection {
  title: string;
  content: Content[];
}

interface ModuleContentProps {
  trailId: number;
  moduleId: string;
}

const ModuleContent = ({ trailId, moduleId }: ModuleContentProps) => {
  const content = moduleContents[trailId]?.[moduleId];

  if (!content) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">
          Conteúdo em desenvolvimento...
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg dark:prose-invert max-w-none"
    >
      {content.sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {section.title}
          </h2>

          {section.content.map((item, itemIndex) => {
            if (typeof item === 'string') {
              return (
                <p
                  key={itemIndex}
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              );
            }

            if ('image' in item) {
              return (
                <div key={itemIndex} className="flex flex-col items-center my-6">
                  <div className="relative w-full h-64 md:h-96">
                    <Image
                      src={item.image}
                      alt={item.caption || ''}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {item.caption && (
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
                      {item.caption}
                    </p>
                  )}
                </div>
              );
            }

            if ('video' in item) {
              return (
                <div key={itemIndex} className="aspect-w-16 aspect-h-9 my-6">
                  <iframe
                    src={item.video}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  />
                </div>
              );
            }

            return null;
          })}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ModuleContent;
