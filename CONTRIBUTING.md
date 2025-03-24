# Guia de Contribuição

## 🌟 Como Contribuir

Bem-vindo ao projeto Memorial Online! Este guia ajudará você a entender como contribuir efetivamente para o projeto.

### 🔄 Fluxo de Trabalho

1. **Preparação do Ambiente**
   ```bash
   # Clone o repositório
   git clone [url-do-repositorio]
   cd memorial-online
   
   # Instale as dependências
   npm run init
   ```

2. **Branches**
   - `main`: Código em produção
   - `develop`: Branch principal de desenvolvimento
   - `feature/*`: Novas funcionalidades
   - `bugfix/*`: Correções de bugs
   - `hotfix/*`: Correções urgentes em produção

3. **Criando uma Nova Feature**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nome-da-feature
   ```

4. **Commits**
   Utilizamos o padrão Conventional Commits:
   - `feat`: Nova funcionalidade
   - `fix`: Correção de bug
   - `docs`: Documentação
   - `style`: Formatação
   - `refactor`: Refatoração
   - `test`: Testes
   - `chore`: Manutenção

   Exemplo:
   ```bash
   git commit -m "feat: adiciona sistema de login"
   ```

5. **Pull Requests**
   - Mantenha PRs pequenos e focados
   - Inclua descrição clara das mudanças
   - Adicione testes quando necessário
   - Solicite review de pelo menos 1 colega

### 📝 Padrões de Código

1. **Frontend (React/Next.js)**
   - Use componentes funcionais
   - Implemente TypeScript
   - Siga o padrão de CSS-in-JS com Tailwind
   - Mantenha componentes pequenos e reutilizáveis

2. **Backend (NestJS)**
   - Siga os princípios SOLID
   - Use injeção de dependência
   - Implemente testes unitários
   - Documente APIs com Swagger

### 🧪 Testes

1. **Executando Testes**
   ```bash
   # Testes completos
   npm test
   
   # Testes específicos
   npm run test:frontend
   npm run test:backend
   ```

2. **Cobertura de Testes**
   - Mínimo de 70% de cobertura
   - Foco em lógica de negócio
   - Testes de integração para APIs

### 📚 Documentação

1. **Código**
   - Comentários claros e objetivos
   - JSDoc para funções importantes
   - README atualizado para novas features

2. **APIs**
   - Documentação Swagger atualizada
   - Exemplos de uso
   - Descrição de parâmetros

### 🚀 Deploy

1. **Ambientes**
   - `dev`: Desenvolvimento
   - `staging`: Homologação
   - `prod`: Produção

2. **Pipeline**
   - CI/CD via GitHub Actions
   - Testes automatizados
   - Build e deploy automático

### 📅 Daily Scrum

- Horário: 09:30 (Horário de Brasília)
- Duração: 15 minutos
- Formato:
  1. O que fez ontem?
  2. O que fará hoje?
  3. Há impedimentos?

### 🎯 Definition of Done

- Código revisado
- Testes passando
- Documentação atualizada
- Build sem erros
- PR aprovado
- Deploy em staging realizado

### 🆘 Suporte

Em caso de dúvidas:
1. Consulte a documentação
2. Pergunte no canal do Discord
3. Abra uma issue
4. Contate o tech lead

## 🌈 Valores do Time

- Comunicação clara e respeitosa
- Compartilhamento de conhecimento
- Melhoria contínua
- Qualidade de código
- Trabalho em equipe

Lembre-se: Estamos construindo algo incrível juntos! 🚀"