// Content Similarity Engine
import type { PageData, SearchIndex, IndexedPage } from '../components/content-discovery/types'

export interface SimilarityOptions {
  algorithm: 'tags' | 'category' | 'hybrid' | 'content'
  maxResults: number
  minScore: number
  boostFactors: {
    tags: number
    category: number
    content: number
    title: number
  }
}

export interface SimilarityResult {
  page: PageData
  score: number
  reasons: string[]
}

export class SimilarityEngine {
  private searchIndex: SearchIndex | null = null
  private isInitialized = false

  /**
   * Initialize with search index
   */
  initialize(searchIndex: SearchIndex): void {
    this.searchIndex = searchIndex
    this.isInitialized = true
  }

  /**
   * Find similar content to a given page
   */
  findSimilar(
    currentPage: PageData, 
    options: Partial<SimilarityOptions> = {}
  ): SimilarityResult[] {
    if (!this.isInitialized || !this.searchIndex) {
      console.warn('Similarity engine not initialized')
      return []
    }

    const opts: SimilarityOptions = {
      algorithm: 'hybrid',
      maxResults: 5,
      minScore: 0.1,
      boostFactors: {
        tags: 1.0,
        category: 0.7,
        content: 0.5,
        title: 0.8
      },
      ...options
    }

    // Get all pages except current one
    const candidatePages = this.searchIndex.pages.filter(
      page => page.url !== currentPage.url
    )

    // Calculate similarity scores
    const similarities = candidatePages.map(page => {
      const score = this.calculateSimilarity(currentPage, page, opts)
      const reasons = this.getSimilarityReasons(currentPage, page)
      
      return {
        page: this.indexedPageToPageData(page),
        score,
        reasons
      }
    })

    // Filter by minimum score and sort by relevance
    return similarities
      .filter(sim => sim.score >= opts.minScore)
      .sort((a, b) => b.score - a.score)
      .slice(0, opts.maxResults)
  }

  /**
   * Calculate similarity score between two pages
   */
  private calculateSimilarity(
    currentPage: PageData, 
    candidatePage: IndexedPage, 
    options: SimilarityOptions
  ): number {
    let totalScore = 0
    const { algorithm, boostFactors } = options

    switch (algorithm) {
      case 'tags':
        totalScore = this.calculateTagSimilarity(currentPage, candidatePage) * boostFactors.tags
        break
      
      case 'category':
        totalScore = this.calculateCategorySimilarity(currentPage, candidatePage) * boostFactors.category
        break
      
      case 'content':
        totalScore = this.calculateContentSimilarity(currentPage, candidatePage) * boostFactors.content
        break
      
      case 'hybrid':
      default:
        const tagScore = this.calculateTagSimilarity(currentPage, candidatePage) * boostFactors.tags
        const categoryScore = this.calculateCategorySimilarity(currentPage, candidatePage) * boostFactors.category
        const contentScore = this.calculateContentSimilarity(currentPage, candidatePage) * boostFactors.content
        const titleScore = this.calculateTitleSimilarity(currentPage, candidatePage) * boostFactors.title
        
        // Weighted average with emphasis on tags and category
        totalScore = (tagScore * 0.4) + (categoryScore * 0.3) + (titleScore * 0.2) + (contentScore * 0.1)
        break
    }

    return Math.min(totalScore, 1.0) // Cap at 1.0
  }

  /**
   * Calculate tag-based similarity using Jaccard coefficient
   */
  private calculateTagSimilarity(currentPage: PageData, candidatePage: IndexedPage): number {
    const currentTags = new Set(currentPage.tags.map(tag => tag.toLowerCase()))
    const candidateTags = new Set(candidatePage.tags.map(tag => tag.toLowerCase()))
    
    if (currentTags.size === 0 && candidateTags.size === 0) return 0
    
    // Jaccard similarity: intersection / union
    const intersection = new Set([...currentTags].filter(tag => candidateTags.has(tag)))
    const union = new Set([...currentTags, ...candidateTags])
    
    const jaccardScore = intersection.size / union.size
    
    // Boost for exact tag matches
    const exactMatches = intersection.size
    const boostFactor = exactMatches > 0 ? 1 + (exactMatches * 0.1) : 1
    
    return Math.min(jaccardScore * boostFactor, 1.0)
  }

  /**
   * Calculate category-based similarity
   */
  private calculateCategorySimilarity(currentPage: PageData, candidatePage: IndexedPage): number {
    if (currentPage.category === candidatePage.category) {
      return 1.0 // Perfect match
    }
    
    // Check for related categories
    const relatedCategories = this.getRelatedCategories(currentPage.category)
    if (relatedCategories.includes(candidatePage.category)) {
      return 0.6 // Partial match for related categories
    }
    
    return 0 // No category similarity
  }

  /**
   * Calculate content-based similarity using TF-IDF-like approach
   */
  private calculateContentSimilarity(currentPage: PageData, candidatePage: IndexedPage): number {
    // Use search tokens for content comparison
    const currentTokens = this.extractTokens(currentPage.title + ' ' + (currentPage.excerpt || ''))
    const candidateTokens = candidatePage.searchTokens || []
    
    if (currentTokens.length === 0 || candidateTokens.length === 0) return 0
    
    // Calculate term frequency similarity
    const currentTermFreq = this.calculateTermFrequency(currentTokens)
    const candidateTermFreq = this.calculateTermFrequency(candidateTokens)
    
    return this.cosineSimilarity(currentTermFreq, candidateTermFreq)
  }

  /**
   * Calculate title similarity using string similarity
   */
  private calculateTitleSimilarity(currentPage: PageData, candidatePage: IndexedPage): number {
    const currentTitle = currentPage.title.toLowerCase()
    const candidateTitle = candidatePage.title.toLowerCase()
    
    // Check for exact substring matches
    if (currentTitle.includes(candidateTitle) || candidateTitle.includes(currentTitle)) {
      return 0.8
    }
    
    // Use Levenshtein distance for fuzzy matching
    const distance = this.levenshteinDistance(currentTitle, candidateTitle)
    const maxLength = Math.max(currentTitle.length, candidateTitle.length)
    
    return Math.max(0, 1 - (distance / maxLength))
  }

  /**
   * Extract and normalize tokens from text
   */
  private extractTokens(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 2)
      .filter(token => !this.isStopWord(token))
  }

  /**
   * Calculate term frequency for tokens
   */
  private calculateTermFrequency(tokens: string[]): Record<string, number> {
    const freq: Record<string, number> = {}
    const totalTokens = tokens.length
    
    tokens.forEach(token => {
      freq[token] = (freq[token] || 0) + 1
    })
    
    // Normalize by total tokens
    Object.keys(freq).forEach(token => {
      freq[token] = freq[token] / totalTokens
    })
    
    return freq
  }

  /**
   * Calculate cosine similarity between two term frequency vectors
   */
  private cosineSimilarity(vecA: Record<string, number>, vecB: Record<string, number>): number {
    const keysA = Object.keys(vecA)
    const keysB = Object.keys(vecB)
    const allKeys = new Set([...keysA, ...keysB])
    
    let dotProduct = 0
    let normA = 0
    let normB = 0
    
    allKeys.forEach(key => {
      const valueA = vecA[key] || 0
      const valueB = vecB[key] || 0
      
      dotProduct += valueA * valueB
      normA += valueA * valueA
      normB += valueB * valueB
    })
    
    if (normA === 0 || normB === 0) return 0
    
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))
  }

  /**
   * Calculate Levenshtein distance between two strings
   */
  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null))

    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j

    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1, // deletion
          matrix[j - 1][i] + 1, // insertion
          matrix[j - 1][i - 1] + indicator // substitution
        )
      }
    }

    return matrix[str2.length][str1.length]
  }

  /**
   * Get related categories for a given category
   */
  private getRelatedCategories(category: string): string[] {
    const categoryRelations: Record<string, string[]> = {
      'dbordo': ['guides', 'tutorials', 'automation'],
      'blog': ['news', 'updates'],
      'ref': ['about', 'documentation'],
      'guides': ['dbordo', 'tutorials'],
      'tools': ['utilities'],
      'privacy': ['security', 'tools'],
      'security': ['privacy', 'tools'],
      'automation': ['dbordo', 'tools']
    }
    
    return categoryRelations[category] || []
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
   * Get reasons for similarity
   */
  private getSimilarityReasons(currentPage: PageData, candidatePage: IndexedPage): string[] {
    const reasons: string[] = []
    
    // Check for shared tags
    const sharedTags = currentPage.tags.filter(tag => 
      candidatePage.tags.includes(tag)
    )
    if (sharedTags.length > 0) {
      reasons.push(`Tags em comum: ${sharedTags.slice(0, 3).join(', ')}${sharedTags.length > 3 ? '...' : ''}`)
    }
    
    // Check for same category
    if (currentPage.category === candidatePage.category) {
      reasons.push(`Mesma categoria: ${currentPage.category}`)
    }
    
    // Check for title similarity
    const titleSim = this.calculateTitleSimilarity(currentPage, candidatePage)
    if (titleSim > 0.3) {
      reasons.push('Títulos similares')
    }
    
    // Check for content similarity
    const contentSim = this.calculateContentSimilarity(currentPage, candidatePage)
    if (contentSim > 0.2) {
      reasons.push('Conteúdo relacionado')
    }
    
    return reasons.length > 0 ? reasons : ['Conteúdo relacionado']
  }

  /**
   * Convert IndexedPage to PageData
   */
  private indexedPageToPageData(page: IndexedPage): PageData {
    return {
      title: page.title,
      tags: page.tags,
      category: page.category,
      url: page.url,
      excerpt: page.excerpt
    }
  }

  /**
   * Get trending content based on tag popularity
   */
  getTrendingContent(limit: number = 10): PageData[] {
    if (!this.isInitialized || !this.searchIndex) return []
    
    // Calculate page scores based on tag popularity
    const pageScores = this.searchIndex.pages.map(page => {
      let score = 0
      
      page.tags.forEach(tag => {
        const tagData = this.searchIndex!.tags[tag]
        if (tagData) {
          // Higher score for pages with popular tags
          score += Math.log(tagData.count + 1)
        }
      })
      
      // Boost for recent content
      const daysSinceModified = (Date.now() - page.lastModified.getTime()) / (1000 * 60 * 60 * 24)
      if (daysSinceModified < 30) {
        score *= 1.2
      }
      
      return { page, score }
    })
    
    return pageScores
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => this.indexedPageToPageData(item.page))
  }

  /**
   * Get content recommendations for a user based on preferences
   */
  getPersonalizedRecommendations(
    favoriteCategories: string[], 
    favoriteTagsHistory: string[], 
    limit: number = 8
  ): PageData[] {
    if (!this.isInitialized || !this.searchIndex) return []
    
    const pageScores = this.searchIndex.pages.map(page => {
      let score = 0
      
      // Boost for favorite categories
      if (favoriteCategories.includes(page.category)) {
        score += 2.0
      }
      
      // Boost for favorite tags
      page.tags.forEach(tag => {
        if (favoriteTagsHistory.includes(tag)) {
          score += 1.5
        }
      })
      
      // Boost for popular content
      const tagPopularity = page.tags.reduce((sum, tag) => {
        const tagData = this.searchIndex!.tags[tag]
        return sum + (tagData ? tagData.count : 0)
      }, 0)
      
      score += Math.log(tagPopularity + 1) * 0.1
      
      return { page, score }
    })
    
    return pageScores
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => this.indexedPageToPageData(item.page))
  }
}