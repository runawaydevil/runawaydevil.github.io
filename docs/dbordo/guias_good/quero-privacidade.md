---
sidebar_position: 2
title: "Guia de Privacidade para Paranoicos"
description: "Um guia completo de práticas, ferramentas e recomendações para usuários que buscam o máximo nível de privacidade digital."
---

# Guia de Privacidade para Paranoicos

:::info
Esta página ainda é um esboço. Baseado nas recomendações de [orchestralblend](https://github.com/orchestralblend) / [orchestralblend@systemli.org](mailto:orchestralblend@systemli.org)
:::

> “**Privacidade não é esconder, é proteger.**”  
> — *runawaydevil — [https://pablo.space](https://pablo.space)*

---

## 🔐 O Básico para Privacidade

Essas práticas são simples, mas eficazes para proteger sua vida digital no dia a dia:

- **Navegador:** Firefox com Betterfox ou Arkenfox.  
- **Bloqueio de scripts:** uBlock Origin com JavaScript desativado por padrão em novos sites.  
- **Alternativa Chromium:** Cromite (foco em privacidade, sem telemetria).  
- **Identidades diferentes:** use nomes distintos e aleatórios para cada rede social.  
- **Segurança física:** senha na BIOS e no roteador (acesse pelo IP local ou opção “Manage Router” no celular).  
- **Senhas:** prefira *passphrases* com espaços e caracteres especiais (ex: `ç`, `~`, `'`).  
- **Gerenciador de senhas:** Bitwarden ou KeePassXC — *jamais* salve senhas no navegador.  
- **Emails temporários:** para cadastros triviais, use [Emailnator](https://emailnator.com) ou [Guerrilla Mail](https://www.guerrillamail.com).  
- **Remoção de metadados:** apague dados de localização de fotos e vídeos com `exiftool` ou [metadata2go](https://www.metadata2go.com/).  
- **Verificação de sites suspeitos:** cheque o domínio e CNPJ com [registro.br](https://registro.br/tecnologia/ferramentas/), [siteconfiavel.com.br](https://siteconfiavel.com.br) e [invertexto.com](https://www.invertexto.com/whois).

---

## 🧭 O Intermediário para Privacidade

Recomendações para quem já domina o básico e quer elevar o nível de proteção:

- **Navegador:** configure para apagar cookies, histórico e dados ao fechar.  
- **VPNs:** IVPN (com Multihop) ou Mullvad.  
- **Email seguro:** Autohospedado (mailcow/mail-in-a-box) ou mailbox.org + Thunderbird / Claws Mail / cock.li + Whonix ou TailsOS.  
- **Criptografia de email:** GnuPG (Linux), GPG4WIN (Windows) ou OpenKeychain (Android).  
- **Armazenamento:** HD ou SSD criptografado com VeraCrypt.  
- **Nuvem:** systemli.org, NextCloud com chaves SSH e backups KeePassXC/Vaultwarden.  
- **Criptografia de arquivos:** Cryptomator e VeraCrypt (AES-128-GCM, XChaCha20-Poly1305).  
- **Chats seguros:** Lemmy, SimpleX, Mastodon, XMPP e systemli.org.  
- **Clientes XMPP:** Psi+ (desktop) e Conversations (Android).  
- **Sistema operacional:** GrapheneOS no Android; Linux (LUKS + Live Boot ou Dual Boot) no desktop.  
- **Proteção DDoS:** Anubis.  
- **Domínios:** Sarek Oy, Porkbun.  
- **Controle de código:** Forgejo.  
- **Reuniões seguras:** systemli.org e Jitsi.  
- **Criptomoedas:** Monero.  
- **Hospedagem:** Servers.guru.  
- **Busca:** 4get.  
- **Roteador:** OpenWRT com WPA3 (preferência: Raspberry Pi 4/5 + Pi-hole + lista oisd.nl).

---

## 🧠 O Avançado para Privacidade

Para os que desejam o máximo de anonimato e independência digital:

- **Compra de Monero:** [Bisq](https://github.com/bisq-network/bisq), [RetoSwap](https://retoswap.com/#download), [Cake Wallet](https://github.com/cake-tech/cake_wallet/), [Monerujo](https://github.com/m2049r/xmrwallet/), [Infinity Exchanger](https://exchanger.infinity.taxi/), [Trocador](https://trocador.app/pt/).  
- **Trocas anônimas:** BTC/LTC ➜ XMR ➜ [Cold Wallet](https://www.getmonero.org/pt-br/downloads/index.html).  
  Sempre receba em uma **wallet descartável** antes de mover para a sua definitiva.  
- **Pagamentos e serviços:** prefira o método **pessoalmente** ou use *escrow services* como [FairTrade](https://kycnot.me/service/fairtrade).  
- **Rodando um nó Monero:** execute o [nó local](https://sethforprivacy.com/guides/run-a-monero-node/) para garantir anonimato total.  
  Em dispositivos móveis, use [ORBOT](https://github.com/guardianproject/orbot-android) e filtre *nodes* TOR através de [ditatompel.com](https://www.ditatompel.com/monero/remote-node). [[1]](https://pirataria.link//docs/megathread/guias/quero-privacidade#creditos)

:::warning
O projeto Pirataria recomenda apenas softwares e práticas considerados **seguros e confiáveis** dentro da comunidade.
:::

---

### 📚 Créditos

- [1] [Dread (endereço onion)](https://dreadytofatroptsdj6io7l3xptbet6onoyno2yv7jicoxknyazubrad.onion/d/Monero/wiki?id=0d4cc7df)
- [OpSec Guide](https://raw.githubusercontent.com/whos-zycher/opsec-guide/refs/heads/main/guide.md)

---

**Autor:** runawaydevil — [https://pablo.space](https://pablo.space)




