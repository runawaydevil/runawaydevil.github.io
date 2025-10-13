import { defineConfig } from 'vitepress'
import { meta } from './constants'
import { sidebar } from './sidebar'
import { RssPlugin, RSSOptions } from 'vitepress-plugin-rss'
import { vitepressConfig } from './environment'

const baseUrl = vitepressConfig.baseUrl

const RSS: RSSOptions = {
  title: vitepressConfig.rssTitle,
  baseUrl,
  copyright: 'Copyright (c) 2023-2025 - Pablo Murad',
  description: 'Uma coleção organizada de recursos, ferramentas e informações úteis para desenvolvedores, hackers éticos e entusiastas de tecnologia',
  language: 'pt-BR',
  author: {
    name: 'Pablo Murad',
    email: 'pablomurad@pm.me',
    link: 'https://piracy.live'
  },
  filename: 'feed.rss',
  log: true,
  ignoreHome: true,
  ignorePublish: false,
  filter: () => {
    return true // Incluir todos os posts
  }
}

export default defineConfig({
  title: meta.name,
  description: meta.description,
  lang: 'pt-BR',
  lastUpdated: true,
  base: '/',
  
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#00d4ff' }],
    ['meta', { name: 'author', content: 'Pablo Murad' }],
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    
    // Meta tags para domínios alternativos
    ['link', { rel: 'canonical', href: vitepressConfig.canonicalUrl }],
    ['meta', { property: 'og:url', content: vitepressConfig.canonicalUrl }],
    ['meta', { name: 'twitter:url', content: vitepressConfig.canonicalUrl }],
    
    // URLs alternativas
    ['link', { rel: 'alternate', href: vitepressConfig.alternateUrls[0] }],
    ['meta', { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' }],
    ['meta', { 'http-equiv': 'X-Frame-Options', content: 'DENY' }],
    ['meta', { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' }],
    ['meta', { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }],
    ['meta', { name: 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'" }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favico.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/pablo.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],

  appearance: false,

  themeConfig: {
    logo: '/pablo.png',
    siteTitle: 'piracy.live',
    
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Diário Do Capitão', link: '/captain/' },
      { text: 'Vault', link: '/vault/' },
      { text: 'Cultura', link: '/cultura/' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/runawaydevil' },
      { icon: 'twitter', link: 'https://x.com/runawayd3vil' },
      { icon: 'instagram', link: 'https://instagram.com/murad.pablo' },
      { icon: 'telegram', link: 'https://t.me/runawaydevil' },
      { icon: 'reddit', link: 'https://reddit.com/user/runawaydevil' },
      { icon: 'rss', link: '/feed.rss' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar'
              },
              modal: {
                noResultsText: 'Nenhum resultado encontrado'
              }
            }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: 'Nesta página'
    },

    lastUpdated: {
      text: 'Atualizado em'
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    }
  },

  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: 'Dica',
      warningLabel: 'Aviso',
      dangerLabel: 'Perigo',
      infoLabel: 'Info',
      detailsLabel: 'Detalhes'
    }
  },

  cleanUrls: true,
  ignoreDeadLinks: [
    /^http:\/\/localhost/
  ],

  vite: {
    plugins: [RssPlugin(RSS)],
    server: {
      port: 5173,
      host: true
    }
  }
})