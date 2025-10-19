<script setup>
import { createContentLoader } from 'vitepress'

// Carrega todos os posts da pasta /blog
export const data = await createContentLoader('/blog/*.md', {
  transform(raw) {
    return raw
      .map((p) => ({
        title: p.frontmatter.title,
        date: p.frontmatter.date,
        description: p.frontmatter.description,
        link: p.url,
        tags: p.frontmatter.tags || [],
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  },
})
</script>

<template>
  <div class="blog-list">
    <h1 class="title">📚 Últimas Postagens</h1>
    <ul class="posts">
      <li v-for="post in data" :key="post.link" class="post-item">
        <a :href="post.link" class="post-title">{{ post.title }}</a>
        <div class="post-meta">
          <time>{{ new Date(post.date).toLocaleDateString('pt-BR') }}</time>
          <span v-if="post.tags.length" class="tags">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="tag"
            >#{{ tag }}</span>
          </span>
        </div>
        <p v-if="post.description" class="post-desc">{{ post.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.blog-list {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.posts {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.post-title:hover {
  text-decoration: underline;
}

.post-meta {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0.25rem 0;
}

.tags {
  margin-left: 0.5rem;
}

.tag {
  margin-right: 0.5rem;
  color: var(--vp-c-text-3);
}

.post-desc {
  margin-top: 0.5rem;
  color: var(--vp-c-text-1);
}
</style>
