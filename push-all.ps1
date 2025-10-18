# Script PowerShell para fazer push para GitHub e Forgejo simultaneamente

Write-Host "🚀 Fazendo push para ambos os repositórios..." -ForegroundColor Green

# Push para GitHub
Write-Host "📦 Push para GitHub (origin)..." -ForegroundColor Yellow
git push origin main

# Push para Forgejo
Write-Host "📦 Push para Forgejo..." -ForegroundColor Yellow
git push forgejo main

Write-Host "✅ Push concluído para ambos os repositórios!" -ForegroundColor Green
Write-Host "🌐 GitHub: https://github.com/runawaydevil/runawaydevil.github.io" -ForegroundColor Cyan
Write-Host "🌐 Forgejo: https://git.teu.cool/pablo/privacy.live" -ForegroundColor Cyan
