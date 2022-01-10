robocopy "../../shapez.io/src/" "./" "index.html" 
robocopy "../../shapez.io/build/" "../shapez/CurseOfSkim" /S 
git add -A 
git commit -m "_push-CurseOfSkim" 
git push 
