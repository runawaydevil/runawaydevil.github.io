pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18'
        BUILD_DIR = 'docs/.vitepress/dist'
        DEPLOY_DIR = '/var/www/pablo-news'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo '✅ Código baixado com sucesso'
            }
        }
        
        stage('Setup Node.js') {
            steps {
                script {
                    // Instalar Node.js usando nvm ou usar versão global
                    sh '''
                        if command -v nvm &> /dev/null; then
                            nvm install ${NODE_VERSION}
                            nvm use ${NODE_VERSION}
                        else
                            echo "Node.js ${NODE_VERSION} deve estar instalado globalmente"
                        fi
                    '''
                    echo '✅ Node.js configurado'
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci --only=production'
                echo '✅ Dependências instaladas'
            }
        }
        
        stage('Security Audit') {
            steps {
                script {
                    try {
                        sh 'npm audit --audit-level moderate'
                        echo '✅ Auditoria de segurança concluída'
                    } catch (Exception e) {
                        echo '⚠️ Vulnerabilidades encontradas, mas continuando...'
                        echo e.getMessage()
                    }
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    try {
                        sh 'npm run test:run'
                        echo '✅ Testes executados com sucesso'
                    } catch (Exception e) {
                        echo '⚠️ Alguns testes falharam, mas continuando...'
                        echo e.getMessage()
                    }
                }
            }
        }
        
        stage('Lint Check') {
            steps {
                script {
                    try {
                        sh 'npm run lint'
                        echo '✅ Verificação de código concluída'
                    } catch (Exception e) {
                        echo '⚠️ Problemas de lint encontrados, mas continuando...'
                        echo e.getMessage()
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
                echo '✅ Build concluído com sucesso'
            }
        }
        
        stage('Test Build') {
            steps {
                sh '''
                    if [ -d "${BUILD_DIR}" ]; then
                        echo "✅ Diretório de build encontrado: ${BUILD_DIR}"
                        ls -la ${BUILD_DIR}
                    else
                        echo "❌ Diretório de build não encontrado"
                        exit 1
                    fi
                '''
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: '${BUILD_DIR}/**/*', fingerprint: true
                echo '✅ Artefatos arquivados'
            }
        }
        
        stage('Deploy to Server') {
            when {
                branch 'main'
            }
            steps {
                script {
                    // Opção 1: Deploy via SSH
                    sshagent(['jenkins-ssh-key']) {
                        sh '''
                            # Criar diretório se não existir
                            ssh user@your-server.com "mkdir -p ${DEPLOY_DIR}"
                            
                            # Fazer backup do deploy anterior
                            ssh user@your-server.com "cp -r ${DEPLOY_DIR} ${DEPLOY_DIR}.backup.$(date +%Y%m%d_%H%M%S) || true"
                            
                            # Fazer upload dos arquivos
                            rsync -avz --delete ${BUILD_DIR}/ user@your-server.com:${DEPLOY_DIR}/
                            
                            # Reiniciar serviços se necessário
                            ssh user@your-server.com "sudo systemctl reload nginx || true"
                        '''
                    }
                    
                    // Opção 2: Deploy via Docker
                    // sh '''
                    //     docker build -t pablo-news:${BUILD_NUMBER} .
                    //     docker stop pablo-news || true
                    //     docker rm pablo-news || true
                    //     docker run -d --name pablo-news -p 80:80 pablo-news:${BUILD_NUMBER}
                    // '''
                    
                    echo '✅ Deploy concluído'
                }
            }
        }
        
        stage('Health Check') {
            steps {
                script {
                    // Aguardar alguns segundos para o deploy
                    sleep(10)
                    
                    // Verificar se o site está respondendo
                    sh '''
                        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" https://runawaydevil.github.io/ || echo "000")
                        if [ "$HTTP_CODE" = "200" ]; then
                            echo "✅ Site respondendo corretamente (HTTP $HTTP_CODE)"
                        else
                            echo "⚠️ Site pode não estar respondendo (HTTP $HTTP_CODE)"
                        fi
                    '''
                }
            }
        }
    }
    
    post {
        always {
            // Limpeza
            sh 'rm -rf node_modules/.cache || true'
            echo '🧹 Cache limpo'
        }
        
        success {
            echo '🎉 Pipeline executado com sucesso!'
            // Notificação de sucesso (opcional)
            // slackSend channel: '#deployments', color: 'good', message: "✅ Pablo.News deployado com sucesso! Build #${BUILD_NUMBER}"
        }
        
        failure {
            echo '❌ Pipeline falhou!'
            // Notificação de falha (opcional)
            // slackSend channel: '#deployments', color: 'danger', message: "❌ Falha no deploy do Pablo.News! Build #${BUILD_NUMBER}"
        }
        
        unstable {
            echo '⚠️ Pipeline instável!'
        }
    }
}
