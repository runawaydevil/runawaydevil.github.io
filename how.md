# Como o sistema funciona: Being Pablo

Este arquivo descreve a arquitetura, o visual e o conteúdo do projeto **"Being Pablo"**, um site pessoal criado por Pablo Murad focado nos ideais da **IndieWeb** (Web Independente).

## 1. O que foi feito e como funciona a arquitetura

O sistema é um site estático e foi construído usando o gerador de sites [Eleventy (11ty)](https://www.11ty.dev/) versão `^3.1.5` rodando no Node.js. 

### Infraestrutura Básica
- **Configuração do 11ty:** O arquivo principal de configuração é `./eleventy.config.js`. Ele instrui que os arquivos de entrada (como o conteúdo Markdown) estejam no diretório `src`, e o site compilado deve ser gerado no diretório `_site`.
- **Motor de Templates:** O Eleventy converte arquivos `.md` (Markdown) para HTML. Ele foi configurado para usar [Nunjucks (njk)](https://mozilla.github.io/nunjucks/) tanto para templates HTML quanto para processamento de Markdown. Os arquivos de template (_layouts_) se encontram em `src/_includes`.
- **Scripts do NPM:** A compilação é feita com o comando `npm run build` (que chama o pacote da CLI do `@11ty/eleventy`) e o modo de desenvolvimento interativo usa `npm run dev` (que inicia um servidor local via `npx @11ty/eleventy --serve`).

### Fluxo de Trabalho e Estrutura de Conteúdo
1. **Pages x Posts:** O sistema diferencia ativamente *páginas estáveis* (como `/about`) de *postagens cronológicas*. 
   - Postagens ficam na pasta `src/posts/`. Um arquivo `posts.json` de diretório aplica automaticamente os permalinks na estrutura `journal/YYYY/MM/DD/slug/` e as tags dinâmicas. O sistema de classificação de posts do Indiekit foi configurado com um mapeamento explícito: o tipo "note" vai para a sessão `/journal` e o tipo "article" para `/articles`.
   - **Numeração Global do Journal:** O projeto possui um sistema de numeração contínua, global e monotônica (ex: #1, #2, #3) para todas as notas em `/journal`, indexado e exposto para o Eleventy de maneira estática e constante entre builds.
   - O guia para clientes Indiekit e uso de Micropub é detalhado no arquivo próprio `src/INDIEKIT-GUIDE.md`.
   - Recursos utilitários de data (como `dateToISO` e `dateToPermalink`) são gerenciados de forma nativa por blocos Vanilla JS no `eleventy.config.js`, sem usar bibliotecas pesadas de formato.
2. O conteúdo textual centraliza-se na compilação do Markdown usando loops e paginação Nunjucks integrados.
3. Arquivos declaram no Front Matter os metadados e o template a ser usado (ex: `layout: page.njk` ou `layout: post.njk`).
4. Os "assets" estáticos (CSS Vanilla) em `src/assets/css/` são copiados em passthrough para _site (`eleventyConfig.addPassthroughCopy`).

## 2. Como o sistema se parece (Design e Visual)

O design foi concebido sob a premissa de **Minimalismo Quente** (_Warm, minimalistic palette_), focado total e estritamente em leitura e reflexão. É um site sem ruídos, cujo visual evita componentes supérfluos para centralizar na experiência de leitura.

### Tipografia
- **Corpo do Texto (Body):** Fonte *Lora* (serifada) para um tom clássico e confortável.
- **Cabeçalhos (Headings):** Fonte *Nunito* (sem serifa) para equilibrar com a formalidade da leitura.
- **Meta-informação e UI (Menus, Rodapé):** *IBM Plex Mono* (monoespaçada) para dar um contraste técnico/digital.

### Paleta de Cores e Estilos
O sistema utiliza variáveis nativas de CSS e tem o seguinte esquema Dark Mode elegante:
- **Fundo (`--bg-color`):** `#1a1918` (Um chumbo/marrom extremamente escuro).
- **Texto Principal (`--text-color`):** `#e8e6e1` e **Texto Secundário/Desbotado:** `#a39f98`.
- **Detalhes e Interações (`--accent-color`):** `#d1bfae` (Um tom de papel pergaminho para os links quando o usuário passa o mouse).
- **Caixa de seleção (`--selection-bg`):** `--selection-bg: #4a4642`.

### Layout
- A largura de leitura é estrategicamente limitada em `max-width: 65ch` (caracteres) para o tamanho de linha ideal garantindo máximo conforto humano e não forçar o movimento dos olhos.
- O site é totalmente responsivo, ajustando seus espaçamentos quando visto em telas pequenas (menor que `600px`).
- Estilização pura usando HTML5 semântico com navegação e um rodapé desenhado para ter minimalismo máximo, abrigando marcações IndieWeb e um divisor SVG customizado de um gatinho ("Catito") que dita a personalidade do espaço.
- **Página 404:** Dinâmica, minimalista e direta. A exibição de "página não encontrada" recorre a uma imagem fornecida pela API estática `http.cat`.

## 3. O que ele tem (Conteúdo)

O conteúdo baseia-se na transparência intelectual e nas ideias da comunidade IndieWeb de hospedagem própria. 

### Arquitetura IndieWeb (Microformats e Feeds)
O sistema incorpora marcações estruturais semânticas exigidas pela comunidade IndieWeb:
- **`h-card` Global:** Informações do autor centralizadas (como no rodapé e identificações `rel="me"`).
- **`h-entry` e `h-feed`:** Cada post possui marcação avançada com definição autoral (`p-author`), tempos de atualização (`dt-published`, `dt-updated`) e escopo de leitura (`e-content`). A página `/journal` formatada programaticamente expõe todas as tags como feeds dinâmicos para agentes digitais.
- **Syndication Feed:** Um arquivo Atom XML completo é gerado nativamente (`/feed.xml`) permitindo o Discovery através do `rel="alternate"` no `<head>` automático para inscrição de leitores de feeds clássicos.
- **Webmentions & Micropub:** O site está configurado com endpoints de Micropub, authorization e token em seu cabeçalho principal (`<head>`). Adicionalmente, os posts isolados trazem navegação conectada e abrigam conteineres passivos de Webmentions sem comprometer a identidade visual.

### Páginas (Arquivos de origem Markdown)

1. **/ (Home - `index.md`)**
   - Título: "Who am I?"
   - Página inicial de apresentação pessoal. Usa de forma programática scripts Nunjucks para extrair e renderizar dinamicamente contadores com as **10 últimas atualizações** do site exclusivamente das coleções "journal" e "articles", ocultando links como os de tipo "bookmarks".

2. **/about (`about.md`)**
   - Título: "About"
   - Expande a missão por trás do site, citando os princípios adotados: "Own Your Data", "Design with Restraint" e "Open Web".

3. **/now (`now.md`)**
   - Título: "What I'm doing now"
   - Registra no que o Pablo foca a sua energia em um determinado espaço temporal (atualmente: configuração da IndieWeb, design editorial / calm technology e refinamento da página digital _"Being Pablo"_). Baseia-se no conceito de _Now Page_ de Derek Sivers.

4. **/journal (`journal.md`)**
   - Título: "Journal"
   - É a fundação do blog. Uma página de listagem cronológica (`h-feed`) que utiliza a funcionalidade avançada de paginação nativa do Eleventy (`pagination`), separando dinamicamente postagens antigas em páginas sequenciais com navegação inferior, para não inflar o documento principal.

5. **/links (`links.md`)**
   - Título: "Links"
   - Direcionado ao compartilhamento de referência e ligações. Espaço reservado para listar as amizades, Webrings e espaços favoritos na internet. Serve também de elo para outras subpáginas e listagens.

6. **/machines (`machines.md`)**
   - Título: "Machines"
   - Uma galeria em forma de inventário de hardware listando os recursos, computadores e servidores mantidos.
