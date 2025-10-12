# 🪶 ➜ As diferentes maneiras de consumir filmes piratas e por que nenhuma delas presta

O objetivo deste post é apresentar às pessoas menos experientes todas as formas de pirataria de mídia atualmente e explicar o lado técnico disso.

Para começar, é crucial entender que **hospedar vídeos na internet é muito caro**. Há uma razão pela qual até hoje não surgiram grandes concorrentes do YouTube. O fato é que vídeos, especialmente filmes em ultra HD, consomem muita internet e processamento, então é inviável que uma única pessoa crie um site tipo Netflix que seja 100% grátis e rápido.

## Sites de streaming gratuitos, estilo MegaFilmesHD

A primeira maneira de contornar esse problema é encher o site de anúncios até não poder mais, e oferecer vídeos em baixa qualidade ou que travam. Assim, o proprietário consegue manter o site funcionando com vários usuários acessando constantemente. Além dos inconvenientes dos anúncios e da baixa qualidade, esses sites têm um segundo problema: a qualquer momento, o governo pode derrubar o site, forçando os usuários a procurarem outra alternativa.

Atualmente, o principal site desse tipo é o famoso RedeCanais, conhecido pela sua vasta gama de conteúdo e por ainda estar ativo. De fato, essa é a principal maneira que eu uso até hoje para assistir a desenhos animados como Bob Esponja, sem ter o compromisso de precisar baixar o conteúdo antes.

> Sites podem ser encontrados em [🎦 ➜ Filmes e TV](../filmes-tv)

Nem preciso dizer que você provavelmente vai precisar de um bloqueador de anúncios como o uBlock Origin para assistir qualquer coisa lá.

## Downloads

Se acessar um site como o mencionado acima é um inconveniente (quando quero ver algo no celular, por exemplo, os sites são quase inutilizáveis), você vai querer baixar seu filme.

## Google Drive

Buscar Google Drives na internet é uma opção. Uma vantagem é que você nem precisa baixar o filme, pode assistir diretamente no navegador. O lado ruim é a enorme instabilidade disso, porque eles são frequentemente derrubados, já que o Google não quer hospedar filmes piratas para você. A verdade é que raramente você encontrará o que deseja em um drive.

> Para buscar drives, a melhor técnica hoje é entrar no Twitter e usar palavras-chave como "Google Drive", "filmes".

## Torrents

Se você tem espaço e tempo de sobra para baixar algo, então essa é sua opção. De fato, além do RedeCanais que mencionei anteriormente, essa é a única forma que eu consumo mídia pirata hoje. Os torrents resolvem quase todos os problemas que citei de uma maneira muito simples: não existe um único servidor que hospede os vídeos. Quando você baixa um arquivo via torrent, você o faz de todas as outras pessoas que baixaram antes de você, e após baixar, você também hospeda (processo conhecido como semear) para outros usuários futuros.

Sendo um pouco ideológico, essa é a verdadeira natureza da internet, e poderia resolver todos os nossos problemas. Porém, na prática, há dois grandes problemas: você precisa de espaço para armazenar sua série (que pode facilmente ultrapassar dezenas de gigabytes) e tempo para baixar tudo isso.

> Para encontrar torrents, esqueça todos os sites como [Comando.la](https://comando.la/), BLUDV, YTS: anos de experiência me ensinaram que a melhor forma de encontrar um torrent é simplesmente jogar o nome do filme/série + "torrent" na pesquisa do Google e clicar no primeiro link que não seja propaganda, e estar equipado com um bloqueador de anúncios para não clicar em anúncios por engano.

> Para animes, use o [Nyaa.si](https://nyaa.si/)

Antigamente tinha o RARBG, que era o paraíso, tinha tudo lá, mas ele acabou, então tem que pesquisar no Google mesmo, não tem jeito.

EDIT: esqueci de comentar sobre trackers privados. Já entrei em alguns como o TorrentLeech e o BRSociety. Eu lembro de sofrer muito para semear. No TorrentLeech, por exemplo, eu precisava de 240 horas (10 dias) semeando, porque dificilmente eu conseguia atingir a proporção de 1,0. Já o BRSociety só tinha cursos, nada muito interessante. Falam muito bem do Amigos Share Club, mas eu não estou disposto a doar 40 reais para conseguir um convite.

## Stremio

Não preciso nem dizer que ficar caçando link de torrent na internet é um grande incômodo. Inspirado nisso, surgiram aplicativos como o Popcorn Time, ou o Stremio (que é o único que realmente vale a pena atualmente), que basicamente catalogam todos os links de torrents de cada filme, e você consegue acessá-los como se fosse uma Netflix, e melhor: você não precisa esperar o fim do download, pode assistir como se fosse um site de streaming!

Parece perfeito. E poderia ser perfeito. Mas não é. É bem ruim, na verdade. Isso porque os catálogos de torrents deles são no mínimo limitados. Veja só minha experiência com o Stremio: baixei todos os add-ons necessários, estava tudo configurado. Fui assistir Fargo: não tinha dublado. Beleza, vou ver Ladybug: só tinha dublado na primeira temporada (em baixa qualidade), e em inglês não tinha o primeiro episódio. Isso sem falar que muitos dos torrents não são semeadores.

Para assistir filmes, em geral, os mais famosos, é excelente, recomendo fortemente. Mas para assistir desenho animado/série, vai ter que pegar um RedeCanais ou um torrent do Google mesmo. (Ladybug, inclusive, eu achei as quatro primeiras temporadas em um OneDrive aleatório).

Isso é muito frustrante para mim. Porque realmente poderia ser perfeito. Se houvesse uma mobilização da comunidade para criar torrents completos em português, especialmente de seriados, e deixar semeando eles (como faziam no RARBG), seria o fim do streaming pago. Mas ainda precisamos jogar no Google e pegar torrents de sites duvidosos.

> Baixe o Stremio no site oficial [Stremio](https://www.stremio.com)

> Baixe os addons (Torrentio e Brazuca): [https://www.reddit.com/r/StremioAddons/comments/yd02dp/stremio_addons_list_huge_update/](https://www.reddit.com/r/StremioAddons/comments/yd02dp/stremio_addons_list_huge_update/)

## Jellyfin, Jackett, Sonarr, Radarr, Kodi

Softwares que costumam aparecer no contexto de pirataria de filmes. Vou tentar explicar mais ou menos o fluxo de trabalho dessa brincadeira:

> O Jackett é uma API que busca automaticamente em dezenas de indexadores de torrents online. Ele pesquisa em vários sites como 1337x, e junta todos os resultados em um único lugar, que você pode usar diretamente ou alimentar

> Sonarr, Radarr basicamente ficam pesquisando por filmes/séries automaticamente para você, para você não ter que ficar pesquisando toda vez que sai um novo episódio da sua série ou algo assim. Eles podem (e normalmente são) alimentados pelos resultados do Jackett, e baixam automaticamente para você, criando seu catálogo de filmes. Também tem o Bazarr, Prowlarr e o Lidarr.

> Jellyfin é um servidor de streaming. É como se você estivesse hospedando seu próprio Netflix/RedeCanais. No contexto aqui, ele vai pegar os filmes que você baixou do Sonarr/Radarr. Daí você pode ver o catálogo de filmes que você baixou em qualquer lugar com internet.

> Kodi é uma interface bonita para ver seu catálogo de filmes. Caso você não queira deixar um servidor Jellyfin rodando, e só quer ver seus filmes em casa no seu home theater.

## IPTVs e pirataria paga

Como eu disse, toda pirataria tem problemas, então pague alguém que vai hospedar os vídeos para você não ter trabalho nenhum. É sua melhor opção caso esteja disposto a pagar algum dinheiro. Sinceramente, exceto caso você seja muito pobre ou uma criança que não pode pedir para os pais pagarem, essa é a melhor opção. Tem tudo nessas IPTVs: filmes, séries, animes, desenhos animados, e até o futebolzinho. E você pode até assistir na TV, baixar um aplicativo e ver no celular, e no PC. É perfeito, só que custa dinheiro.

E no fim das contas o problema é esse: ninguém faz trabalho de graça.

---

Guia original: https://www.reddit.com/r/pirataria/comments/1e0yd4z/todas_as_maneiras_que_se_consome_filmes_piratas_e/

Autor do guia: https://www.reddit.com/user/Murilouco/

---

Modificações por https://github.com/orchestralblend / [orchestralblend@systemli.org](mailto:orchestralblend@systemli.org)