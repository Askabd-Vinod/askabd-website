@echo off
cd /d "c:\Users\Vinod\OneDrive\.kiro\askabd-website"
"C:\Program Files\Git\bin\git.exe" add services.html css/services.css
"C:\Program Files\Git\bin\git.exe" commit -m "Add modal CSS styles for all 9 service modals - fixes display issue"
"C:\Program Files\Git\bin\git.exe" push origin Dev
echo.
echo Push complete! Wait 2-3 minutes for Cloudflare deployment.
echo Test at: https://develop.askabd-website.pages.dev/services.html
