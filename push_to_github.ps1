$env:PATH = "C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd;" + $env:PATH
$commitMsg = "Consistency update: SEO meta tags, fix CSS bug, fix social links"

$files = @(
    "index.html",
    "about.html",
    "services.html",
    "solutions.html",
    "industries.html",
    "portfolio.html",
    "contact.html",
    "privacy.html",
    "terms.html"
)

# We are on main branch, stage and commit all HTML files
Write-Host "=== Pushing to main ===" -ForegroundColor Cyan
git add $files
git commit -m $commitMsg
git push origin main

# Now switch to Dev and do the same
Write-Host "=== Pushing to Dev ===" -ForegroundColor Cyan
git checkout Dev
git checkout main -- $files
git commit -m $commitMsg
git push origin Dev

# Switch back to main
git checkout main

Write-Host "Done!" -ForegroundColor Green
