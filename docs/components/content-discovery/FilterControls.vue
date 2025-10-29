<template>
  <div class="filter-controls">
    <!-- Active Filters Display -->
    <div v-if="hasActiveFilters" class="active-filters">
      <div class="active-filters-header">
        <span class="active-filters-label">Filtros Ativos:</span>
        <button @click="clearAllFilters" class="clear-all-btn">
          Limpar Todos
        </button>
      </div>
      
      <div class="active-filters-list">
        <!-- Category Filters -->
        <div
          v-for="category in activeFilters.categories"
          :key="`cat-${category}`"
          class="filter-tag category-filter"
        >
          <span class="filter-icon">📁</span>
          {{ category }}
          <button @click="removeFilter('categories', category)" class="remove-filter">
            ×
          </button>
        </div>
        
        <!-- Tag Filters -->
        <div
          v-for="tag in activeFilters.tags"
          :key="`tag-${tag}`"
          class="filter-tag tag-filter"
        >
          <span class="filter-icon">🏷️</span>
          {{ tag }}
          <button @click="removeFilter('tags', tag)" class="remove-filter">
            ×
          </button>
        </div>
        
        <!-- Content Type Filters -->
        <div
          v-for="type in activeFilters.contentTypes"
          :key="`type-${type}`"
          class="filter-tag type-filter"
        >
          <span class="filter-icon">📄</span>
          {{ getContentTypeLabel(type) }}
          <button @click="removeFilter('contentTypes', type)" class="remove-filter">
            ×
          </button>
        </div>
      </div>
    </div>

    <!-- Filter Options -->
    <div class="filter-sections">
      <!-- Categories Section -->
      <div class="filter-section">
        <h3 class="filter-section-title">
          <span class="section-icon">📁</span>
          Categorias
        </h3>
        <div class="filter-options">
          <button
            v-for="category in availableCategories"
            :key="category.name"
            :class="[
              'filter-option',
              { active: activeFilters.categories.includes(category.name) }
            ]"
            @click="toggleFilter('categories', category.name)"
          >
            <span class="option-name">{{ category.name }}</span>
            <span class="option-count">{{ category.resourceCount }}</span>
          </button>
        </div>
      </div>

      <!-- Tags Section -->
      <div class="filter-section">
        <h3 class="filter-section-title">
          <span class="section-icon">🏷️</span>
          Tags Populares
        </h3>
        <div class="filter-options">
          <button
            v-for="tag in popularTags"
            :key="tag.name"
            :class="[
              'filter-option tag-option',
              { active: activeFilters.tags.includes(tag.name) }
            ]"
            :style="{ borderColor: tag.color }"
            @click="toggleFilter('tags', tag.name)"
          >
            <span class="option-name">{{ tag.name }}</span>
            <span class="option-count">{{ tag.count }}</span>
          </button>
        </div>
      </div>

      <!-- Content Types Section -->
      <div class="filter-section">
        <h3 class="filter-section-title">
          <span class="section-icon">📄</span>
          Tipos de Conteúdo
        </h3>
        <div class="filter-options">
          <button
            v-for="type in availableContentTypes"
            :key="type"
            :class="[
              'filter-option',
              { active: activeFilters.contentTypes.includes(type) }
            ]"
            @click="toggleFilter('contentTypes', type)"
          >
            <span class="option-name">{{ getContentTypeLabel(type) }}</span>
            <span class="option-icon">{{ getContentTypeIcon(type) }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Filter Suggestions -->
    <div v-if="filterSuggestions.length > 0" class="filter-suggestions">
      <h4 class="suggestions-title">💡 Sugestões de Filtros</h4>
      <div class="suggestions-list">
        <button
          v-for="(suggestion, index) in filterSuggestions"
          :key="index"
          class="suggestion-btn"
          @click="applySuggestion(suggestion)"
        >
          {{ formatSuggestion(suggestion) }}
        </button>
      </div>
    </div>

    <!-- Results Count -->
    <div class="results-info">
      <div class="results-count">
        <span class="count-number">{{ resultsCount }}</span>
        <span class="count-label">
          {{ resultsCount === 1 ? 'resultado encontrado' : 'resultados encontrados' }}
        </span>
      </div>
      
      <div v-if="hasActiveFilters" class="filter-stats">
        <button @click="showStats = !showStats" class="stats-toggle">
          {{ showStats ? 'Ocultar' : 'Ver' }} Estatísticas
        </button>
      </div>
    </div>

    <!-- Detailed Stats (Collapsible) -->
    <div v-if="showStats && hasActiveFilters" class="detailed-stats">
      <div class="stats-section">
        <h5>Por Categoria:</h5>
        <div class="stats-list">
          <div
            v-for="(count, category) in filterStats.categoryBreakdown"
            :key="category"
            class="stat-item"
          >
            <span class="stat-name">{{ category }}</span>
            <span class="stat-count">{{ count }}</span>
          </div>
        </div>
      </div>
      
      <div class="stats-section">
        <h5>Por Tipo:</h5>
        <div class="stats-list">
          <div
            v-for="(count, type) in filterStats.contentTypeBreakdown"
            :key="type"
            class="stat-item"
          >
            <span class="stat-name">{{ getContentTypeLabel(type) }}</span>
            <span class="stat-count">{{ count }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { ActiveFilters, TagData, CategoryData } from './types'

// Props
interface Props {
  activeFilters: ActiveFilters
  availableCategories: CategoryData[]
  availableTags: TagData[]
  availableContentTypes: string[]
  resultsCount: number
  filterSuggestions?: ActiveFilters[]
  filterStats?: any
}

const props = withDefaults(defineProps<Props>(), {
  filterSuggestions: () => [],
  filterStats: () => ({
    categoryBreakdown: {},
    contentTypeBreakdown: {},
    tagBreakdown: {}
  })
})

// Emits
const emit = defineEmits<{
  updateFilters: [filters: ActiveFilters]
  clearFilters: []
}>()

// Reactive state
const showStats = ref(false)

// Computed properties
const hasActiveFilters = computed(() => {
  return props.activeFilters.categories.length > 0 ||
         props.activeFilters.tags.length > 0 ||
         props.activeFilters.contentTypes.length > 0
})

const popularTags = computed(() => {
  return props.availableTags
    .sort((a, b) => b.count - a.count)
    .slice(0, 12) // Show top 12 tags
})

// Methods
const toggleFilter = (filterType: keyof ActiveFilters, value: string) => {
  const newFilters = { ...props.activeFilters }
  const currentValues = newFilters[filterType] as string[]
  
  if (currentValues.includes(value)) {
    // Remove filter
    newFilters[filterType] = currentValues.filter(v => v !== value) as any
  } else {
    // Add filter
    newFilters[filterType] = [...currentValues, value] as any
  }
  
  emit('updateFilters', newFilters)
}

const removeFilter = (filterType: keyof ActiveFilters, value: string) => {
  const newFilters = { ...props.activeFilters }
  const currentValues = newFilters[filterType] as string[]
  newFilters[filterType] = currentValues.filter(v => v !== value) as any
  
  emit('updateFilters', newFilters)
}

const clearAllFilters = () => {
  emit('clearFilters')
}

const applySuggestion = (suggestion: ActiveFilters) => {
  emit('updateFilters', suggestion)
}

const formatSuggestion = (suggestion: ActiveFilters): string => {
  const parts: string[] = []
  
  if (suggestion.categories.length > 0) {
    parts.push(`📁 ${suggestion.categories.join(', ')}`)
  }
  
  if (suggestion.tags.length > 0) {
    parts.push(`🏷️ ${suggestion.tags.join(', ')}`)
  }
  
  if (suggestion.contentTypes.length > 0) {
    parts.push(`📄 ${suggestion.contentTypes.map(t => getContentTypeLabel(t)).join(', ')}`)
  }
  
  return parts.join(' + ')
}

const getContentTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    'blog': 'Blog Posts',
    'guide': 'Guias',
    'resource': 'Recursos',
    'reference': 'Referências',
    'tutorial': 'Tutoriais',
    'tool': 'Ferramentas',
    'list': 'Listas',
    'general': 'Geral'
  }
  
  return labels[type] || type
}

const getContentTypeIcon = (type: string): string => {
  const icons: Record<string, string> = {
    'blog': '📝',
    'guide': '📖',
    'resource': '🔧',
    'reference': '📚',
    'tutorial': '🎓',
    'tool': '⚒️',
    'list': '📋',
    'general': '📄'
  }
  
  return icons[type] || '📄'
}

// Watch for filter changes to update URL
watch(
  () => props.activeFilters,
  (newFilters) => {
    // Update URL without page reload
    const params = new URLSearchParams()
    
    if (newFilters.categories.length > 0) {
      params.set('categories', newFilters.categories.join(','))
    }
    
    if (newFilters.tags.length > 0) {
      params.set('tags', newFilters.tags.join(','))
    }
    
    if (newFilters.contentTypes.length > 0) {
      params.set('types', newFilters.contentTypes.join(','))
    }
    
    const newUrl = params.toString() ? 
      `${window.location.pathname}?${params.toString()}` : 
      window.location.pathname
    
    window.history.replaceState({}, '', newUrl)
  },
  { deep: true }
)
</script>

<style scoped>
.filter-controls {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.active-filters {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.active-filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.active-filters-label {
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.clear-all-btn {
  background: #EF4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.clear-all-btn:hover {
  background: #DC2626;
}

.active-filters-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}

.category-filter {
  background: rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.3);
}

.type-filter {
  background: rgba(245, 158, 11, 0.2);
  border-color: rgba(245, 158, 11, 0.3);
}

.filter-icon {
  font-size: 0.8rem;
}

.remove-filter {
  background: none;
  border: none;
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
  padding: 0;
  margin-left: 0.25rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.remove-filter:hover {
  opacity: 1;
}

.filter-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.filter-section {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  padding: 1rem;
}

.filter-section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.section-icon {
  font-size: 1rem;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--vp-c-text-1);
}

.filter-option:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.filter-option.active {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
}

.tag-option.active {
  border-width: 2px;
}

.option-name {
  font-weight: 500;
}

.option-count {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}

.option-icon {
  font-size: 1.2rem;
}

.filter-suggestions {
  margin-bottom: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.suggestions-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.suggestions-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.suggestion-btn {
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: var(--vp-c-text-1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.suggestion-btn:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
}

.results-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.results-count {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.count-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #3B82F6;
}

.count-label {
  color: var(--vp-c-text-2);
}

.stats-toggle {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--vp-c-text-2);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.stats-toggle:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: var(--vp-c-text-1);
}

.detailed-stats {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stats-section h5 {
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
  font-weight: bold;
}

.stats-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 4px;
}

.stat-name {
  color: var(--vp-c-text-2);
}

.stat-count {
  font-weight: bold;
  color: #3B82F6;
}

@media (max-width: 768px) {
  .filter-sections {
    grid-template-columns: 1fr;
  }
  
  .results-info {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .detailed-stats {
    grid-template-columns: 1fr;
  }
  
  .active-filters-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>