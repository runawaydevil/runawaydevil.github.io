#!/bin/bash
# Script de Backup Automático
# Criado para O Capitão - Pablo.News

echo "🔧 Iniciando backup automático..."
echo "📅 Data: $(date)"
echo ""

# Configurações
BACKUP_DIR="/backup"
SOURCE_DIR="$HOME/Documents"
LOG_FILE="/var/log/backup.log"

# Criar diretório de backup se não existir
if [ ! -d "$BACKUP_DIR" ]; then
    mkdir -p "$BACKUP_DIR"
    echo "📁 Diretório de backup criado: $BACKUP_DIR"
fi

# Executar backup
echo "📦 Iniciando backup de $SOURCE_DIR para $BACKUP_DIR"
tar -czf "$BACKUP_DIR/backup_$(date +%Y%m%d_%H%M%S).tar.gz" "$SOURCE_DIR"

if [ $? -eq 0 ]; then
    echo "✅ Backup concluído com sucesso!"
    echo "$(date): Backup realizado com sucesso" >> "$LOG_FILE"
else
    echo "❌ Erro durante o backup!"
    echo "$(date): Erro no backup" >> "$LOG_FILE"
    exit 1
fi

echo "📊 Estatísticas do backup:"
du -h "$BACKUP_DIR/backup_$(date +%Y%m%d_%H%M%S).tar.gz"
echo ""
echo "🎉 Backup automático finalizado!"
