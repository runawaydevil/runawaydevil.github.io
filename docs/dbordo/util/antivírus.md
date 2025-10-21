---
sidebar_position: 1
title: "Avaliação dos Antivírus: Dos Piores aos Menos Piores"
description: "Artigo expandido e revisado com inteligência artificial"
lang: pt-BR
lastUpdated: true
---

# Avaliação dos Antivírus: Dos Piores aos Menos Piores

:::info
Este conteúdo foi originalmente publicado no Lemmy por [orchestralblend](https://github.com/orchestralblend). Para entrar em contato: [orchestralblend@systemli.org](mailto:orchestralblend@systemli.org)
:::

**Para um resumo dos antivírus mais confiáveis, consulte o final deste texto. Obrigado pela leitura.**

Desde 2018, eu atuo na área de engenharia reversa, focando na análise manual de "binaries", ou executáveis, como são conhecidos no Brasil. No meu trabalho, utilizo as ferramentas mais avançadas disponíveis para a análise de malwares, incluindo **dnSpy**, **IDA Pro**, **Ghidra**, **x96dbg**, **Frida**, entre outros. 

O termo "malware" refere-se a softwares maliciosos, como vírus e trojans, cujo principal objetivo é causar danos aos usuários.

Minha jornada com malwares começou em 2013, quando frequentemente encontrava esses arquivos ao tentar fazer downloads para jogos. Naquela época, eu ainda não conhecia os bloqueadores de anúncios, o que me levou a aprender, através de tentativa e erro, a identificar o botão correto para download. Ao longo dos anos, testei uma variedade de antivírus, incluindo Norton, Avast, AVG, Avira, Kaspersky, BitDefender, McAfee, TotalAV, Windows Defender (das versões Windows 7, 8 e 8.1) e MalwareBytes. Estes são os que mais marcaram minha experiência.

## Avira

O Avira foi a minha escolha para computadores que não estavam em ambientes virtualizados. Considerava-o um bom antivírus até que a Norton adquiriu a empresa. [Leia mais aqui](https://www.pcmag.com/news/nortonlifelock-buys-avira-to-expand-into-freemium-antivirus-protection). Após essa aquisição, minha confiança no Avira diminuiu.

## Norton e AVG

O Norton já carregava uma má reputação, sendo muitas vezes pré-instalado em computadores da Samsung, além de insistir em oferecer pacotes adicionais. O AVG seguiu um caminho semelhante, tornando-se conhecido como um "bloatware", ou seja, software que ocupa espaço e recursos desnecessários no sistema.

## Avast

Eu não recomendo o uso do Avast, especialmente depois do escândalo em que a empresa foi pega [vendendo dados de usuários](https://www.cisoadvisor.com.br/avast-e-multada-em-us-165-mi-por-venda-de-dados-de-usuarios/). Vale mencionar que o CCleaner também é de propriedade da mesma empresa.

## Windows Defender

Com a chegada do Windows 10, o Windows Defender surgiu como uma solução eficaz para a proteção diária, oferecendo um antivírus simples, robusto, gratuito e eficiente, sem as incômodas ofertas de pacotes pagos.

## Panda e Kaspersky

Ambos os antivírus, Panda e Kaspersky, têm seus pontos fortes e fraquezas. O Kaspersky, por exemplo, é bem respeitado por sua capacidade de detectar ameaças avançadas. O Panda, por outro lado, é conhecido por sua interface amigável e pela proteção em tempo real.

Ao escolher um antivírus, é fundamental considerar suas necessidades específicas de segurança, o desempenho do software e sua reputação em termos de privacidade. A tecnologia de segurança está em constante evolução, e manter-se informado é a chave para proteger seu sistema contra ameaças digitais.

O Kaspersky, uma empresa originária da Rússia, conquistou uma sólida reputação no setor de segurança digital ao longo dos anos. Recentemente, a empresa decidiu transferir seus servidores para a Suécia, possivelmente como uma estratégia para aumentar a confiança de seus usuários. [Fonte](https://en.wikipedia.org/wiki/Kaspersky_Lab)

Entretanto, em 2024, o Kaspersky foi banido dos Estados Unidos. [Fonte](https://www.pcmag.com/news/kaspersky-shutting-down-us-operations-following-nationwide-ban). A principal preocupação dos reguladores norte-americanos reside na possibilidade de que os vínculos da empresa com a Rússia possam expô-la a possíveis abusos. Há receios de que o governo russo, conhecido como Kremlin, possa coletar dados dos cidadãos ou, de alguma forma, ter acesso não autorizado aos computadores americanos.

Embora a empresa tenha acesso a informações sensíveis, é importante ressaltar que seu foco seria apenas em agentes do governo. A frase “You’re safe kiddo” ilustra um certo alívio, mas é fundamental que os usuários estejam cientes dos riscos envolvidos.

Em síntese, assim como aconteceu com o Panda Security, o Kaspersky solidificou sua imagem no mercado através de campanhas publicitárias e patrocínios a influenciadores do YouTube. Contudo, é importante lembrar que, sendo um antivírus de origem russa, há opiniões que o classificam como “funky” e “garbage”, ou seja, com uma reputação questionável.

## Outros antivírus no mercado

Quando falamos sobre alternativas de softwares antivírus, alguns nomes se destacam:

- **Bitdefender**: Embora seja considerado um dos melhores no mercado, pode ter um custo elevado.
- **McAfee**: As avaliações sobre este antivírus são mistas, com muitos usuários considerando-o apenas “meh”.
- **TotalAV**: Também é uma opção que tende a ser mais cara, mas que vale a pena considerar.

### Resumo das opções

- **Bitdefender**: É aconselhável experimentar a versão de teste gratuita. Quando o período de teste estiver prestes a expirar, você pode facilmente reiniciá-lo utilizando um novo cadastro no serviço [(emailnator.com)](https://emailnator.com).
- **MalwareBytes**: Ideal para a remoção de malware, mas não deve ser utilizado como a solução principal do dia a dia.
- **Windows Defender (Windows 10 e 11)**: Uma boa escolha para uso cotidiano, oferecendo proteção básica e eficiente.

Para dispositivos Android, recomenda-se o uso do [Hypatia](https://apt.izzysoft.de/fdroid/index/apk/org.maintainteam.hypatia/) ou do [Bitdefender Mobile](https://www.bitdefender.com/pt-br/consumer/mobile-security-android). Para a análise de arquivos menores que 650 MB, você pode utilizar o [VirusTotal](https://www.virustotal.com/gui/) ou o [Triage](https://tria.ge/). Para arquivos maiores, recomenda-se o uso de uma máquina virtual (VM). É sempre preferível optar por análises de softwares antivírus com uma boa reputação no mercado, pois soluções menos conhecidas, como o Arcabit, costumam apresentar muitos falsos positivos.

Além disso, o bom senso e conhecimentos básicos sobre sistemas operacionais são suas melhores armas na prevenção contra malwares.

---

Se você deseja se aprofundar ainda mais no tema sobre antivírus e segurança digital, não deixe de conferir a Megathread do [MediaSavvy - Security](https://mediasavvy.pages.dev/Wiki/Security.html).

---

*Este texto foi revisto e expandido por [runawaydevil](https://pablo.space)*

> "O conhecimento é poder, mas o entusiasmo é a chave. — Norman Vincent Peale"





