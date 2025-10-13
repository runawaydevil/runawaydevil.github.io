# 📑 ➜ Aumente seu [ratio](vault/guias/ratio-melhor.md) com Autobrr

## 1. Introdução

O autobrr é um aplicativo que se conecta ao seu [tracker](vault/trackers.md) via RSS, IRC e outros tipos de conexões para baixar torrents assim que eles são disponibilizados nos trackers.

**Os benefícios de utilizar o autobrr incluem:**

- Participar do swarm inicial, que é a melhor oportunidade para enviar mais dados a outros leechers
- Filtrar automaticamente o que você deseja baixar
- Melhorar seu ratio sem a necessidade de acessar o tracker para baixar o arquivo .torrent e adicioná-lo ao seu cliente.

:::info Neste tutorial, será necessário instalar o [WSL](captain/guia-completo-de-ferramentas-e-sistemas-para-seguranca-avancada-construindo-uma-fortaleza-digital.md) e o [Docker](captain/guia-completo-de-ferramentas-e-sistemas-para-seguranca-avancada-construindo-uma-fortaleza-digital.md) no seu computador. Caso você não seja um usuário Windows, pode pular para a etapa **DEPLOY AUTOBRR**.
:::

## Instalação

Acesse a página de lançamentos no GitHub:

https://github.com/autobrr/autobrr/releases

E baixe o pacote nomeado "windows_x86_64.zip". Clique em "show all assets" se não estiver visível.

Descompacte e coloque tudo em "C:/autobrr" ou em outro diretório de sua escolha.

Execute o autobrr.exe.

Para mais informações, acesse: https://autobrr.com/installation/windows

Após a instalação, prossiga para a seção **CONFIGURANDO AUTOBRR**.

## Instalação do WSL

Pressione "Win+X" e selecione "powershell admi".

**autobrr1**

Execute o comando:

`wsl --install`

Reinicie seu computador após a conclusão da instalação.

**INSTALANDO DOCKER DESKTOP**
Acesse: https://www.docker.com/products/docker-desktop/

Baixe e instale o executável.

**BAIXANDO UBUNTU 20.04**
Acesse a loja de aplicativos do Windows e procure por "UBUNTU 20.04".

Instale e execute. Uma janela será exibida pedindo que você aguarde alguns minutos. Em seguida, defina o usuário e senha desejados.

**INTEGRANDO UBUNTU COM DOCKER**

**autobrr2**

Siga as instruções conforme a imagem acima. Se a janela do Ubuntu 20.04 estiver aberta, feche e abra novamente. Você encontrará no menu iniciar, basta pesquisar.

### INSTALANDO AUTOBRR

Com o UBUNTU 20.04 aberto, no terminal digite:

`mkdir -p autobrr/config`
Teste se o Docker está funcionando com o comando:

`docker`

**autobrr3**

A saída deve ser como mostrado na imagem acima.

Confirmado que o Docker está funcionando, copie e cole o comando a seguir:

### DEPLOY AUTOBRR

```batch
  docker run -d /
  --name autobrr /

  -v /home/SEU_USUARIO/autobrr/config:/config /

  -p 7474:7474 /

  -e TZ=America/Sao_Paulo /

  --restart unless-stopped /

  ghcr.io/autobrr/autobrr:latest
```

**SUBSTITUA "SEU_USUARIO" PELO USUÁRIO QUE VOCÊ CRIOU.**

Aguarde e abra o Docker Desktop.

**autobrr4**

Se tudo estiver correto, aparecerá como na imagem acima.

## 2. Configurando o Autobrr

Acesse: http://localhost:7474 (após iniciar o serviço)

Você verá a tela a seguir:

**autobrr5**

Crie seu usuário e senha.

**ADICIONE SEU CLIENTE TORRENT**

**autobrr6**

Selecione o cliente que deseja configurar, no exemplo usaremos o qBittorrent.

**autobrr7**

**autobrr8-1**

1. Insira o IP do seu computador, não utilize localhost.
2. Clique em testar para validar a conexão, se estiver tudo ok, clique em criar.

## 3. Adicionando Trackers

Não seremos específicos neste ponto, pois cada tracker tem suas particularidades de configuração. Mostraremos as possibilidades e os campos a serem preenchidos. Em caso de dificuldades, consulte o fórum do seu tracker ou peça suporte em nosso grupo.

Considerações:

- Você pode adicionar um tracker usando RSS / IRC / modelo pré-configurado para trackers famosos.
- Recomendamos sempre o uso de IRC para trackers que suportam, pois o atraso é menor.

**1. Exemplo usando RSS**
Busque no seu tracker como obter o RSS. Não citaremos trackers específicos aqui neste tutorial.

Após conseguir o RSS do seu tracker, vá em "INDEXERS" e siga o fluxo abaixo:

**autobrr8**

**ATIVE O FEED E AJUSTE O TEMPO DE ATUALIZAÇÃO**

**autobrr9**

Siga a orientação conforme a imagem Feeds > Editar

**autobrr10**

1. Ative o feed
2. Defina o tempo de atualização (verifique as regras do seu tracker para não usar um tempo muito curto). Sugerimos 5 minutos.
3. Teste a conexão e salve.

**ATIVANDO FILTROS**
Uma das principais funções do autobrr são os filtros. Aqui é onde a "mágica" acontece. Mostraremos um exemplo de configuração, mas isso não significa que funcionará no seu tracker. Caso não funcione, será necessário ajustar para conseguir identificar. Use os logs para verificar o que está acontecendo.

**autobrr11**

- Após clicar, defina um nome e salve.
  Selecione seu feed:

**autobrr12**

**autobrr13**

Nos campos acima, você pode definir qual o tamanho mínimo/máximo que deseja baixar.

**ABA "MOVIES & TV"**

**autobrr14**

No exemplo acima, está definido para baixar filmes entre os anos 2015 e 2024, com resolução 1080p e o tipo de arquivo sendo .mkv.

**ABA "ADVANCED"**
Esta aba possui vários filtros que você pode utilizar valores usando "," ou regex.
Abaixo está um exemplo para baixar filmes de todos os tipos **(aplicável somente em determinado tracker)**

**autobrr15**

Reforçando... os filtros variam de acordo com cada tracker adicionado. Caso não esteja baixando algo que você definiu ou não esteja identificando corretamente, analise os logs.

**ABA "ACTIONS"**
:::info Na aba de ações, é onde são executados os comandos para enviar o arquivo para seu cliente torrent, testar para validar seu filtro, etc.
:::
Comece testando, conforme definido na imagem abaixo, e salve:

**autobrr16**

Lembre-se de ativar o filtro:

**autobrr17**

:::info Você pode definir filtros para cada tracker adicionado.
:::

Deixe o autobrr ativo e aguarde novas atualizações do RSS. Se tudo estiver correto, você verá os lançamentos filtrados na aba **RELEASES**.

Se estiver tudo OK, volte na aba de filtros para editar a ação de teste e modificar para enviar para seu cliente torrent.

**autobrr18**

1. Mude o tipo de ação para seu cliente torrent.
2. Selecione o cliente torrent que você configurou no início.
3. (opcional) Especifique onde deseja salvar. Se deixar em branco, será baixado na pasta padrão do seu cliente. Caso especifique, lembre-se de colocar o caminho completo. Ex: C:/User/Desktop/Filmes

Pronto, seu autobrr está configurado e todo novo torrent que corresponder ao seu filtro será adicionado ao seu cliente torrent.

Para mais informações, acesse a documentação oficial: https://autobrr.com

[**Artigo original do CopyrightBR**](https://copyrightbr.com/CFPpqO-yjNL)

## 🔗 Veja também

- **[🌊 Trackers](/vault/trackers)** - Autobrr se conecta a trackers para baixar torrents.
