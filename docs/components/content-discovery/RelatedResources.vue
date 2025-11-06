<template>
  <div class="related-resources">
    <div class="section-header">
      <h3 class="section-title">
        <span class="title-icon">🔗</span>
        Recursos Relacionados
      </h3>
    </div>

    <div class="resources-grid">
      <div
        v-for="resource in mockResources"
        :key="resource.url"
        class="resource-card"
        @click="openResource(resource.url)"
      >
        <h4 class="resource-title">{{ resource.title }}</h4>
        <p class="resource-excerpt">{{ resource.excerpt }}</p>
        
        <div class="resource-tags">
          <span
            v-for="tag in resource.tags.slice(0, 3)"
            :key="tag"
            class="resource-tag"
          >
            {{ tag }}
          </span>
        </div>

        <div class="card-actions">
          <a 
            :href="resource.url" 
            class="read-more-btn"
            @click.stop
          >
            Ler Mais
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Props
interface Props {
  currentPage?: {
    title: string
    url: string
    tags?: string[]
    category?: string
  }
  maxResults?: number
  algorithm?: string
}

const props = withDefaults(defineProps<Props>(), {
  maxResults: 3,
  algorithm: 'hybrid'
})

// Mock resources - simplified version
const mockResources = ref([
  {
    title: "Diário de Bordo",
    url: "/dbordo/",
    excerpt: "Confira guias curados e anotações técnicas",
    tags: ["guias", "documentação", "tutoriais"],
    category: "documentação"
  },
  {
    title: "Blog",
    url: "/blog/",
    excerpt: "Leia as últimas atualizações e posts do projeto",
    tags: ["blog", "atualizações", "novidades"],
    category: "blog"
  }
])

// Methods
const openResource = (url: string) => {
  if (url.startsWith('http')) {
    window.open(url, '_blank')
  } else {
    window.location.href = url
  }
}
</script>

<style scoped>
.related-resources {
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.section-header {
  margin-bottom: 2rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin: 0;
}

.title-icon {
  font-size: 1.2rem;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.resource-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.resource-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.resource-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
}

.resource-excerpt {
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.resource-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.resource-tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.card-actions {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.read-more-btn {
  color: #3B82F6;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.read-more-btn:hover {
  color: #2563EB;
}

@media (max-width: 768px) {
  .related-resources {
    padding: 1rem;
  }
  
  .resources-grid {
    grid-template-columns: 1fr;
  }
}
</style>