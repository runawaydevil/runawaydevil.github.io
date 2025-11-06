// Page Metadata Utilities for VitePress
import type { PageData } from '../components/content-discovery/types'

export class PageMetadataExtractor {
  /**
   * Extract page metadata from VitePress page data
   */
  static extractFromVitePress(vitePressPage: any): PageData {
    const frontmatter = vitePressPage?.frontmatter || {}
    const title = frontmatter.title || vitePressPage?.title || document.title || ''
    const url = vitePressPage?.relativePath ? 
      '/' + vitePressPage.relativePath.replace(/\.md$/, '') : 
      window.location.pathname

    return {
      title,
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      category: frontmatter.category || this.inferCategoryFromUrl(url),
      url,
      excerpt: frontmatter.description || frontmatter.excerpt || ''
    }
  }

  /**
   * Extract metadata from current page DOM
   */
  static extractFromDOM(): PageData {
    const title = document.title.replace(' | #hacking', '') || ''
    const url = window.location.pathname
    
    // Try to get metadata from meta tags
    const description = this.getMetaContent('description') || 
                       this.getMetaContent('og:description') || ''
    
    // Try to extract tags from page content or meta
    const tags = this.extractTagsFromPage()
    
    // Infer category from URL
    const category = this.inferCategoryFromUrl(url)

    return {
      title,
      tags,
      category,
      url,
      excerpt: description
    }
  }

  /**
   * Get meta tag content
   */
  private static getMetaContent(name: string): string {
    const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
    return meta?.getAttribute('content') || ''
  }

  /**
   * Extract tags from page content
   */
  private static extractTagsFromPage(): string[] {
    const tags: string[] = []
    
    // Look for tag elements in the page
    const tagElements = document.querySelectorAll('.tag, .badge, [data-tag]')
    tagElements.forEach(el => {
      const tagText = el.textContent?.trim()
      if (tagText && tagText.length > 0) {
        tags.push(tagText)
      }
    })
    
    // Look for keywords in meta tags
    const keywords = this.getMetaContent('keywords')
    if (keywords) {
      tags.push(...keywords.split(',').map(k => k.trim()).filter(k => k.length > 0))
    }
    
    // Infer tags from URL and title
    const inferredTags = this.inferTagsFromContent(document.title, window.location.pathname)
    tags.push(...inferredTags)
    
    // Remove duplicates and return
    return [...new Set(tags.filter(tag => tag.length > 1))]
  }

  /**
   * Infer category from URL path
   */
  private static inferCategoryFromUrl(url: string): string {
    const pathSegments = url.split('/').filter(segment => segment.length > 0)
    
    if (pathSegments.length === 0) return 'home'
    
    const firstSegment = pathSegments[0].toLowerCase()
    
    // Map URL segments to categories
    const categoryMap: Record<string, string> = {
      'dbordo': 'dbordo',
      'blog': 'blog',
      'ref': 'ref',
      'search': 'navigation',
      'about': 'ref'
    }
    
    return categoryMap[firstSegment] || 'geral'
  }

  /**
   * Infer tags from content
   */
  private static inferTagsFromContent(title: string, url: string): string[] {
    const tags: string[] = []
    const text = (title + ' ' + url).toLowerCase()
    
    // Common tag patterns
    const tagPatterns: Record<string, string[]> = {
      'autobrr': ['autobrr', 'automation'],
      'sonarr': ['sonarr', 'media', 'automation'],
      'radarr': ['radarr', 'media', 'automation'],
      'plex': ['plex', 'media', 'streaming'],
      'privacy': ['privacy', 'security'],
      'awesome': ['awesome', 'list'],
      'guide': ['guide', 'tutorial'],
      'tool': ['tool', 'utility'],
      'security': ['security', 'privacy'],
      'hack': ['hacking', 'security'],
      'piracy': ['piracy', 'torrents'],
      'dns': ['dns', 'networking'],
      'vpn': ['vpn', 'privacy', 'security']
    }
    
    Object.entries(tagPatterns).forEach(([keyword, relatedTags]) => {
      if (text.includes(keyword)) {
        tags.push(...relatedTags)
      }
    })
    
    return [...new Set(tags)]
  }

  /**
   * Create page data with enhanced metadata
   */
  static createEnhancedPageData(
    baseData?: Partial<PageData>,
    vitePressPage?: any
  ): PageData {
    // Start with VitePress data if available
    let pageData = vitePressPage ? 
      this.extractFromVitePress(vitePressPage) : 
      this.extractFromDOM()
    
    // Merge with provided base data
    if (baseData) {
      pageData = {
        ...pageData,
        ...baseData,
        tags: [...new Set([...pageData.tags, ...(baseData.tags || [])])],
      }
    }
    
    // Ensure we have at least some tags
    if (pageData.tags.length === 0) {
      pageData.tags = this.getDefaultTagsForCategory(pageData.category)
    }
    
    return pageData
  }

  /**
   * Get default tags for a category
   */
  private static getDefaultTagsForCategory(category: string): string[] {
    const defaultTags: Record<string, string[]> = {
      'dbordo': ['guide', 'curated'],
      'blog': ['update', 'news'],
      'ref': ['reference', 'about'],
      'geral': ['general'],
      'home': ['piratas-club']
    }
    
    return defaultTags[category] || ['general']
  }

  /**
   * Check if page should show related resources
   */
  static shouldShowRelatedResources(pageData: PageData): boolean {
    // Don't show on navigation pages
    if (['navigation', 'home'].includes(pageData.category)) {
      return false
    }
    
    // Don't show on very short pages
    if (pageData.title.length < 10) {
      return false
    }
    
    // Don't show on index pages
    if (pageData.url.endsWith('/') && pageData.url !== '/') {
      return false
    }
    
    return true
  }
}