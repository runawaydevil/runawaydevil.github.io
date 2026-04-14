# Plano de referência — hub editorial IndieWeb (Being Pablo)

Documento de experiência: guia para implementação em passes, alinhado ao pedido de “editorial maximalism with restraint”, **sem** obrigar reescrita React/Tailwind. As skills citadas (`frontend-developer`, `frontend-dev-guidelines`, `cc-skill-frontend-patterns`) são **React-centric**; aqui estão **transpostas** ao teu contexto.

---

## 1. Transposição das skills → stack Eleventy

| Ideia nas skills | Equivalente neste projeto |
|------------------|---------------------------|
| Composição de UI / compound components | **Nunjucks**: `{% include %}`, `{% import %}`, macros (`{% macro %}`) em `src/_includes/` |
| Lazy load de rotas/componentes pesados | **Pagefind**: script no fim do body, `defer`; sem bloquear first paint |
| FFCI (fit, complexidade, performance, reuso, manutenção) | Avaliar cada feature: impacto em `_site` size, CLS, manutenção de templates/CSS |
| Suspense / dados | **Build-time**: coleções e dados em `eleventy.config.js`; sem fetch em runtime para conteúdo |
| TypeScript strict | Opcional futuro; **Markdown + front matter** são o contrato de conteúdo |
| WCAG / axe | HTML semântico, foco visível, contraste em `style.css`, `skip link`, labels em formulários (guestbook) |

**Regra prática:** cada nova superfície visual = **1 partial reutilizável + 1 bloco de tokens CSS** (variáveis), evitando “one-off” inline espalhado (refactor gradual do que já existe em `style` inline).

---

## 2. Arquitectura actual (inventário rápido)

- **Build:** Eleventy 3, entrada `src/`, saída `_site/`, `eleventy.config.js`.
- **Layouts:** `base.njk` (shell, h-card, nav), `page.njk`, `post.njk`, `error.njk`.
- **Coleções custom:** `journalNotes` (notas + `globalNoteId`), `homeFeed` (artigos + notas para a home).
- **Conteúdo:** `src/posts/{journal,articles,bookmarks,photos,...}/` com `*.json` por pasta (tags, tipo, permalink).
- **Feeds:** `feed.njk` → `/feed.xml`; plugin RSS.
- **Guestbook:** `guestbook.njk` (form + lógica cliente; **não remover**).
- **Deploy:** GitHub Actions → Pages (`npm ci` + `npm run build`).
- **Páginas índice:** `journal.njk`, `articles.njk`, `bookmarks.njk`, etc. — maioritariamente listas cronológicas + paginação.

**Lacunas face ao objectivo:** home ainda é “hub leve”; nav é uma linha curta; não há busca estática; índices pouco “editoriais”; design system disperso (muito inline); backlinks/relacionados ainda não são camada de primeiro nível.

---

## 3. Princípios de desenho (fixos)

1. **Estático primeiro** — HTML completo no `_site`; JS só para melhorias (busca, progresso opcional).
2. **Dark + literário + pessoal** — tokens em `:root`; sem template “SaaS”.
3. **URLs e mf2** — não quebrar permalinks nem `h-entry` / `h-card` / `rel` IndieWeb.
4. **Poucas dependências** — Pagefind + Eleventy; evitar cadeias grandes por cosmética.

---

## FASE 1 — Fundação de alto impacto

### A. Home como hub real

**Objectivo:** `index.md` (ou migrar para `index.njk` se precisar de mais lógica) com secções claras.

**Secções sugeridas (ordem negociável):**

1. **Hero / identidade** — título do site, uma linha de propósito, CTA secundário (RSS / now / start).
2. **Start here** — links para `about`, `links`, artigo “como navegar”, ou bloco curto estático.
3. **Featured** — front matter `featured: true` em 1–2 artigos (filtro em template) *ou* escolha manual via `src/_data/featured.json`.
4. **Últimas notas** — reutilizar padrão actual `homeFeed` (já limita tipos).
5. **Pré-visualizações** — últimos N bookmarks / fotos (coleções `collections.bookmark` ou filtro por pasta; validar nomes de tag).
6. **Explore** — grelha de cartões: Journal, Articles, Bookmarks, Photos, Guestbook, Machines — só links; sem JS.
7. **Stats** — `eleventyComputed` ou função na build: contagens `collections.post.length`, por tag, etc.

**Ficheiros prováveis:** `src/index.md` → possivelmente `src/index.njk`; novos `src/_includes/home/*.njk`; dados `src/_data/stats.js` (opcional).

**FFCI:** alto impacto / manutenção média se macros forem usados.

---

### B. Navegação e IA

**Objectivo:** `nav.njk` com mais alcance sem poluir.

- Agrupar: **Escrever** (Articles, Journal) · **Descobrir** (Bookmarks, Photos, Links) · **Pessoa** (About, Now, Contact) · **Comunidade** (Guestbook).
- Secundário: link **Search** para `/search/`.
- **Footer:** mini mapa do site (repetir links + RSS) — em `base.njk` ou `footer-nav.njk`.

**Ficheiros:** `src/_includes/nav.njk`, `src/_includes/base.njk`, opcional `footer-site-map.njk`.

---

### C. Busca estática (Pagefind)

**Objectivo:** `/search/index.html` com UI alinhada ao tema.

1. Adicionar `pagefind` como devDependency.
2. Pós-build: `npx pagefind --site _site` (ou script `build:search` que corre após Eleventy).
3. Página `src/search.njk`: container `#search`, import do CSS default do Pagefind **sobrescrevido** com variáveis do site (wrapper com classe `.pagefind-ui` custom).
4. CI: garantir que o passo Pagefind corre no workflow de deploy **depois** do `eleventy`.

**Ficheiros:** `package.json` scripts, `.github/workflows/deploy.yml`, `src/search.njk`, overrides em `style.css` ou `src/assets/css/pagefind-overrides.css`.

**Progressive enhancement:** sem JS, a página pode mostrar instruções + links para índices.

---

### D. Índices / arquivo mais ricos

**Objectivo:** cada índice com **introdução**, **lista**, opcional **destaques**, metadados visíveis.

- `articles.njk`, `journal.njk`, `bookmarks.njk`, `photos.njk`, etc.: cabeçalho editorial; lista com data + título + excerpt (primeiras linhas ou `description` no front matter).
- **Tags:** se ainda não existem, introduzir `tags: []` gradualmente; página `src/tags.njk` listando tags com contagem (coleção derivada no config).
- **Featured:** campo opcional nos MD.

**Ficheiros:** templates de índice; possível `src/_includes/listing.njk` macro.

---

## FASE 2 — Sistema visual editorial

### E. Tokens e componentes CSS

**Objectivo:** concentrar em `style.css`:

- Escala `--space-*` (já existe parcialmente), `--text-xs` … `--text-3xl`, `--measure` (65ch para prosa), `--radius`, `--border`.
- Classes: `.card`, `.panel`, `.callout`, `.kicker`, `.section-rule`, `.pull-quote`, `.meta-row`.
- Migrar **gradualmente** estilos inline dos templates para classes (não tudo de uma vez).

### F. Leitura longform

**Objectivo:** `post.njk` + CSS.

- **TOC:** gerado no build (plugin `eleventy-plugin-nesting-toc` ou script que parse headings) **ou** manual com `toc: true` no front matter — escolher a opção de menor dependência.
- **Progresso leitura:** uma barra `position: fixed` + ~15 linhas JS vanilla no `base.njk` só em `post.njk` via flag `layout` (evitar global).
- **Notas de rodapé:** estilizar `markdown-it-footnote` se adicionado; senão, estilizar `<sup>` nativos.
- **Relacionados:** bloco que lista 3 itens da mesma tag ou mesma coleção (dados no config).

**Ficheiros:** `post.njk`, `style.css`, possível `src/assets/js/reading-progress.js` (mínimo).

---

## FASE 3 — Jardim / hipertexto

### G. Backlinks e relacionados (leve)

**Objectivo:** sem Zettelkasten completo.

1. **Fase 3a:** links internos explícitos no corpo + bloco “Relacionados” por tag/data.
2. **Fase 3b:** script de build que extrai `[[slug]]` ou `https://pablo.space/...` e gera `_data/backlinks.json` para injeção em templates.
3. Mostrar “Mencionado em” só se `backlinks[target].length > 0`.

**Ficheiros:** `eleventy.config.js` (transform ou `before` script), `_data/backlinks.json` gerado (gitignored se gerado) ou committed se estável.

---

## FASE 4 — Qualidade e CI

### H. CI

- **Links quebrados:** `npx linkinator _site --recurse` ou `lychee` no GitHub Actions (não falhar em 429 externos agressivamente — configurar ignore).
- **HTML:** `html-validate` ou `vnu-jar` em `_site` (whitelist de erros conhecidos).
- Manter workflow **simples**: job `build` → `pagefind` → `validate` opcional.

### I. Performance e a11y

- Lighthouse CI opcional (budget leve).
- Garantir: `alt` em imagens, contraste, foco em links da nav, `prefers-reduced-motion` para animações Lottie se aplicável.

---

## Ordem de execução recomendada (sprints)

| Sprint | Entrega |
|--------|---------|
| 1 | Tokens CSS base + footer mapa + nav expandida |
| 2 | Home hub (secções + stats + featured) |
| 3 | Pagefind + página search + CI |
| 4 | Refactor índices (articles/journal/bookmarks/photos) + excerpts |
| 5 | post.njk: TOC + relacionados + progresso opcional |
| 6 | Backlinks v1 (tag-based ou script simples) |
| 7 | CI link check + html-validate |

---

## Riscos e mitigação

| Risco | Mitigação |
|-------|-----------|
| Coleção `article` vs tag `article` | Confirmar em build que `collections.article` existe; senão usar `getFilteredByTag("article")` no config |
| Pagefind aumenta tempo de CI | Cache npm + job só em `main` |
| Inline styles impossíveis de manter | Refactor incremental por template |
| Guestbook quebrado | Não tocar em endpoints; só estilos globais partilhados |

---

## Definition of done (checklist)

- [ ] Home é hub multi-secção, não só lista fina
- [ ] Nav + footer comunicam âmbito do site
- [ ] `/search/` funciona com Pagefind pós-build
- [ ] Índices principais têm intro + listagem mais rica
- [ ] Tokens/componentes CSS reduzem caos visual
- [ ] Longform com melhorias sem peso excessivo
- [ ] `npm run build` (+ Pagefind) passa; IndieWeb mf2 preservados
- [ ] Lista de ficheiros alterados no PR/commit

---

## Comandos úteis (após implementação)

```bash
npm install
npm run build
npx pagefind --site _site
npx serve _site   # ou npm run dev só para Eleventy sem índice Pagefind local
```

Nota: em dev, o Pagefind pode não indexar até existir `_site` completo; workflow de desenvolvimento: build → pagefind → servir `_site`.

---

## Segunda passagem (defer)

- Dupla coluna / sidenotes CSS só em `min-width` alto
- Wiki-style `[[wikilinks]]` completo
- Temas claro/escuro (hoje: só dark)
- Internacionalização

---

## Referências externas do pedido

- [IndieWebify.Me](https://indiewebify.me/) — validação mf2 após alterações em `h-card` / `h-entry`
- Inspirações conceptuais: hubs tipo Brennan, hipertexto denso tipo Gwern, rigor tipo ky.fyi — **sem copiar assets ou identidade**

---

*Plano de referência gerado para execução faseada; ajustar prioridades conforme tempo disponível.*
