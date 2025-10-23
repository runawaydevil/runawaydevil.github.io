---
title: Conteúdo Otimizado
description: Conteúdo selecionado com 245 links e 0 imagens preservados
category: security
---

# Incrível segurança

[!](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)(https://github.com/sindresorhus/awesome)

Uma coleção incrível de software, bibliotecas, documentos, livros, recursos e coisas interessantes sobre segurança.

Inspirado por [awesome-php](https://github.com/ziadoz/awesome-php), [awesome-python](https://github.com/vinta/awesome-python).

Graças a todos [contributores](https://github.com/sbilly/awesome-security/graphs/contributors), você é incrível e não seria possível sem você! O objetivo é construir uma coleção coletiva categorizada de recursos muito conhecidos.

Claro! Aqui está o texto reescrito em português brasileiro, mantendo as formatações e links conforme solicitado:

- [Awesome Segurança](#awesome-segurança)
- [Rede](#rede)
- [Scanning / Pentesting](#scanning-pentesting)
- [Monitoring / Logging](#monitoring-logging)
- [IDS / IPS / Host IDS / Host IPS](#ids-ips-host-ids-host-ips)
- [Banheiro de mel / Rede de mel](#banheiro-de-mel-rede-de-mel)
- [Full Packet Capture / Forensic](#full-packet-capture-forensic)
- [Sniffer](#sniffer)
- [Informação de Segurança & Gestão de Eventos](#informação-de-segurança-gestão-de-eventos)
- [VPN](#vpn)
- [Processamento de Pacote Rápido](#processamento-de-pacote-rápido)
- [Firewall](#firewall)
- [Anti-Spam](#anti-spam)
- [Docker](#docker-images-for-penetration-testing-segurança)
- [Endpoint](#endpoint)
- [Anti-Virus / Anti-Malware](#anti-vírus-anti-malware)
- [Desarmar & Reconstruir conteúdo](#desarmar-conteúdo-reconstruir)
- [Gestão de Configuração](#gestão-de-configuração)
- [Autenticação](#autenticação)
- [Mobile / Android / iOS](#mobile-android-ios)
- [Forensics](#forensics)
- [Engenharia Social](#engenharia-social)
- [Web](#web)
- [Organização](#organização)
- [Firewall da aplicação Web](#web-aplication-firewall)
- [Scanning / Pentesting](#scanning-pentesting)
- [Proteção automática da aplicação em tempo de execução](#proteção-automática-da-aplicação-em-tempo-de-execução)
- [Desenvolvimento](#desenvolvimento)
- [Implantação de Infraestrutura de Red Team](#red-team-infrastructure-deployment)
- [Exploits / Payloads](#exploits-payloads)
- [Utilidade](#usabilidade)
- [Big Data](#big-data)
- [DevOps](#devops)
- [Terminal](#terminal)
- [Sistemas Operacionais](#sistemas-operacionais)
- [Recursos online](#recursos-online)
- [Datastores](#datastores)
- [Prevenção de fraude](#prevenção-de-fraude)
- [EBooks](#ebooks)
- [Outras listas impressionantes](#outras-listas-impressionantes)

- [Outras listas de segurança impressionante](#outras-listas-de-segurança)
- [Outras Listas Awesome Common](#outras-listas-awesome-common)
- [Contribuindo](#contribuindo)

-------

# # Rede

## # Arquitetura de rede

(https://github.com/sergiomarotco/Network-segmentation-cheat-sheet) Este projeto foi criado para publicar as melhores práticas de segmentação da rede corporativa de qualquer empresa. Em geral, os esquemas deste projeto são adequados para qualquer empresa.

Varrendo / Penteando

- [OpenVAS](http://www.openvas.org/) - OpenVAS é um framework de vários serviços e ferramentas que oferecem uma solução abrangente e poderosa de gerenciamento de vulnerabilidade e digitalização.
- [Metasploit Framework](https://github.com/rapid7/metasploit-framework) - Uma ferramenta para desenvolver e executar código de exploração contra uma máquina de destino remoto. Outros sub-projetos importantes incluem o Opcode Database, arquivo shellcode e pesquisa relacionada.
- [Kali](https://www.kali.org/) - Kali Linux é uma distribuição Linux derivada do Debian projetada para testes forenses digitais e de penetração. Kali Linux é pré-instalado com numerosos programas de teste de penetração, incluindo nmap (um scanner de porta), Wireshark (um analisador de pacotes), John the Ripper (um cracker de senha), e Aircrack-ng (um conjunto de software para LANs sem fio de teste de penetração).
- [tsurugi](https://tsurugi-linux.org/) - altamente personalizada Distribuição Linux que foi projetada para apoiar investigações DFIR, análise de malware e atividades do OSINT. É baseado no Ubuntu 20.04(64 bits com um kernel personalizado 5.15.12)
Uma ferramenta de crafting de pacotes Linux.
(https://github.com/gpotter2/awesome-scapy) - Scapy: o programa & biblioteca de manipulação de pacotes interativos baseado em python.
- [Pompem](https://github.com/rfunix/Pompem) - Pompem é uma ferramenta de código aberto, que foi projetada para automatizar a busca de exploits nas principais bases de dados. Desenvolvido em Python, tem um sistema de busca avançada, facilitando assim o trabalho de pentesters e hackers éticos. Em sua versão atual, realiza buscas em bases de dados: Exploração-db, 1337day, Packetstorm Security...
- [Nmap](https://nmap.org) - Nmap é um utilitário livre e de código aberto para descoberta de rede e auditoria de segurança.

- [Amass](https://github.com/caffix/amass) - Amass realiza a enumeração do subdomínio DNS, raspando o maior número de fontes de dados diferentes, forçando brutas recursivas, rastejando de arquivos web, permutando e alterando nomes, varrendo DNS reversa e outras técnicas.
- [Anevicon](https://github.com/rozgo/anevicon) - O mais poderoso gerador de carga baseado em UDP, escrito em Rust.
- [Finshir](https://github.com/isgasho/finshir) - Um gerador de baixo e lento tráfego dirigido por coroutinas, escrito em Rust.
- [Legion](https://github.com/GoVanguard/legion) - Estrutura de teste de penetração de redes de reconhecimento e descoberta semi-automática de código aberto.
(https://github.com/aboul3la/Sublist3r) Ferramenta rápida de enumeração de subdomínios para testadores de penetração
- [RustScan](https://github.com/RustScan/RustScan) - Escaneamento mais rápido do Nmap com Rust. Faça uma varredura de 17 minutos para 19 segundos.
== Ligações externas ==* Página oficial
- [monsoon](https://github.com/RedTeamPentesting/monsoon) - Enumeração HTTP interativa muito flexível e rápida.
(https://github.com/spectralops/netz) Descubra configurações equivocadas na internet, usando zgrab2 e outros.
- [Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper) - Apache v2, poderoso scanner de vulnerabilidade runtime para kubernetes, máquinas virtuais e servidor sem.
- [Deepfence SecretScanner](https://github.com/deepfence/SecretScanner) - Encontre segredos e senhas em imagens de contentores e sistemas de ficheiros.
(https://github.com/padok-team/cognito-scanner) - ferramenta CLI para pentest Cognito AWS instância. Ele implementa três ataques: criação de conta indesejada, oráculo de conta e escalada de identidade

Monitoramento / Registo
- [BoxyHQ](https://github.com/retracedhq/retraced) - API de código aberto para registro de auditoria de segurança e conformidade.
- [justniffer](http://justniffer.sourceforge.net/) - Justniffer é um analisador de protocolo de rede que captura tráfego de rede e produz logs de forma personalizada, pode emular arquivos de registro do servidor web Apache, rastrear tempos de resposta e extrair todos os arquivos "interceptados" do tráfego HTTP.

- [httpry](http://dumpsterventures.com/jason/httpry/) - httpry é um sniffer de pacotes especializado projetado para exibição e registro de tráfego HTTP. Não se pretende realizar a análise em si, mas capturar, analisar e registrar o tráfego para posterior análise. Ele pode ser executado em tempo real exibindo o tráfego como ele é analisado, ou como um processo de daemon que loga em um arquivo de saída. É escrito para ser o mais leve e flexível possível, para que possa ser facilmente adaptável a diferentes aplicações.
- [ngrep](http://ngrep.sourceforge.net/) - ngrep se esforça para fornecer a maioria dos recursos comuns do GNU grep, aplicando-os na camada de rede. ngrep é uma ferramenta pcap-aware que lhe permitirá especificar expressões estendidas regulares ou hexadecimais para combinar com os dados de carga útil de pacotes. Atualmente reconhece IPv4/6, TCP, UDP, ICMPv4/6, IGMP e Raw em Ethernet, PPP, SLIP, FDDI, Token Ring e interfaces nulas, e entende a lógica de filtro BPF da mesma forma que ferramentas mais comuns de farejar pacotes, como tcpdump e snoop.
- [passivedns](https://github.com/gamelinux/passivedns) - Uma ferramenta para coletar registros DNS passivamente para ajudar o manuseio de incidentes, monitoramento de segurança de rede (NSM) e forense digital geral. PassiveDNS fareja o tráfego de uma interface ou lê um arquivo pcap e sai as respostas do servidor DNS para um arquivo de log. PassivoDNS pode cache/agregar respostas duplicadas DNS em memória, limitando a quantidade de dados no arquivo de registro sem perder os essens na resposta DNS.
- [sagan](http://sagan.quadrantsec.com/) - Sagan usa um motor 'Snort like' e regras para analisar logs (syslog/event log/snmptrap/netflow/etc).
- [ntopng](http://www.ntop.org/products/traffic-analysis/ntop/) - Ntopng é uma sonda de tráfego de rede que mostra o uso da rede, semelhante ao que o comando popular do topo Unix faz.
- [Fibratus](https://github.com/rabbitstack/fibratus) - Fibratus é uma ferramenta para exploração e rastreamento do kernel do Windows. É capaz de capturar a maior parte da atividade do kernel do Windows - criação e terminação de processo/thread, sistema de arquivos I/O, registro, atividade de rede, carregamento/descarregamento DLL e muito mais. Fibratus tem uma CLI muito simples que encapsula a maquinaria para iniciar o coletor de eventos do kernel, definir filtros de eventos do kernel ou executar os módulos Python leves chamados filamentos.
(https://github.com/evilsocket/opensnitch) - OpenSnitch é uma porta GNU/Linux do firewall do aplicativo Little Snitch

- [wazuh](https://github.com/wazuh/wazuh) - Wazuh é uma plataforma livre e de código aberto usada para prevenção, detecção e resposta de ameaças. É capaz de monitorar as alterações do sistema de arquivos, chamadas do sistema e alterações de inventário.
- [Matano](https://github.com/matanolabs/matano) - Plataforma de lago de segurança sem servidor aberto no AWS que permite ingerir, armazenar e analisar petabytes de dados de segurança em um lago de dados Apache Iceberg e executar detecçãos Python em tempo real como código.
- [Falco](https://falco.org/) - O projeto de segurança de runtime nativo na nuvem e de fato o mecanismo de detecção de ameaças Kubernetes agora fazem parte do CNCF.
- [VAST](https://github.com/tenzir/vast) - Motor de pipeline de dados de segurança de código aberto para dados de eventos estruturados, apoiando a ingestão de telemetria de alto volume, compactação e recuperação; construído para execução de conteúdo de segurança, caça guiada e investigação em larga escala.
- [Substation](https://github.com/brexhq/substation) - Substation é um pipeline de dados nativos na nuvem e toolkit de transformação escrito em Go.

IDS / IPS / IDS do anfitrião / IPS do anfitrião

- [Snort](https://www.snort.org/) - Snort é um sistema de prevenção de intrusões de rede livre e de código aberto (NIPS) e de detecção de intrusões de rede (NIDS) criado por Martin Roesch em 1998. Snort é agora desenvolvido pelo Sourcefire, do qual Roesch é o fundador e CTO. Em 2009, Snort entrou no Open Source Hall of Fame do InfoWorld como um dos melhores softwares de código aberto de todos os tempos.
- [Zeek](https://zeek.org/) - Zeek é um poderoso framework de análise de rede que é muito diferente do IDS típico que você pode conhecer.
- [zeek2es](https://github.com/corelight/zeek2es) - Uma ferramenta de código aberto para converter registros Zeek para Elastic/OpenSearch. Você também pode produzir o JSON puro dos registros de TSV do Zeek!
- [DrKeithJones.com](https://drkeithjones.com) - Um blog sobre segurança cibernética e monitoramento de segurança de rede.
- [OSSEC](https://ossec.github.io/) - Um código aberto abrangente. Não para os fracos de coração. É preciso um pouco para perceber como funciona. Realiza análise de log, verificação de integridade do arquivo, monitoramento de políticas, detecção de rootkit, alerta em tempo real e resposta ativa. Ele é executado na maioria dos sistemas operacionais, incluindo Linux, MacOS, Solaris, HP-UX, AIX e Windows. Muita documentação razoável. Mancha doce é média a grande implantação.

- [Suricata](http://suricata-ids.org/) - Suricata é um motor de monitoramento de alta performance de rede IDS, IPS e Segurança de Rede. Open Source e propriedade de uma fundação sem fins lucrativos da comunidade, a Open Information Security Foundation (OISF). A Suricata é desenvolvida pela OISF e seus fornecedores de apoio.
- [Security Onion](http://blog.securityonion.net/) - Security Onion é um distro Linux para detecção de intrusões, monitoramento de segurança de rede e gerenciamento de logs. É baseado no Ubuntu e contém Snort, Suricata, Zeek, OSSEC, Sguil, Squert, Snorby, ELSA, Xplico, NetworkMiner e muitas outras ferramentas de segurança. O assistente de configuração fácil de usar permite que você construa um exército de sensores distribuídos para sua empresa em minutos!
(https://github.com/marshyski/sshwatch) - IPS para SSH semelhante ao DenyHosts escrito em Python. Ele também pode coletar informações sobre o atacante durante o ataque em um registro.
(https://fbb-git.gitlab.io/stealth/) - Verificador de integridade que deixa praticamente nenhum sedimento. Controller corre de outra máquina, o que torna difícil para um atacante saber que o sistema de arquivos está sendo verificado em intervalos pseudo aleatórios definidos sobre SSH. Altamente recomendado para pequenas e médias implantações.
- [AIEngine](https://bitbucket.org/camp0/aiengine) - AIEngine é um motor de inspeção de pacotes de próxima geração interativo/programado Python/Ruby/Java/Lua com capacidades de aprendizagem sem qualquer intervenção humana, funcionalidade NIDS(Network Intrusion Detection System), classificação de domínio DNS, coletor de rede, forenses de rede e muitos outros.
- [Denyhosts](http://denyhosts.sourceforge.net/) - Ataques baseados no dicionário Thwart SSH e ataques de força bruta.
- [Fail2Ban](http://www.fail2ban.org/wiki/index.php/Main_Page) - Analisa arquivos de registro e toma medidas em IPs que mostram comportamento malicioso.
- [SSHGuard](http://www.sshguard.net/) - Um software para proteger os serviços para além do SSH, escrito em C
- [Lynis](https://cisophy.com/lynis/) - uma ferramenta de auditoria de segurança de código aberto para Linux/Unix.

- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - CrowdSec é um mecanismo de detecção de comportamento livre, moderno e colaborativo, juntamente com uma rede global de reputação IP. Ele empilha na filosofia de Fail2Ban, mas é compatível com IPV6 e 60x mais rápido (Go vs Python), usa padrões Grok para analisar logs e cenário YAML para identificar comportamentos. A CrowdSec é projetada para modernas infraestruturas baseadas em Cloud / Containers / VM (desacoplando detecção e remediação). Uma vez detectada, você pode corrigir ameaças com vários seguranças (firewall block, nginx http 403, Captchas, etc.) enquanto os IPs agressivos podem ser enviados para CrowdSec para curadoria antes de serem compartilhados entre todos os usuários para fortalecer ainda mais a comunidade
- [wazuh](https://github.com/wazuh/wazuh) - Wazuh é uma plataforma XDR livre e de código aberto usada para prevenção, detecção e resposta de ameaças. É capaz de proteger cargas de trabalho em ambientes locais, virtualizados, containerizados e baseados em nuvem. Grande ferramenta foor todo o tipo de implantações, que inclui capacidades SIEM (indexando + pesquisa + WUI).

Pote de mel

A lista canónica de honeypots.
- [HoneyPy](https://github.com/foospidy/HoneyPy) - HoneyPy é um honeypot de baixa a média interação. Pretende-se ser fácil de: implantar, estender a funcionalidade com plugins e aplicar configurações personalizadas.
- [Conpot](http://conpot.org/) - ICS/SCADA Honeypot. O Conpot é um honeypot de baixa interação do lado do servidor Industrial Control Systems projetado para ser fácil de implantar, modificar e estender. Ao fornecer uma gama de protocolos de controle industrial comuns, criamos os fundamentos para construir seu próprio sistema, capaz de emular infraestruturas complexas para convencer um adversário de que ele acabou de encontrar um enorme complexo industrial. Para melhorar as capacidades enganosas, nós também fornecemos a possibilidade de servidor uma interface de máquina humana personalizada para aumentar a superfície de ataque honeypots. Os tempos de resposta dos serviços podem ser artificialmente atrasados para imitar o comportamento de um sistema sob carga constante. Como estamos fornecendo pilhas completas dos protocolos, o Conpot pode ser acessado com HMI produtivo ou estendido com hardware real. Conpot é desenvolvido sob o guarda-chuva do Projeto Honeynet e sobre os ombros de um par de gigantes muito grandes.
- [Amun](https://github.com/zeroq/amun) - Honeypot de baixa interação baseado em Python.

- [Glastopf](http://glastopf.org/) - Glastopf é um honeypot que emula milhares de vulnerabilidades para coletar dados de ataques que visam aplicações web. O princípio subjacente é muito simples: responder corretamente ao atacante que explora a aplicação web.
- [Kippo](https://github.com/desaster/kippo) - Kippo é um honeypot de interação média SSH projetado para registrar ataques de força bruta e, mais importante, toda a interação de shell realizada pelo atacante.
- [Kojoney](http://kojoney.sourceforge.net/) - Kojoney é um honeypot de baixa interação que emula um servidor SSH. O daemon é escrito em Python usando as bibliotecas Twisted Conch. HonSSH é uma solução honeypot de alta interação. HonSSH se posiciona entre um atacante e um honeypot, criando duas conexões SSH separadas entre eles.
- [Bifrozt](http://sourceforge.net/projects/bifrozt/) - Bifrozt é um dispositivo NAT com um servidor DHCP que geralmente é implantado com uma NIC conectada diretamente à Internet e uma NIC conectada à rede interna. O que diferencia o Bifrozt de outros dispositivos padrão NAT é sua capacidade de funcionar como um proxy SSHv2 transparente entre um atacante e seu honeypot. Se você implantou um servidor SSH na rede interna do Bifrozt, ele registraria toda a interação com um arquivo TTY em texto simples que poderia ser visualizado posteriormente e capturaria uma cópia de qualquer arquivo que fosse baixado. Você não precisaria instalar nenhum software adicional, compilar módulos do kernel ou usar uma versão específica ou tipo de sistema operacional no servidor SSH interno para que isso funcione. Ele limitará o tráfego de saída a um número definido de portas e começará a soltar pacotes de saída nessas portas quando certos limites forem ultrapassados.

HoneyDrive é o principal distribuidor Linux honeypot. É um aparelho virtual (OVA) com Xubuntu Desktop 12.04.4 Edição LTS instalada. Ele contém mais de 10 pacotes de software de honeypot pré-instalados e pré-configurados, como o honeypot Kippo SSH, o honeypot Dionaea e Amun malware, honeypot Honeyd de baixa interação, honeypot Glastopf web e Wordpot, o honeypot Conpot SCADA/ICS, os honeyclients Thug e PhoneyC e muito mais. Além disso, inclui muitos scripts e utilitários pré-configurados úteis para analisar, visualizar e processar os dados que pode capturar, como Kippo-Graph, Honeyd-Viz, DionaeaFR, uma pilha ELK e muito mais. Por fim, quase 90 bem conhecidas análises de malware, forenses e ferramentas relacionadas ao monitoramento de rede também estão presentes na distribuição.
- [Cuckoo Sandbox](http://www.cuckoosandbox.org/) - Cuckoo Sandbox é um software Open Source para automatizar a análise de arquivos suspeitos. Para fazer isso, ele faz uso de componentes personalizados que monitoram o comportamento dos processos maliciosos durante a execução em um ambiente isolado.
- [T-Pot Honeypot Distro](http://dtag-dev-sec.github.io/mediator/feature/2017/11/07/t-pot-17.10.html) - T-Pot é baseado no instalador de rede do Ubuntu Server 16/17.x LTS. Os daemons honeypot, bem como outros componentes de suporte que estão sendo usados foram containerizados usando docker. Isso nos permite executar vários daemons honeypot na mesma interface de rede, mantendo uma pequena pegada e restringindo cada honeypot dentro de seu próprio ambiente. Instalação sobre baunilha Ubuntu - [T-Pot Autoinstall](https://github.com/dtag-dev-sec/t-pot-autoinstall) - Este script irá instalar T-Pot 16.04/17.10 em um Ubuntu 16.04.x LTS fresco (64bit). É destinado a ser usado em servidores hospedados, onde uma imagem base do Ubuntu é dada e não há capacidade de instalar imagens ISO personalizadas. Testado com sucesso em baunilha Ubuntu 16.04.3 em VMware.

Captura completa de pacotes / Forense

- [tcpflow](https://github.com/simsong/tcpflow) - tcpflow é um programa que captura dados transmitidos como parte de conexões TCP (fluxos), e armazena os dados de uma forma conveniente para análise de protocolo e depuração. Cada fluxo TCP é armazenado em seu próprio arquivo. Assim, o fluxo TCP típico será armazenado em dois arquivos, um para cada direção. tcpflow também pode processar fluxos de pacotes 'tcpdump' armazenados.

- [Deepfence PacketStreamer](https://github.com/deepfence/PacketStreamer) - Ferramenta de captura e coleta de pacotes remotos de alto desempenho, distribuído tcpdump para ambientes nativos de nuvem.
- [Xplico](http://www.xplico.org/) - O objectivo do Xplico é extrair de um tráfego na Internet os dados contidos nas aplicações. Por exemplo, a partir de um arquivo pcap Xplico extrai cada e-mail (protocolos POP, IMAP e SMTP), todos os conteúdos HTTP, cada chamada VoIP (SIP), FTP, TFTP, e assim por diante. Xplico não é um analisador de protocolo de rede. Xplico é uma ferramenta de análise forense de rede de código aberto (NFAT).
- [Moloch](https://github.com/aol/moloch) - Moloch é um sistema de código aberto, captura de pacotes IPv4 em larga escala (PCAP), indexação e sistema de banco de dados. Uma interface web simples é fornecida para navegação PCAP, pesquisa e exportação. APIs são expostas que permitem que dados de PCAP e dados de sessão formatados por JSON sejam baixados diretamente. A segurança simples é implementada usando HTTPS e HTTP digest password support ou usando apache na frente. Moloch não é destinado a substituir motores IDS, mas em vez disso trabalhar ao lado deles para armazenar e indexar todo o tráfego de rede no formato PCAP padrão, proporcionando acesso rápido. Moloch é construído para ser implantado em muitos sistemas e pode escalar para lidar com múltiplos gigabits/seg de tráfego.
- [OpenFPC](http://www.openfpc.org) - OpenFPC é um conjunto de ferramentas que se combinam para fornecer um gravador de tráfego de rede leve e sistema de buffering. Seu objetivo de design é permitir que usuários não especialistas implantem um gravador de tráfego de rede distribuído no hardware COTS enquanto integram as ferramentas de gerenciamento de alerta e log existentes.
- [Dshell](https://github.com/USArmyResearchLab/Dshell) - Dshell é uma estrutura de análise forense de rede. Permite o desenvolvimento rápido de plugins para suportar a dissecção de capturas de pacotes de rede.
- [stenographer](https://github.com/google/stenographer) - Stenographer é uma solução de captura de pacotes que tem como objetivo transferir rapidamente todos os pacotes para o disco, em seguida, fornecer acesso simples e rápido a subconjuntos desses pacotes.

Sniffer

- [wireshark](https://www.wireshark.org) - Wireshark é um analisador de pacotes gratuito e de código aberto. Ele é utilizado para resolver problemas de rede, análise, desenvolvimento de protocolos de software, comunicações e educação. Wireshark é muito parecido com o tcpdump, mas possui uma interface gráfica, além de algumas opções integradas de classificação e filtragem.

- [netsniff-ng](http://netsniff-ng.org/) - netsniff-ng é um kit de ferramentas de rede Linux gratuito, um canivete suíço para o seu encanamento diário da rede Linux, se preferir. Seu ganho de desempenho é alcançado por mecanismos de cópia zero, de modo que na recepção e transmissão de pacotes o kernel não precisa copiar pacotes do espaço do kernel para o espaço do usuário e vice-versa.
(https://addons.mozilla.org/en-US/firefox/addon/http-header-live/) - Live HTTP headers é um addon firefox livre para ver as solicitações do seu navegador em tempo real. Ele mostra os cabeçalhos inteiros das solicitações e pode ser usado para encontrar as lacunas de segurança em implementações.

## # Gestão de informações e eventos de segurança

- [Prelude](https://www.prelude-siem.org/) - Prelude é um sistema universal "Security Information & Event Management" (SIEM). Prelude coleta, normaliza, classifica, agrega, correlaciona e reporta todos os eventos relacionados à segurança independentemente da marca do produto ou licença que dão origem a tais eventos; Prelude é "inagente".
- [OSSIM](https://www.alienvault.com/open-threat-exchange/projects) - A OSSIM fornece todas as características que um profissional de segurança precisa de uma oferta SIEM - recolha de eventos, normalização e correlação.
- [FIR](https://github.com/certsocietegenerale/FIR) - Resposta rápida a incidentes, uma plataforma de gestão de incidentes de segurança cibernética.
- [LogoESP](https://github.com/dogoncouch/LogoESP) - Open Source SIEM (Sistema de Informação de Segurança e Gestão de Eventos).
- [wazuh](https://github.com/wazuh/wazuh) - Wazuh é uma solução de monitoramento de segurança livre, de código aberto e pronto para empresas para detecção de ameaças, monitoramento de integridade, resposta a incidentes e conformidade. Ele funciona com toneladas de dados suportados por um garfo OpenSearch e WUI personalizado.
- [VAST](https://github.com/tenzir/vast) - Motor de pipeline de dados de segurança de código aberto para dados de eventos estruturados, apoiando a ingestão de telemetria de alto volume, compactação e recuperação; construído para execução de conteúdo de segurança, caça guiada e investigação em larga escala.
- [Matano](https://github.com/matanolabs/matano) - Plataforma de lago de segurança sem servidor de código aberto no AWS que permite ingerir, armazenar e analisar petabytes de dados de segurança em um lago de dados Apache Iceberg e executar detecçãos Python em tempo real como código.

VPN

- [OpenVPN](https://openvpn.net/) - OpenVPN é um aplicativo de software de código aberto que implementa técnicas de rede privada virtual (VPN) para criar conexões ponto-a-ponto seguras ou site-a-site em configurações roteadas ou ponteadas e instalações de acesso remoto. Ele usa um protocolo de segurança personalizado que utiliza SSL/TLS para troca de chaves.
- [Firezone](https://github.com/firezone/firezone) - Servidor VPN de código aberto e firewall de saída para Linux construído no WireGuard que torna simples gerenciar acesso remoto seguro às redes privadas da sua empresa. Firezone é fácil de configurar (todas as dependências são empacotadas graças ao Chef Omnibus), seguro, performante e self hostable.

Processamento rápido de pacotes

(http://dpdk.org/) - DPDK é um conjunto de bibliotecas e drivers para processamento rápido de pacotes.
- [PFQ](https://github.com/pfq/PFQ) - PFQ é um framework de rede funcional projetado para o sistema operacional Linux que permite a captura/transmissão de pacotes eficientes (10G e além), processamento funcional in-kernel e gerenciamento de pacotes através de sockets/end-points.
- [PF_RING](http://www.ntop.org/products/packet-capture/pf_ring/) - PF_RING é um novo tipo de soquete de rede que melhora drasticamente a velocidade de captura de pacotes.
- [PF_RING ZC (Zero Copy)](http://www.ntop.org/products/packet-capture/pf_ring/pf_ring-zc-zero-copy/) - PF_RING ZC (Zero Copy) é um framework de processamento de pacotes flexível que permite alcançar 1/10 Gbit linha taxa de processamento de pacotes (tanto RX e TX) em qualquer tamanho de pacote. Implementa operações de cópia zero, incluindo padrões para comunicações inter-processo e inter-VM (KVM).
- [PACKET_MMAP/TPACKET/AF_PACKET](https://elixir.bootlin.com/linux/latest/source/Documentation/networking/packet_mmap.rst) É bom usar PACKET. MMAP para melhorar o desempenho do processo de captura e transmissão no Linux.
- [netmap](http://info.iet.unipi.it/~luigi/netmap/) - netmap é uma estrutura para o pacote de alta velocidade I/O. Juntamente com seu switch de software VALE, ele é implementado como um único módulo do kernel e disponível para o FreeBSD, Linux e agora também Windows.

Firewall

- [pfSense](https://www.pfsense.org/) - Distribuição de Firewall e Roteador baseada em FreeBSD.

- [OPNsense](https://opnsense.org/) - é uma plataforma de firewall e roteamento baseada em FreeBSD. OPNsense inclui a maioria dos recursos disponíveis em firewalls comerciais caros, e em muitos casos, ainda oferece mais. Traz um rico conjunto de funcionalidades comerciais com os benefícios de ser uma solução de código aberto e verificável.
- [fwknop](https://www.cifherdyne.org/fwknop/) - Protege portas por meio de Autorização de Pacote Único em seu firewall.

# # Anti-Spam

(https://github.com/spamscanner) - Serviço de Escaneamento Anti-Spam e API Anti-Spam por [@niftylettuce](https://github.com/niftylettuce).  
(https://github.com/rspamd/rspamd) - Sistema de filtragem de spam rápido, gratuito e de código aberto.  
- [SpamAssassin](https://spamassassin.apache.org/) - Um poderoso e popular filtro de spam de e-mail que utiliza uma variedade de técnicas de detecção.  
- [Scammer-List](https://scammerlist.now.sh/) - Um buscador de fraudes e spam baseado em IA, de código aberto, com uma API gratuita.

## # Imagens de Docker para testes de penetração e segurança

- «docker pull kalilinux/kali-linux-docker» (https://hub.docker.com/r/kalilinux/kali-linux-docker/)
- «docker pull owasp/zap2docker-stable» (https://github.com/zaproxy/zaproxy)
- `docker pull wpscanteam/wpscan` - [WPScan oficial](https://hub.docker.com/r/wpscanteam/wpscan/)
- `docker pull remnux/metasploit` - [docker-metasploit](https://hub.docker.com/r/remnux/metasploit/)
- `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
- `docker pull wpscanteam/vulnerablewordpress` - [Instalação Vulnerável do WordPress](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
- `docker pull hmlio/vaas-cve-2014-6271` - [Vulnerabilidade como serviço: Shellshock](https://hub.docker.com/r/hmlio/vaas-cve-2014-6271/)
- `docker pull hmlio/vaas-cve-2014-0160` - [Vulnerabilidade como serviço: Hemorragia cardíaca](https://hub.docker.com/r/hmlio/vaas-cve-2014-0160/)
- `docker pull opendns/security-ninjas` - [Security Ninjas](https://hub.docker.com/r/opendns/security-ninjas/)
- `docker pull diogomonica/docker-bench-security` - [Docker Bench for Security](https://hub.docker.com/r/diogomonica/docker-bench-security/)
[WASP Security Shepherd](https://hub.docker.com/r/ismisepaul/securityshepherd/)
- [Imagem do projeto OWASP WebGoat](https://hub.docker.com/r/danmx/docker-owasp-owasp-webgoat/)

- `docker-compose build && docker-compose up` - [OWASP NodeGoat](https://github.com/owasp/nodegoat#option-3--run-nodegoat-on-docker)
- 'docker pull citizenstig/nowasp' - [OWASP Mutillidae II Web Pen-Test Practice Application](https://hub.docker.com/r/citizenstig/nowasp/)
- «docker pull bkimminich/juice-shop» (https://hub.docker.com/r/bkimminich/juice-shop)
- `docker pull jeroenwillemsen/wrongsecrets`- [OWASP WrongSecrets](https://hub.docker.com/r/jeroenwillemsen/wrongsecrets)
- `docker run -dit --name trd -p 8081:80 cylabs/cy-threat-response` - [Cyware Threat Response Docker](https://hub.docker.com/r/cylabs/cy-threat-response)
- Docker-compose -d up - [cicd-boat](https://github.com/cider-security-research/cicd-boat)

Ponto final

Anti-vírus / Anti-Malware

- [Fastfinder](https://github.com/codeyourweb/fastfinder) - Pesquisador de arquivos suspeito rápido customizável entre plataformas. Suporta hashs md5/sha1/sha256, cadeias litteral/wildcard, expressões regulares e regras YARA. Pode ser facilmente embalado para ser implantado em qualquer host windows / linux.
- [Linux Malware Detect](https://www.rfxn.com/projects/linux-malware-detect/) - Um scanner de malware para Linux projetado em torno das ameaças enfrentadas em ambientes hospedados compartilhados.
- [LOKI](https://github.com/Neo23x0/Loki) - Indicadores simples de comprometimento e scanner de resposta a incidentes
Um Caçador de Rootkit para Linux
- [ClamAv](http://www.clamav.net/) - ClamAV® é um mecanismo antivírus de código aberto para detectar Trojans, vírus, malware e outras ameaças maliciosas.

## # Conteúdo Desarmar & Reconstruir

- [DocBleach](https://github.com/docbleach/DocBleach) - Um software de saneamento de software de código aberto Disarm & Reconstruction Office, PDF e RTF Documents.

Gestão de Configuração

- [Gestão de dispositivos Fleet](https://github.com/fleetdm/fleet) - Fleet é a plataforma de telemetria leve e programável para servidores e estações de trabalho. Obtenha dados abrangentes e personalizáveis de todos os seus dispositivos e sistemas operacionais.

- [Rudder](http://www.rudder-project.org/) - O leme é uma solução fácil de usar, orientada para a web, baseada em funções para a automação e conformidade de infraestrutura de TI. Automatizar tarefas comuns de administração do sistema (instalação, configuração); Forçar a configuração ao longo do tempo (configurar uma vez é bom, garantindo que a configuração é válida e automaticamente corrigi-la é melhor); Inventário de todos os nós gerenciados; Interface Web para configurar e gerenciar nós e sua configuração; Relatório de conformidade, por configuração e/ou por nó.

Autenticação

- [google-authenticator](https://github.com/google/google-authenticator) - O projeto do Google Autenticator inclui implementações de geradores de código de acesso único para várias plataformas móveis, bem como um módulo de autenticação plugável (PAM). Códigos de acesso únicos são gerados usando padrões abertos desenvolvidos pela Iniciativa para Autenticação Aberta (OATH) (que não tem relação com OAuth). Essas implementações suportam o algoritmo HMAC-Based One-Time Password (HOTP) especificado em RFC 4226 e o algoritmo Time-based One-Time Password (TOTP) especificado em RFC 6238. [Tutoriais: Como configurar a autenticação de dois fatores para o login do SSH no Linux](http://xmodulo.com/two-factor-autentication-ssh-login-linux.html)
- [Stegcloak](https://github.com/kurolabs/stegcloak) - Atribuir com segurança a Autenticidade Digital a qualquer texto escrito

## Móvel / Android / iOS

- [android-security-awesome](https://github.com/ashishb/android-security-awesome) - Uma colecção de recursos relacionados com a segurança android. Muito trabalho está acontecendo na academia e indústria em ferramentas para realizar análise dinâmica, análise estática e engenharia reversa de aplicativos android.
- [SecMobi Wiki](http://wiki.secmobi.com/) - Uma coleção de recursos de segurança móvel que incluem artigos, blogs, livros, grupos, projetos, ferramentas e conferências. *
- [OWASP Mobile Security Testing Guide](https://github.com/OWASP/owasp-mstg) - Um manual abrangente para testes de segurança de aplicativos móveis e engenharia reversa.
- [OSX Security Awesome](https://github.com/kai5263499/osx-security-awesome) - Uma coleção de recursos de segurança OSX e iOS
- [Themis](https://github.com/cossacklabs/themis) - Framework criptográfico multiplataforma de alto nível para proteger dados sensíveis: mensagens seguras com sigilo de encaminhamento e armazenamento seguro de dados (AES256GCM), fatos para a construção de aplicações criptografadas de ponta a ponta.
- [Mobile Security Wiki](https://mobilesecuritywiki.com/) - Uma coleção de recursos de segurança móvel.

- [Apktool](https://github.com/iBotPeaches/Apktool) - Uma ferramenta para engenharia reversa de arquivos Android apk.
- [jadx](https://github.com/skylot/jadx) - Linha de comando e ferramentas GUI para produzir código fonte Java a partir de arquivos Android Dex e Apk.
- [enjarify](https://github.com/Storyyeller/enjarify) - Uma ferramenta para traduzir o bytes Dalvik para código Java equivalente.
- [Android Storage Extractor](https://github.com/51j0/Android-Storage-Extractor) - Uma ferramenta para extrair o armazenamento local de dados de um aplicativo Android em um clique.
- [Quark-Engine](https://github.com/quark-engine/quark-engine) - Um Sistema de Pontuação de Malware para Android Neglescing.
- [dotPeek](https://www.jetbrains.com/decompiler/) - Ferramenta independente gratuita baseada no descompilador empacotado da ReSharper.
- [hardened_malloc](https://github.com/GrapheneOS/hardened_malloc) - Alocador endurecido projetado para sistemas modernos. Ele tem integração na libc Bionic do Android e pode ser usado externamente com musl e glibc como uma biblioteca dinâmica para uso em outras plataformas baseadas em Linux. Ele vai ganhar mais portabilidade / integração ao longo do tempo.
- [AMExtractor](https://github.com/ir193/AMExtractor) - O AMExtractor pode descarregar o conteúdo físico do seu dispositivo Android mesmo sem código fonte do kernel.
- [frida](https://github.com/frida/frida) - Conjunto de ferramentas de instrumentação dinâmica para desenvolvedores, engenharia reversa e pesquisadores de segurança.
- [UDcide](https://github.com/UDcide/udcide) - Android Malware Behavior Editor.
(https://github.com/ptswarm/reFlutter) - Flutter Reverse Engineering Framework

Forense

- [grr](https://github.com/google/grr) - GRR Rapid Response é uma estrutura de resposta a incidentes focada em forenses remotas.
- [Volatilidade](https://github.com/volatilidadefoundation/volatilidade) - Framework de análise e extração de memória baseado em Python.
- [mig](http://mig.mozilla.org/) - O MIG é uma plataforma para realizar cirurgias de investigação em terminais remotos. Permite aos investigadores obter informações de um grande número de sistemas em paralelo, acelerando assim a investigação de incidentes e a segurança das operações diárias.
- [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - *ir-rescue* é um script do Windows Batch e um script do Unix Bash para coletar dados forenses durante a resposta incidente.
- [Logdissect](https://github.com/dogoncouch/logdissect) - Utilitário CLI e API Python para análise de arquivos de log e outros dados.

- [Meerkat](https://github.com/TonyPhipps/Meerkat) - Colecção de artefatos do Windows baseada em PowerShell para caça a ameaças e resposta a incidentes.
- [Rekall](https://github.com/google/rekall) - O Rekall Framework é uma coleção completamente aberta de ferramentas, implementada em Python sob a Licença Pública Geral Apache e GNU, para a extração e análise de artefatos digitais sistemas de computador.
- [LiME](https://github.com/504ensicsLabs/LiME.git) - Extractor de Memória Linux
- [Maigret](https://github.com/soxoj/maigret) - Maigret recolhe um dossier apenas sobre uma pessoa por nome de utilizador, verificando se há contas num grande número de sítios e recolhendo todas as informações disponíveis nas páginas Web.

# # Inteligência de Ameaça

- [abuse.ch](https://www.abuse.ch/) - ZeuS Tracker / SpyEye Tracker / Palevo Tracker / Feodo Tracker rastreia servidores de comando e controle (hosts) ao redor do mundo e fornece um domínio e uma lista de bloqueios IP. (https://cyware.com/community/ctix-feeds) Os feeds de inteligência trazem para você dados valiosos sobre ameaças de uma ampla gama de fontes abertas e confiáveis, proporcionando um fluxo consolidado de informações sobre ameaças que são valiosas e acionáveis. Nossos feeds de informações sobre ameaças são totalmente compatíveis com STIX 1.x e 2.0, oferecendo as últimas informações sobre hashes de malware malicioso, IPs e domínios descobertos em tempo real em todo o mundo.

- [Emerging Threats - Open Source](http://doc.emergingthreats.net/bin/view/Main/EmergingFAQ) - Ameaças emergentes começaram há 10 anos como uma comunidade de código aberto para coletar regras Suricata e SNORT®, regras de firewall e outros conjuntos de regras IDS. A comunidade de código aberto ainda desempenha um papel ativo na segurança da Internet, com mais de 200.000 usuários ativos baixando o conjunto de regras diariamente. O ETOpen Ruleset está disponível para qualquer usuário ou organização, desde que você siga algumas diretrizes básicas. Nosso ETOpen Ruleset pode ser baixado a qualquer momento.

- [PhishTank](http://www.phishtank.com/) - PhishTank é uma câmara de compensação colaborativa para dados e informações sobre phishing na Internet. Além disso, o PhishTank fornece uma API aberta para que desenvolvedores e pesquisadores integrem dados anti-phishing em suas aplicações sem custo.

- [SBL / XBL / PBL / DBL / DROP / ROKSO](http://www.spamhaus.org/) - O Projeto Spamhaus é uma organização internacional sem fins lucrativos cuja missão é rastrear as operações e fontes de spam da Internet, fornecer proteção antispam confiável em tempo real para redes de Internet, trabalhar com agências de aplicação da lei para identificar e perseguir gangues de spam e malware em todo o mundo, e pressionar governos para uma legislação antispam eficaz.
- [Internet Storm Center](https://www.dshield.org/reports.html) - O ISC foi criado em 2001 após o sucesso da detecção, análise e aviso generalizado do worm Li0n. Hoje, o ISC fornece um serviço gratuito de análise e aviso para milhares de usuários e organizações de Internet, e está trabalhando ativamente com provedores de serviços de Internet para lutar contra os atacantes mais maliciosos.
- [AutoShun](https://www.autoshun.org/) - AutoShun é um plugin Snort que lhe permite enviar o seu Snort IDS logs para um servidor centralizado que irá correlacionar ataques de seus registros de sensores com outros sensores de snort, honeypots e filtros de e-mail de todo o mundo.
- [DNS-BH](http://www.malwaredomains.com/) - O projeto DNS-BH cria e mantém uma lista de domínios que são conhecidos por serem usados para propagar malware e spyware. Este projeto cria os arquivos Bind e Windows zona necessários para servir respostas falsas para localhost para quaisquer pedidos para estes, evitando assim muitas instalações de spyware e relatórios.
(http://www.alienvault.com/open-threat-exchange/dashboard) - AlienVault Open Threat Exchange (OTX), para ajudá-lo a proteger suas redes de perda de dados, interrupção de serviço e compromisso do sistema causado por endereços IP maliciosos.
- [Tor Bulk Exit List](https://metrics.torproject.org/collector.html) - CollecTor, o seu serviço de recolha de dados na rede Tor. Collec Tor obtém dados de vários nós e serviços no público Tor rede e torna-o disponível para o mundo. Se você está fazendo pesquisa na rede Tor, ou se você está desenvolvendo uma aplicação que usa Tor dados de rede, este é o seu lugar para começar. [TOR Node List](https://www.dan.me.uk/tornodes) / [DNS Blacklists](https://www.dan.me.uk/dnsbl) / [Tor Node List](http://torstatus.blutmagie.de/)
- [leakedin.com](http://www.leakedin.com/) - O principal objectivo do vazeedin.com é sensibilizar os visitantes para os riscos de perda de dados. Este blog apenas compila amostras de dados perdidos ou divulgados em sites como patebin.com.

- [FireEye OpenIOCs](https://github.com/fireeye/iocs) - FireEye Publicly Shared Indicators of Compromise (IOCs)
- [OpenVAS NVT Feed](http://www.openvas.org/openvas-nvt-feed.html) - O feed público dos Testes de Vulnerabilidade em Rede (NVTs). Ele contém mais de 35.000 NVTs (a partir de abril de 2014), crescendo diariamente. Este feed está configurado como o padrão para OpenVAS.
- [Project Honey Pot](http://www.projecthoneypot.org/) - Projeto Querida Pot é o primeiro e único sistema distribuído para identificar spammers e os spambots que eles usam para raspar endereços de seu site. Usando o sistema Project Honey Pot, você pode instalar endereços que são marcados à hora e endereço IP de um visitante para o seu site. Se um desses endereços começa a receber e-mail, não só podemos dizer que as mensagens são spam, mas também o momento exato em que o endereço foi colhido e o endereço IP que o reuniu.
- [virustotal](https://www.virustotal.com/) - VirusTotal, uma subsidiária do Google, é um serviço online gratuito que analisa arquivos e URLs permitindo a identificação de vírus, worms, trojans e outros tipos de conteúdo malicioso detectado por motores antivírus e scanners de site. Ao mesmo tempo, pode ser usado como um meio para detectar falsos positivos, ou seja, recursos inócuos detectados como maliciosos por um ou mais scanners.
- [IntelMQ](https://github.com/certtools/intelmq/) - IntelMQ é uma solução para CERTs para coleta e processamento de feeds de segurança, pastebins, tweets usando um protocolo de fila de mensagens. Trata-se de uma iniciativa comunitária chamada IHAP (Incident Handling Automation Project), concebida conceptualmente pelos CERTs europeus durante vários eventos da InfoSec. Seu principal objetivo é dar aos respondedores de incidentes uma maneira fácil de coletar e processar informações sobre ameaças, melhorando assim os processos de manuseio de incidentes de CERTs. [ENSIA Homepage](https://www.enisa.europa.eu/activities/cert/support/incident-handling-automation).
- [CIFv2](https://github.com/csirtgadgets/massive-octo-spice) - CIF é um sistema de gestão de informações sobre ameaças cibernéticas. CIF permite combinar informações conhecidas de ameaças maliciosas de muitas fontes e usar essas informações para identificação (resposta incidente), detecção (IDS) e mitigação (rota null).

- [MISP - Open Source Threat Intelligence Platform](https://www.misp-project.org/) - A plataforma de compartilhamento de ameaças MISP é um software livre e de código aberto que ajuda o compartilhamento de informações de inteligência de ameaças, incluindo indicadores de segurança cibernética. Uma plataforma de informações sobre ameaças para recolher, partilhar, armazenar e correlacionar indicadores de compromisso de ataques específicos, informações sobre ameaças, informações sobre fraude financeira, informações sobre vulnerabilidade ou mesmo informações sobre contra-terrorismo. O projeto MISP inclui software, bibliotecas comuns ([taxonomias](https://www.misp-project.org/taxonomias.html), [ameaça-atores e vários malwares](https://www.misp-project.org/galaxy.html), um extenso modelo de dados para compartilhar novas informações usando [objects](https://www.misp-project.org/objects.html) e padrão [feeds](https://www.misp-project.org/feeds/).
- [PhishStats](https://phishstats.info/) - Estatísticas de Phishing com pesquisa de IP, domínio e título do site.
- [Threat Jammer](https://threatjammer.com) - Serviço de API REST que permite aos desenvolvedores, engenheiros de segurança e outros profissionais de TI acessar dados de inteligência de ameaças curados de uma variedade de fontes.
- [Cyberowl](https://github.com/karimbabush/cyberowl) - Um resumo actualizado diário dos tipos mais frequentes de incidentes de segurança que actualmente são comunicados de diferentes fontes.

# # Engenharia Social

- [Gophish](https://getgophish.com/) - Um Framework de Phishing Open-Source.

# # Web

Organização

- [OWASP](http://www.owasp.org) - O Open Web Application Security Project (OWASP) é uma organização de caridade 501(c)(3) mundial sem fins lucrativos focada na melhoria da segurança do software.
- [Portswigger](https://portswigger.net) - PortSwigger oferece ferramentas para segurança da aplicação web, testes e digitalização. Escolha entre uma ampla gama de ferramentas de segurança e identifique as vulnerabilidades mais recentes.

## # Firewall de Aplicação Web

- [ModSecurity](http://www.modsecurity.org/) - ModSecurity é um kit de ferramentas para monitoramento de aplicações web em tempo real, registro e controle de acesso.
- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - BunkerWeb é um servidor web de código aberto completo com ModeSecurity WAF, HTTPS com renovação transparente Vamos criptografar, proibição automática de comportamentos estranhos com base em códigos HTTP, bot e bloqueio de IPs ruins, limites de conexão, presets de segurança de última geração, interface Web e muito mais.

- [NAXSI](https://github.com/nbs-system/naxsi) - NAXSI é um WAF de manutenção de código aberto, de alto desempenho e de baixas regras para NGINX, NAXSI significa Nginx Anti Xss & Sql Injection.
- [sql_firewall](https://github.com/uptimejp/sql_firewall) Extensão SQL Firewall para PostgreSQL
- [ironbee](https://github.com/ironbee/ironbee) - IronBee é um projeto de código aberto para construir um sensor de segurança universal para aplicações web. IronBee como um framework para desenvolver um sistema para garantir aplicações web - um framework para construir um firewall de aplicações web (WAF).
- [Curiefense](https://github.com/curiefense/curiefense) - Curiefense adiciona um amplo conjunto de ferramentas de segurança web automatizadas, incluindo uma WAF para Envoy Proxy.
- [open-appsec](https://github.com/openappsec/open-appsec) - open-appsec é um mecanismo de segurança de aprendizagem de máquina de código aberto que previne automaticamente ameaças contra aplicações e APIs Web.

Varrendo / Penteando

- [Spyse](https://spyse.com/) - A Spyse é um motor de busca OSINT que fornece novos dados sobre toda a web. Todos os dados são armazenados em seu próprio DB para acesso instantâneo e interligados entre si para busca flexível.
Dados fornecidos: hosts IPv4, sub/domínios/whois, portas/banners/protocolos, tecnologias, SO, AS, SSL/TLS DB amplo e muito mais.
- [sqlmap](http://sqlmap.org/) - sqlmap é uma ferramenta de teste de penetração de código aberto que automatiza o processo de detecção e exploração de falhas de injeção SQL e tomada de servidores de banco de dados. Ele vem com um poderoso mecanismo de detecção, muitas características de nicho para o testador de penetração final e uma ampla gama de switches que duram desde a impressão digital de banco de dados, sobre a coleta de dados do banco de dados, para acessar o sistema de arquivos subjacente e executar comandos no sistema operacional através de conexões fora de banda.
- [ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project) - O Zed Attack Proxy (ZAP) é uma ferramenta de teste de penetração integrada fácil de usar para encontrar vulnerabilidades em aplicações web. Ele é projetado para ser usado por pessoas com uma ampla gama de experiência de segurança e, como tal, é ideal para desenvolvedores e testadores funcionais que são novos em testes de penetração. O ZAP oferece scanners automatizados, bem como um conjunto de ferramentas que permitem que você encontre vulnerabilidades de segurança manualmente.

- [OWASP Testing Checklist v4](https://www.owasp.org/index.php/Testing_Checklist) - Lista de alguns controles para testar durante uma avaliação de vulnerabilidade da web. A versão Markdown pode ser encontrada [aqui](https://github.com/amocrenco/owasp-testing-checklist-v4-markdown/blob/master/README.md).
- [w3af](http://w3af.org/) - W3af é um Web Application Attack and Audit Framework. O objetivo do projeto é criar um framework para ajudá-lo a proteger seus aplicativos web, encontrando e explorando todas as vulnerabilidades de aplicativos web.
- [Recon-ng](https://github.com/lanmaster53/recon-ng) - Recon-ng é um framework completo de reconhecimento web escrito em Python. Recon-ng tem uma aparência e se sentir semelhante ao Metasploit Framework.
- [PTF](https://github.com/trustedsec/ptf) - O Framework de Testes de Penetração (PTF) é uma forma de suporte modular para ferramentas atualizadas.
- [Infection Monkey](https://github.com/guardicore/monkey) - Uma ferramenta semi-automática de teste de canetas para redes de mapeamento/teste de canetas. Simula um atacante humano.
(https://github.com/tijme/angularjs-csti-scanner) - ACSTIS ajuda você a digitalizar certas aplicações web para a injeção de modelo do lado do cliente AngularJS (às vezes referido como CSTI, sandbox escape ou sandbox bypass). Ele suporta a digitalização de uma única solicitação, mas também rastreamento de toda a aplicação web para a vulnerabilidade AngularJS CSTI.
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - padding-oracle-attacker é uma ferramenta e biblioteca CLI para executar ataques de oráculo de enchimento (que descodifica dados criptografados no modo CBC) facilmente, com suporte para solicitações de rede simultâneas e uma UI elegante.
- [is-website-vulnerable](https://github.com/lirantal/is-website-vulnerable) - encontra vulnerabilidades de segurança publicamente conhecidas nas bibliotecas JavaScript de um website.
- [PhpSploit](https://github.com/nil0x42/phpsploit) - Framework C2 completo que silenciosamente persiste no servidor web via mal PHP oneliner. Construído para persistência furtiva, com muitos privilégios-escalecimento e recursos pós-exploração.
- [Keyscope](https://github.com/SpectralOps/keyscope) - Keyscope é uma chave extensível e validação secreta para verificar segredos ativos contra vários fornecedores SaaS construídos em Rust
- [Cyclops](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking) - O Ciclope é um navegador web com recurso de detecção XSS, é a detecção xss baseada em cromo que costumava encontrar os fluxos de uma fonte para uma pia.

(https://github.com/marcinguy/scanmycode-ce) - Varredura de código/SAST/Análise estática/Linting usando muitas ferramentas/Scanners com um relatório. Atualmente suporta: PHP, Java, Scala, Python, Ruby, Javascript, GO, Escaneamento Secreto, Confusão de Dependência, Trojan Source, Open Source e Verificações de Propriedade (total ca. 1000 verificações)
- [recon](https://github.com/rusty-ferris-club/recon) - um CLI rápido baseado em Rust que usa SQL para consultar arquivos, código ou malware com classificação e processamento de conteúdo para especialistas em segurança
- [CakeFuzzer](https://github.com/Zigrin-Security/CakeFuzzer) - A ferramenta de teste de segurança de aplicações web para aplicações web baseadas em CakePHP. CakeFuzzer emprega um conjunto predefinido de ataques que são modificados aleatoriamente antes da execução. Aproveitando sua compreensão profunda do framework do Cake PHP, o Cake Fuzzer lança ataques em todos os pontos de entrada de aplicativos em potencial.
- [Artemis](https://github.com/CERT-Polska/Artemis/) - Um scanner modular de vulnerabilidade com capacidades de geração automática de relatórios.

## # Auto-Protecção de Aplicação em Tempo de Execução

- [Sqreen](https://www.sqreen.io/) - Sqreen é uma solução de autoproteção de aplicativos Runtime (RASP) para equipes de software. Um agente in-app instrumenta e monitora o aplicativo. As atividades suspeitas do usuário são relatadas e os ataques são bloqueados em tempo de execução sem modificação de código ou redirecionamento de tráfego.
- [OpenRASP](https://github.com/baidu/openrasp) - Uma solução RASP de código aberto mantida ativamente pela Baidu Inc. Com algoritmo de detecção consciente de contexto, o projeto alcançou quase nenhum falso positivo. E menos de 3% de redução de desempenho é observada sob carga pesada do servidor.

Desenvolvimento

- [API Security in Action](https://www.manning.com/books/api-security-in-action) - Livro cobrindo a segurança API, incluindo desenvolvimento seguro, autenticação baseada em fichas, JSON Web Tokens, OAuth 2 e Macaroons. (acesso antecipado, publicado continuamente, lançamento final verão 2020)
- [Secure by Design](https://www.manning.com/books/secure-by-design?a_aid=danbjson&a_bid=0b3fac80) - Livro que identifica padrões de design e estilos de codificação que tornam muitas vulnerabilidades de segurança menos prováveis. (acesso antecipado, publicado continuamente, lançamento final queda 2017)

- [Compreendendo API Security](https://www.manning.com/books/compreendendo-api-security) - Amostrador gratuito de eBooks que dá algum contexto para como a segurança de APIs funciona no mundo real, mostrando como APIs são colocadas juntas e como o protocolo OAuth pode ser usado para protegê-las.
- [OAuth 2 in Action](https://www.manning.com/books/oauth-2-in-action) - Livro que lhe ensina o uso prático e a implantação do OAuth 2 sob as perspectivas de um cliente, de um servidor de autorização e de um servidor de recursos.
- [OWASP ZAP Node API](https://github.com/zaproxy/zap-api-nodejs) - Aproveite o OWASP Zed Attack Proxy (ZAP) dentro de suas aplicações NodeJS com esta API oficial.
- [GuardRails](https://github.com/apps/guardrails) - A GitHub Aplicativo que fornece feedback de segurança no Pull Requests.
- [Bearer](https://github.com/Bearer/bearer) - Analisar o código para riscos de segurança e vulnerabilidades que levam a exposições de dados sensíveis.
- [Chekov](https://github.com/bridgecrewio/checkov/) - Uma ferramenta de análise estática para infra-estutura como código (Terraform).
- [TFSec](https://github.com/tfsec/tfsec/) - Uma ferramenta de análise estática para infra-estrutura como código (Terraform).
- [KICS](https://github.com/Checkmarx/kics) - Analisa projetos de IAC para vulnerabilidades de segurança, problemas de conformidade e má configuração de infraestrutura. Atualmente trabalhando com projetos Terraform, Kubernetes manifesta, Dockerfiles, AWS CloudFormation Templates e playbooks Ansíveis.
- [Insider CLI](https://github.com/insidersec/insider) - Uma ferramenta de teste de segurança de aplicações estáticas de código aberto (SAST) escrita em GoLang para Java (Maven e Android), Kotlin (Android), Swift (iOS), .NET Full Framework, C# e Javascript (Node.js).
- [Full Stack Python Security](https://www.manning.com/books/full-stack-python-security) - Um olhar abrangente sobre cibersegurança para desenvolvedores Python
- [Making Sense of Cyber Security](https://www.manning.com/books/making-sense-of-cyber-security) - Um guia prático, sem jargão, para os conceitos-chave, terminologia e tecnologias de cibersegurança perfeitas para qualquer pessoa planejando ou implementando uma estratégia de segurança. (acesso antecipado, publicado continuamente, lançamento final no início de 2022)
- [Security Checklist by OWASP](https://owasp.org/www-project-aplication-security-verification-standard/) - Uma lista de verificação da OWASP para testar aplicações web com base no nível de garantia. Abrange vários tópicos como Arquitetura, IAM, Saneamento, Criptografia e Configuração Segura.

# # Explora & Cargas

(https://github.com/swisskyrepo/PayloadsAllTheThings) - Uma lista de cargas úteis e bypass para Web Application Security e Pentest/CTF

# # Red Team Infrastructure Implantation

(https://github.com/khast3x/Redcloud) - Uma instalação automática de infraestrutura Red Team usando o Docker.
- [Axioma](https://github.com/pry0cc/axiom) - Axiom é uma estrutura de infraestrutura dinâmica para trabalhar eficientemente com ambientes multinuvem, construir e implantar infraestrutura repetitiva focada em segurança ofensiva e defensiva.

# # implantação da infraestrutura da equipe azul

- [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - Programa CLI para automatizar a configuração, implantação e uso de soluções de segurança cibernética.

# # Usabilidade

- [Curso de Segurança Útil](https://pt.courra.org/learn/usable-security) - Curso de segurança em andamento. Excelente para quem busca entender como segurança e usabilidade se interconectam.

# # Big Data

- [data_hacking](https://github.com/ClickSecurity/data_hacking) - Exemplos de utilização de IPython, Pandas e Scikit Aprenda a tirar o máximo proveito dos seus dados de segurança.
- [hadoop-pcap](https://github.com/RIPE-NCC/hadoop-pcap) - Biblioteca Hadoop para ler arquivos de captura de pacotes (PCAP).
- [Workbench](http://workbench.readthedocs.org/) - Um quadro de python escalável para equipas de investigação e desenvolvimento em matéria de segurança.
- [OpenSOC](https://github.com/OpenSOC/opensoc) - O OpenSOC integra uma variedade de tecnologias de big data de código aberto para oferecer uma ferramenta centralizada de monitoramento e análise de segurança.
- [Apache Metron (incubação)](https://github.com/apache/incubator-metron) - Metron integra uma variedade de tecnologias de big data de código aberto para oferecer uma ferramenta centralizada de monitoramento e análise de segurança.
- [Apache Spot (incubação)](https://github.com/apache/incubator-spot) - Apache Spot é um software de código aberto para alavancar insights de análise de fluxo e pacotes.
- [binarypig](https://github.com/endgameinc/binarypig) - Extração de dados binários escaláveis em Hadoop. Processamento e Análise de Malware sobre Porco, Exploração através de Django, Twitter Bootstrap e Pesquisa Elastic.
- [Matano](https://github.com/matanolabs/matano) - Plataforma de lago de segurança sem servidor de código aberto no AWS que permite ingerir, armazenar e analisar petabytes de dados de segurança em um lago de dados Apache Iceberg e executar detecçãos Python em tempo real como código.

- [VAST](https://github.com/tenzir/vast) - Motor de pipeline de dados de segurança de código aberto para dados de eventos estruturados, apoiando a ingestão de telemetria de alto volume, compactação e recuperação; construído para execução de conteúdo de segurança, caça guiada e investigação em larga escala.

# # DevOps

- [Securing DevOps](https://manning.com/books/securing-devops) - Um livro sobre técnicas de segurança para DevOps que analisa as práticas de ponta utilizadas na segurança de aplicações web e sua infraestrutura.
- [ansível-os-hardening](https://github.com/dev-sec/ansible-os-hardening) - Papel sensível para o endurecimento do sistema operacional
- [Trivy](https://github.com/aquasecurity/trivy) - Um scanner de vulnerabilidade simples e abrangente para recipientes e outros artefatos, adequados para IC.
- [Preflight](https://github.com/spectralops/preflight) - ajuda você a verificar scripts e executáveis para mitigar ataques de cadeia de suprimentos em seu CI e outros sistemas.
- [Teller](https://github.com/spectralops/teller) - uma ferramenta de gerenciamento de segredos para devops e desenvolvedores - gerenciar segredos em vários cofres e lojas de chaves de um único lugar.
- [cve-ape](https://github.com/baalmor/cve-ape) - Um scanner CVE não-intrusivo para incorporação em ambientes de teste e CI que pode digitalizar listas de pacotes e pacotes individuais para CVEs existentes através de banco de dados CVE armazenados localmente. Também pode ser usado como um scanner CVE offline para por exemplo. OT/ICS.
- [Selefra](https://github.com/selefra/selefra) - Um software de código aberto que fornece análises para multi-nuvem e SaaS.

# # Terminal

* [shellfirm](https://github.com/kaplanelad/shellfirm) - É um utilitário prático para ajudar a evitar a execução de comandos perigosos com uma etapa de aprovação extra. Você receberá imediatamente um pequeno desafio rápido que irá verificar sua ação quando padrões de risco forem detectados.
* [shellclear](https://github.com/rusty-ferris-club/shellclear) - Ele ajuda você a proteger seus comandos de histórico de shell, encontrando comandos sensíveis em todos os comandos de histórico e permitindo que você os limpe.

# # Sistemas Operacionais

## # Privacidade e segurança

- [Qubes OS](https://www.qubes-os.org/) - Qubes OS é um sistema operacional livre e orientado para a segurança de código aberto, destinado à computação de desktop de usuário único.
- [Whonix](https://www.whonix.org) - Sistema operativo concebido para o anonimato.
- [Tails OS](https://tails.boum.org/) - Tails é um sistema operacional portátil que protege contra vigilância e censura.

# # # Recursos em linha

- [Sistemas Operacionais relacionados com a segurança @ Rawsec](https://inventory.raw.pm/operating_systems.html) - Lista completa de sistemas operacionais relacionados com a segurança
(https://www.cyberpunk.rs/category/pentest-linux-distros) - Descrição das principais distribuições de testes de penetração
- [Security @ Distrowatch](http://distrowatch.com/search.php?category=Security) - Site dedicado a falar sobre, revisar e manter atualizado com sistemas operacionais de código aberto
- [Hardening Windows 10](https://www.hardenwindows10forsecurity.com/) - Guia para endurecer Windows 10

# # Datastores

- [databunker](https://databunker.org/) - Databunker é um livro de endereços sobre esteróides para armazenar dados pessoais. GDPR e criptografia estão fora da caixa.
- [acra](https://github.com/cossacklabs/acra) - Conjunto de segurança do banco de dados: proxy para proteção de dados com criptografia de dados transparente "on the fly", mascaramento de dados e tokenização, firewall SQL (prevenção de injeções SQL), sistema de detecção de intrusões.
- [blackbox](https://github.com/StackExchange/blackbox) - Armazenar segredos em segurança num repositório VCS usando GPG
- [confidant](https://github.com/lyft/confidant) - Guarda segredos no AWS DynamoDB, encriptado em repouso e integrado ao IAM
- [dotgpg](https://github.com/ConradIrwin/dotgpg) - Uma ferramenta para fazer o backup e a versão dos seus segredos de produção ou senhas compartilhadas com segurança e facilidade.
- [redoctober](https://github.com/cloudflare/redoctober) - Servidor para criptografia e descriptografia de arquivos em estilo de regra de dois homens.
- [aws-vault](https://github.com/99designs/aws-vault) - Guardar credenciais AWS no OSX Keychain ou num ficheiro encriptado
(https://github.com/fugue/credstash) - Guardar segredos usando AWS KMS e DynamoDB
- [câmara](https://github.com/segmento/câmara) - Armazenar segredos usando AWS KMS e SSM Parâmetro Store
- [Safe](https://github.com/starkandwayne/safe) - Uma CLI Vault que facilita a leitura e a escrita do Vault.
- [Sops](https://github.com/mozilla/sops) Um editor de arquivos criptografados que suporta formatos YAML, JSON e BINARY e criptografa com AWS KMS e PGP.
(https://www.passbolt.com/) O gestor de senhas que a tua equipa estava à espera. Livre, código aberto, extensível, baseado no OpenPGP.
(https://github.com/marcwebbie/passpie) - Gerenciador de senhas de linha de comando multiplataforma
- [Vault](https://www.vaultproject.io/) - Uma loja de dados encriptada suficientemente segura para guardar segredos de ambiente e aplicação.

- [LunaSec](https://github.com/lunasec-io/lunasec) - Base de dados para PII com criptografia/tokenização automática, componentes sandboxed para manipulação de dados e controles centralizados de autorização.

## # Prevenção da fraude

- [FingerprintJS](https://github.com/fingerprintjs/fingerprintjs) - Identifica usuários de navegadores e aplicativos móveis híbridos, mesmo quando há a purgação do armazenamento de dados. Permite detectar aquisições de contas, compartilhamento de contas e atividades maliciosas repetidas.
- [FingerprintJS Android](https://github.com/fingerprintjs/fingerprintjs-android) - Identifica usuários de aplicativos Android, mesmo quando eles purgam o armazenamento de dados. Permite detectar aquisições de contas, compartilhamento de contas e atividades maliciosas repetidas.

# # EBooks

- [Holistic Info-Sec for Web Developers](https://holisticinfosecforwebdevelopers.com/) - Série de livros gratuita e para download com uma cobertura muito ampla e profunda do que os desenvolvedores web e os engenheiros DevOps precisam saber para criar software robusto, confiável, sustentável e seguro, redes e outros, que são entregues continuamente, a tempo, sem surpresas