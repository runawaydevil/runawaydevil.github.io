# Guia Completo de Privacidade Online: Ferramentas e Serviços para Proteger seus Dados

:::info ℹ️ Informações do Artigo
**Categoria:** Cultura Hacker
**Arquivo Original:** 1.md
**Tags:** hacker, privacidade, online, segurança, criptografia
**Resumo:** Explore uma variedade de ferramentas e serviços para fortalecer sua privacidade online, desde [navegadores Anti-Rastreamento](captain/guia-completo-de-privacidade-online-ferramentas-e-servicos-para-proteger-seus-dados.md) até [Mensagens Cifradas](captain/guia-completo-de-privacidade-online-ferramentas-e-servicos-para-proteger-seus-dados.md) e [Proteção contra Fingerprinting](captain/guia-completo-de-privacidade-online-ferramentas-e-servicos-para-proteger-seus-dados.md).
:::

## 📋 Índice

- [Tutorial Rápido de Privacidade Online com Links e Explicações](#tutorial-rapido-de-privacidade-online-com-links-e-explicacoes)
  - [Navegadores Anti-Rastreamento](#navegadores-anti-rastreamento)
    - [Brave](#brave)
    - [Tor Browser](#tor-browser)
  - [Extensões de Privacidade](#extensoes-de-privacidade)
    - [uBlock Origin (Chrome/Firefox)](#ublock-origin-chrome-firefox)
    - [Privacy Badger](#privacy-badger)
    - [Decentraleyes](#decentraleyes)
  - [[VPNs e Redes Anônimas](captain/guia-completo-de-seguranca-em-redes-e-servidores-protecao-abrangente-para-a-era-digital.md)](#vpns-e-redes-anonimas)
    - [Mullvad VPN](#mullvad-vpn)
    - [ProtonVPN](#protonvpn)
  - [DNS Seguro (DoH)](#dns-seguro-doh)
    - [Cloudflare DNS](#cloudflare-dns)
    - [Firefox DoH](#firefox-doh)
  - [[E-mail Privativo / Criptografado](captain/guia-completo-de-privacidade-online-ferramentas-e-servicos-para-proteger-seus-dados.md)](#email-privativo-criptografado)
    - [Proton Mail](#proton-mail)
    - [Tutanota](#tutanota)
  - [Mensagens Cifradas](#mensagens-cifradas)
    - [Signal](#signal)
    - [Threema](#threema)
  - [Hashing e Anonimização](#hashing-e-anonimizacao)
    - [bcrypt (Node.js)](#bcrypt-node-js)
    - [Argon2 (Python)](#argon2-python)
  - [Contas Descartáveis / E-mails Temporários](#contas-descartaveis-emails-temporarios)
    - [10 Minute Mail](#10-minute-mail)
    - [Guerrilla Mail](#guerrilla-mail)
  - [Proteção contra Fingerprinting](#protecao-contra-fingerprinting)
    - [Chameleon (Firefox)](#chameleon-firefox)
    - [Teste](#teste)
  - [Remoção de Dados / Opt-Out](#remocao-de-dados-opt-out)

---

## 📄 Conteúdo

# Tutorial Rápido de Privacidade Online com Links e Explicações

---

:::tip **Dicas Rápidas de Privacidade Online** 🌐

Adote essas ferramentas e serviços para fortalecer sua privacidade na web de forma clara e objetiva.

---

### 1. Navegadores Anti-Rastreamento

- **Brave**: [Download Brave](https://brave.com)
  - Instale e, em “Configurações → Privacidade e segurança”, selecione bloqueio **Estrito** de anúncios e trackers.
- **Tor Browser**: [Download Tor Browser](https://www.torproject.org)
  - Baixe, abra e clique em **Conectar** para navegar anonimamente via rede Tor.

---

### 2. Extensões de Privacidade

- **uBlock Origin** (Chrome/Firefox): [Download uBlock Origin](https://github.com/gorhill/ublock)
  - Instale, abra o painel e ative EasyList e EasyPrivacy para filtrar anúncios e trackers.
- **Privacy Badger**: [Download Privacy Badger](https://privacybadger.org)
  - Adicione ao navegador; ele bloqueia trackers automaticamente conforme você navega.
- **Decentraleyes**: [Download Decentraleyes](https://decentraleyes.org)
  - Instale; serve bibliotecas localmente para evitar carregamento de CDNs rastreadores.

---

### 3. VPNs e Redes Anônimas

- **Mullvad VPN**: [Acesse Mullvad VPN](https://mullvad.net)
  - Crie conta anônima, baixe o app e conecte-se via WireGuard para maior velocidade e sem logs.
- **ProtonVPN**: [Acesse ProtonVPN](https://proton.me/vpn)
  - Versão gratuita segura, instale e escolha “Free” para túnel criptografado.

---

### 4. DNS Seguro (DoH)

- **Cloudflare DNS**: [Acesse Cloudflare DNS](https://1.1.1.1)
  - Instale o app 1.1.1.1 para ativar DNS over HTTPS no seu dispositivo.
- **Firefox DoH**:
  - Abra **Configurações → Privacidade e segurança → DNS sobre HTTPS** e ative “Cloudflare”.

---

### 5. E-mail Privativo / Criptografado

- **Proton Mail**: [Acesse Proton Mail](https://proton.me/mail)
  - Cadastre-se, use cliente web ou app e ative PGP automático em **Configurações → Chaves PGP**.
- **Tutanota**: [Acesse Tutanota](https://tutanota.com)
  - Crie conta gratuita, ative 2FA em **Configurações → Segurança**.

---

### 6. Mensagens Cifradas

- **Signal**: [Acesse Signal](https://signal.org)
  - Instale no celular ou desktop, registre com número e envie mensagens E2EE.
- **Threema**: [Acesse Threema](https://threema.ch)
  - Compre e instale; gera ID sem telefone e oferece chats autodestrutivos.

---

### 7. Hashing e Anonimização

- **bcrypt** (Node.js): [Acesse bcrypt](https://www.npmjs.com/package/bcrypt)
  - `npm install bcrypt` e use `bcrypt.hash()`/`bcrypt.compare()` para senhas seguras.
- **Argon2** (Python): [Acesse Argon2](https://pypi.org/project/argon2-cffi)
  - `pip install argon2-cffi` e aplique hashing robusto com salt.

---

### 8. Contas Descartáveis / E-mails Temporários

- **10 Minute Mail**: [Acesse 10 Minute Mail](https://10minutemail.com)
  - E-mail válido por 10 minutos para cadastros rápidos.
- **Guerrilla Mail**: [Acesse Guerrilla Mail](https://www.guerrillamail.com)
  - E-mail descartável com prazo ajustável.

---

### 9. Proteção contra Fingerprinting

- **Chameleon** (Firefox): [Acesse Chameleon](https://addons.mozilla.org/firefox/addon/chameleon-ext/)
  - Instale e configure para rotação de fingerprints a cada visita.
- **Teste**: [Verifique sua impressão de navegador](https://amiunique.org) para verificar sua “impressão” de navegador.

---

### 10. Remoção de Dados / Opt-Out

- **DeleteMe**: [Acesse DeleteMe](https://joindeleteme.com)
  - Serviço pago que remove seus registros de corretores de dados.
- **Opt-out manual**:
  - WhitePages, Spokeo – acesse cada site e procure “opt-out” no rodapé.

---

### 11. Monitoramento de Identidade e Dark Web

- **Have I Been Pwned**: [Acesse Have I Been Pwned](https://haveibeenpwned.com)
  - Insira seu e-mail e receba alertas de vazamentos.
- **NordVPN Identity Protection**: [Acesse NordVPN Identity Protection](https://nordvpn.com/identity-protection)
  - Monitoramento contínuo de credenciais expostas.

---

### 12. Gestão de Metadados

- **ExifTool**: [Acesse ExifTool](https://exiftool.org)
  - `exiftool -all= arquivo.jpg` remove todos os metadados de imagens.
- **MAT2** (Linux/Python): [Acesse MAT2](https://0xacab.org/jvoisin/mat2)
  - `mat2 --inplace documento.pdf` limpa metadados de PDFs.

---

### 13. Compartilhamento Seguro de Arquivos

- **OnionShare**: [Acesse OnionShare](https://onionshare.org)
  - Instale, selecione arquivo e clique “Start Sharing” para gerar link .onion E2EE.
- **7-Zip**: [Acesse 7-Zip](https://www.7-zip.org)
  - Ao compactar, marque “Definir senha” e escolha AES-256 para criptografar o .7z.

---

### 14. Plataformas Descentralizadas

- **Mastodon**: [Acesse Mastodon](https://joinmastodon.org/servers)
  - Escolha e registre-se em uma instância; explore **Configurações → Privacidade**.
- **IPFS Desktop**: [Acesse IPFS Desktop](https://ipfs.io)
  - Instale para armazenar e compartilhar arquivos de forma distribuída.

---

### 15. Segurança em Redes Sociais

- **Facebook/Instagram/Twitter**:
  - Vá em **Configurações → Privacidade**, limite público de posts, remova apps conectados e ative 2FA.

---

### 16. Navegação “Segura” e “Privada”

- Use janela **Anônima/InPrivate** no navegador.
- Combine com uBlock Origin e VPN ativa para evitar rastreadores e ocultar IP.

---

Adotando esses tutoriais rápidos, você configura cada camada de privacidade de forma clara e objetiva. 🛡️

---

---

:::tip 💡 Dica
Este artigo foi organizado e formatado automaticamente a partir do arquivo 1.md.
:::
