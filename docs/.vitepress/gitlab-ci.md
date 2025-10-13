# GitLab CI/CD para VitePress

Este documento explica como configurar e usar o GitLab CI/CD para deploy automático do VitePress.

## Arquivos de Configuração

### `.gitlab-ci.yml` (Básico)
Pipeline simples para deploy automático no GitLab Pages.

### `.gitlab-ci-custom.yml` (Avançado)
Pipeline com configurações avançadas, incluindo:
- Deploy para branches de desenvolvimento
- Domínio customizado
- Cache otimizado
- Jobs de limpeza

## Configuração no GitLab

### 1. Configurações Básicas
1. Acesse: `https://gitlab.com/seu-usuario/seu-projeto/-/settings/ci_cd`
2. Em "Variables", adicione:
   - `NODE_VERSION`: `18`
   - `VITEPRESS_DIST_DIR`: `docs/.vitepress/dist`

### 2. Configurações Avançadas (Opcional)
Para usar o pipeline avançado, adicione:
- `CUSTOM_DOMAIN`: `seu-dominio.com`
- `DEPLOY_TOKEN`: `seu-token-de-deploy`

### 3. GitLab Pages
1. Acesse: `https://gitlab.com/seu-usuario/seu-projeto/-/settings/pages`
2. Configure o domínio se necessário
3. O deploy automático será ativado após o primeiro pipeline

## Como Usar

### Pipeline Básico
```bash
# Usar o arquivo básico
mv .gitlab-ci.yml .gitlab-ci-basic.yml
mv .gitlab-ci-custom.yml .gitlab-ci.yml
```

### Pipeline Avançado
```bash
# Usar o arquivo avançado
mv .gitlab-ci-custom.yml .gitlab-ci.yml
```

## Jobs Disponíveis

### `build`
- Instala dependências
- Executa `npm run build`
- Gera artefatos para deploy

### `pages`
- Deploy automático para GitLab Pages
- Executa apenas em `main`/`master`

### `deploy_preview`
- Deploy manual para branches de desenvolvimento
- Disponível em todas as branches exceto `main`/`master`

### `deploy_custom_domain`
- Deploy com domínio customizado
- Requer configuração de variáveis

### `cleanup`
- Limpeza de arquivos temporários
- Executa sempre após deploy

## Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|---------|
| `NODE_VERSION` | Versão do Node.js | `18` |
| `VITEPRESS_DIST_DIR` | Diretório de build | `docs/.vitepress/dist` |
| `CUSTOM_DOMAIN` | Domínio customizado | - |
| `DEPLOY_TOKEN` | Token de deploy | - |

## Cache

O pipeline utiliza cache para:
- `node_modules/`
- `.npm/`

Isso acelera builds subsequentes.

## Artefatos

- **Build**: `docs/.vitepress/dist` (expira em 1 hora)
- **Pages**: `public/` (expira em 1 semana)
- **Preview**: `public/` (expira em 1 dia)

## Domínio Customizado

Para usar domínio customizado:

1. Configure a variável `CUSTOM_DOMAIN`
2. Execute o job `deploy_custom_domain`
3. Configure DNS para apontar para GitLab Pages

## Troubleshooting

### Erro de Build
- Verifique se `package.json` está correto
- Confirme se `npm run build` funciona localmente

### Erro de Deploy
- Verifique permissões do projeto
- Confirme se GitLab Pages está ativado

### Cache Issues
- Limpe o cache nas configurações do projeto
- Ou adicione `cache: {}` para desabilitar

## Exemplo de Uso

```bash
# Clone o repositório
git clone https://gitlab.com/seu-usuario/seu-projeto.git
cd seu-projeto

# Configure o pipeline
cp .gitlab-ci-custom.yml .gitlab-ci.yml

# Commit e push
git add .gitlab-ci.yml
git commit -m "Add GitLab CI/CD pipeline"
git push origin main

# O deploy será executado automaticamente
```

## Monitoramento

- Acesse: `https://gitlab.com/seu-usuario/seu-projeto/-/pipelines`
- Verifique logs de cada job
- Monitore artefatos gerados

## Segurança

- Nunca commite tokens ou chaves de API
- Use variáveis de ambiente do GitLab
- Configure permissões adequadas

---

*Para mais informações, consulte a [documentação oficial do GitLab CI/CD](https://docs.gitlab.com/ee/ci/).*
