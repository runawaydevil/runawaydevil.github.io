import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'

describe('VitePress Configuration', () => {
  it('should have valid config.ts', () => {
    const configPath = join(process.cwd(), 'docs/.vitepress/config.ts')
    const configContent = readFileSync(configPath, 'utf-8')
    
    // Verificar se tem as configurações essenciais
    expect(configContent).toContain('defineConfig')
    expect(configContent).toContain('title:')
    expect(configContent).toContain('description:')
    expect(configContent).toContain('lang: \'pt-BR\'')
    expect(configContent).toContain('base: \'/\'')
  })
  
  it('should have valid sidebar configuration', () => {
    const sidebarPath = join(process.cwd(), 'docs/.vitepress/sidebar.ts')
    const sidebarContent = readFileSync(sidebarPath, 'utf-8')
    
    // Verificar se tem estrutura de sidebar
    expect(sidebarContent).toContain('export const sidebar')
    expect(sidebarContent).toContain('/vault/')
    expect(sidebarContent).toContain('text:')
    expect(sidebarContent).toContain('link:')
  })
  
  it('should have valid constants', () => {
    const constantsPath = join(process.cwd(), 'docs/.vitepress/constants.ts')
    const constantsContent = readFileSync(constantsPath, 'utf-8')
    
    // Verificar se tem as constantes essenciais
    expect(constantsContent).toContain('export const meta')
    expect(constantsContent).toContain('name:')
    expect(constantsContent).toContain('description:')
    expect(constantsContent).toContain('author:')
  })
  
  it('should have RSS configuration', () => {
    const configPath = join(process.cwd(), 'docs/.vitepress/config.ts')
    const configContent = readFileSync(configPath, 'utf-8')
    
    // Verificar configuração do RSS
    expect(configContent).toContain('RssPlugin')
    expect(configContent).toContain('RSSOptions')
    expect(configContent).toContain('filename: \'feed.rss\'')
    expect(configContent).toContain('baseUrl')
  })
  
  it('should have security headers', () => {
    const configPath = join(process.cwd(), 'docs/.vitepress/config.ts')
    const configContent = readFileSync(configPath, 'utf-8')
    
    // Verificar headers de segurança
    expect(configContent).toContain('robots')
    expect(configContent).toContain('X-Content-Type-Options')
    expect(configContent).toContain('X-Frame-Options')
    expect(configContent).toContain('X-XSS-Protection')
    expect(configContent).toContain('Content-Security-Policy')
  })
})
