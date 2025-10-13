# Wallpapers e Instalação de Plugins para [qBitTorrent](vault/other/wallpapers.md)

## Wallpapers

Eleve-se ao próximo nível com nossos belos wallpapers. Todos esses wallpapers foram criados por [taskylizard](https://github.com/taskylizard).

### Arc
Um design de arco arredondado com um desvanecimento agradável.
- **Mobile**: [Arc Mobile](https://cdn.jsdelivr.net/gh/fmhy/design-system/branding/arc_mobile.png)
- **Desktop**: [Arc Desktop](https://cdn.jsdelivr.net/gh/fmhy/design-system/branding/arc_desktop.png)

### Rays
Um fundo gradiente com um arco suave e arredondado.
- **Mobile**: [Rays Mobile](https://cdn.jsdelivr.net/gh/fmhy/design-system/branding/rays_mobile.png)
- **Desktop**: [Rays Desktop](https://cdn.jsdelivr.net/gh/fmhy/design-system/branding/rays_desktop.png)

### Tinted Rays
Um fundo gradiente com um arco suave e arredondado, tingido de branco no canto inferior.
- **Mobile**: [Tinted Rays Mobile](https://cdn.jsdelivr.net/gh/fmhy/design-system/branding/tinted_rays_mobile.png)
- **Desktop**: [Tinted Rays Desktop](https://cdn.jsdelivr.net/gh/fmhy/design-system/branding/tinted_rays_desktop.png)

## Passos para Instalar Plugins de Pesquisa para qBitTorrent Versão 3.1.10 ou Mais Recente

1. Note que os plugins/scripts de Python são, por sua natureza, considerados não seguros. Portanto, qualquer uso dos plugins não oficiais é por sua conta e risco. É uma boa prática auditar/dar uma olhada nos plugins/scripts antes de instalar.

2. Acesse: [Unofficial search plugins](https://github.com/qbittorrent/search-plugins/wiki/Unofficial-search-plugins)
   - Na coluna `Download`, clique no link apropriado de `Download`.
   - Salve o arquivo `.py` em um local temporário do seu armazenamento.

3. Usando o qBitTorrent:
   - Na janela principal, clique em `Visualizar` -> `Motor de Busca` para mostrar a guia de pesquisa.
   - Vá para a guia `Busca`.
   - Clique no botão `Plugins de busca`, localizado no canto inferior direito.
   - A janela `Plugins de busca` será aberta, mostrando uma lista de plug-ins de mecanismos de pesquisa instalados.
     - Clique no botão `Instalar um novo plugin`.
     - A janela `Fonte do plugin` irá abrir.
       - Clique no botão `Arquivo local`.
       - Navegue até o arquivo `.py` que você baixou na etapa anterior. Selecione o arquivo `.py`.
       - Se for bem-sucedido, o nome do plugin aparecerá na lista dos plugins de busca.
       - Se não for bem-sucedido, a seguinte mensagem será exibida: `Não pôde instalar o plugin do motor de busca ">NOME<". O plugin não é suportado.`
       - Usando [esta página](https://github.com/qbittorrent/search-plugins/wiki/Unofficial-search-plugins) na coluna `Comment`, verifique se o seu sistema atende aos requisitos mínimos para cada plugin de pesquisa. Talvez o seu sistema atual não tenha os requisitos.
       - Clique no botão `Fechar`.

4. Você pode excluir o arquivo `.py` do seu local temporário no armazenamento local, pois ele não é mais necessário.
5. Opcionalmente, você pode clicar no botão `Link da web` e inserir a URL do plugin.

Guia sugerido por [u/Dehast](https://www.reddit.com/u/Dehast) e baseado em [qbittorrent search plugins install wiki](https://github.com/qbittorrent/search-plugins/wiki/Install-search-plugins).

## 🔗 Veja também

- **[Wallpapers e Instalação de Plugins para qBitTorrent](/vault/other/wallpapers)** - Ambos os guias lidam com personalização e melhorias para o qBitTorrent
