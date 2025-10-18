#!/bin/bash
# Script para fazer push para GitHub e Forgejo simultaneamente

echo "🚀 Fazendo push para ambos os repositórios..."

# Push para GitHub
echo "📦 Push para GitHub (origin)..."
git push origin main

# Push para Forgejo
echo "📦 Push para Forgejo..."
git push forgejo main

echo "✅ Push concluído para ambos os repositórios!"
echo "🌐 GitHub: https://github.com/runawaydevil/runawaydevil.github.io"
echo "🌐 Forgejo: https://git.teu.cool/pablo/privacy.live"
