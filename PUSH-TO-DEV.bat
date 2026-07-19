@echo off
echo ================================================
echo Pushing E-Commerce Modal to DEV Branch
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Switching to Dev branch...
%GIT% checkout Dev
echo.

echo Merging main into Dev...
%GIT% merge main
echo.

echo Pushing to Dev branch...
%GIT% push origin Dev
echo.

echo Switching back to main...
%GIT% checkout main
echo.

echo ================================================
echo SUCCESS! Dev branch updated
echo.
echo NOTE: Dev deployment may still fail in Cloudflare
echo due to Workers configuration issue.
echo.
echo To fix: Go to Cloudflare Dashboard
echo   Settings > Builds and deployments
echo   Find Dev/Preview branch settings
echo   Remove the "npx wrangler" deploy command
echo   Leave build command EMPTY
echo ================================================
pause
