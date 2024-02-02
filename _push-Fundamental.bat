cd Fundamental
for /f %%i in ('git rev-parse HEAD') do set commit_id=%%i
set short_commit_id=%commit_id:~0,7%

cd ../
git add .
git commit -m "Fundamental %short_commit_id%"
git push