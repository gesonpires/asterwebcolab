'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeacherResource, getResourceIcon } from '../data/topics';

interface ResourceDownloaderProps {
  resources: TeacherResource[];
  onDownload?: (resourceId: string) => void;
}

const ResourceDownloader = ({ resources, onDownload }: ResourceDownloaderProps) => {
  const [downloadingResource, setDownloadingResource] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [filter, setFilter] = useState<TeacherResource['type'] | 'all'>('all');

  const handleDownload = async (resource: TeacherResource) => {
    setDownloadingResource(resource.title);
    setDownloadProgress(0);

    try {
      // Simulate download progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setDownloadProgress(i);
      }

      // In a real app, this would be an actual download
      const response = await fetch(resource.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = resource.title;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      onDownload?.(resource.title);
    } catch (error) {
      console.error('Error downloading resource:', error);
    } finally {
      setDownloadingResource(null);
      setDownloadProgress(0);
    }
  };

  const filteredResources = resources.filter(
    resource => filter === 'all' || resource.type === filter
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Recursos Disponíveis
        </h3>

        <div className="flex flex-wrap gap-2">
          {(['all', 'document', 'presentation', 'activity', 'assessment'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                filter === type
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {type === 'all' ? 'Todos' : (
                <>
                  {getResourceIcon(type)} {type.charAt(0).toUpperCase() + type.slice(1)}
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">
                    {getResourceIcon(resource.type)}
                  </span>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {resource.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(resource)}
                  disabled={downloadingResource !== null}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                >
                  {downloadingResource === resource.title ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {downloadProgress}%
                    </span>
                  ) : (
                    'Download'
                  )}
                </button>
              </div>

              {downloadingResource === resource.title && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4"
                >
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-600">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredResources.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 py-8"
          >
            Nenhum recurso encontrado com o filtro selecionado.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default ResourceDownloader; 