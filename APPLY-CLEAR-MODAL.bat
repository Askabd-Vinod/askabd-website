@echo off
echo ================================================
echo Making Modal Clear and Easy to Understand
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Step 1: Pulling latest from Dev...
%GIT% checkout Dev
%GIT% pull origin Dev
echo.

echo ================================================
echo MANUAL STEPS REQUIRED:
echo ================================================
echo.
echo 1. Open: services.html
echo.
echo 2. Find: ^<div class="modal-content-wrapper"^>
echo    (This is around line 150-200)
echo.
echo 3. REPLACE everything between:
echo    ^<div class="modal-content-wrapper"^>
echo    and
echo    ^</div^> (the closing div before modal container ends)
echo.
echo 4. With content from: IMPROVED-MODAL-CONTENT.html
echo.
echo 5. Find the ^<style^> section in services.html
echo.
echo 6. ADD the styles from: IMPROVED-MODAL-STYLES.css
echo    (Add before the closing ^</style^> tag)
echo.
echo 7. Save services.html
echo.
echo 8. Run: PUSH-TO-DEV.bat
echo.
echo ================================================
echo.
echo Press any key to open the files you need...
pause

echo Opening files in Notepad...
start notepad "services.html"
timeout /t 2
start notepad "IMPROVED-MODAL-CONTENT.html"
timeout /t 2  
start notepad "IMPROVED-MODAL-STYLES.css"
timeout /t 2
start notepad "MAKE-MODAL-CLEAR.txt"

echo.
echo ================================================
echo All files opened!
echo.
echo Follow the instructions in MAKE-MODAL-CLEAR.txt
echo.
echo When done editing, run: PUSH-TO-DEV.bat
echo ================================================
pause
