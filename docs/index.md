---
layout: home
hero:
  name: "Bem-vindos ao Vault"
  text: "Uma verdadeira arca digital repleta de descobertas"
  tagline: "Links, megathreads, ferramentas e recursos incríveis que encontrei pelo caminho. Tudo organizado para curiosos, desenvolvedores, hackers éticos e amantes da tecnologia."
  image:
    src: /pablo.png
    alt: Pablo Avatar
  actions:
    - theme: brand
      text: Explorar Vault
      link: /vault/
features:
  - title: 🔍 AlgoSim
    details: Algoritmo proprietário para detectar similaridade entre documentos de texto, especialmente útil para consolidação de conteúdo duplicado ou relacionado.
    link: https://github.com/runawaydevil/algosim
  - title: 🤖 RSS Skull
    details: Bot moderno e de alta performance para RSS no Telegram com descoberta inteligente de feeds e suporte multi-formato.
    link: https://github.com/runawaydevil/rssskull
  - title: 🎬 Organizer Movies
    details: Organize sua coleção de filmes automaticamente usando IA e a API do The Movie Database (TMDB).
    link: https://github.com/runawaydevil/organizer-movies
  - title: ⚡ Gazela
    details: Fork customizado e aprimorado do framework Gazelle BitTorrent tracker, focado em experiência do desenvolvedor e práticas modernas de deployment.
    link: https://github.com/runawaydevil/gazela
---

<div style="text-align: center; margin-top: 3rem; padding: 2rem; border-top: 1px solid rgba(0, 212, 255, 0.2);">

<div class="emblems-section-container">
  <div class="emblems-wrapper">
    <div class="emblem-item">
      <img src="/Hacker_Emblem.png" alt="Hacker Emblem" class="emblem-image" />
    </div>
    <div class="emblem-item">
      <img src="/abyss.png" alt="Abyss Emblem" class="emblem-image" />
    </div>
  </div>
  <div class="emblem-descriptions-wrapper">
    <p class="emblem-description">
      <strong>Hacker Emblem¹</strong> - Símbolo da cultura hacker Unix<br>
      <em>Inspirado por Eric S. Raymond</em>
    </p>
    <p class="emblem-description">
      <strong>Abyss Emblem²</strong> - Símbolo de Red Team<br>
      <em>Criador deste site faz parte de Red Team</em>
    </p>
  </div>
</div>

🏴‍☠️ **Desenvolvido por [RunawayDevil](https://pablo.space) - 2025**

</div>

<style>
.emblems-section-container {
  margin: 2rem auto;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(200, 200, 200, 0.15));
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 255, 0.3);
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.2);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
}

.emblems-section-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 212, 255, 0.3);
  border-color: rgba(0, 212, 255, 0.5);
}

.emblems-wrapper {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.emblem-item {
  text-align: center;
}

.emblem-image {
  width: 80px;
  height: 80px;
  filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.5));
  transition: all 0.3s ease;
}

.emblems-section-container:hover .emblem-image {
  filter: drop-shadow(0 0 15px rgba(0, 212, 255, 0.8));
}

.emblem-image:hover {
  transform: scale(1.1);
}

.emblem-descriptions-wrapper {
  text-align: center;
}

.emblem-description {
  margin: 0.5rem 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85rem;
  line-height: 1.3;
}

.emblem-description strong {
  color: #00d4ff;
  font-weight: 600;
}

.emblem-description em {
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .emblems-section-container {
    padding: 0.75rem;
    max-width: 90%;
  }
  
  .emblems-wrapper {
    gap: 1.5rem;
  }
  
  .emblem-image {
    width: 60px;
    height: 60px;
  }
  
  .emblem-description {
    font-size: 0.75rem;
  }
  
  .emblem-description em {
    font-size: 0.7rem;
  }
}
</style>