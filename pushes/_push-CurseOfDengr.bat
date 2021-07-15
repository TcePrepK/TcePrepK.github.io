robocopy "../../shapez.io/src/" "./" "index.html" 
robocopy "../../shapez.io/build/" "../shapez/CurseOfDengr" /S 
git add -A 
git commit -m "_push-CurseOfDengr" 
git push 
