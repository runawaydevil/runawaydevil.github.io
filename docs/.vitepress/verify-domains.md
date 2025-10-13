# Verificação de Domínios

## Checklist de Verificação

### Domínio Principal (piracy.live)
- [ ] Site carrega corretamente
- [ ] RSS feed funciona: `/feed.rss`
- [ ] Links internos funcionam
- [ ] Meta tags estão corretas
- [ ] Canonical URL aponta para piracy.live
- [ ] Open Graph tags funcionam
- [ ] Twitter cards funcionam

### Domínio Secundário (pablo.news)
- [ ] Site carrega corretamente
- [ ] RSS feed funciona: `/feed.rss`
- [ ] Links internos funcionam
- [ ] Meta tags estão corretas
- [ ] Canonical URL aponta para piracy.live
- [ ] Open Graph tags funcionam
- [ ] Twitter cards funcionam

### Funcionalidades Específicas
- [ ] Diário Do Capitão funciona em ambos os domínios
- [ ] Vault funciona em ambos os domínios
- [ ] Cultura funciona em ambos os domínios
- [ ] Busca funciona em ambos os domínios
- [ ] Sidebar funciona em ambos os domínios

### SEO e Performance
- [ ] Meta tags de domínios alternativos
- [ ] Links rel="alternate" funcionam
- [ ] Canonical URLs corretas
- [ ] Performance similar em ambos os domínios
- [ ] Mobile responsivo em ambos os domínios

### Segurança
- [ ] HTTPS habilitado em ambos os domínios
- [ ] Headers de segurança funcionam
- [ ] CSP não bloqueia funcionalidades
- [ ] Robots.txt adequado

## Comandos de Verificação

```bash
# Verificar se o build funciona
npm run build

# Verificar se o servidor local funciona
npm run dev

# Verificar se os testes passam
npm run test:run

# Verificar se o linting está ok
npm run lint
```

## URLs para Testar

### Domínio Principal
- https://piracy.live
- https://piracy.live/captain/
- https://piracy.live/vault/
- https://piracy.live/cultura/
- https://piracy.live/feed.rss

### Domínio Secundário
- https://pablo.news
- https://pablo.news/captain/
- https://pablo.news/vault/
- https://pablo.news/cultura/
- https://pablo.news/feed.rss

## Troubleshooting

### Se o domínio secundário não funcionar
1. Verificar configuração DNS
2. Verificar configuração GitHub Pages
3. Verificar se o CNAME está correto
4. Verificar se o HTTPS está habilitado

### Se as meta tags estiverem incorretas
1. Verificar `docs/.vitepress/environment.ts`
2. Verificar `docs/.vitepress/config.ts`
3. Fazer rebuild e redeploy
4. Limpar cache do navegador
