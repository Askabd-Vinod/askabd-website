@echo off
echo ================================================
echo Pushing Premium Animation Updates
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Adding changes...
%GIT% add services.html
echo.

echo Committing...
%GIT% commit -m "feat: Add premium animations and eye-catching effects to E-Commerce modal"
echo.

echo Pushing to Dev...
%GIT% push origin Dev
echo.

echo ================================================
echo SUCCESS! Premium animations deployed to Dev
echo.
echo ANIMATIONS ADDED:
echo   ✨ Floating badge
echo   💫 Shimmer on stats
echo   🎯 Staggered card entrance
echo   🌟 Glowing borders
echo   ⚡ Bouncing icons
echo   🎨 Gradient text animation
echo   ✨ Sparkle effects
echo   📊 Progress bars
echo   🔮 Ripple clicks
echo   🌊 Smooth scrolling
echo.
echo Wait 1-2 minutes then refresh Dev with Ctrl+Shift+R
echo ================================================
pause
