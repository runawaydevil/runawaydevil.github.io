<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <!-- Layout em duas colunas -->
        <div class="hero-layout">
          <!-- Coluna Esquerda - Título e Conteúdo -->
          <div class="hero-left">
            <!-- Título com Efeitos Especiais -->
            <div class="title-container">
              <h1 class="hero-title">
                <span class="brand title-line">Bem-vindos ao Vault.</span>
              </h1>
              <div class="title-underline"></div>
            </div>
            
                   <!-- Descrição com Animação -->
                   <div class="description-container">
                     <p class="hero-description">
                       Uma verdadeira <strong class="highlight">arca digital</strong> repleta de descobertas — links, megathreads, 
                       ferramentas e recursos incríveis que encontrei pelo caminho. Tudo organizado para curiosos, 
                       desenvolvedores, hackers éticos e amantes da tecnologia.
                     </p>
                   </div>
            
            
            <!-- Botão de Ação -->
            <div class="action-container">
              <a href="/vault/" class="cta-button">
                <span class="cta-text">Explorar Vault</span>
                <div class="cta-icon">🚀</div>
                <div class="cta-glow"></div>
              </a>
            </div>
          </div>
          
          <!-- Coluna Direita - Avatar Gigante com Efeitos -->
          <div class="hero-right">
            <div class="avatar-container">
              <div class="avatar-ring outer-ring"></div>
              <div class="avatar-ring middle-ring"></div>
              <div class="avatar-ring inner-ring"></div>
              <div class="avatar-glow"></div>
              <img 
                src="/pablo.png" 
                alt="Pablo Avatar" 
                class="avatar"
                @load="onAvatarLoad"
                @mouseenter="onAvatarHover"
                @mouseleave="onAvatarLeave"
              />
              <div class="avatar-particles">
                <div v-for="i in 8" :key="i" class="avatar-particle" :style="getAvatarParticleStyle(i)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background Effects -->
      <div class="particles">
        <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
      <div class="grid-background"></div>
      <div class="gradient-overlay"></div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section">
      <div class="container">
        <h2 class="section-title">Projetos em Desenvolvimento</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in projects" :key="project.name">
            <div class="project-icon">{{ project.icon }}</div>
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">{{ project.tech }}</div>
            <a :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link">
              <span>Ver no GitHub</span>
              <div class="project-link-icon">🔗</div>
            </a>
            <div class="project-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Footer from './Footer.vue'

const avatarLoaded = ref(false)
const avatarHovered = ref(false)

const projects = [
  {
    name: 'AlgoSim',
    icon: '🔍',
    description: 'Algoritmo proprietário para detectar similaridade entre documentos de texto, especialmente útil para consolidação de conteúdo duplicado ou relacionado.',
    tech: 'Python • PHP • Node.js',
    github: 'https://github.com/runawaydevil/algosim'
  },
  {
    name: 'RSS Skull',
    icon: '🤖',
    description: 'Bot moderno e de alta performance para RSS no Telegram com descoberta inteligente de feeds e suporte multi-formato.',
    tech: 'TypeScript • Telegram API',
    github: 'https://github.com/runawaydevil/rssskull'
  },
  {
    name: 'Organizer Movies',
    icon: '🎬',
    description: 'Organize sua coleção de filmes automaticamente usando IA e a API do The Movie Database (TMDB).',
    tech: 'Python • AI • TMDB API',
    github: 'https://github.com/runawaydevil/organizer-movies'
  },
  {
    name: 'Gazela',
    icon: '⚡',
    description: 'Fork customizado e aprimorado do framework Gazelle BitTorrent tracker, focado em experiência do desenvolvedor e práticas modernas de deployment.',
    tech: 'PHP • BitTorrent • Framework',
    github: 'https://github.com/runawaydevil/gazela'
  }
]


function onAvatarLoad() {
  avatarLoaded.value = true
}

function onAvatarHover() {
  avatarHovered.value = true
}

function onAvatarLeave() {
  avatarHovered.value = false
}

function getParticleStyle(index) {
  const size = Math.random() * 6 + 2
  const left = Math.random() * 100
  const animationDelay = Math.random() * 20
  const animationDuration = Math.random() * 15 + 10
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`
  }
}

function getAvatarParticleStyle(index) {
  const angle = (index * 45) % 360
  const radius = 80 + Math.random() * 40
  const x = Math.cos(angle * Math.PI / 180) * radius
  const y = Math.sin(angle * Math.PI / 180) * radius
  
  return {
    transform: `translate(${x}px, ${y}px)`,
    animationDelay: `${index * 0.2}s`
  }
}

onMounted(() => {
  // Adicionar classe para background escuro
  document.body.classList.add('home-loaded')
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #0f0f0f;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  padding: 1rem 2rem;
  width: 100%;
  background: transparent;
  box-sizing: border-box;
}

.hero-content {
  width: 100%;
  max-width: 1400px;
  z-index: 2;
  position: relative;
  padding: 0 2rem;
}

/* Layout em duas colunas */
.hero-layout {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  min-height: 60vh;
  padding-top: 0;
}

.hero-left {
  flex: 1;
  max-width: 600px;
  text-align: left;
}

.hero-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding-top: 2rem;
}

/* Avatar Container Gigante */
.avatar-container {
  position: relative;
  display: inline-block;
  animation: fadeInScale 1.5s ease-out;
  margin: 2rem;
}

.avatar {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 6px solid var(--vp-c-brand-1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 10;
  box-shadow: 
    0 0 50px rgba(0, 212, 255, 0.3),
    inset 0 0 50px rgba(0, 212, 255, 0.1);
}

.avatar:hover {
  transform: scale(1.05) rotate(5deg);
  box-shadow: 
    0 0 80px rgba(0, 212, 255, 0.6),
    inset 0 0 80px rgba(0, 212, 255, 0.2);
}

/* Anéis Animados */
.avatar-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
  animation: rotate 20s linear infinite;
}

.outer-ring {
  width: 320px;
  height: 320px;
  top: -20px;
  left: -20px;
  border-color: rgba(0, 212, 255, 0.3);
  animation-duration: 25s;
  animation-direction: reverse;
}

.middle-ring {
  width: 360px;
  height: 360px;
  top: -40px;
  left: -40px;
  border-color: rgba(0, 212, 255, 0.2);
  animation-duration: 30s;
}

.inner-ring {
  width: 400px;
  height: 400px;
  top: -60px;
  left: -60px;
  border-color: rgba(0, 212, 255, 0.1);
  animation-duration: 35s;
  animation-direction: reverse;
}

/* Glow Effect */
.avatar-glow {
  position: absolute;
  top: -80px;
  left: -80px;
  right: -80px;
  bottom: -80px;
  background: radial-gradient(circle, var(--vp-c-brand-1) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.4;
  animation: pulse 3s infinite;
  z-index: 1;
}

/* Partículas do Avatar */
.avatar-particles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  pointer-events: none;
}

.avatar-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: orbit 4s linear infinite;
  box-shadow: 0 0 10px var(--vp-c-brand-1);
}


/* Title Container */
.title-container {
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
  line-height: 1.2;
  text-align: left;
}

.title-line {
  display: block;
  margin-bottom: 0.5rem;
}

.brand {
  background: linear-gradient(45deg, var(--vp-c-brand-1), #00b4d8, #0077b6, #023e8a, var(--vp-c-brand-1));
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  white-space: nowrap;
  animation: gradientShift 3s ease-in-out infinite;
}

.title-underline {
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), transparent);
  margin: 0;
  border-radius: 2px;
  animation: expandWidth 1s ease-out 1.5s both;
}

/* Description Container */
.description-container {
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.hero-description {
  font-size: 1.4rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  max-width: 800px;
  margin: 0 auto;
}

.highlight {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}


/* Action Container */
.action-container {
  margin-top: 0.5rem;
  animation: fadeInUp 1s ease-out 1.2s both;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(45deg, var(--vp-c-brand-1), #4ecdc4);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.4);
}

.cta-text {
  position: relative;
  z-index: 2;
}

.cta-icon {
  font-size: 1.5rem;
  animation: rocket 2s infinite;
}

.cta-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover .cta-glow {
  left: 100%;
}

/* Projects Section */
.projects-section {
  padding: 2rem 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  margin-top: -25rem;
  z-index: 10;
}

.projects-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,212,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease-out;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(37, 37, 37, 0.8);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 1s ease-out;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.project-card:hover::before {
  left: 100%;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
}

.project-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.project-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.project-description {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.5;
  font-size: 0.95rem;
}

.project-tech {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.project-link:hover {
  color: var(--vp-c-brand-1);
  transform: translateX(5px);
}

.project-link-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.project-link:hover .project-link-icon {
  transform: rotate(45deg);
}

.project-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%);
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-glow {
  opacity: 1;
}

/* Background Effects */
.particles {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100vh - 64px);
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: var(--vp-c-brand-1);
  border-radius: 50%;
  opacity: 0.6;
  animation: float infinite linear;
  box-shadow: 0 0 10px var(--vp-c-brand-1);
}

.grid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  opacity: 0.3;
}

.gradient-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
  z-index: 0;
}


/* Animations */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(100px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(100px) rotate(-360deg);
  }
}


@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes expandWidth {
  from {
    width: 0;
  }
  to {
    width: 200px;
  }
}

@keyframes rocket {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes float {
  0% {
    transform: translateY(calc(100vh - 64px)) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero {
    padding: 1.5rem;
  }
  
  .hero-layout {
    gap: 2rem;
    padding-top: 0;
  }
  
  .hero-right {
    padding-top: 1.5rem;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-description {
    font-size: 1.3rem;
  }
  
  .avatar {
    width: 240px;
    height: 240px;
  }
  
  .outer-ring {
    width: 280px;
    height: 280px;
  }
  
  .middle-ring {
    width: 320px;
    height: 320px;
  }
  
  .inner-ring {
    width: 360px;
    height: 360px;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 1rem;
  }
  
  .hero-content {
    max-width: 100%;
    padding: 0 1rem;
  }
  
  .hero-layout {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding-top: 0;
  }
  
  .hero-right {
    padding-top: 1rem;
  }
  
  .hero-left {
    text-align: center;
    max-width: 100%;
  }
  
  .hero-title {
    font-size: 2.8rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    word-break: break-word;
    text-align: center;
  }
  
  .hero-description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }
  
  .title-underline {
    margin: 0 auto;
  }
  
  .projects-section {
    padding: 1.5rem 0;
    margin-top: -15rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-card {
    padding: 1.5rem;
  }
  
  .avatar {
    width: 200px;
    height: 200px;
  }
  
  .outer-ring {
    width: 240px;
    height: 240px;
  }
  
  .middle-ring {
    width: 280px;
    height: 280px;
  }
  
  .inner-ring {
    width: 320px;
    height: 320px;
  }
  
  .category-card {
    padding: 1.5rem;
    margin: 0 0.5rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 0.5rem;
  }
  
  .hero-content {
    padding: 0 0.5rem;
  }
  
  .hero-layout {
    gap: 1rem;
    padding-top: 0;
  }
  
  .hero-right {
    padding-top: 0.5rem;
  }
  
  .hero-title {
    font-size: 2.2rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  
  .brand {
    display: block;
    margin-top: 0.5rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    padding: 0;
  }
  
  .hero-stats {
    gap: 1.5rem;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .stat {
    flex: 1;
    min-width: 100px;
    padding: 0.8rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.8rem;
  }
  
  .avatar {
    width: 160px;
    height: 160px;
  }
  
  .outer-ring {
    width: 200px;
    height: 200px;
  }
  
  .middle-ring {
    width: 240px;
    height: 240px;
  }
  
  .inner-ring {
    width: 280px;
    height: 280px;
  }
  
}

@media (max-width: 360px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  
  .avatar {
    width: 140px;
    height: 140px;
  }
  
  .outer-ring {
    width: 180px;
    height: 180px;
  }
  
  .middle-ring {
    width: 220px;
    height: 220px;
  }
  
  .inner-ring {
    width: 260px;
    height: 260px;
  }
  
  .category-card {
    padding: 0.8rem;
  }
}
</style>