import { render, screen } from '@testing-library/react';
import MathDisplay from '../MathDisplay';

describe('MathDisplay', () => {
  it('deve renderizar uma fórmula matemática simples', () => {
    render(<MathDisplay formula="x^2 + y^2 = z^2" />);
    const container = screen.getByTestId('math-display');
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('bg-gray-50');
  });

  it('deve renderizar uma fórmula com fração', () => {
    render(<MathDisplay formula="\\frac{1}{2}" />);
    const container = screen.getByTestId('math-display');
    expect(container).toBeInTheDocument();
    expect(container.innerHTML).toContain('frac');
  });

  it('deve renderizar uma fórmula com índice', () => {
    render(<MathDisplay formula="x_{i}" />);
    const container = screen.getByTestId('math-display');
    expect(container).toBeInTheDocument();
    expect(container.innerHTML).toContain('x');
  });

  it('deve renderizar uma fórmula com símbolos gregos', () => {
    render(<MathDisplay formula="\\alpha + \\beta = \\gamma" />);
    const container = screen.getByTestId('math-display');
    expect(container).toBeInTheDocument();
    expect(container.innerHTML).toContain('alpha');
  });

  it('deve renderizar uma fórmula com matriz', () => {
    render(<MathDisplay formula="\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}" />);
    const container = screen.getByTestId('math-display');
    expect(container).toBeInTheDocument();
    expect(container.innerHTML).toContain('pmatrix');
  });

  it('deve exibir o label quando fornecido', () => {
    const label = 'Equação de Einstein';
    render(<MathDisplay formula="E = mc^2" label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('deve lidar com erros de sintaxe LaTeX', () => {
    render(<MathDisplay formula="\\invalid{command}" />);
    const container = screen.getByTestId('math-display');
    expect(container).toBeInTheDocument();
    expect(container.innerHTML).toContain('invalid');
  });

  it('deve aplicar classes personalizadas', () => {
    const customClass = 'custom-math';
    render(<MathDisplay formula="E = mc^2" className={customClass} />);
    const container = screen.getByTestId('math-display');
    expect(container).toHaveClass(customClass);
  });
}); 