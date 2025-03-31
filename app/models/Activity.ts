export enum ActivityType {
  MODULE_START = 'MODULE_START',
  MODULE_COMPLETION = 'MODULE_COMPLETION',
  EXERCISE_COMPLETION = 'EXERCISE_COMPLETION',
  QUIZ_COMPLETION = 'QUIZ_COMPLETION',
  TRAIL_START = 'TRAIL_START',
  TRAIL_COMPLETION = 'TRAIL_COMPLETION',
  ACHIEVEMENT_EARNED = 'ACHIEVEMENT_EARNED',
}

export interface Activity {
  type: ActivityType;
  moduleId?: string;
  trailId?: string;
  exerciseId?: string;
  quizId?: string;
  timeSpent: number;
  score?: number;
  timestamp: Date;
} 