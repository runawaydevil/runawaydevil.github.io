# 📚 Documentação Completa - Piracy.Live Vault

## 🎯 Visão Geral

Este projeto é uma **arca digital** completa construída com VitePress, oferecendo uma plataforma moderna para organizar recursos, ferramentas e informações úteis. Toda a estrutura é **100% livre e gratuita** para uso, modificação e distribuição.

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

### ✅ O que você pode fazer:
- **Usar comercialmente** - Use em projetos comerciais sem restrições
- **Modificar livremente** - Adapte conforme suas necessidades
- **Distribuir** - Compartilhe versões modificadas
- **Traduzir** - Traduza para qualquer idioma
- **Copiar** - Use o código como base para seus projetos

### ❌ Limitações:
- **Sem garantia** de funcionamento
- **Sem responsabilidade** por danos

## 🚀 Tecnologias Utilizadas

- **[VitePress](https://vitepress.dev/)** - Gerador de sites estáticos moderno
- **[Vue.js](https://vuejs.org/)** - Framework frontend reativo
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **CSS3** - Estilos customizados com efeitos neon e animações
- **Node.js** - Runtime JavaScript para scripts e automação

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### Passo a passo:

1. **Clone o repositório:**
```bash
git clone https://github.com/runawaydevil/runawaydevil.github.io.git
cd runawaydevil.github.io
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute em modo desenvolvimento:**
```bash
npm run dev
```

4. **Acesse o site:**
```
http://localhost:5173
```

## 🏗️ Estrutura do Projeto

```
pablo-news5/
├── docs/                          # Conteúdo principal do site
│   ├── .vitepress/               # Configuração do VitePress
│   │   ├── config.ts             # Configuração principal
│   │   ├── constants.ts           # Constantes globais
│   │   ├── environment.ts         # Configuração de ambiente
│   │   ├── sidebar.ts            # Configuração da sidebar
│   │   └── theme/                # Tema customizado
│   │       ├── index.ts          # Entrada do tema
│   │       ├── Layout.vue        # Layout principal
│   │       └── style.css         # Estilos customizados
│   ├── captain/                  # Seção "Diário Do Capitão"
│   ├── cultura/                  # Seção "Cultura e Movimento"
│   ├── vault/                    # Seção principal "Vault"
│   └── public/                   # Arquivos estáticos
├── scripts/                      # Scripts de automação (ignorados no git)
├── tests/                        # Testes automatizados (ignorados no git)
├── in/                           # Artigos para processamento (ignorados no git)
├── package.json                  # Configuração do projeto
├── LICENSE                       # Licença MIT
└── README.md                     # Documentação principal
```

## 🎨 Customização Completa

### 1. Alterando o Título do Site

**Arquivo:** `docs/.vitepress/config.ts`
```typescript
themeConfig: {
  siteTitle: 'seu-dominio.com',  // Altere aqui
  // ...
}
```

### 2. Modificando a Navegação

**Arquivo:** `docs/.vitepress/config.ts`
```typescript
nav: [
  { text: 'Início', link: '/' },
  { text: 'Sua Seção', link: '/sua-secao/' },
  { text: 'Vault', link: '/vault/' },
  // Adicione mais itens conforme necessário
]
```

### 3. Personalizando a Sidebar

**Arquivo:** `docs/.vitepress/sidebar.ts`
```typescript
export const sidebar = {
  '/sua-secao/': [
    {
      text: "🏷️ Sua Seção",
      link: "/sua-secao/"
    },
    {
      text: "Subcategoria",
      collapsed: true,
      items: [
        { text: "Item 1", link: "/sua-secao/item1" },
        { text: "Item 2", link: "/sua-secao/item2" }
      ]
    }
  ]
}
```

### 4. Criando Novas Seções

1. **Crie a pasta:**
```bash
mkdir docs/sua-nova-secao
```

2. **Crie o arquivo index:**
```bash
echo "# Sua Nova Seção" > docs/sua-nova-secao/index.md
```

3. **Adicione na navegação:**
```typescript
// Em docs/.vitepress/config.ts
nav: [
  { text: 'Sua Nova Seção', link: '/sua-nova-secao/' }
]
```

4. **Configure a sidebar:**
```typescript
// Em docs/.vitepress/sidebar.ts
'/sua-nova-secao/': [
  {
    text: "🆕 Sua Nova Seção",
    link: "/sua-nova-secao/"
  }
]
```

### 5. Personalizando Cores e Estilos

**Arquivo:** `docs/.vitepress/theme/style.css`
```css
:root {
  --vp-c-brand: #00d4ff;           /* Cor principal */
  --vp-c-brand-light: #33ddff;     /* Cor principal clara */
  --vp-c-brand-dark: #00a8cc;      /* Cor principal escura */
  --vp-c-brand-darker: #0088aa;    /* Cor principal mais escura */
}

/* Personalize outros elementos */
.custom-element {
  background: linear-gradient(45deg, #00d4ff, #ff00d4);
  border-radius: 8px;
  padding: 1rem;
}
```

### 6. Adicionando Meta Tags Personalizadas

**Arquivo:** `docs/.vitepress/config.ts`
```typescript
head: [
  ['meta', { name: 'description', content: 'Sua descrição personalizada' }],
  ['meta', { property: 'og:title', content: 'Seu Título' }],
  ['meta', { property: 'og:description', content: 'Sua descrição' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  // Adicione mais meta tags conforme necessário
]
```

## 🤖 Scripts de Automação

### Script de Organização de Artigos

O projeto inclui um script inteligente que usa IA para organizar artigos automaticamente:

```bash
# Coloque artigos numerados na pasta in/
# Exemplo: 1.md, 2.md, 3.md

# Execute o script
npm run organize-articles
```

**Funcionalidades:**
- ✅ Detecção automática de seção (Capitão vs Cultura)
- ✅ Geração de títulos descritivos
- ✅ Categorização inteligente
- ✅ Formatação visual com caixas coloridas
- ✅ Geração automática de ToC
- ✅ Criação de sidebars

### Script de Detecção de Duplicatas

```bash
# Execute para detectar conteúdo duplicado
npm run detect-duplicates
```

## 📝 Adicionando Conteúdo

### 1. Artigos Simples

Crie arquivos `.md` em qualquer pasta dentro de `docs/`:

```markdown
# Título do Artigo

Conteúdo do artigo aqui.

## Subtítulo

Mais conteúdo...

:::info 💡 Dica
Use caixas coloridas para destacar informações importantes.
:::

:::warning ⚠️ Atenção
Use para avisos importantes.
:::

:::danger 🚨 Perigo
Use para informações críticas.
:::
```

### 2. Artigos com Imagens

```markdown
# Artigo com Imagem

![Descrição da imagem](/caminho/para/imagem.png)

## Código

```javascript
console.log('Hello, World!');
```
```

### 3. Artigos com Links

```markdown
# Artigo com Links

- [Link externo](https://exemplo.com)
- [Link interno](./outro-artigo.md)
- [Link com texto personalizado](https://exemplo.com "Título do link")
```

## 🎨 Elementos Visuais Disponíveis

### Caixas de Informação

```markdown
:::info ℹ️ Informação
Texto informativo aqui.
:::

:::tip 💡 Dica
Dica útil aqui.
:::

:::warning ⚠️ Aviso
Aviso importante aqui.
:::

:::danger 🚨 Perigo
Informação crítica aqui.
:::
```

### Código Destacado

```markdown
```javascript
// Código JavaScript
function exemplo() {
  return "Hello, World!";
}
```

```python
# Código Python
def exemplo():
    return "Hello, World!"
```
```

### Tabelas

```markdown
| Coluna 1 | Coluna 2 | Coluna 3 |
|----------|----------|----------|
| Dados 1  | Dados 2  | Dados 3  |
| Dados 4  | Dados 5  | Dados 6  |
```

## 🔧 Configurações Avançadas

### 1. Configuração de Domínios Múltiplos

**Arquivo:** `docs/.vitepress/environment.ts`
```typescript
export const environments = {
  production: {
    domain: 'seu-dominio.com',
    baseUrl: 'https://seu-dominio.com',
    siteTitle: 'Seu Site',
  },
  secondary: {
    domain: 'seu-dominio-secundario.com',
    baseUrl: 'https://seu-dominio-secundario.com',
    siteTitle: 'Seu Site Secundário',
  }
};
```

### 2. Configuração de RSS

**Arquivo:** `docs/.vitepress/config.ts`
```typescript
const RSS: RSSOptions = {
  title: 'Seu Site RSS',
  baseUrl: 'https://seu-dominio.com',
  description: 'Descrição do seu RSS',
  // ... outras configurações
}
```

### 3. Configuração de Busca

O VitePress inclui busca local integrada. Para personalizar:

```typescript
// Em docs/.vitepress/config.ts
themeConfig: {
  search: {
    provider: 'local',
    options: {
      translations: {
        button: {
          buttonText: 'Buscar',
          buttonAriaLabel: 'Buscar'
        }
      }
    }
  }
}
```

## 🚀 Deploy e Hospedagem

### GitHub Pages

1. **Configure o repositório:**
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs

2. **Configure o domínio customizado:**
   - Adicione seu domínio nas configurações
   - Configure o DNS conforme necessário

3. **Deploy automático:**
```bash
# Build para produção
npm run build

# O conteúdo será gerado em docs/.vitepress/dist/
```

### Netlify

1. **Conecte o repositório**
2. **Configure o build:**
   - Build command: `npm run build`
   - Publish directory: `docs/.vitepress/dist`

### Vercel

1. **Conecte o repositório**
2. **Configure automaticamente**
3. **Deploy instantâneo**

## 🧪 Testes e Qualidade

### Executando Testes

```bash
# Todos os testes
npm run test

# Testes em modo watch
npm run test:watch

# Testes com cobertura
npm run test:coverage
```

### Linting

```bash
# Verificar código
npm run lint

# Corrigir automaticamente
npm run lint:fix
```

### Verificação de Tipos

```bash
npm run type-check
```

## 🔒 Segurança

### Arquivos Ignorados

O projeto está configurado para ignorar automaticamente:
- Scripts com chaves de API
- Arquivos de teste
- Artigos em processamento
- Arquivos temporários
- Dados sensíveis

### Configurações de Segurança

```typescript
// Em docs/.vitepress/config.ts
head: [
  ['meta', { name: 'robots', content: 'noindex, nofollow' }],
  ['meta', { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' }],
  ['meta', { 'http-equiv': 'X-Frame-Options', content: 'DENY' }],
  ['meta', { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' }],
  ['meta', { name: 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'" }]
]
```

## 📚 Recursos Adicionais

### Documentação Oficial
- [VitePress](https://vitepress.dev/)
- [Vue.js](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Markdown](https://www.markdownguide.org/)

### Ferramentas Úteis
- [VitePress Theme](https://vitepress.dev/guide/custom-theme)
- [Vue Components](https://vuejs.org/guide/components/registration.html)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 🤝 Contribuindo

### Como Contribuir

1. **Fork o projeto**
2. **Crie uma branch:**
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Faça suas alterações**
4. **Teste localmente:**
   ```bash
   npm run dev
   npm run test
   ```
5. **Commit suas alterações:**
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
6. **Push para a branch:**
   ```bash
   git push origin feature/nova-funcionalidade
   ```
7. **Abra um Pull Request**

### Padrões de Código

- Use TypeScript para tipagem
- Siga as convenções do ESLint
- Escreva testes para novas funcionalidades
- Documente mudanças importantes
- Siga as diretrizes da licença MIT

## 📞 Suporte

### Problemas Comuns

**Erro de build:**
```bash
# Limpe o cache
rm -rf node_modules package-lock.json
npm install
```

**Sidebar não atualiza:**
```bash
# Limpe o cache do VitePress
rm -rf docs/.vitepress/cache
npm run dev
```

**Scripts não funcionam:**
```bash
# Verifique se as dependências estão instaladas
npm install
```

### Contato

- **Email:** pablomurad@pm.me
- **GitHub:** [@runawaydevil](https://github.com/runawaydevil)
- **Site:** [piracy.live](https://piracy.live)

## 📄 Licença Final

Este projeto está licenciado sob a **MIT License**. Isso significa que você pode:

- ✅ Usar livremente
- ✅ Modificar conforme necessário
- ✅ Distribuir versões modificadas
- ✅ Usar comercialmente
- ✅ Traduzir para outros idiomas

**Sem obrigações:** Use livremente conforme sua necessidade.

---

**🎉 Parabéns! Agora você tem tudo que precisa para criar seu próprio vault digital!**

*Lembre-se: Este projeto é 100% livre e gratuito. Use, modifique e compartilhe conforme sua necessidade.*
