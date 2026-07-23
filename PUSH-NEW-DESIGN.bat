@echo off
echo ================================================
echo Pushing Eye-Catching E-Commerce Modal Design
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Adding files...
%GIT% add services.html js\main.js
echo.

echo Committing...
%GIT% commit -m "feat: Add eye-catching E-Commerce modal with enhanced UX design"
echo.

echo Pushing to Dev for testing...
%GIT% checkout Dev
%GIT% merge main -m "Merge enhanced modal design to Dev"
%GIT% push origin Dev
echo.

echo ================================================
echo SUCCESS! New design pushed to Dev
echo.
echo NEW FEATURES:
echo   ✓ Eye-catching hero with gradient overlay
echo   ✓ Quick stats showing key metrics
echo   ✓ Color-coded sections with large icons
echo   ✓ Card badges highlighting benefits
echo   ✓ Glowing CTA button with animation
echo   ✓ Better mobile responsive design
echo   ✓ Smooth animations and hover effects
echo   ✓ Premium gradient backgrounds
echo.
echo Test on Dev in 1-2 minutes, then push to main when ready
echo ================================================
pause
