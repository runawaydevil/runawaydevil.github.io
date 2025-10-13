# Jellyfin e Família Arr - Docker Compose

Guia quase completo para configurar um servidor caseiro para assistir filmes e séries utilizando Docker. Neste guia, usaremos o Jellyfin e estarei utilizando o sistema operacional Ubuntu Server. Tentarei ser o mais claro possível, mas se houver algo que você não entenda, sinta-se à vontade para perguntar nos comentários. Nas configurações de cada aplicativo, recomendo seguir as configurações da megathread, pois aqui focaremos em como usar o Docker. Neste guia, utilizaremos:

- **Docker**: Uma ferramenta que permite encapsular aplicações em containers, facilitando a distribuição através de um único arquivo ou comando que pode ser executado em qualquer sistema. (Usaremos o Docker Compose neste guia)
- **Prowlarr**: Um aplicativo que roda em seu navegador e permite buscar torrents em diversos sites.
- **Flaresolverr**: Utilizado para acessar sites protegidos pelo Cloudflare.
- **Radarr**: Aplicativo que busca filmes, coleta metadados e envia para o Prowlarr realizar o download.
- **Sonarr**: Funciona como o Radarr, mas é focado em séries.
- **QBitTorrent**: Aplicativo usado para baixar os torrents que o Radarr e Sonarr encontram através do Prowlarr.
- **Jellyfin**: Plataforma onde iremos transmitir todos os filmes e séries baixados. Veja um exemplo de como ficará abaixo:



Primeiramente, criaremos a estrutura de pastas do nosso servidor na pasta home, utilizando os seguintes comandos (remova o "#" e o texto após ele, que são apenas comentários explicativos):

```
$ cd ~ # Nos levará ao diretório home (pode ser criado em qualquer lugar)
$ mkdir media_server # Criará nossa pasta no home
$ cd media_server # Entrando na pasta media_server
$ mkdir media media/downloads media/movies media/shows # Criará nossa estrutura de arquivos (explicarei cada uma abaixo)
$ touch docker-compose.yml # Cria o arquivo que o Docker Compose usará
```

A estrutura de diretórios ficará assim, com comentários explicando cada parte:

├── docker-compose.yml -> Arquivo usado pelo Docker Compose para rodar os aplicativos

└── media -> Pasta onde salvaremos os arquivos de mídia

├── downloads -> Local onde o QBitTorrent fará o download dos torrents

├── movies -> Local onde o Radarr moverá os filmes após o download ser concluído pelo QBitTorrent

└── shows -> Local onde o Sonarr moverá as séries após o download ser concluído pelo QBitTorrent

Antes de editar o arquivo `docker-compose.yml`, certifique-se de ter o Docker instalado na versão mais recente com os seguintes comandos:

```
$ sudo apt-get update # Atualiza nossa lista de aplicativos e verifica por atualizações
$ sudo apt-get upgrade # Atualiza nossos aplicativos com base na lista que atualizamos
$ sudo apt-get install docker # Instala o Docker, caso ainda não esteja instalado
```

Para começar a editar o arquivo, usaremos o comando `$ nano docker-compose.yml` para abrir o editor de texto nano (embora eu prefira o vim, o nano é mais amigável para iniciantes, mas sinta-se livre para usar o editor de sua preferência):

Aqui está a configuração inicial para o Jellyfin, com comentários feitos com "#", que são opcionais e não serão lidos pelo Docker:

```
version: "3.5" # Versão do Docker Compose que usaremos

services: # Lista de aplicativos que serão usados
  jellyfin: # Aplicativo para assistir filmes e séries
    image: lscr.io/linuxserver/jellyfin:latest # Imagem do aplicativo
    container_name: jellyfin # Nome do container
    environment: # Configurações internas do aplicativo
      - PUID=1000
      - PGID=1000
      - TZ=INSIRA SEU FUSO HORÁRIO AQUI # Encontre seu fuso em: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    volumes: # Configuração de acesso a pastas
      - ./jellyfin/config:/config # Pasta de configurações do Jellyfin
      - ./media:/media # Pasta onde a mídia será armazenada
    ports: # Portas de acesso
      - 8096:8096
    expose: # Para expor o Jellyfin na internet (requer configurações adicionais no roteador)
      - 8096:8096
    restart: unless-stopped # O container será reiniciado automaticamente a menos que seja parado manualmente
```

Recomendo ler os comentários se você não estiver familiarizado com o Docker. Se tiver dúvidas, poste nos comentários para que eu possa ajudar. A configuração dos demais aplicativos segue o mesmo padrão, então haverá menos comentários daqui para frente. Para salvar o arquivo no nano, pressione Ctrl+O e depois Enter; para sair, Ctrl+X.

Agora, vamos adicionar as configurações dos aplicativos que farão o download dos torrents (Prowlarr, QBitTorrent, Flaresolverr), lembrando de colocá-los dentro do "services", no mesmo nível do "Jellyfin":

```
  prowlarr:
    image: lscr.io/linuxserver/prowlarr:latest
    container_name: prowlarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=INSIRA SEU FUSO HORÁRIO AQUI
    volumes:
      - ./prowlarr/config:/config
    ports:
      - 9696:9696
    restart: unless-stopped

  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=INSIRA SEU FUSO HORÁRIO AQUI
      - WEBUI_PORT=8080 # Porta para acessar a interface web, necessária pois o QBitTorrent será controlado via web por aplicativos como Sonarr e Radarr
      - TORRENTING_PORT=6881
    volumes:
      - ./qbittorrent/config:/config
      - ./media/downloads:/downloads
      - ./media/movies:/movies # Não tenho certeza se são necessários, mas recomendo manter por precaução
      - ./media/shows:/shows
    ports:
      - 8080:8080
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped

  flaresolverr:
    image: ghcr.io/flaresolverr/flaresolverr:latest
    container_name: flaresolverr
    environment:
      - TZ=INSIRA SEU FUSO HORÁRIO AQUI
    ports:
      - 8191:8191
    restart: unless-stopped
```

Estamos quase prontos, agora só precisamos do Radarr e do Sonarr para gerenciar os filmes e séries que queremos baixar:

```
  radarr:
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=INSIRA SEU FUSO HORÁRIO AQUI
    volumes:
      - ./radarr/config:/config
      - ./media/movies:/movies
      - ./media/downloads:/downloads
    ports:
      - 7878:7878
    restart: unless-stopped

  sonarr:
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=INSIRA SEU FUSO HORÁRIO AQUI
    volumes:
      - ./radarr/config:/config
      - ./media/shows:/shows
      - ./media/downloads:/downloads
    ports:
      - 8989:8989
    restart: unless-stopped
```

Para iniciar os containers, execute: `$ sudo docker compose up -d`

As configurações dos aplicativos devem seguir as da megathread, exceto para o Jellyfin. Aqui está um vídeo que recomendo para configurar o Jellyfin: [https://www.youtube.com/watch?v=mAHGh2hBFdY&t=493](https://www.youtube.com/watch?v=mAHGh2hBFdY&t=493), começando em 7:17. Lembre-se de configurar os diretórios de filmes e séries para /movies e /shows, respectivamente, conforme configuramos.

Para descobrir seu IP privado no Linux, execute `$ hostname -I`. No Windows, execute `$ ipconfig` e procure pelo "Endereço IPv4" do seu adaptador.

Espero que este guia seja útil. Se houver erros (provavelmente de indentação), por favor, avise nos comentários. Não sou um especialista, faço isso porque gosto, então me perdoem por eventuais erros.

---


Extraído de: https://old.reddit.com/r/pirataria/comments/1bclktc/guia_jellyfin_e_familia_arr_docker_compose/

Backup do vídeo: https://odysee.com/mAHGh2hBFdY:eb1d0f15f287d30b9969d5b151599bceea54b145

## 🔗 Veja também

- **[🎥 Sites de Streaming e Ferramentas Associadas](/vault/video)** - Jellyfin é uma ferramenta para criar um servidor de streaming caseiro.
