@echo off
echo ========================================
echo Fixing Dev Branch - Resolving Conflicts
echo ========================================
echo.

cd /d "%~dp0"

set GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Step 1: Checking current branch...
%GIT% branch --show-current
echo.

echo Step 2: Switching to Dev branch...
%GIT% checkout Dev
echo.

echo Step 3: Getting clean version from main...
%GIT% checkout origin/main -- services.html
echo.

echo Step 4: Checking status...
%GIT% status
echo.

echo Step 5: Committing the fix...
%GIT% add services.html
%GIT% commit -m "Fix: Resolve merge conflicts in services.html - ready for Dev testing"
echo.

echo Step 6: Pushing to Dev branch...
%GIT% push origin Dev
echo.

echo ========================================
echo DONE! Dev branch is now clean.
echo Cloudflare will auto-deploy in ~1 minute.
echo ========================================
echo.
pause
