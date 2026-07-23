@echo off
echo ================================================
echo Reverting Production to Previous Version
echo (Keeping Dev for testing)
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Step 1: Checking out main branch...
%GIT% checkout main
echo.

echo Step 2: Finding previous commit before modal changes...
%GIT% log --oneline -10
echo.

echo Step 3: Reverting the E-Commerce modal commits...
%GIT% revert HEAD --no-edit
echo.

echo Step 4: Pushing reverted main branch...
%GIT% push origin main
echo.

echo ================================================
echo SUCCESS! Production has been reverted
echo.
echo STATUS:
echo   - Production (main): Reverted to previous version
echo   - Dev: Still has E-Commerce modal for testing
echo.
echo You can now:
echo   1. Make additional updates locally
echo   2. Test on Dev environment
echo   3. Push to Production when ready
echo.
echo Cloudflare will deploy the reverted Production in 1-2 minutes
echo ================================================
pause
