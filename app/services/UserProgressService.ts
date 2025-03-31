import {
  UserProgress,
  Activity,
  ActivityType,
  Achievement,
  ModuleProgress,
  TrailProgress,
  UserGoal,
} from '../models/UserProgress';

// Interfaces que serão usadas em futuras implementações
/* eslint-disable @typescript-eslint/no-unused-vars */
interface ModuleProgress {
  moduleId: string;
  completed: boolean;
  score: number;
  timeSpent: number;
}

interface TrailProgress {
  trailId: string;
  completed: boolean;
  modulesCompleted: number;
  totalModules: number;
  timeSpent: number;
}

interface UserGoal {
  type: 'module' | 'trail' | 'time';
  target: string;
  deadline?: Date;
  completed: boolean;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: Date;
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export class UserProgressService {
  private static instance: UserProgressService;
  private progressData: Map<string, UserProgress>;

  private constructor() {
    this.progressData = new Map();
  }

  public static getInstance(): UserProgressService {
    if (!UserProgressService.instance) {
      UserProgressService.instance = new UserProgressService();
    }
    return UserProgressService.instance;
  }

  // For testing purposes only
  public static resetInstance(): void {
    UserProgressService.instance = new UserProgressService();
  }

  private initializeUserProgress(userId: string): UserProgress {
    return {
      userId,
      stats: {
        modulesCompleted: 0,
        quizzesTaken: 0,
        exercisesCompleted: 0,
        totalTimeSpent: 0,
        averageScore: 0,
        streakDays: 0,
        lastActiveDate: new Date(),
      },
      achievements: [],
      activities: [],
      overallProgress: 0,
    };
  }

  public async updateActivity(
    userId: string,
    activity: Activity
  ): Promise<void> {
    let progress =
      this.progressData.get(userId) || this.initializeUserProgress(userId);

    // Atualizar estatísticas baseado no tipo de atividade
    switch (activity.type) {
      case ActivityType.MODULE_COMPLETION:
        progress.stats.modulesCompleted++;
        break;
      case ActivityType.QUIZ_COMPLETION:
        progress.stats.quizzesTaken++;
        break;
      case ActivityType.EXERCISE_COMPLETION:
        progress.stats.exercisesCompleted++;
        break;
    }

    // Atualizar tempo total e média
    progress.stats.totalTimeSpent += activity.timeSpent;
    if (activity.score !== undefined && progress.stats.quizzesTaken > 0) {
      progress.stats.averageScore =
        (progress.stats.averageScore * (progress.stats.quizzesTaken - 1) +
          activity.score) /
        progress.stats.quizzesTaken;
    }

    // Atualizar última atividade
    progress.stats.lastActiveDate = activity.timestamp;

    // Adicionar atividade ao histórico
    progress.activities.push(activity);

    // Recalcular progresso do módulo
    progress.overallProgress = await this.calculateOverallProgress(userId);

    // Verificar conquistas
    const newAchievements = await this.checkAchievements(userId);
    progress.achievements.push(...newAchievements);

    // Atualizar streak
    progress.stats.streakDays = await this.updateStreak(userId);

    this.progressData.set(userId, progress);
  }

  public async calculateOverallProgress(userId: string): Promise<number> {
    const progress = this.progressData.get(userId);
    if (!progress) return 0;

    // Simular 5 módulos no total do curso
    const totalModules = 5;
    return Math.min((progress.stats.modulesCompleted / totalModules) * 100, 100);
  }

  public async checkAchievements(userId: string): Promise<Achievement[]> {
    const progress = this.progressData.get(userId);
    if (!progress) return [];

    const newAchievements: Achievement[] = [];

    // Verificar conquista de primeiro módulo
    if (
      progress.stats.modulesCompleted >= 1 &&
      !progress.achievements.some(a => a.id === 'first_milestone')
    ) {
      newAchievements.push({
        id: 'first_milestone',
        title: 'Primeiro Marco',
        description: 'Completou seu primeiro módulo',
        icon: '🎯',
        criteria: {
          type: ActivityType.MODULE_COMPLETION,
          count: 1,
        },
        earnedAt: new Date(),
      });
    }

    // Verificar conquista de streak
    if (
      progress.stats.streakDays >= 7 &&
      !progress.achievements.some(a => a.id === 'streak_milestone')
    ) {
      newAchievements.push({
        id: 'streak_milestone',
        title: 'Sequência de Estudos',
        description: 'Manteve uma sequência de estudos por 7 dias',
        icon: '🔥',
        criteria: {
          type: ActivityType.STREAK,
          count: 7,
        },
        earnedAt: new Date(),
      });
    }

    return newAchievements;
  }

  public async updateStreak(userId: string): Promise<number> {
    const progress = this.progressData.get(userId);
    if (!progress) return 0;

    const activities = progress.activities.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );

    if (activities.length === 0) return 0;

    let streak = 1;
    let currentDate = new Date(activities[0].timestamp);
    currentDate.setHours(0, 0, 0, 0);

    for (let i = 1; i < activities.length; i++) {
      const activityDate = new Date(activities[i].timestamp);
      activityDate.setHours(0, 0, 0, 0);

      const diffDays = Math.floor(
        (currentDate.getTime() - activityDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diffDays === 1) {
        streak++;
        currentDate = activityDate;
      } else if (diffDays > 1) {
        break;
      }
    }

    return streak;
  }

  public async generateProgressReport(
    userId: string
  ): Promise<UserProgress | null> {
    const progress = this.progressData.get(userId);
    if (!progress) return null;

    // Atualizar conquistas antes de gerar o relatório
    const newAchievements = await this.checkAchievements(userId);
    progress.achievements.push(...newAchievements);

    return progress;
  }

  public async getPersonalizedSuggestions(userId: string): Promise<{
    nextModule: string;
    recommendedPractice: string;
    achievementHints: string[];
  }> {
    const progress = this.progressData.get(userId);
    if (!progress) {
      return {
        nextModule: 'Módulo 1',
        recommendedPractice: 'Exercícios básicos',
        achievementHints: [
          'Complete seu primeiro módulo para ganhar uma conquista!',
        ],
      };
    }

    const nextModuleNumber = progress.stats.modulesCompleted + 1;
    const hints: string[] = [];

    // Sugestão baseada no progresso
    if (progress.stats.averageScore < 80) {
      hints.push('Pratique mais para melhorar sua pontuação média!');
    }

    return {
      nextModule: `Módulo ${nextModuleNumber}`,
      recommendedPractice: 'Exercícios de reforço',
      achievementHints: hints,
    };
  }
}
