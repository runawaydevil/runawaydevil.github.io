---
title: "Awesome Privacy"
description: "Lista curada de recursos para privacidade e segurança digital"
icon: "🔒"
---

# Awesome Privacy
<p align="center"><img width="500" src="https://raw.githubusercontent.com/pluja/awesome-privacy/main/misc/logo.png"> </p>
<p align="center">
<img src="https://awesome.re/badge.svg" alt="Awesome">
<a href="https://codeberg.org/pluja/awesome-privacy"><img alt="Mirror" src="https://img.shields.io/badge/Mirror-Codeberg-blue"></a>
</p>
<p align="center"> List of free, open source and privacy-respecting services and alternatives to privacy-invasive services.</p>
<p align="center">
<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/ABOUT.md"> About </a>
<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/Contributing.md"> Contributing </a>
<a href="https://github.com/pluja/awesome-privacy/blob/main/misc/QUOTES.md"> Quotes </a>
<a href="https://github.com/pluja/awesome-privacy/discussions"> Discussion </a>
</p>

> [!Importante]
> Anonimidade, Privacidade e Segurança são frequentemente usados de forma intercambiável, mas eles realmente representam conceitos distintos. É importante entender as diferenças entre eles. [Leia mais nesta seção abaixo](#privacy-vs-security-vs-anonymity).
>
> O foco principal desta lista é fornecer alternativas que priorizem a privacidade. Essas alternativas lhe dão controle sobre seus dados e não os coletam ou vendem.

# 
## 2FA
□ Evite usar aplicativos que não permitem exportar suas chaves ** facilmente**.
- Authy.
- Google Authenticator [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

□ Em vez disso, use
Um aplicativo livre, seguro e de código aberto para Android para gerenciar seus tokens de verificação de 2 passos. Suporta variedade de importações de outros aplicativos (Google Authenticator, Authy etc.), criptografia de cofre e chaves de exportação (plaintext ou criptografado).

- [ente Auth](https://ente.io/auth) - Uma plataforma livre, transversal, aplicativo de ponta a ponta criptografado e código aberto para gerenciar seus tokens de verificação de 2 passos. Dos fabricantes de [ente Photos](https://ente.io) e usa a mesma infraestrutura testada em batalha. Precisa de uma conta ente.io.
- [Owky] (https://github.com/charlietango/owky) - Autenticação de dois fatores de código aberto e livre para usuários IOS.
- [#icons] [FreeOTPPlus] (https://github.com/helloworld1/FreeOTPPlus) - Garfo melhorado do FreeOTP-Android fornecendo um autenticador 2FA rico em recursos.
- [#icons] [Authenticator Pro] (https://github.com/jamie-mh/AuthenticatorPro) - Autenticação de dois fatores (2FA) cliente para Android + usar o sistema operacional.

[Voltar ao topo](#contents)

# # Análise
□ Evite qualquer serviço de análise que venha do Google, Facebook, Microsoft ou qualquer serviço privado. Esse tipo de análise prejudica a privacidade do usuário.

□ ** Em vez de utilizar **
- [Ackee] (https://ackee.electerious.com/) - Análise de site auto-hospedada.
- [Aptabase](https://aptabase.com) - Open-source, privacy-first and simple analytics for mobile and desktop apps.
- [Cabin](https://witchcabin.com) - Privacy-first, carbon conscious web analytics.
- [GoatCounter](https://www.goatcounter.com/) - Plataforma de análise de dados de código aberto e leve.
- [Matomo] (https://matomo.org/) - Alternativa Google Analytics que protege seus dados e a privacidade de seus clientes.
- [Nullitics](https://nullitics.com/) - Análise barata de código aberto sem esforço.
- [Pirsch](https://pirsch.io/) - Pirsch é uma alternativa simples, amigável à privacidade, de código aberto ao Google Analytics — leve, livre de cookies e facilmente integrada em qualquer website ou infra-estrutura.
- [Plausível] (https://plausible.io/) - Alternativa simples e amigável à privacidade do Google Analytics.
- [Shynet] (https://github.com/milesmcc/shynet) - Análises modernas, de privacidade e detalhadas da web que funcionam sem cookies ou JS.
- [Swetrix](https://swetrix.com) - Serviço web-analytics totalmente sem cookies e opensource (e selfhostable).
- [Umami](https://umami.is/) - Uma alternativa simples, rápida, de análise do site para o Google Analytics.
(https://unidentifiedanalytics.web.app/) - Rastreamento baseado em ip que funciona em qualquer lugar (web, linha de comando, e-mail, etc). Nenhuma conta necessária. Amigável ao desenvolvimento.
- [Rybbit](https://rybbit.io) - Uma alternativa aberta e amigável à privacidade do Google Analytics que é 10x mais intuitiva.

[Voltar ao topo](#contents)

# # Android

Loja de aplicativos Android
□ **Evite **
- Google Play Store [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

□ ** Em vez de utilizar **
- [F-Droid] (https://f-droid.org/) - F-Droid é um catálogo instalável de aplicações FOSS (Free and Open Source Software) para a plataforma Android.
- [Droid-ify] (https://github.com/Iamlooker/Droid-ify) - Cliente leve F-Droid com UI Material.
- [Aurora Droid] (https://auroraoss.com/download/#aurora-droid) - Aurora Droid é uma cliente moderna da F-Droid.

- [Foxy Droid] (https://github.com/kitsunyan/foxy-droid) - Cliente F-Droid não oficial no estilo do clássico.
- [FossDroid] (https://fossdroid.com/) - O objetivo da Fossdroid é promover aplicativos gratuitos e de código aberto na plataforma Android: os mais novos, os mais modernos e os mais populares.
- [SkyDroid] (https://skydroid.app/) - Descentralização App Store para Android
- [Obtainium] (https://github.com/ImranR98/Obtainium) - Obter atualizações de aplicativos diretamente da fonte.
- [Acrescent] (https://github.com/accrescent/accrescent) - Uma nova loja de aplicativos Android focada em segurança, privacidade e usabilidade.

Google Play Alternativo Armazenar clientes
- [Aurora Store](https://auroraoss.com/download/#aurora-store) - Aurora Store é uma alternativa de código aberto do cliente do frontend Google Play Store com privacidade e design moderno em mente.

Ferramentas Android Debloat
□ **Evite **
- ADB AppControl - Um simples wrapper adb com uma política de privacidade [terrível](https://adbappcontrol.com/en/terms/) para coletar coisas como informações sobre dispositivos e quais aplicativos você instala/desinstalar.

□ ** Em vez de utilizar **
- [Universal Android Debloater Next Generation] (https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/) - GUI Cross-plataforma escrito em Rust usando ADB para desbloat dispositivos android não enraizados. Melhore a sua privacidade, a segurança e a duração da bateria do seu dispositivo.

# # Dialer Android
□ **Evite **

Os discadores de terceiros encontrados na loja de jogos. Eles podem conter anúncios/trackers e podem pedir permissões desnecessárias.

□ ** Em vez de utilizar **
- [Koler](https://github.com/Chooloo/koler) - Aplicativo de telefone estilizado com características personalizáveis.
- [Fossify Phone] (https://github.com/FossifyOrg/Phone) - Um gestor de chamadas telefónicas com agenda telefónica, bloqueio de números e suporte multi-SIM.

Gerenciador de arquivos Android
□ **Evite **

Gerenciadores de arquivos pré-instalados e aplicativos de gerenciamento de arquivos de terceiros encontrados na loja de jogos. Eles podem conter anúncios/trackers e podem pedir permissões desnecessárias.

□ ** Em vez de utilizar **

- [Amaze File Manager](https://github.com/TeamAmaze/AmazeFileManager) - Gerenciador de arquivos simples e atraente para Android.
- [Arquivos de material] (https://github.com/zhanghai/MaterialFiles) - Um gerenciador de arquivos de design de material de código aberto, para Android 5.0+.
- [Comandante fantasma] (https://f-droid.org/pacotes/com.ghostsq.commander/) - Gerenciador de arquivos de painel duplo.

Teclado Android
□ **Evite **
- GBoard (Google) [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- SwiftKey [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

□ ** Em vez de utilizar **
- [AnySoftKeyboard] (https://anysoftkeyboard.github.io/) - O único teclado Android que você vai precisar. Livre como na fala e Livre como na cerveja.
- [FlorisBoard](https://github.com/florisboard/florisboard) - FlorisBoard é um teclado livre e de código aberto para dispositivos Android 6.0+. Ele visa ser moderno, amigável e personalizável, respeitando plenamente sua privacidade. Atualmente no estado de beta inicial.

- [Futo Keyboard](https://keyboard.futo.org/) - Um teclado moderno que respeita a sua privacidade e segurança, com recursos como entrada de voz offline, digitação deslize e autocorreção inteligente.
- [Heliboard](https://github.com/Helium314/HeliBoard) - Teclado de código aberto personalizável e consciente da privacidade, baseado no AOSP / OpenBoard, com muitos recursos adicionais e melhorias, incluindo suporte para dicionários personalizados, temas e digitação plana.
(https://gitlab.com/indicproject/indic-keyboard) - Teclado Indic é um teclado versátil para usuários Android que desejam usar línguas indianas e indianas para digitar mensagens, compor e-mails e geralmente preferem usá-los, além de Inglês em seu telefone.
- [OpenBoard](https://github.com/openboard-team/openboard) - OpenBoard é um teclado foss 100% baseado no AOSP, sem dependência dos binários do Google, que respeita a sua privacidade. Não está mais atualizado, mas ainda funciona.
- [Teclado simples] (https://github.com/rkkr/simple-keyboard) - Simplesmente teclado e nada mais.

Galeria Android

Sua galeria de telefone é um aspecto profundamente pessoal de sua vida, pode conter imagens e vídeos que capturam momentos íntimos, locais e pessoas importantes para você. Proteger sua privacidade é essencial para evitar o uso indevido dessas informações, não só para você, mas também garante a privacidade de amigos e familiares capturados nestas fotos, que podem não consentir em ter suas imagens compartilhadas.

> [!NOTA]
> Para uma maneira privada de armazenar e fazer backup de suas fotos, veja a seção [Photo Storage](#photo-storage).

□ **Evite **
- ** Fotos do Google** tem problemas de privacidade. Eles coletam muitos dados sobre você, que você pode ver em sua política de privacidade(https://policies.google.com/privacy?hl=en-US#infocolect). O Google pode digitalizar as suas fotos e pode apontá-las por diferentes razões, como mostrado neste [incident](https://petapixel.com/2022/08/22/google-flags-photos-of-fathers-sick-son-as-child-abuse-informs-police/). Eles também usam suas fotos para melhorar a tecnologia de IA.
- **Amazon Photos** também tem problemas de privacidade semelhantes. Como o Google Photos, ele reúne muitas informações de sua galeria de fotos. Você pode ver um pouco de que tipo de dados eles coletam em sua lista [**exemplos**](https://www.amazon.com/gp/help/clienter/display.html?nodeId=468496&ref_=footer_privacy#GUID-8966E75F-9B92-4A2BFD5-967D57513A40___SECTION_87C837F9CCD84769B4AE2BEB14AF4F01).
- ** Samsung, Huawei, Xiaomi, etc.** Galeria

□ ** Em vez de utilizar **
- [Aves] (https://github.com/deckerst/aves) - Bela galeria e aplicativo explorador de metadados, construído para Android com Flutter.
== Ligações externas ==* Página oficial Procure nas suas memórias sem interrupções nesta galeria de fotos e vídeos.

Lançador Android
□ **Evite **

Lançamentos de terceiros encontrados na loja de jogos. Eles podem conter anúncios/trackers e podem pedir permissões desnecessárias.

□ ** Em vez de utilizar **
Não é necessário um slogan inteligente.

- [OpenLauncher] (https://github.com/OpenLauncherTeam/openlauncher) - Personalizável e Open Source Launcher para Android.
- [KISS] (https://kisslauncher.com/) - Lightning fast, open-source, < 200kb Lançador Android.
- [Olauncher] (https://github.com/tanujnotes/Olauncher) - App minimal AF (ad-free) lançador para Android.
- [Pie Launcher](https://github.com/markusfisch/PieLauncher) - Lançador de tela inicial Android que usa um menu de torta dinâmica em vez de ícones fixos posicionados.
- [Lançador Pixel sem Rootless] (https://github.com/amirzaidi/Launcher3) - O garfo Launcher3 conhecido como "Lançador Pixel sem Rootless".
- [Bliss Launcher] (https://f-droid.org/en/pacotes/foundation.e.blisslauncher/) O lançador padrão do sistema operacional baseado em /e/ Android.
Ele permite que os usuários criem e naveguem facilmente em grupos de aplicativos e exibe crachás de notificação em ícones de aplicativos.

[Voltar ao topo](#contents)

# # Inteligência Artificial

Ao usar serviços de IA baseados na nuvem, os dados que você introduz são frequentemente coletados e armazenados pelo provedor de serviços. Isso pode incluir não apenas o conteúdo de suas solicitações, mas também metadados, como timestamps ou endereços IP. Servidores de terceiros podem conceder acesso aos seus dados a seus funcionários, parceiros ou até mesmo outros usuários, dependendo de suas políticas de privacidade. Os dados podem ser usados para vários fins, incluindo treinamento de modelos, pesquisa ou até mesmo atividades de marketing. Os seus pedidos a um serviço de IA de terceiros podem estar ligados às informações do utilizador e aos dados de pagamento, ligando os seus dados à sua identidade.

ChatGPT

- [Jan](https://github.com/janhq/jan) - Jan é uma alternativa de código aberto ao ChatGPT que funciona 100% offline no seu computador.
- [llama.cpp](https://github.com/ggerganov/llama.cpp) - Inferência do modelo LLaMA do Facebook em puro C/C++ então ele pode rodar localmente em uma CPU.
- [LocalAI](https://github.com/go-skynet/LocalAI) - Auto-hospedado, baseado na comunidade simples OpenAI local compatível com API escrita em movimento. Pode ser usado como substituto de drop-in para OpenAI, executando em CPU com hardware de nível de consumo.
- [ollama] (https://github.com/jmorganca/ollama) - Começar a funcionar com o Llama 2 e outros modelos de línguas grandes localmente.
(https://github.com/Michael-A-Kuykendall/shimmy) - Servidor de inferência de IA focado em privacidade com compatibilidade com API OpenAI, dependências de nuvem zero e processamento de modelo local.
- [Tinfoil](https://tinfoil.sh/) - Verificavelmente privada AI Chat e inferência compatível com OpenAI na nuvem. Utiliza computação confidencial NVIDIA e código de código aberto preso a um log de transparência para verificação de ponta a ponta.

Co-piloto

- [Continuar](https://github.com/continuarev/continuar) - Piloto automático de código aberto para VS Code e JetBrains – a maneira mais fácil de codificar com qualquer LLM
- [Cline] (https://cline.bot/) - Código de IA de código aberto para VSCOde. Veja cada decisão e use seus próprios modelos.
- [RooCode] (https://github.com/RooCodeInc/Roo-Code) - Cline fork com algumas melhorias.

Onze Labs Texto Para Discurso

Vá para a seção [Texto para Fala](#texto para fala).

# # # # Intermediário

- [ComfyUI] (https://github.com/comfyanonymous/ComfyUI) UI permite executar pipelines avançados de geração de imagens usando uma interface avançada. Disponível em Windows, Linux e macOS.
- [Stable Diffusion Web UI] (https://github.com/AUTOMATIC11111/stable-diffusion-webui) - Uma interface de navegador para Difusão estável e outros modelos.
- [InvokeAI](https://github.com/invoke-ai/InvokeAI) - Gerar e criar meios visuais impressionantes utilizando as mais recentes tecnologias orientadas por IA localmente.

[Voltar ao topo](#contents)

# # Marcador
□ **Evite **
- Pocket (Ler Mais Tarde) - [Política de privacidade ruim](https://tosdr.org/en/service/384). [Apps têm rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.ideashower.readitlater.pro/latest/) e requer muitas permissões.
- Evernote Web Clipper - [Política de privacidade ruim](https://tosdr.org/en/service/207). [Apps têm muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.evernote/latest/) e requerem muitas permissões.

□ ** Em vez de utilizar **
- [Grimoire](https://github.com/goniszewski/grimoire) - Moderno, código aberto, gestor de favoritos auto-hospedado.
- [LinkAce](https://github.com/Kovah/LinkAce)
(https://github.com/sissbruecker/linkding)
- [Shiori] (https://github.com/go-shiori/shiori)
(https://wallabag.org/) - Open-source, opcionalmente self-hosted, ler mais tarde servidor. Fornece serviço pago hospedado com privacidade em mente.
- [Floccus](https://floccus.org/) - Sincronize os seus favoritos em privado através de navegadores e dispositivos.

## # Gerenciamento de anotações e web

- [Blasta] (https://git.xmpp-it.net/sch/Blasta) - Um gerenciador de favoritos colaborativos para organizar conteúdo online.
- [Hipótese](https://github.com/hypothesis/h/) - Anotar a teia, com qualquer um, em qualquer lugar.
- [Kobuddy](https://github.com/karlicoss/kobuddy) - Obtenha os seus favoritos do dispositivo de leitura electrónica Kobo e anotações num ficheiro .txt.

[Voltar ao topo](#contents)

# # Captchas
□ **Evite **

O Google captchas usa cookies para rastrear usuários e classificar seus IPs.

- Google reCAPTCHA [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- hCaptcha [![](https://shields.tosdr.org/en_2207.svg)](https://tosdr.org/en/service/2207)

□ ** Em vez de utilizar **
- [Altcha.org](https://altcha.org) - Alternativa CAPTCHA gratuita, de código aberto e auto-hospedada utilizando mecanismo de prova de trabalho.
- [mCaptcha] (http://mcaptcha.org/) ([repo] (https://github.com/mCaptcha/mCaptcha)) - Um sistema CAPTCHA de código aberto com UX sem costura. mCaptcha usa prova de trabalho baseada em SHA256 (PoW) para limitar os usuários.
- [Private Captcha] (https://github.com/PrivateCaptcha/PrivateCaptcha) - Privacy-primeiro e auto-hospedado prova de trabalho CAPTCHA alternativa, feita na UE.

[Voltar ao topo](#contents)

# # Motores de Comentário

□ **Evite **

- **Disqus** - Muitos rastreadores estão em seus sites. Os disqus coletam (de acordo com sua Política de Privacidade): endereço IP, Cookie ID exclusivo, ID do dispositivo, seus dados de login, tipo e versão do navegador, configuração e localização do fuso horário, tipos e versões de plug-in do navegador, sistema operacional e plataforma e outras tecnologias nos dispositivos que você usa para acessar o Serviço.

□ ** Em vez de utilizar **

- [Comentário](https://commento.io/) - [l](#icons) O comentário é uma plataforma de comentários rápida e focada na privacidade. Pode ser selfhosted ou usar seu SaaS.
Pequeno, focado na privacidade. Open-source web comment engine, que adiciona funcionalidade de discussão a páginas web simples e chatas.
- [Cusdis](https://github.com/djyde/cusdis) - Alternativa leve e amigável à privacidade dos Disqus.
- [Disgus](https://github.com/carlitoplatanito/disgus) - Comentários para o seu website, apoiados pela Nostr. Como Disqus mas Nostr.
- [Isso] (https://github.com/posativ/isso) - Um servidor leve, self hosted, comentando escrito em Python e JavaScript. Pretende ser um substituto para Disqus.
- [Remark42](https://remark42.com) - Motor de comentários self-hosted, leve, e simples (ainda funcional), que não espiona os usuários.

[Voltar ao topo](#contents)

## # Revestimento
Imagens
- [Fawkes](https://github.com/Shawn-Shan/fawkes) - ferramenta de preservação da privacidade contra sistemas de reconhecimento facial.
- [CloakMe] (https://github.com/pluja/CloakMe) - Interface Web para o algoritmo Fawkes.
- [ImageScrubber](https://github.com/everestpipkin/image-scrubber) - Uma ferramenta amigável baseada no navegador para anonimizar fotografias tiradas em protestos ([versão hospedada fornecida por everestpipkin](https://everestpipkin.github.io/image-scrubber/)).

Texto
[Stegcloak] (https://stegcloak.surge.sh/) Ocultar segredos com caracteres invisíveis em texto simples usando senhas ([repo](https://github.com/kurolabs/stegcloak)).

[Voltar ao topo](#contents)

# # Armazenamento em nuvem
□ **Evite **
- **Google Drive** - Propriedade do Google, então a política de privacidade é [muito ruim](https://tosdr.org/en/service/217). Os dados são armazenados em seus servidores remotos, onde você perde o controle. Eles usam rastreadores. Nenhuma encriptação disponível.
- **DropBox** - [Má política de privacidade](https://tosdr.org/en/service/270). O aplicativo tem [vários rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.dropbox.android/latest/) e requer muitas permissões.
- **OneDrive** - A política de privacidade da Microsoft é [muito ruim](https://tosdr.org/en/service/244). Os dados são armazenados em seus servidores remotos, onde você perde o controle. Eles usam rastreadores. Nenhuma encriptação disponível.

□ ** Em vez de utilizar **
(https://nextcloud.com/) A plataforma de produtividade open source que o mantém no controle.
- [Seafile](https://www.seafile.com/en/home/) - Sincronização e partilha de ficheiros de alto desempenho. Ele inclui uma edição Wiki, WYSIWYG e outros recursos de gerenciamento de conhecimento.

- [Peergos](https://peergos.org/) - Espaço seguro e privado online onde pode armazenar, partilhar e visualizar as suas fotografias, vídeos, música e documentos. Também inclui um calendário, feed de notícias, listas de tarefas, chat e cliente de e-mail. Código aberto e auto-hostável.
(https://proton.me/drive) Cofre suíço para seus arquivos que protegem seus dados. [Leia este artigo sobre a detenção de activistas do clima](https://protonmail.com/blog/clima-active-arrest/).
- [PrivateStorage](https://private.storage/) - Armazenamento em nuvem com foco em privacidade e sincronização de pastas com criptografia do lado do cliente.

** Outras ferramentas úteis *
- [Cryptomator] (https://cryptomator.org) - Cryptomator criptografa seus dados rapidamente e facilmente. Depois você envia-os protegidos para o seu serviço de nuvem favorito
- Programa de sincronização de ficheiros contínuos. Ele sincroniza arquivos entre dois ou mais computadores em tempo real, protegidos com segurança dos olhos curiosos.
- [Rclone](https://rclone.org/) - Rclone é um programa de linha de comando para gerenciar arquivos em armazenamento em nuvem. É uma alternativa rica em recursos para as interfaces de armazenamento web de fornecedores de nuvem e como as ferramentas listadas acima permite criptografia para criptografar arquivos na nuvem.
- [Restic](https://restic.net/) - Restic também é um programa de linha de comando para gerenciar arquivos em vários provedores de armazenamento em nuvem. Restic usa criptografia por padrão. Poucas características notáveis do restic incluem navegar através do armazenamento como git como instantâneos sem custo de armazenamento extra, deduplicação e economia significativa através da compressão.

[Voltar ao topo](#contents)

# # Ferramentas do Criador

Opte por alternativas de código aberto e P2P que priorizem a privacidade de dados, eliminem interferências de terceiros e ofereçam funcionalidades transparentes e apoiadas pela comunidade sobre ferramentas convencionais como Riverside. fm, Restream e Camtasia.

- [vdo.ninja](https://vdo.ninja/) - Ferramenta poderosa que lhe permite trazer imagens de vídeo remotas para a OBS ou outro software de estúdio via WebRTC.
- [socialstream.ninja](https://github.com/steveseguin/social_stream#readme) - Consolide seus fluxos de mensagens sociais ao vivo e muito mais.
- [OBS Studio](https://obsproject.com/) - Software gratuito e de código aberto para gravação de vídeo e transmissão ao vivo.
- [Screenity](https://screenity.io/en/) - Um gravador de ecrã gratuito, privado e amigável.

[Voltar ao topo](#contents)

# # Bases de Dados
[!](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
□ Evite usar bases de dados privatizativas que você não controla, como o Google Firebase.

□ Em vez disso, use
(https://appwrite.io/) - Servidor seguro de backend de código aberto para desenvolvedores web, móveis e Flutter.
- [Supabase] (https://supabase.io/) (https://github.com/supabase/supabase/issues/4934) [auto-hospedagem](https://github.com/supabase/issues/4440# comment-992108832))
- [Pocketbase] (https://pocketbase.io/) - Infraestrutura Open Source em 1 arquivo escrito em Go.

- [CondensationDB](https://github.com/CondensationDB/Condensation) [Inativo] - A condensação é uma confiança zero de código aberto, uma base de dados distribuída que permite construir aplicações modernas, garantindo a propriedade e segurança dos dados.

[Voltar ao topo](#contents)

# # Ferramentas de Desenvolvimento
- [Estúdio Beekeeper](https://www.beekeeperstudio.io) - Open Source SQL Editor e Gerenciador de Banco de Dados com um compromisso de privacidade em sua declaração de missão.

IDES
□ Evite usar IDEs privatizativos cheios de rastreadores e telemetria.

□ Em vez disso, use
- [Neovim] (https://neovim.io/) - Editor de texto hiperextensível baseado em Vim.
- [VSCodium](https://vscodium.com/) - Free/Libre Open Source Software Binários de VSCOde. O código fonte Vscode é open source (MIT-licenced), mas o produto disponível para download (Visual Studio Code) está licenciado sob [esta licença não FLOSS](https://code.visualstudio.com/licence) e contém telemetria/rastreamento.

[Voltar ao topo](#contents)

# # Aplicativos de namoro

Aplicativos como Tinder coletar e vender suas informações íntimas pessoais. Foi determinado que o Tinder, em particular, [carregou os utilizadores até cinco vezes mais para o mesmo serviço](https://foundation.mozilla.org/en/blog/new-search-tinders-opaque-unfair-pricing-algorithm-can-charge-users-up-to-five-times-more-for-same-service/), [extrapolate estimations on your intelligence e other psicometrics and sell it third-parties](https://libreddit.kavin.rocks/r/privacy/comments/k7x4s7/tinder_extrapolates_estimations_on_your/), [pode saber mais sobre si do que sobre si próprio](https://www.theguardian.com/technology/2017/sep/26/tinder-date-personal-dating-app-messages-hacked-sold), e muitas coisas que pode encontrar na internet.

□ **Evite **
- [!](https://shields.tosdr.org/en_462.svg)](https://tosdr.org/en/service/462)
- Grindr
- Badoo.
- Lovoo.

□ ** Em vez de utilizar **
- [Alovoa](https://alovoa.com/) - Plataforma de encontros gratuita e de código aberto que respeita a sua privacidade.

[Voltar ao topo](#contents)

# # Ferramentas de Design

** O domínio da Adobe** em ferramentas de design restringe as escolhas dos designers e compromete sua privacidade. Seu [falta de suporte Linux](https://helpx.adobe.com/in/download-install/kb/operating-system-guidelines.html), confina designers ao Windows ou macOS. Além disso, a coleção de dados da Adobe (https://tosdr.org/en/service/417) e [trackers](https://reports.exodus-privacy.eu.org/en/reports/com.adobe.psmobile/latest/) amplia ainda mais as preocupações de privacidade. Eles também podem estar [usando o trabalho dos usuários para treinar seus IA](https://mastodon.art/@Krita/109632425661190494), potencialmente causando problemas de propriedade intelectual. Por estas razões, os designers podem considerar o uso de fontes abertas, alternativas respeitosas à privacidade, ignorando a maioria dessas questões.

InDesign

□ ** Em vez de utilizar **

- [Scribus](https://www.scribus.net/) - um software gratuito e de código aberto para publicação de computadores de secretária (DTP) disponível para a maioria dos sistemas operativos de secretária. Ele é projetado para layout, tipografia e preparação de arquivos para equipamentos de configuração de imagem de qualidade profissional. Scribus também pode criar apresentações e formulários PDF animados e interativos.

## Photoshop / Ilustrador

□ ** Em vez de utilizar **
- [GIMP](https://www.gimp.org/) - Um editor gráfico raster livre e de código aberto usado para manipulação de imagens (retoque) e edição de imagens, desenho em formato livre, transcodificação entre diferentes formatos de arquivos de imagem e tarefas mais especializadas. Ele não é projetado para ser usado para o desenho, embora alguns artistas e criadores têm usado desta forma.
- [Inkscape](https://inkscape.org/) - Editor gráfico vetorial livre e de código aberto para GNU/Linux, Windows e macOS. Ele oferece um rico conjunto de características e é amplamente utilizado para ilustrações artísticas e técnicas, como desenhos animados, clip art, logotipos, tipografia, diagramação e fluxograma.
- [Krita](https://krita.org/) - Um editor gráfico gratuito e de código aberto concebido principalmente para arte digital e animação 2D.
- [Excalidraw] (https://github.com/excalidraw/excalidraw) - Placa branca virtual para desenhar à mão como diagramas.

Figma

□ ** Em vez de utilizar **
- [Penpot](https://penpot.app/) - Penpot é uma plataforma de design e prototipagem de código aberto para equipes de produtos.

[Voltar ao topo](#contents)

# # Registrador de Domínio
□ Evite usar registrars de domínio que são invasivos de privacidade.

□ Em vez disso, use
- [OrangeWebsite](https://www.orangewebsite.com/)
- [1984 Hosting](https://www.1984hosting.com/)

[Voltar ao topo](#contents)

# # Gerenciador de Download

- [Persepolis Download Manager] (https://github.com/persepolisdm/persepolis) - Persepolis é um gerente de download e uma GUI para Aria2. Está escrito em Python. Persepolis é uma amostra de software livre e de código aberto. Ele é desenvolvido para distribuições GNU/Linux, BSDs, MacOS e Microsoft Windows.
- [uGet Download Manager](https://ugetdm.com/) - uGet é um gerenciador de download de código aberto leve e poderoso para GNU/Linux desenvolvido com GTK+, que também vem embalado como um aplicativo portátil Windows. Também está disponível para Android.
- [Motrix] (https://github.com/agalwood/Motrix) - Um gerenciador de download completo.
(https://github.com/subhra74/xdm) - Xtreme Download Manager (XDM) é uma ferramenta poderosa para aumentar as velocidades de download até 500%, salvar streaming de vídeos do YouTube, DailyMotion, Facebook, Vimeo, Google Video e 1000+ outros sites, retomar downloads quebrados / mortos, agendar e converter downloads.
- [axel] (https://github.com/axel-download-accelerator/axel) - Acelerador de descarga leve. Ele suporta protocolos HTTP, HTTPS, FTP e FTPS.

[Voltar ao topo](#contents)

Criptografia
Lembre-se: Sem criptografia forte, você será espionado sistematicamente por muitas pessoas.

VeraCrypt é um software de criptografia de disco livre para Windows, macOS e Linux.
(https://shufflecake.net/index.html) - Livre código aberto, negação plausível para vários sistemas de arquivos ocultos no Linux
- [Hat.sh] (https://hat.sh/) - Uma criptografia de arquivo gratuita, rápida, segura e sem servidor.
- [Cryptomator] (https://cryptomator.org/) - Criptomator criptografa seus dados rapidamente e facilmente. Depois você os carrega protegidos para o seu serviço de nuvem favorito.
[Stegcloak] (https://stegcloak.surge.sh/) Ocultar segredos com caracteres invisíveis em texto simples usando senhas com segurança.
- [Picocrypt](https://github.com/HACKERALERT/Picocrypt/) - Uma ferramenta de criptografia de arquivos muito simples e muito segura.
- [Photok] (https://github.com/leonlatsch/Photok) - Photok é um Foto-Segurança gratuito. Ele armazena suas fotos criptografadas em seu dispositivo e as esconde de outros.

Criptografia OS

- [Cryptsetup] (https://gitlab.com/cryptsetup/cryptsetup) - Criptografia em disco completo para Linux. Cryptsetup é um utilitário usado para configurar convenientemente a criptografia de disco baseado
no módulo de kernel DMCrypt.

[Voltar ao topo](#contents)

# # Gerenciamento de arquivos e compartilhamento
□ **Evite **
- **WeTransfer** - [Política de privacidade ruim](https://tosdr.org/en/service/214). Os arquivos não são criptografados pelo e2e. O site tem muitas análises e rastreadores.
- Não há criptografia e2e. O site tem muitas análises e rastreadores do Facebook, Google, Cloudflare...

□ ** Em vez de utilizar **
- [Blaze](https://blaze.now.sh/) - Uma forma rápida, p2p e radicalmente diferente de transferir arquivos.
- [Blindsend](https://github.com/blindnet-io/blindsend) - Ferramenta de código aberto para troca de arquivos criptografada privada.
- [Croc](https://github.com/schollz/croc) - Enviar facilmente e com segurança coisas de um computador para outro.
- [Dat-cp](https://github.com/tom-james-watson/dat-cp) - Copiar arquivos entre hosts em uma rede usando a rede peer-to-peer Dat.
- [Destino](https://leastautority.com/community-maters/destiny/) - Enviar arquivos diretamente para o receptor em tempo real. Desenvolvido para e com HROs como uma alternativa de Tecnologia de Melhoria de Privacidade gratuita.
- [Gokapi](https://github.com/Forceu/Gokapi) - Leve selfhosted Firefox Enviar alternativa sem upload público. O AWS S3 foi suportado.
- [Lufi](https://framagit.org/fiat-tux/hat-softwares/lufi) - Vamos carregar esse FIle — Software de compartilhamento de arquivos.
- [Localsend](https://localsend.org/) - Partilhar ficheiros em dispositivos próximos. Livre, código aberto, plataforma cruzada.
(https://github.com/magic-wormhole/magic-wormhole)
(https://github.com/micahflee/onionshare) Uma ferramenta de código aberto que permite que você compartilhe arquivos de forma segura e anônima, hospede sites e converse com amigos usando a rede Tor.
- [Paperless] (https://github.com/the-paperless-project/paperless) - [Agora arquivado] Digitalize, indexe e arquive todos os seus documentos em papel.

[Paperless-ng](https://github.com/jonaswinkler/paperless-ng) Uma versão sobrecarregada de papel sem papel: digitalizar, indexar e arquivar todos os seus documentos físicos.
- [Paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) - Uma versão sobrecarregada de papel suportada pela comunidade baseada em paperless-ng
(https://github.com/schlagmichdoch/PairDrop) Uma versão melhorada do Snaptop que também permite que você emparelhe dispositivos e compartilhe arquivos fora da sua rede.
- [Portal] (https://github.com/SpatiaumPortae/portal) - Um utilitário de transferência de arquivos de linha de comando para o envio de arquivos criptografados de qualquer computador para outro.
- [QRcp] (https://github.com/claudiodangelis/qrcp) - Transfira ficheiros do seu computador para o seu dispositivo móvel digitalizando um código QR sem sair do terminal.
- [Enviar] (https://gitlab.com/timvisee/send) - Compartilhamento de arquivos simples e privados. (Mozilla Enviar Garfo)
- [Sharik] (https://github.com/marchellodev/sharik) - Sharik trabalha com conexão Wi-Fi ou Tethering (Wi-Fi Hotspot). Nenhuma ligação à Internet necessária. Disponível para Android, iOS, Linux, MacOS e Windows.
- [Snaptop] (https://github.com/RobinLinus/snaptop) - Uma aplicação Web progressiva para partilha de ficheiros locais inspirada no Airdrop da Apple.
- [Winden](https://winden.app/) - Uma versão conveniente do Magic Wormhole que você pode usar dentro do seu navegador. Não há necessidade de instalar um aplicativo.
- [Yopass] (https://github.com/jhaals/yopass) - Partilha segura de segredos, senhas e ficheiros.
- [scrt.link] (https://scrt.link/file) - Transferência de arquivos criptografada de ponta a ponta. Até 100GB e 30 dias de retenção. Armazenado na Suíça.

[Voltar ao topo](#contents)

# # Fitness e Saúde
□ A sua saúde é uma ** peça muito importante do seu ** dados privados** e você deve se importar ** muito** sobre isso. Além disso, os dados relacionados à saúde estão entre os mais cobiçados. Por favor, não use aplicativos do Google, Fitbit, Huawei, Xiaomi ou qualquer empresa que procure coletar seus dados pessoais.

Se você precisar de um aplicativo para ** acompanhamento de ciclo menstrual** por favor, não use nenhum aplicativo como Plue, Period Tracker, etc. Esses aplicativos rosa bonito são gananciosos para o seu ciclo menstrual e dados de vida íntima e vai vendê-lo com certeza, proteger sua vida privada. Verifique a lista abaixo e você encontrará boas alternativas.

□ ** Em vez de utilizar **

Rastreadores Fitness

- (#icons) [Fitotrack] (https://codeberg.org/jannis/FitoTrack) - Um rastreador de fitness orientado para a privacidade para Android.
(https://github.com/OpenTracksApp/OpenTracks) - OpenTracks é um aplicativo de rastreamento esportivo que respeita completamente sua privacidade.
- [#icons] [Gadgetbridge] (https://codeberg.org/Freeyourgadget/Gadgetbridge) - Substituição livre e sem nuvens para as aplicações Android de código fechado dos fornecedores de dispositivos.

Planeadores de exercícios

- [wger](https://wger.de/en/software/features) - Uma aplicação web gratuita, de código aberto e auto-alojada que gere os seus exercícios, treinos e nutrição.

- [workout.lol](https://github.com/Vincenius/workout-lol) - Uma pequena aplicação web para criar treinos com base no seu equipamento disponível e nos músculos que deseja treinar que pode auto-instalar.

Comida
(https://world.openfoodfacts.org/) - Open Food Facts é uma base de dados de produtos alimentares feita por todos, para todos. Pode usá-lo para fazer melhores escolhas alimentares.
(https://world.openfoodfacts.org/open-food-facts-mobile-app)

Rastreadores de ciclo menstruais
== Ligações externas ==* Página oficial Seu período, seus dados!
== Ligações externas == - Ciclo menstrual e rastreio de fertilidade. Tudo o que entra fica no seu dispositivo.
- [Euki](https://eukiapp.org/) - O rastreador de período que não o rastreia.
== Ligações externas ==* Página oficial* Página oficial
- [#icons] (Periodical) (https://github.com/arnowelzel/periodical) - Um calendário para acompanhar a sua menstruação e calcular possíveis dias férteis

Saúde médica
- [Fasten](https://github.com/fastenhealth/fasten-onprem) - O Fasten é um agregador de registos médicos electrónicos de origem aberta, auto-hospedado, pessoal/familiar, concebido para integrar-se com 1000 dos seguros/hospitais/clínicas.

[Voltar ao topo](#contents)

Fontes
□ **Evite **
- Google Fonts (sem selfhosted) [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

□ ** Em vez de utilizar **
# # # Substituições de Fontes do Google
- [coolLabs Fonts] (https://fonts.coollabs.io/) - Substituição amigável à privacidade do Google Fonts.

Fundições
- [Velvetyne](https://www.velvetyne.fr/)
(https://open-foundry.com/)

[Voltar ao topo](#contents)

# # Formas
□ **Evite **
- Google Forms [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

□ ** Em vez de utilizar **
- [TypeBot] (https://typebot.io) - Formulários de conversação em código aberto.
- [CryptPad Forms] (https://cryptpad.fr/form/) - Parte do pacote de colaboração de código aberto e criptografado do Cryptpad.
- [FramaForms](https://framaforms.org/) - Desenhe as suas pesquisas online com facilidade, respeitando o seu público.

[Voltar ao topo](#contents)

# # Jogos

# # # Mario Kart

Nintendo [coleta dados do usuário](https://libreddit.kavin.rocks/r/privacy/comments/qtj9xt/til_nintendo_collections_data_from_switch_downners/), e se você desativá-lo, eles podem [ligá-lo de volta](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretamente-turns-on-user-data-sharing-adSyV7t35NPg). Além disso, tem um plano pago que não é acessível a todos economicamente.

□ ** Em vez de utilizar **

- [SuperTuxKart] (https://supertuxkart.net/Main_Page) - Um piloto arcade de código aberto 3D com personagens, faixas e modos de jogar.
- [Sonic Robo Blast 2 Kart] (https://mb.srb2.org/addons/srb2kart.2435/) - SRB2Kart é um clássico estilo kart corredor, completo com belos cursos, e itens malucos.

Minecraft

[!](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

O jogo pertence à Microsoft. Se isso não for suficiente, você precisa de uma conta da Microsoft para jogar Minecraft desde 11 de março de 2022. Microsoft bloqueia contas pouco tempo após a criação da conta e [força o usuário](https://github.com/MultiMC/Launcher/issues/4093) [para fornecer](https://libreddit.kavin.rocks/r/privacy/comments/e6x27o/microsoft_forcing_me_to_give_then_my_phone_number/) um número de telefone **. Ver: [Minecraft FAQ](https://help.minecraft.net/hc/en-us/artigos/360050865492-Minecraft-Java-Edition-Account-Migration-FAQ), [1](https://libreddit.kavin.rocks/r/Minecraft/comments/sl8pkv/how_can_my_friend_migrate_her_account_to/hvq2sv6/), [2](https://libreddit.kavin.rocks/r/privacy/comments/spcuj4/microsoft_is going_to_attempt_to_move_everyone_on/)

O jogo tem [telemetria incorporada nele desde v21w38a que você não pode opt-out](https://bugs.mojang.com/browse/MC-237493). Além disso, [está ligado](https://www.minecraft.net/en-us/terms) às condições de privacidade [Microsoft](https://privacy.microsoft.com/en-us/privacystatement) que são um pesadelo de privacidade.

□ ** Em vez de utilizar **
- [Luanti](https://www.luanti.org/) - Um motor de jogo voxel de código aberto com muitas funcionalidades.
- [Mineclonia] (https://content.minetest.net/pacotes/ryvnf/mineclonia/) - Sobrevivência jogo sandbox inspirado por Minecraft. Garfo do MineClone2 com foco na estabilidade, desempenho multiplayer e recursos.

Plugins para Minecraft

Se você ainda quiser jogar Minecraft, você pode adicionar alguns plugins que podem ajudá-lo a preservar um pouco sua privacidade. Mas ainda considere que você está apoiando a Microsoft desta forma.

□ ** Em vez de utilizar **
- [No-Chat-Reports] (https://github.com/Aizistral-Studios/No-Chat-Reports) - Um plugin espigot tira assinaturas criptográficas de mensagens do jogador, mas quebra qualquer plugin de chat por design.
- [FreedomChat] (https://github.com/e-im/FreedomChat) - Uma ótima alternativa para No-Chat-Reports, uma vez que não quebra nenhum plugin de chat por design.
- [No-Telemetry] (https://github.com/kb-1000/no-telemetry) - Mod que desativa a coleta de dados de uso, ou seja, telemetria, introduzida em Minecraft 1.18 (snapshot 21w38a).

Pokemon

Nintendo [coleta dados do usuário](https://libreddit.kavin.rocks/r/privacy/comments/qtj9xt/til_nintendo_collections_data_from_switch_downners/), e se você desativá-lo, eles podem [ligá-lo de volta](https://www.altchar.com/game-news/the-latest-nintendo-switch-update-secretamente-turns-on-user-data-sharing-adSyV7t35NPg). Além disso, tem um plano pago que não é acessível a todos economicamente.

□ ** Em vez de utilizar **

- [Pokete] (https://github.com/lxgr-linux/pokete) - Um pequeno jogo baseado em terminal no estilo de um jogo muito popular e antigo da Gamefreak.

# # # Sonic o Hedgehog

- [Sonic Robo Blast 2](https://www.srb2.org/) - Sonic Robo Blast 2 é um 3D open-source Sonic o fangame de Hedgehog construído usando uma versão modificada da porta Doom Legacy de Doom.

[Voltar ao topo](#contents)

# # Assistentes Domésticos

Não use o Google Home ou Alexa. Por favor, não. Não os dês a ninguém. Eles abrem as portas das casas para vigilância. Eles podem transformar esses dispositivos de atualização automática em dispositivos de vigilância à vontade.

Artigos interessantes: [1](https://www.theguardian.com/technology/2019/oct/09/alexa-are-you-invading-my-privacy-the-dark-side-of-our-voice-assistantes), [2](https://www.theregister.com/2020/08/ai_in_brief/), [3](https://www.networkworld.com/article/3190176/virtual-assistantes-hear-allthing-so-watch-what-you-i-m-not-kidding.html), [4](https://www.democracianow.org/2017/1/4/privacy_advocates_warn_of_potencial_surveillance), [5](https://www.mirror.co.uk/news/weird-news/womandsfinds-amazon-thous-regiverings-250984), [6](https://www.mir-peri-s/com-ned-ned-ne

- Google Home [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Alexa [![](https://shields.tosdr.org/en_190.svg)](https://tosdr.org/en/service/190)
- Cortana [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Siri [![](https://shields.tosdr.org/en_158.svg)](https://tosdr.org/en/service/158)

□ ** Em vez de utilizar **
- [Mycroft] (https://mycroft.ai/) - O assistente de voz privada e aberta.
- [Home Assistant](https://www.home-assistant.io/) - Automatização de código aberto que coloca o controle local e a privacidade em primeiro lugar.

[Voltar ao topo](#contents)

# # Mensagens instantâneas
** Confira [este site](https://www.securemessagingapps.com/) para comparações*.

□ **Evite **
- WhatsApp [![](https://shields.tosdr.org/en_198.svg)](https://tosdr.org/en/service/198)
(https://tosdr.org/en/service/219)
- Facebook Messenger [![](https://shields.tosdr.org/en_182.svg)](https://tosdr.org/en/service/182)
(https://tosdr.org/en/service/244)
- Zoom [![](https://shields.tosdr.org/en_2198.svg)](https://tosdr.org/en/service/2198)
- Google Hangouts / Chat [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

□ ** Em vez de utilizar **

Descentralizado
Nenhum ponto de controle ou falha. Uma rede descentralizada operada por diferentes servidores de diferentes voluntários em todo o mundo. Você escolhe onde seus dados permanecem ou você pode self-host seu próprio servidor. Protocolos mais complexos (por causa da federação entre servidores) e alguns metadados extras são adicionados às mensagens (sem comprometer a privacidade).

- [Matrix (Protocolo)](https://matrix.org/) - Uma rede aberta para uma comunicação segura e descentralizada.
- [Elemento] (https://element.io/) - Aplicativo de chat seguro para equipes, amigos e organizações. Mantém as conversas sob o seu controle, a salvo de mineração de dados e anúncios. Encriptação de ponta a ponta.
- [Cinny](https://cinny.in/) - Um cliente Matrix que se concentra principalmente em interface simples, elegante e segura.

- [Jabber / XMPP (Protocolo)] (https://xmpp.org/) - O padrão universal e de mensagens abertas. Tentei e testei. Independente. Foco na privacidade. E2E encriptado.
(https://conversations.im/) - Cliente Jabber/XMPP para smartphones Android 4.0+ que foi otimizado para proporcionar uma experiência móvel única.
- [AstraChat](https://astrachat.com/) - Outro cliente XMPP.
- [DeltaChat] (https://delta.chat/) - Conversar por e-mail encriptado.
- [Sessão](https://getsession.org/) - Foco extremo na privacidade e no anonimato. Tecnologia Blockchain.
- [SimpleX Chat](https://simplex.chat/) - A primeira plataforma de chat 100% privada por design - não tem acesso ao seu gráfico de conexão
- [Status](https://status.im/) - Status é um aplicativo de mensagens seguro, carteira criptográfica e navegador Web3 construído com tecnologia de ponta.

Centralizado
O serviço está encarregado de executar os servidores que permitem aos usuários se comunicar. Ponto único de falha e controle, mas ainda 100% seguro e confiável se os protocolos e código são abertos e auditados.

- [Threema](https://threema.ch/en) - O mensageiro que coloca segurança e privacidade em primeiro lugar. Paga uma vez, conversa para sempre. Nenhuma coleta de dados do usuário. Cliente Open Source.
- [Signal](https://signal.org/) - Foco extremo na privacidade, combinado com todos os recursos que você espera. Criptografia forte por design. 100% Código Aberto.
== Ligações externas ==* Página oficial

# # # P2P
Nenhum servidor envolvido. Tudo vai directamente de um par para o outro par. Nenhum ponto de falha ou controle. Os recursos são reduzidos devido à falta de servidor, mensagens podem ser mais lentas. Melhor opção para conversas críticas.

- [Tox](https://tox.chat/) - A toxicologia é um software fácil de usar que o conecta com amigos e familiares sem ninguém mais ouvir.
- [Briar](https://briarproject.org/) - Mensagens e fóruns encriptados.
- [Tilkinil Chat](https://github.com/maqp/tfc) - Sistema de mensagens seguro de ponto de endpoint com rota de cebola.
(https://berty.tech/) O aplicativo de primeira mensagem de privacidade que funciona com ou sem acesso à internet, dados celulares ou confiança na rede.

[Voltar ao topo](#contents)

# # Link em Ferramentas Bio

- [Keyoxide](https://keyóxido.org/) - Uma plataforma moderna, segura e amigável à privacidade para estabelecer sua identidade online descentralizada.
- [BioDrop](https://github.com/EddieHubCommunity/BioDrop) - Conecte-se ao seu público com um único link. Mostre o conteúdo que você cria e seus projetos em um só lugar. Tornar mais fácil para as pessoas encontrar, seguir e assinar.
- [LinkStack] (https://linkstack.org/) - Alternativa auto-alojada de código aberto Linktree.

[Voltar ao topo](#contents)

# # Encurtadores de ligação

□ **Evite **

- Um pouco.

□ ** Em vez de utilizar **

- [MagLit](https://maglit.me) - Um serviço criptografado e de privacidade respeitando Link Shortener que também suporta Links Magnet.

- [Dub](https://github.com/dubinc/dub) - Você pode self-host Dub.co para um maior controle sobre seus dados e design.
- [Yourls] (https://yourls.org/) - Encurtador de URL hospedado no PHP.
- [tnyr.me](https://tnyr.me) - Um encurtador de URL de confiança zero com criptografia sem palavras.

[Voltar ao topo](#contents)

# # Monitoramento de localização

□ **Evite **

(https://tosdr.org/en/service/217)
- Google FindMyDevice [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

□ ** Em vez de utilizar **

Rastreamento
(https://apps.nextcloud.com/apps/phonetrack) - App Nextcloud para rastrear o histórico de localização com um aplicativo [Android](https://gitlab.com/eneiluj/phonetrack-android) ([outros aplicativos também suportados](https://gitlab.com/eneiluj/phonetrack-oc/-/wikis/userdoc#logging-methods)). Suporta posições de cache offline e enviá-las para o servidor em lotes. O aplicativo de primeira parte tem boas opções de economia de bateria.
- [OwnTracks](https://owntracks.org/) - Monitoramento de localização para mostrar apenas a localização atual (funcionalidade limitada do histórico de localização).
- [Traccar](https://www.traccar.org/) - Software de localização feito para dispositivos de registo GPS dedicados.
(https://github.com/Freika/dawarich) - Alternativa self-hosted ao histórico da localização do Google.

# # # Procurar o Meu Dispositivo
- [Encontrar o Meu Dispositivo] (https://gitlab.com/Nulide/findmydevice) - Encontre o seu Dispositivo Android através de SMS.
- [GPSlogger] (https://github.com/mendhak/gpslogger) - Aplicação de registro de GPS leve para Android. Sem servidores, sem internet. Salvo em um arquivo simples para armazenamento local.

[Voltar ao topo](#contents)

# # Serviços de Correio
□ **Evite **
- Gmail
- Perspectiva
- Yandex Mail
- Yahoo! Correio

□ ** Em vez de utilizar **

# # # Propriedade de terceiros
- [Forward Email](https://forwardemail.net) - o serviço de e-mail 100% aberto e focado na privacidade.
(https://protonmail.com/) - E-mail seguro. Com sede na Suíça. [Leia este artigo sobre a detenção de activistas do clima](https://protonmail.com/blog/clima-active-arrest/).
- [Tuta](https://tuta.com/) - Email seguro para todos. Código aberto.
- [Riseup](https://riseup.net/en/about-us) - Ferramentas de comunicação em linha para pessoas e grupos que trabalham em mudança social libertadora.
- [Mailfence](https://mailfence.com) - Email seguro e privado.

Auto-protegido
- [Docker mail server] (https://github.com/docker-mailserver/docker-mailserver) - Um servidor de correio fullstack mas simples (SMTP, IMAP, LDAP, Antispam, Antivirus, etc.) usando Docker.
- [Mailcow: dockerized](https://github.com/mailcow/mailcow-dockerized) - A suite servidor de correio com o 'moo'.
- [Mail-in-a-box](https://github.com/mail-in-a-box/mailinabox) - O Mail-in-a-Box ajuda os indivíduos a retomar o controlo do seu e-mail, definindo um servidor SMTP+tudo o resto: um servidor de correio numa caixa.
- [Mox](https://github.com/mjl-/mox) - Moderno servidor de correio seguro de código aberto para e-mail de baixa manutenção.

Clientes

Android / iOS
(https://github.com/M66B/FairEmail) - Aplicativo de e-mail amigável para Android.
- [#icons] [K9] (https://k9mail.app/) - Open Source Email App para Android.

Ecrã
- [Thunderbird](https://www.thunderbird.net) - Um cliente de e-mail de código aberto personalizável gratuito.

## # Email Alias Services (Anônimos)

Com apelidos de email, você pode finalmente criar uma identidade diferente para cada site. Defender contra spams, phishing e violação de dados. Você pode escolher self-hosting qualquer uma das seguintes opções ou você também pode usar sua própria plataforma como um serviço.

- [SimpleLogin](https://github.com/simple-login/app)
(https://github.com/anonaddy/anonaddy)

[Voltar ao topo](#contents)

# # Mapas e Navegação
□ **Evite **
- Google Maps
- Apple Maps
- Yandex Maps
Bing - Mapa
- Waze.
- Sygic
- Aqui vamos nós.
- Mapas de Pétalas

□ ** Em vez de utilizar **
- [Open Street Map (OSM)](https://www.openstreetmap.org/) - OpenStreet O mapa é construído por uma comunidade de mappers que contribuem e mantêm dados sobre estradas, trilhas, cafés, estações ferroviárias e muito mais, em todo o mundo.
(https://osmand.net/) - App Android / iOS Navegação usando OSM. É um aplicativo rico em recursos com tudo o que você espera.
(https://map.qwant.com/) - Uma alternativa privada do Google Maps baseada no OpenStreetMap.
(https://organicmaps.app/) - Grandes mapas offline para caminhantes e ciclistas.
- [CoMaps](https://www.comaps.app/) - Uma aplicação de mapas livres e de código aberto liderada pela comunidade baseada no OSM

[Voltar ao topo](#contents)

# # Plataformas de transmissão de mídia
□ **Evite **
- **Amazon Prime** - [Política de privacidade ruim](https://tosdr.org/en/service/2444). As aplicações têm [do Google trackers](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Muitas permissões são necessárias para um aplicativo de streaming.
- **Netflix** - [Política de privacidade ruim](https://tosdr.org/en/service/185). As aplicações têm [do Google trackers](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Muitas permissões são necessárias para um aplicativo de streaming.
- **Disney Plus** - [Política de privacidade muito ruim](https://tosdr.org/en/service/2745). Os aplicativos têm [vários rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.amazon.amazonvideo.livingroom/latest/). Muitas permissões são necessárias para um aplicativo de streaming.
- **Plex** - [Política de privacidade duvidosa](https://tosdr.org/en/service/1567). Os aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.plexapp.android/latest/). Muitas permissões são necessárias para um aplicativo de streaming.
- **Spotify** - [Política de privacidade muito ruim](https://tosdr.org/en/service/225). Os aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/). Muitas permissões são necessárias para um aplicativo de streaming.

- **Deezer** - [Má política de privacidade](https://tosdr.org/en/service/2516). Os aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/). Muitas permissões são necessárias para um aplicativo de streaming.
- **SoundCloud** - [Política Priavcy Dubita](https://tosdr.org/en/service/276). Os aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.soundcloud.android/latest/). Muitas permissões são necessárias para um aplicativo de streaming.

□ ** Em vez de utilizar **
Vídeo e Áudio
- [Jellyfin](https://jellyfin.org/) - Jellyfin é a solução de mídia construída por voluntários que o coloca no controle de seus meios. Transmita para qualquer dispositivo do seu próprio servidor, sem strings anexados.
- [Dim] (https://github.com/Dusk-Labs/dim) - Dim é um gestor de mídia self-hosted. Com configuração mínima, Dim irá organizar e embelezar suas coleções de mídia, permitindo que você acesse e reproduza a qualquer hora de qualquer lugar.
- [Stremio](https://www.stremio.com/) - Stremio é um centro de mídia moderno que é uma solução única para o seu entretenimento de vídeo.

Áudio
- [Funkwhale](https://funkwhale.audio/) - Uma plataforma social para desfrutar e partilhar música (alternativa SoundCloud).
- [Subsonic](https://www.subsonic.org/pages/index.jsp) - A sua transmissão de música pessoal completa.
- [Ampache](https://ampache.org/) - Um aplicativo de streaming de áudio/vídeo baseado na web e gerenciador de arquivos.
- [Koel](https://koel.dev/) - um servidor de streaming de música pessoal que funciona.
- [Nuclear](https://nuclear.js.org/) - Modern music player focado na transmissão de fontes livres.
- [Navidrome] (https://navidrome.org/) - Fluxo de música pessoal leve, rápido e auto-suficiente.
- (#icons) (https://github.com/moritz-weber/mucke) - Um music player para arquivos locais com opções únicas de reprodução personalizada.

**Spotificar clientes alternativos* *
> Esses clientes, embora tenham menos rastreamento, ainda não protegem sua privacidade, pois você ainda estará transmitindo de servidores Spotify de sua própria conta **premium (pago, identificado)**.

\* Premiado exigido.

- [Spotube] (https://github.com/KRTirtho/spotube) - Um cliente de plataforma cruzada livre leve Spotify.
- [Spot*](https://github.com/xou816/spot) - Cliente nativo do Spotify construído em GTK e Rust.
- [psst*](https://github.com/jpochyla/psst) - Cliente Spotify rápido e multiplataforma com GUI nativo.
- [ncspot*](https://github.com/hrkfdn/ncspot) - Cliente Spotify escrito em Rust, inspirado em ncmpc e afins. ç


\* Não é exigido nenhum prémio.

Não. [Blade Player] (https://github.com/vhaudiquet/BladePlayer) - Cliente Spotify de código aberto, funciona sem prémio.


**Youtube Music clientes alternativos * *
- [Beatbump](https://github.com/snuffyDev/Beatbump) - Frontend alternativo para YouTube Music; sem anúncios e capa API personalizada.
- [ViMusic] (https://github.com/vfsfitvnm/ViMusic) - [Unmantained] Um aplicativo Jetpack Compose Android para streaming de música do YouTube Music.

- [RiMusic] (https://github.com/fast4x/RiMusic) - Um garfo mantido pela ViMusic.

** Clientes alternativos Deezer *
- [dzr](https://github.com/yne/dzr) - Leitor de linha de comando Deezer para Linux, BSD, Android+Termux

Podcasts

□ **Evite **

- **Spotify** - [Muito ruim](https://tosdr.org/en/service/225) política de privacidade. Eles coletam toneladas de dados sobre você: humor, tempo livre, gostos, desgostos, amigos... Além disso, seus aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.spotify.music/latest/).
- **iVoox** - Seus aplicativos são [cheios de rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.ivoox.app/latest/). O site deles tem rastreadores.
- **Audible** - [Muito ruim](https://tosdr.org/en/service/190) política de privacidade. Seu aplicativo tem [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.audível.aplication/latest/).
- **Deezer** - [Má política de privacidade](https://tosdr.org/en/service/2516). Os aplicativos têm [muitos rastreadores](https://reports.exodus-privacy.eu.org/en/reports/deezer.android.tv/latest/). Muitas permissões são necessárias para um aplicativo de streaming.

□ ** Em vez de utilizar **

- [Antennapod](https://antennapod.org) - Um leitor de podcast que está completamente aberto. Subscreva qualquer feed RSS.
- [Castopod](https://castopod.org) - Self-host seus podcasts com facilidade, manter o controle sobre o que você criar e falar com o seu público sem qualquer intermediário. Seu podcast e seu público pertencem apenas a você e você.
Uma plataforma social para desfrutar e partilhar áudio.

[Voltar ao topo](#contents)

# # Notas e Tarefas
□ **Evite **

Esses provedores oferecem aplicativos e serviços preenchidos com rastreadores de dados. Além disso, a maioria deles armazena suas notas em seus servidores e não oferece nenhum tipo de criptografia.

- Google Keep
- [Google Keep Exporter](https://github.com/vHanda/google-keep-exporter) ou [Keep To Markdown](https://github.com/erikelisath/keep-to-markdown) - Converta seu Google Manter notas em uma marcação padrão + formato de cabeçalho YAML.
- Evernote
- Lula
- Noção
- OneNote

□ ** Em vez de utilizar **

- [Anytype](https://www.anytype.io/) - Uma alternativa de noção de código aberto. A sincronização de rede E2EE, nuvem e local, pode ser auto hospedada.
- [AppFlowy](https://www.appflowy.io/) - Alternativa de Noção de Código Aberto. Você está no comando de seus dados e personalizações.
- [HedgeDoc](https://hedgedoc.org/) - Antigamente CodiMD (comunidade). Uma plataforma incrível para escrever e compartilhar markdown.
- [Joplin](https://github.com/laurent22/joplin) - Aplicação de recolha de notas e de tarefas com capacidades de sincronização e encriptação.
- [Logseq](https://logseq.com/) - Uma primeira alternativa de privacidade ao WorkFlowy.
(https://github.com/usememos/memos) Um centro de memo aberto, auto-hospedado com gestão de conhecimento e socialização.
(https://github.com/nextcloud/notes/) - Não. O aplicativo Notas é um aplicativo de anotações gratuitas de distração para Nextcloud.

(https://github.com/stefan-niedermann/nextcloud-notes) Um cliente android para Nextcloud Notes.
- [Notal](https://github.com/OmGodse/Notally) - Uma bela aplicação de notas (apenas local, sem sincronização).
- [Notesnook](https://notesnook.com/) - Tomada de notas privadas de conhecimento de fonte aberta zero.
- [Obsidian](https://obsidian.md) - Obsidian é o aplicativo privado e flexível de anotações. Fonte fechada, mas não tem rastreadores (website / apps) e sincronização E2EE.
- [Quillpad](https://quillpad.github.io/) - Pegue belas notas de marcação e mantenha-se organizado com listas de tarefas. Garfo de Quillnote.
- [SiYuan](https://github.com/siyuan-note/siyuan) - Um sistema de gestão do conhecimento pessoal local.
- [Notas padrão](https://standardnotes.org/) - Uma aplicação gratuita, de código aberto e notas completamente criptografadas.
- [TinyList](https://tinylist.app/) - Criar e partilhar notas e listas de verificação, sem sacrificar a sua privacidade.
- [Trilium Notes](https://github.com/zadam/trilium) - Construa sua base de conhecimento pessoal com as Notas de Trilium
- [Vikunja](https://vikunja.io) - A aplicação a-fazer de código aberto para organizar a sua vida.
- [YankNote](https://github.com/purocean/yn) - Um pedido de nota de marcação para programadores.

[Voltar ao topo](#contents)

# # Reconhecimento Musical

□ **Evite **

- Shazam - Está sob [a política de privacidade da Apple](https://tosdr.org/en/service/158). O aplicativo android [tem alguns rastreadores do Google](https://reports.exodus-privacy.eu.org/en/reports/com.shazam.android/latest/).
- SoundHound - Tem muitos [trackers](https://reports.exodus-privacy.eu.org/en/reports/com.melodis.midomiMusicIdentifier.freemium/latest/) para um aplicativo de reconhecimento musical.
- Musicxmatch - O aplicativo [tem rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.musixmatch.android.lyrify/latest/) e requer uma quantidade perigosa de permissões.

□ ** Em vez de utilizar **

** Clientes alternativos Shazam *

- [SongRec] (https://github.com/marin-m/SongRec) - Um cliente Shazam de código aberto para Linux, escrito em Rust.
- [SongID Telegram Bot](https://github.com/smcclennon/SongID) - Um bot de Telegram que pode identificar música em arquivos de áudio/vídeo que você envia.

[Voltar ao topo](#contents)

# # Escritório

□ **Evite **
- Microsoft Office [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)
- Google Docs [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)

□ ** Em vez de utilizar **
- [LibreOffice](https://www.libreoffice.org/) - Escritório offline gratuito e de código aberto.
(https://www.onlyoffice.com/) - Escritório online gratuito e de código aberto para colaboração.
- [Cryptpad] (https://cryptpad.fr/) - Conjunto de colaboração, criptografado e código aberto.
- [Etherpad](https://etherpad.org/) - Editor online de código aberto altamente personalizável que fornece edição colaborativa em tempo real.
- [Fileverse](https://fileverse.io) - O Fileverse está construindo alternativas mais saudáveis com auto-soberdade, privacidade por design e conformidade de padrões em seu núcleo.

- [Ddocs](https://ddocs.new): alternativa de melhoria da privacidade ao google docs: onchain, end-to-end criptografado, e descentralizada.
- [dSheets](https://dsheets.new): alternativa descentralizada ao Excel e ao Google Sheets.

[Voltar ao topo](#contents)

# # Provedores de telefone online

Muitos sites requerem verificação de número de telefone. Esses serviços oferecem uma forma de receber (e às vezes enviar) mensagens SMS de forma focada na privacidade.

# # # Sem verificação de e- mail, aceitando monero
- [Crypton] (https://crypton.sh/) - SMS seguro Sim Carta na nuvem. (Baseado na Islândia)
- [Virtualsim](https://virtualsim.net/) - A Virtualsim disponibiliza cartões SIM físicos de locação para verificações SMS. (Baseado na Ucrânia)
- [MoneroSMS](https://monerosms.com/) - Números virtuais para mensagens SMS/MMS e verificações. CLI e app web. (Baseado nos Estados Unidos)

## # É necessária verificação por e-mail, aceitando monero
- [Onlinesim] (https://onlinesim.ru/) - Receba SMS on-line para o número de telefone virtual. (Baseado na Rússia)

## # Verificação por e-mail necessária, aceitando cripto
- [SmsPVA](https://smspva.com/) - SmsPVA é um serviço que fornece um número de telefone que você pode enviar qualquer SMS e obter um texto dele. (Baseado em França)

# # Sistemas Operacionais
Andróide
Tente evitar usar o Google Android ou qualquer Android que tenha sido modificado e sintonizado por qualquer fabricante, como Xiaomi, Huawei, Samsung, etc. Android é um projeto Open Source - [AOSP - Android Open Source Project](https://source.android.com/) - e tem muitas versões que respeitarão a privacidade do usuário e os dados e não o compartilharão com servidores privados de fabricantes ou prestadores de serviços.

□ ** Em vez de utilizar **

> [!NOTA]
> ** Compatibilidade com o aplicativo Android**:
> Embora todos estes sistemas operacionais sejam Android, a compatibilidade de aplicativos pode não ser perfeita devido à falta de GMS (Google Mobile Services) que alguns aplicativos exigem. Você pode verificar o quão bem os aplicativos funcionam com microg (uma alternativa livre e de código aberto para GMS) ou nenhum GMS com [Plexus](https://plexus.techlore.tech/) onde a comunidade pode relatar o quão bem os aplicativos Android funcionam nesses ambientes.

> [!NOTA]
> ** Segurança Android**: ROMs personalizados podem melhorar sua privacidade do mesmo modo que eles podem diminuir a segurança do Android, sempre use ROMs que suportam inicialização verificada e criptografia e ** DO NOT** ter root habilitado por padrão. Se possível, não use builds userdebug. Se seu modelo de ameaça requer segurança, compre um Google Pixel e instale o GrapheneOS nele. [Leia mais sobre PrivacyGuides](https://www.privacyguides.org/android/overview).

Baseado em Android

**GrapheneOS** tem um forte foco na segurança e privacidade. Ele implementa tecnologias para mitigar muitas vulnerabilidades e torna a exploração de vulnerabilidades substancialmente mais difícil. Ele melhora a segurança do sistema operacional e dos aplicativos em execução nele.

- [GrapheneOS] (https://grapheneos.org/) - GrafenoOS é um sistema operacional móvel de privacidade e segurança de código aberto com compatibilidade de aplicativos Android. Apenas ** Os telefones do Google Pixel** são suportados.

Estas ROMs também oferecem um bom suporte priavcy e/ou estendido para uma gama mais ampla de dispositivos. Note que estes também podem reduzir a segurança, aumentando a superfície de ataque do sistema operacional.

- [CalyxOS] (https://calyxos.org/) - Privacidade por Design ROM. Oferece melhor segurança do que LineageOS ou Replicant.
- [LineageOS](https://lineageos.org/) - Um sistema operativo gratuito e de código aberto para vários dispositivos, baseado na plataforma móvel Android.
- [Replicante](https://www.replicant.us/) - Replicant é uma distribuição totalmente gratuita Android rodando em vários dispositivos.

Baseado no Linux
- [UBPorts](https://www.ubports.com/) - Ubuntu Touch é a versão móvel amigável ao toque do Ubuntu.
- [postmarketOS](https://postmarketos.org/) - Toque na versão otimizada e pré-configurada do Alpine Linux.
- [PureOS](https://www.pureos.net/) - Sistema operacional desenvolvido pelo purismo para o Librem 5.
- [Plasma Mobile](https://www.plasma-mobile.org/) - Plasma, no teu bolso. Respeito pela privacidade, ecossistema de telefone aberto e seguro.
(https://mobian-project.org/) - Debian para telemóvel.
Televisão inteligente
□ Não use o Android TV, LG WebOS ou qualquer outro sistema de TV comum invasivo de privacidade que vem pré-instalado com sua TV.

□ ** Em vez de utilizar **

Atualmente eu não estou ciente de qualquer inteligente respeito pela privacidade Software de TV. Se você estiver ciente de algum, por favor abra um pedido de pull ou um problema.

O seguinte software não é um sistema operacional **, mas inclui aplicativos que podem ser usados em quase qualquer sistema operacional. Esses aplicativos respeitam sua privacidade e oferecem recursos semelhantes aos de uma Smart TV. Uma configuração recomendada envolve a ligação de um [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) executando um sistema operacional GNU/Linux para sua TV, instalando ferramentas como [KDE Connect](https://kdeconnect.kde.org/) para controlar mídias de seu telefone e, em seguida, adicionando os aplicativos listados abaixo:

- [Kodi](https://kodi.tv/) - É um centro de entretenimento que reúne todas as suas mídias digitais num belo e amigável pacote. É 100% livre e de código aberto, muito personalizável e é executado em uma grande variedade de dispositivos.
- [OSMC] (https://osmc.tv/) - OSMC é um centro de mídia livre e de código aberto construído para as pessoas, pelas pessoas.

Você também pode verificar [Media Streaming Platforms](https://github.com/pluja/awesome-privacy#media-streaming-platforms) seção.

# # PC / MacOS
□ **Evite **
- MS Windows - Propriedade da Microsoft é conhecido por coletar muitos dados do usuário e enganar usuários para possuir uma conta da Microsoft. Se você ainda quiser e por acaso usar o Windows 10, você pode usar [esta ferramenta](https://github.com/builtbybel/privatezilla), ou [esta outra ferramenta](https://www.w10privacy.de/english-home/) para ver e desativar as toneladas de configurações invasivas pela privacidade do MS Windows.
- MacOS.

□ ** Em vez de utilizar **
#### [GNU/Linux](https://www.linux.com/what-is-linux/)

GNU/Linux é uma família de sistemas operacionais livres (como em liberdade e como em cerveja livre) e de código aberto desenvolvidos principalmente pela comunidade. Se você não sabe por onde começar estas são boas opções para begginers:

- [Fedora] (https://getfedora.org/)
- [Mint (Cinnamon)](https://linuxmint.com/edition.php?id=305) é uma distribuição amigável para iniciantes.
- [Qubes OS](https://qubes-os.org/) é um sistema operacional orientado para a segurança que isola vários espaços de trabalho em máquinas virtuais separadas para melhorar a privacidade e segurança.
- [Tails](https://tails.net/) é um sistema operacional portátil que protege contra vigilância e censura. Ele sempre começa do mesmo estado limpo e tudo o que você faz desaparece automaticamente quando você desliga Tails.

> [! DIP]
> Se você quiser testá-lo sem instalá-lo em seu computador, você pode usar um [Live USB Stick](https://www.fosslinux.com/274/how-to-create-linux-mint-live-usb-drive-on-windows.htm). Você também pode investigar [Ventoy](https://www.ventoy.net) para facilmente baixar e testar distros linux com um pendrive USB.

> [! DIP]
> Se você quiser instalar o Linux, mas manter seu sistema operacional atual, você pode configurar [dual boot](https://mediumlinuxuser.com/dualboot-linux-windows/).

> [!NOTA]
> Nem todas as distribuições Linux são gratuitas (como em liberdade), gratuitas (como em cerveja gratuita) ou respeitam a privacidade do usuário. Existem toneladas de distribuições GNU/Linux e você deve investigar um pouco antes de pular em uma delas!

# # # Outro SO:

- [AtlasOS](https://atlasos.net/) - Uma modificação de código aberto do Windows 10, projetada para otimizar o desempenho e a latência. A Atlas remove todos os tipos de rastreamento incorporados no Windows e implementa inúmeras políticas de grupo para minimizar a coleta de dados.
(https://reactos.org/) - ReactOS é um sistema operacional capaz de executar software Windows, drivers Windows que se parece com Windows e é livre e código aberto.
- [RedoxOS](https://www.redox-os.org/) - Um projecto WIP destinado a fornecer um sistema operacional semelhante ao Unix escrito em Rust.

[Voltar ao topo](#contents)

# # Gerenciadores de senhas
□ **Evite **
- LastPass
- Dashlane.

□ ** Em vez de utilizar **
- [AliasVault](https://www.aliasvault.net) - Um gestor de senhas e alias E2EE de código aberto com um servidor de e-mail integrado
- [Bitwarden](https://bitwarden.com) - Um gerenciador de senhas baseado em nuvem de código aberto.
(https://github.com/dani-garcia/vaultwarden/) - Servidor não oficial compatível com Bitwarden, anteriormente conhecido como bitwarden_rs.
- [CarryPass] (https://carrypass.net) - Gerenciador de senhas PWA de conhecimento zero com geração determinística, cofres criptografados e colaboração em equipe. ([Fonte])(https://github.com/racz-zoltan/racz-zoltan.github.io) «MIT»
- [KeepassXC](https://kereassxc.org/) - Armazenar senhas com segurança usando criptografia padrão da indústria, sem sincronização apenas armazenamento.
- [KeepessDX] (https://www.kepessdx.com/) para Android.
- [Strongbox](https://strongboxsafe.com/) para iOS.
- [KeeWeb](https://keeweb.info/) para Web e outras plataformas.

- [LessPass](https://www.lesspass.com) - Gestor de senhas sem Estado. Lembre-se de uma senha mestre para acessar suas senhas. Não é necessário sincronizar.
- [Padloc] (https://padloc.app/) - O último gerenciador de senhas que você vai querer usar.
- [Passbolt] (https://www.passbolt.com) - Um gestor de senhas de código aberto concebido para a colaboração em equipa.
- [Passky](https://passky.org) - Gestor de senha simples, moderno, leve, de código aberto e seguro.
- [Proton Pass] (https://proton.me/pass) - Open-source e gerenciador de senha criptografado por Proton.

# # Pastebin e compartilhamento secreto

Essas ferramentas são úteis ao compartilhar segredos, trechos de código ou qualquer outro tipo de texto com outros de forma privada.

- [crypt.fyi](https://crypt.fyi) - Plataforma de partilha de dados sensível ao conhecimento zero Ephemeral com clientes web, cli e crome-extension
- [NoPaste] (https://github.com/bokub/nopaste) - Open Source pastbin alternativa que funciona sem banco de dados, e sem código back-end. Em vez disso, os dados são compactados e armazenados inteiramente no link que você compartilha, em nenhum outro lugar.
- [PrivateBin](https://github.com/PrivateBin/PrivateBin) - Um minimalista, open source online pastebin onde o servidor tem zero conhecimento de dados colados. Os dados são criptografados/decriptados no navegador usando 256 bits AES.
- [Yopass] (https://github.com/jhaals/yopass) - Partilha segura de segredos, senhas e ficheiros.
Partilhar um segredo. De ponta a ponta encriptada. Ephemeral. Código aberto.
- [dele-to](https://dele.to) - Código aberto. Aplicativo moderno para compartilhar credenciais e segredos sensíveis com segurança com criptografia AES-256 do lado do cliente, arquitetura de conhecimento zero e autodestruição automática.

[Voltar ao topo](#contents)

# # Pagamentos
□ **Evite **
- Visa / Mastercard
- [![](https://shields.tosdr.org/en_230.svg)](https://tosdr.org/en/service/230)
- WeChat
- _Inserir BigTechAqui_Pagar
- Pagamentos bancários (fio, SEPA, etc.)

□ ** Em vez de utilizar **
- [Monero](https://www.getmonero.org/) - Monero é dinheiro para um mundo conectado. É rápido, privado, indetectável e seguro.
- Dinheiro. Utilizar pagamentos pessoais utilizando notas e moedas físicas.

> [! AVISO]
> [Bitcoin](https://bitcoin.org) não é anônimo nem privado. Bitcoin é rastreável, transparente e pseudônimo. Para uma introdução básica, [veja o vídeo de aantonop](https://yewtu.be/watch?v=JN1Bowgcle8). Usuários mais avançados podem assistir a isso [Bitcoin privacy series](https://yewtu.be/watch?v=QEnL5k0R08w).

- [Carteira de Sparrow] (https://www.sparrowwallet.com/) Uma carteira de desktop de código aberto, multi-plataforma que lhe dá muitas ferramentas de uso de privacidade.
- [Wasabi Wallet](https://www.wasabiwallet.io/) - Uma carteira Bitcoin de código aberto, não-custodial, focada na privacidade, disponível no Desktop.

[Voltar ao topo](#contents)

# # Finanças Pessoais

Gestão Financeira Completa em Destaque

- [Atual](https://realbudget.org) - Aplicativo super rápido e focado na privacidade para gerenciar suas finanças.
- [Firefly III](https://www.firefly-iii.org/) - Um gestor de finanças pessoal livre e de código aberto.

- [GnuCash](https://gnucash.org/) - O GnuCash é um software de contabilidade financeira pessoal e de pequenas empresas, livremente licenciado sob a GNU GPL e disponível para GNU/Linux, BSD, Solaris, Mac OS X e Microsoft Windows.
- [Claro](https://github.com/we-promise/sure) - Código aberto e sistema operacional seguro para suas finanças pessoais. A Comunidade manteve o garfo do projecto arquivado [talvez](https://github.com/talvez-finance/talvez).
- [ezBookkeeping](https://ezbookkeeping.mayswind.net/) - Uma aplicação financeira pessoal leve e auto-alojada com uma interface amigável e recursos de contabilidade poderosos.

Gestão do Orçamento
(https://budgetzen.net) - Gestão de Orçamento simples e encriptada.
- [ProExpense] (https://github.com/arduia/ProExpense/) - Uma simples nota de financiamento gratuito para registrar com segurança as despesas diárias.
(https://github.com/mtotschnig/MyExpenses) - Aplicação de Rastreamento de Despesas Android licenciada pela GPL.

Despesas partilhadas

□ **Evite **

- Tricount - O tamanho do aplicativo é maciço (~200MB) e contém muitos rastreadores do Facebook, Google e Huawei.
- Splitwise - App contém rastreadores do Google e Amazon.

□ ** Em vez de utilizar **

- [Spliit] (https://github.com/spliit-app/spliit#readme) - Share Expenses with Friends & Family. Nada de anúncios. Nenhuma conta. Código aberto. Para sempre Livre.
- [PeerSplit] (https://github.com/tanayvk/peersplit#readme) - [Site](https://github.com/pluja/awesome-privacy/blob/main/peersplit.app) - Despesas de acompanhamento e de grupo. 100% grátis, 100% privado.
- [SplitPro](https://github.com/oss-apps/split-pro#readme) - [Site](https://splitpro.app) - Dividir despesas com seus amigos de graça. Uma alternativa de código aberto ao SplitWise.
- [IHateMoney](https://ihatemoney.org/) - Gerencie suas despesas compartilhadas, facilmente. Falta uma divisão desigual.
- [MoneyBuster] (https://gitlab.com/eneiluj/moneybuster/) - Cliente Android para servidores Nextcloud Cospend e IHateMoney.
- [Nextcloud Cospend](https://apps.nextcloud.com/apps/cospend) - Um grupo/gerente de orçamento compartilhado inspirado no grande IHateMoney.
- [MoneyBuster] (https://gitlab.com/eneiluj/moneybuster/) - Cliente Android para servidores Nextcloud Cospend e IHateMoney.

# # # Outros

- [Debitum](https://github.com/Marmo/debitum) - Com o Debitum você pode rastrear todos os tipos de IOUs, seja ele dinheiro ou itens emprestados.

# # Rastreadores de carteira

- [Ghostfolio](https://github.com/ghostfolio/ghostfolio#readme) - software de gerenciamento de riqueza de código aberto construído com tecnologia web.
- [PortfolioPerformance](https://www.portfolio-performance.info/en/) Uma ferramenta de código aberto para calcular o desempenho global de uma carteira de investimento
(https://github.com/rotki/rotki) Um incrível aplicativo de rastreamento de portfólio, análise, contabilidade e relatórios fiscais que protege sua privacidade.

# # Edição e gerenciamento de fotos
□ **Evite **
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- VSCO

□ ** Em vez de utilizar **
# # # # Web

- [miniPaint](https://github.com/viliusle/miniPaint) - Open Source alternativa ao Photopea. miniPaint opera diretamente no navegador. Nada será enviado para qualquer servidor. Tudo fica no seu navegador.

Ecrã
- [GIMP](https://www.gimp.org/) - Editor de imagens livre e aberto.
- [Krita](https://github.com/KDE/krita) - Krita é uma aplicação de pintura digital livre e de código aberto
- [Czkawka](https://github.com/qarmin/czkawka) - Aplicativo multifuncional para encontrar duplicatas e imagens semelhantes, etc.
- [DigiKam](https://www.digikam.org/) - Gerência fotográfica profissional impressionante com o poder de fonte aberta.
- [Inkscape](https://inkscape.org/) - Inkscape é um editor de gráficos vetoriais livre e de código aberto usado para criar imagens vetoriais.
- [ImageGlass] (https://imageglass.org/) - ImageGlass é um aplicativo de software leve cujo objetivo é ajudá-lo a visualizar imagens em um ambiente de trabalho limpo e intuitivo.
- [Darktable](https://www.darktable.org/) - Darktable é um aplicativo de fluxo de trabalho de fotografia de código aberto e desenvolvedor em bruto

Andróide
- [Pocket Paint] (https://github.com/Catrobat/Paintroid) - O aplicativo padrão de manipulação de imagem para Catroid.
- [Scrambled Exif] (https://gitlab.com/juanitobananas/scrambled-exif) - Remova os dados Exif das imagens antes de compartilhá-los.
- [ImagePipe](https://codeberg.org/Starfish/Imagepipe) - Reduz o tamanho da imagem e remove exif-tags ao compartilhar imagens em dispositivos Android.

[Voltar ao topo](#contents)

# # Armazenamento de fotos
□ **Evite **
- Google Photos [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- [Google Photos Takeout Helper] (https://github.com/TheLastGimbus/GooglePhotosTakeoutHelper) - Script que organiza o arquivo bagunçado do Google Takeout em uma grande pasta cronológica. Use este script para sair do Google Photos :).
- Fotos da Amazon

□ ** Em vez de utilizar **

# # # Auto-anfitriões
- [Immich](https://github.com/immich-app/immich) - Auto-hosted foto e solução de backup de vídeo diretamente de seu telefone celular.
- [LibreFotos] (https://github.com/LibreFotos/librephotos) - Ativo (https://github.com/hooram/ownphotos) Alternativa self hospedada para o Google Fotos.
(https://nextcloud.com/) A plataforma de produtividade open source que o mantém no controle. Tem um plugin [*Fotos*](https://github.com/nextcloud/photos) para ajudá-lo a organizar e visualizar suas fotos.
- [Photoprism](https://photoprism.app) - Aplicação rica em recursos para navegação, organização e partilha da sua colecção pessoal de fotografias. As mais similares ao Google Photos.
- [Pigallery2] (http://bpatrik.github.io/pigallery2/) - Um site de primeira galeria de fotos de diretórios self-hosted.
(https://photoview.github.io/) - Galeria de fotos para servidores pessoais com reconhecimento facial.
- [Fotoestrutura](https://photostructure.com/) - Biblioteca de fotos auto-anfitriã que torna a navegação e partilha de uma vida inteira de memórias encantadoras.

- [Stingle Photos](https://stingle.org/) - Solução de código aberto que fornece segurança forte, privacidade e criptografia para fazer backup de suas fotos.
- [Ente] (https://ente.io/) - Armazenamento encriptado de ponta a ponta para fotos e vídeos. Código aberto, [auditado](https://ente.io/blog/criptography-audit/) independentemente.

# # # Terceiros
- [Crypt.ee](https://crypt.ee/) - Um local privado e criptografado para todas as suas fotos, documentos, notas e muito mais.
- [Ente] (https://ente.io/) - Armazenamento encriptado de ponta a ponta para fotos e vídeos. Código aberto, [auditado](https://ente.io/blog/criptography-audit/) independentemente.
- [Stingle Photos](https://stingle.org/) - Solução de código aberto que fornece segurança forte, privacidade e criptografia para fazer backup de suas fotos.

# # Local
- [DigiKam](https://www.digikam.org/) - Gerência fotográfica profissional impressionante com o poder de fonte aberta.
- [Photok] (https://github.com/leonlatsch/Photok) - Photok é um Foto-Segurança gratuito. Ele armazena suas fotos criptografadas em seu dispositivo e as esconde de outros.
- [ImageGlass] (https://imageglass.org/) - ImageGlass é um aplicativo de software leve cujo objetivo é ajudá-lo a visualizar imagens em um ambiente de trabalho limpo e intuitivo.

[Voltar ao topo](#contents)

# # Ferramentas de Privacidade

Esta seção é dedicada a algumas ferramentas que podem ajudar os usuários a analisar o status de privacidade em seus dispositivos.

Ecrã

- [Whoami Project](https://github.com/owerdogan/whoami-project) - Whoami fornece privacidade aprimorada, anonimato para distribuições Linux baseadas em Debian e Arch.
- [BusKill](https://www.buskill.in/) - BusKill é um Switch Homem Morto acionado quando uma ruptura magnética é tropeçada, cortando uma conexão USB.

Andróide

- [εxodus](https://reports.exodus-privacy.eu.org/en/) A plataforma de auditoria de privacidade para aplicativos Android. Descubra quantos rastreadores seus aplicativos têm.
- [ClassyShark3xodus] (https://f-droid.org/en/packages/com.oF2pks.classyshark3xodus/) - Verifica apk(s) para rastreadores conhecidos (fornecido por Êxodo) +outros avisos e especificações.
- [Plexus](https://plexus.techlore.tech/) - Remova o medo da compatibilidade do aplicativo Android em dispositivos des-Googled. Descubra se um aplicativo funcionará em um dispositivo De-Googled.
Uma forma simples de bloquear o acesso à Internet por pedido.
- [RethinkDNS + Firewall] (https://github.com/celzero/rethink-app) Um código aberto, firewall sem raiz e modificador DNS, com capacidades anticensura para Android 6+.

[Voltar ao topo](#contents)

# # Acesso remoto e controle
□ **Evite **
- TeamViewer
- AnyDesk

□ ** Em vez de utilizar **
- [RustDesk](https://rustdesk.com/) - Software de cliente de desktop remoto de código aberto, escrito em Rust. Funciona fora da caixa, controle total de seus dados, sem preocupações com segurança.
- [screego] (https://screego.net/) - Partilha de ecrãs para os programadores.
- [Remmina](https://remmina.org/) - Ecrã de acesso remoto e partilha de ficheiros na sua área de trabalho (RDP).

- [UltraVNC](https://www.uvnc.com/) - UltraVNC é um poderoso, fácil de usar e gratuito - softwares de acesso remoto a PC - que podem exibir o ecrã de outro computador (através da Internet ou da rede) no seu próprio ecrã.
- [MeshCentral] (https://meshcentral.com/) O código aberto, multi-plataforma, self-hosted, Web site embalado para o gerenciamento de dispositivos remotos.

[Voltar ao topo](#contents)

# # Motores de Busca

□ **Evite **
- [!](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- [!](https://shields.tosdr.org/en_309.svg)](https://tosdr.org/en/service/309)
- O quê?
- [!](https://shields.tosdr.org/en_860.svg)](https://tosdr.org/en/service/860)
- [!](https://shields.tosdr.org/en_591.svg)](https://tosdr.org/en/service/591)

□ ** Em vez de utilizar **
- [Whoogle Search] (https://github.com/benbusby/whoogle-search) - Um motor de metapesquisa do Google, self-hosted, ad-free, respeitoso pela privacidade.
(https://github.com/liameno/librengine) - Motor de Pesquisa Web de Privacidade
- [SearX] (https://searx.me/) - Mecanismo de meta-pesquisa que respeita a privacidade.
- [SearxNG](https://github.com/searxng/searxng) - Mecanismo gratuito de metapesquisa na Internet, que agrega resultados de vários serviços de pesquisa e bases de dados.
- [DuckDuckGo] (https://duckduckgo.com) - Um mecanismo de busca de privacidade.
- [Brave Search](https://search.brave.com) - Um motor de busca de privacidade com [seu próprio índice independente](https://brave.com/search-independence/).
- [Qwant](https://www.qwant.com/) - Um motor de busca de rastreamento zero feito e hospedado em França, UE.

[Voltar ao topo](#contents)

# # Redes sociais e plataformas

> [!NOTA]
> **O Fediverse**
>
> O Fediverse é um "**fed**erado" "un**ideverse**" de plataformas de rede social que são capazes de falar uns com os outros através de um protocolo padrão e aberto. Isso significa que você pode consumir conteúdo em qualquer rede de qualquer uma dessas redes. Você não está bloqueado para um único provedor, você é livre para escolher. Por favor, veja este vídeo(https://framatube.org/w/9dRFC6Ya11NCVeYKn8ZhiD?start=8s) de FramaSoft que ilustra o conceito muito bom.
>
> Idealmente, todos devemos mudar para o federalismo e abandonar as redes sociais centralizadas e monopolizadas que são agora as mais populares (Twitter, Reddit, Instagram...).
>
> Todos os aplicativos compatíveis com o Fediverse (ActivityPub) são marcados com um [.](#icons)

> [!NOTA]
> ** frontends alternativos e clientes **
>
> frontends alternativos são bons para proteger sua privacidade individual. Você ainda pode consumir o conteúdo de serviços privatizativos e prejudiciais à privacidade com proteção sobre sua privacidade e algum anonimato. Mesmo usando a maioria destes frontends alternativos, ainda assim, os serviços privatizativos receberão solicitações sobre o conteúdo que você está consumindo (mesmo não sabendo que é você). Esta sitll prejudica a privacidade coletiva e adiciona dados aos seus algoritmos de algumas maneiras. Somente os frontends alternativos (ou clientes) que agem como proxy ocultarão seu IP real do provedor de conteúdo.
>

> Você pode usar essas extensões e aplicativos do navegador para redirecionar automaticamente quaisquer links para frontends alternativos que respeitem a privacidade:
> - [Farside](https://github.com/benbusby/farside) - Um portal de redirecionamento inteligente para vários serviços frontend.
> - [LibRedirect](https://github.com/libredirect/libredirect#get) - Uma extensão web que redireciona o YouTube, Twitter... requisições para frontends e backends alternativos amigáveis à privacidade.
> - [DestrackMe](https://www.f-droid.org/en/packages/app.fedilab.nitterizeme/) - Transforme Youtube, Twitter e outros links para suas alternativas gratuitas e de código aberto.



# # # Plataformas de Blog (Médio)

□ **Evite**:
- **Médium** - site tem rastreadores e anúncios do Google.
- **Blogger** - Google possui, tem rastreadores google e anúncios.

□ ** Alternativos:**
- [Plume] (https://github.com/Plume-org/Plume) [#icons) - Aplicação de blogs federados, graças ao ActivityPub.
- [WriteFreely](https://writefreely.org/) [#icons) - Uma plataforma de código aberto para construir um espaço de escrita na web.

□ ** Interfaces alternativas de média:**
(https://git.sr.ht/~edwardloverall/scrib/) - Meio forntend alternativo inspirado pelo Invidious.

Instagram

[!](https://shields.tosdr.org/en_219.svg)](https://tosdr.org/en/service/219)

□ Não use o Instagram (ou pelo menos o cliente oficial). Instagram é um aplicativo muito invasivo à privacidade com resultados tendenciosos e feeds baseados em perfis de usuários, também é usado como uma ferramenta de manipulação e tem muita censura contra a liberdade de expressão. Por último, tem um design de IU viciante e tóxico.

□ ** Em vez de utilizar **

** Alternativos para o Instagram* *
- [Pixelfed](https://pixelfed.org/) [l](#icons) - alternativa descentralizada, federada e Open Source ao Instagram com posts, vídeos, histórias, tags, etc.

LBRY e Odysee

![](https://shields.tosdr.org/en_2391.svg)

Site Odysee contém alguns rastreadores e é um site pesado. Você pode usar essas alternativas para evitar rastreadores e ter uma interface mais minimalista e leve:

- [Librarian](https://codeberg.org/librarian/librarian) - Uma interface alternativa para LBRY/Odysee. Inspirado por Invidioso e Libreddit.

# # Quora

O site da Quora tem anúncios e rastreadores que são usados para obter seus dados que são vendidos/compartilhados a terceiros. Sua política de privacidade (https://tosdr.org/en/service/314) é ruim.

□ **Quara frontends alternativos (baseado na web):**
- [Quetre] (https://github.com/zyachel/quetre) - Quetre é uma interface alternativa para Quora. Ele permite que você veja respostas sem anúncios, rastreadores e outros tais inchaços.


## # YouTube

[!](https://shields.tosdr.org/en_274.svg)](https://tosdr.org/en/service/274)

□ Não use o YouTube (ou pelo menos o cliente oficial). YouTube é muito invasivo à privacidade, gera um perfil muito preciso com base em seus interesses. Também é uma ferramenta [radicalização](https://www.pcmag.com/news/does-youtubes-algorithm-leader-to-radicalization) que mostra [conteúdo imparcial aos usuários](https://arxiv.org/pdf/1908.08313.pdf) a fim de obter mais engajamento e levá-los a assistir mais e mais conteúdo criando um [addiction](https://medium.com/datasseries/how-youtube-is-addictive-259d5c575883). Ele nunca mostra [opinião alternativa](https://arxiv.org/pdf/1908.08313.pdf) à sua ideologia/bias. O YouTube censura muito. YouTube coleta uma grande quantidade de seus dados: interesses, tempo livre, ideologia, gostos, desgostos, gostos musicais, etc.

□ ** Em vez de utilizar **
- [Peertube] (https://joinpeertube.org/en/) (#icons) - Uma alternativa livre, aberta e descentralizada às plataformas de vídeo.
- [SimpleerTube] (https://simpleertube.metalune.xyz/) - Um frontend simples para o PeerTube com SepiaSearch [Fonte] (https://git.sr.ht/~metalune/simpleweb_peertube).
- [Odysee](https://odysee.com/) - Odysee é uma plataforma de vídeo apoiada pelos criadores de lbry e utiliza o protocolo lbry blockchain.
- [DTube](https://github.com/dtube/dtube) - Um site de compartilhamento de vídeo completo, descentralizado.

□ ** Interfaces alternativas do YouTube (baseadas na Web): **
- [Invidioso](https://github.com/iv-org/invidioso) - Alternativa e privacidade respeitando o frontend do YouTube.
- [Piped](https://github.com/TeamPiped/Piped) - Um frontend do YouTube que é eficiente por design.
- [ViewTube] (https://github.com/viewtube/viewtube-vue) - ViewTube é uma interface alternativa para o YouTube, escrita em Vue.js
- [Youtube-Local](https://github.com/user234683/youtube-local) - cliente baseado no navegador para assistir ao Youtube anonimamente e com maior desempenho na página.

** YouTube clientes alternativos (apps):**
- (#icons) (NewPipe) (https://newpipe.net/) - Aplicativo alternativo do Android YouTube. Nenhuma conta necessária, privacidade respeitando, nenhum anúncio.
- [Tubular] (https://github.com/polimórficoshade/Tubular) - Um garfo de NewPipe que implementa PatrocinadorBlock e ReturnYouTubeDislike.
== Ligações externas ==* Página oficial Nenhuma conta necessária, privacidade respeitando, nenhum anúncio.
- [FreeTube] (https://github.com/FreeTubeApp/FreeTube) - O FreeTube é um player de desktop do YouTube de código aberto construído com privacidade em mente. (Usa API RSS Local ou Invidious para infraestrutura).
- [#icons] [LibreTube] (https://github.com/Libre-tube/LibreTube) - Um frontend alternativo para o YouTube, para Android usando Piped.
- [Yattee](https://github.com/yattee/yattee) - Interface alternativa do YouTube para iOS, tvOS e macOS construída com Invidious e Piped.
(https://github.com/lamarios/clipious) Cliente invisível para Android

# # # TikTok

[!](https://shields.tosdr.org/en_1448.svg)](https://tosdr.org/en/service/1448)

□ Evite usar o TikTok, é uma aplicação de design tóxico que prejudica não só a privacidade do usuário, mas também a integridade do usuário. Você pode fazer uma leitura sobre [estes vários posts](https://libreddit.kavin.rocks/r/privacy/search?q=tiktok&restrict_sr=on&sort=top&t=all).

□ **TekTok frontends alternativas (baseado na web):**
- [ProxiTok] (https://github.com/pablouser1/ProxiTok) - Interface alternativa de código aberto para TikTok

# # Twitter

[!](https://shields.tosdr.org/en_195.svg)](https://tosdr.org/en/service/195)

• Evite usar o aplicativo / site oficial do Twitter. Ele rastreia usuários e cria perfis de usuário com base no que eles seguem, retweet e como. O Twitter prejudica e viola a privacidade do usuário com suas políticas [por padrão](https://www.eff.org/deeplinks/2017/05/how-opt-out-twitters-new-privacy-settings).

# # # # Auto-anfitriões

(https://github.com/usememos/memos) Um centro de memo aberto, auto-hospedado com gestão de conhecimento e socialização.

Descentralizado

- [Nostr](https://github.com/nostr-protocol/nostr) - Protocolo aberto que é capaz de criar uma rede "social" global resistente à censura. Ele não depende de nenhum servidor central confiável, portanto é resistente; é baseado em chaves criptográficas e assinaturas, por isso é inviolável; não depende de técnicas P2P, portanto ele funciona. **Nota**: Nostr é um protocolo, por isso é capaz de oferecer muito mais do que uma alternativa do Twitter.

> [!NOTA]
> **Redes sociais federadas**: Uma rede social federada não é um único site como o Twitter ou Facebook, é uma rede de milhares de comunidades operadas por diferentes organizações e indivíduos que fornecem uma experiência de mídia social perfeita.

- [Mastodon](https://joinmastodon.org/) [!](#icons) - Rede social gratuita e federada baseada em protocolos abertos.
- [Mastodon Apps](https://joinmastodon.org/apps) - Lista de aplicativos Mastodon para Android, iOS, Web e Desktop.
- [Pleroma](https://pleroma.social/) (#icons) - Pleroma é um servidor gratuito de redes sociais federado construído em protocolos abertos.
- [Soapbox] (https://gitlab.com/soapbox-pub/soapbox-fe) - Um frontend para Pleroma com foco na marca personalizada e facilidade de uso.
(Husky) (https://git.sr.ht/~captainepoch/husky) - Cliente Android para Pleroma e Mastodon.

Frentes alternativas
- [Nitter] (https://github.com/zedeus/nitter/wiki/Instances) - O Nitter é uma interface alternativa gratuita e de código aberto no Twitter focada na privacidade.
- [Fritter] (https://github.com/jonjomckay/fritter/) - Um cliente Nitter livre e de código aberto para Android (alimentado já não disponível).
- [Squawker] (https://github.com/j-fbriere/squawker) Um garfo ativo de Fritter que corrige a alimentação.
- [Feetter] (https://codeberg.org/pluja/Feetter) - Criar, sincronizar e gerenciar feeds Nitter sem registro de qualquer dispositivo.

Reddit

[!](https://shields.tosdr.org/en_194.svg)](https://tosdr.org/en/service/194)

□ Tente evitar usar Reddit ou pelo menos evitar seus clientes oficiais, pois eles são muitos rastreadores, anúncios e compartilhar dados desnecessários do usuário com seus servidores.

□ ** Alternativas Reddit:**
(https://getaether.net/) - Comunidades públicas efêmeras.
- [Kbin] (https://github.com/ernestwisniewski/kbin) (#icons) - Agregador de conteúdo tipo reddit e plataforma de microblogging para o fediverse.
- [Lemmy](https://join.lemmy.ml/) [#icons) - Uma alternativa federada e aberta ao Reddit em Rust.
Código aberto Reddit clone.

□ ** Privacidade respeitando clientes Reddit:**
- [Libreddit] (https://github.com/libreddit/libreddit) - ~Fronteira privada Reddit escrita em Rust~ [Já não funciona - Leia aqui](https://github.com/libreddit/libreddit/issues/840)
- [Redlib] (https://github.com/redlib-org/redlib) Um front-end privado alternativo para Reddit, com suas origens em Libreddit.

### Plataformas de Streaming (Twitch)

[!](https://shields.tosdr.org/en_200.svg)](https://tosdr.org/en/service/200)

□ Evite usar plataformas como Twitch, Patreon, YouTube, pois elas são muito invasivas à privacidade com seus espectadores (e você!). Em vez disso, você pode tentar usar algumas plataformas self-hosted que cuidam da privacidade de todos.

□ ** Alternativos:**
- [Owncast] (https://github.com/owncast/owncast) - Assuma o controle sobre o seu vídeo em transmissão ao vivo executando-o você mesmo. Streaming + bate-papo fora da caixa.
(https://github.com/gwuhaolin/livego) - Servidor de transmissão de vídeo ao vivo em Golang.

Wikipédia

[!](https://shields.tosdr.org/en_265.svg)](https://tosdr.org/en/service/265)

□ Leia mais sobre a edição com a Wikipédia no manifesto [Wikiless](https://github.com/Metastem/wikiless#why-i-dever-use-wikiless-instead-of-wikipedia).

□ ** Alternativos:**
- [Wikiless] (https://wikiless.whateveritworks.org/) - Um garfo mantido da alternativa livre de código aberto Wikipédia front-end focado na privacidade [Código Fonte](https://github.com/Metastem/wikiless). (Instalação original: [wikiless.org](https://wikiless.org/), o repositório Wikiless foi removido pelo Codeberg, [seguir notícias aqui](https://orenom.fi/))

[Voltar ao topo](#contents)

Imgur

[!](https://shields.tosdr.org/en_325.svg)](https://tosdr.org/en/service/325)

□ O site Imgur é cheio de inchaço, gifs, cookies, javascript e rastreadores.

□ ** Alternativos:**
- [Imgin](https://git.voidnet.tech/kev/imgin) - Um proxy minimalista, amigável com tor, somente para leitura Imgur insipirizado por softwares como Invidious, Nitter e Bibliogram.
== Ligações externas ==* Página oficial Apenas leitura, sem js, Baseado em rimgu e reescrito em Go.

[Voltar ao topo](#contents)

# # Ferramentas de trabalho em equipe
□ **Evite **
- [!](https://shields.tosdr.org/en_206.svg)](https://tosdr.org/en/service/206)
- Google Meet [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- Microsoft Teams [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

- [![](https://shields.tosdr.org/en_536.svg)](https://tosdr.org/en/service/536)

□ ** Em vez de utilizar **
- [Zulip] (https://zulip.com/) - Conversa para equipas distribuídas.
(https://revolt.chat/) - Primeira plataforma de chat do usuário construída com tecnologias web modernas.
Trabalha numa equipa mais depressa. Twake cobre todas as suas necessidades organizacionais através de uma única plataforma.
- [RocketChat] (https://rocket.chat/) - Controle sua comunicação, gerencie seus dados e tenha sua própria plataforma de colaboração para melhorar a produtividade da equipe.
(https://nextcloud.com/talk/) - Mantenha conversas privadas com Nextcloud Talk.
(https://mattermost.com/) - Alternativa Slack de código aberto.

> [! AVISO]
> ** Clientes alternativos/modificações da Discórdia:**
> Seu IP e mensagens ainda serão compartilhadas e pertencem à Discord e eles não são criptografados.\
> Também usando qualquer uma dessas modificações/clientes [violações](https://nitter.net/discord/status/1006178587731550208#m) o [Discord ToS](https://discord.com/terms) então, não somos responsáveis por qualquer suspensão ou rescisão de sua conta **but**, isto deve [não acontecer **yet**](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-contra-discord-tos).

(https://github.com/pluja/awesome-privacy/blob/main/README.md#alternative-clientsmodifications-of-discord)

[Voltar ao topo](#contents)

# # Gravação de tela

- [Screenity](https://screenity.io/en/) - Um poderoso gravador de ecrã e uma ferramenta de anotação para criar melhores vídeos para trabalho, educação e muito mais.
- [OBS](https://obsproject.com/) - Software livre e de código aberto para gravação de vídeo e transmissão ao vivo.

[Voltar ao topo](#contents)

# # Discurso ao Texto

- [OpenAI Whisper](https://github.com/openai/whisper) - Whisper é um modelo geral de reconhecimento de fala que pode ser executado localmente offline. Ele pode transcrever áudio de e para várias línguas.
- [whisper.cpp](https://github.com/ggerganov/whisper.cpp) - Inferência de alto desempenho do modelo de reconhecimento automático de fala (ASR) da OpenAI.
- [Whishper] (https://whishper-docs.pages.dev/) - Um frontend sussurro com capacidades de edição e tradução de legendas.

[Voltar ao topo](#contents)

# # Texto a Discurso

*Evite** usando ferramentas que funcionam em uma nuvem de terceiros. Geralmente você está enviando seus dados de texto e voz para uma terceira parte para processá-los, o que pode levar a vazamento de dados biométricos, como sua voz, ou compartilhar texto privado e / ou desnecessário com a terceira parte.

□ ** Em vez de utilizar **
- [Kokoro FastAPI] (https://github.com/remsky/Kokoro-FastAPI) - Dockerized FastAPI para [Kokoro-82M] (https://huggingface.co/hexgrad/Kokoro-82M) modelo texto-a-fala w/CPU, ONNX e NVIDIA GPU suporte, manipulação e auto-stitching.
- [MeloTTS](https://github.com/myshell-ai/MeloTTS) - uma biblioteca multilingual de alta qualidade do MIT e MyShell.ai.

- [Piper](https://github.com/rhasspy/piper) - Um texto neural rápido e local para o sistema de fala que soa ótimo e é otimizado para o Raspberry Pi 4.
- [Espeak] (https://github.com/espeak-ng/espeak-ng) - eSpeak NG é um sintetizador de fala de código aberto que suporta mais de cem línguas e sotaques. Vozes parecerão robóticas.

[Voltar ao topo](#contents)

Tradução
□ **Evite **
- Google Translate [![](https://shields.tosdr.org/en_217.svg)](https://tosdr.org/en/service/217)
- DeepL
- Bing Translator [![](https://shields.tosdr.org/en_244.svg)](https://tosdr.org/en/service/244)

□ ** Tradução de texto* *
(https://mozilla.github.io/traduzir/) - Open Source, executa o modelo localmente em seu navegador.
- [Libretranslate](https://libretranslate.com/) - Open Source Machine Translation - 100% Auto-Hosted. Sem Limites. Sem ligações aos Serviços de Propriedade.
- [Apertium] (https://apertium.org/) - Uma plataforma de tradução automática livre/open-source, funciona offline no seu computador
- [Softcatala](https://www.softcatala.org/tradutor/) - Ferramenta de tradução de código aberto - Apenas catalão/espanhol/inglês/francês (usa apertium)
- [TranslateLocally](https://tralatelocally.com/) – Free/open-source neural MT, funciona offline no seu computador
- [Linguist](https://linguister.io) - Uma solução de tradução gratuita e Open Source full-featured in-browser com tradutor offline incorporado e [tradutores personalizados](https://linguister.io/docs/CustomTranslator). Tradução de página inteira, TTS, dicionário, tradução para entrada do usuário e texto selecionado na página.

□ ** Google alternativo Traduzir frontends* *
- [Lingva](https://github.com/TheDavidDelta/lingva-traduzir) - Interface alternativa para o Google Translate. [Demo] (https://lingva.ml/).
- [Simplytranslate] (https://codeberg.org/ManeraKai/simplytranslate) - Interface alternativa para o Google Translate e LibreTranslate. [Demo](https://simplytranslate.org/)

[Voltar ao topo](#contents)

# # Sem categoria
- [Skymap](https://skymaponline.net/) - Programa de planetário em linha aberto.
- [CrowdSec](https://github.com/crowdsecurity/crowdsec) Um fail2ban de código aberto, modernizado e colaborativo.
- [Hetty](https://github.com/dstotijn/hetty) - Hetty é um kit de ferramentas HTTP para pesquisa de segurança. Pretende ser uma alternativa de código aberto para Burp Suite Pro.
- [Visitado](https://github.com/yuis-ice/visitado) - Coleta localmente o histórico de navegação sobre navegadores.

[Voltar ao topo](#contents)

# # Utilitários
- [Deskreen] (https://github.com/pavlobu/deskreen) - Transforme qualquer dispositivo em uma tela secundária para o seu computador.
[Loggit](https://loggit.net) - Rastreamento e registro de vida simples e criptografados.

[Voltar ao topo](#contents)

# # Controle de Versão
□ **Evite **

- **Github** - [![](https://shields.tosdr.org/en_297.svg)](https://tosdr.org/en/service/297), embora a política de privacidade não seja muito ruim, é propriedade da Microsoft, e é do conhecimento geral que usa o código que hospeda para treinar modelos de IA.

□ ** Em vez de utilizar **

- [Codeberg](https://codeberg.org/) - Codeberg é uma plataforma de colaboração que fornece alojamento e serviços Git para software, conteúdo e projetos gratuitos e de código aberto.
- [Forgejo](https://forgejo.org/) - Forgejo é uma forja leve auto-hospedada.
- [GitLab] (https://about.gitlab.com/) - GitLab um pacote de software DevOps que pode desenvolver, proteger e operar software.
- [Radicle](https://radicle.xyz/) - Uma pilha de colaboração de código de código de código de código aberto aberto, peer-to-peer construída no Git. Ao contrário de plataformas centralizadas de hospedagem de código, não há uma única entidade controlando a rede. Repositórios são replicados entre pares de forma descentralizada, e os usuários estão em pleno controle de seus dados e fluxo de trabalho.

[Voltar ao topo](#contents)

# # Video e conferência de áudio
□ **Evite **

- **Zoom** - [Política de privacidade muito ruim](https://tosdr.org/en/service/2198). As aplicações têm [relatores do Google](https://reports.exodus-privacy.eu.org/en/reports/us.zoom.videometings/latest/). Muitas permissões necessárias.
- **Skype** - [Política de privacidade muito ruim](https://tosdr.org/en/service/244). Os aplicativos possuem rastreadores [Google e Microsoft](https://reports.exodus-privacy.eu.org/en/reports/com.skype.insiders/latest/). Muitas permissões necessárias.
- **Google Meet** - [Política de privacidade muito ruim](https://tosdr.org/en/service/217). Os aplicativos têm (https://reports.exodus-privacy.eu.org/en/reports/com.google.android.apps.tachyon/latest/) incorporado (como é um aplicativo do Google). Muitas permissões necessárias.
- ** Whatsapp** - [Política de privacidade ruim](https://tosdr.org/en/service/198). Os aplicativos têm [rastreadores do Google] (https://reports.exodus-privacy.eu.org/en/reports/com.whatsapp/latest/) e provavelmente os rastreadores do Facebook incorporados (como é um aplicativo do Facebook). Muitas permissões necessárias.
- ** Instagram** - [Política de privacidade muito ruim] (https://tosdr.org/en/service/219). Os aplicativos têm [rastreadores do Facebook](https://reports.exodus-privacy.eu.org/en/reports/com.instagram.android/latest/). Muitas permissões necessárias.
(https://tosdr.org/en/service/536). Os aplicativos têm [vários rastreadores](https://reports.exodus-privacy.eu.org/en/reports/com.discord/latest/). Muitas permissões necessárias.
- Clubhouse

□ ** Em vez de utilizar **
- [BigBlueButton] (https://bigbluebutton.org/) - BigBlueButton é um sistema de conferência web projetado para aprendizagem online.
(https://github.com/holtwick/briefing/) - Conversa de grupo de vídeo directo segura. Apenas tecnologias abertas (como WebRTC) são usadas, que funcionam com todos os navegadores modernos.
(https://chitchatter.im/) - Secure P2P chat que é sem servidor, descentralizada e efêmero. Suporta texto, áudio, vídeo, tela e compartilhamento de arquivos.
- [Jam](https://github.com/jam-systems/jam) - Jam é o seu próprio Clubhouse de código aberto para miniconferências, amigos, comunidades.
- [Jami] (https://jami.net/) - Conferências de áudio e vídeo P2P.

- [Jitsi Meet](https://github.com/jitsi/jitsi-meet) - Videoconferência mais segura, flexível e totalmente gratuita. Se você usar a instância oficial, você precisará fazer login. Recomenda-se a auto-anfitrião.
- [Mirotalk P2P](https://p2p.mirotalk.com/) - Free WebRTC - P2P - Conferências de vídeo simples, seguras e rápidas em tempo real Até 4k e 60fps, compatíveis com todos os navegadores e plataformas.
- [Mumble] (https://www.mumble.info/) - Mumble é um aplicativo de comunicação de voz de código aberto com recursos avançados.
(https://peercalls.com/) - Chamadas de vídeo de grupo para todos os escritos em Go e TypeScript.


Clientes/modificações alternativas da Discórdia:
> [! AVISO]
> Seu IP e mensagens ainda serão compartilhadas e pertencem à Discord e eles não são criptografados.\
> Também usando qualquer uma dessas modificações/clientes [violações](https://nitter.net/discord/status/1006178587731550208#m) o [Discord ToS](https://discord.com/terms) então, não somos responsáveis por qualquer suspensão ou rescisão de sua conta **but**, isto deve [não acontecer **yet**](https://github.com/GooseMod/GooseMod/wiki/FAQ#is-goosemod-contra-discord-tos).
- [OpenAsar](https://openasar.dev/) - Uma alternativa de código aberto do app.asar da Discord desktop que vem com uma função [No Track](https://github.com/GooseMod/OpenAsar/blob/main/src/noTrack.js).
- [Vencord](https://github.com/Vendicated/Vencord) - Um mod cliente Discord que faz as coisas de forma diferente.
- [MelhorDiscord](https://betterdiscord.app/) - Uma modificação cliente para Discord, também você precisa instalar um plugin [DoNotTrack](https://betterdiscord.app/plugin/DoNotTrack) para bloquear rastreadores.
- [Kernel](https://github.com/kernel-mod/electron) - Um mod cliente super pequeno e rápido Electron com maior capacidade, também você precisa instalar um pacote [Discord Utilities](https://github.com/slow/discord-utilities) para bloquear rastreadores.
(https://replugged.dev/) - Uma continuação do mod desactualizado do cliente [Powercord](https://powercord.dev).
- [WebCord] (https://github.com/SpakingBat3/WebCord) - Um cliente sem discórdia e sem API Fosscord feito com o Electron.
== Ligações externas ==* https://github.com/Aliucord/Aliucord) - Uma modificação para o aplicativo Android Discord que completamente [desativa o rastreamento Discord] (https://github.com/Aliucord/blob/main/Aliucord/src/main/java/com/aliucord/coreplugins/NoTrack.java).

[Voltar ao topo](#contents)

# # Edição de Vídeo
□ **Evite **
- [![](https://shields.tosdr.org/en_417.svg)](https://tosdr.org/en/service/417)
- Sony Vegas
- DaVinci Resolver

Tais programas vêm cheios de rastreadores e telemetria. Você pode obter uma lista completa de razões para que você não deve ** usar Adobe [aqui](https://www.gnu.org/proprietary/malware-adobe.html). Quase o mesmo se aplica a muitos editores privatizativos.

□ ** Em vez de utilizar **

- [kdenlive](https://kdenlive.org/) - Editor de vídeo de código aberto. Livre e fácil de usar para qualquer propósito, para sempre.

- [LosslessCut](https://github.com/mifi/lossless-cut) - LosslessCut tem como objetivo ser a última plataforma cross FFmpeg GUI para operações extremamente rápidas e sem perdas em vídeo, áudio, legendas e outros arquivos de mídia relacionados.
- [Olive Video Editor](https://olivevideoeditor.org/) - Livre open-source avançado editor de vídeo não-linear atualmente em estado Alpha.
- [OpenCut] (https://github.com/OpenCut-app/OpenCut) - [beta] Um editor de vídeo livre e de código aberto para web, desktop e dispositivos móveis.
- [Shotcut](https://www.shhotcut.org/) - Shotcut é um editor de vídeo livre, aberto e simples multiplataforma.

[Voltar ao topo](#contents)

# # VPNs
□ **Evite **

- [Palavras VPN gratuitas](https://techcrunch.com/2020/09/24/free-vpn-bad-for-privacy/) do Google Play ou qualquer appstore. Esses serviços não são gratuitos, pois sugarão os dados das suas conexões, manterão registros e perfis para [vender seus dados aos anunciantes](https://thenextweb.com/news/be-cautious-free-vpns-are-selling- your-data-to-3rd-parties). Se um governo quiser rastrear alguém, tais aplicativos serão os primeiros a cair.

- Aplicativos VPN de código fechado como Surfshark ou NordVPN podem ser menos confiáveis, pois ninguém pode ter certeza de como eles lidam com seus dados. Além disso, pagar com cartão de crédito irá identificá-lo no pagamento. Além disso, se você precisar dar seu e-mail, ele também irá identificá-lo se este mesmo e-mail foi usado em outros serviços.


□ ** Em vez de utilizar **

Aqui estão algumas opções de código aberto e verdadeiramente privadas (sem dados pessoais e/ou cartão de crédito necessário):

- [IVPN](https://ivpn.net)
- [LNVPN](https://lnvpn.net)
- [Mullvad VPN](https://mullvad.net)
- [Proton VPN] (https://protonvpn.com)
(https://safing.io/)

[Voltar ao topo](#contents)

# # Navegador da Web

□ **Evite **

- ** Google Chrome** - Propriedade do Google e construído sobre o projeto Chromium de código aberto (também propriedade do Google). Ele vem com muitos recursos invasivos de privacidade, está conectado à sua conta Google na maioria das vezes. Está sob [a política de privacidade do Google](https://tosdr.org/en/service/217) que é conhecido por ser muito mau. O Google está disposto a aplicar o [Manifest v3](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-periodly) que é totalmente prejudicial aos esforços de privacidade.
- **Microsoft Edge** - É uma versão temática da Microsoft de Chromium com rastreadores da Microsoft em vez dos do Google. Segundo [a política de privacidade da Microsoft](https://tosdr.org/en/service/244), que também é muito ruim. Se você ainda quiser usá-lo, você pode [seguir este guia](https://anonymousplanet.org/guide.html#edge-19) para endurecer um pouco.
- **Opera** - Opera foi [adquirida por um consórcio de investidores chineses](https://en.wikipedia.org/wiki/Opera_(web_browser)#Aquisition_by_Chinese_consortium). O aplicativo tem [muitos rastreadores](https://reports.exodus-privacy.eu.org/de/reports/com.opera.browser/latest/).

□ ** Em vez de utilizar **

Android / iOS
- [Brave] (https://brave.com/) - Android/IOS. A Brave oferece um bom conjunto de proteção de privacidade e rastreador.

- [Firefox](https://www.mozilla.org/en-US/firefox/mobile/) - Android/IOS
== Ligações externas ==* Página oficial Um garfo endurecido do Firefox para Android, com bolhas proprietárias removidas.
- [#icons] [Vanadium] (https://vanadium.app/) - Lançamentos melhorados de privacidade e segurança de Chromium pela GrapheneOS.
== Ligações externas ==
- [Tor Browser](https://www.torproject.org/) - iOS/Android. Defenda-se contra rastrear e vigiar e contornar a censura.
- [Cromite](https://www.cromite.org/) - Cromite é um garfo Chromium baseado em Bromite com suporte embutido para bloqueio de anúncios e um olho para a privacidade.

Ecrã
- [Cromium Ungoogled] (https://github.com/ungoogled-software/ungoogled-chromium) - Uma abordagem leve para remover a dependência do Google Web service. Ungoogled-chromium é o Google Chromium, sem dependência de serviços da Google web.
- [Brave] (https://brave.com/) - Audácia oferece um bom conjunto de proteção de privacidade e rastreador.
- [Firefox](https://www.mozilla.org/en-US/firefox/new/) - Código aberto, navegador independente. Ele precisa de algum [hardening and tweaking](https://anonymousplanet.org/guide.html#firefox-1) para alcançar uma grande privacidade.
- [LibreWolf] (https://librewolf.net/) - Garfo Firefox focado na privacidade.
- [Tor Browser](https://www.torproject.org/)
(https://mullvad.net/en/browser/) - Navegador com as implicações de privacidade e segurança do navegador Tor, sem o uso da rede Tor.

> [! DIP]
> Pode ser interessante aprender o que você pode fazer para endurecer seu navegador. Você pode seguir esta seção [Guia do Hitchhiker para Anonymity Online](https://anonymousplanet.org/guide.html#appendix-v1-hardening- your-browsers) para fazê-lo. Por favor, se você não entende o que está fazendo, não o faça, pois pode estar causando mais dano do que bem à sua privacidade.

[Voltar ao topo](#contents)

# # Navegador Addons

# # # # Anti- rastreamento
Leia o que o addon faz antes de instalar. Se você não entende o que está fazendo, pode acabar prejudicando sua privacidade. Além disso, muitos addons podem retardar sua experiência de navegação.

- [uBlock Origin](https://ublockorigin.com/) - Bloqueador gratuito de conteúdo de anúncios em código aberto. Fácil na CPU e memória.
- [Leia os documentos da extensão](https://github.com/gorhill/uBlock/wiki/Blocking-mode) e escolha um dos modos recomendados para aumentar sua privacidade.
- Vá para configurações > lista de filtros > aborrecimentos, ligue easylist-cookies. Isso vai evitar que você o irritante Cookie popups.
- [LibRedirect](https://github.com/libredirect/libredirect) - Uma simples extensão web que redirecciona o Twitter, o YouTube, o Google Maps e muitos outros pedidos para alternativas de privacidade. O Ex Privacy Redirect não é mais mantido, o LibRedirect é um garfo mantido.

Ferramentas Úteis

- [Arquivo Único] (https://github.com/gildas-lormeau/SingleFile) - Salve uma cópia fiel de uma página web inteira em um único arquivo HTML para que você possa usá-la offline.

Sincronização do navegador
- [xBrowserSync](https://www.xbrowsersync.org/) - Sincronização do navegador como deve ser: seguro, anônimo e gratuito!

[Voltar ao topo](#contents)

# # Privacidade vs Segurança vs Anonimidade

Anonimidade, Privacidade e Segurança são frequentemente usados de forma intercambiável, mas eles realmente representam conceitos distintos. É importante entender as diferenças entre eles.

- A privacidade é sobre regular quem tem acesso às suas informações pessoais, estar ciente dos dados que estão sendo coletados sobre você, e ter a capacidade de decidir quem pode acessá-lo e como. Em suma, privacidade envolve controlar suas informações pessoais.

- Segurança refere-se a proteger suas informações pessoais de acesso não autorizado ou roubo. Envolve garantir que seus dados sejam protegidos e armazenados de forma segura, dificultando o acesso de atores maliciosos.

- O anonimato tem a ver com garantir que as tuas acções não possam ser rastreadas até ti. Isso significa que mesmo que alguém descubra o que você está fazendo, eles não serão capazes de identificá-lo como a fonte.

É importante notar que a privacidade e a segurança não são necessariamente interdependentes. Por exemplo, os sistemas Google são seguros e improvável de serem hackeados, mas o Google ainda tem acesso aos seus dados pessoais e faz uso dele.

Privacidade e anonimato também não são necessariamente vinculados, serviços como Signal oferecem altos níveis de privacidade, uma vez que eles não coletam quaisquer dados sobre o que você diz, com quem você fala ou como você usa o aplicativo, mas eles podem não ser anônimos, uma vez que você ainda precisa se registrar usando seu número de telefone (que é, em muitos casos, ligado à sua identidade).

Finalmente, existem serviços que podem oferecer todos os três: anonimato, privacidade e segurança. O foco principal desta lista é fornecer alternativas que priorizem a privacidade. Essas alternativas lhe dão controle sobre seus dados e não os coletam ou vendem.

[Voltar ao topo](#contents)

Ícones

Certamente! Aqui está a tabela formatada:

Ícone
--------------------
Cuidado: O desenvolvimento deste serviço parece estar inativo por um longo tempo. Talvez o projecto esteja abandonado. Investigar antes de utilizar. □
O software é um garfo: alguém fez uma cópia do projeto original (um garfo) e começou a desenvolvê-lo ainda mais independentemente. □
O software usa o ActivityPub, um protocolo de rede social descentralizada. □
Apenas Android.

[Voltar ao topo](#contents)