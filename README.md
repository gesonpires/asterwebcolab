# AsterWebColab - Plataforma de Aprendizado Interativo de Física

Uma plataforma web interativa para ensino de física, desenvolvida com Next.js, React e TypeScript.

## Características

- Simulações físicas interativas
- Análise de respostas discursivas
- Mapas conceituais interativos
- Interface moderna e responsiva
- Suporte a tema claro/escuro
- Acessibilidade aprimorada

## Tecnologias Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Flow
- Canvas API

## Requisitos

- Node.js 18 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/asterwebcolab.git
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```
asterwebcolab/
├── app/
│   ├── components/
│   │   └── interactive/
│   │       ├── examples/
│   │       ├── types.ts
│   │       ├── utils.ts
│   │       └── ReactFlowConfig.ts
│   └── interactive-learning/
│       └── page.tsx
├── public/
└── ...
```

## Componentes Principais

### PhysicsSimulation
Componente para renderização de simulações físicas usando Canvas API.

### DiscursiveAnswer
Componente para análise de respostas discursivas dos alunos.

### ConceptMap
Componente para visualização de mapas conceituais interativos.

### InteractivePhysicsLesson
Componente que combina simulações com respostas discursivas.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

Seu Nome - [@seu_twitter](https://twitter.com/seu_twitter) - email@exemplo.com

Link do Projeto: [https://github.com/seu-usuario/asterwebcolab](https://github.com/seu-usuario/asterwebcolab)
