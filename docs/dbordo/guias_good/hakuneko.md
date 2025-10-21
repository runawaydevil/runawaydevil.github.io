---
sidebar_position: 16
title: "Guia Completo: Convertendo Mangás para Kindle com Hakuneko e KCC"
description: "Aprenda a converter mangás para o Kindle usando Hakuneko, KCC e Calibre, com dicas extras e métodos alternativos."
---

# Guia Completo: Convertendo Mangás para Kindle com Hakuneko e KCC

Se você é fã de mangás e deseja aproveitá-los em seu **Kindle**, este guia detalha todas as etapas necessárias para realizar a conversão com qualidade e compatibilidade máxima. Além dos métodos tradicionais, incluímos novas dicas e ferramentas opcionais para facilitar o processo.

---

## 🧩 1. Baixe as Páginas do Mangá com o Hakuneko

O [**Hakuneko**](https://hakuneko.download/) é uma ferramenta poderosa para baixar capítulos de mangás de forma organizada. Ele salva cada página como uma imagem `.png`.

### Passos:

- Escolha a fonte (site suportado pelo Hakuneko).
- Selecione o mangá e os capítulos desejados.
- Baixe as páginas para uma pasta local no seu computador.

> 💡 **Dica:** Crie uma pasta separada para cada capítulo. Isso evitará confusão na hora de gerar os arquivos .cbr e .epub.

---

## 🗜️ 2. Compacte as Pastas em Arquivos .zip

Depois de baixar os capítulos:

1. Selecione todas as imagens de um capítulo.
2. Use uma ferramenta como **WinRAR**, **7-Zip** ou o compactador nativo do Windows para gerar um `.zip`.
3. Verifique se o arquivo contém **somente imagens**.

> 🔸 Caso queira automatizar essa etapa, você pode usar o comando PowerShell ou terminal:
> 
> ```bash
> for /d %f in (*) do (cd "%f" && tar -a -c -f "%f.zip" *.png)
> ```
> 
> Isso criará automaticamente um `.zip` para cada pasta de capítulo.

---

## 🔁 3. Renomeie o Arquivo de .zip para .cbr

1. Localize o arquivo `.zip`.
2. Renomeie sua extensão para `.cbr` (formato de leitura de quadrinhos digitais).
   - Exemplo: `manga_capitulo1.zip` → `manga_capitulo1.cbr`

> ⚠️ **Atenção:** Ative a exibição de extensões no Windows (menu **Exibir → Extensões de nomes de arquivos**), senão a renomeação pode não funcionar corretamente.

---

## 🧠 4. Converta para .epub com o Kindle Comic Converter (KCC)

Baixe o [**Kindle Comic Converter (KCC)**](https://github.com/ciromattia/kcc).  

> ⚠️ Recomenda-se usar **versões antigas** (ex.: 5.x) para compatibilidade total com modelos antigos de Kindle.

### Como usar:

1. Abra o KCC e selecione o modelo do seu Kindle (Paperwhite, Oasis, etc.).
2. Ajuste as configurações desejadas:
   - Modo **retrato** para leitura vertical.
   - Margens automáticas e redimensionamento proporcional.
3. Adicione o arquivo `.cbr`.
4. (Opcional) Edite os **metadados**:
   - Título, autor e número do volume.
5. Clique em **Converter** e o arquivo `.epub` será gerado.

> 🔸 Caso queira converter múltiplos volumes de uma vez, basta arrastar todos os `.cbr` para a janela do KCC antes de clicar em “Converter”.

> ❗ **Importante:** Se não editar os metadados agora, o **Calibre** poderá bloquear alterações posteriores.

---

## ⚙️ 5. Converta para .mobi com o Calibre

1. Importe o arquivo `.epub` no [**Calibre**](https://calibre-ebook.com/).
2. Edite as informações:
   - Adicione uma capa (opcional).
   - Ajuste título, autor e série.
3. Clique em **Converter livros** e selecione o formato `.mobi`.

> 💡 **Dica Extra:** Para dispositivos Kindle mais novos (10ª geração em diante), prefira o formato **.azw3**, que mantém melhor qualidade e compressão.

---

## 📲 6. Transfira para o Kindle

Você pode enviar o arquivo para o Kindle de três formas:

- **Via USB:** conecte o Kindle e envie o `.mobi` ou `.azw3` pelo Calibre.
- **Via E-mail Kindle:** envie o arquivo para o e-mail do seu dispositivo (`nome@kindle.com`).
- **Via Send to Kindle (oficial da Amazon):** arraste o arquivo para o aplicativo e ele será sincronizado automaticamente.

> 📧 Em caso de dúvidas ou problemas técnicos, entre em contato: **runawaydevil@pm.me**

---

## 🧰 7. Dica Extra — Convertendo Diretamente para Kindle com o KCC CLI

Usuários avançados podem usar o **modo de linha de comando (CLI)** do KCC:

```bash
kcc-c2e -p KPW -m -u manga_capitulo1.cbr
```

- `-p KPW` define o modelo (Kindle Paperwhite).
- `-m` ativa o modo manga (rotação automática e contraste otimizado).
- `-u` redimensiona as páginas para a resolução do Kindle.

Essa abordagem é ideal para automação em lotes e pipelines de conversão.

---

## 🎉 8. Aproveite!

Agora seu mangá está pronto para leitura com qualidade otimizada no seu Kindle. Aproveite a experiência sem perda de contraste ou cortes de página.

> 💡 Para melhor visualização, desative o modo escuro e use o ajuste de brilho padrão do Kindle.

---

## 🔧 Solução de Problemas Comuns

| Problema                     | Causa Provável                                   | Solução                                          |
| ---------------------------- | ------------------------------------------------ | ------------------------------------------------ |
| Arquivo não abre no Kindle   | Versão recente do KCC gerou `.epub` incompatível | Converta com Calibre para `.mobi` ou `.azw3`     |
| Páginas invertidas           | Configuração de layout errada                    | Refaça a conversão com o modo "Manga" habilitado |
| Erro de metadados no Calibre | Edição não feita no KCC                          | Recrie o `.epub` ajustando os metadados          |

---

> “**A tecnologia é melhor quando une as pessoas.**”  
> — *Matt Mullenweg*




