# 🔒 Política de Segurança

## ⚠️ Informações Importantes

Este repositório contém configurações para múltiplos domínios e scripts que podem processar dados sensíveis. Siga estas diretrizes para manter a segurança.

## 🚫 O que NÃO deve ser commitado

### Chaves de API e Credenciais
- Chaves da OpenAI (`sk-proj-*`)
- Tokens de autenticação
- Senhas e credenciais de banco de dados
- Certificados SSL/TLS
- Chaves de deploy e CI/CD

### Arquivos de Configuração Sensíveis
- `.env` (arquivo de ambiente)
- `config.local.ts`
- `config.secrets.ts`
- `config.prod.ts`
- `api-keys.json`
- `credentials.json`

### Scripts e Processamento
- Pasta `scripts/` (contém chaves de API)
- Pasta `tests/` (configurações de teste)
- Pasta `in/` (artigos para processamento)
- Logs de API e debug
- Arquivos temporários de processamento

### Dados de Processamento
- `duplicate-detection-report.json`
- `content-analysis.db`
- `backup_duplicates/`
- Sidebars gerados automaticamente

## ✅ O que pode ser commitado

### Configuração Pública
- `docs/.vitepress/config.ts`
- `docs/.vitepress/constants.ts`
- `docs/.vitepress/environment.ts`
- `docs/.vitepress/sidebar.ts`
- `package.json`
- `README.md`

### Documentação
- `docs/` (conteúdo público)
- `SECURITY.md`
- `.env.example`

## 🔧 Configuração Segura

### 1. Variáveis de Ambiente
```bash
# Copiar arquivo de exemplo
cp .env.example .env

# Editar com suas credenciais
nano .env
```

### 2. Verificação de Segurança
```bash
# Verificar se há chaves expostas
grep -r "sk-proj-" . --exclude-dir=node_modules

# Verificar arquivos sensíveis
find . -name "*.key" -o -name "*.pem" -o -name "*.env"
```

### 3. Git Hooks (Opcional)
```bash
# Instalar pre-commit hook
npm install --save-dev husky

# Configurar verificação
npx husky add .husky/pre-commit "npm run security-check"
```

## 🚨 Em caso de vazamento

Se uma chave de API for exposta:

1. **Revogar imediatamente** a chave no painel da OpenAI
2. **Gerar nova chave** e atualizar configurações
3. **Verificar logs** de uso da chave antiga
4. **Atualizar** todos os ambientes (dev, staging, prod)
5. **Notificar** a equipe sobre a mudança

## 📞 Contato

Para questões de segurança, entre em contato:
- Email: pablomurad@pm.me
- GitHub: [@runawaydevil](https://github.com/runawaydevil)

## 🔄 Atualizações

Este arquivo deve ser atualizado sempre que:
- Novas chaves de API forem adicionadas
- Novos serviços externos forem integrados
- Políticas de segurança mudarem
- Vulnerabilidades forem descobertas
