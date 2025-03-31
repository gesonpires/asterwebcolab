import { render, screen, waitFor } from '@testing-library/react';
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
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('deve carregar e exibir o progresso do usuário', async () => {
    render(<ProgressDashboard userId={mockUserId} />);

    // Verificar se os dados estão sendo exibidos corretamente
    await waitFor(() => {
      expect(screen.getByText('75%')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('60 horas')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('10')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('15')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('85%')).toBeInTheDocument();
    });

    // Verificar se as conquistas são exibidas
    expect(screen.getByText('Primeiro Marco')).toBeInTheDocument();
    expect(screen.getByText('Completou 5 módulos')).toBeInTheDocument();

    // Verificar se as sugestões são exibidas
    expect(
      screen.getByText(
        'Complete mais 5 módulos para ganhar sua primeira conquista!'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Mantenha sua sequência de estudos por 7 dias para ganhar uma conquista especial!'
      )
    ).toBeInTheDocument();
  });

  it('deve exibir mensagem quando não há progresso', async () => {
    const mockService = UserProgressService.getInstance();
    (mockService.generateProgressReport as jest.Mock).mockResolvedValueOnce(
      null
    );

    render(<ProgressDashboard userId={mockUserId} />);

    await waitFor(() => {
      expect(
        screen.getByText('Nenhum progresso encontrado.')
      ).toBeInTheDocument();
    });
  });
});
