@echo off
echo ================================================
echo Pushing E-Commerce Modal to GitHub
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Checking git status...
%GIT% status
echo.

echo Adding all changes...
%GIT% add .
echo.

echo Committing changes...
%GIT% commit -m "feat: Add premium E-Commerce modal with challenges/solutions/guarantees"
echo.

echo Pushing to main branch...
%GIT% push origin main
echo.

echo ================================================
echo SUCCESS! 
echo.
echo Your changes are now on GitHub
echo Cloudflare will deploy automatically in 1-2 minutes
echo.
echo Visit: https://www.askabd.com/services.html
echo Click the E-Commerce card to see the modal!
echo ================================================
pause
