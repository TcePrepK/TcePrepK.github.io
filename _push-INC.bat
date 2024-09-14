cd ../FarmingGame
for /f %%i in ('git rev-parse HEAD') do set commit_id=%%i
set short_commit_id=%commit_id:~0,7%

call npm run build
robocopy "dist/" "../TcePrepKgithubio/FarmingINC" /S 
cd ../TcePrepKgithubio

git add .
git commit -m "FarmingINC %short_commit_id%"
git push

pause