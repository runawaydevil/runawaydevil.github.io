// Tag Filtering Utilities
import type { TagData, CategoryData, SearchResult, ActiveFilters } from '../components/content-discovery/types'

export class TagFilter {
  private allTags: TagData[] = []
  private allCategories: CategoryData[] = []
  private searchIndex: any = null

  /**
   * Initialize with tags and categories data
   */
  initialize(tags: TagData[], categories: CategoryData[], searchIndex?: any): void {
    this.allTags = [...tags]
    this.allCategories = [...categories]
    this.searchIndex = searchIndex
  }

  /**
   * Filter content by active filters
   */
  filterContent(filters: ActiveFilters): SearchResult[] {
    if (!this.searchIndex) {
      console.warn('Search index not loaded')
      return []
    }

    let results = [...this.searchIndex.pages]

    // Filter by categories
    if (filters.categories.length > 0) {
      results = results.filter(page => 
        filters.categories.includes(page.category)
      )
    }

    // Filter by tags (AND logic - page must have ALL selected tags)
    if (filters.tags.length > 0) {
      results = results.filter(page => 
        filters.tags.every(tag => page.tags.includes(tag))
      )
    }

    // Filter by content types (if implemented)
    if (filters.contentTypes.length > 0) {
      results = results.filter(page => {
        // This could be based on frontmatter type field or file path
        const contentType = this.getContentType(page)
        return filters.contentTypes.includes(contentType)
      })
    }

    // Convert to SearchResult format
    return results.map(page => ({
      title: page.title,
      excerpt: page.excerpt,
      url: page.url,
      tags: page.tags,
      category: page.category,
      relevanceScore: 1.0 // Base score, could be enhanced
    }))
  }

  /**
   * Get available filter options based on current selection
   */
  getAvailableFilters(currentFilters: ActiveFilters): {
    categories: CategoryData[]
    tags: TagData[]
    contentTypes: string[]
  } {
    // Get pages that match current filters (excluding the filter type we're calculating)
    const getFilteredPages = (excludeFilterType: keyof ActiveFilters) => {
      const tempFilters = { ...currentFilters }
      if (excludeFilterType === 'categories') tempFilters.categories = []
      if (excludeFilterType === 'tags') tempFilters.tags = []
      if (excludeFilterType === 'contentTypes') tempFilters.contentTypes = []
      
      return this.filterContent(tempFilters)
    }

    // Available categories
    const pagesForCategories = getFilteredPages('categories')
    const availableCategories = this.allCategories.filter(category => 
      pagesForCategories.some(page => page.category === category.name)
    )

    // Available tags
    const pagesForTags = getFilteredPages('tags')
    const availableTags = this.allTags.filter(tag => 
      pagesForTags.some(page => page.tags.includes(tag.name))
    )

    // Available content types
    const pagesForContentTypes = getFilteredPages('contentTypes')
    const availableContentTypes = [...new Set(
      pagesForContentTypes.map(page => this.getContentType(page))
    )]

    return {
      categories: availableCategories,
      tags: availableTags,
      contentTypes: availableContentTypes
    }
  }

  /**
   * Get content type from page data
   */
  private getContentType(page: any): string {
    // Determine content type based on URL pattern or metadata
    if (page.url.includes('/blog/')) return 'blog'
    if (page.url.includes('/dbordo/')) return 'guide'
    if (page.url.includes('/misc/')) return 'resource'
    if (page.url.includes('/ref/')) return 'reference'
    
    // Could also check for specific tags or frontmatter
    if (page.tags.includes('tutorial')) return 'tutorial'
    if (page.tags.includes('tool')) return 'tool'
    if (page.tags.includes('awesome')) return 'list'
    
    return 'general'
  }

  /**
   * Generate filter combinations suggestions
   */
  suggestFilterCombinations(currentFilters: ActiveFilters, limit: number = 5): ActiveFilters[] {
    const suggestions: ActiveFilters[] = []
    
    // If no filters, suggest popular categories
    if (this.isEmptyFilters(currentFilters)) {
      const popularCategories = this.allCategories
        .sort((a, b) => b.resourceCount - a.resourceCount)
        .slice(0, limit)
      
      popularCategories.forEach(category => {
        suggestions.push({
          categories: [category.name],
          tags: [],
          contentTypes: []
        })
      })
      
      return suggestions
    }

    // If category selected, suggest popular tags in that category
    if (currentFilters.categories.length > 0) {
      const categoryTags = this.allTags
        .filter(tag => currentFilters.categories.includes(tag.category))
        .sort((a, b) => b.count - a.count)
        .slice(0, limit)
      
      categoryTags.forEach(tag => {
        if (!currentFilters.tags.includes(tag.name)) {
          suggestions.push({
            ...currentFilters,
            tags: [...currentFilters.tags, tag.name]
          })
        }
      })
    }

    // If tags selected, suggest related tags
    if (currentFilters.tags.length > 0) {
      const relatedTags = this.getRelatedTags(currentFilters.tags[0], limit)
      
      relatedTags.forEach(tag => {
        if (!currentFilters.tags.includes(tag.name)) {
          suggestions.push({
            ...currentFilters,
            tags: [...currentFilters.tags, tag.name]
          })
        }
      })
    }

    return suggestions.slice(0, limit)
  }

  /**
   * Get related tags based on co-occurrence
   */
  private getRelatedTags(tagName: string, limit: number = 5): TagData[] {
    if (!this.searchIndex) return []

    // Find pages with this tag
    const pagesWithTag = this.searchIndex.pages.filter((page: any) => 
      page.tags.includes(tagName)
    )

    // Count co-occurrences
    const coOccurrences: Record<string, number> = {}
    
    pagesWithTag.forEach((page: any) => {
      page.tags.forEach((tag: string) => {
        if (tag !== tagName) {
          coOccurrences[tag] = (coOccurrences[tag] || 0) + 1
        }
      })
    })

    // Sort by co-occurrence and return top results
    return Object.entries(coOccurrences)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
      .map(([tagName]) => this.allTags.find(tag => tag.name === tagName))
      .filter((tag): tag is TagData => tag !== undefined)
  }

  /**
   * Check if filters are empty
   */
  private isEmptyFilters(filters: ActiveFilters): boolean {
    return filters.categories.length === 0 && 
           filters.tags.length === 0 && 
           filters.contentTypes.length === 0
  }

  /**
   * Generate URL for filter state
   */
  generateFilterUrl(filters: ActiveFilters): string {
    const params = new URLSearchParams()
    
    if (filters.categories.length > 0) {
      params.set('categories', filters.categories.join(','))
    }
    
    if (filters.tags.length > 0) {
      params.set('tags', filters.tags.join(','))
    }
    
    if (filters.contentTypes.length > 0) {
      params.set('types', filters.contentTypes.join(','))
    }
    
    const queryString = params.toString()
    return queryString ? `/tags?${queryString}` : '/tags'
  }

  /**
   * Parse filters from URL
   */
  parseFiltersFromUrl(url: string): ActiveFilters {
    const urlObj = new URL(url, window.location.origin)
    const params = urlObj.searchParams
    
    return {
      categories: params.get('categories')?.split(',').filter(Boolean) || [],
      tags: params.get('tags')?.split(',').filter(Boolean) || [],
      contentTypes: params.get('types')?.split(',').filter(Boolean) || []
    }
  }

  /**
   * Get filter statistics
   */
  getFilterStats(filters: ActiveFilters): {
    totalResults: number
    categoryBreakdown: Record<string, number>
    tagBreakdown: Record<string, number>
    contentTypeBreakdown: Record<string, number>
  } {
    const results = this.filterContent(filters)
    
    const categoryBreakdown: Record<string, number> = {}
    const tagBreakdown: Record<string, number> = {}
    const contentTypeBreakdown: Record<string, number> = {}
    
    results.forEach(result => {
      // Category breakdown
      categoryBreakdown[result.category] = (categoryBreakdown[result.category] || 0) + 1
      
      // Tag breakdown
      result.tags.forEach(tag => {
        tagBreakdown[tag] = (tagBreakdown[tag] || 0) + 1
      })
      
      // Content type breakdown
      const contentType = this.getContentType(result)
      contentTypeBreakdown[contentType] = (contentTypeBreakdown[contentType] || 0) + 1
    })
    
    return {
      totalResults: results.length,
      categoryBreakdown,
      tagBreakdown,
      contentTypeBreakdown
    }
  }

  /**
   * Clear specific filter type
   */
  clearFilter(filters: ActiveFilters, filterType: keyof ActiveFilters): ActiveFilters {
    const newFilters = { ...filters }
    newFilters[filterType] = []
    return newFilters
  }

  /**
   * Add filter value
   */
  addFilter(filters: ActiveFilters, filterType: keyof ActiveFilters, value: string): ActiveFilters {
    const newFilters = { ...filters }
    const currentValues = newFilters[filterType] as string[]
    
    if (!currentValues.includes(value)) {
      newFilters[filterType] = [...currentValues, value] as any
    }
    
    return newFilters
  }

  /**
   * Remove filter value
   */
  removeFilter(filters: ActiveFilters, filterType: keyof ActiveFilters, value: string): ActiveFilters {
    const newFilters = { ...filters }
    const currentValues = newFilters[filterType] as string[]
    
    newFilters[filterType] = currentValues.filter(v => v !== value) as any
    
    return newFilters
  }
}