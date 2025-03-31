import { render, screen } from '@testing-library/react';
import DefinitionBox from '../DefinitionBox';

describe('DefinitionBox', () => {
  it('deve renderizar o termo da definição', () => {
    render(
      <DefinitionBox term="Conjunto">
        Um conjunto é uma coleção de objetos distintos.
      </DefinitionBox>
    );
    expect(screen.getByText('Conjunto')).toBeInTheDocument();
  });

  it('deve renderizar o conteúdo da definição', () => {
    const content = 'Um conjunto é uma coleção de objetos distintos.';
    render(<DefinitionBox term="Conjunto">{content}</DefinitionBox>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('deve renderizar a fórmula quando fornecida', () => {
    render(
      <DefinitionBox 
        term="Conjunto"
        formula="A \\cup B"
      >
        Conteúdo da definição
      </DefinitionBox>
    );
    const mathDisplay = screen.getByTestId('math-display');
    expect(mathDisplay).toBeInTheDocument();
    expect(mathDisplay.innerHTML).toContain('cup');
  });

  it('não deve renderizar a fórmula quando não fornecida', () => {
    render(
      <DefinitionBox term="Conjunto">
        Conteúdo da definição
      </DefinitionBox>
    );
    expect(screen.queryByTestId('math-display')).not.toBeInTheDocument();
  });

  it('deve aplicar classes CSS personalizadas', () => {
    const { container } = render(
      <DefinitionBox 
        term="Conjunto"
        className="custom-class"
      >
        Conteúdo da definição
      </DefinitionBox>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
}); 