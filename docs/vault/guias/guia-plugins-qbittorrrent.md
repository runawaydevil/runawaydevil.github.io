# Passos para instalar [plugins de pesquisa](vault/other/wallpapers.md) para qBitTorrent versão 3.1.10 ou mais recente.

1. Observe que os plugins/scripts de [Python](vault/file-tools.md) são, por sua natureza, considerados não seguros. Portanto, qualquer uso de plugins não oficiais é por sua conta e risco. É recomendável auditar/verificar os plugins/scripts antes de instalá-los.

2. Acesse: https://github.com/qbittorrent/search-plugins/wiki/Unofficial-search-plugins

   1. Na coluna `Download`, clique no link correspondente de `Download`.
   2. Salve o arquivo `.py` em um local temporário do seu armazenamento.

3. Usando o qBitTorrent:
   Na janela principal, clique em `Visualizar` -> `Motor de Busca` para exibir a aba de pesquisa.
   **screenshot**

   1. Vá para a aba `Busca`.
   2. Clique no botão `Plugins de busca`, localizado no canto inferior direito.
   3. A janela `Plugins de busca` será aberta, mostrando uma lista de plugins de mecanismos de busca instalados.

      1. Clique no botão `Instalar um novo plugin`.
         **screenshot**
      2. A janela `Fonte do plugin` será aberta.

         1. Clique no botão `Arquivo local`.
         2. Navegue até o arquivo `.py` que você baixou anteriormente. Selecione o arquivo `.py`.
         3. Se a instalação for bem-sucedida, o nome do plugin aparecerá na lista de plugins de busca.
         4. Se não for bem-sucedida, a seguinte mensagem será exibida:
            `Não pôde instalar o plugin do motor de busca ">NOME<". O plugin não é suportado.`
         5. Usando [esta página](https://github.com/qbittorrent/search-plugins/wiki/Unofficial-search-plugins) na coluna `Comment`, verifique se o seu sistema atende aos requisitos mínimos para cada plugin de pesquisa. Pode ser que seu sistema atual não atenda a esses requisitos.
         6. Clique no botão `Fechar`.

4. Você pode excluir o arquivo `.py` do local temporário no seu armazenamento, pois ele não é mais necessário.
5. Opcionalmente, você pode clicar no botão `Link da web` e inserir a URL do plugin.

Pronto. Você instalou com sucesso um novo plugin de pesquisa para qBittorrent.

Guia sugerido por [u/Dehast](https://www.reddit.com/u/Dehast).

Guia baseado em [qbittorrent search plugins install wiki](https://github.com/qbittorrent/search-plugins/wiki/Install-search-plugins)

## 🔗 Veja também

- **[🌐 Sites e Ferramentas para Torrents](/vault/torrenting)** - Os plugins de pesquisa são usados para melhorar a experiência de torrenting no qBitTorrent.
