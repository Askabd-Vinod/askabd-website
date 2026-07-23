@echo off
echo ================================================
echo Step 1: Push Changes to Dev (Testing)
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Switching to Dev branch...
%GIT% checkout Dev
echo.

echo Adding your changes...
%GIT% add .
echo.

echo Committing...
%GIT% commit -m "Update: E-Commerce modal with clear content and consistent animations"
echo.

echo Pushing to Dev branch...
%GIT% push origin Dev
echo.

echo ================================================
echo SUCCESS! Pushed to Dev
echo.
echo NEXT STEPS:
echo   1. Wait 1-2 minutes for Cloudflare to deploy
echo   2. Test on your Dev URL
echo   3. If everything looks good, run: 2-PUSH-TO-PROD.bat
echo.
echo Dev URL: https://askabd-website.vinodkanchupalli.workers.dev/services
echo (or your Dev domain)
echo.
echo ================================================
pause
