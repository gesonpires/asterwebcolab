import { UserProgressService } from '../UserProgressService';
import { Activity, ActivityType } from '@/app/models/Activity';

describe('UserProgressService', () => {
  let service: typeof UserProgressService;
  const mockUserId = 'test-user-123';

  beforeEach(() => {
    service = UserProgressService.getInstance();
  });

  describe('updateActivity', () => {
    it('deve atualizar progresso existente', async () => {
      const activity: Activity = {
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module-1',
        timeSpent: 900,
        score: 85,
        timestamp: new Date(),
      };

      await service.updateActivity(mockUserId, activity);
      const progress = await service.generateProgressReport(mockUserId);

      expect(progress?.stats.modulesCompleted).toBe(1);
      expect(progress?.stats.totalTimeSpent).toBe(900);
    });
  });

  describe('calculateOverallProgress', () => {
    it('deve retornar 0 para usuário sem progresso', async () => {
      const progress = await service.calculateOverallProgress('new-user');
      expect(progress).toBe(0);
    });

    it('deve calcular progresso baseado em módulos completados', async () => {
      const activity: Activity = {
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module-1',
        timeSpent: 900,
        score: 85,
        timestamp: new Date(),
      };

      await service.updateActivity(mockUserId, activity);
      const progress = await service.calculateOverallProgress(mockUserId);

      expect(progress).toBe(20); // 1/5 módulos = 20%
    });
  });

  describe('checkAchievements', () => {
    it('deve verificar conquista de primeiro módulo', async () => {
      const activity: Activity = {
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module-1',
        timeSpent: 900,
        score: 85,
        timestamp: new Date(),
      };

      await service.updateActivity(mockUserId, activity);
      const achievements = await service.checkAchievements(mockUserId);

      expect(achievements).toHaveLength(1);
      expect(achievements[0].id).toBe('first_module');
    });

    it('deve verificar conquista de sequência de estudos', async () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      await service.updateActivity(mockUserId, {
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module-1',
        timeSpent: 900,
        score: 85,
        timestamp: yesterday,
      });

      await service.updateActivity(mockUserId, {
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module-2',
        timeSpent: 900,
        score: 85,
        timestamp: today,
      });

      const achievements = await service.checkAchievements(mockUserId);
      expect(achievements.some(a => a.id === 'study_streak')).toBe(true);
    });
  });

  describe('updateStreak', () => {
    it('deve iniciar streak com primeira atividade', async () => {
      const activity: Activity = {
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module-1',
        timeSpent: 900,
        score: 85,
        timestamp: new Date(),
      };

      await service.updateActivity(mockUserId, activity);
      const streak = await service.updateStreak(mockUserId);

      expect(streak).toBe(1);
    });

    it('deve incrementar streak com atividades consecutivas', async () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      await service.updateActivity(mockUserId, {
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module-1',
        timeSpent: 900,
        score: 85,
        timestamp: yesterday,
      });

      await service.updateActivity(mockUserId, {
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module-2',
        timeSpent: 900,
        score: 85,
        timestamp: today,
      });

      const streak = await service.updateStreak(mockUserId);
      expect(streak).toBe(2);
    });
  });

  describe('generateProgressReport', () => {
    it('deve gerar relatório completo com todas as estatísticas', async () => {
      const activity: Activity = {
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module-1',
        timeSpent: 1800,
        score: 85,
        timestamp: new Date(),
      };

      await service.updateActivity(mockUserId, activity);
      const report = await service.generateProgressReport(mockUserId);

      expect(report?.stats.modulesCompleted).toBe(1);
      expect(report?.stats.quizzesTaken).toBe(0);
      expect(report?.stats.exercisesCompleted).toBe(0);
      expect(report?.stats.totalTimeSpent).toBe(1800);
    });
  });

  describe('getPersonalizedSuggestions', () => {
    it('deve sugerir práticas adicionais para melhorar pontuação', async () => {
      const activity: Activity = {
        type: ActivityType.MODULE_COMPLETION,
        moduleId: 'module-1',
        timeSpent: 900,
        score: 65,
        timestamp: new Date(),
      };

      await service.updateActivity(mockUserId, activity);
      const suggestions = await service.getPersonalizedSuggestions(mockUserId);

      expect(suggestions.nextModule).toBe('module-2');
      expect(suggestions.recommendedPractice).toBe('practice-1');
      expect(suggestions.achievementHints).toContain(
        'Complete mais exercícios práticos para melhorar sua pontuação!'
      );
    });
  });
});
