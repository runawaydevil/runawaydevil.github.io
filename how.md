# Como este site funciona

Documentação rápida da stack, do visual e da organização do código. Útil para lembrar decisões ao editar ou automatizar o projeto.

## Stack e ferramentas

| Camada | Escolha |
|--------|---------|
| Gerador estático | [Eleventy](https://www.11ty.dev/) **3.1.x** (`eleventy.config.js`) |
| Templates | **Nunjucks** (`.njk`); Markdown processado com engine Nunjucks |
| CSS | Um ficheiro principal: `src/assets/css/style.css` (variáveis, componentes, ícones) |
| Busca no site | [Pagefind](https://pagefind.app/) — índice gerado em `eleventy.after`, UI em `/search/` |
| Feed | Atom em `feed.xml` (`src/feed.njk`), plugin `@11ty/eleventy-plugin-rss` |
| Ícones | Shortcode `icon` (SVG Lucide, lista controlada) + shortcode `glyph` (SVGs em `src/assets/icons/custom/`) |
| Animação | [Lottie](https://airbnb.io/lottie/) no cabeçalho (`base.njk`) |
| Leitura | Barra de progresso opcional (`reading-progress.js`) em artigos |

**Scripts npm:** `npm run dev` (watch), `npm run build` (produção + Pagefind), `npm run clean`.

**Deploy:** GitHub Actions (`.github/workflows/deploy.yml`) — Node 20, `npm ci`, `npm run build`, publicação do artefacto `_site` em **GitHub Pages**.

**Domínio / meta:** `url` e metadados em `eleventy.config.js` e `src/_data/site.json` (título, descrição, autor, imagens OG, etc.).

---

## Aparência e tipografia

O tema é um **minimal escuro** (“Minimal Obsidian” no próprio CSS): fundo neutro, texto claro, acentos discretos.

**Fontes (Google Fonts, carregadas em `base.njk`):**

- **Atkinson Hyperlegible** — corpo e leitura longa  
- **Space Grotesk** — títulos (`h1`–`h6`, `.page-title`)  
- **IBM Plex Sans** — UI e navegação  
- **IBM Plex Mono** — marca no header, código, meta

**Tokens principais** (ver `:root` em `style.css`): `--bg-color`, `--text-color`, `--text-muted`, `--border-color`, `--accent-color`, `--link-color`, `--code-bg`, sombras e raios. Há variantes para **print** e suporte a `prefers-reduced-motion`.

**Ícones:** classe `.icon` com tamanhos (`--icon-sm` … `--icon-xl`) e estados (`.icon--muted`, hover). Ícones Lucide só entram se estiverem na lista permitida no shortcode (sincronização com `scripts/fetch-lucide-icons.mjs`).

**Acessibilidade:** `lang="pt-BR"`, skip link “Saltar para o conteúdo”, foco visível, contraste alinhado ao tema escuro.

---

## Estrutura do repositório

```
src/
  _data/           # Dados globais (site.json, etc.)
  _includes/       # Layouts e partials (base, nav, post, cards, footer, …)
  assets/          # css/, icons/, images/, js/
  errors/          # 404, 403, 410, 500, 503 (front matter + error.njk)
  posts/           # journal/, articles/, bookmarks/, photos/, replies/, likes/
  *.njk            # Páginas de índice e conteúdo estático (index, now, …)
```

- **Saída de build:** pasta `_site/` (não versionar como fonte de verdade).  
- **Uploads / estáticos:** `src/uploads/`, imagens em `src/assets/images/`, notecards em `notecards/` (passthrough no Eleventy).

---

## Coleções e tipos de conteúdo

Definidas em `eleventy.config.js`:

- **`journalNotes`** — notas do journal, com `globalNoteId` sequencial.  
- **`homeFeed`** — mistura journal + articles para a home.  
- **`article`**, **`bookmark`**, **`photo`** — por pasta em `src/posts/`.  
- **`post`** — união usada no feed Atom.

A **home** (`src/index.njk`) usa layout tipo hub: artigo em destaque (`homeFeatured`), lista recente (`homeHighlights`), divisor com `glyph "ornament-divider"`, e cópia atual (“A quieter transmission”, etc.).

### Referência local (benchmark, só leitura)

Há um projeto de referência em `.experiment/Designerdadacom/` (Tailwind, paleta “olive”). **Não** copiamos stack nem componentes; usámo-lo só para decidir o que vale a pena trazer para *este* site.

| Absorver (conceito) | Rejeitar (para este repo) |
|---------------------|---------------------------|
| Largura de leitura disciplinada e ritmo vertical entre secções | Minimalismo estéril ou “product designer” genérico |
| Entrada e saída claras de cada bloco (hero → lead → descoberta → auxiliar) | Centralização que achata voz pessoal |
| Espaçamento propositivo e hierarquia sóbria | Animações de entrada estilo startup |
| Contenção de molduras (sem competir com o conteúdo) | Substituir IndieWeb / h-card por bio genérica |

Na implementação: tokens `--section-gap-*`, `--content-measure` (resto do site) vs `--home-measure` (home), e pesos visuais distintos entre módulos — tudo em `style.css` sem migrar de Eleventy/Nunjucks.

---

## Layout e navegação

- **`base.njk`:** HTML completo, SEO, OG/Twitter, feed, Micropub (`pub.dega.wtf`), `rel="me"`, rodapé com **h-card**, lista do sitemap e webring.  
- **`nav.njk`:** Search, Articles, Notes, Now, Photos, Pages, Guestbook, Bookmarks, Contact (com ícones).  
- **`post.njk`:** Artigos/notas com meta (data, tags, tipo), opcional barra de leitura.

Páginas estáticas relevantes: `now`, `pages`, `contact`, `guestbook`, `machines`, `servers`, `personal`, `search`, feeds de secção (`journal.njk`, `articles.njk`, etc.).

---

## IndieWeb e integrações

- Identidade no rodapé (**h-card**): nome, foto, localização, links.  
- Endpoints declarados: Micropub / Media em `pub.dega.wtf`.  
- Feed principal: `feed.xml` (journal + posts agregados conforme template).

---

## Erros HTTP

Ficheiros em `src/errors/` com `error_code` e `permalink`; layout `error.njk` mostra imagem [HTTP Cats](https://http.cat/) e navegação rápida.

---

## Convenções ao editar

1. **Novos ícones Lucide:** adicionar ao shortcode em `eleventy.config.js` e, se necessário, correr o script em `scripts/` para gerar SVGs.  
2. **Novos glyphs:** colocar SVG em `src/assets/icons/custom/` e usar `{% glyph "nome" %}`.  
3. **Estilo:** preferir variáveis CSS existentes; manter coerência com o tema escuro e tipografia já definida.  
4. **Conteúdo:** posts em Markdown com front matter; journal mantém numeração global via `globalNoteId`.

---

## Referências no código

- Configuração principal: `eleventy.config.js`  
- Estilos: `src/assets/css/style.css`  
- Dados do site: `src/_data/site.json`  
- CI: `.github/workflows/deploy.yml`

Este ficheiro descreve o estado atual do repositório; se algo divergir, o código e a configuração do Eleventy prevalecem.
