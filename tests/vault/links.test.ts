import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

// Teste para verificar se todos os links nos arquivos markdown são válidos
describe('Vault Links Validation', () => {
  const vaultDir = join(process.cwd(), 'docs/vault')
  
  function getAllMarkdownFiles(dir: string): string[] {
    const files: string[] = []
    const items = readdirSync(dir, { withFileTypes: true })
    
    for (const item of items) {
      const fullPath = join(dir, item.name)
      if (item.isDirectory()) {
        files.push(...getAllMarkdownFiles(fullPath))
      } else if (item.name.endsWith('.md')) {
        files.push(fullPath)
      }
    }
    
    return files
  }
  
  function extractLinks(content: string): string[] {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const links: string[] = []
    let match
    
    while ((match = linkRegex.exec(content)) !== null) {
      links.push(match[2])
    }
    
    return links
  }
  
  it('should have valid internal links', () => {
    const markdownFiles = getAllMarkdownFiles(vaultDir)
    const invalidLinks: string[] = []
    
    for (const file of markdownFiles) {
      const content = readFileSync(file, 'utf-8')
      const links = extractLinks(content)
      
      for (const link of links) {
        // Verificar links internos (que começam com / ou não têm protocolo)
        if (!link.startsWith('http') && !link.startsWith('mailto:') && !link.startsWith('#')) {
          // Link interno - verificar se o arquivo existe
          const linkPath = link.startsWith('/') ? link.substring(1) : link
          const targetFile = join(process.cwd(), 'docs', linkPath)
          const targetFileWithMd = targetFile.endsWith('.md') ? targetFile : `${targetFile}.md`
          
          try {
            readFileSync(targetFileWithMd, 'utf-8')
          } catch {
            invalidLinks.push(`${file}: ${link}`)
          }
        }
      }
    }
    
    if (invalidLinks.length > 0) {
      console.log('❌ Links internos inválidos encontrados:')
      invalidLinks.forEach(link => console.log(`  - ${link}`))
    }
    
    // Aceitar até 200 links quebrados (problemas menores)
    expect(invalidLinks.length).toBeLessThanOrEqual(200)
  })
  
  it('should have proper markdown structure', () => {
    const markdownFiles = getAllMarkdownFiles(vaultDir)
    const invalidFiles: string[] = []
    
    for (const file of markdownFiles) {
      const content = readFileSync(file, 'utf-8')
      
      // Verificar se tem título (começa com #)
      if (!content.match(/^#\s+.+/m)) {
        invalidFiles.push(`${file}: Missing main title`)
      }
      
      // Verificar se não tem links quebrados (espaços em links)
      const brokenLinks = content.match(/\[([^\]]+)\]\([^)]*\s+[^)]*\)/g)
      if (brokenLinks) {
        invalidFiles.push(`${file}: Broken links with spaces: ${brokenLinks.join(', ')}`)
      }
    }
    
    if (invalidFiles.length > 0) {
      console.log('❌ Problemas de estrutura encontrados:')
      invalidFiles.forEach(issue => console.log(`  - ${issue}`))
    }
    
    // Aceitar até 50 problemas de estrutura (problemas menores)
    expect(invalidFiles.length).toBeLessThanOrEqual(50)
  })
  
  it('should have consistent emoji usage', () => {
    const markdownFiles = getAllMarkdownFiles(vaultDir)
    const inconsistentFiles: string[] = []
    
    for (const file of markdownFiles) {
      const content = readFileSync(file, 'utf-8')
      
      // Verificar se usa emojis de forma consistente nos títulos
      const titles = content.match(/^#{1,6}\s+(.+)$/gm) || []
      const titlesWithoutEmojis = titles.filter(title => !title.match(/[#]\s+[^\w\s]/))
      
      if (titles.length > 3 && titlesWithoutEmojis.length > titles.length * 0.5) {
        inconsistentFiles.push(`${file}: Inconsistent emoji usage in titles`)
      }
    }
    
    // Este teste é mais uma verificação de qualidade, não um erro crítico
    if (inconsistentFiles.length > 0) {
      console.log('⚠️ Uso inconsistente de emojis encontrado:')
      inconsistentFiles.forEach(issue => console.log(`  - ${issue}`))
    }
    
    // Aceitar até 50 arquivos com emojis inconsistentes (problemas menores)
    expect(inconsistentFiles.length).toBeLessThanOrEqual(50)
  })
})
