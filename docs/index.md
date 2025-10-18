---
layout: home
title: piratas.club
hero:
  name: piratas.club
  text: Vault de Recursos Digitais
  tagline: O maior compêndio digital do mundo em português de ferramentas, guias e conhecimentos essenciais para a cultura hacker.
  image:
    src: /dl1.png
    alt: Navio pirata RD do piratas.club
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
        iconSrc = '/nerd.png'
        altText = 'Vault de Recursos'
      } else if (title.includes('Guias')) {
        iconSrc = '/hack1.png'
        altText = 'Guias Práticos'
      }
      
      if (iconSrc) {
        let iconElement = card.querySelector('.icon')
        if (!iconElement) {
          iconElement = document.createElement('div')
          iconElement.className = 'icon'
          card.insertBefore(iconElement, card.firstChild)
        }
        iconElement.innerHTML = `<img src="${iconSrc}" alt="${altText}" class="feature-icon" style="width: 64px; height: 64px; display: block; margin: 16px auto 16px auto;">`
      }
    })
  }, 500)
})
</script>

<style>
/* Replicando o efeito da logo dl1.png para os ícones */
.feature-icon {
  position: relative;
  z-index: 2;
  transition: transform 0.25s ease;
}

/* Glow colorido atrás dos ícones (igual ao da logo) */
.icon::before {
  content: "";
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;

  /* Mesmo gradiente da logo, mas menor */
  background:
    radial-gradient(
      circle at 55% 45%,
      rgba(155, 60, 255, 0.55) 0%,   /* #9B3CFF violeta */
      rgba(0, 183, 199, 0.45) 40%,   /* #00B7C7 ciano */
      rgba(0, 0, 0, 0) 70%
    );
  filter: blur(8px);
}

/* Efeito hover sutil (igual ao da logo) */
.feature-icon:hover {
  transform: scale(1.05);
}

/* Garantir que o container do ícone tenha posição relativa */
.icon {
  position: relative;
  z-index: 1;
}
</style>