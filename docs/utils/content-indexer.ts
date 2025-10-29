// Content Indexing Utilities
import type { SearchIndex, IndexedPage, TagIndex, CategoryIndex } from '../components/content-discovery/types'

export interface ContentMetadata {
  title: string
  description?: string
  tags: string[]
  category: string
  subcategory?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  lastUpdated?: string
  featured?: boolean
  rating?: {
    enabled: boolean
    average?: number
    count?: number
  }
  related?: string[]
}

export class ContentIndexer {
  private pages: IndexedPage[] = []
  private tagIndex: TagIndex = {}
  private categoryIndex: CategoryIndex = {}

  /**
   * Extract metadata from frontmatter
   */
  extractMetadata(frontmatter: any): ContentMetadata {
    return {
      title: frontmatter.title || '',
      description: frontmatter.description || '',
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      category: frontmatter.category || 'geral',
      subcategory: frontmatter.subcategory,
      difficulty: frontmatter.difficulty,
      lastUpdated: frontmatter.lastUpdated,
      featured: frontmatter.featured || false,
      rating: frontmatter.rating,
      related: frontmatter.related || []
    }
  }

  /**
   * Tokenize content for search
   */
  tokenizeContent(content: string): string[] {
    return content
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 2)
      .filter(token => !this.isStopWord(token))
  }

  /**
   * Check if word is a stop word
   */
  private isStopWord(word: string): boolean {
    const stopWords = [
      'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
      'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
      'to', 'was', 'will', 'with', 'o', 'a', 'os', 'as', 'um', 'uma',
      'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas',
      'para', 'por', 'com', 'sem', 'sob', 'sobre', 'entre', 'até'
    ]
    return stopWords.includes(word)
  }

  /**
   * Generate excerpt from content
   */
  generateExcerpt(content: string, maxLength: number = 150): string {
    const cleanContent = content
      .replace(/#{1,6}\s/g, '') // Remove markdown headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .trim()

    if (cleanContent.length <= maxLength) {
      return cleanContent
    }

    return cleanContent.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
  }

  /**
   * Add page to index
   */
  addPage(
    id: string,
    title: string,
    content: string,
    url: string,
    metadata: ContentMetadata
  ): void {
    const excerpt = this.generateExcerpt(content)
    const searchTokens = this.tokenizeContent(`${title} ${content} ${metadata.tags.join(' ')}`)

    const indexedPage: IndexedPage = {
      id,
      title,
      content,
      excerpt,
      tags: metadata.tags,
      category: metadata.category,
      url,
      lastModified: new Date(metadata.lastUpdated || Date.now()),
      searchTokens
    }

    this.pages.push(indexedPage)
    this.updateTagIndex(metadata.tags, metadata.category, id)
    this.updateCategoryIndex(metadata.category, metadata.subcategory, id)
  }

  /**
   * Update tag index
   */
  private updateTagIndex(tags: string[], category: string, pageId: string): void {
    tags.forEach(tag => {
      if (!this.tagIndex[tag]) {
        this.tagIndex[tag] = {
          count: 0,
          pages: [],
          category
        }
      }
      this.tagIndex[tag].count++
      this.tagIndex[tag].pages.push(pageId)
    })
  }

  /**
   * Update category index
   */
  private updateCategoryIndex(category: string, subcategory: string | undefined, pageId: string): void {
    if (!this.categoryIndex[category]) {
      this.categoryIndex[category] = {
        count: 0,
        pages: [],
        subcategories: []
      }
    }
    
    this.categoryIndex[category].count++
    this.categoryIndex[category].pages.push(pageId)
    
    if (subcategory && !this.categoryIndex[category].subcategories.includes(subcategory)) {
      this.categoryIndex[category].subcategories.push(subcategory)
    }
  }

  /**
   * Build complete search index
   */
  buildIndex(): SearchIndex {
    return {
      pages: this.pages,
      tags: this.tagIndex,
      categories: this.categoryIndex,
      lastBuilt: new Date()
    }
  }

  /**
   * Clear index
   */
  clear(): void {
    this.pages = []
    this.tagIndex = {}
    this.categoryIndex = {}
  }
}