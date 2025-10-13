# Um Guia Simples Para Melhorar Seu Ratio

> Um bom [tracker](vault/other/selfhosting.md) exige que você faça o upload na mesma proporção do que baixou. Este guia explica vários métodos para manter o controle dessa tarefa às vezes complicada.

#

> Entre cedo em um torrent

Quando um torrent tem mais seeders do que leechers, pode ser difícil alcançar uma boa velocidade de upload. Ao examinar sua lista de trackers recentemente carregados, tente encontrar um torrent que tenha muitos leechers iniciais (ou que possa se tornar popular), comece a baixar e você provavelmente começará a fazer upload imediatamente. Este método é geralmente mais eficaz com uma conexão de internet rápida ou uma [Seedbox](vault/other/selfhosting.md), pois com uma conexão mais lenta você pode não conseguir fazer um upload significativo antes de haver muitos seeders. Programas gerenciadores de mídia ajudam nesse processo de adicionar um torrent. O [autobrr](https://autobrr.com) é um programa especializado para isso, utilizando os canais de anúncio dos trackers para adicionar torrents assim que são lançados.

#

> [encaminhamento de porta](captain/guia-completo-de-seguranca-em-redes-e-servidores-protecao-abrangente-para-a-era-digital.md)

O encaminhamento de porta é essencial para permitir que outros usuários se conectem a você para fazer upload. Ao encaminhar portas, você facilita o acesso aos dados que baixou e se conecta aos seus pares. O encaminhamento de porta é um processo simples, mas varia de acordo com as configurações de seus computadores e roteadores. As portas recomendadas variam de 49152 a 65534 para evitar conflitos de programa, e lembre-se de alterar a configuração dos clientes de torrent para a porta encaminhada.

#

> [Cross Seeding](captain/guia-completo-de-seguranca-em-redes-e-servidores-protecao-abrangente-para-a-era-digital.md)

O Cross Seeding envolve a propagação de dados já baixados. Ao baixar um arquivo idêntico de outra fonte (ou seja, um tracker onde você já tem um bom ratio) ou obtê-lo localmente, você pode usar os dados já adquiridos para semear em outro torrent idêntico, o que rastreia apenas a largura de banda de upload, pois nada foi efetivamente 'baixado'. Há um [script](https://cross-seed.org) que usa o Prowlarr para automatizar esse processo.

#

> Tenha uma SeedBox

Um Seedbox é um servidor dedicado privado usado para download e upload de dados, operando com um cliente de torrent remoto. O Seedbox trabalha baixando e fazendo o upload dos dados em seus próprios servidores, geralmente a velocidades de 100Mbit/s ou mais. Usando o Seedbox em conjunto com o torrenting inicial, os dados são baixados rapidamente. Os dados ficam armazenados nos servidores, que podem ser acessados via servidor FTP.

#

> Verifique as Regras

Obter um bom ratio nem sempre é difícil ou consome muita largura de banda. Ao verificar as regras de seus trackers, você pode descobrir que alguns têm uma regra de 'tempo'. Isso significa que, ao permanecer em um torrent e tentar semear, você receberá, após um certo período, os dados de upload restantes apenas pela dedicação de permanecer no torrent. A maioria dos trackers modernos tem esse ou um recurso semelhante, então fique atento às regras.

#

> Throttle

Throttle é o método pelo qual você ajusta a configuração do seu cliente de torrent para baixar apenas na mesma velocidade que você faz upload. Isso garante que uma proporção maior que um seja mantida, mas só é recomendado se você tiver uma conexão de internet decente ou corre o risco de ter sua conta desativada.

#

> Download Parcial

O download parcial consiste em baixar apenas alguns arquivos de um torrent com múltiplos arquivos e fazer o upload. Ao alterar as prioridades dos arquivos dentro de um torrent, os downloads especificados podem ser 'pulados'. Dessa forma, apenas quantidades mínimas são baixadas e o upload é priorizado. (verifique as regras do tracker)

#

> Freeleech

Os torrents Freeleech podem ser encontrados na maioria dos trackers. Um torrent (ou em casos de sites inteiros) pode ser especificado como 'freeleech' por um certo tempo, ocasionalmente de forma permanente, e quaisquer dados baixados não contam para o uso, mas o upload sim.

_[Texto original](https://www.reddit.com/r/trackers/comments/fthja/a_simple_guide_to_a_better_ratio/)_
