@echo off
echo ================================================
echo Simple Production Revert
echo ================================================
echo.

cd /d "C:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo Making sure we're on main branch...
%GIT% checkout main
echo.

echo Getting the commit hash before E-Commerce modal...
%GIT% log --oneline -10
echo.

pause
echo.
echo Enter the commit hash from BEFORE the E-Commerce modal changes:
echo (Look for a commit like "feat: Add premium E-Commerce modal" above)
echo (Copy the hash of the commit BEFORE that one)
echo.
set /p COMMIT_HASH="Enter commit hash: "
echo.

echo Restoring files from commit %COMMIT_HASH%...
%GIT% checkout %COMMIT_HASH% -- services.html
%GIT% checkout %COMMIT_HASH% -- js/main.js
echo.

echo Committing the revert...
%GIT% add services.html js/main.js
%GIT% commit -m "revert: Temporarily remove E-Commerce modal from Production for updates"
echo.

echo Pushing to Production...
%GIT% push origin main
echo.

echo ================================================
echo SUCCESS!
echo.
echo Production has been reverted
echo Dev still has the modal for testing
echo.
echo When you're ready to deploy again, use:
echo   PUSH-TO-DEV.bat or PUSH-NOW.bat
echo ================================================
pause
