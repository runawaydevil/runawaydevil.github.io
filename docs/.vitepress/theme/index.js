import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    // Adicionar script para customizar o rodapé após o carregamento
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