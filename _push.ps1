$env:Path = "C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd;" + $env:Path
Set-Location "c:\Users\Vinod\OneDrive\.kiro\askabd-website"

git add -A
git commit -m "Rebuild homepage as exact replica of reference design"
git push origin Dev 2>&1

Write-Output "=== REMOTE Dev ==="
git ls-remote --heads origin Dev
Write-Output "=== LOCAL Dev ==="
git rev-parse Dev
