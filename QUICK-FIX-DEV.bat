@echo off
echo ================================================================
echo   QUICK FIX: Resolve Dev Branch Merge Conflicts
echo ================================================================
echo.
echo This script will:
echo 1. Check out Dev branch
echo 2. Copy the clean main.js file
echo 3. Commit the fix
echo 4. Push to GitHub
echo.
echo Press Ctrl+C to cancel, or
pause

cd /d "c:\Users\Vinod\OneDrive\.kiro\askabd-website"

echo.
echo [1/4] Checking out Dev branch...
"C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe" checkout Dev
if errorlevel 1 (
    echo ERROR: Failed to checkout Dev branch
    pause
    exit /b 1
)

echo.
echo [2/4] Copying clean main.js...
copy /Y "js\main.js" "js\main.js.backup"
echo File backed up to main.js.backup

echo.
echo [3/4] Committing the fix...
"C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe" add js/main.js
"C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe" commit -m "Fix: Resolve merge conflicts in main.js - clean version"
if errorlevel 1 (
    echo WARNING: Nothing to commit or commit failed
)

echo.
echo [4/4] Pushing to GitHub Dev branch...
"C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe" push origin Dev
if errorlevel 1 (
    echo ERROR: Failed to push to GitHub
    pause
    exit /b 1
)

echo.
echo ================================================================
echo   SUCCESS! Dev branch updated
echo ================================================================
echo.
echo Wait 2-3 minutes for Cloudflare to deploy, then test at:
echo https://develop.askabd-website.pages.dev/services.html
echo.
echo Click on the E-Commerce card to open the modal.
echo.
pause
