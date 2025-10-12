# 🚀 Configuração Jenkins para Pablo.News Vault

## 📋 Pré-requisitos

### 1. Plugins Necessários
Instale os seguintes plugins no Jenkins:
- **Pipeline** (já incluído)
- **SSH Agent** (para deploy via SSH)
- **NodeJS** (para gerenciar versões do Node.js)
- **Git** (para checkout do código)
- **Slack Notification** (opcional, para notificações)

### 2. Credenciais
Configure as seguintes credenciais:
- **SSH Key**: Chave SSH para acesso ao servidor de deploy
- **Git Credentials**: Credenciais para acesso ao repositório (se privado)

## ⚙️ Configuração do Job

### 1. Criar Pipeline Job
1. Acesse o Jenkins
2. Clique em "New Item"
3. Escolha "Pipeline"
4. Nome: `pablo-news-deploy`

### 2. Configurar Pipeline
1. **Pipeline script from SCM**
2. **SCM**: Git
3. **Repository URL**: `https://github.com/runawaydevil/runawaydevil.github.io.git`
4. **Branch**: `main`
5. **Script Path**: `Jenkinsfile`

### 3. Configurar Node.js
1. Vá em "Manage Jenkins" → "Global Tool Configuration"
2. Adicione Node.js versão 18
3. Marque "Install automatically"

## 🔧 Personalização

### Variáveis de Ambiente
Edite o `Jenkinsfile` para ajustar:

```groovy
environment {
    NODE_VERSION = '18'                    // Versão do Node.js
    BUILD_DIR = 'docs/.vitepress/dist'     // Diretório de build
    DEPLOY_DIR = '/var/www/pablo-news'     // Diretório de deploy
    SERVER_USER = 'your-user'              // Usuário do servidor
    SERVER_HOST = 'your-server.com'        // Host do servidor
}
```

### Credenciais SSH
1. Vá em "Manage Jenkins" → "Manage Credentials"
2. Adicione uma credencial do tipo "SSH Username with private key"
3. ID: `jenkins-ssh-key`
4. Configure a chave privada SSH

### Servidor de Deploy
Configure o servidor de destino:

```bash
# No servidor de deploy
sudo mkdir -p /var/www/pablo-news
sudo chown $USER:$USER /var/www/pablo-news

# Configurar Nginx (exemplo)
sudo nano /etc/nginx/sites-available/pablo-news
```

Exemplo de configuração Nginx:
```nginx
server {
    listen 80;
    server_name pablo.news www.pablo.news;
    root /var/www/pablo-news;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Cache para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🚀 Execução

### 1. Execução Manual
- Acesse o job no Jenkins
- Clique em "Build Now"

### 2. Execução Automática
- Configure webhook no GitHub
- URL: `http://your-jenkins.com/github-webhook/`
- Eventos: Push, Pull Request

### 3. Execução por Cron
Configure um build periódico:
- **Schedule**: `H 2 * * *` (todo dia às 2h)

## 📊 Monitoramento

### 1. Logs
- Acesse o build específico
- Clique em "Console Output"
- Monitore cada stage

### 2. Artefatos
- Arquivos de build são automaticamente arquivados
- Acesse em "Build Artifacts"

### 3. Notificações (Opcional)
Configure notificações Slack:
```groovy
post {
    success {
        slackSend channel: '#deployments', 
                  color: 'good', 
                  message: "✅ Pablo.News deployado! Build #${BUILD_NUMBER}"
    }
    failure {
        slackSend channel: '#deployments', 
                  color: 'danger', 
                  message: "❌ Falha no deploy! Build #${BUILD_NUMBER}"
    }
}
```

## 🔒 Segurança

### 1. Variáveis Sensíveis
Use "Manage Jenkins" → "Configure System" → "Global Properties" para variáveis sensíveis:

```groovy
environment {
    DEPLOY_KEY = credentials('deploy-ssh-key')
    API_TOKEN = credentials('api-token')
}
```

### 2. Permissões
Configure roles no Jenkins:
- **Developers**: Build e view
- **Deployers**: Build e deploy
- **Admins**: Tudo

## 🐛 Troubleshooting

### Problemas Comuns

**1. Node.js não encontrado**
```bash
# Verificar instalação
which node
node --version

# Instalar via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

**2. Permissões SSH**
```bash
# Testar conexão SSH
ssh -i /path/to/key user@server.com

# Verificar permissões
chmod 600 /path/to/key
```

**3. Build falha**
```bash
# Verificar logs detalhados
npm run build --verbose

# Limpar cache
rm -rf node_modules/.cache
npm ci
```

**4. Deploy falha**
```bash
# Verificar espaço em disco
df -h

# Verificar permissões do diretório
ls -la /var/www/pablo-news
```

## 📈 Otimizações

### 1. Cache de Dependências
```groovy
stage('Install Dependencies') {
    steps {
        sh '''
            if [ -f package-lock.json ]; then
                npm ci --cache .npm
            else
                npm install --cache .npm
            fi
        '''
    }
}
```

### 2. Build Paralelo
```groovy
stage('Build') {
    parallel {
        stage('Build Site') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
```

### 3. Deploy Blue-Green
```groovy
stage('Deploy Blue-Green') {
    steps {
        script {
            def currentColor = sh(script: 'cat /var/www/pablo-news/color.txt || echo "blue"', returnStdout: true).trim()
            def newColor = currentColor == 'blue' ? 'green' : 'blue'
            
            sh "rsync -avz --delete ${BUILD_DIR}/ user@server.com:/var/www/pablo-news-${newColor}/"
            sh "echo '${newColor}' > /var/www/pablo-news-${newColor}/color.txt"
            sh "ln -sfn /var/www/pablo-news-${newColor} /var/www/pablo-news"
        }
    }
}
```

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique os logs do Jenkins
2. Teste os comandos manualmente no servidor
3. Verifique as credenciais e permissões
4. Consulte a documentação do Jenkins

---

**Nota**: Este arquivo deve ser personalizado conforme sua infraestrutura específica.
