@echo off
echo ================================================
echo Adding Premium Animations to Dev Modal
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Step 1: Switching to Dev branch...
%GIT% checkout Dev
echo.

echo Step 2: Pulling latest from Dev...
%GIT% pull origin Dev
echo.

echo Step 3: The modal should now be in your local services.html
echo.
echo NEXT STEPS:
echo.
echo 1. Open: services.html in your code editor
echo 2. Find the line: </style> (near the end of the modal styles)
echo 3. Open: modal-animations-addon.html
echo 4. Copy ALL the content from modal-animations-addon.html
echo 5. Paste it ABOVE the </style> line in services.html
echo 6. Save services.html
echo 7. Run: PUSH-ANIMATIONS.bat to deploy
echo.
echo Press any key to open both files in Notepad...
pause

notepad "services.html"
notepad "modal-animations-addon.html"

echo.
echo After you've added the animations, run:
echo    PUSH-ANIMATIONS.bat
echo.
pause
