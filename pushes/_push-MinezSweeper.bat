robocopy "../../shapez.io/src/" "./" "index.html" 
robocopy "../../shapez.io/build/" "../shapez/MinezSweeper" /S 
git add -A 
git commit -m "_push-MinezSweeper" 
git push 
