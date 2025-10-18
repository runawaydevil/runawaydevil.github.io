# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [0.0.2] - 2025-01-XX

### Added
- Sistema de testes automatizados com Vitest
- Sistema de feedback para usuários
- Suporte para múltiplos domínios (piratas.club)
- Licença MIT para uso livre
- Documentação completa do projeto
- Emblemas na homepage (Hacker Emblem e Abyss Emblem)
- Seção "Diário Do Capitão" com artigos organizados
- Seção "Cultura e Movimento" com conteúdo sobre cultura hacker
- Configuração GitLab CI/CD para deploy automático
- Documentação para GitLab CI/CD
- Plugin vitepress-sidebar para geração automática de sidebar

### Changed
- Título do site de "piratas.club" para "#hacking"
- Domínio principal para "piratas.club"
- Navbar reorganizada: "Início", "Diário Do Capitão", "Vault"
- Consolidação de conteúdo duplicado em português/inglês
- Melhoria na formatação de artigos com VitePress
- Otimização do RSS feed para funcionar corretamente
- Avatar atualizado de pablo.png para RD1.png

### Removed
- Pacote OpenAI e scripts relacionados de IA
- Scripts de organização automática de artigos
- Scripts de detecção de duplicatas
- Scripts de geração de links internos
- Scripts de auditoria de conteúdo
- Sistema de testes automatizados (Vitest)
- Dependências de teste (@vitest/coverage-v8, jsdom, vitest)

## [Unreleased]

### Fixed
- Redirecionamento do RSS feed de `/lander` para `/feed.rss`
- Erros de TypeScript relacionados a HeadConfig
- Problemas de ESLint com ES Modules
- Erros de deploy no GitHub Actions
- Conflitos entre workflows de deploy
- Problemas de permissão no GitHub Pages

### Removed
- Seção "Guias" da navbar
- Página de downloads do Capitão
- Referências a créditos obrigatórios
- Arquivos duplicados consolidados
- Workflow de deploy problemático
- Pasta backup_duplicates do controle de versão

### Security
- Proteção de chaves de API no .gitignore
- Remoção de dados sensíveis do repositório
- Configuração segura de variáveis de ambiente

## [0.0.1] - 2025-01-27

### Added
- Projeto inicial do VitePress
- Estrutura básica do vault
- Configuração inicial do GitHub Pages
- RSS feed básico
- Conteúdo inicial em português e inglês

---

## Tipos de Mudanças

- **Added** para novas funcionalidades
- **Changed** para mudanças em funcionalidades existentes
- **Deprecated** para funcionalidades que serão removidas
- **Removed** para funcionalidades removidas
- **Fixed** para correções de bugs
- **Security** para melhorias de segurança

## Links

- [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)
- [Semantic Versioning](https://semver.org/lang/pt-BR/)
- [Projeto no GitHub](https://github.com/runawaydevil/runawaydevil.github.io)
- [Site Live](https://piracy.live)
