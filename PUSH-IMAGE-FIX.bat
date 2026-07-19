@echo off
echo ================================================
echo Pushing Image Size Fix for E-Commerce Modal
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Adding changes...
%GIT% add services.html
echo.

echo Committing...
%GIT% commit -m "fix: Optimize E-Commerce modal hero image size and mobile responsiveness"
echo.

echo Pushing to main...
%GIT% push origin main
echo.

echo Switching to Dev...
%GIT% checkout Dev
echo.

echo Merging main into Dev...
%GIT% merge main
echo.

echo Pushing to Dev...
%GIT% push origin Dev
echo.

echo Switching back to main...
%GIT% checkout main
echo.

echo ================================================
echo SUCCESS! Image improvements deployed
echo.
echo Changes made:
echo   - Hero image height reduced to 250px (was 300px)
echo   - Better image brightness (0.6 instead of 0.5)
echo   - Improved text positioning and sizing
echo   - Mobile: Hero image 180px for better fit
echo   - Better mobile text sizes
echo.
echo Wait 1-2 minutes for Cloudflare to deploy
echo Then test on both Production and Dev
echo ================================================
pause
