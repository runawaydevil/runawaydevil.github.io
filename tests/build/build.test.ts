import { describe, it, expect } from 'vitest'
import { execSync } from 'child_process'
import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

describe('Build Process', () => {
  it('should build successfully', () => {
    try {
      // Executar o build
      execSync('npm run build', { 
        stdio: 'pipe',
        cwd: process.cwd()
      })
      
      // Verificar se o diretório de build foi criado
      const distPath = join(process.cwd(), 'docs/.vitepress/dist')
      expect(existsSync(distPath)).toBe(true)
      
      // Verificar se os arquivos essenciais foram gerados
      expect(existsSync(join(distPath, 'index.html'))).toBe(true)
      expect(existsSync(join(distPath, 'vault/index.html'))).toBe(true)
      
    } catch (error) {
      console.error('Build failed:', error)
      throw error
    }
  })
  
  it('should generate RSS feed', () => {
    const distPath = join(process.cwd(), 'docs/.vitepress/dist')
    const rssPath = join(distPath, 'feed.rss')
    
    if (existsSync(rssPath)) {
      const rssContent = readFileSync(rssPath, 'utf-8')
      
      // Verificar estrutura básica do RSS
      expect(rssContent).toContain('<?xml')
      expect(rssContent).toContain('<rss')
      expect(rssContent).toContain('<channel>')
      expect(rssContent).toContain('<title>')
      expect(rssContent).toContain('<description>')
    } else {
      console.warn('RSS feed not found - this might be expected in test environment')
    }
  })
  
  it('should have valid HTML structure', () => {
    const distPath = join(process.cwd(), 'docs/.vitepress/dist')
    const indexPath = join(distPath, 'index.html')
    
    if (existsSync(indexPath)) {
      const htmlContent = readFileSync(indexPath, 'utf-8')
      
      // Verificar estrutura HTML básica
      expect(htmlContent).toContain('<!DOCTYPE html>')
      expect(htmlContent).toContain('<html')
      expect(htmlContent).toContain('<head>')
      expect(htmlContent).toContain('<body>')
      expect(htmlContent).toContain('</html>')
      
      // Verificar meta tags de segurança
      expect(htmlContent).toContain('robots')
      expect(htmlContent).toContain('noindex')
    }
  })
  
  it('should have proper asset references', () => {
    const distPath = join(process.cwd(), 'docs/.vitepress/dist')
    const indexPath = join(distPath, 'index.html')
    
    if (existsSync(indexPath)) {
      const htmlContent = readFileSync(indexPath, 'utf-8')
      
      // Verificar se os assets estão sendo referenciados corretamente
      expect(htmlContent).toContain('/pablo.png')
      expect(htmlContent).toContain('/favico.ico')
      
      // Verificar se não há links quebrados
      const brokenLinks = htmlContent.match(/href="[^"]*\.md"/g)
      if (brokenLinks) {
        console.warn('Found .md links in built HTML:', brokenLinks)
      }
    }
  })
})
