---
category: tech
description: Encontre 51 ferramentas e recursos tecnológicos essenciais. Software,
  tutoriais e comunidades para desenvolvedores e entusiastas de tecnologia.
keywords: &id001
- music
- manga
- software
- audio
- server
lastUpdated: '2025-10-18'
meta:
  contentType: tech
  keywords: *id001
  totalLinks: 51
tags:
- tech
- music
- manga
- software
title: Guia Completo de EAC (Exact Audio Copy)
---


## 🎯 O que você vai encontrar aqui

- **51 ferramentas** tecnológicas
- Software e utilitários
- Tutoriais e recursos de desenvolvimento

---

**URL:** https://ripped.guide/Audio/Ripping/EAC/

EAC Ripping (CD)

**Process de Configuração do EAC**

Esse guia foi feito para a versão 1.0 beta 3 do EAC e acima, então não vai funcionar direitinho com versões mais antigas. 

Qualquer coisa com uma borda verde é configuração obrigatória. O que estiver laranja é necessário, mas depende do seu drive. O que não tem marcação é opcional. 

Aqui, vamos direto ao ponto, sem frescura.

**Passo 1: Baixar e instalar o EAC**

Baixe o instalador e execute-o. 

Logo, você vai chegar a uma tela assim. Certifique-se de instalar o AccurateRip, CDRDAO, CTDB e freedb, no mínimo. O FLAC também é útil, caso você não tenha instalado separadamente. O GD3 só vale a pena se você quiser pagar por resultados de metadados. Presumo que você não queira.

**Passo 2: Iniciar o EAC**

Quando você abrir o EAC pela primeira vez, vai ver uma tela parecida com essa. Clique em "Cancelar". Depois, coloque um CD popular no seu drive, de preferência um que não seja muito recente (pelo menos alguns meses). Uma janela como a abaixo vai aparecer. Se você já tiver uma versão mais antiga do EAC ou do dBpoweramp instalada, é provável que o AccurateRip já esteja configurado e isso pode não aparecer. 

Clique em Configurar. Pode levar alguns minutos. Depois clique em "Ok". Novamente, se você já tinha uma versão antiga do EAC ou do dBpoweramp, é provável que o AccurateRip já esteja configurado.

**Passo 3: Opções do EAC**

Todas as caixas de opções estão no menu do EAC no topo da tela. 

Comece com as Opções do EAC. Qualquer aba que não aparece nas imagens é configuração opcional ou irrelevante para o ripping. 

Garanta que as configurações destacadas em verde estejam como mostrado. Se você estiver usando uma versão mais antiga do EAC, desmarque "No use of null samples for CRC calculations". O restante é opcional, escolha o que você preferir. Bloquear a bandeja do drive durante a extração é uma boa ideia.

Essas configurações são quase todas opcionais e autoexplicativas. Eu recomendaria usar rotinas de reprodução de CD alternadas e desabilitar o autostart.

A opção "Create log files always in english language" é super importante para nossos usuários internacionais. Isso permite que você mantenha a linguagem do EAC na sua língua nativa, mas escreva o arquivo de log em inglês.

Se seu drive consegue ler códigos UPC/ISRC e CD-Text (só dá pra saber testando), você pode deixar as duas primeiras opções marcadas. Caso contrário, desmarque-as. 

Fora isso, essas configurações são bem ideais. Não recomendo usar mais de 1 thread de compressor, mesmo que você tenha um computador multicore. A extração das faixas não demora tanto assim. Note que, em testes feitos pelo punkmeup, desabilitar a fila de compressores externos em segundo plano resolveu um problema onde o EAC estava gerando arquivos WAV em vez de FLAC, então isso é uma configuração obrigatória. Não deve afetar a qualidade da extração. Se a fila de extração funcionar pra você (funciona pra mim), fique à vontade para deixá-la ativada.

Amigos não deixam amigos normalizarem suas extrações do EAC. Não faça isso.

Esse é o jeito certo de nomear as faixas. A única diferença aceitável aqui é talvez %tracknr2%. %title% se você preferir pontos em vez de traços nos nomes dos arquivos. Se precisar que os números das faixas cheguem a três dígitos, use %tracknr3% em vez de %tracknr2%.

**Convenção de Nomenclatura:** %tracknr2% - %title%

Ative 'Use Various Artists Naming Scheme' e use: %tracknr2% - %artist% - %title%

Não substitua espaços por underscores. Isso fica ridículo.

**Passo 4: Opções do Drive**

Comece clicando em "Detect Read Features...". Isso vai levar alguns minutos. A única detecção de recursos que realmente importa é o Accurate Stream. Se seu drive puder usá-lo, marque a opção (a maioria dos drives modernos tem Accurate Stream). Se não puder, ignore.

Mesmo que seu drive não faça cache de áudio, faça um favor e mantenha essa opção marcada. Isso vai evitar que você tenha que reavaliar cada upload manualmente e não afeta a qualidade do áudio. Sim, as extrações demoram um pouco mais com essa configuração ativada. Vá assistir TV ou algo assim enquanto espera.

Não use C2, mesmo que o EAC ache que você pode. A maioria dos drives tem implementação de erro C2 péssima.

Clique em "Autodetect read command now". Não deve demorar. Deixe tudo o mais desmarcado, a menos que você esteja com problemas. Você pode marcar "CD-Text Read capable drive" se quiser testar se seu drive consegue fazer isso. Se sim, ótimo, caso contrário, desmarque. É bem improvável que você use esse recurso de qualquer maneira.

Se você fez a configuração do AccurateRip no início deste guia, a parte superior aqui ficará cinza. Se não, você vai precisar encontrar sua correção de offset de leitura dessa lista. Não use um offset combinado de leitura/gravação.

Se quiser descobrir se seu drive precisa da opção "Overread into Lead-in and Lead-Out" marcada, você pode testar desmarcando temporariamente "Use AccurateRip with this drive". Coloque um CD no drive e clique em "Detect read sample offset correction...". Se você só está fazendo isso para o Overread, veja abaixo:

**Originalmente postado por blowfish.be:**  
Marque "Overread Lead-In and Lead-Out" apenas se o resultado do teste disser que seu drive pode fazer overread tanto do Lead-In quanto do Lead-Out, ou se disser Lead-Out e sua correção de offset for positiva, ou se disser Lead-In e sua correção de offset for negativa. Caso contrário, desmarque.

Lembre-se de marcar "Use AccurateRip with this drive" novamente quando terminar. AccurateRip é sempre uma boa ideia.

Praticamente todo drive deve funcionar com as configurações mostradas. Se o seu travar na detecção de gaps ou detectar gaps que são claramente errados (como gaps de 30 segundos em um álbum não ao vivo), teste o método de detecção B ou C. Se A, B e C falharem, você pode mudar "Secure" para "Accurate" e tentar de novo.

**Passo 5: Opções de Metadados**

Aqui você escolhe seu provedor de metadados. Se você instalou o GD3, ele estará na lista. Você só pode extrair 10 discos antes de precisar pagar uma assinatura. Caso contrário, você tem a opção entre o plugin MusicBrainz (CTDB), o plugin freedb e o suporte nativo do freedb do EAC. Não estou muito certo qual é a grande diferença, mas acho que é a capa+letras. De qualquer forma, mude essas configurações se quiser.

Se você usar o freedb nativo do EAC, as configurações devem ser assim. Certifique-se de colocar um e-mail no topo, não precisa ser real. Clique em "Get active freedb server list". Depois, marque a última opção.

**Passo 6: Opções de Compressão**

Configure essa aba exatamente como mostrado. Você vai ter que navegar até o caminho onde está o flac.exe; se você instalou com o EAC, ele está em C:\Program Files (x86)\Exact Audio Copy\FLAC\flac.exe. Se você instalou separadamente, está onde você instalou.

A taxa de bits e a qualidade alta/baixa não afetam a extração. 

Os parâmetros de linha de comando mudaram nesta versão, então isso vai parecer novo para a maioria de vocês. A linha de comando recomendada para completude ideal é essa:

`-8 -e -p -V -T "ARTIST=%artist%" -T "TITLE=%title%" -T "ALBUM=%albumtitle%" -T "DATE=%year%" -T "TRACKNUMBER=%tracknr%" -T "GENRE=%genre%" -T "PERFORMER=%albuminterpret%" -T "COMPOSER=%composer%" %haslyrics%--tag-from-file=LYRICS="%lyricsfile%"%haslyrics% -T "ALBUMARTIST=%albumartist%" -T "DISCNUMBER=%cdnumber%" -T "TOTALDISCS=%totalcds%" -T "TOTALTRACKS=%numtracks%" -T "COMMENT=%comment%" %source% -o %dest%`

Não dá trabalho nenhum da sua parte, só copiar e colar isso nas opções de linha de comando adicionais e pronto.

**Nota:** a função %comment% está quebrada na versão 1.0b2 (retorna o CRC da faixa). Use algo como `-T "COMMENT=EAC V1.0 beta 2, Secure Mode, Test & Copy, AccurateRip, FLAC -8"` em vez disso.

Além disso, a partir da Beta 3, você pode usar a variável %tracknr1% em vez de %tracknr% se quiser que não haja zeros à esquerda no campo do número da faixa (como faz o XLD). O tracknr1 usará, por exemplo, '1' em vez de '01'.

**Uma nota sobre ripar para formatos com perda como MP3:** Então, pra começar, isso é uma completa perda de tempo. Na maioria dos casos, o EAC é exagerado para arquivos com perda e demora muito para extrair o CD pra ser prático. O melhor é ripar uma vez para FLAC e depois usar um programa como dBpoweramp para converter essa extração para os outros formatos. Mesmo que você não precise de um FLAC, ainda assim será muito mais rápido ripar usando qualquer outro programa, e não vai produzir um resultado audivelmente diferente, a menos que seu CD tenha pulos e arranhões.

Mas, as linhas de comando para MP3 e Ogg estão incluídas abaixo. Você vai precisar navegar até o LAME.exe ou oggenc2.exe, e definir a extensão como .mp3 ou .ogg, respectivamente. As outras configurações permanecem as mesmas, a taxa de bits ainda é irrelevante.

**MP3 V0:**
`-V 0 --vbr-new --add-id3v2 --ignore-tag-errors --ta "%artist%" --tt "%title%" --tg "%genre%" --tl "%albumtitle%" --ty "%year%" --tn "%tracknr%" %source% -o %dest%`

**MP3 V2:**
`-V 2 --vbr-new --add-id3v2 --ignore-tag-errors --ta "%artist%" --tt "%title%" --tg "%genre%" --tl "%albumtitle%" --ty "%year%" --tn "%tracknr%" %source% -o %dest%`

**MP3 320 kbps:**
`-b 320 -h --add-id3v2 --ignore-tag-errors --ta "%artist%" --tt "%title%" --tg "%genre%" --tl "%albumtitle%" --ty "%year%" --tn "%tracknr%" %source% -o %dest%`

**Ogg q8:**
`-q 8 -a "%artist%" -t "%title%" -l "%albumtitle%" -d "%year%" -N "%tracknr%" -G "%genre%" %source% -o %dest%`

Deixe tudo desmarcado, exceto a última opção.

Parabéns! O EAC está agora configurado corretamente! Você pode querer salvar suas configurações em um perfil clicando em "New" na parte inferior da tela. Porém, a menos que você mude suas configurações com frequência, não há necessidade, o EAC vai lembrar de tudo isso na próxima vez que você abrir.

**Processo de Ripping do EAC**

**Passo 7: Tagging**

Agora vamos olhar a janela principal. Certifique-se de que tudo está nomeado corretamente aqui, pois esses serão os tags dos seus arquivos extraídos. Se você estiver ripando um CD clássico, pode querer preencher os campos de Compositor/Intérprete.

Arraste uma imagem de capa para a janela do EAC. Eu acho que ~500x500 é um tamanho decente na maioria dos casos. O Google Imagens é seu amigo aqui.

Se você estiver ripando uma caixa, pode querer usar as opções abaixo da imagem da capa, caso contrário, deixe tudo como "1".

Por fim, se você quiser adicionar letras às faixas, use o botão "Lyrics".

**Nota:** Eu também destaquei o botão "New", onde você pode salvar suas configurações. Isso não é um passo necessário toda vez que você faz um rip.

**Passo 8: Detecção de Gaps e Cuesheets**

A parte pré-rip acontece aqui. Certifique-se de que "Append Gaps to Previous Track (default)" esteja marcado. Deveria estar. Em seguida, clique nas opções na ordem mostrada.

Primeiro, clique em "Detect Gaps". Isso é muito importante, seu rip vai falhar no logchecker se você não completar esse passo. Se a primeira faixa estiver destacada em vermelho, você tem uma faixa escondida. Você vai querer olhar para essa seção do guia blowfish.be.

Depois, vá em Create CUE Sheet -> Multiple WAV Files With Gaps... (Noncompliant). Geralmente, é aqui que eu crio a pasta para o ripping também. NÃO ripar suas faixas para nenhum diretório que contenha seu nome. Você NUNCA deve editar um log por qualquer razão, especialmente agora que temos checksums. Um simples C:\EAC Rips está bom.

Eu nomeio minhas pastas assim:
Artista - Álbum (Ano) [Formato] {Extra}

Então, por exemplo, com o álbum das capturas de tela, seria:
Sam Roberts Band - Collider (2011) [FLAC] {UMC 0252764577}

Contanto que contenha o nome do álbum e não tenha pastas aninhadas (não faça \Artista\Álbum), você está tranquilo nas regras aqui.

Enfim, crie a pasta, salve o arquivo .cue nela. Eu costumo nomear o meu como Noncompliant.cue, mas isso não importa muito.

**Passo 9: Ripping**

Finalmente, a extração em si! Certifique-se de que todas as faixas estão marcadas na janela principal, a menos que haja algumas que você não queira ripar.

Teste & Copie -> Comprimido.

Dependendo do seu drive e se o CD está arranhado, isso pode levar de dez minutos a quatro horas. Tenha paciência.

**Passo 10: Pós-Rip**

Então você terminou! Você pode querer usar um logchecker para verificar se sua extração está correta, mas se você seguiu este guia, os únicos erros possíveis seriam com o próprio CD. Isso realmente acontece... alguns CDs estão tão danificados que nem o EAC consegue. O melhor é limpar o CD e tentar de novo.

**Nota:** se alguma das faixas não for extraída corretamente (ou se você receber erros de leitura/sincronização), você pode tentar limpar/reparar o disco e re-extrair essas faixas que falharam. Nesse caso, o EAC vai adicionar ao arquivo de log existente, então você não precisa refazer todo o álbum sempre!

Fora isso, nunca é demais garantir que seus arquivos estejam tagueados e nomeados corretamente (embora eles já deveriam estar). Qualquer coisa extra que você queira incluir deve ser adicionada agora também... Arte adicional, uma impressão md5, um arquivo info.txt, esse tipo de coisa.

Créditos ao caaok pelos guias originais do what.cd.

## 🔗 Links Úteis

- [Home](https://ripped.guide/)
- [About](https://ripped.guide/About/)
- [Music](https://ripped.guide/Audio/Music/)
- [Emulation](https://ripped.guide/Consoles/Emulation/)
- [Homebrew](https://ripped.guide/Consoles/Homebrew/)
- [Manga](https://ripped.guide/Literature/Manga/)
- [e-Books](https://ripped.guide/Literature/e-Books/)
- [Android](https://ripped.guide/Mobile/Android/)
- [iOS](https://ripped.guide/Mobile/iOS/)
- [Games](https://ripped.guide/PC-Software/Games/)
- [Software](https://ripped.guide/PC-Software/Software/)
- [Private Trackers](https://ripped.guide/Scene/PTs/)
- [PreDBs](https://ripped.guide/Scene/PreDBs/)
- [Scene Glossary](https://ripped.guide/Scene/Scene-Glossary/)
- [Anime](https://ripped.guide/TV/Anime/)
- [Movies & Shows](https://ripped.guide/TV/Shows/)
- [De-bloating Windows](https://ripped.guide/Utilities/Debloating/)
- [Miscellaneous](https://ripped.guide/Utilities/Misc/)
- [Ripped](https://ripped.guide/)
- [GitHub](https://github.com/rippedpiracy/docs)
- [Discord](https://discord.ripped.guide)
- [EAC version 1.0 beta 3](https://www.exactaudiocopy.de/)
- [Contribute on](https://github.com/rippedpiracy/docs/blob/master/Audio/Ripping/EAC.md)


---

*Conteúdo extraído de: [https://ripped.guide/Audio/Ripping/EAC/](https://ripped.guide/Audio/Ripping/EAC/)*

---

*Este texto foi revisto e expandido por [runawaydevil](https://pablo.space).*

*A inovação distingue um líder de um seguidor. — Steve Jobs*