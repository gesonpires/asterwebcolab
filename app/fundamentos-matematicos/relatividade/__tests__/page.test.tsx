import { render, screen } from '@testing-library/react';
import RelatividadePage from '../page';

describe('RelatividadePage', () => {
  it('deve renderizar o título da página', () => {
    render(<RelatividadePage />);
    expect(screen.getByText('Relatividade')).toBeInTheDocument();
  });

  it('deve renderizar as transformações de Lorentz', () => {
    render(<RelatividadePage />);
    expect(screen.getByText('Transformações de Lorentz')).toBeInTheDocument();
    expect(screen.getByText(/As transformações de Lorentz são um conjunto de equações que descrevem como as medidas de espaço e tempo de um evento mudam entre referenciais inerciais diferentes/i)).toBeInTheDocument();
  });

  it('deve renderizar o espaço-tempo de Minkowski', () => {
    render(<RelatividadePage />);
    expect(screen.getByText('Espaço-Tempo de Minkowski')).toBeInTheDocument();
    expect(screen.getByText(/A métrica de Minkowski define o intervalo espaço-temporal invariante/i)).toBeInTheDocument();
  });

  it('deve renderizar a definição do intervalo espaço-temporal', () => {
    render(<RelatividadePage />);
    expect(screen.getByText(/ds² = c²dt² - dx² - dy² - dz²/i)).toBeInTheDocument();
  });

  it('deve renderizar a nota sobre invariância', () => {
    render(<RelatividadePage />);
    expect(screen.getByText(/A invariância do intervalo espaço-temporal é fundamental para entender a causalidade na relatividade especial/i)).toBeInTheDocument();
  });

  it('deve renderizar o exemplo de dilatação do tempo', () => {
    render(<RelatividadePage />);
    expect(screen.getByText('Dilatação do Tempo')).toBeInTheDocument();
    expect(screen.getByText(/Um múon com tempo de vida próprio de 2.2μs viaja a 0.995c/i)).toBeInTheDocument();
  });
}); 