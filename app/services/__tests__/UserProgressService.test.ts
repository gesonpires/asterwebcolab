import { UserProgressService } from '../UserProgressService';
import { ActivityType } from '../../../app/models/UserProgress';

describe('UserProgressService', () => {
  let service: UserProgressService;
  const mockUserId = 'user123';

  beforeEach(() => {
    UserProgressService.resetInstance();
    service = UserProgressService.getInstance();
  });

  describe('updateActivity', () => {
    it('deve atualizar atividade do usuário', async () => {
      await service.updateActivity(mockUserId, {
        id: 'activity-1',
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module1',
        timeSpent: 1800,
        score: 85,
        timestamp: new Date()
      });

      const progress = await service.generateProgressReport(mockUserId);
      expect(progress?.stats.modulesCompleted).toBe(1);
      expect(progress?.stats.totalTimeSpent).toBe(1800);
    });
  });

  describe('calculateOverallProgress', () => {
    it('deve calcular progresso baseado em módulos completados', async () => {
      await service.updateActivity(mockUserId, {
        id: 'activity-2',
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module2',
        timeSpent: 2400,
        score: 90,
        timestamp: new Date()
      });

      const progress = await service.calculateOverallProgress(mockUserId);
      expect(progress).toBe(20); // 1/5 módulos = 20%
    });
  });

  describe('checkAchievements', () => {
    it('deve verificar conquista de primeiro módulo', async () => {
      await service.updateActivity(mockUserId, {
        id: 'activity-3',
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module3',
        timeSpent: 1500,
        score: 95,
        timestamp: new Date()
      });

      const achievements = await service.checkAchievements(mockUserId);
      expect(achievements).toHaveLength(1);
      expect(achievements[0].id).toBe('first_milestone');
    });

    it('deve verificar conquista de sequência de estudos', async () => {
      // Simular 7 dias de atividade
      const baseDate = new Date();
      for (let i = 0; i < 7; i++) {
        const activityDate = new Date(baseDate);
        activityDate.setDate(activityDate.getDate() - i);
        
        await service.updateActivity(mockUserId, {
          id: `activity-${4 + i}`,
          type: ActivityType.MODULE_COMPLETION,
          moduleId: `module${4 + i}`,
          timeSpent: 1800,
          score: 85,
          timestamp: activityDate
        });
      }

      const achievements = await service.checkAchievements(mockUserId);
      expect(achievements.some(a => a.id === 'streak_milestone')).toBe(true);
    });
  });

  describe('updateStreak', () => {
    it('deve iniciar streak com primeira atividade', async () => {
      await service.updateActivity(mockUserId, {
        id: 'activity-11',
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module11',
        timeSpent: 1800,
        score: 85,
        timestamp: new Date()
      });

      const streak = await service.updateStreak(mockUserId);
      expect(streak).toBe(1);
    });

    it('deve incrementar streak com atividades consecutivas', async () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      await service.updateActivity(mockUserId, {
        id: 'activity-12',
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module12',
        timeSpent: 1800,
        score: 85,
        timestamp: yesterday
      });

      await service.updateActivity(mockUserId, {
        id: 'activity-13',
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module13',
        timeSpent: 1800,
        score: 85,
        timestamp: today
      });

      const streak = await service.updateStreak(mockUserId);
      expect(streak).toBe(2);
    });
  });

  describe('generateProgressReport', () => {
    it('deve gerar relatório completo com todas as estatísticas', async () => {
      await service.updateActivity(mockUserId, {
        id: 'activity-14',
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module14',
        timeSpent: 1800,
        score: 85,
        timestamp: new Date()
      });

      const report = await service.generateProgressReport(mockUserId);
      expect(report?.stats.modulesCompleted).toBe(1);
      expect(report?.stats.quizzesTaken).toBe(0);
      expect(report?.stats.exercisesCompleted).toBe(0);
      expect(report?.stats.totalTimeSpent).toBe(1800);
    });
  });

  describe('getPersonalizedSuggestions', () => {
    it('deve sugerir práticas adicionais para melhorar pontuação', async () => {
      await service.updateActivity(mockUserId, {
        id: 'activity-15',
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module15',
        timeSpent: 1800,
        score: 75,
        timestamp: new Date()
      });

      const suggestions = await service.getPersonalizedSuggestions(mockUserId);
      expect(suggestions.nextModule).toBe('Módulo 2');
      expect(suggestions.recommendedPractice).toBe('Exercícios de reforço');
      expect(suggestions.achievementHints).toContain(
        'Pratique mais para melhorar sua pontuação média!'
      );
    });
  });
});
