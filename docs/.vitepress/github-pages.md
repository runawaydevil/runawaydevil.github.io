# Configuração GitHub Pages para Múltiplos Domínios

## Domínios Configurados

- **Principal:** piracy.live
- **Secundário:** pablo.news

## Configuração DNS

### Para piracy.live (domínio principal)
```
CNAME piracy.live -> runawaydevil.github.io
```

### Para pablo.news (domínio secundário)
```
CNAME pablo.news -> runawaydevil.github.io
```

## Configuração GitHub Pages

1. **Settings > Pages**
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs

2. **Custom Domain**
   - Adicionar ambos os domínios
   - Ativar HTTPS para ambos

## Build e Deploy

```bash
# Build para produção
npm run build

# Deploy automático via GitHub Actions
# O workflow está configurado para fazer deploy em ambos os domínios
```

## Verificação

Após o deploy, verificar:
- [ ] piracy.live carrega corretamente
- [ ] pablo.news carrega corretamente
- [ ] RSS feed funciona em ambos os domínios
- [ ] Links internos funcionam
- [ ] Meta tags estão corretas

## Rollback

Se necessário reverter para apenas pablo.news:
1. Atualizar `docs/.vitepress/domains.ts`
2. Atualizar `docs/.vitepress/config.ts`
3. Fazer novo deploy
