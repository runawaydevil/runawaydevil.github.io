---
sidebar_position: 20
title: "Como bloquear anúncios na Twitch (uBlock, Pi-hole e DNS)"
description: "Guia completo para eliminar anúncios da Twitch usando uBlock Origin, Pi-hole, AdGuard e players alternativos."
---

# Como Bloquear Anúncios na Twitch

Este guia reúne métodos comprovados e **seguros** para remover anúncios da Twitch — seja no navegador, celular ou até em toda a rede doméstica. A base original foi escrita por **u/Dreadwhole**, e esta versão expandida foi revisada e ampliada por **runawaydevil ([https://pablo.space](https://pablo.space))** com adições técnicas sobre bloqueio via DNS e Pi-hole.

> “**A liberdade digital começa quando você controla o que é exibido na sua tela.**”  
> — *runawaydevil — [https://pablo.space](https://pablo.space)*

---

## 🧰 Pré-requisitos

- Navegador compatível: **Firefox**, **Brave**, **LibreWolf**, **Edge** ou **Chrome**.  
- Extensão **[uBlock Origin](https://ublockorigin.com)** instalada.  
- Acesso ao painel de configurações da extensão.

💡 **Dica:** Usuários de navegadores Chromium (Brave, Edge, Opera) devem garantir que as permissões de execução de scripts estejam ativadas para as listas funcionarem corretamente.

---

## 🪄 Passo 1 — Acesse o painel do uBlock Origin

1. Clique com o botão direito no ícone do **uBlock Origin**.  
2. Selecione **“Opções”** ou **“Abrir painel de controle”**.  

![Twitch1](/img/twitch1.png)

---

## ⚙️ Passo 2 — Ative o modo avançado

Ative a opção **“Eu sou um usuário avançado”** nas preferências.  
Isso habilita filtros personalizados e controle granular sobre requisições de rede.

:::warning
O projeto r/pirataria e seus colaboradores se comprometem em compartilhar **apenas conteúdos confiáveis e auditáveis**. Evite listas desconhecidas ou não hospedadas em repositórios públicos como GitHub ou GitLab.
:::

![Twitch2](/img/twitch2.png)

---

## 🧩 Passo 3 — Adicione listas de bloqueio atualizadas

1. Vá até **“Listas de Filtros” → “Importar Personalizado”**.  
2. Cole o seguinte URL:  
   ```
   https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/multi.txt
   ```  
3. Clique em **“Aplicar alterações”** e depois **“Atualizar filtros”**.

![Twitch3](/img/twitch3.png)

Essas listas bloqueiam **ads injetados**, **pré-rolls**, **banners** e **segmentos de vídeo promovidos** da Twitch. São mantidas por desenvolvedores independentes e revisadas regularmente.

---

## 🧱 Bloqueando Anúncios com Pi-hole e AdGuard Home

Para quem deseja uma solução em **nível de rede**, bloqueando anúncios da Twitch em **todos os dispositivos da casa**, o ideal é configurar um **Pi-hole** ou **AdGuard Home**.

### 🧩 O que é o Pi-hole?

O **Pi-hole** é um servidor DNS que atua como filtro: toda requisição de anúncios é interceptada e bloqueada antes mesmo de chegar ao navegador. Ele pode ser instalado em um **Raspberry Pi**, **VM** ou **Docker**.

### 🔧 Instalação Rápida (Linux/Docker)

```bash
sudo curl -sSL https://install.pi-hole.net | bash
```

Ou via Docker Compose:

```yaml
version: "3"
services:
  pihole:
    container_name: pihole
    image: pihole/pihole:latest
    environment:
      TZ: 'America/Sao_Paulo'
      WEBPASSWORD: 'sua_senha'
    volumes:
      - ./etc-pihole/:/etc/pihole/
      - ./etc-dnsmasq.d/:/etc/dnsmasq.d/
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "80:80/tcp"
    restart: unless-stopped
```

Após a instalação, acesse o painel em `http://<ip_do_servidor>/admin`.

### ⚙️ Listas Recomendadas para Twitch

Adicione as seguintes listas no painel **Group Management → Adlists**:

```
https://gitlab.com/hagezi/mirror/-/raw/main/dns-blocklists/adblock/multi.txt
https://raw.githubusercontent.com/pixeltris/TwitchAdSolutions/master/hosts
https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/hosts.txt
```

Bloqueie manualmente os domínios conhecidos da Twitch que entregam anúncios:
```
gql.twitch.tv
usher.ttvnw.net
video-edge-*.fra05.abs.hls.ttvnw.net
```

💡 **AdGuard Home** é uma alternativa mais moderna com interface intuitiva e suporte a *DoH/DoT*. Ele permite importar as mesmas listas e sincronizar com o navegador.

### 📡 Benefícios do bloqueio via DNS
- Bloqueia anúncios em **smart TVs**, **celulares**, **consoles** e **apps**.  
- Funciona mesmo sem extensões.  
- Reduz o consumo de dados e melhora a privacidade.  
- Permite monitorar estatísticas de requisições e rastreadores bloqueados.

> ⚠️ Alguns anúncios são injetados no próprio player da Twitch. Para isso, mantenha o **uBlock Origin ativo** — a combinação Pi-hole + uBlock é imbatível.

---

## 🎯 Bônus: Outras Soluções Eficazes

### 🧠 Extensões e Scripts Complementares

- **[TTV LOL PRO](https://github.com/younesaassila/ttv-lol-pro)** — substitui o player da Twitch por um alternativo sem anúncios.  
- **[TwitchAdSolutions](https://github.com/pixeltris/TwitchAdSolutions)** — soluções híbridas para bloquear anúncios no navegador e via DNS.  
- **[AltPlayer](https://altplayer.carrd.co/)** — player web leve e sem ads com suporte a chat.

### 📱 Soluções Móveis

- **Android:** use o **SmartTwitchTV** ou **TTV Alternative**.  
- **iOS:** use navegadores com bloqueadores integrados, como **Brave** ou **Orion**.  

### 💡 Dica Avançada

Quer assistir direto no **VLC** sem interface da Twitch?  
Use o **Streamlink Twitch GUI**:

```bash
streamlink https://www.twitch.tv/canal melhor
```

---

## 🧼 Manutenção e Boas Práticas

- Atualize filtros e listas toda semana.  
- Faça backup das configurações do Pi-hole (`pihole -a -t`) ou exporte o JSON.  
- Teste sempre os domínios bloqueados com `nslookup` ou `dig`.  
- Evite extensões desconhecidas que prometem “bloquear tudo”.  

---

## 💬 Conclusão

Com o uso combinado de **uBlock Origin**, **Pi-hole/AdGuard** e **listas confiáveis**, você pode eliminar anúncios da Twitch com segurança e eficiência. Bloquear anúncios é mais do que conforto — é **recuperar o controle sobre o seu tempo e seus dados**.

> “**A melhor propaganda é o silêncio entre você e o algoritmo.**”  
> — *runawaydevil — [https://pablo.space](https://pablo.space)*

---

**Baseado em:** Guia original de u/Dreadwhole  
**Expansão técnica e curadoria:** runawaydevil — [https://pablo.space](https://pablo.space)




