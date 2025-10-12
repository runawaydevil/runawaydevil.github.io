---
title: "Como abrir portas no roteador em rede CGNAT"
description: "Guia de como abrir portas no roteador em rede CGNAT"
---

# Como abrir portas no roteador em rede CGNAT

Dependendo do tipo de alocação de portas e com a colaboração do provedor, é possível abrir porta do cliente torrent em rede CGNAT. Primeiro verifique alguns itens abaixo para descobrir se há bloqueios em seu sistema.

:::warning O processo de redirecionamento de portas pode expor sua rede a riscos do tipo _port scan_. Certifique-se de que você confia no solicitante (warez ou tracker) antes de realizar qualquer alteração. A extensão [Port Authority](https://github.com/ACK-J/Port_Authority) pode mitigar esse problema na maioria das vezes.
:::

## Verificando configurações no próprio sistema

**Habilitar UPnP ou UPnP/NAT no cliente torrent e no roteador**

**UPnP roteador**

> As opções acima podem variar conforme seu cliente torrent e/ou roteador.

## Verificando o Firewall

Verifique no firewall do sistema operacional se o cliente torrent está autorizado... Se usar software de terceiros com firewall, verifique também e cuidado com esses antivírus cheios de frescuras, com vários módulos inúteis que bloqueiam tudo... menos os vírus.

**Firewall do Windows (1)**

**Firewall do Windows (2)**

Com o cliente torrent aberto, acesse o site https://portchecker.co ou outro de sua preferência, digite a porta usada no cliente e clique para verificar (o ideal é que apareça como aberta). Se o resultado for fechado ou inacessível, será necessário abrir essa porta.

Deixe o cliente torrent configurado para usar uma porta única e não portas aleatórias a cada reinicialização. Configure o PC com um IP interno fixo (seja pela placa de rede ou reserva de IP por MAC no roteador).

Acesse o roteador e abra a porta do cliente torrent para o IP interno fixo que você definiu no PC... faça o teste de portas novamente. Se continuar fechada, pelo menos sabe que o bloqueio não está em seu sistema.

## Quando o bloqueio está no provedor

Alguns provedores fornecem acesso limitado ao roteador... você consegue alterar coisas básicas como nome e senha do Wi-Fi, etc, mas redirecionamento de portas, Servidores Virtuais (dependendo da marca do roteador, podem ter nomes diferentes) não estão disponíveis para acesso ilimitado... verifique se tem acesso completo ao roteador, caso contrário, solicite ao provedor.

**Acesso limitado**

**Acesso completo**

É o mesmo equipamento, no caso um Fiberhome... só mudou o login e senha de acesso. Notem a opção de redirecionamento de portas (nesse modelo Fiberhome é onde se abre a porta do cliente torrent).

:::tip Nos roteadores domésticos da Huawei, a opção de redirecionamento de portas está denominada como 'Port Mapping'.
:::

## Verificando se está em rede CGNAT

Acesse seu roteador e veja se o IP na WAN é o mesmo que aparece no site [MeuIP](https://www.meuip.com.br/).

- Se for o mesmo IP, não está em CGNAT.
- Se for um IP diferente, está em CGNAT.

Abaixo, um exemplo de CGNAT. Os IPs são diferentes:

**IP na WAN**

**Site Meu IP**

Em uma rede CGNAT, a alocação de portas para os clientes pode ocorrer de duas formas: dinâmica ou estática. Normalmente, o provedor que define.

## Dinâmica:

O provedor indica no equipamento de saída da empresa que cada cliente tem direito a uma quantidade específica de portas, o sistema escolhe quais portas ele vai usar. Até o momento, não sei como abrir portas nesse modo de alocação dinâmica.

## Estática:

Por questões de registro de log, é o modo mais usado e o provedor define quais portas o cliente irá usar, exemplo:

- Cliente 1 pode usar portas de 30401 a 30600;
- Cliente 2 pode usar portas de 30601 a 30800;
- E assim por diante.

Se estiver em CGNAT, ligue para seu provedor e peça sua faixa de portas. Diga que tentou abrir a porta de todas as formas e não conseguiu. Se pegar um atendente que entenda, ele dirá para você se as portas são dinâmicas ou estáticas (a maioria não entende nada).

Talvez tenha que ligar várias vezes... não desista! Geralmente, eles não passam essas informações facilmente.
Se passarem sua faixa de portas, por exemplo, de 30401 a 30600, escolha uma porta dentro da faixa indicada pelo provedor, configure o cliente torrent para usar essa porta e abra no roteador.

## CGNAT com porta aberta

**IP na WAN**

## Site Meu IP



## Site Teste de Portas



Pronto! Rede CGNAT com a porta aberta. Sua conexão está perfeita.

Alguns provedores forçam a contratação de IP fixo (IP externo, não interno), alegando ser impossível abrir porta no CGNAT. Analise a opção e escolha o que for melhor para você.

Outros optam por migrar para IPv6! Não tenho informações sobre isso, se é melhor ou pior, como fazer para abrir porta, quais as dificuldades de quem está em IPv6.

Todas as informações neste tutorial foram adquiridas com muita pesquisa em fóruns de hardware, cliente torrent, YouTube, e um agradecimento especial ao amigo que disponibilizou as imagens que fazem parte deste tutorial, pois o mesmo está em rede CGNAT.

Boa sorte!

> Guia feito por Smeagol e [u/Wandrey](https://lemmy.eco.br/u/wandrey)