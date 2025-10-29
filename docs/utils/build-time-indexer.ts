// Build-time Content Indexer for VitePress
import { readFileSync, readdirSync, statSync } from 'fs'
import { join, extname, relative } from 'path'
import matter from 'gray-matter'
import { ContentIndexer, type ContentMetadata } from './content-indexer'
import type { SearchIndex } from '../components/content-discovery/types'

export class BuildTimeIndexer {
  private indexer = new ContentIndexer()
  private docsPath: string

  constructor(docsPath: string = 'docs') {
    this.docsPath = docsPath
  }

  /**
   * Scan all markdown files and build index
   */
  async buildSearchIndex(): Promise<SearchIndex> {
    console.log('🔍 Building search index...')
    
    this.indexer.clear()
    await this.scanDirectory(this.docsPath)
    
    const index = this.indexer.buildIndex()
    console.log(`✅ Indexed ${index.pages.length} pages, ${Object.keys(index.tags).length} tags, ${Object.keys(index.categories).length} categories`)
    
    return index
  }

  /**
   * Recursively scan directory for markdown files
   */
  private async scanDirectory(dirPath: string): Promise<void> {
    try {
      const items = readdirSync(dirPath)
      
      for (const item of items) {
        const fullPath = join(dirPath, item)
        const stat = statSync(fullPath)
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (this.shouldSkipDirectory(item)) {
            continue
          }
          await this.scanDirectory(fullPath)
        } else if (stat.isFile() && this.isMarkdownFile(item)) {
          await this.processMarkdownFile(fullPath)
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dirPath}:`, error)
    }
  }

  /**
   * Check if directory should be skipped
   */
  private shouldSkipDirectory(dirName: string): boolean {
    const skipDirs = [
      '.vitepress',
      'node_modules',
      '.git',
      'dist',
      'cache',
      'public'
    ]
    return skipDirs.includes(dirName) || dirName.startsWith('.')
  }

  /**
   * Check if file is a markdown file
   */
  private isMarkdownFile(fileName: string): boolean {
    return extname(fileName).toLowerCase() === '.md'
  }

  /**
   * Process individual markdown file
   */
  private async processMarkdownFile(filePath: string): Promise<void> {
    try {
      const content = readFileSync(filePath, 'utf-8')
      const { data: frontmatter, content: markdownContent } = matter(content)
      
      // Skip files without title or that are explicitly excluded
      if (!frontmatter.title || frontmatter.indexable === false) {
        return
      }

      const metadata = this.indexer.extractMetadata(frontmatter)
      const relativePath = relative(this.docsPath, filePath)
      const url = this.convertPathToUrl(relativePath)
      const id = this.generatePageId(url)

      this.indexer.addPage(
        id,
        frontmatter.title,
        markdownContent,
        url,
        metadata
      )
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error)
    }
  }

  /**
   * Convert file path to URL
   */
  private convertPathToUrl(filePath: string): string {
    let url = filePath
      .replace(/\\/g, '/') // Convert Windows paths
      .replace(/\.md$/, '') // Remove .md extension
      .replace(/\/index$/, '/') // Convert index.md to /
    
    // Ensure URL starts with /
    if (!url.startsWith('/')) {
      url = '/' + url
    }
    
    // Ensure URL ends with / for directories
    if (!url.endsWith('/') && !url.includes('.')) {
      url += '/'
    }
    
    return url
  }

  /**
   * Generate unique page ID
   */
  private generatePageId(url: string): string {
    return url.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '')
  }

  /**
   * Save index to file
   */
  async saveIndexToFile(index: SearchIndex, outputPath: string): Promise<void> {
    try {
      const fs = await import('fs/promises')
      const indexJson = JSON.stringify(index, null, 2)
      await fs.writeFile(outputPath, indexJson, 'utf-8')
      console.log(`💾 Search index saved to ${outputPath}`)
    } catch (error) {
      console.error('Error saving search index:', error)
    }
  }

  /**
   * Generate tags data for tags page
   */
  generateTagsData(index: SearchIndex) {
    const tags = Object.entries(index.tags).map(([name, data]) => ({
      name,
      count: data.count,
      category: data.category,
      color: this.generateTagColor(name)
    }))

    const categories = Object.entries(index.categories).map(([name, data]) => ({
      name,
      description: this.getCategoryDescription(name),
      tags: Object.keys(index.tags).filter(tag => index.tags[tag].category === name),
      resourceCount: data.count
    }))

    return {
      tags: tags.sort((a, b) => b.count - a.count),
      categories: categories.sort((a, b) => b.resourceCount - a.resourceCount)
    }
  }

  /**
   * Generate color for tag based on name
   */
  private generateTagColor(tagName: string): string {
    const colors = [
      '#3B82F6', '#EF4444', '#10B981', '#F59E0B', 
      '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'
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
      'dbordo': 'Guias curados e recursos especializados',
      'misc': 'Recursos diversos e listas awesome',
      'blog': 'Atualizações e artigos do projeto',
      'ref': 'Referências e informações do projeto',
      'geral': 'Recursos gerais e ferramentas diversas',
      'piracy': 'Recursos para navegação digital',
      'privacy': 'Ferramentas de privacidade e segurança',
      'development': 'Recursos para desenvolvimento',
      'tools': 'Ferramentas e utilitários'
    }
    
    return descriptions[categoryName] || 'Recursos organizados por categoria'
  }
}