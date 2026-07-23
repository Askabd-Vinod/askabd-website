@echo off
echo ================================================
echo Reverting Production Services Page
echo (Keeping Dev intact for continued testing)
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Step 1: Ensuring we're on main branch...
%GIT% checkout main
echo.

echo Step 2: Getting previous version of services.html...
%GIT% log --oneline --all -15
echo.
echo Please check the commit list above.
echo.
echo Step 3: Restoring services.html from before modal changes...
echo Finding the commit before "E-Commerce modal"...
%GIT% log --oneline --all | findstr /V /C:"E-Commerce modal" | findstr /V /C:"ecommerce" > temp_commits.txt
set /p PREV_COMMIT=<temp_commits.txt
del temp_commits.txt
echo.

echo Step 4: Creating revert commit...
%GIT% checkout HEAD~1 -- services.html
%GIT% checkout HEAD~1 -- js/main.js
echo.

echo Step 5: Committing revert...
%GIT% add services.html js/main.js
%GIT% commit -m "revert: Remove E-Commerce modal from Production - needs more updates"
echo.

echo Step 6: Pushing to Production (main)...
%GIT% push origin main
echo.

echo ================================================
echo DONE! Production Reverted
echo.
echo Current State:
echo   - Production: No E-Commerce modal (original version)
echo   - Dev: Still has E-Commerce modal for testing
echo.
echo Your Dev URL still has the modal for continued work
echo Production will be clean in 1-2 minutes
echo ================================================
pause
