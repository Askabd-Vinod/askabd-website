# Automated Git Push Script
$ErrorActionPreference = "Stop"
$gitPath = "C:\Program Files\Git\bin\git.exe"

Write-Host "Starting automated deployment..." -ForegroundColor Green

# Change to repository directory
Set-Location "c:\Users\Vinod\OneDrive\.kiro\askabd-website"

# Check Git status
Write-Host "`nChecking repository status..." -ForegroundColor Cyan
& $gitPath status

# Add services.html
Write-Host "`nAdding services.html..." -ForegroundColor Cyan
& $gitPath add services.html

# Commit changes
Write-Host "`nCommitting changes..." -ForegroundColor Cyan
& $gitPath commit -m "Add impressive modals for E-Commerce, Mobile App, and AI services - batch 1 of 3"

# Push to Dev branch
Write-Host "`nPushing to Dev branch..." -ForegroundColor Cyan
& $gitPath push origin Dev

Write-Host "`n✅ SUCCESS! Changes pushed to Dev branch" -ForegroundColor Green
Write-Host "`nWait 2-3 minutes for Cloudflare deployment" -ForegroundColor Yellow
Write-Host "Test at: https://develop.askabd-website.pages.dev/services.html" -ForegroundColor Cyan

Read-Host "`nPress Enter to close"
