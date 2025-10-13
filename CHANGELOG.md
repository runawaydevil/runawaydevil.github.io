# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Added
- Sistema de testes automatizados com Vitest
- Script de detecção de duplicatas usando OpenAI API
- Sistema de feedback para usuários
- Script de organização de artigos com IA
- Suporte para múltiplos domínios (piracy.live)
- Licença MIT para uso livre
- Documentação completa do projeto
- Emblemas na homepage (Hacker Emblem e Abyss Emblem)
- Seção "Diário Do Capitão" com artigos organizados
- Seção "Cultura e Movimento" com conteúdo sobre cultura hacker
- Configuração GitLab CI/CD para deploy automático
- Documentação para GitLab CI/CD

### Changed
- Título do site de "piracy.live" para "#hacking"
- Domínio principal para "piracy.live"
- Navbar reorganizada: "Início", "Diário Do Capitão", "Vault"
- Consolidação de conteúdo duplicado em português/inglês
- Melhoria na formatação de artigos com VitePress
- Otimização do RSS feed para funcionar corretamente

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
