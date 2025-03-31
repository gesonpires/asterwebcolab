import { render, screen } from '@testing-library/react';
import ExampleBox from '../ExampleBox';

describe('ExampleBox', () => {
  it('deve renderizar o título do exemplo', () => {
    render(
      <ExampleBox title="Exemplo 1">
        Este é um exemplo de conteúdo.
      </ExampleBox>
    );
    const title = screen.getByTestId('example-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Exemplo 1');
  });

  it('deve renderizar o conteúdo do exemplo', () => {
    const content = 'Este é um exemplo de conteúdo.';
    render(<ExampleBox title="Exemplo 1">{content}</ExampleBox>);
    const contentElement = screen.getByTestId('example-content');
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveTextContent(content);
  });

  it('deve renderizar a solução quando fornecida', () => {
    const solution = 'x^2 + y^2 = z^2';
    render(
      <ExampleBox 
        title="Exemplo 1"
        solution={solution}
      >
        Conteúdo do exemplo
      </ExampleBox>
    );
    const solutionSection = screen.getByTestId('example-solution');
    const solutionLabel = screen.getByTestId('solution-label');
    expect(solutionSection).toBeInTheDocument();
    expect(solutionLabel).toHaveTextContent('Solução');
  });

  it('não deve renderizar a seção de solução quando não fornecida', () => {
    render(
      <ExampleBox title="Exemplo 1">
        Conteúdo do exemplo
      </ExampleBox>
    );
    expect(screen.queryByTestId('example-solution')).not.toBeInTheDocument();
  });

  it('deve renderizar a fórmula quando fornecida', () => {
    const formula = 'E = mc^2';
    render(
      <ExampleBox 
        title="Exemplo 1"
        formula={formula}
      >
        Conteúdo do exemplo
      </ExampleBox>
    );
    expect(screen.getByTestId('example-formula')).toBeInTheDocument();
  });

  it('deve aplicar classes CSS personalizadas', () => {
    const customClass = 'custom-class';
    render(
      <ExampleBox 
        title="Exemplo 1"
        className={customClass}
      >
        Conteúdo do exemplo
      </ExampleBox>
    );
    const container = screen.getByTestId('example-box');
    expect(container).toHaveClass(customClass);
  });
}); 