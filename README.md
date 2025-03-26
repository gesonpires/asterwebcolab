# Cadernos Digitais

Uma plataforma educacional interativa para alunos e professores, com foco em conteúdo de astronomia e física.

## Funcionalidades

### Para Alunos
- Conteúdo interativo com texto, imagens e vídeos
- Exercícios e quizzes para testar conhecimentos
- Simulações interativas de conceitos científicos
- Acompanhamento de progresso

### Para Professores
- Acesso a recursos didáticos adicionais
- Sistema de anotações por tópico
- Materiais para download (apresentações, atividades, avaliações)
- Guias e orientações pedagógicas

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para produção
- [TypeScript](https://www.typescriptlang.org/) - JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações

## Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cadernos-digitais.git
cd cadernos-digitais
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```
app/
  cadernos/
    aluno/              # Interface do aluno
      [topicId]/       # Páginas dinâmicas por tópico
    professor/         # Interface do professor
      [topicId]/      # Páginas dinâmicas por tópico
    components/        # Componentes compartilhados
      ContentViewer.tsx
      InteractiveExercises.tsx
      ResourceDownloader.tsx
      TeacherNotes.tsx
    data/             # Dados e configurações
      exercises.ts
      topics.ts
public/
  images/            # Imagens e recursos estáticos
    topics/
    resources/
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Crie um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## Contato

Para dúvidas ou sugestões, por favor abra uma issue no repositório.
