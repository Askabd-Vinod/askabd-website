@echo off
echo ================================================
echo Pushing E-Commerce Modal Updates to MAIN ONLY
echo ================================================
echo.

cd /d "c:\Users\Vinod\OneDrive\.kiro\askabd-website"

echo Checking current branch...
git branch
echo.

echo Making sure we're on main branch...
git checkout main
echo.

echo Adding files to git...
git add services.html
git add js\main.js
git add .cloudflare-pages
echo.

echo Committing changes...
git commit -m "feat: Add premium E-Commerce modal with challenges/solutions/guarantees sections"
echo.

echo Pushing to main branch only...
git push origin main
echo.

echo ================================================
echo Done! Changes pushed to main branch
echo Production site will update automatically
echo ================================================
pause
