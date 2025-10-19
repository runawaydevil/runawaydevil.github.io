---
layout: home
title: piratas.club
hero:
  name: piratas.club
  text: Vault de Recursos Digitais
  tagline: O maior compêndio digital do mundo e em português de ferramentas, guias e conhecimentos essenciais para a cultura hacker.
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
        // Adicionar classe específica ao card para CSS
        if (title.includes('Vault')) {
          card.classList.add('vault-card')
        } else if (title.includes('Guias')) {
          card.classList.add('guias-card')
        }
      }
    })
  }, 100)
})
</script>

<style>
/* Layout dos cards - textos em cima, ícones embaixo */
.VPFeature {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 224px;
  position: relative;
  padding: 20px;
  overflow: hidden;
}

/* Ícone do Vault de Recursos */
.vault-card::after {
  content: "";
  position: absolute;
  bottom: -10px; /* Reduzido para parecer que sai da borda */
  left: 50%;
  transform: translateX(-50%);
  width: 104px;
  height: 104px;
  background-image: url('/nerd.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
}

/* Ícone dos Guias Práticos */
.guias-card::after {
  content: "";
  position: absolute;
  bottom: -10px; /* Reduzido para parecer que sai da borda */
  left: 50%;
  transform: translateX(-50%);
  width: 104px;
  height: 104px;
  background-image: url('/hack1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
}

/* Efeito gradiente atrás dos ícones */
.vault-card::before,
.guias-card::before {
  content: "";
  position: absolute;
  bottom: -20px; /* Reduzido para parecer que sai da borda */
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: 130px;
  background:
    radial-gradient(
      circle at 55% 45%,
      rgba(155, 60, 255, 0.7) 0%,
      rgba(0, 183, 199, 0.6) 40%,
      rgba(0, 0, 0, 0) 70%
    );
  filter: blur(16px);
  z-index: 9;
}

/* Efeito hover */
.vault-card:hover::after,
.guias-card:hover::after {
  transform: translateX(-50%) scale(1.05);
  transition: transform 0.25s ease;
}

/* Ajustar espaçamento dos textos para dar espaço ao ícone */
.VPFeature h2,
.VPFeature h3,
.VPFeature .title {
  margin-bottom: 12px;
  margin-top: 0;
}

.VPFeature p {
  margin-bottom: 0;
  padding-bottom: 90px; /* Ajustado para cards menores */
}
</style>