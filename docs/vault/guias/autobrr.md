---
sidebar_position: 4
---
# Aumente Seu Ratio com o Autobrr

## 💡 1. O Que é o Autobrr

O **Autobrr** é uma ferramenta moderna projetada para quem leva a automação de downloads a sério. Ele se conecta diretamente aos seus trackers através de **RSS**, **IRC** e outros métodos, permitindo que você baixe torrents automaticamente assim que são lançados.

### ⚡ Por que usar o Autobrr?

- 🌀 **Entre cedo no swarm** e maximize o upload desde o início.
- 🎯 **Defina filtros inteligentes** para baixar apenas o conteúdo que você realmente quer.
- 📈 **Melhore seu ratio** sem precisar acessar o tracker manualmente.

::: tip **Pré-requisito**
Para este tutorial, você precisará ter **WSL** e **Docker Desktop** instalados no Windows.  
Se estiver em **Linux**, pode pular direto para a etapa **Deploy do Autobrr**.
:::

---

## ⚙️ 2. Instalando o Autobrr

Acesse o repositório oficial:

🔗 [https://github.com/autobrr/autobrr/releases](https://github.com/autobrr/autobrr/releases)

Procure o pacote com o nome **windows_x86_64.zip**  
(clique em *Show all assets* se não aparecer de imediato).

1. Extraia o conteúdo em um diretório, por exemplo:
   
   ```bash
   C:\autobrr
   ```
2. Execute o arquivo `autobrr.exe`

Mais detalhes em: [https://autobrr.com/installation/windows](https://autobrr.com/installation/windows)

Após concluir, siga para **Configurando o Autobrr**.

---

## 🧩 3. Instalando o WSL

Pressione `Win + X` e selecione **PowerShell (Admin)**.

![autobrr1](/img/autobrr1.png)

Digite o comando abaixo:

```bash
wsl --install
```

Reinicie o computador ao final do processo.

### 🐋 Instalando o Docker Desktop

Baixe e instale através de: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

### 🐧 Instalando o Ubuntu 20.04

Abra a Microsoft Store e procure por **Ubuntu 20.04**.  
Instale, execute e aguarde alguns minutos.  
Depois, crie um **usuário** e uma **senha** quando solicitado.

### 🔗 Integrando Ubuntu com Docker

![autobrr2](/img/autobrr2.png)

Siga as instruções conforme a imagem.  
Se o Ubuntu estiver aberto, feche e reabra.

---

## ⚙️ 4. Deploy do Autobrr

Abra o **Ubuntu 20.04** e execute:

```bash
mkdir -p autobrr/config
```

Teste o Docker:

```bash
docker
```

![autobrr3](/img/autobrr3.png)

Se a saída for semelhante à imagem acima, prossiga.

Agora execute o comando abaixo:

```bash
docker run -d \
  --name autobrr \
  -v /home/SEU_USUARIO/autobrr/config:/config \
  -p 7474:7474 \
  -e TZ=America/Sao_Paulo \
  --restart unless-stopped \
  ghcr.io/autobrr/autobrr:latest
```

> **Substitua** `SEU_USUARIO` pelo nome do usuário criado no Ubuntu.

Verifique se o container está ativo no Docker Desktop:

![autobrr4](/img/autobrr4.png)

---

## 🔧 5. Configurando o Autobrr

Acesse o painel pelo navegador:

👉 [http://localhost:7474](http://localhost:7474)

Você verá a tela inicial:

![autobrr5](/img/autobrr5.png)

Crie seu usuário e senha para começar.

### 🔗 Adicionando o Cliente Torrent

![autobrr6](/img/autobrr6.png)

Selecione o cliente desejado (no exemplo, **qBittorrent**):

![autobrr7](/img/autobrr7.png)

![autobrr8-1](/img/autobrr8-1.png)

1. Informe o **IP do seu computador** (não use *localhost*).
2. Clique em **Test** para validar.
3. Clique em **Create**.

---

## 🌍 6. Adicionando Trackers

Cada tracker possui configurações específicas, mas o Autobrr suporta múltiplas formas:

- RSS Feeds  
- IRC  
- Modelos pré-configurados para trackers conhecidos

> ⚙️ Recomendamos sempre o uso de **IRC**, pois o delay é menor.

### Exemplo com RSS

Obtenha o link RSS do seu tracker e vá em **Indexers**:

![autobrr8](/img/autobrr8.png)

Ative o feed e ajuste o tempo de atualização:

![autobrr9](/img/autobrr9.png)

![autobrr10](/img/autobrr10.png)

1. Ative o feed.  
2. Defina o tempo de atualização (sugerido: **5 minutos**).  
3. Teste e salve.

---

## 🎚️ 7. Filtros do Autobrr

Os **filtros** são o coração do Autobrr — é aqui que toda a automação acontece.

![autobrr11](/img/autobrr11.png)

Crie um filtro e selecione o feed:

![autobrr12](/img/autobrr12.png)

![autobrr13](/img/autobrr13.png)

Defina o tamanho mínimo e máximo dos arquivos desejados.

### 🎬 Aba “Movies & TV”

![autobrr14](/img/autobrr14.png)

Exemplo: baixar filmes entre **2015 e 2024**, com resolução **1080p** e formato **.mkv**.

### ⚙️ Aba “Advanced”

![autobrr15](/img/autobrr15.png)

Utilize filtros personalizados, valores separados por vírgula ou expressões regex.

> 💡 Os filtros variam conforme o tracker. Se algo não estiver funcionando, verifique os **logs** do Autobrr.

### 🧰 Aba “Actions”

::: info **Aba de Ações**
É aqui que você define o que fazer com os resultados — enviar para o cliente torrent, testar filtros, etc.
:::

![autobrr16](/img/autobrr16.png)

Lembre-se de **ativar o filtro**:

![autobrr17](/img/autobrr17.png)

Você pode criar filtros específicos para cada tracker.

Ao detectar um novo release que corresponda aos filtros, o Autobrr enviará o torrent automaticamente para o seu cliente.

![autobrr18](/img/autobrr18.png)

1. Mude o **Action Type** para o cliente torrent.  
2. Escolha o cliente configurado.  
3. (Opcional) Defina o diretório de download.

---

> “**A melhor maneira de prever o futuro é criá-lo.**”  
> — *Alan Kay, pioneiro da computação pessoal*




