---
title: "Como Burlar Restrição de Download no Archive.org"
description: "Baixando livros com restrição do Archive.org"
---

# Como Burlar Restrição de Download no Archive.org

> Este guia tem o objetivo de ajudar a burlar a restrição de download no Archive.org. Os livros que possuem essa restrição apresentam as opções de download como: "No suitable files to display here." e/ou "PDF access not available for this item.", conforme ilustrado na imagem abaixo:



## Primeiro Passo

Faça login ou crie sua conta no Archive.org e certifique-se de clicar no botão "Borrow for 1 hour".



Após clicar, você terá acesso ao livro por 1 hora ou 14 dias, dependendo do livro. É **OBRIGATÓRIO** realizar esse empréstimo, pois caso contrário, o tutorial não funcionará!!!

## Segundo Passo

Usarei a URL do livro como exemplo: https://archive.org/details/engineeringillus0000tomj. Precisaremos do identificador do livro e há duas maneiras de obtê-lo.

A primeira maneira é pegar o texto após "/details/" ou acessar o link e procurar por _**Identifier**_ nas propriedades do livro, como mostra a imagem abaixo:



## Terceiro Passo

Com o _Identifier_ do livro em mãos, acesse a URL:

```bash
https://archive.org/services/loans/loan/?action=media_url&identifier=XXXXXXXXXX&format=pdf&redirect=1
```

Neste XXXXXXXXXXX, insira o _identifier_ do livro, que no exemplo será:

```bash
https://archive.org/services/loans/loan/?action=media_url&identifier=engineeringillus0000tomj&format=pdf&redirect=1
```

Ao navegar por essa URL, ela retornará um arquivo com a extensão .acsm, provavelmente nomeado como URLLink.acsm. Baixe-o em seu dispositivo e guarde, pois precisaremos dele!

> Caso receba uma mensagem JSON {"error":"Request is not authorized."}, significa que você não está logado ou não pegou o livro emprestado!

## Quarto Passo

Após ter baixado o arquivo com extensão .acsm, vamos convertê-lo para PDF ou EPUB!

Acesse o site [acsmconverter](https://www.acsmconverter.com/) e faça a conversão. Clique em _select files_, depois clique em converter e, por fim, faça o download.

> Vale lembrar que é possível converter para outros tipos de arquivo, mas os formatos que testei e funcionaram foram PDF e EPUB.

Guia criado por [u/wandrey](https://lemmy.eco.br/u/wandrey)