/**
 * Utilitários de SEO para o VitePress
 */

import { meta } from '../constants'

export interface SEOData {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

// Gerar meta tags dinâmicas baseadas no conteúdo da página
export function generateSEOTags(seoData: SEOData = {}) {
  const {
    title = meta.name,
    description = meta.description,
    image = '/pablo.png',
    url = `https://${meta.hostname}`,
    type = 'website',
    keywords = [],
    author = 'Pablo',
    publishedTime,
    modifiedTime
  } = seoData

  const tags: [string, Record<string, string>][] = []

  // Meta tags básicas
  if (title !== meta.name) {
    tags.push(['meta', { property: 'og:title', content: title }])
    tags.push(['meta', { name: 'twitter:title', content: title }])
  }

  if (description !== meta.description) {
    tags.push(['meta', { name: 'description', content: description }])
    tags.push(['meta', { property: 'og:description', content: description }])
    tags.push(['meta', { name: 'twitter:description', content: description }])
  }

  if (keywords.length > 0) {
    tags.push(['meta', { name: 'keywords', content: keywords.join(', ') }])
  }

  // Open Graph específico
  tags.push(['meta', { property: 'og:url', content: url }])
  tags.push(['meta', { property: 'og:type', content: type }])
  
  if (image !== '/pablo.png') {
    const fullImageUrl = image.startsWith('http') ? image : `https://${meta.hostname}${image}`
    tags.push(['meta', { property: 'og:image', content: fullImageUrl }])
    tags.push(['meta', { name: 'twitter:image', content: fullImageUrl }])
  }

  // Datas de publicação e modificação
  if (publishedTime) {
    tags.push(['meta', { property: 'article:published_time', content: publishedTime }])
  }

  if (modifiedTime) {
    tags.push(['meta', { property: 'article:modified_time', content: modifiedTime }])
  }

  // Autor
  if (author !== 'Pablo') {
    tags.push(['meta', { name: 'author', content: author }])
    tags.push(['meta', { property: 'article:author', content: author }])
  }

  return tags
}

// Gerar structured data para diferentes tipos de conteúdo
export function generateStructuredData(type: 'article' | 'webpage' | 'breadcrumb', data: any) {
  const baseUrl = `https://${meta.hostname}`

  switch (type) {
    case 'article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Person',
          name: data.author || 'Pablo'
        },
        publisher: {
          '@type': 'Person',
          name: 'Pablo'
        },
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime,
        url: `${baseUrl}${data.url}`,
        image: data.image ? `${baseUrl}${data.image}` : `${baseUrl}/pablo.png`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${baseUrl}${data.url}`
        }
      }

    case 'webpage':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: data.title,
        description: data.description,
        url: `${baseUrl}${data.url}`,
        author: {
          '@type': 'Person',
          name: 'Pablo'
        },
        isPartOf: {
          '@type': 'WebSite',
          name: meta.name,
          url: baseUrl
        }
      }

    case 'breadcrumb':
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.items.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`
        }))
      }

    default:
      return null
  }
}

// Extrair keywords de conteúdo markdown
export function extractKeywords(content: string, maxKeywords: number = 10): string[] {
  // Remover markdown e HTML
  const cleanContent = content
    .replace(/[#*`_\[\]()]/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .toLowerCase()

  // Palavras comuns a ignorar
  const stopWords = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
    'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
    'to', 'was', 'will', 'with', 'o', 'a', 'os', 'as', 'um', 'uma',
    'de', 'do', 'da', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas',
    'para', 'por', 'com', 'sem', 'sobre', 'entre', 'até', 'desde'
  ])

  // Extrair palavras e contar frequência
  const words = cleanContent
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word))
    .reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  // Retornar as palavras mais frequentes
  return Object.entries(words)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word)
}

// Otimizar título para SEO
export function optimizeTitle(title: string, siteName: string = meta.name): string {
  const maxLength = 60
  
  if (title === siteName) {
    return title
  }

  const fullTitle = `${title} | ${siteName}`
  
  if (fullTitle.length <= maxLength) {
    return fullTitle
  }

  // Truncar o título se necessário
  const availableLength = maxLength - siteName.length - 3 // 3 para " | "
  const truncatedTitle = title.length > availableLength 
    ? `${title.substring(0, availableLength - 3)}...`
    : title

  return `${truncatedTitle} | ${siteName}`
}

// Otimizar descrição para SEO
export function optimizeDescription(description: string): string {
  const maxLength = 160
  
  if (description.length <= maxLength) {
    return description
  }

  // Truncar na última frase completa ou palavra
  const truncated = description.substring(0, maxLength - 3)
  const lastSentence = truncated.lastIndexOf('.')
  const lastWord = truncated.lastIndexOf(' ')

  const cutPoint = lastSentence > maxLength - 50 ? lastSentence + 1 : lastWord

  return `${description.substring(0, cutPoint)}...`
}