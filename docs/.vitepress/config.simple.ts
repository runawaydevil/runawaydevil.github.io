import { defineConfig } from 'vitepress'
import { meta } from './constants'

export default defineConfig({
  title: meta.name,
  description: meta.description,
  lang: 'pt-BR',
  lastUpdated: true,
  
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#00d4ff' }],
    ['meta', { name: 'author', content: 'Pablo Murad' }],
    ['meta', { name: 'keywords', content: 'pablo, news, vault, recursos, ferramentas, guias, gaming, ai, privacidade, tecnologia' }],
    ['meta', { name: 'robots', content: 'noindex, nofollow, noarchive, nosnippet, noimageindex' }],
    
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: meta.name }],
    ['meta', { property: 'og:title', content: meta.name }],
    ['meta', { property: 'og:description', content: meta.description }],
    ['meta', { property: 'og:url', content: `https://${meta.hostname}` }],
    ['meta', { property: 'og:image', content: `https://${meta.hostname}/pablo.png` }],
    
    // Favicons
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favico.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/pablo.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],

  appearance: false,

  themeConfig: {
    logo: '/pablo.png',
    siteTitle: 'pablo.news',
    
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Vault', link: '/vault/' },
      { text: 'Guias', link: '/vault/guias/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/runawaydevil' },
      { icon: 'twitter', link: 'https://x.com/runawayd3vil' },
      { icon: 'instagram', link: 'https://instagram.com/murad.pablo' },
      { icon: 'telegram', link: 'https://t.me/runawaydevil' },
      { icon: 'reddit', link: 'https://reddit.com/user/runawaydevil' }
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
                displayDetails: 'Exibir lista detalhada',
                resetButtonTitle: 'Limpar busca',
                backButtonTitle: 'Fechar busca',
                noResultsText: 'Nenhum resultado encontrado',
                footer: {
                  selectText: 'para selecionar',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'para navegar',
                  navigateUpKeyAriaLabel: 'seta para cima',
                  navigateDownKeyAriaLabel: 'seta para baixo',
                  closeText: 'para fechar',
                  closeKeyAriaLabel: 'escape'
                }
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
      text: 'Atualizado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    },

    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Voltar ao topo'
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
    /^http:\/\/localhost/,
    './guias/index'
  ]
})
