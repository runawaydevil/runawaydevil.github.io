import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import { RssPlugin, RSSOptions } from 'vitepress-plugin-rss'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Lê a versão do package.json
const packageJson = JSON.parse(readFileSync(resolve(__dirname, '../../package.json'), 'utf-8'))
const version = packageJson.version

// Configuração do RSS
const baseUrl = 'https://piratas.club'

const rssOptions: RSSOptions = {
  title: 'piratas.club',
  baseUrl,
  copyright: 'Copyright © 2023-2025 Pablo Murad',
  description: 'Vault de Recursos Digitais - Feed de atualizações e novos guias',
  language: 'pt-BR',
  author: {
    name: 'Pablo Murad',
    email: 'pablomurad@pm.me',
    link: 'https://piratas.club/about'
  },
  filename: 'feed.rss',
  log: true,
  ignoreHome: true,
  ignorePublish: false,
  filter: (post, idx) => true
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "piratas.club",
  description: "Uma coleção organizada de recursos, ferramentas e informações úteis para desenvolvedores, hackers éticos e entusiastas de tecnologia — explorando o lado criativo, técnico e livre da internet.",
  base: '/',
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true, // ativa a funcionalidade
  head: [
    ['link', { rel: 'icon', href: '/favico.ico', type: 'image/x-icon' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap' }]
  ],
  vite: {
    plugins: [
      AutoSidebar({
        // caminho da pasta docs (default já é /docs)
        path: '/docs',
        ignoreList: ['index.md'],
        collapsed: false,

        // 👇 habilite um (ou os dois) conforme preferir
        titleFromFile: true,         // usa o H1 do .md
        titleFromFileByYaml: true    // usa "title:" do frontmatter
      }),
      RssPlugin(rssOptions)
    ]
  },
  themeConfig: {
    logo: '/icon.png',
    siteTitle: 'piratas.club',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Vault', link: '/vault/' },
      { text: 'Diário de Bordo', link: '/dbordo/' },
      {
        text: 'Redes',
        items: [
          { text: '🌐 Site Pessoal', link: 'https://pablo.space' },
          { text: '🐙 GitHub', link: 'https://github.com/runawaydevil' },
          { text: '🐦 Twitter (X)', link: 'https://x.com/runawayd3vil' },
          { text: '🧠 Reddit', link: 'https://reddit.com/u/runawaydevil' },
          { text: '📸 Flickr', link: 'https://flickr.com/photos/pablomub/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/runawaydevil' },
      { icon: 'twitter', link: 'https://x.com/runawayd3vil' }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 4],
      label: 'Nesta página'
    },

    lastUpdated: {
      text: 'Última atualização', // legenda exibida
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },

    footer: {
      message: `Feito com ❤️ para a comunidade | v${version}`,
      copyright: 'Copyright © 2023-2025 Pablo Murad'
    }
  }
})
