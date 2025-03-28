'use client';

import { MathDisplay, TheoremBox, DefinitionBox, ExampleBox, NoteBox } from '../components';

export default function RelatividadePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Relatividade</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Transformações de Lorentz</h2>
        <p className="mb-4">
          As transformações de Lorentz são as equações fundamentais que descrevem como as coordenadas 
          espaço-temporais se transformam entre diferentes referenciais inerciais em movimento relativo.
        </p>
        
        <TheoremBox title="Transformações de Lorentz">
          Para um referencial S' movendo-se com velocidade v em relação a S ao longo do eixo x:
        </TheoremBox>
        
        <MathDisplay 
          formula="x' = \gamma(x - vt)"
          label="Transformação da coordenada x"
        />
        <MathDisplay 
          formula="t' = \gamma(t - \frac{vx}{c^2})"
          label="Transformação da coordenada t"
        />
        <MathDisplay 
          formula="y' = y"
          label="Transformação da coordenada y"
        />
        <MathDisplay 
          formula="z' = z"
          label="Transformação da coordenada z"
        />
        
        <NoteBox type="info">
          Onde γ (fator de Lorentz) é dado por:
        </NoteBox>
        
        <MathDisplay 
          formula="\gamma = \frac{1}{\sqrt{1 - \frac{v^2}{c^2}}}"
          label="Fator de Lorentz"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Métrica de Minkowski</h2>
        <p className="mb-4">
          A métrica de Minkowski é a estrutura matemática que define a geometria do espaço-tempo 
          na relatividade especial.
        </p>
        
        <DefinitionBox term="Métrica de Minkowski">
          A métrica de Minkowski é definida pelo tensor métrico ημν:
        </DefinitionBox>
        
        <MathDisplay 
          formula="\eta_{\mu\nu} = (-1,1,1,1)"
          label="Tensor Métrico de Minkowski"
        />
        
        <NoteBox type="tip">
          O elemento de linha é dado por:
        </NoteBox>
        
        <MathDisplay 
          formula="ds^2 = -c^2dt^2 + dx^2 + dy^2 + dz^2"
          label="Elemento de linha"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Equações de Einstein</h2>
        <p className="mb-4">
          As equações de campo de Einstein são as equações fundamentais da relatividade geral, 
          descrevendo como a matéria curva o espaço-tempo.
        </p>
        
        <TheoremBox title="Equações de Campo de Einstein">
          As equações de campo de Einstein relacionam a curvatura do espaço-tempo com a distribuição 
          de matéria e energia:
        </TheoremBox>
        
        <MathDisplay 
          formula="R_{\mu\nu} - \frac{1}{2}Rg_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}"
          label="Equações de Einstein"
        />
        
        <NoteBox type="warning">
          Onde:
          <ul className="space-y-2 ml-6 mt-2">
            <li className="flex items-center gap-2">
              <MathDisplay formula="R_{\mu\nu}" display={false} />
              <span>é o tensor de Ricci</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-medium">R</span>
              <span>é a curvatura escalar</span>
            </li>
            <li className="flex items-center gap-2">
              <MathDisplay formula="g_{\mu\nu}" display={false} />
              <span>é o tensor métrico</span>
            </li>
            <li className="flex items-center gap-2">
              <MathDisplay formula="\Lambda" display={false} />
              <span>é a constante cosmológica</span>
            </li>
            <li className="flex items-center gap-2">
              <MathDisplay formula="T_{\mu\nu}" display={false} />
              <span>é o tensor de energia-momento</span>
            </li>
          </ul>
        </NoteBox>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Exemplos</h2>
        
        <ExampleBox title="Dilatação do Tempo">
          Um relógio em movimento marca o tempo mais lentamente que um relógio em repouso.
        </ExampleBox>
        
        <MathDisplay 
          formula="\Delta t' = \gamma\Delta t"
          label="Fórmula da dilatação do tempo"
        />
        
        <ExampleBox title="Contração do Comprimento">
          Um objeto em movimento tem seu comprimento medido menor que quando em repouso.
        </ExampleBox>
        
        <MathDisplay 
          formula="L' = \frac{L}{\gamma}"
          label="Fórmula da contração do comprimento"
        />
      </section>
    </div>
  );
}