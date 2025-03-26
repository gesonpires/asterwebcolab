import { useState, useEffect } from 'react';

interface ModuleProgress {
  completed: boolean;
  lastAccessed: string | null;
}

interface TrailProgress {
  [moduleId: string]: ModuleProgress;
}

interface Progress {
  [trailId: string]: TrailProgress;
}

export function useProgress(trailId: number, moduleId?: string) {
  const [progress, setProgress] = useState<Progress>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const saveProgress = (newProgress: Progress) => {
    localStorage.setItem('userProgress', JSON.stringify(newProgress));
    setProgress(newProgress);
  };

  const markModuleAsCompleted = (moduleId: string) => {
    const newProgress = {
      ...progress,
      [trailId]: {
        ...progress[trailId],
        [moduleId]: {
          completed: true,
          lastAccessed: new Date().toISOString(),
        },
      },
    };
    saveProgress(newProgress);
  };

  const getModuleProgress = (moduleId: string): ModuleProgress => {
    return (
      progress[trailId]?.[moduleId] || {
        completed: false,
        lastAccessed: null,
      }
    );
  };

  const getTrailProgress = (): number => {
    if (!progress[trailId]) return 0;
    
    const modules = Object.values(progress[trailId]);
    const completedModules = modules.filter(module => module.completed).length;
    return Math.round((completedModules / modules.length) * 100);
  };

  return {
    progress,
    markModuleAsCompleted,
    getModuleProgress,
    getTrailProgress,
  };
} 