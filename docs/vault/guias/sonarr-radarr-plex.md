---
title: "Guia do Streaming Doméstico Automatizado (Sonarr, Radarr e Plex)"
description: "(Sonarr, Radarr e Plex)"
---

# Guia do Streaming Doméstico Automatizado (Sonarr, Radarr e Plex)

Desde o início da pandemia, venho montando e aprimorando um servidor de mídias automatizado que se tornou minha principal fonte de filmes e séries. Os softwares necessários são bastante conhecidos, mas percebi uma falta de guias focados em streaming doméstico. Neste tutorial, utilizo um computador Dell de mais de 10 anos, o que torna o processo acessível para a maioria.

Antes de começar, farei um breve resumo de cada software que utilizaremos.

**qBitTorrent** - Um dos mais famosos clientes de torrent, usado para baixar mídias. Radarr e Sonarr enviarão automaticamente o magnet link dos filmes e séries desejados para ele. Após o download, o torrent é automaticamente excluído.

**Radarr** - Gerenciador de filmes. Após adicionar os filmes desejados, o Radarr busca constantemente pelas melhores versões nos mais diversos sites e envia para o qBitTorrent.

**Sonarr** - Funciona como o Radarr, mas é focado em séries.

**Prowlarr** - Indexador de fontes de torrent. É por meio dele que o Radarr e o Sonarr acessam os sites e grupos que disponibilizam torrents.

**Bazarr** - Software que acompanha o Radarr e o Sonarr para o download de legendas, buscando constantemente pelas melhores disponíveis nos sites cadastrados.

**Plex** - Onde você assistirá seus filmes e séries. Organiza automaticamente suas mídias em uma biblioteca, acessível local ou remotamente. O Plex possui uma versão paga, mas a gratuita sempre me atendeu bem. Há alternativas de código aberto, como o Jellyfin, mas prefiro o Plex pela performance.

**Letterboxd** - Site e aplicativo para registrar e avaliar filmes, criar listas e ver avaliações de amigos. Usaremos a função de listas do Letterboxd para integrar ao Radarr e automatizar ainda mais o processo.

**Opensubtitles** - Site que oferece legendas em diversos idiomas.

**Os tutoriais de instalação dos programas podem ser encontrados facilmente com uma busca por "Nome do programa + download" no Google.**

**Sumário**

1. Requisitos Recomendados
2. qBitTorrent - Configurações
3. Radarr - Configurações
4. Sonarr - Configurações
5. Prowlarr - Configurações
6. Bazarr - Configurações
7. Plex - Configurações

## 1. REQUISITOS RECOMENDADOS

- Computador básico já é suficiente
- Mínimo de 1TB de armazenamento (depende do tamanho da biblioteca desejada)
- Conexão de internet via cabo

## 2. QBITTORRENT - CONFIGURAÇÕES

O qBitTorrent foi escolhido por sua confiabilidade e facilidade de uso. Primeiro, crie três pastas no seu computador:

1. qBitTorrent - para downloads de filmes
2. Filmes - onde o Radarr moverá os filmes após o download
3. Séries - onde o Sonarr moverá as séries após o download

**Pastas**

> Configure o qBitTorrent conforme abaixo:

### Preferências -> Download

**Preferências de download**

Pré-alocar espaço no disco para garantir espaço para o download completo. É crucial que o gerenciamento de torrents esteja configurado para automático.

**Configurações**

Defina a pasta **qBitTorrent** como local padrão para downloads.

### Preferências -> Interface de Usuário

Ative a interface web e defina um usuário e senha. Acesse a interface pelo endereço http://localhost:8080 ou http://(seu_ip):8080 (após iniciar o serviço).

**As demais configurações do qBitTorrent são de preferência pessoal.**

## 3. RADARR - CONFIGURAÇÕES

Após instalar o Radarr, acesse-o por http://localhost:7878 ou http://(seu_ip):7878 (após iniciar o serviço).

**Interface do Radarr**

Vá em **Configurações -> Interface** e altere o idioma para Português (Brasil). Salve e recarregue a página.

### **NOMENCLATURA DE FILME**

**Nomenclatura de filme**

Ative a renomeação de filmes e substitua caracteres ilegais. Use o seguinte formato para nome de filmes e pastas, garantindo que o Plex reconheça e organize corretamente:

**Formato padrão de filme:**
```
{Movie CleanTitle} {(Release Year)} {imdb-{ImdbId}} {edition-{Edition Tags}} {[Custom Formats]}{[Quality Full]}{[MediaInfo 3D]}{[MediaInfo VideoDynamicRangeType]}{[Mediainfo AudioCodec}{ Mediainfo AudioChannels]}[{Mediainfo VideoCodec}]{-Release Group}
```

**Formato padrão de pasta de filme:**
```
{Movie CleanTitle} ({Release Year}) {imdb-{ImdbId}}
```

### **Gerenciamento de Arquivo**

Configure o Radarr para ignorar a verificação de espaço livre e usar links rígidos em vez de cópias. Não prefira arquivos PROPER ou REPACK, a menos que sejam de sua preferência específica.

### **CONFIGURAÇÕES -> QUALIDADE**

Defina os tamanhos mínimos e máximos de arquivo para cada perfil de qualidade. O Radarr evitará baixar arquivos fora desses limites.

### **CONFIGURAÇÕES -> FORMATOS PERSONALIZADOS**

Você pode importar formatos personalizados para evitar ou preferir certos tipos de releases. Por exemplo, para evitar releases em 3D ou BR-DISK, que são pesados e podem não rodar bem no Plex.

### **CONFIGURAÇÕES -> PERFIS**

Defina os perfis de qualidade para os filmes, permitindo que o Radarr atualize automaticamente os filmes para a melhor qualidade disponível até o limite que você definir.

### **CONFIGURAÇÕES -> INDEXADORES E CLIENTES DE DOWNLOAD**

Configure os indexadores e clientes de download após adicionar e configurar o Prowlarr, que gerenciará essas conexões.

### **CONFIGURAÇÕES -> LISTAS (OPCIONAL)**

Você pode integrar listas do Letterboxd para automatizar ainda mais a adição de filmes ao Radarr.

## 4. SONARR - CONFIGURAÇÕES

O processo de configuração do Sonarr é similar ao do Radarr, mas focado em séries. Acesse o Sonarr por http://localhost:8989 ou http://(seu_ip):8989 (após iniciar o serviço) e configure os perfis de qualidade, formatos de episódios e pastas de séries.

## 5. PROWLARR - CONFIGURAÇÕES

Instale e configure o Prowlarr para gerenciar os indexadores de torrents. Acesse por http://localhost:9696 ou http://(seu_ip):9696 (após iniciar o serviço). Adicione os indexadores desejados e sincronize-os com o Radarr e o Sonarr.

## 6. BAZARR - CONFIGURAÇÕES

Configure o Bazarr para o download automático de legendas, integrando-o com o Radarr e o Sonarr. Acesse por http://localhost:6767 ou http://(seu_ip):6767 (após iniciar o serviço). Adicione o idioma desejado para as legendas e configure os provedores de legendas, como o Opensubtitles.

## 7. PLEX - CONFIGURAÇÕES

Finalmente, configure o Plex para assistir aos filmes e séries baixados. Acesse por http://localhost:32400, http://(seu_ip):32400 ou app.plex.tv (após iniciar o serviço). Adicione suas bibliotecas de filmes e séries e ajuste as configurações de biblioteca para otimizar a experiência de uso.

## CONCLUSÃO

Espero que este guia ajude você a montar e automatizar seu próprio servidor de streaming doméstico. Para mais informações e dicas avançadas, consulte o site [trash guides](https://trash-guides.info). Agradeço a leitura e desejo sucesso na sua configuração!

## 🔗 Veja também

- **[Guia de Auto-hospedagem e Ativação de Software](/vault/other/selfhosting)** - Ambos os guias lidam com a configuração de software para fins de streaming e hospedagem
