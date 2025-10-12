/**
 * Utilitários de performance para o VitePress
 */

// Lazy loading para imagens
export function setupImageLazyLoading() {
  if (typeof window === 'undefined') return

  // Intersection Observer para lazy loading
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        const src = img.dataset.src
        
        if (src) {
          img.src = src
          img.removeAttribute('data-src')
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      }
    })
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  })

  // Observar todas as imagens lazy
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img)
  })
}

// Preload de recursos críticos
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return

  const criticalResources = [
    '/pablo.png',
    // Adicionar outros recursos críticos conforme necessário
  ]

  criticalResources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    link.as = resource.endsWith('.png') || resource.endsWith('.jpg') ? 'image' : 'fetch'
    document.head.appendChild(link)
  })
}

// Otimização de fontes
export function optimizeFonts() {
  if (typeof window === 'undefined') return

  // Preload de fontes críticas
  const fontPreloads = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ]

  fontPreloads.forEach(fontUrl => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = fontUrl
    link.as = 'style'
    link.onload = function() {
      this.onload = null
      this.rel = 'stylesheet'
    }
    document.head.appendChild(link)
  })
}

// Service Worker para cache
export function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration)
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

// Otimização de scroll
export function optimizeScrollPerformance() {
  if (typeof window === 'undefined') return

  let ticking = false

  function updateScrollPosition() {
    // Lógica de scroll otimizada
    ticking = false
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition)
      ticking = true
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true })
}

// Bundle de inicialização de performance
export function initPerformanceOptimizations() {
  setupImageLazyLoading()
  preloadCriticalResources()
  optimizeFonts()
  registerServiceWorker()
  optimizeScrollPerformance()
}