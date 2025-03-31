import {
  UserProgress,
  Activity,
  ModuleProgress,
  TrailProgress,
  Achievement,
  ActivityType,
  UserGoal,
} from '../models/UserProgress';

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
    progress.stats.averageScore =
      (progress.stats.averageScore * (progress.stats.quizzesTaken - 1) +
        activity.score) /
      progress.stats.quizzesTaken;

    // Atualizar última atividade
    progress.stats.lastActiveDate = new Date();

    // Adicionar atividade ao histórico
    progress.activities.push(activity);

    // Recalcular progresso do módulo
    progress.overallProgress = await this.calculateOverallProgress(userId);

    // Verificar conquistas
    await this.checkAchievements(userId);

    // Atualizar streak
    await this.updateStreak(userId);

    this.progressData.set(userId, progress);
  }

  public async calculateOverallProgress(userId: string): Promise<number> {
    const progress = this.progressData.get(userId);
    if (!progress) return 0;

    // Simular 5 módulos no total do curso
    const totalModules = 5;
    return (progress.stats.modulesCompleted / totalModules) * 100;
  }

  public async checkAchievements(userId: string): Promise<Achievement[]> {
    const progress = this.progressData.get(userId);
    if (!progress) return [];

    const newAchievements: Achievement[] = [];

    // Verificar conquista de primeiro módulo
    if (
      progress.stats.modulesCompleted === 1 &&
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
      progress.stats.streakDays === 7 &&
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

    // Adicionar novas conquistas ao progresso
    progress.achievements.push(...newAchievements);
    this.progressData.set(userId, progress);

    return newAchievements;
  }

  public async updateStreak(userId: string): Promise<number> {
    const progress = this.progressData.get(userId);
    if (!progress) return 0;

    const lastActive = progress.stats.lastActiveDate;
    const today = new Date();
    const diffDays = Math.floor(
      (today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 1) {
      progress.stats.streakDays++;
    } else if (diffDays > 1) {
      progress.stats.streakDays = 1;
    }

    this.progressData.set(userId, progress);
    return progress.stats.streakDays;
  }

  public async generateProgressReport(
    userId: string
  ): Promise<UserProgress | null> {
    const progress = this.progressData.get(userId);
    if (!progress) return null;

    // Atualizar conquistas antes de gerar o relatório
    await this.checkAchievements(userId);

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

    const hints: string[] = [];

    // Sugestão baseada no progresso
    if (progress.stats.modulesCompleted < 5) {
      hints.push(
        `Complete mais ${5 - progress.stats.modulesCompleted} módulos para ganhar sua primeira conquista!`
      );
    }

    // Sugestão baseada na pontuação
    if (progress.stats.averageScore < 80) {
      hints.push('Pratique mais para melhorar sua pontuação média!');
    }

    // Sugestão baseada na streak
    if (progress.stats.streakDays < 7) {
      hints.push(
        `Mantenha sua sequência de estudos por ${7 - progress.stats.streakDays} dias para ganhar uma conquista especial!`
      );
    }

    return {
      nextModule: `Módulo ${progress.stats.modulesCompleted + 1}`,
      recommendedPractice:
        progress.stats.averageScore < 80
          ? 'Exercícios de reforço'
          : 'Próximo nível',
      achievementHints: hints,
    };
  }
}
