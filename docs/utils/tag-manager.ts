// Tag and Category Management
import type { TagData, CategoryData, TagIndex, CategoryIndex } from '../components/content-discovery/types'

export class TagManager {
  private tagIndex: TagIndex = {}
  private categoryIndex: CategoryIndex = {}

  /**
   * Initialize from existing index data
   */
  initialize(tagIndex: TagIndex, categoryIndex: CategoryIndex): void {
    this.tagIndex = { ...tagIndex }
    this.categoryIndex = { ...categoryIndex }
  }

  /**
   * Get all tags sorted by count
   */
  getAllTags(): TagData[] {
    return Object.entries(this.tagIndex)
      .map(([name, data]) => ({
        name,
        count: data.count,
        category: data.category,
        color: this.generateTagColor(name)
      }))
      .sort((a, b) => b.count - a.count)
  }

  /**
   * Get tags by category
   */
  getTagsByCategory(categoryName: string): TagData[] {
    return this.getAllTags().filter(tag => tag.category === categoryName)
  }

  /**
   * Get all categories sorted by resource count
   */
  getAllCategories(): CategoryData[] {
    return Object.entries(this.categoryIndex)
      .map(([name, data]) => ({
        name,
        description: this.getCategoryDescription(name),
        tags: this.getTagNamesByCategory(name),
        resourceCount: data.count
      }))
      .sort((a, b) => b.resourceCount - a.resourceCount)
  }

  /**
   * Get category by name
   */
  getCategory(categoryName: string): CategoryData | null {
    const data = this.categoryIndex[categoryName]
    if (!data) return null

    return {
      name: categoryName,
      description: this.getCategoryDescription(categoryName),
      tags: this.getTagNamesByCategory(categoryName),
      resourceCount: data.count
    }
  }

  /**
   * Get tag names for a category
   */
  private getTagNamesByCategory(categoryName: string): string[] {
    return Object.entries(this.tagIndex)
      .filter(([, data]) => data.category === categoryName)
      .map(([name]) => name)
      .sort()
  }

  /**
   * Search tags by name
   */
  searchTags(query: string): TagData[] {
    const normalizedQuery = query.toLowerCase().trim()
    if (!normalizedQuery) return this.getAllTags()

    return this.getAllTags().filter(tag =>
      tag.name.toLowerCase().includes(normalizedQuery)
    )
  }

  /**
   * Get popular tags (top N by count)
   */
  getPopularTags(limit: number = 10): TagData[] {
    return this.getAllTags().slice(0, limit)
  }

  /**
   * Get related tags based on co-occurrence
   */
  getRelatedTags(tagName: string, limit: number = 5): TagData[] {
    const tagData = this.tagIndex[tagName]
    if (!tagData) return []

    // Get pages that have this tag
    const tagPages = new Set(tagData.pages)
    
    // Count co-occurrences with other tags
    const coOccurrences: Record<string, number> = {}
    
    Object.entries(this.tagIndex).forEach(([otherTagName, otherTagData]) => {
      if (otherTagName === tagName) return
      
      const commonPages = otherTagData.pages.filter(pageId => tagPages.has(pageId))
      if (commonPages.length > 0) {
        coOccurrences[otherTagName] = commonPages.length
      }
    })

    // Sort by co-occurrence count and return top results
    return Object.entries(coOccurrences)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
      .map(([tagName]) => this.getTagData(tagName))
      .filter((tag): tag is TagData => tag !== null)
  }

  /**
   * Get tag data by name
   */
  private getTagData(tagName: string): TagData | null {
    const data = this.tagIndex[tagName]
    if (!data) return null

    return {
      name: tagName,
      count: data.count,
      category: data.category,
      color: this.generateTagColor(tagName)
    }
  }

  /**
   * Generate hierarchical category structure
   */
  getCategoryHierarchy(): CategoryHierarchy[] {
    const categories = this.getAllCategories()
    const hierarchy: CategoryHierarchy[] = []

    // Group by main categories
    const mainCategories = new Set(['dbordo', 'misc', 'blog', 'ref'])
    
    mainCategories.forEach(mainCat => {
      const category = categories.find(cat => cat.name === mainCat)
      if (category) {
        hierarchy.push({
          ...category,
          subcategories: this.getSubcategories(mainCat),
          level: 0
        })
      }
    })

    // Add remaining categories
    categories
      .filter(cat => !mainCategories.has(cat.name))
      .forEach(category => {
        hierarchy.push({
          ...category,
          subcategories: [],
          level: 1
        })
      })

    return hierarchy
  }

  /**
   * Get subcategories for a main category
   */
  private getSubcategories(mainCategory: string): CategoryHierarchy[] {
    const categoryData = this.categoryIndex[mainCategory]
    if (!categoryData || !categoryData.subcategories) return []

    return categoryData.subcategories.map(subName => {
      const subData = this.categoryIndex[subName] || { count: 0, pages: [], subcategories: [] }
      return {
        name: subName,
        description: this.getCategoryDescription(subName),
        tags: this.getTagNamesByCategory(subName),
        resourceCount: subData.count,
        subcategories: [],
        level: 1
      }
    })
  }

  /**
   * Generate color for tag
   */
  private generateTagColor(tagName: string): string {
    const colors = [
      '#3B82F6', '#EF4444', '#10B981', '#F59E0B', 
      '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16',
      '#F97316', '#6366F1', '#14B8A6', '#F59E0B'
    ]
    
    let hash = 0
    for (let i = 0; i < tagName.length; i++) {
      hash = tagName.charCodeAt(i) + ((hash << 5) - hash)
    }
    
    return colors[Math.abs(hash) % colors.length]
  }

  /**
   * Get category description
   */
  private getCategoryDescription(categoryName: string): string {
    const descriptions: Record<string, string> = {
      'dbordo': 'Diário de Bordo - Guias curados e recursos especializados do Capitão',
      'misc': 'Miscelânea - Recursos diversos, listas awesome e ferramentas variadas',
      'blog': 'Blog - Atualizações, novidades e artigos do projeto',
      'ref': 'Referências - Informações sobre o projeto, créditos e documentação',
      'geral': 'Geral - Recursos gerais e ferramentas diversas para uso cotidiano',
      'piracy': 'Piracy - Recursos para navegação digital e cultura hacker',
      'privacy': 'Privacy - Ferramentas de privacidade, segurança e proteção digital',
      'development': 'Development - Recursos para desenvolvimento e programação',
      'tools': 'Tools - Ferramentas e utilitários práticos',
      'guides': 'Guides - Guias e tutoriais passo-a-passo',
      'awesome': 'Awesome - Listas curadas de recursos incríveis',
      'automation': 'Automation - Ferramentas de automação e produtividade',
      'media': 'Media - Recursos para mídia, streaming e entretenimento',
      'security': 'Security - Segurança digital e proteção online',
      'networking': 'Networking - Redes, DNS e infraestrutura',
      'gaming': 'Gaming - Jogos, repacks e entretenimento digital'
    }
    
    return descriptions[categoryName] || `Recursos organizados na categoria ${categoryName}`
  }

  /**
   * Get tag statistics
   */
  getTagStatistics() {
    const tags = this.getAllTags()
    const categories = this.getAllCategories()
    
    return {
      totalTags: tags.length,
      totalCategories: categories.length,
      averageTagsPerCategory: tags.length / categories.length,
      mostPopularTag: tags[0],
      leastPopularTag: tags[tags.length - 1],
      categoryDistribution: categories.map(cat => ({
        name: cat.name,
        tagCount: cat.tags.length,
        resourceCount: cat.resourceCount
      }))
    }
  }
}

export interface CategoryHierarchy extends CategoryData {
  subcategories: CategoryHierarchy[]
  level: number
}