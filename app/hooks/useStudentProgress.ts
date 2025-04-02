import { useState, useEffect } from 'react';

interface ModuleProgress {
  completed: boolean;
  lastAccessed: Date;
}

interface TrailProgress {
  [moduleId: string]: ModuleProgress;
}

interface StudentProgress {
  [trailId: string]: TrailProgress;
}

export const useStudentProgress = () => {
  const [progress, setProgress] = useState<StudentProgress>({});

  useEffect(() => {
    // Carrega o progresso do localStorage ao iniciar
    const savedProgress = localStorage.getItem('studentProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const saveProgress = (newProgress: StudentProgress) => {
    localStorage.setItem('studentProgress', JSON.stringify(newProgress));
    setProgress(newProgress);
  };

  const getTrailProgress = (trailId: string): TrailProgress => {
    return progress[trailId] || {};
  };

  const getTrailCompletionPercentage = (trailId: string, totalModules: number): number => {
    const trailProgress = getTrailProgress(trailId);
    const completedModules = Object.values(trailProgress).filter(m => m.completed).length;
    return (completedModules / totalModules) * 100;
  };

  const markModuleAsCompleted = (trailId: string, moduleId: string) => {
    const newProgress = {
      ...progress,
      [trailId]: {
        ...progress[trailId],
        [moduleId]: {
          completed: true,
          lastAccessed: new Date(),
        },
      },
    };
    saveProgress(newProgress);
  };

  const updateModuleAccess = (trailId: string, moduleId: string) => {
    const newProgress = {
      ...progress,
      [trailId]: {
        ...progress[trailId],
        [moduleId]: {
          ...progress[trailId]?.[moduleId],
          lastAccessed: new Date(),
        },
      },
    };
    saveProgress(newProgress);
  };

  return {
    progress,
    getTrailProgress,
    getTrailCompletionPercentage,
    markModuleAsCompleted,
    updateModuleAccess,
  };
}; 