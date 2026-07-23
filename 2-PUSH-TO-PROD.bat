@echo off
echo ================================================
echo Step 2: Push to Production (Go Live!)
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Switching to main branch (Production)...
%GIT% checkout main
echo.

echo Merging Dev into main...
%GIT% merge Dev -m "Deploy: E-Commerce modal to production"
echo.

echo Pushing to main (Production)...
%GIT% push origin main
echo.

echo ================================================
echo SUCCESS! Pushed to Production
echo.
echo Your changes are now LIVE!
echo.
echo Production URL: https://www.askabd.com/services.html
echo.
echo Wait 1-2 minutes, then check your live site
echo Clear browser cache: Ctrl + Shift + R
echo ================================================
pause
