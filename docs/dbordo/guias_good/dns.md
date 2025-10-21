---
sidebar_position: 1
title: "Como Configurar o DNS no Windows e Android"
description: "Guia prático para alterar DNS em Windows e Android"
---

# Como Configurar o DNS no Windows e Android

![DNS](/img/dns1.png)

Ajustar as configurações de DNS pode trazer benefícios como:

- Melhora na velocidade de navegação
- Aumento da privacidade
- Contorno de bloqueios de sites (ex.: Rede Canais, Bludv)
- Bloqueio de anúncios em aplicativos Android

Este guia mostra, passo a passo, como configurar DNS no **Windows** e em dispositivos **Android**.

---

## 1 - Principais provedores de DNS

Abaixo uma seleção de provedores com boa presença no Brasil e opções úteis para quem busca desempenho e/ou bloqueio de anúncios:

### Cloudflare DNS

- IPv4: `1.1.1.1` / `1.0.0.1`
- Hostname DoT: `security.cloudflare-dns.com`
- Boa performance; não bloqueia anúncios por padrão.

### AdGuard DNS

- IPv4: `94.140.14.14` / `94.140.15.15`
- Hostname DoT: `dns.adguard-dns.com`
- Focado em bloquear anúncios e rastreadores.

### NextDNS

- IPv4/IPv6: configurado via painel em https://nextdns.io
- Semelhante ao AdGuard, com listas personalizáveis (atenção a efeitos em serviços como YouTube).

### Google Public DNS

- IPv4: `8.8.8.8` / `8.8.4.4`
- IPv6: `2001:4860:4860::8888` / `2001:4860:4860::8844`
- Alta disponibilidade e desempenho; não bloqueia anúncios.

:::info Nota
Este guia foca em **Cloudflare** e **AdGuard** por serem simples de configurar e estáveis para a maioria dos usuários.
:::

---

## 2 - Configurando DNS no Windows 10 (aplicável ao sistema todo)

> Alterar o DNS no Windows afeta todo o sistema — navegadores e apps usarão os servidores configurados.

1. Abra **Exibir Conexões de Rede** (pressione `Win + R`, digite `ncpa.cpl` ou pesquise no menu Iniciar).
2. Clique na interface usada (Wi‑Fi ou Ethernet) → botão direito → **Propriedades**.
3. Selecione **Protocolo IP Versão 4 (TCP/IPv4)** → **Propriedades** → marque **Usar os seguintes endereços de servidor DNS** e insira os IPs IPv4 (primário e secundário).

```text
Exemplo Cloudflare IPv4:
  Servidor DNS preferido: 1.1.1.1
  Servidor DNS alternativo: 1.0.0.1
```

4. (Opcional) Para IPv6, volte à lista de propriedades → **Protocolo IP Versão 6 (TCP/IPv6)** → **Propriedades** e insira os endereços IPv6:

```text
Cloudflare IPv6:
  2606:4700:4700::1111
  2606:4700:4700::1001

AdGuard IPv6:
  2a10:50c0::ad1:ff
  2a10:50c0::ad2:ff
```

5. Clique em **OK** para salvar.

![Configurar DNS Windows](/img/dns2.png)

**Resumo rápido:** Exibir Conexões de Rede → selecione adaptador → Propriedades → TCP/IPv4 → inserir DNS → (TCP/IPv6) → inserir IPv6 → OK.

---

## 3 - Configurando DNS no Android (DNS over TLS — Hostname)

O Android oferece a opção **DNS Privado** (DoT) que funciona para todo o sistema móvel.

### Método (HyperOS / Xiaomi)

1. Configurações → **Mais opções de conectividade** → **DNS Privado**.
2. Em **Nome do host do provedor de DNS privado**, insira:
   - Cloudflare: `security.cloudflare-dns.com`
   - AdGuard: `dns.adguard-dns.com`
3. Salve.

![DNS Android HyperOS](/img/dns3.png)

### Android Puro (Pixel, OnePlus, etc.)

1. Configurações → **Rede e Internet** → **DNS Privado**.
2. Selecione **Nome do host do provedor** e digite o hostname DoT desejado.
3. Salve.

![DNS Android Puro](/img/dns4.png)

---

## 4 - Configuração manual por rede Wi‑Fi (Android)

Este método altera apenas a rede Wi‑Fi atual e usa entradas IPv4:

1. Configurações → **Wi‑Fi** → selecione a rede conectada → **Editar**.
2. Em **Configuração de IP**, escolha **Estático**.
3. Preencha os campos **DNS 1** e **DNS 2** com os IPs desejados.

![Configurar DNS WiFi](/img/dns5.png)

:::info Nota
A opção **DNS Privado (DoT)** altera a configuração para todo o sistema (Wi‑Fi + rede móvel). A configuração manual na rede Wi‑Fi altera apenas aquela conexão específica.
:::

---

## 5 - Observações e dicas finais

- Para bloquear anúncios em páginas web, use também extensões como **uBlock Origin** no navegador.
- Se usar NextDNS com listas agressivas, alguns serviços (YouTube, etc.) podem apresentar comportamento inesperado — mantenha domínios essenciais em whitelist.
- Teste sua nova configuração em sites como `https://1.1.1.1/help` ou `https://www.dnsleaktest.com`.

---

> “A Web não conecta apenas máquinas — ela conecta pessoas.”  
> — *Tim Berners‑Lee*




