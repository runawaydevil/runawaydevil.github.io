# 🛡️ Guia Completo de Privacidade e Segurança Digital

Este documento consolidado reúne informações essenciais sobre privacidade e segurança digital, combinando recomendações, ferramentas e recursos para proteger sua presença online. Baseado nas melhores práticas e fontes confiáveis, este guia é uma referência abrangente para usuários que buscam aumentar sua segurança e privacidade na internet.

:::warning ⚠️ Avisos de Segurança
- ✔️ **Todos os links** foram analisados e aprovados por contribuidores voluntários. No entanto, **sempre prossiga com cautela**.
- ⚠️ **Atenção:** Links confiáveis podem, ocasionalmente, se tornar perigosos. Navegue com cuidado.
- 🛡️ **Nosso compromisso:** Garantir sua segurança é nossa prioridade, mas é indispensável **navegar com cuidado**.
:::

:::info ℹ️ Dicas Úteis
- 🚨 **Problemas de acesso?** Se algum site não carregar, tente mudar o seu DNS. Confira [opções de DNS aqui](https://www.privacyguides.org/en/dns/) e [um guia completo aqui](guias/dns.md).
- 🌟 **Recomendações da Comunidade:** Links marcados com 🌟 são altamente recomendados pelos usuários.
:::

## Índice

1. [Panorama da Segurança](#panorama-da-segurança)
2. [Navegadores Focados em Privacidade](#navegadores-focados-em-privacidade)
3. [Gerenciadores de Senhas](#gerenciadores-de-senhas)
4. [VPNs Recomendadas](#vpns-recomendadas)
5. [Bloqueadores de Anúncios e Rastreadores](#bloqueadores-de-anúncios-e-rastreadores)
6. [Provedores de E-mail Seguros](#provedores-de-e-mail-seguros)
7. [Sistemas Operacionais Focados em Privacidade](#sistemas-operacionais-focados-em-privacidade)
8. [Criptomoedas e Privacidade](#criptomoedas-e-privacidade)
9. [Criptografia de Disco](#criptografia-de-disco)
10. [Ferramentas de Segurança e Privacidade](#ferramentas-de-segurança-e-privacidade)
11. [Veja Também](#veja-também)

## Panorama da Segurança

A privacidade na internet é crucial para equilibrar transparência e anonimato. É essencial garantir que as pessoas possam se expressar anonimamente quando necessário, sem medo de represálias. Este equilíbrio protege a liberdade de expressão e a diversidade de vozes.

> "O ciclo da vida: consumir recursos para produzir objetos que logo se tornarão lixo. Dados são coletados para criar desejos, lucro e poder, e para gerar medo, autocensura e resignação. Viver com medo é realmente uma experiência marcante, não é? Isso é o que significa ser um escravo." - [autistici.org](https://www.autistici.org/who/telltale)

### A Visita Policial

Em hipótese alguma permita a entrada de policiais em sua residência sem mandado judicial. Caso insistam, chame seu advogado imediatamente. A inviolabilidade do lar é garantida pela Constituição, exceto em casos de flagrante delito, desastre ou para prestar socorro.

> Art. 5º, XI - a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial;

### Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade)

> Art. 22. § 1º I - coage alguém, mediante violência ou grave ameaça, a franquear-lhe o acesso a imóvel ou suas dependências;

> Art. 22. § 1º III - cumpre mandado de busca e apreensão domiciliar após as 21h (vinte e uma horas) ou antes das 5h (cinco horas).

## Navegadores Focados em Privacidade

### [Librewolf](https://librewolf.net/)

- Baseado no Firefox, sem telemetria
- Anti-Fingerprinting forte
- Ublock Origin pré-instalado

### [IronFox](https://gitlab.com/ironfox-oss/IronFox)

- Navegador Android, código aberto
- Telemetria desativada
- Hardening avançado contra Fingerprint

### [Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium)

- Baseado em Chromium, sem serviços do Google
- Requer configuração manual para privacidade robusta

### [Cromite](https://github.com/uazo/cromite)

- Fork do Chromium com bloqueio de anúncios
- Disponível para Android, Windows e Linux

### [Mullvad Browser](https://mullvad.net/en/browser)

- Versão do Tor Browser sem roteamento onion
- Anti-Fingerprinting, modo de navegação privativa

## Gerenciadores de Senhas

### [Bitwarden](https://bitwarden.com/)

- Código aberto, sincronização entre dispositivos
- Opção de criar instância própria com [Vaultwarden](https://github.com/dani-garcia/vaultwarden)

### [KeePassXC](https://keepassxc.org/)

- Gerenciador local, altamente personalizável
- Suporta autenticação de dois fatores

## VPNs Recomendadas

### [Mullvad VPN](https://mullvad.net/)

- Barata, rápida, suporta Monero

### [IVPN](https://www.ivpn.net/)

- Alternativa confiável à Mullvad

### [Private Internet Access](https://www.privateinternetaccess.com/)

- Suporta port-forwarding, ideal para P2P

### [ProtonVPN](https://protonvpn.com)

- Suporta port-forwarding, ideal para P2P

### [AirVPN](https://airvpn.org/buy/)

- Suporta Monero, última opção recomendada

## Bloqueadores de Anúncios e Rastreadores

### 🌟 [uBlock Origin](https://ublockorigin.com/)

- Bloqueia anúncios e rastreadores
- Adicione a lista [oisd.nl](https://oisd.nl) para maior eficácia

### [Pi-hole](https://pi-hole.net/)

- Bloqueio de anúncios em toda a rede
- Requer configuração avançada

### [AdGuard Home](https://adguard.com/en/adguard-home/overview.html)

- Bloqueio de anúncios DNS auto-hospedado

## Provedores de E-mail Seguros

### [Mailbox.org](https://mailbox.org/)

- Baseado na Alemanha, oferece criptografia e ferramentas de colaboração

:::tip
Para atividades que exigem mais sigilo, considere usar serviços de e-mail hospedados na rede Tor, como [Mail2Tor](http://mail2torjgmxgexntbrmhvgluavhj7ouul5yar6ylbvjkxwqf6ixkwyd.onion/).
:::

## Sistemas Operacionais Focados em Privacidade

### [GrapheneOS](https://grapheneos.org/)

- Sistema operacional seguro para dispositivos Google Pixel

### [LineageOS](https://lineageos.org/)

- Suporta dispositivos antigos, especialmente Motorola

## Criptomoedas e Privacidade

### [Bisq](https://bisq.network)

- DEX de código aberto para troca de moedas fiduciárias por criptomoedas via Tor

:::warning
Evite corretoras de cripto que exigem KYC, como Binance e Kraken.
:::

## Criptografia de Disco

### [VeraCrypt](https://www.veracrypt.fr/en/Home.html)

- Suporte para criptografia de discos rígidos e SSDs

## Ferramentas de Segurança e Privacidade

### [Malwarebytes](https://www.malwarebytes.com/)

- Ferramenta antivírus eficaz

### [Tor Browser](https://www.torproject.org/)

- Navegador focado em privacidade para navegação anônima

## Privacidade Avançada

### O Básico para Privacidade

- Privacidade no Firefox: Betterfox ou Arkenfox
- uBlock Origin: Javascript sempre desativado em sites novos
- Navegador baseado em Chromium: Cromite
- Não cruzar nomes em logins: sempre use nomes diferentes em todas as redes sociais, de preferência palavras aleatórias
- Colocar uma senha na BIOS do computador e trocar a senha do wi-fi/roteador
- Criar senhas com espaços e caracteres próprios da língua portuguesa: como `ç`, `~`, `'`
- **Jamais** salve senhas pelo navegador, você pode ser vítima de infostealers. Utilize um gerenciador como Bitwarden ou KeePassXC
- Sempre que possível, forneça um email temporário em sites que não sejam importantes: use de um provedor como emailnator.com ou guerrilla mail
- Fotos, vídeos e outros arquivos: remover metadados (informações adicionais que revelam sua localização) com o exiftool ou online com o metadata2go
- Verifique a procedência de URLs suspeitas: Confira o tempo de registro, selo SSL e certifique-se de que o CNPJ/CPF fornecido na página bate com o que é repassado por sites como [registro.br](https://registro.br/tecnologia/ferramentas/), siteconfiavel.com.br ou [invertexto.com](https://www.invertexto.com/whois)

### O Intermediário para Privacidade

- Configurar o navegador para excluir todos os dados sempre que você for fechá-lo (histórico, cookies, senhas, etc.): isso diminui a possibilidade de ter as contas invadidas
- VPN: IVPN com Multihop ou Mullvad
- Email: Autohospedado com mailcow/mail-in-a-box ou mailbox.org + Thunderbird ou cock.li + Whonix/TailsOS
- Encriptação de Email: GnuPG, GPG4WIN no Windows ou OpenKeychain no Android
- Armazenamento: HD ou SSD com VeraCrypt
- Criptografia: Cryptomator e VeraCrypt (AES-128-GCM, XChaCha20-Poly1305)
- Nuvem: systemli.org, NextCloud (chaves SSH, backup e armazenamento KeePassXC/Vaultwarden)
- Navegador: Baseado no Firefox + nuMatrix + CSS Exfil Protection + Containers + arkenfox.js
- Chat: Lemmy, SimpleX, Mastodon, XMPP e systemli.org
- XMPP: Psi+ no desktop e Conversations no android
- Android: GrapheneOS
- Desktop: Linux (Live Boot para um sigilo maior ou Dual Boot para uso casual) com LUKS
- Anti-DDoS: Anubis
- Provedor de domínio: Sarek Oy, Porkbun
- Git: Forgejo
- Meet: systemli.org, Jitsi
- Criptomoeda: Monero 
- Hospedagem: Servers.guru
- Pesquisa: 4get
- Roteador: Qualquer um com OpenWRT (WPA3), recomendo Raspberry Pi 4/5 + Pi-hole com lista do oisd.nl

### O Avançado para Privacidade

- Onde comprar monero: [Bisq](https://github.com/bisq-network/bisq), [RetoSwap](https://retoswap.com/#download), [Cake Wallet](https://github.com/cake-tech/cake_wallet/), [Monerujo](https://github.com/m2049r/xmrwallet/), [Infinity Exchanger](https://exchanger.infinity.taxi/), [Trocador](https://trocador.app/pt/) ou qualquer lugar que não precise de identidade (KYC)
- É possível comprar outra moeda e fazer exchange para Monero, esse tipo de troca deixa rastros insignificantes
- Melhor caminho: **p2p** ➜ **BRL** ➜ **BTC ou LTC** ➜ **XMR** ➜ [**Cold Wallet**](https://www.getmonero.org/pt-br/downloads/index.html) (sempre receber numa wallet disposable e transferir para a sua)
- Cobrar e receber por serviços: pessoalmente ou através de plataformas de escrow como o [FairTrade](https://kycnot.me/service/fairtrade) por exemplo
- **O IDEAL É RODAR MONERO [LOCALMENTE](https://sethforprivacy.com/guides/run-a-monero-node/) NO SEU PRÓPRIO NODE PARA NÃO CORRER O RISCO DE SER MONITORADO**
- Mas caso você esteja usando um dispositivo móvel, uma abordagem interessante é filtrar e usar nodes conectados à rede TOR (via [ORBOT](https://github.com/guardianproject/orbot-android)) deste site aqui: https://www.ditatompel.com/monero/remote-node

:::warning O projeto pirataria se compromete em recomendar apenas o que na nossa visão é seguro e confiável.
:::

## Veja Também

- **[📱 Dispositivos Móveis](/vault/dispositivos-moveis)** - Ferramentas e recursos para Android e iOS
- **[🪶 Guia de Privacidade para Paranoicos](guias/quero-privacidade)** - Guia detalhado de privacidade avançada

Este guia foi elaborado para fornecer uma visão abrangente e prática sobre como proteger sua privacidade e segurança digital. Utilize as ferramentas e práticas recomendadas para garantir uma navegação segura e anônima na internet.