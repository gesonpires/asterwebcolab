'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ImageContent {
  type: 'image';
  image: string;
  caption?: string;
}

interface VideoContent {
  type: 'video';
  url: string;
  title: string;
}

type Content = string | ImageContent | VideoContent;

interface ModuleContentProps {
  content: Content[];
}

export default function ModuleContent({ content }: ModuleContentProps) {
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (imageUrl: string) => {
    setLoadingImages(prev => ({ ...prev, [imageUrl]: false }));
  };

  return (
    <div className="prose dark:prose-invert max-w-none">
      {content.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.p>
          );
        }

        if ('image' in item) {
          setLoadingImages(prev => ({ ...prev, [item.image]: true }));
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative my-8"
            >
              {loadingImages[item.image] && (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg" />
              )}
              <div className="relative h-[400px] w-full">
                <Image
                  src={item.image}
                  alt={item.caption || 'Imagem do conteúdo'}
                  fill
                  className={`object-contain transition-opacity duration-300 ${
                    loadingImages[item.image] ? 'opacity-0' : 'opacity-100'
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  loading="lazy"
                  onLoadingComplete={() => handleImageLoad(item.image)}
                  quality={85}
                />
              </div>
              {item.caption && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                  {item.caption}
                </p>
              )}
            </motion.div>
          );
        }

        if ('url' in item) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="my-8"
            >
              <iframe
                src={item.url}
                title={item.title}
                className="w-full aspect-video rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          );
        }

        return null;
      })}
    </div>
  );
} 