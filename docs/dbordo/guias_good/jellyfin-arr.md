---
sidebar_position: 8
title: "Jellyfin e Família Arr - Docker Compose"
description: "Guia detalhado para montar um servidor multimídia caseiro com Jellyfin, Radarr, Sonarr, Prowlarr, QBitTorrent e Flaresolverr usando Docker Compose."
---

# Jellyfin e Família Arr — Docker Compose

Guia quase completo para montar um **servidor caseiro de mídia** com **Docker** e **Jellyfin**. Usaremos o **Ubuntu Server** como base e mostraremos como configurar os principais aplicativos que compõem o ecossistema *Arr* (Radarr, Sonarr, Prowlarr, etc). Este guia foca na estrutura do Docker Compose — as configurações detalhadas de cada app podem ser encontradas na megathread.

---

## 🧱 O que Usaremos

- **Docker** — Ferramenta de containers que permite empacotar e executar aplicações de forma isolada e portátil. (usaremos o **Docker Compose**)  
- **Prowlarr** — Indexador que gerencia e busca torrents em múltiplas fontes.  
- **Flaresolverr** — Resolve proteções Cloudflare para o Prowlarr.  
- **Radarr** — Gerencia filmes, metadados e automação de downloads.  
- **Sonarr** — Faz o mesmo para séries.  
- **qBittorrent** — Cliente torrent que efetua os downloads.  
- **Jellyfin** — Servidor de streaming de mídia local (alternativa open-source ao Plex).  

![Exemplo do Jellyfin](/img/jellyfin-arr.png)

---

## 📂 Estrutura de Pastas

Criaremos a estrutura de diretórios dentro da pasta `home`. Execute os comandos abaixo (remova o `#` e os comentários ao copiar):

```bash
cd ~ # Vai para a pasta home
mkdir media_server # Cria a pasta principal
cd media_server # Entra nela
mkdir media media/downloads media/movies media/shows # Estrutura de mídia
nano docker-compose.yml # Cria o arquivo de configuração do Docker Compose
```

### Estrutura final:
```
media_server/
├── docker-compose.yml              # Arquivo principal de containers
└── media/
    ├── downloads/  # Onde o qBittorrent salva torrents
    ├── movies/     # Filmes organizados pelo Radarr
    └── shows/      # Séries organizadas pelo Sonarr
```

---

## 🐳 Instalando o Docker e o Docker Compose

Atualize o sistema e instale o Docker:

```bash
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get install docker docker-compose -y
```

Verifique se está tudo certo:
```bash
docker --version
docker compose version
```

---

## ⚙️ Configurando o `docker-compose.yml`

Abra o arquivo:
```bash
nano docker-compose.yml
```

### 🧩 Jellyfin

```yaml
version: "3.5"

services:
  jellyfin:
    image: lscr.io/linuxserver/jellyfin:latest
    container_name: jellyfin
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Sao_Paulo
    volumes:
      - ./jellyfin/config:/config
      - ./media:/media
    ports:
      - 8096:8096
    expose:
      - 8096
    restart: unless-stopped
```

> 💡 **Dica:** No campo `TZ`, use seu fuso horário conforme a lista: [Wikipedia - TZ Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

---

### 🔎 Prowlarr

```yaml
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
```

### 🧲 qBittorrent

```yaml
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Sao_Paulo
      - WEBUI_PORT=8080
      - TORRENTING_PORT=6881
    volumes:
      - ./qbittorrent/config:/config
      - ./media/downloads:/downloads
      - ./media/movies:/movies
      - ./media/shows:/shows
    ports:
      - 8080:8080
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped
```

### 🧠 Flaresolverr

```yaml
  flaresolverr:
    image: ghcr.io/flaresolverr/flaresolverr:latest
    container_name: flaresolverr
    environment:
      - TZ=America/Sao_Paulo
    ports:
      - 8191:8191
    restart: unless-stopped
```

### 🎬 Radarr

```yaml
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
      - ./media/downloads:/downloads
    ports:
      - 7878:7878
    restart: unless-stopped
```

### 📺 Sonarr

```yaml
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
      - ./media/downloads:/downloads
    ports:
      - 8989:8989
    restart: unless-stopped
```

---

## 🚀 Executando os Containers

Após salvar o arquivo, inicie tudo com:

```bash
sudo docker compose up -d
```

Todos os serviços serão baixados e executados automaticamente. Use `docker ps` para verificar se estão ativos.

> ⚠️ Se algo falhar, revise a indentação (espaços e níveis). YAML é sensível a isso.

---

## 🔧 Conectando o Flaresolverr ao Prowlarr

1. Acesse o Prowlarr em `http://<seu_ip>:9696`
2. Vá em **Settings → Indexers → + → Flaresolverr**
3. Configure:
   - **Tag:** `flaresolverr`
   - **Host:** `http://flaresolverr:8191`

Agora, qualquer indexador protegido por Cloudflare será acessado normalmente.

---

## 🎥 Configurando o Jellyfin

Assista ao vídeo a partir de **7:17** para aprender a configurar o Jellyfin:  
📺 [https://www.youtube.com/watch?v=mAHGh2hBFdY&t=493](https://www.youtube.com/watch?v=mAHGh2hBFdY&t=493)

> Use `/movies` para filmes e `/shows` para séries conforme os volumes definidos no Docker Compose.

Para descobrir o IP local:
```bash
hostname -I   # Linux
ipconfig       # Windows (procure por Endereço IPv4)
```

Acesse cada aplicação no navegador:
- Jellyfin → `http://<ip>:8096`
- Radarr → `http://<ip>:7878`
- Sonarr → `http://<ip>:8989`
- Prowlarr → `http://<ip>:9696`
- qBittorrent → `http://<ip>:8080`

---

## 🧭 Dicas Finais

- Faça backup das pastas `config/` periodicamente.  
- Use DNSs rápidos como **1.1.1.1** ou **8.8.8.8** para evitar lentidão.  
- Atualize os containers com:  
  ```bash
  sudo docker compose pull && sudo docker compose up -d
  ```

---

> “**Automatizar é transformar tempo perdido em liberdade.**”  
> — *Engenheiro anônimo do Vale do Silício*

---

**Autor:** runawaydevil — [https://pablo.space](https://pablo.space)  
**Fonte original:** [Reddit - r/pirataria](https://old.reddit.com/r/pirataria/comments/1bclktc/guia_jellyfin_e_familia_arr_docker_compose/)  
**Backup de vídeo:** [Odysee - Guia Jellyfin](https://odysee.com/mAHGh2hBFdY:eb1d0f15f287d30b9969d5b151599bceea54b145)




