import { render, screen } from '@testing-library/react';
import TheoremBox from '../TheoremBox';

describe('TheoremBox', () => {
  it('deve renderizar o título do teorema', () => {
    render(
      <TheoremBox title="Teorema de Pitágoras">
        Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos.
      </TheoremBox>
    );
    expect(screen.getByText('Teorema de Pitágoras')).toBeInTheDocument();
  });

  it('deve renderizar o conteúdo do teorema', () => {
    const content = 'Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos.';
    render(<TheoremBox title="Teorema de Pitágoras">{content}</TheoremBox>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('deve renderizar a demonstração quando fornecida', () => {
    const proof = 'Demonstração do teorema...';
    render(
      <TheoremBox 
        title="Teorema de Pitágoras"
        proof={proof}
      >
        Conteúdo do teorema
      </TheoremBox>
    );
    expect(screen.getByText('Demonstração')).toBeInTheDocument();
    expect(screen.getByText(proof)).toBeInTheDocument();
  });

  it('não deve renderizar a seção de demonstração quando não fornecida', () => {
    render(
      <TheoremBox title="Teorema de Pitágoras">
        Conteúdo do teorema
      </TheoremBox>
    );
    expect(screen.queryByText('Demonstração')).not.toBeInTheDocument();
  });

  it('deve aplicar classes CSS personalizadas', () => {
    const { container } = render(
      <TheoremBox 
        title="Teorema de Pitágoras"
        className="custom-class"
      >
        Conteúdo do teorema
      </TheoremBox>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
}); 