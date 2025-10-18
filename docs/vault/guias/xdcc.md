---
sidebar_position: 13
title: "Como baixar arquivos de bots IRC/XDCC"
description: "Guia sobre como usar Fservers para baixar animes"
---

# 💾 Como Baixar Arquivos de Bots IRC/XDCC

Dentro da chamada **“pirâmide da pirataria”**, no mesmo nível dos trackers públicos, existem os **canais de IRC** que utilizam **bots XDCC** — também conhecidos como *Fservers*. Esses bots compartilham arquivos diretamente entre usuários e continuam sendo muito usados, especialmente por fãs de animes e material mais raro. Este guia explica, de forma prática, como baixar seus primeiros arquivos por IRC.

---

## 💬 O que é o IRC?

O **Internet Relay Chat (IRC)** é um dos protocolos de comunicação mais antigos da internet, criado em **1988**. Apesar da idade, ele ainda é amplamente utilizado por comunidades de compartilhamento, pois permite chats privados e o envio direto de arquivos via protocolo **XDCC** (*eXtended Direct Client-to-Client*).

> 🔎 Em resumo: o IRC é um chat em tempo real, e o XDCC é o sistema que permite trocar arquivos dentro desse chat.

---

## ⚙️ Como Funciona

Antes de mais nada, é preciso instalar um **cliente IRC** — o programa que conecta você a servidores e canais. Algumas opções populares:

- [**HexChat**](https://hexchat.github.io/) — gratuito, simples e disponível para Windows, Linux e macOS.
- [**mIRC**](https://www.mirc.com/) — clássico e muito usado por veteranos.
- [**Konversation**](https://konversation.kde.org/) — alternativa para usuários KDE/Linux.
- [**irssi**](https://irssi.org/) — opção para linha de comando.

### 🧭 Conectando-se a um Servidor

Use o comando:
```bash
/SERVER irc.rizon.net
```

Os servidores mais usados pela comunidade de compartilhamento são:
- [**Rizon**](https://rizon.net/) — o mais popular para animes e fansubs.
- [**P2P-net**](https://p2p-network.net/) — focado em conteúdo multimídia geral.

Depois de conectado, entre em um canal com:
```bash
/JOIN #nome-do-canal
```

No canal, estarão outros usuários e os bots que compartilham arquivos. Esses bots geralmente rodam o software [**iroffer-dinoex**](https://github.com/dinoex/iroffer-dinoex), que responde automaticamente a comandos de download.

---

## 📦 O que é uma Packlist

As **packlists** são sites que listam os arquivos disponíveis nos bots — indicando servidor, canal e o comando que você deve digitar para baixar cada arquivo.

Normalmente, você verá algo como:
```bash
/msg NomeDoBot xdcc send #1234
```

> 💡 Ao enviar esse comando, o bot inicia uma transferência direta com você.

Essas listas são geralmente geradas com o software [**XDCCParser**](https://github.com/nitmir/XDCCParser-global), que atualiza automaticamente as informações dos bots.

---

## 🌐 Exemplos de Packlists

### 🇧🇷 Animes em Português
- **AnimeNSK** → [https://packs.ansktracker.net/](https://packs.ansktracker.net/)
- **Eternal Animes** → [https://packs.eternalanimes.org/](https://packs.eternalanimes.org/)
- **Lolicons Anônimos / Avalon Fansub** → [https://packs.cgnat.net/](https://packs.cgnat.net/)

### 🌍 Animes em Inglês
- **SubsPlease** → [https://subsplease.org/xdcc/](https://subsplease.org/xdcc/)
- **nibl** → [https://nibl.co.uk/](https://nibl.co.uk/)
- **AniMK** → [https://xdcc.animk.info/](https://xdcc.animk.info/)

### 💿 Conteúdo Geral (Inglês)
- **SunXDCC** → [https://sunxdcc.com/](https://sunxdcc.com/)
- **XDCC.eu** → [https://www.xdcc.eu/](https://www.xdcc.eu/)

> ⚠️ Sempre verifique o canal e servidor indicados na packlist antes de enviar comandos. Cada bot opera em uma rede diferente.

---

## 🧪 Exemplo Prático: Baixando um Anime

Vamos baixar o **episódio 1 de _New Game!_** do fansub **Anime no Sekai (ANSK)** usando o **HexChat**.

1. Acesse a [packlist do AnimeNSK](https://packs.ansktracker.net/).
   ![Packlist do Anime no Sekai](/img/guia-xdcc-1.png)

2. Conecte-se ao servidor **Rizon (irc.rizon.net)** e entre no canal **#AnimeNSK**.
   ![Conexão no HexChat](/img/guia-xdcc-2.png)
   ![Canal conectado](/img/guia-xdcc-3.png)

3. Procure o episódio desejado na packlist.
   ![Anime selecionado](/img/guia-xdcc-4.png)

4. Copie o comando listado, por exemplo:
   ```bash
   /msg ANSK|Sora xdcc send #1257
   ```
   ![Comando enviado](/img/guia-xdcc-5.png)

5. O cliente mostrará uma janela pedindo confirmação para salvar o arquivo — clique em **Aceitar** e o download começará.
   ![Arquivo sendo recebido](/img/guia-xdcc-6.png)

---

## ⚠️ Notas Importantes

1. Alguns servidores exigem **nick registrado**. Use:
   ```bash
   /msg NickServ help register
   ```
   para ver como registrar seu apelido.
2. O processo pode variar dependendo do cliente ou servidor, então consulte instruções específicas.
3. Nunca execute arquivos executáveis (.exe, .bat, etc.) baixados de bots. Prefira vídeos, músicas e PDFs.

> 🧠 **Dica:** o IRC é antigo, mas continua ativo — especialmente para conteúdo raro, como fansubs antigos, mangás escaneados e materiais de colecionador.

---

## 📚 Referências

- [IRCHelp.org - An IRC Tutorial](https://www.irchelp.org/faq/irctutorial.html)
- [Reddit - The idiot proof guide to downloading ebooks off IRC](https://www.reddit.com/r/Piracy/comments/2oftbu/guide_the_idiot_proof_guide_to_downloading_ebooks/)
- [The Wiki.Moe - DDL/XDCC](https://thewiki.moe/sourcing/ddl/)
- [Wikibooks - Downloading Files from IRC/XDCC Bot Guide](https://en.wikibooks.org/wiki/Downloading_Files_from_IRC/XDCC_Bot_Guide)
- [YouTube - Guia de uso do IRC com HexChat](https://youtu.be/ZA9NoLiIHCI)
- [YouTube - Tutorial MIRC ANSK](https://youtu.be/xherACT1j6I)

---

> “**A verdadeira internet ainda vive em cantos que não aparecem no Google.**”  
> — *Anônimo da Rizon*




