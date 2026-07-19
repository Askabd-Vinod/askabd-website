@echo off
echo Deploying E-Commerce Modal to GitHub...
cd /d "c:\Users\Vinod\OneDrive\.kiro\askabd-website"

SET GIT="C:\Users\Vinod\AppData\Local\GitHubDesktop\app-3.6.1\resources\app\git\cmd\git.exe"

echo.
echo Current branch:
%GIT% branch

echo.
echo Adding changed files...
%GIT% add services.html
%GIT% add js/main.js

echo.
echo Committing changes...
%GIT% commit -m "Add E-Commerce modal with business challenges, solutions, and guarantees"

echo.
echo Pushing to Dev branch...
%GIT% push origin Dev

echo.
echo Pushing to main branch...
%GIT% checkout main
%GIT% merge Dev -m "Merge E-Commerce modal from Dev"
%GIT% push origin main
%GIT% checkout Dev

echo.
echo Done! Changes deployed to both Dev and main branches.
pause
