<template>
  <div class="blog-posts">
    <h2>📚 Posts Recentes</h2>
    <div class="posts-grid">
      <div 
        v-for="post in recentPosts" 
        :key="post.url"
        class="post-card"
      >
        <div class="post-header">
          <h3>
            <a :href="post.url">{{ post.title }}</a>
          </h3>
          <div class="post-meta">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span class="post-author">{{ post.author }}</span>
          </div>
        </div>
        <p class="post-description">{{ post.description }}</p>
        <div class="post-tags">
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="tag"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    <div class="blog-footer">
      <a href="/blog/posts/" class="view-all-link">Ver Todos os Posts →</a>
    </div>
  </div>
</template>

<script setup>
import { createContentLoader } from 'vitepress'

const posts = await createContentLoader('blog/posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: frontmatter.date,
        description: frontmatter.description,
        tags: frontmatter.tags || [],
        author: frontmatter.author || 'Pablo Murad'
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }
}).load()

// Limitar a 3 posts mais recentes
const recentPosts = posts.slice(0, 3)

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog-posts {
  margin: 2rem 0;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.post-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.post-card:hover {
  border-color: rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.post-header h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
}

.post-header h3 a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-header h3 a:hover {
  color: #f8f8f8;
  text-decoration: underline;
}

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-bottom: 1rem;
}

.post-description {
  color: #e4e4e7;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.blog-footer {
  text-align: center;
  margin-top: 2rem;
}

.view-all-link {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.view-all-link:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
</style>
