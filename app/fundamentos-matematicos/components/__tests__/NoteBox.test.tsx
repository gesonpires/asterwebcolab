import { render, screen } from '@testing-library/react';
import NoteBox from '../NoteBox';

describe('NoteBox', () => {
  it('deve renderizar o título da nota', () => {
    render(
      <NoteBox title="Observação">
        Esta é uma observação importante.
      </NoteBox>
    );
    expect(screen.getByText('Observação')).toBeInTheDocument();
  });

  it('deve renderizar o conteúdo da nota', () => {
    const content = 'Esta é uma observação importante.';
    render(<NoteBox title="Observação">{content}</NoteBox>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('deve renderizar a fórmula quando fornecida', () => {
    render(
      <NoteBox 
        title="Observação"
        formula="x^2 + y^2 = z^2"
      >
        Conteúdo da nota
      </NoteBox>
    );
    const mathDisplay = screen.getByTestId('math-display');
    expect(mathDisplay).toBeInTheDocument();
    expect(mathDisplay.innerHTML).toContain('x');
  });

  it('não deve renderizar a fórmula quando não fornecida', () => {
    render(
      <NoteBox title="Observação">
        Conteúdo da nota
      </NoteBox>
    );
    expect(screen.queryByTestId('math-display')).not.toBeInTheDocument();
  });

  it('deve aplicar classes CSS personalizadas', () => {
    const { container } = render(
      <NoteBox 
        title="Observação"
        className="custom-class"
      >
        Conteúdo da nota
      </NoteBox>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
}); 