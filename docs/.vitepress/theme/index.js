// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'  // FUNDAMENTAL: isso faz as cores entrarem no bundle
import './style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router }) {
    // Configuração limpa - deixar o CSS fazer o trabalho
    if (typeof window !== 'undefined') {
      // Aguardar o DOM estar pronto
      const updateFooter = () => {
        const copyright = document.querySelector('.VPFooter .copyright')
        if (copyright && copyright.textContent.includes('runawaydevil')) {
          copyright.innerHTML = 'Copyright © 2023-2025 <a href="https://github.com/runawaydevil" target="_blank" rel="noopener noreferrer">runawaydevil</a>'
        }
      }
      
      // Executar imediatamente e também após mudanças de rota
      updateFooter()
      router.onAfterRouteChanged = updateFooter
    }
  }
}