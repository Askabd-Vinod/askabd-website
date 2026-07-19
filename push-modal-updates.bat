@echo off
echo ================================================
echo Pushing E-Commerce Modal Updates to GitHub
echo ================================================
echo.

cd /d "c:\Users\Vinod\OneDrive\.kiro\askabd-website"

echo Adding files to git...
git add services.html
git add js\main.js
git add .cloudflare-pages
echo.

echo Committing changes...
git commit -m "feat: Add premium E-Commerce modal with challenges/solutions/guarantees sections"
echo.

echo Pushing to main branch...
git push origin main
echo.

echo Switching to Dev branch...
git checkout Dev
echo.

echo Merging main into Dev...
git merge main
echo.

echo Pushing to Dev branch...
git push origin Dev
echo.

echo Switching back to main...
git checkout main
echo.

echo ================================================
echo Done! E-Commerce modal pushed to both main and Dev
echo ================================================
pause
