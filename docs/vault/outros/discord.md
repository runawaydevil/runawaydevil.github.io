---
title: "Por que não se pode confiar no Discord"
description: "Razões para desconfiar do uso do Discord"
---

# 🪶 ➜ Por que não se pode confiar no Discord

---

## A minha perspectiva

Aqui está um breve resumo da minha experiência. Entrei no Discord em meados de 2016, logo no início de sua existência, e desde então usei a plataforma para fazer muitos amigos e superar momentos difíceis. Apreciava usar o Discord e presenciei a introdução de várias funcionalidades ao longo do tempo, como o novo menu de configurações do servidor, categorias de canais, pastas de servidor, registro de auditoria e assinaturas pagas, pelas quais eu mesmo paguei. Participei de chats sobre a API e desenvolvi vários bots, [um dos quais](https://amanda.moe/) está em desenvolvimento ativo há 2 anos, presente em 2200 servidores e contando, com 466 horas de programação desde que comecei a contar em 2019, tudo sem nenhum ganho pessoal. Tudo porque eu queria que as pessoas se sentissem felizes no Discord.

Eu gostava do Discord. Cheguei a me considerar um fã da plataforma. Mas agora, não consigo mais ignorar seus problemas.

Migrei minhas comunidades para fora do Discord, ou criei pontes com o Matrix, ou as transferi para outras pessoas e me afastei. De 86 servidores, restaram apenas 3, todos em ponte, então não preciso abrir o Discord para vê-los. Estou deletando todas as minhas mensagens. Provavelmente não excluirei minha conta, pois, ocasionalmente, preciso fazer login para resolver alguma questão, e deletar minha conta não faria muita diferença. Falarei mais sobre isso adiante.

Aqui está o motivo pelo qual estou abandonando o Discord.

## O produto é mal gerido

Existem tantos bugs pendentes no Discord que todos nós esquecemos coletivamente ao longo do tempo. Aqui está uma lista engraçada de alguns que me vêm à mente:

- Menções fantasmas e não-leituras fantasmas! Você escreve uma mensagem, talvez com uma menção, e depois a deleta. Para todos os outros, o marcador de não lida e o emblema de menção permanecem, apesar de não haver nada quando se abre o canal.
- Os bots não podem aceitar chamadas, no entanto, basta clicar com o botão direito do mouse em um bot em um servidor e selecionar "chamar" no menu de contexto. Esta é REALMENTE engraçada, você deveria tentar. É interessante notar que se deram ao trabalho de corrigir isso para o usuário do SISTEMA, mas não para os bots.
- As pessoas só podem definir cerca de 250 notas sobre outros usuários. Quando se atinge esse limite, as novas notas são silenciosamente rejeitadas pelo servidor e desaparecem quando se abre novamente o perfil. Não há forma de ver uma lista de pessoas com notas para deletá-las.
- O seletor de região do servidor sempre tem um tema claro.
- A tela de transferência de aplicativos sempre tem um tema claro.
- A caixa de diálogo para adicionar servidor sempre tem um tema claro.
- Todos os servidores têm um limite de membros que precisa ser aumentado manualmente pela equipe do Discord. Se um servidor atingir esse limite, ainda pode aparecer no explorador de servidores, mas quando você clica no botão de aderir, ele carrega indefinidamente. A solicitação de API falha em segundo plano com uma mensagem adequada, mas nunca foi criada uma UI para isso. Isso acontece em alguns servidores na página inicial do explorador de servidores, como o CallMeCarson.

Esses problemas não são novos. O problema das chamadas existe desde o início. Os problemas com os temas existem desde o início. O limite de notas existe desde o início. O problema do limite de membros do servidor existe desde que o explorador de servidores foi adicionado.

Eu poderia colocar mais exemplos, mas são mais difíceis de encontrar porque há alguns meses a equipe do Discord limpou os quadros de relatórios de erros, apagando vários anos de relatórios de problemas. Esses problemas ainda persistem até hoje.

Esses não são grandes problemas. Não afetam como uso o aplicativo no dia a dia. No entanto, são a prova de um problema muito mais grave: a equipe do Discord não se preocupa com esses problemas, está demasiadamente sobrecarregada e com falta de pessoal para lidar com eles, ou é simplesmente demasiado incompetente para resolvê-los. Mais sobre isso mais tarde.

Há mais provas de incompetência. Por um tempo, tivemos registros de auditoria do servidor, que permitiam saber se alguém deletava uma mensagem - mas não se alguém usava o endpoint de deletar mensagens em massa. Isso não era registrado de todo. Ops. Agora é uma coisa, mas passamos pelo menos um ou dois anos sem isso. (https://cadence.moe/i/abc28e)

O que a equipe tem feito em vez de corrigir esses problemas e fazer com que o aplicativo realmente pareça profissional? Eles têm estado [alterando a interface do usuário móvel, claramente sem consultar as pessoas que realmente usam o aplicativo, e todo mundo odeia isso](https://reddit.com/r/discordapp/comments/gdkzyn/introducing_tabs_to_android/). Oops.

## Deficiências

Talvez o maior problema pendente no aplicativo tenha sido a taxa de contraste do texto comum. No tema claro, o contraste do texto em relação ao plano de fundo era algo em torno de 2,2:1 (o _mínimo_ para ser acessível conforme as WCAG AA é 4,5:1), o que significa que era extremamente difícil realmente _ler texto no aplicativo projetado para ler texto_ a menos que você tenha uma visão perfeita e um monitor preciso. Isso acabou sendo resolvido para a maioria das partes do aplicativo, mas logo depois eles mudaram os títulos de incorporação de perfeitamente bons para inacessíveis, o que é terrível e mostra que eles realmente não se importam e que não mudaram.

O padrão de total desrespeito às deficiências continua quando eles fizeram com que as mensagens fossem destacadas quando você passava o cursor sobre elas. Enquanto você rola esta página agora, tenho certeza de que o seu mouse está passando sobre ela em algum lugar. Agora imagine que as cores do parágrafo sobre o qual você estava passando o mouse mudaram significativamente à medida que você rolava a página e movia o mouse. Na verdade, eu teria deixado de usar o Discord imediatamente se não tivesse o conhecimento técnico para descobrir de onde vinham os estilos e modificar as cores para que não fizessem isso - o que, na verdade, é contra os termos de serviço. Tenho que violar os termos de serviço para tornar o aplicativo utilizável. Legal.

Se você não entende por que isso é importante, é incrivelmente perturbador para as pessoas que têm autismo, TDAH ou problemas relacionados. Para mim, minha mente se concentra demais no que está acontecendo na tela, impossibilitando-me de realmente ler e entender as mensagens. Na verdade, não consigo usar o aplicativo com essa configuração ativada.

Você não tem o controle motor fino para usar o ponteiro do mouse? Talvez você não tenha mãos para movê-lo, ou talvez tremores o impeçam de apontar com precisão. É uma pena ser você, pois o aplicativo é quase inutilizável com o teclado. Não é possível usar a tecla Tab para mover-se pelas diferentes seções, pois ela foi substituída para sempre focar o campo de texto. Mesmo que você pudesse usar a tecla Tab, o anel de foco foi substituído para ficar invisível, de modo que você não tem ideia do que será ativado quando pressionar Enter. Você pode pensar que é difícil criar uma interface de usuário totalmente acessível pelo teclado. Pode ser difícil, mas definitivamente não é impossível. Veja o Visual Studio Code, um aplicativo com layout semelhante, que é totalmente acessível pelo teclado.

No início, não havia chamadas de vídeo. Depois, as chamadas com vídeo e o compartilhamento de tela foram adicionados às chamadas DM e DM em grupo, e as pessoas ficaram felizes. Elas queriam chamadas de vídeo do servidor, mas não as tinham. Não era um grande problema.

Então, alguém descobriu que era possível criar um link que o transportaria para dentro do canal de voz, que tinha uma interface extremamente boa para chamadas de vídeo e compartilhamento de tela, e isso funcionou.

Depois, nada mudou em relação a isso por 18 meses. O compartilhamento de tela ainda parecia ser apenas para DMs, embora ainda funcionasse perfeitamente nos servidores se você soubesse como fazer o link. Foram 18 meses em que esse era um recurso oculto e totalmente funcional.

Em seguida, o Go Live foi lançado e, no início, era péssimo. Originalmente, ele só permitia o compartilhamento de tela de jogos registrados e não permitia chamadas de vídeo. Depois, permitia o compartilhamento de tela de qualquer aplicativo, mas não de chamadas de vídeo. E, finalmente, mais de 6 meses após o lançamento do Go Live, eles adicionaram botões para abrir a chamada de vídeo e o compartilhamento de tela com o canal atual. Levou um total de 2 anos para transformar esse recurso oculto extremamente útil e perfeitamente funcional em um recurso visível.

## Comunicação

Discord é um aplicativo de comunicação. Você acha que isso permitiria que a equipe comunicasse informações importantes de maneira eficaz para você e talvez você pudesse ativar ou desativar canais específicos, como notas de atualização, anúncios de desenvolvedores, análises técnicas e coisas assim. Não é assim. Comunicação com Discord é incrivelmente desorganizado.

O Discord tem um blog. O Discord tem o repórter de interrupções. O Discord tem listas de e-mail. O Discord tem o Twitter. O Discord escreve no GitHub. O Discord tem praticamente tudo, exceto, bem, o Discord. As únicas mensagens que você pode ter certeza de receber são as mensagens do SISTEMA se eles decidirem que é hora de mostrar seu passaporte. As informações enviadas por essas diferentes rotas de comunicação também são diferentes, então você precisa se inscrever em todas elas. Há também cerca de um bilhão de servidores satélites aos quais você precisa se associar para obter informações importantes informações, especialmente se você for um desenvolvedor de bot. Muitas informações importantes sobre verificação de bot, uma medida que _literalmente bloqueará as pessoas fora da plataforma se elas não entenderem o que fazer,_ eu só descubro quando pessoas aleatórias poste-o em servidores onde eu esteja. Aparentemente há um servidor "Discord Developers" onde eles postam anúncios sobre isso. Não tenho ideia de como entrar nesse servidor.

## Tempo de inatividade

O Discord quer ser a via de comunicação que você pode usar para tudo. Isso é um pouco difícil quando eles estão tendo problemas técnicos em momentos cruciais. Se os servidores caírem, você não consegue fazer login, não consegue ler nenhum arquivo antigo. mensagens, você não pode enfileirar mensagens para enviar mais tarde e muitas vezes não pode receber atualizações sobre o que está acontecendo. Tudo o que você pode fazer é esperar e torcer para que isso volte eventualmente.

[Confira a página de status.](https://status.discord.com/)

Você vê algumas linhas laranja. Você pensa, tudo bem, está ativo na maior parte do tempo? Isso não ajuda. O Discord precisa estar ativo o tempo todo se quiser que eu o leve a sério. Entendo que escrever o código é difícil e estou ciente de que pareço exigente aqui, mas simplesmente não posso adotar o Discord para comunicação se não puder confiar que ele estará disponível quando eu precisar _agora._ Se ficar fora do ar por meia hora, isso não é um muito tempo no quadro geral, mas é muito tempo no momento em que tenho uma mensagem que preciso enviar _naquele momento._

A propósito, eu executo um bot de tamanho razoável e vejo um bom número de vezes em que uma série de solicitações ao Discord resultam em 502 Bad Gateway, mas não são anotadas no monitor de status.

Por volta do final do ano passado, eles fizeram uma postagem no blog (que não tem link para lugar nenhum, você só precisa encontrá-la por conta própria ou esperar que sua rede de amigos eventualmente a entregue para você) dizendo que [eles estão cientes de que eles precisam fazer melhor e estão priorizando correções de confiabilidade e escrevendo relatórios sobre os problemas que enfrentam.](https://blog.discord.com/recent-instability-whats-next-ce7e4a9e3139?gi=d1e080ecd4d7) Nós' estamos na metade do ano e não recebemos nenhum relato de problemas que eles enfrentaram.

## Discord não se importa com você

O Discord não se importa com você, a equipe do Discord não se importa com você e a equipe do Discord _especialmente_ não se importa com você se você é um grande contribuidor para o ecossistema deles, por exemplo, criando bots, ou listas de servidores, ou outras ferramentas que simplesmente ajudam sua plataforma, ao mesmo tempo que traz muito pouco. Isso soa ao contrário e é verdade.

[Por favor, vá e leia meu outro post sobre passaportes.](https://cadence.moe/blog/2020-04-08-passport) O passaporte foi a gota d'água que me fez realmente começar a tirar minhas coisas do Discord .

[Aqui está um drama do final de 2019,](https://github.com/discord/discord-api-docs/issues/1276) que foi causado pelo fato de a equipe do Discord ser má e não documentar algum comportamento que levou a muita coisa de pessoas sendo @todo mundo por bots, e os desenvolvedores desses bots não tendo como impedir isso. Não tenho energia para explicar isso a um leitor com um nível desconhecido de habilidade técnica. A resposta final a isso O problema é "apenas higienize a avaliação do seu bot e ajuste as permissões do servidor e espere até que todos se esqueçam disso". Os proprietários do bot não têm a capacidade de higienizá-lo ou ajustar as permissões do servidor. Você notará que o problema foi bloqueado para que ninguém mais pudesse comente sobre isso depois desse ponto. Esta resposta é realmente horrível. (Isso foi revisado posteriormente e o campo `allowed_mentions` foi adicionado para resolvê-lo, o que é algo que honestamente deveria ter existido desde o início.)

Você já brincou sobre ter menos de 13 anos? Talvez em um servidor privado ou mensagem direta você tenha visto uma pergunta como "o que você não entende? Você tem literalmente 2 anos?" e respondeu, como uma piada óbvia , "sim". Isso é suficiente para bloquear sua conta do Discord e excluí-la após 14 dias, a menos que você envie um documento de identificação com foto com sua data de aniversário. Nem todo mundo tem um documento de identificação com foto com sua data de aniversário, por exemplo, crianças reais de 14 anos. , nem todo mundo deseja enviar um documento de identidade com foto para uma empresa privada para armazená-lo por um período de tempo indefinido e usá-lo para fins indefinidos.

[Por exemplo, esta pessoa, que não possui documento de identidade para comprovar sua idade, sua conta será excluída.](https://reddit.com/r/discordapp/comments/gowoxt/photo_id_for_age_verification_need_help) Tchau.

Por exemplo, [estes](https://reddit.com/r/discordapp/comments/gber1q/help_ive_been_locked_out_of_my_account) / [dois](https://www.reddit.com/r/discordapp/comments/gafhj8/do_locked_out_accounts_get_deleted_after_14_days) pessoas que possuem ID, mas o Discord simplesmente não respondeu aos seus pedidos.

Você pode pensar que essa questão não importa porque essas pessoas provavelmente não são muito importantes e isso nunca aconteceria com você, certo? Essa é uma má interpretação e é falsa.

[Aqui está um desenvolvedor líder da maior biblioteca de desenvolvimento de bots Discord do mundo dizendo que isso aconteceu com eles.](https://github.com/discordjs/discord.js/issues/3440) O Discord pode decidir que é hora de você agir a qualquer momento, e quando isso acontece, você simplesmente desaparece.

As consequências de "acabar de sair" são que

## 🔗 Veja também

- **[🪶 ➜ Guia de Privacidade para Paranoicos](/vault/guias/quero-privacidade)** - Ambos os guias lidam com questões de privacidade e segurança online
