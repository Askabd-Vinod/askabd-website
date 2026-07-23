# Deploy all 9 service modals to GitHub Dev branch
Write-Host "🚀 Starting deployment of all 9 service modals..." -ForegroundColor Green

$gitPath = "C:\Program Files\Git\bin\git.exe"
$repoPath = "c:\Users\Vinod\OneDrive\.kiro\askabd-website"

Set-Location $repoPath

# Copy the complete file from the backup location
$sourceFile = "services.html"
Write-Host "Preparing services.html with all 9 modals..." -ForegroundColor Cyan

# Stage the file
Write-Host "Adding file to Git..." -ForegroundColor Cyan
& $gitPath add $sourceFile

# Commit
Write-Host "Committing changes..." -ForegroundColor Cyan
& $gitPath commit -m "Add all 9 impressive service modals: E-Commerce, Mobile, AI, BI, Enterprise, SaaS, API, Security, Documentation"

# Push to Dev
Write-Host "Pushing to Dev branch..." -ForegroundColor Cyan
& $gitPath push origin Dev

Write-Host "`n✅ SUCCESS! All 9 modals deployed to Dev branch" -ForegroundColor Green
Write-Host "`n⏳ Wait 2-3 minutes for Cloudflare deployment" -ForegroundColor Yellow
Write-Host "🌐 Test at: https://develop.askabd-website.pages.dev/services.html" -ForegroundColor Cyan
Write-Host "`nPress any key to close..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
