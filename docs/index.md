---
layout: home
title: piratas.club
hero:
  name: piratas.club
  text: Vault de Recursos Digitais
  tagline: Compêndio digital de ferramentas, guias e conhecimentos essenciais para a cultura hacker.
  image:
    src: /dl1.png
    alt: Navio pirata RD do piratas.club
  actions:
    - theme: brand
      text: Explorar Vault
      link: /vault/
features:
  - title: Vault de Recursos
    details: Um espaço dedicado a quem cria, aprende e experimenta tecnologia. Aqui você encontra ferramentas, guias e materiais organizados para impulsionar seus projetos.
  - title: Guias Práticos
    details: Tutoriais diretos sobre tecnologia underground, automação e cultura hacker. Aprenda truques, métodos e ferramentas que ampliam seus limites digitais.
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    // Buscar todos os cards de features
    const featureCards = document.querySelectorAll('.VPFeature')
    
    featureCards.forEach((card) => {
      // Buscar o título para identificar qual card é qual
      const titleElement = card.querySelector('h2, .title, h3')
      const title = titleElement ? titleElement.textContent.trim() : ''
      
      let iconSrc = ''
      let altText = ''
      
      if (title.includes('Vault')) {
        iconSrc = '/vault.svg'
        altText = 'Vault de Recursos'
      } else if (title.includes('Guias')) {
        iconSrc = '/guides-icon.svg'
        altText = 'Guias Práticos'
      }
      
      if (iconSrc) {
        let iconElement = card.querySelector('.icon')
        if (!iconElement) {
          iconElement = document.createElement('div')
          iconElement.className = 'icon'
          card.insertBefore(iconElement, card.firstChild)
        }
        iconElement.innerHTML = `<img src="${iconSrc}" alt="${altText}" style="width: 64px; height: 64px; display: block; margin: 16px auto 16px auto;">`
      }
    })
  }, 500)
})
</script>