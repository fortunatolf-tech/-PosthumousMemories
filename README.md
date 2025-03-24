# Memorial Online - Plataforma de Memórias Digitais

## 📝 Visão Geral

Plataforma SaaS white label para criação e gerenciamento de memoriais online, permitindo que usuários preservem e compartilhem memórias de seus entes queridos em um ambiente digital seguro e nostálgico, inspirado no design clássico do Orkut.

## 🏗️ Arquitetura do Projeto

### Stack Tecnológica

#### Backend
- **Linguagem Principal**: Node.js
- **Framework**: NestJS (para arquitetura de microserviços)
- **Banco de Dados**:
  - MongoDB (dados principais)
  - Redis (cache)
  - PostgreSQL (dados estruturados)

#### Frontend
- **Framework**: React com Next.js
- **Estilização**: Tailwind CSS
- **Gerenciamento de Estado**: Redux Toolkit

#### Infraestrutura
- **Sistema Operacional**: Debian 12
- **Containerização**: Docker
- **Orquestração**: Kubernetes
- **Cloud**: AWS (principal)
  - S3 para armazenamento de mídia
  - CloudFront para CDN
  - EKS para Kubernetes

### Microserviços

1. **Auth Service**
   - Autenticação e autorização
   - Gestão de usuários e perfis

2. **Memorial Service**
   - Gerenciamento de memoriais
   - Timeline e conteúdo

3. **Media Service**
   - Upload e processamento de mídia
   - Otimização de imagens e vídeos

4. **Family Tree Service**
   - Gestão da árvore genealógica
   - Relacionamentos familiares

5. **Analytics Service**
   - Métricas de uso
   - Relatórios de engajamento

## 🔒 Segurança e Conformidade LGPD

### Medidas de Segurança
- Criptografia em repouso e em trânsito
- Autenticação em dois fatores
- Rate limiting
- WAF (Web Application Firewall)
- Monitoramento de atividades suspeitas

### Conformidade LGPD
- Termos de uso e política de privacidade
- Gestão de consentimento
- Processo de exclusão de dados
- Registro de operações de dados

## 🚀 CI/CD e DevOps

### Pipeline de Desenvolvimento
1. **Desenvolvimento Local**
   - Docker Compose para ambiente local
   - Hot-reload para desenvolvimento

2. **Integração Contínua**
   - GitHub Actions para CI
   - Testes automatizados
   - Análise de código

3. **Deploy Contínuo**
   - ArgoCD para CD no Kubernetes
   - Blue/Green deployment
   - Rollback automatizado

### Monitoramento
- Prometheus para métricas
- Grafana para visualização
- ELK Stack para logs
- New Relic para APM

## 📅 Roadmap

### Fase 1 - MVP (B2C)
1. **M1 - Fundação (2 meses)**
   - Setup inicial da infraestrutura
   - Implementação do sistema de autenticação
   - CRUD básico de memoriais

2. **M2 - Funcionalidades Core (3 meses)**
   - Upload de mídia
   - Timeline interativa
   - Árvore genealógica básica

3. **M3 - Experiência do Usuário (2 meses)**
   - UI/UX nostálgica
   - Sistema de privacidade
   - Geração de QR codes

### Fase 2 - Expansão (B2B)
1. **M4 - White Label (3 meses)**
   - Sistema de temas
   - Customização de marca
   - Portal administrativo

2. **M5 - Integração B2B (2 meses)**
   - API para parceiros
   - Dashboard B2B
   - Relatórios personalizados

## 🤝 Contribuição

### Fluxo de Trabalho Git
- Main: Produção
- Develop: Desenvolvimento
- Feature branches: Novas funcionalidades
- Release branches: Preparação para produção
- Hotfix: Correções urgentes

### Padrões de Código
- ESLint para JavaScript/TypeScript
- Prettier para formatação
- Husky para git hooks
- Conventional Commits

### Processo de Review
1. Code Review por pares
2. Testes automatizados
3. Quality Gate no SonarQube
4. Deploy em ambiente de staging

## 📚 Documentação

### Estrutura
- `/docs`: Documentação técnica
- `/api`: Documentação da API
- `/architecture`: Diagramas e decisões arquiteturais

### Padrões
- OpenAPI para APIs
- C4 Model para arquitetura
- ADRs para decisões arquiteturais

## 🔧 Setup do Ambiente

### Pré-requisitos
- Debian 12
- Docker
- Node.js 18+
- Git

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o ambiente de desenvolvimento
docker-compose up -d
```

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE).