<template>
  <div class="tags-page">
    <!-- Header Section -->
    <div class="tags-header">
      <h1 class="tags-title">🏷️ Tags & Categorias</h1>
      <p class="tags-description">
        Explore o conteúdo do piratas.club por tags e categorias. 
        Descubra recursos organizados pelos temas que mais interessam você.
      </p>
    </div>

    <!-- Search and Filters -->
    <div class="tags-controls">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="🔍 Buscar tags..."
          class="search-input"
          @input="handleSearch"
        />
      </div>
      
      <div class="filter-controls">
        <select v-model="selectedCategory" class="category-filter" @change="handleCategoryFilter">
          <option value="">Todas as Categorias</option>
          <option v-for="category in categories" :key="category.name" :value="category.name">
            {{ category.name }} ({{ category.resourceCount }})
          </option>
        </select>
        
        <select v-model="sortBy" class="sort-filter" @change="handleSort">
          <option value="count">Mais Populares</option>
          <option value="name">Alfabética</option>
          <option value="recent">Mais Recentes</option>
        </select>
      </div>
    </div>

    <!-- Statistics -->
    <div class="tags-stats">
      <div class="stat-item">
        <span class="stat-number">{{ filteredTags.length }}</span>
        <span class="stat-label">Tags</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ categories.length }}</span>
        <span class="stat-label">Categorias</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">{{ totalResources }}</span>
        <span class="stat-label">Recursos</span>
      </div>
    </div>

    <!-- Categories Overview -->
    <div v-if="!searchQuery && !selectedCategory" class="categories-section">
      <h2 class="section-title">📚 Categorias Principais</h2>
      <div class="categories-grid">
        <div
          v-for="category in categories"
          :key="category.name"
          class="category-card"
          @click="selectCategory(category.name)"
        >
          <div class="category-header">
            <h3 class="category-name">{{ category.name }}</h3>
            <span class="category-count">{{ category.resourceCount }}</span>
          </div>
          <p class="category-description">{{ category.description }}</p>
          <div class="category-tags">
            <span
              v-for="tag in category.tags.slice(0, 5)"
              :key="tag"
              class="category-tag"
            >
              {{ tag }}
            </span>
            <span v-if="category.tags.length > 5" class="more-tags">
              +{{ category.tags.length - 5 }} mais
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tags Cloud/Grid -->
    <div class="tags-section">
      <div class="section-header">
        <h2 class="section-title">
          {{ selectedCategory ? `🏷️ Tags em ${selectedCategory}` : '🏷️ Todas as Tags' }}
        </h2>
        <div class="view-toggle">
          <button
            :class="{ active: viewMode === 'cloud' }"
            @click="viewMode = 'cloud'"
            class="view-btn"
          >
            Nuvem
          </button>
          <button
            :class="{ active: viewMode === 'grid' }"
            @click="viewMode = 'grid'"
            class="view-btn"
          >
            Grade
          </button>
        </div>
      </div>

      <!-- Tags Cloud View -->
      <div v-if="viewMode === 'cloud'" class="tags-cloud">
        <button
          v-for="tag in filteredTags"
          :key="tag.name"
          :style="{ 
            fontSize: getTagSize(tag.count) + 'rem',
            color: tag.color 
          }"
          class="tag-cloud-item"
          @click="selectTag(tag.name)"
        >
          {{ tag.name }}
          <span class="tag-count">({{ tag.count }})</span>
        </button>
      </div>

      <!-- Tags Grid View -->
      <div v-else class="tags-grid">
        <div
          v-for="tag in filteredTags"
          :key="tag.name"
          class="tag-card"
          @click="selectTag(tag.name)"
        >
          <div class="tag-header">
            <span class="tag-name" :style="{ color: tag.color }">{{ tag.name }}</span>
            <span class="tag-count">{{ tag.count }}</span>
          </div>
          <div class="tag-category">{{ tag.category }}</div>
          <div class="tag-bar">
            <div 
              class="tag-bar-fill" 
              :style="{ 
                width: getTagPercentage(tag.count) + '%',
                backgroundColor: tag.color 
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredTags.length === 0" class="empty-state">
      <div class="empty-icon">🔍</div>
      <h3 class="empty-title">Nenhuma tag encontrada</h3>
      <p class="empty-description">
        Tente ajustar os filtros ou buscar por outros termos.
      </p>
      <button @click="clearFilters" class="clear-btn">
        Limpar Filtros
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { TagData, CategoryData } from './types'

// Props
interface Props {
  tags?: TagData[]
  categories?: CategoryData[]
}

const props = withDefaults(defineProps<Props>(), {
  tags: () => [],
  categories: () => []
})

// Reactive state
const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref('count')
const viewMode = ref<'cloud' | 'grid'>('cloud')

// Computed properties
const filteredTags = computed(() => {
  let filtered = [...props.tags]

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(tag => 
      tag.name.toLowerCase().includes(query)
    )
  }

  // Filter by category
  if (selectedCategory.value) {
    filtered = filtered.filter(tag => 
      tag.category === selectedCategory.value
    )
  }

  // Sort
  switch (sortBy.value) {
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'count':
      filtered.sort((a, b) => b.count - a.count)
      break
    case 'recent':
      // For now, same as count - could be enhanced with lastUpdated data
      filtered.sort((a, b) => b.count - a.count)
      break
  }

  return filtered
})

const totalResources = computed(() => {
  return props.categories.reduce((sum, cat) => sum + cat.resourceCount, 0)
})

const maxTagCount = computed(() => {
  return Math.max(...props.tags.map(tag => tag.count), 1)
})

// Methods
const handleSearch = () => {
  // Search is reactive through computed property
}

const handleCategoryFilter = () => {
  // Filter is reactive through computed property
}

const handleSort = () => {
  // Sort is reactive through computed property
}

const selectCategory = (categoryName: string) => {
  selectedCategory.value = categoryName
  searchQuery.value = ''
}

const selectTag = (tagName: string) => {
  // Navigate to filtered content or emit event
  const url = `/tags/${encodeURIComponent(tagName)}`
  window.location.href = url
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  sortBy.value = 'count'
}

const getTagSize = (count: number): number => {
  const minSize = 0.8
  const maxSize = 2.5
  const ratio = count / maxTagCount.value
  return minSize + (ratio * (maxSize - minSize))
}

const getTagPercentage = (count: number): number => {
  return (count / maxTagCount.value) * 100
}

// Lifecycle
onMounted(() => {
  // Load data if not provided via props
  if (props.tags.length === 0) {
    loadTagsData()
  }
})

const loadTagsData = async () => {
  try {
    // This would load from the generated tags-data.json
    const response = await fetch('/tags-data.json')
    if (response.ok) {
      const data = await response.json()
      // Update props or emit to parent
      console.log('Loaded tags data:', data)
    }
  } catch (error) {
    console.error('Error loading tags data:', error)
  }
}
</script>

<style scoped>
.tags-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.tags-header {
  text-align: center;
  margin-bottom: 3rem;
}

.tags-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3B82F6, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tags-description {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}

.tags-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.search-box {
  flex: 1;
  min-width: 300px;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-1);
  font-size: 1rem;
}

.search-input:focus {
  outline: none;
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.filter-controls {
  display: flex;
  gap: 0.5rem;
}

.category-filter,
.sort-filter {
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-1);
}

.tags-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #3B82F6;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.categories-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.category-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.category-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.category-count {
  background: #3B82F6;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}

.category-description {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.category-tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.more-tags {
  color: #3B82F6;
  font-size: 0.8rem;
  font-weight: bold;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.view-toggle {
  display: flex;
  gap: 0.5rem;
}

.view-btn {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-2);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-btn.active {
  background: #3B82F6;
  color: white;
  border-color: #3B82F6;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.tag-cloud-item {
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  line-height: 1.2;
}

.tag-cloud-item:hover {
  opacity: 0.7;
  transform: scale(1.1);
}

.tag-count {
  font-size: 0.7em;
  opacity: 0.7;
}

.tags-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.tag-card {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.tag-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.tag-name {
  font-weight: bold;
  font-size: 1.1rem;
}

.tag-category {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.tag-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.tag-bar-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.empty-description {
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}

.clear-btn {
  padding: 0.75rem 1.5rem;
  background: #3B82F6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.clear-btn:hover {
  background: #2563EB;
}

@media (max-width: 768px) {
  .tags-page {
    padding: 1rem;
  }
  
  .tags-controls {
    flex-direction: column;
  }
  
  .filter-controls {
    flex-direction: column;
  }
  
  .tags-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .section-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .tags-grid {
    grid-template-columns: 1fr;
  }
}
</style>