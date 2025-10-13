---
title: "Como baixar arquivos de bots IRC/XDCC"
description: "Guia sobre como usar Fservers para baixar animes"
---

# Baixando arquivos de bots IRC/XDCC

Dentro da chamada **"pirâmide da pirataria"**, no mesmo nível dos trackers de torrent públicos, existem canais de IRC com bots que compartilham arquivos via XDCC, os chamados Fservers, bastante populares principalmente entre os fãs de animes. Neste tutorial, explicarei o básico de como baixar animes legendados através destes Fservers, com algumas referências ao final para quem desejar se aprofundar mais no uso do IRC.

## O que é o IRC?

O **Internet Relay Chat (IRC)** é um protocolo de chat pela internet criado em 1988, que ainda hoje é uma das principais formas de comunicação na comunidade de compartilhamento de arquivos. Além de permitir a criação de um servidor de chat completamente privado por qualquer pessoa, o IRC também possibilita o envio de arquivos por meio de uma extensão do protocolo chamada **XDCC** (_eXtended Direct Client-to-Client_).

## Como isso funciona?

Primeiramente, é necessário instalar um cliente IRC. Existem vários clientes disponíveis para diversos sistemas operacionais, incluindo [**HexChat**](https://hexchat.github.io/), [**Konversation**](https://konversation.kde.org/), [**mIRC**](https://www.mirc.com/) e [**irssi**](https://irssi.org/).

Após instalado e configurado, utiliza-se no cliente o comando `/SERVER <host>` para se conectar a um servidor, por exemplo: `/SERVER irc.[Rizon](captain/guia-completo-de-seguranca-em-redes-e-servidores-protecao-abrangente-para-a-era-digital.md).net`. Os servidores da [**Rizon**](https://rizon.net/) e [**[P2P-net](captain/guia-completo-de-seguranca-em-redes-e-servidores-protecao-abrangente-para-a-era-digital.md)**](https://p2p-network.net/) são especialmente populares na comunidade de compartilhamento de arquivos.

Uma vez conectado a um servidor, utiliza-se o comando `/JOIN #nome-do-canal` para entrar em um canal (similar a um grupo de WhatsApp/Telegram). No canal, além de outros usuários, haverá bots que compartilham arquivos em resposta a comandos especiais. Estes bots geralmente utilizam o software [**iroffer-dinoex**](https://github.com/dinoex/iroffer-dinoex) ou similares.

Mas como saber qual comando usar para receber um episódio específico de um anime, por exemplo? É aí que entra a chamada **Packlist**, um site na internet que contém a lista dos episódios e o comando que fará o bot enviar um episódio específico. Muitas packlists são criadas utilizando o software [**XDCCParser**](https://github.com/nitmir/XDCCParser-global).

### Packlists

Exemplos de packlists são:

- Animes/Português:
  - **AnimeNSK**: [https://packs.ansktracker.net/](https://packs.ansktracker.net/)
  - **Eternal Animes**: [https://packs.eternalanimes.org/](https://packs.eternalanimes.org/)
  - **Lolicons Anônimos/Avalon Fansub**: [https://packs.cgnat.net/](https://packs.cgnat.net/)
- Animes/Inglês:
  - **SubsPlease**: [https://subsplease.org/xdcc/](https://subsplease.org/xdcc/)
  - **nibl** [https://nibl.co.uk/](https://nibl.co.uk/)
  - **AniMK**: [https://xdcc.animk.info/](https://xdcc.animk.info/)
- General/Inglês:
  - **SunXDCC**: [https://sunxdcc.com/](https://sunxdcc.com/)
  - **XDCC.eu**: [https://www.xdcc.eu/](https://www.xdcc.eu/)

Frequentemente, a própria packlist já fornece as informações do servidor e do canal necessários para se conectar e comunicar com o bot. Com a packlist em mãos, o usuário consulta e envia o comando para baixar um lançamento específico, e o bot do canal responderá enviando o arquivo desejado.

## Na prática

Para um exemplo prático, faremos o download do 1º episódio do anime _New Game!_ no tracker brasileiro _Anime no Sekai_, que possui uma packlist e bot xdcc em funcionamento, utilizando o cliente HexChat.

1. Primeiramente, visitamos a tracklist na internet:

   **Packlist do Anime no Sekai (ANSK)**

   Observamos que na tracklist consta o servidor (Rizon - irc.rizon.net) e o canal /#AnimeNSK com o qual devemos nos conectar.

2. Abrimos então nosso cliente IRC e nos conectamos a este servidor e canal, conforme mostrado:

   **Lista de redes do HexChat**
   **Conexão completa no HexChat**

3. Voltamos à tracklist e procuramos o anime desejado, no caso, o episódio 1 de _New Game!_.

   **Pack do Anime New Game! Selecionado**

4. Copiamos o comando na coluna "comando" da packlist, neste caso, `msg ANSK|Sora xdcc send /#1257`.

   **Enviando um comando para o bot**

5. Será aberta uma janela perguntando onde deseja salvar o arquivo. Basta clicar em aceitar e o download começará.

   **HexChat recebendo arquivo**

## Notas

1. Algumas vezes, para baixar um arquivo de um bot XDCC, é necessário ter um nickname registrado no servidor IRC. O processo para registrar um nick varia um pouco de acordo com o servidor. Você pode obter informações sobre como fazer isso usando o comando `/msg NickServ help register`, uma vez conectado ao servidor.
2. Este processo pode variar um pouco dependendo do Fserv utilizado, consulte as instruções específicas dele. O que foi explicado aqui é o mais comum de ser encontrado.
3. As mesmas regras de segurança de outras comunidades de compartilhamento de arquivos se aplicam aqui - tenha muito cuidado com o que você baixa. Em geral, é seguro baixar vídeos e livros de Fservers, mas é extremamente recomendado que você **JAMAIS** execute software baixado destes servidores (muito provável conter vírus). Confira a [Megathread](/) para informações sobre outras fontes seguras de conteúdo.

## Referências

- [IRCHelp.org - An IRC Tutorial](https://www.irchelp.org/faq/irctutorial.html)
- [Reddit - Guide: The idiot proof guide to downloading ebooks off IRC. With Pictures and everything!](https://www.reddit.com/r/Piracy/comments/2oftbu/guide_the_idiot_proof_guide_to_downloading_ebooks/)
- [The Wiki.Moe - DDL/XDCC](https://thewiki.moe/sourcing/ddl/)
- [Wikibooks - Downloading Files from IRC/XDCC Bot Guide](https://en.wikibooks.org/wiki/Downloading_Files_from_IRC/XDCC_Bot_Guide)
- [Youtube - Guia de uso do IRC _(internet relay chat)_ com HexChat: chat e compartilhamento de arquivos online](https://youtu.be/ZA9NoLiIHCI)
- [Youtube - Tutorial-MIRC-ANSK](https://youtu.be/xherACT1j6I)

> Guia feito por Biomallard