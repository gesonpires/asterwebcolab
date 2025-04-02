'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ModuleContentSkeleton from './ModuleContentSkeleton';

interface ImageContent {
  image: string;
  caption?: string;
}

interface VideoContent {
  video: string;
}

type Content = string | ImageContent | VideoContent;

interface ModuleContentProps {
  content: Content[];
}

export default function ModuleContent({ content }: ModuleContentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (imageUrl: string) => {
    setLoadingImages(prev => ({ ...prev, [imageUrl]: false }));
  };

  if (isLoading) {
    return <ModuleContentSkeleton />;
  }

  return (
    <div className="prose dark:prose-invert max-w-none prose-gray">
      {content.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <div
              key={index}
              className="mb-4 text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          );
        }

        if ('image' in item) {
          return (
            <div key={index} className="my-4">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.caption || ''}
                  fill
                  className="object-cover rounded-lg"
                  onLoad={() => handleImageLoad(item.image)}
                />
              </div>
              {item.caption && (
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-2 text-center">
                  {item.caption}
                </p>
              )}
            </div>
          );
        }

        if ('video' in item) {
          return (
            <div key={index} className="my-4">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={item.video}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
} 