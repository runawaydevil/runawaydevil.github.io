---
sidebar_position: 5
title: "Instalando Plugins de Pesquisa no qBittorrent"
description: "Aprenda a instalar e gerenciar plugins de busca no qBittorrent de forma segura e eficiente."
---

# ⚙️ Como Instalar Plugins de Pesquisa no qBittorrent

Os **plugins de pesquisa** do qBittorrent permitem buscar torrents diretamente dentro do programa, sem precisar abrir o navegador. A seguir, você aprenderá a instalá-los corretamente e com segurança.

> ⚠️ **Atenção:** Plugins são scripts em Python e, por natureza, podem representar riscos de segurança. Sempre baixe de fontes confiáveis e, se possível, revise o código antes de instalar.

---

## 🔍 1. Baixando os Plugins

1. Acesse o repositório oficial de plugins não oficiais no GitHub:
   👉 [https://github.com/qbittorrent/search-plugins/wiki/Unofficial-search-plugins](https://github.com/qbittorrent/search-plugins/wiki/Unofficial-search-plugins)

2. Na coluna **Download**, clique no link correspondente ao plugin desejado.
3. Salve o arquivo `.py` em uma pasta temporária.

> 💡 **Dica:** mantenha um diretório dedicado a scripts e extensões, facilitando futuras atualizações e auditorias.

---

## 🧭 2. Habilitando o Módulo de Busca no qBittorrent

1. Abra o **qBittorrent**.
2. Vá em **Exibir → Motor de busca** para ativar a aba de pesquisa.

![screenshot](/img/guia-plugins-qbittorrent-1.png)

---

## 🧩 3. Instalando o Plugin Manualmente

1. Na aba **Busca**, clique no botão **Plugins de busca** (canto inferior direito).
2. Na janela que abrir, clique em **Instalar um novo plugin**.

![screenshot](/img/guia-plugins-qbittorrent-2.png)

3. Escolha **Arquivo local** e localize o arquivo `.py` que você baixou.
4. Se a instalação for bem-sucedida, o plugin aparecerá na lista.

> 🚫 Caso veja o erro: `Não pôde instalar o plugin do motor de busca ">NOME<". O plugin não é suportado.`, verifique na [wiki oficial](https://github.com/qbittorrent/search-plugins/wiki/Unofficial-search-plugins) se o plugin é compatível com sua versão e sistema.

5. Clique em **Fechar** para concluir.

---

## 🌐 4. Instalação via URL (Alternativa)

Em vez de baixar manualmente o arquivo `.py`, é possível adicionar o plugin direto via link:

1. No mesmo menu **Plugins de busca**, clique em **Link da web**.
2. Cole a URL do plugin hospedado no GitHub ou outro repositório confiável.
3. Confirme e aguarde a instalação.

> 💡 Ideal para quem quer instalar vários plugins rapidamente, sem precisar salvar os arquivos localmente.

---

## 🧼 5. Limpeza e Organização

Após instalar, você pode excluir os arquivos `.py` do seu computador — o qBittorrent já armazena internamente os scripts necessários.

> 🧠 **Sugestão:** mantenha apenas uma lista de URLs atualizadas para reinstalar os plugins facilmente em outro dispositivo.

---

## 🧰 6. Plugins Recomendados (2025)

- **The Pirate Bay** – Base ampla e confiável de torrents gerais.  
- **1337x** – Ótimo para conteúdo recente e popular.  
- **RARBG Mirror** – Alternativa para releases de qualidade.  
- **AnimeTosho / Nyaa** – Especializados em anime e conteúdo oriental.  
- **EZTV / YTS** – Voltados para séries e filmes em alta qualidade.  

> ⚙️ Atualize seus plugins periodicamente: alguns sites mudam estrutura e podem quebrar os scripts antigos.

---

## ✨ Conclusão

Agora você possui uma central de busca completa dentro do qBittorrent. Com ela, é possível pesquisar, filtrar e iniciar downloads diretamente do programa — de forma prática e organizada.

> “**O poder real está em quem sabe encontrar.**”  
> — *Alan Kay*




