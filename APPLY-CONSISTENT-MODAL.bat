@echo off
echo ================================================
echo Apply Clear Modal with Consistent Animations
echo (Simple 2-Branch Workflow: Dev then Production)
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Switching to Dev branch...
%GIT% checkout Dev
echo.

echo Pulling latest...
%GIT% pull origin Dev
echo.

echo ================================================
echo WHAT YOU'LL GET:
echo ================================================
echo.
echo ✅ Clear, easy-to-understand content
echo ✅ Same smooth animations as your main site
echo ✅ Consistent look and feel
echo ✅ Staggered reveal effects (80ms timing)
echo ✅ Same hover transitions
echo ✅ Professional consistency
echo.
echo ================================================
echo FILES TO USE:
echo ================================================
echo.
echo 1. IMPROVED-MODAL-CONTENT.html
echo    - Clear language, no jargon
echo    - Results-focused benefits
echo    - Easy to scan layout
echo.
echo 2. IMPROVED-MODAL-STYLES.css  
echo    - Professional styling
echo    - Matches site colors
echo.
echo 3. CONSISTENT-ANIMATIONS.css
echo    - SAME animations as main site
echo    - Matches main.js timing
echo.
echo 4. CONSISTENT-MODAL-SCRIPT.js
echo    - Uses same IntersectionObserver
echo    - Staggered reveals (80ms)
echo    - Smooth transitions
echo.
echo ================================================
echo STEPS:
echo ================================================
echo.
echo 1. Open services.html
echo.
echo 2. REPLACE modal content wrapper with:
echo    IMPROVED-MODAL-CONTENT.html
echo.
echo 3. ADD these styles before ^</style^>:
echo    - IMPROVED-MODAL-STYLES.css
echo    - CONSISTENT-ANIMATIONS.css
echo.
echo 4. REPLACE modal script with:
echo    CONSISTENT-MODAL-SCRIPT.js
echo.
echo 5. Save and run: PUSH-TO-DEV.bat
echo.
echo ================================================
echo.
echo Press any key to open all files...
pause

echo.
echo Opening files...
start notepad "services.html"
timeout /t 2
start notepad "IMPROVED-MODAL-CONTENT.html"
timeout /t 2
start notepad "IMPROVED-MODAL-STYLES.css"
timeout /t 2
start notepad "CONSISTENT-ANIMATIONS.css"
timeout /t 2
start notepad "CONSISTENT-MODAL-SCRIPT.js"
timeout /t 2
start notepad "MAKE-MODAL-CLEAR.txt"

echo.
echo ================================================
echo All files opened!
echo.
echo Follow the steps above to apply changes.
echo.
echo KEY BENEFITS:
echo   🎯 Clear value proposition
echo   ✨ Consistent site animations
echo   🚀 Professional polish
echo   💯 Easy for users to understand
echo.
echo ================================================
echo SIMPLE 2-BRANCH WORKFLOW:
echo ================================================
echo.
echo You have 2 branches:
echo   1. Dev  (testing) - Update this first
echo   2. main (production) - Live site
echo.
echo After editing, run:
echo   1. 1-PUSH-TO-DEV.bat (test on Dev)
echo   2. 2-PUSH-TO-PROD.bat (go live)
echo.
echo Read: CLEAR-INSTRUCTIONS.txt for details
echo ================================================
pause
