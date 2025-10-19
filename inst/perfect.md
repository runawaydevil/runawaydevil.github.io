# 📋 Padrão Perfeito de Frontmatter e Formatação

Este documento define o padrão ideal de frontmatter e formatação para todos os arquivos do sistema piratas.club.

## 🎯 Frontmatter Padrão

### Estrutura Básica Obrigatória

```yaml
---
title: "🎯 Título do Documento"
description: "Descrição clara e concisa do conteúdo em até 160 caracteres"
lang: pt-BR
lastUpdated: true
---
```

### Frontmatter Completo (Recomendado)

```yaml
---
title: "🎯 Título do Documento"
description: "Descrição clara e concisa do conteúdo em até 160 caracteres"
lang: pt-BR
lastUpdated: true
sidebar_position: 1
tags:
  - tag1
  - tag2
  - tag3
keywords:
  - palavra-chave1
  - palavra-chave2
  - palavra-chave3
---
```

### Frontmatter para Categorias Especiais

#### Para Guias Técnicos
```yaml
---
title: "🔧 Guia Completo de [Tópico]"
description: "Guia passo-a-passo para [funcionalidade específica]"
lang: pt-BR
lastUpdated: true
category: guide
difficulty: beginner|intermediate|advanced
estimated_time: "30 minutos"
requirements:
  - Requisito 1
  - Requisito 2
---
```

#### Para Recursos/Listas
```yaml
---
title: "📦 Recursos de [Categoria]"
description: "Coleção curada de recursos para [área específica]"
lang: pt-BR
lastUpdated: true
category: resources
total_items: 50
verified: true
---
```

#### Para Informações Técnicas
```yaml
---
title: "📊 Base de Dados de [Tópico]"
description: "Interface amigável para explorar [tipo de dados]"
lang: pt-BR
lastUpdated: true
category: database
total_entries: 100
last_sync: "2025-01-01"
---
```

## 📝 Formatação de Conteúdo

### Estrutura de Documento Padrão

```markdown
# 🎯 Título Principal

Breve introdução explicando o que o usuário encontrará neste documento.

## 🎯 O que você encontrará aqui

- **Categoria 1**: Descrição breve
- **Categoria 2**: Descrição breve
- **Categoria 3**: Descrição breve

## ⚡ Características

- **📊 Estatística**: Valor quantificado
- **🔄 Atualização**: Frequência de atualização
- **🛡️ Segurança**: Nível de segurança
- **🌍 Escopo**: Alcance geográfico

## 🚀 Seções Principais

### 📋 Subseção 1

Conteúdo detalhado com:

- Listas organizadas
- **Destaques importantes**
- Links relevantes

### 📋 Subseção 2

Mais conteúdo estruturado...

## ⚠️ Avisos Importantes

::: warning Título do Aviso
Conteúdo do aviso importante que o usuário deve saber.
:::

::: tip Dica Útil
Dica prática para melhorar a experiência do usuário.
:::

::: info Informação
Informação adicional relevante para o contexto.
:::

---

*Texto de rodapé com informações sobre atualização, autor ou fonte.*
```

## 🎨 Padrões de Emojis

### Categorias Principais
- 📦 **Recursos Gerais**
- 📖 **Guias e Tutoriais**
- 🔧 **Utilitários**
- 🎲 **Outros Recursos**
- 🌍 **Conteúdo Internacional**
- 📊 **Informações**
- 🏴‍☠️ **Pirataria**
- 🛡️ **Segurança**

### Subcategorias
- 🎬 **Filmes e TV**
- 🎵 **Música**
- 📚 **Livros**
- 🎮 **Jogos**
- 💻 **Software**
- 📱 **Mobile**
- 🔒 **Privacidade**
- 🌐 **Web**
- 🔍 **Busca**
- 📊 **Produtividade**

### Estados e Ações
- ⚠️ **Avisos**
- 💡 **Dicas**
- ✅ **Concluído**
- 🔄 **Atualização**
- 🆕 **Novo**
- 🛡️ **Seguro**
- ⚡ **Rápido**
- 🎯 **Focado**

## 📋 Estrutura de Listas

### Lista de Recursos
```markdown
- ⭐ **[Nome do Recurso](URL)**: Descrição detalhada do recurso e suas características principais.
- ⭐ **[Nome do Recurso](URL)**: Descrição detalhada do recurso e suas características principais.
- **[Nome do Recurso](URL)**: Descrição detalhada do recurso e suas características principais.
```

### Lista de Características
```markdown
- **📊 Estatística**: Valor quantificado
- **🔄 Atualização**: Frequência de atualização
- **🛡️ Segurança**: Nível de segurança
- **🌍 Escopo**: Alcance geográfico
```

## 🔗 Padrões de Links

### Links Externos
```markdown
- ⭐ **[Nome do Site](https://exemplo.com)**: Descrição do site e suas características.
```

### Links Internos
```markdown
- [Nome da Página](/caminho/para/pagina): Descrição da página interna.
```

### Links com Alternativas
```markdown
- **[Site Principal](https://site.com)** - Site principal
- **[Site Alternativo](https://alternativo.com)** - Site alternativo
```

## 📊 Estrutura de Tabelas

```markdown
| Coluna 1 | Coluna 2 | Coluna 3 |
|----------|----------|----------|
| Dado 1 | Dado 2 | Dado 3 |
| Dado 4 | Dado 5 | Dado 6 |
```

## 🎯 Diretrizes de Escrita

### Títulos
- Use emojis relevantes no início
- Seja claro e descritivo
- Mantenha consistência com a categoria
- Use maiúsculas apenas na primeira letra

### Descrições
- Máximo 160 caracteres
- Seja claro e objetivo
- Inclua palavras-chave relevantes
- Use linguagem acessível

### Conteúdo
- Use linguagem clara e objetiva
- Organize informações de forma lógica
- Inclua avisos de segurança quando necessário
- Mantenha consistência no tom

### Links
- Sempre use texto descritivo
- Verifique se os links estão funcionando
- Use ⭐ para recursos recomendados
- Inclua descrições úteis

## 🔄 Processo de Atualização

1. **Verificar Frontmatter**: Todos os campos obrigatórios preenchidos
2. **Revisar Conteúdo**: Gramática, clareza e organização
3. **Testar Links**: Verificar se todos os links funcionam
4. **Validar Emojis**: Usar apenas emojis do padrão definido
5. **Atualizar Data**: Sempre atualizar `lastUpdated: true`

## 📝 Sistema de Postagens no VitePress

### O que são "postagens" no VitePress

VitePress não tem "posts" nativos como um CMS. **Post = arquivo Markdown numa pasta** (ex.: `blog/` ou `posts/`) com frontmatter (metadados). O site é gerado por roteamento por arquivos: a URL nasce do caminho do arquivo.

### Estrutura Mínima

```
docs/
  blog/
    meu-primeiro-post.md
    outro-post.md
  .vitepress/
    config.ts
```

### Frontmatter Típico de um Post

No topo de cada `.md`:

```yaml
---
title: Meu primeiro post
description: Introdução rápida
date: 2025-10-18
tags: [VitePress, Blog]
author: Pablo
---
```

Conteúdo em Markdown...

O frontmatter controla título, data, etc., e pode sobrepor configs do tema.

### Como Listar Posts (Página de Índice)

Para ter uma página "/blog" que lista seus posts, usa-se o **data loader `createContentLoader`** no build, que lê todos os `.md` de uma pasta e entrega um array com os frontmatters. Exemplo comum: ordenar por `date` e renderizar cartões.

#### Passos Rápidos:

1. **Crie um componente `BlogList.vue`** no seu tema (ou em `docs/.vitepress/theme/`).

2. **Dentro dele, carregue os posts:**
   ```vue
   <script setup>
   import { createContentLoader } from 'vitepress'
   
   const posts = createContentLoader('/blog/*.md', {
     transform(data) {
       return data.sort((a, b) => new Date(b.date) - new Date(a.date))
     }
   })
   </script>
   ```

3. **Crie `docs/blog/index.md`** com algo simples:
   ```markdown
   ---
   title: Blog
   ---
   <!-- monta a lista via componente -->
   <BlogList />
   ```

::: info Observação
O VitePress não gera sozinho uma página de "lista de posts"; essa listagem é feita com `createContentLoader` ou usando um tema/plugin de blog.
:::

### Sidebar Automática ≠ Posts

A sua sidebar automática é outra história: vem de config/plug-ins (ex.: `vitepress-sidebar`) que varrem pastas e montam o menu. Isso não interfere na ideia de "posts"; você só organiza os `.md`.

### Extras Úteis para "Blog"

- **RSS**: Não é nativo; dá para gerar no build com plugin (ex.: `vitepress-plugin-rss`) ou com o pacote `feed` + hook de build.

- **Temas/Starters de blog**: Existem temas e starters que já trazem lista de posts, tags e estilos (ex.: VitePress Blog Theme, Blog Starter).

- **Personalização de tema**: Dá para estender o tema padrão (registrar componentes globais, ajustar CSS, slots).

### Resumo Prático

1. **Crie uma pasta para posts** (ex.: `docs/blog/`)
2. **Cada post é um `.md`** com `title`, `date`, `tags`, etc.
3. **Crie uma página `blog/index.md`** e um componente que usa `createContentLoader` para listar e ordenar
4. **(Opcional) Adicione RSS** e/ou um tema de blog pronto

---

*Este documento serve como referência para manter consistência e qualidade em todo o sistema piratas.club.*

*Última atualização: 2025-01-01*
