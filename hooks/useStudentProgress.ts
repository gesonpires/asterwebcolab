import { useState, useEffect } from 'react';

interface ModuleProgress {
  completed: boolean;
  quizScore?: number;
}

interface TrailProgress {
  [moduleId: string]: ModuleProgress;
}

interface StudentProgress {
  [trailId: number]: TrailProgress;
}

export const useStudentProgress = () => {
  const [progress, setProgress] = useState<StudentProgress>({});

  useEffect(() => {
    // Carregar progresso do localStorage ao iniciar
    const savedProgress = localStorage.getItem('studentProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const updateModuleProgress = (
    trailId: number,
    moduleId: string,
    completed: boolean,
    quizScore?: number
  ) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        [trailId]: {
          ...prev[trailId],
          [moduleId]: {
            completed,
            quizScore
          }
        }
      };

      // Salvar no localStorage
      localStorage.setItem('studentProgress', JSON.stringify(newProgress));
      return newProgress;
    });
  };

  const getModuleProgress = (trailId: number, moduleId: string): ModuleProgress | null => {
    return progress[trailId]?.[moduleId] || null;
  };

  const getTrailProgress = (trailId: number): TrailProgress => {
    return progress[trailId] || {};
  };

  const getTrailCompletionPercentage = (trailId: number, totalModules: number): number => {
    const trailProgress = progress[trailId];
    if (!trailProgress) return 0;

    const completedModules = Object.values(trailProgress).filter(
      module => module.completed
    ).length;

    return (completedModules / totalModules) * 100;
  };

  const markModuleAsCompleted = (trailId: number, moduleId: string) => {
    updateModuleProgress(trailId, moduleId, true);
  };

  return {
    progress,
    updateModuleProgress,
    getModuleProgress,
    getTrailProgress,
    getTrailCompletionPercentage,
    markModuleAsCompleted
  };
}; 