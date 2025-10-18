---
sidebar_position: 6
title: "Guia do Streaming Doméstico Automatizado (Sonarr, Radarr e Plex)"
description: "Automatize seu servidor de mídia pessoal com Sonarr, Radarr, Prowlarr, Bazarr e Plex."
---

# 🎬 Guia do Streaming Doméstico Automatizado (Sonarr, Radarr e Plex)

Automatizar o consumo de mídia é o sonho de qualquer entusiasta de tecnologia — e com ferramentas como **Sonarr**, **Radarr**, **Prowlarr**, **Bazarr** e **Plex**, esse sonho é totalmente possível. Desde 2020, venho aperfeiçoando um sistema que busca, baixa, organiza e exibe automaticamente meus filmes e séries. Tudo isso em um computador antigo que qualquer um poderia ter em casa.

Neste guia, você aprenderá a montar seu próprio **sistema de streaming doméstico automatizado**, com recursos de legendas, integração com listas e metadados perfeitos. Ideal para quem quer independência dos streamings pagos.

> “**Automatizar é libertar tempo. Organizar é libertar espaço.**”  
> — *runawaydevil — [https://pablo.space](https://pablo.space)*

---

## ⚙️ Arquitetura do Sistema

O fluxo completo funciona assim:

```
Letterboxd List → Radarr/Sonarr → Prowlarr → qBitTorrent → Bazarr → Plex
```

Ou seja:
1. Você adiciona filmes/séries a uma lista no **Letterboxd** ou manualmente no **Radarr/Sonarr**.
2. O **Prowlarr** encontra os torrents disponíveis.
3. O **qBitTorrent** baixa o conteúdo.
4. O **Bazarr** adiciona legendas automaticamente.
5. O **Plex** organiza e exibe tudo de forma elegante na sua TV, PC ou celular.

---

## 🧱 Requisitos Recomendados

- **Hardware mínimo:** qualquer PC dual-core com 4GB de RAM.
- **Armazenamento:** mínimo 1TB (recomenda-se HD externo ou NAS dedicado).
- **Sistema:** Linux (preferencial), Windows ou macOS.
- **Rede:** conexão cabeada (Ethernet) e IP estático local.
- **Acesso remoto (opcional):** DynDNS, Cloudflare Tunnel ou VPN WireGuard.

💡 **Dica:** em servidores Linux, usar **Docker Compose** simplifica tudo e garante portabilidade. Veja o guia [Jellyfin e Família Arr - Docker Compose](/docs/megathread/guias/jellyfin-arr).

---

## 🧲 O Papel de Cada Aplicativo

### 🌀 qBitTorrent
Cliente torrent robusto e open-source. Será o motor de download. Permite integração via WebUI (`localhost:8080`).

### 🎥 Radarr
Gerencia e automatiza **filmes**. Monitora sites e baixa automaticamente o melhor release.

### 📺 Sonarr
Equivalente ao Radarr, mas especializado em **séries e animes**.

### 🔎 Prowlarr
O cérebro indexador. Conecta Radarr/Sonarr a dezenas de fontes de torrent (trackers públicos e privados).

### 💬 Bazarr
Cuida das **legendas**, sincroniza automaticamente e faz upgrade quando versões melhores são encontradas.

### 🎬 Plex
Interface visual e player de mídia. Organiza e exibe toda sua biblioteca com pôsteres, sinopses, trilhas sonoras e integração remota.

### 🎞️ Letterboxd (Integração Extra)
Permite que suas listas de filmes sejam importadas automaticamente para o Radarr.

---

## 🌐 Automação Avançada: Integrações e Scripts Úteis

- **Trakt.tv** — sincroniza o que você assistiu entre Plex, Radarr e Letterboxd.
- **Overseerr** — interface web onde amigos podem pedir filmes/séries e o Radarr/Sonarr baixa automaticamente.
- **Tautulli** — estatísticas detalhadas do Plex (quem assistiu o quê, quando e por quanto tempo).
- **qbit-manage** — script que remove torrents antigos, verifica ratio e move arquivos automaticamente.
- **cross-seed** — detecta filmes/séries duplicados em outros trackers e adiciona seed automaticamente.

> 💡 **Curiosidade:** existe uma versão completa dessa automação em **Docker** chamada **ArrSuite** ou **Servarr Stack**, que instala todos esses serviços de uma vez com um único comando.

---

## 🛠️ Otimizações e Dicas Avançadas

### 🎞️ 1. Codificação Inteligente
Se você possui pouco espaço, use o **Tdarr**, um transcodificador que converte automaticamente arquivos para codecs mais leves (como HEVC/H.265), mantendo qualidade e reduzindo até 70% do tamanho.

### 🌈 2. Metadados Locais
Habilite a opção *Usar recursos locais* no Plex. Assim, capas e descrições serão armazenadas junto ao arquivo — útil para acesso offline.

### 🧩 3. Backup e Resiliência
Faça backup periódico das pastas `config/` de cada app. São elas que armazenam todas as configurações, listas e históricos.

Sugestão de backup automatizado (Linux):
```bash
rsync -av /opt/servarr/configs/ /mnt/backup/servarr/ --delete
```

### 🔐 4. Segurança e Acesso Remoto
- Configure autenticação no Plex e senhas fortes em todos os apps.
- Use HTTPS reverso com **Caddy** ou **Nginx Proxy Manager**.
- Ative autenticação 2FA quando possível.
- Evite expor portas diretamente na internet — prefira VPN.

### 📡 5. Notificações Automáticas
Integre o **Radarr** e **Sonarr** ao **Discord** ou **Telegram** via Webhooks para receber alertas de novos downloads, erros ou atualizações.

### 🧠 6. Machine Learning e Recomendação
Com o script **Plex Meta Manager**, é possível criar coleções automáticas baseadas em IA — como “filmes mais bem avaliados no IMDB”, “novidades do mês”, etc.

---

## 🧰 Alternativas e Comparativos

| Categoria | Padrão | Alternativas Open Source |
|------------|---------|--------------------------|
| Streaming | Plex | Jellyfin, Emby |
| Filmes | Radarr | CouchPotato, Medusa |
| Séries | Sonarr | SickChill, FlexGet |
| Indexadores | Prowlarr | Jackett |
| Legendas | Bazarr | Subliminal |

💡 **Curiosidade:** o **Jellyfin**, embora open-source e sem limite de dispositivos, ainda não alcança o mesmo nível de refinamento e integração do Plex — mas evolui rapidamente.

---

## 🖥️ Automação Completa com Docker Compose

Crie um arquivo `docker-compose.yml` com todos os serviços integrados:

```yaml
version: "3.5"
services:
  radarr:
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Sao_Paulo
    volumes:
      - ./radarr/config:/config
      - ./media/movies:/movies
      - ./downloads:/downloads
    ports:
      - 7878:7878
    restart: unless-stopped

  sonarr:
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Sao_Paulo
    volumes:
      - ./sonarr/config:/config
      - ./media/shows:/shows
      - ./downloads:/downloads
    ports:
      - 8989:8989
    restart: unless-stopped

  prowlarr:
    image: lscr.io/linuxserver/prowlarr:latest
    container_name: prowlarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Sao_Paulo
    volumes:
      - ./prowlarr/config:/config
    ports:
      - 9696:9696
    restart: unless-stopped

  bazarr:
    image: lscr.io/linuxserver/bazarr:latest
    container_name: bazarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Sao_Paulo
    volumes:
      - ./bazarr/config:/config
      - ./media/movies:/movies
      - ./media/shows:/shows
    ports:
      - 6767:6767
    restart: unless-stopped

  plex:
    image: lscr.io/linuxserver/plex:latest
    container_name: plex
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Sao_Paulo
    volumes:
      - ./plex/config:/config
      - ./media:/media
    ports:
      - 32400:32400
    restart: unless-stopped
```

Para iniciar:
```bash
sudo docker compose up -d
```

---

## 💬 Curiosidades e Recursos Extras

- **Trash Guides** ([trash-guides.info](https://trash-guides.info)) — documentação definitiva da Servarr Stack.
- **arrstack.dev** — instância pública de demonstração.
- **tinyMediaManager** — alternativa desktop ao Plex, útil para organizar antes do upload.
- **ArrWiki** — wiki colaborativa com guias de integrações e scripts customizados.
- **r/sonarr, r/radarr, r/plex** — comunidades extremamente ativas no Reddit.

> 💡 Alguns usuários criam automações com *AI assistants* via Home Assistant e Plex API para **sugerir filmes baseados no humor atual** ou até **acender luzes automaticamente** quando um filme começa.

---

## 🏁 Conclusão

Com esse ecossistema, você terá um verdadeiro **Netflix pessoal**, livre de mensalidades, algoritmos invasivos e remoções repentinas de catálogo. A automação economiza tempo e transforma o consumo de mídia em uma experiência fluida, integrada e elegante.

> “**Domine suas mídias, não seja dominado por elas.**”  
> — *runawaydevil — [https://pablo.space](https://pablo.space)*

---

**Autor:** runawaydevil — [https://pablo.space](https://pablo.space)  
**Fontes adicionais:** [Trash-Guides](https://trash-guides.info), [Servarr Wiki](https://wiki.servarr.com), [Plex Docs](https://support.plex.tv).




