# Guia de Auto-hospedagem e Ativação de Software

## Introdução

Este documento oferece um guia completo para configurar e executar sua própria instância do FMHY localmente e também instruções para baixar e ativar o Windows e o Office usando métodos gratuitos.

### Auto-hospedagem FMHY

:::warning
É essencial que você diferencie sua instância do site oficial (fmhy.net) para evitar confusão. As etapas para isso são fornecidas abaixo.
:::

#### Docker (Experimental)

Para executar uma instância local, você precisará instalar [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/).

Após a instalação, execute os comandos:

```bash
git clone https://github.com/fmhy/edit.git
cd edit
sudo docker compose up --build
```

O processo pode levar alguns minutos para construir a imagem e iniciar o contêiner, funcionando na porta 4173.

#### Nix Flake

Você pode usar [nix](https://nixos.org/) para configurar um ambiente de desenvolvimento. Temos um [flake](https://nixos.wiki/wiki/Flakes) que configura `nodejs` e `pnpm`.

1. Faça um fork do repositório e clone para sua máquina local com `git clone https://github.com/fmhy/edit.git`.
2. Execute `nix flake update` para atualizar o arquivo de bloqueio do flake.
3. Execute `nix develop` para entrar no ambiente de desenvolvimento.
4. Faça suas alterações.
5. Saia do ambiente de desenvolvimento executando `exit`.

#### Manualmente

Você precisará instalar:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) - Use a última versão LTS disponível.
- [pnpm 9.12.2+](https://pnpm.io/installation)

##### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/fmhy/edit.git
cd edit
```

##### Passo 2: Instalar Dependências

Instale as dependências do projeto usando pnpm:

```bash
pnpm install
```

##### Passo 3: Modo Desenvolvimento

Para executar o projeto em modo de desenvolvimento:

```bash
# Iniciar o site de documentação em modo dev
pnpm docs:dev

# Iniciar a API em modo dev (se necessário)
pnpm api:dev
```

O servidor de desenvolvimento iniciará em `http://localhost:5173` por padrão.

##### Passo 4: Construção para Produção

Você precisará atualizar:
- `meta`: Constante em `docs/.vitepress/constants.ts`
  - `name`: Nome da sua instância
  - `hostname`: Seu domínio
  - `description`: Descrição da sua instância
  - `tags`: Tags Opengraph
  - `build`: Opções de construção (pode ser configurado com [Variáveis de Ambiente](#environment-variables))

Para construir o projeto para produção:

```bash
# Construir o site de documentação
pnpm docs:build

# Construir a API (se necessário) usando o preset Node.js
NITRO_PRESET=node pnpm api:build
```

##### Passo 5: Visualizar Construção de Produção

Para visualizar a construção de produção localmente:

```bash
# Visualizar o site de documentação
pnpm docs:preview

# Visualizar a API (se necessário)
pnpm api:preview
```

##### Passo 6: Implantação

Consulte o [guia de implantação do VitePress](https://vitepress.dev/guide/deploy) para mais informações.

#### Variáveis de Ambiente

Algumas variáveis que você pode alterar se desejar desativá-las:

- `FMHY_BUILD_NSFW` - Entrada NSFW na barra lateral (experimental)
- `FMHY_BUILD_API` - Componente API para sistema de feedback.

#### Solução de Problemas

1. Se você encontrar problemas com a versão do Node.js, certifique-se de estar usando Node.js 21+
2. Para problemas relacionados ao pnpm, certifique-se de estar usando pnpm 9+
3. Se encontrar problemas de construção, tente limpar o cache:
    ```bash
    # Linux
    rm -rf docs/.vitepress/cache

    # PowerShell
    rm -r -fo docs/.vitepress/cache
    ```

## Ativação do Windows e Office

### 1. Download do Windows ou Office

1. Acesse o site do [Massgrave](https://massgrave.dev/genuine-installation-media.html).
2. Localize a seção referente a **Windows e Office**.
3. Para baixar o Office, selecione a opção **"Office C2R Installers (Retail)"** na versão PT-BR. Para baixar o Windows escolha **"Windows 11 Consumer 24H2"** na build recomendada e no método MSDL.

### 2. Preparando a Ativação

#### Acessando o Windows PowerShell

1. Clique com o botão direito do mouse sobre o menu Iniciar do Windows.
2. Selecione a opção **"Windows PowerShell"** para abrir o terminal.

#### Executando o Script de Ativação

1. Com o PowerShell aberto, copie e cole o comando e pressione **Enter**: `irm https://massgrave.dev/get | iex`

2. O script exibirá uma lista de opções:

- **HWID:** Para ativar o Windows 10 ou 11.
- **Ohook:** Para ativar o Office.

3. Escolha a opção desejada digitando o número correspondente.

### 3. Conclusão da Ativação

- Aguarde enquanto o script processa a ativação.
- Quando a mensagem **"... Is permanently activated..."** aparecer, isso indica que a ativação foi concluída com sucesso.

## Considerações Finais

Este método de ativação se destaca pela sua abordagem inovadora e segura. Ao contrário de outros métodos que alteram arquivos críticos do sistema, ele não modifica nenhuma parte do Windows, garantindo a integridade e estabilidade do seu ambiente. Utilizando uma falha específica, o método permite obter uma chave autêntica diretamente da Microsoft, proporcionando uma ativação legítima e permanente. Por conta desse processo não invasivo e eficaz, é considerado atualmente o método de ativação mais seguro e confiável.

Este guia foi elaborado com base no post de [Ok_Table7457](https://www.reddit.com/r/Piracy/comments/1814gmp/guide_how_to_pirate_microsoft_office_properly/).