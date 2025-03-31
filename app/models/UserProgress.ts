// Tipos de atividade que podem ser rastreadas
export enum ActivityType {
  MODULE_COMPLETION = 'MODULE_COMPLETION',
  QUIZ_COMPLETION = 'QUIZ_COMPLETION',
  EXERCISE_COMPLETION = 'EXERCISE_COMPLETION',
  STREAK = 'STREAK',
}

// Interface para uma única atividade
export interface Activity {
  id: string;
  type: ActivityType;
  moduleId?: string;
  quizId?: string;
  exerciseId?: string;
  score: number;
  timeSpent: number;
  timestamp: Date;
}

// Interface para conquistas
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  criteria: {
    type: ActivityType;
    count: number;
  };
  earnedAt: Date;
}

// Interface para progresso em um módulo específico
export interface ModuleProgress {
  moduleId: string;
  started: Date;
  lastAccessed: Date;
  completed: boolean;
  activities: Activity[];
  score: number;
  timeSpent: number; // em minutos
}

// Interface para progresso em uma trilha
export interface TrailProgress {
  trailId: string;
  modules: ModuleProgress[];
  started: Date;
  lastAccessed: Date;
  completed: boolean;
  overallProgress: number; // porcentagem de conclusão
}

// Interface principal do progresso do usuário
export interface UserProgress {
  userId: string;
  stats: {
    modulesCompleted: number;
    quizzesTaken: number;
    exercisesCompleted: number;
    totalTimeSpent: number;
    averageScore: number;
    streakDays: number;
    lastActiveDate: Date;
  };
  achievements: Achievement[];
  activities: Activity[];
  overallProgress: number;
}

// Interface para metas do usuário
export interface UserGoal {
  id: string;
  userId: string;
  type: ActivityType;
  target: number;
  current: number;
  startDate: Date;
  endDate: Date;
  completed: boolean;
}
