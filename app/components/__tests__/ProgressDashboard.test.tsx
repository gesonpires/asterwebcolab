import { render, screen } from '@testing-library/react';
import ProgressDashboard from '../ProgressDashboard';
import { UserProgressService } from '@/services/UserProgressService';

jest.mock('@/services/UserProgressService', () => ({
  UserProgressService: {
    getInstance: jest.fn().mockReturnValue({
      generateProgressReport: jest.fn().mockResolvedValue({
        stats: {
          modulesCompleted: 5,
          quizzesTaken: 10,
          exercisesCompleted: 15,
          totalTimeSpent: 3600,
          averageScore: 85,
          totalAchievements: 3,
        },
        achievements: [
          {
            id: 'first_module',
            title: 'Primeiro Marco',
            description: 'Completou 5 módulos',
            icon: '🎯',
          },
        ],
        overallProgress: 75,
        streak: 3,
        timeSpent: 3600,
      }),
      getPersonalizedSuggestions: jest.fn().mockResolvedValue({
        nextModule: 'module-6',
        recommendedPractice: 'practice-1',
        achievementHints: [
          'Complete mais 5 módulos para ganhar sua primeira conquista!',
          'Mantenha sua sequência de estudos por 7 dias para ganhar uma conquista especial!',
        ],
      }),
    }),
  },
}));

describe('ProgressDashboard', () => {
  const mockUserId = 'test-user-123';

  it('deve exibir o loading state inicialmente', () => {
    render(<ProgressDashboard userId={mockUserId} />);
    const loadingElement = screen.getByTestId('loading-spinner');
    expect(loadingElement).toBeInTheDocument();
    expect(loadingElement).toHaveAttribute('role', 'status');
  });

  it('deve carregar e exibir o progresso do usuário', async () => {
    render(<ProgressDashboard userId={mockUserId} />);

    // Verificar o estado inicial de carregamento
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

    // Verificar o progresso geral
    expect(await screen.findByTestId('overall-progress')).toHaveTextContent('75%');
    expect(await screen.findByTestId('modules-completed')).toHaveTextContent('5');

    // Verificar estatísticas
    expect(await screen.findByTestId('quizzes-taken')).toHaveTextContent('10');
    expect(await screen.findByTestId('exercises-completed')).toHaveTextContent('15');
    expect(await screen.findByTestId('average-score')).toHaveTextContent('85%');
    expect(await screen.findByTestId('total-achievements')).toHaveTextContent('3');

    // Verificar conquistas
    expect(await screen.findByTestId('achievement-first_module')).toBeInTheDocument();
    expect(screen.getByText('Primeiro Marco')).toBeInTheDocument();
    expect(screen.getByText('Completou 5 módulos')).toBeInTheDocument();

    // Verificar sugestões
    expect(await screen.findByTestId('suggestion-0')).toBeInTheDocument();
    expect(await screen.findByTestId('suggestion-1')).toBeInTheDocument();
  });

  it('deve exibir mensagem quando não há progresso', async () => {
    const mockService = UserProgressService.getInstance();
    (mockService.generateProgressReport as jest.Mock).mockResolvedValueOnce(
      null
    );

    render(<ProgressDashboard userId={mockUserId} />);

    await screen.findByText('Nenhum progresso encontrado.');
  });
});
