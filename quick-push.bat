@echo off
echo ================================================
echo Quick Push to GitHub Main Branch
echo ================================================
echo.

cd /d "c:\Users\Vinod\OneDrive\.kiro\askabd-website"

echo Current directory:
cd
echo.

echo Git status:
git status
echo.

echo Adding files...
git add .
echo.

echo Committing changes...
git commit -m "feat: Add premium E-Commerce modal with challenges/solutions/guarantees"
echo.

echo Pushing to main...
git push origin main
echo.

echo ================================================
echo DONE! Check Cloudflare for deployment status
echo ================================================
echo.
echo Your changes will be live in 1-2 minutes at:
echo https://www.askabd.com/services.html
echo.
pause
