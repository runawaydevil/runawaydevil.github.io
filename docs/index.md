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

## 📰 Última Atualização

### 🚀 [Adicionando várias listas awesome ao projeto](/blog/posts/adicionando-listas-awesome)

**20 de janeiro de 2025**

Muito bom, muito bom, meus amigos! Estou reunindo várias listas awesome e anexando tudo ao projeto. Você pode conferir em **[Misc](/nice-misc)** 😄

Acabei de integrar **12 listas incríveis** ao projeto incluindo Awesome ChatGPT Prompts, Awesome Design, Awesome LLM, Awesome Bitcoin & Blockchain e muito mais. Todas com HTML limpo e prontas para uso!

👉 [Leia mais](/blog/posts/adicionando-listas-awesome) | [Ver todas as postagens](/blog/)

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
  min-height: clamp(180px, 25vh, 280px);
  position: relative;
  padding: clamp(16px, 3vw, 24px);
  overflow: hidden;
}

/* Ícone do Vault de Recursos */
.vault-card::after {
  content: "";
  position: absolute;
  bottom: -10px; /* Reduzido para parecer que sai da borda */
  left: 50%;
  transform: translateX(-50%);
  width: clamp(80px, 12vw, 120px);
  height: clamp(80px, 12vw, 120px);
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
  width: clamp(80px, 12vw, 120px);
  height: clamp(80px, 12vw, 120px);
  background-image: url('/hack1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
}

/* Cards com efeito sutil no fundo preto */
.VPFeature {
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-radius: 12px !important;
  transition: all 0.3s ease !important;
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(10px) !important;
}

.VPFeature:hover {
  border-color: rgba(255, 255, 255, 0.25) !important;
  background: rgba(255, 255, 255, 0.08) !important;
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4) !important;
}

/* Efeito hover dos ícones - mais sutil */
.vault-card:hover::after,
.guias-card:hover::after {
  transform: translateX(-50%) scale(1.1);
  transition: transform 0.3s ease;
  filter: brightness(1.1);
}

/* Ajustar espaçamento dos textos para dar espaço ao ícone */
.VPFeature h2,
.VPFeature h3,
.VPFeature .title {
  margin-bottom: clamp(8px, 2vw, 16px);
  margin-top: 0;
}

.VPFeature p {
  margin-bottom: 0;
  padding-bottom: clamp(60px, 12vw, 100px); /* Responsivo para diferentes tamanhos */
}

</style>