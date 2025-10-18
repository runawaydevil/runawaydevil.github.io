---
sidebar_position: 12
title: "Como abrir portas no roteador em rede CGNAT"
description: "Guia de como abrir portas no roteador em rede CGNAT"
---

# 🌐 **Como Abrir Portas no Roteador em Rede CGNAT**

Dependendo do tipo de alocação de portas e com a colaboração do provedor, é possível abrir a porta do cliente torrent mesmo em uma rede **CGNAT**. Siga as etapas abaixo para verificar bloqueios e entender como proceder.

::: warning **Atenção!**
O processo de **port forwarding** pode expor sua rede a riscos de **port scan**. Certifique-se de confiar no solicitante antes de realizar qualquer alteração.  
A extensão [Port Authority](https://github.com/ACK-J/Port_Authority) pode ajudar a mitigar esses riscos.
:::

---

## ⚙️ Verificando Configurações no Sistema

Ative o **UPnP** ou **UPnP/NAT** tanto no cliente torrent quanto no roteador.

![UPnP Ativado no Cliente Torrent](/img/cgnat-portas-1.png)

![UPnP no Roteador](/img/cgnat-portas-2.png)

> As opções acima podem variar conforme o modelo do roteador e o cliente torrent utilizado.

---

## 🔥 Verificando o Firewall

Confira se o firewall do sistema operacional está permitindo a conexão do cliente torrent.  
Se estiver usando antivírus com firewall embutido, revise também essas configurações — muitos bloqueiam conexões sem necessidade.

![Firewall do Windows (1)](/img/cgnat-portas-3.png)

![Firewall do Windows (2)](/img/cgnat-portas-4.png)

Com o cliente torrent aberto, acesse o site [portchecker.co](https://portchecker.co) e teste a porta configurada.  
Se aparecer **fechada** ou **inacessível**, será necessário abri-la manualmente.

> 🔧 Configure o cliente torrent para usar **porta fixa**, e defina um **IP interno fixo** no seu computador ou via reserva por MAC no roteador.

Depois, abra a porta no roteador apontando para esse IP interno e refaça o teste. Se continuar fechada, é provável que o bloqueio esteja no provedor.

---

## 🛰️ Quando o Bloqueio Está no Provedor

Alguns provedores permitem apenas acesso limitado ao roteador (por exemplo, alterar o Wi-Fi), sem permitir **Port Forwarding**.  
Verifique se você tem acesso total. Caso contrário, entre em contato com o provedor.

![Acesso Limitado](/img/cgnat-portas-5.png)

![Acesso Completo](/img/cgnat-portas-6.png)

> 💡 Em roteadores **Huawei**, a opção de **Port Forwarding** costuma aparecer como **Port Mapping**.

---

## 🧭 Verificando se Está em Rede CGNAT

Acesse o painel do roteador e verifique o IP da **WAN**. Compare com o IP exibido no site [MeuIP](https://www.meuip.com.br/):

- ✅ **Mesmo IP:** você **não está** em CGNAT.
- 🚫 **IPs diferentes:** você **está** em CGNAT.

![IP na WAN](/img/cgnat-portas-7.png)

![Site Meu IP](/img/cgnat-portas-8.png)

---

## ⚙️ Tipos de Alocação de Portas em CGNAT

Em redes CGNAT, as portas podem ser alocadas de duas maneiras:

### 🔄 Dinâmica

Cada cliente recebe uma quantidade específica de portas, escolhidas automaticamente pelo sistema.  
Atualmente, **não há método conhecido** para abrir portas manualmente nesse modo.

### 🧱 Estática

Mais comum por questões de registro de logs. O provedor define uma **faixa de portas** para cada cliente:

- Cliente 1 → 30401–30600  
- Cliente 2 → 30601–30800  

Se for seu caso, entre em contato com o provedor e peça a faixa de portas atribuída.  
Explique que já tentou abrir sem sucesso — com um pouco de insistência, pode conseguir essa informação.

Após obtê-la, configure o cliente torrent para usar uma porta dentro da faixa e abra-a no roteador.

---

## ✅ CGNAT com Porta Aberta

![IP na WAN](/img/cgnat-portas-9.png)

![Meu IP](/img/cgnat-portas-10.png)

![Teste de Portas](/img/cgnat-portas-11.png)

Pronto! Rede **CGNAT** com a porta aberta e conexão estável.

Alguns provedores podem oferecer **IP fixo** (externo) como solução paga, alegando ser a única forma. Avalie se vale a pena.  
Outra alternativa é migrar para **IPv6**, embora o suporte a Port Forwarding varie.

> ⚠️ Todas as informações deste guia foram compiladas a partir de comunidades técnicas e testes práticos.

---

> “**A inovação é o que distingue um líder de um seguidor.**”  
> — *Steve Jobs*




