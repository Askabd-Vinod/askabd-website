@echo off
echo ================================================================
echo   DEPLOY TO DEV BRANCH
echo   Fixes merge conflicts and pushes to Dev
echo ================================================================
echo.

cd /d "c:\Users\Vinod\OneDrive\.kiro\askabd-website"

echo [Step 1/5] Checking Git status...
"C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe" status
echo.

echo [Step 2/5] Checking out Dev branch...
"C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe" checkout Dev
if errorlevel 1 (
    echo ERROR: Failed to checkout Dev branch
    echo Make sure you're in the right directory and Dev branch exists
    pause
    exit /b 1
)
echo ✓ On Dev branch
echo.

echo [Step 3/5] Adding fixed main.js file...
"C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe" add js/main.js
if errorlevel 1 (
    echo ERROR: Failed to add main.js
    pause
    exit /b 1
)
echo ✓ File staged
echo.

echo [Step 4/5] Committing changes...
"C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe" commit -m "Fix: Resolve merge conflicts in main.js - clean version ready for testing"
if errorlevel 1 (
    echo Note: No changes to commit (file might already be clean)
)
echo.

echo [Step 5/5] Pushing to GitHub Dev branch...
"C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe" push origin Dev
if errorlevel 1 (
    echo ERROR: Failed to push to GitHub
    echo Check your internet connection and GitHub authentication
    pause
    exit /b 1
)
echo ✓ Pushed to Dev!
echo.

echo ================================================================
echo   ✓ SUCCESS! Deployed to Dev Branch
echo ================================================================
echo.
echo Cloudflare is now building and deploying...
echo.
echo Wait 2-3 minutes, then test at:
echo https://develop.askabd-website.pages.dev/services.html
echo.
echo What to do:
echo 1. Wait 2-3 minutes for Cloudflare deployment
echo 2. Open: https://develop.askabd-website.pages.dev/services.html
echo 3. Click the E-Commerce card (first card, blue)
echo 4. Modal should open beautifully!
echo 5. If it works, tell me to push to Main (production)
echo.
echo Press any key to open the Dev site now...
pause > nul

start https://develop.askabd-website.pages.dev/services.html

echo.
echo Browser opened! Wait for Cloudflare, then test the modal.
echo.
pause
