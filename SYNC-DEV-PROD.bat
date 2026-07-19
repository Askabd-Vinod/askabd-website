@echo off
echo ================================================
echo Syncing Dev and Production Branches
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Step 1: Making sure we're on main branch...
%GIT% checkout main
echo.

echo Step 2: Pulling latest changes from main...
%GIT% pull origin main
echo.

echo Step 3: Switching to Dev branch...
%GIT% checkout Dev
echo.

echo Step 4: Pulling latest changes from Dev...
%GIT% pull origin Dev
echo.

echo Step 5: Merging main into Dev to sync...
%GIT% merge main -m "Sync Dev with Production - E-Commerce modal update"
echo.

echo Step 6: Pushing synced Dev branch...
%GIT% push origin Dev
echo.

echo Step 7: Switching back to main...
%GIT% checkout main
echo.

echo ================================================
echo SUCCESS! Dev and Production are now in sync
echo.
echo Both branches now have:
echo   - Premium E-Commerce modal
echo   - Business Challenges section (red)
echo   - Solutions section (green)
echo   - Guarantees section (blue)
echo   - Hero image and animations
echo.
echo Cloudflare will deploy both environments automatically
echo Wait 1-2 minutes then test both URLs
echo ================================================
pause
