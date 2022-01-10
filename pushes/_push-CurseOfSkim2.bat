robocopy "../../shapez.io/src/" "./" "index.html" 
robocopy "../../shapez.io/build/" "../shapez/CurseOfSkim2" /S 
git add -A 
git commit -m "_push-CurseOfSkim2" 
git push 
