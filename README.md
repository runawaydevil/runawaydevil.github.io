# 🏴‍☠️ Piracy.Live Vault

Uma verdadeira arca digital repleta de descobertas - links, megathreads, ferramentas e recursos incríveis organizados para curiosos, desenvolvedores, hackers éticos e amantes da tecnologia.

> **🌐 Domínios:** [piracy.live](https://piracy.live) (principal) | [pablo.news](https://pablo.news) (secundário)

## ✨ Características

- 🎨 **Design Moderno**: Interface elegante com tema escuro e efeitos neon
- 🔍 **Busca Inteligente**: Sistema de busca local integrado
- 📱 **Responsivo**: Otimizado para desktop e mobile
- ⚡ **Performance**: Build otimizada com VitePress
- 🔒 **Segurança**: Configurações de segurança para produção
- 🌐 **SEO**: Meta tags e estrutura otimizada

## 🚀 Tecnologias

- **[VitePress](https://vitepress.dev/)** - Gerador de sites estáticos
- **[Vue.js](https://vuejs.org/)** - Framework frontend
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **CSS3** - Estilos customizados com efeitos neon

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

**Resumo da licença:**
- ✅ **Uso comercial** permitido
- ✅ **Modificação** permitida
- ✅ **Distribuição** permitida
- ✅ **Uso privado** permitido
- ✅ **Tradução** permitida
- ❌ **Sem garantia** de funcionamento
- ❌ **Sem responsabilidade** por danos

**Você pode:**
- Copiar e usar o código livremente
- Modificar e adaptar conforme necessário
- Distribuir versões modificadas
- Usar em projetos comerciais
- Traduzir o conteúdo para outros idiomas

## 📖 Documentação Completa

Para uma **documentação detalhada** sobre como modificar, customizar e usar toda a estrutura do projeto, consulte o arquivo **[DOCUMENTATION.md](DOCUMENTATION.md)**.

A documentação inclui:
- 🎯 Guia completo de instalação e configuração
- 🏗️ Explicação detalhada da estrutura do projeto
- 🎨 Tutorial de customização visual e funcional
- 🤖 Como usar os scripts de automação com IA
- 📝 Guia para adicionar conteúdo e artigos
- 🚀 Instruções de deploy para diferentes plataformas
- 🔧 Configurações avançadas e personalização
- 🧪 Testes, qualidade e segurança
- 🤝 Como contribuir com o projeto

## 📦 Instalação

### Pré-requisitos

- Node.js >= 18.0.0
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/runawaydevil/runawaydevil.github.io.git
cd runawaydevil.github.io

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento (http://localhost:5173)

# Produção
npm run build        # Build para produção
npm run preview      # Preview da build local

# Limpeza
npm run clean        # Limpa arquivos temporários
```

## 📁 Estrutura do Projeto

```
pablo-news-vault/
├── docs/                    # Documentação e conteúdo
│   ├── .vitepress/         # Configuração do VitePress
│   │   ├── config.ts       # Configuração principal
│   │   ├── sidebar.ts      # Estrutura da sidebar
│   │   ├── constants.ts    # Constantes do projeto
│   │   └── theme/          # Tema customizado
│   │       ├── index.ts    # Entrada do tema
│   │       └── style.css   # Estilos customizados
│   ├── public/             # Arquivos estáticos
│   │   ├── pablo.png       # Avatar/logo
│   │   ├── favico.ico      # Favicon
│   │   └── ...
│   ├── vault/              # Conteúdo principal
│   │   ├── index.md        # Página inicial do vault
│   │   ├── guias/          # Tutoriais e guias
│   │   └── ...             # Outras categorias
│   └── index.md            # Homepage
├── package.json            # Dependências e scripts
└── README.md              # Este arquivo
```

## 🎨 Personalização

### Cores do Tema

O projeto usa um esquema de cores baseado em azul ciano (`#00d4ff`):

```css
:root {
  --vp-c-brand-1: #00d4ff;
  --vp-c-brand-2: #33ddff;
  --vp-c-brand-3: #0099cc;
  --vp-c-brand-soft: rgba(0, 212, 255, 0.14);
}
```

### Efeitos Neon

O avatar possui efeitos neon customizados:

- **Glow Pulsante**: Animação suave de pulsação
- **Hover Effects**: Escala e brilho aumentado no hover
- **Gradiente Rotativo**: Efeito de rotação ao redor do avatar
- **Responsivo**: Adaptado para diferentes tamanhos de tela

## 🔒 Segurança

### Configurações de Segurança

- **Meta Robots**: `noindex, nofollow` para evitar indexação
- **HTTPS Only**: Configurado para produção segura
- **Content Security Policy**: Headers de segurança configurados
- **Dependências**: Todas as dependências são verificadas

### Verificação de Segurança

```bash
# Verificar vulnerabilidades
npm audit

# Verificar dependências desatualizadas
npm outdated
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `docs/.vitepress/dist`
4. Deploy automático a cada push

### Netlify

1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `docs/.vitepress/dist`
4. Deploy automático a cada push

### GitHub Pages

```bash
# Build para produção
npm run build

# Os arquivos estarão em docs/.vitepress/dist/
# Faça upload para o GitHub Pages
```

## 📊 Performance

### Otimizações Implementadas

- **Lazy Loading**: Imagens carregadas sob demanda
- **Code Splitting**: Divisão automática de código
- **Minificação**: CSS e JS minificados
- **Compressão**: Gzip habilitado
- **Cache**: Headers de cache configurados

### Métricas

- **Build Time**: ~5-6 segundos
- **Bundle Size**: Otimizado para produção
- **Lighthouse Score**: 90+ em todas as métricas

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Pablo Murad**
- GitHub: [@runawaydevil](https://github.com/runawaydevil)
- Twitter: [@runawayd3vil](https://x.com/runawayd3vil)
- Instagram: [@murad.pablo](https://instagram.com/murad.pablo)
- Telegram: [@runawaydevil](https://t.me/runawaydevil)

## 🙏 Agradecimentos

- Comunidade VitePress pela excelente documentação
- Contribuidores do projeto
- Todos os desenvolvedores que compartilham conhecimento

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a [documentação do VitePress](https://vitepress.dev/)
2. Abra uma [issue no GitHub](https://github.com/runawaydevil/pablo-news-vault/issues)
3. Entre em contato via [Telegram](https://t.me/runawaydevil)

---

⭐ **Se este projeto te ajudou, considere dar uma estrela no GitHub!**
