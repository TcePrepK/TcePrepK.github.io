robocopy "../../shapez.io/src/" "./" "index.html" 
robocopy "../../shapez.io/build/" "../shapez/TrashMap" /S 
git add -A 
git commit -m "_push-TrashMap" 
git push 
