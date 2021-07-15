robocopy "../../shapez.io/src/" "./" "index.html" 
robocopy "../../shapez.io/build/" "../shapez/itemSearcher" /S 
git add -A 
git commit -m "_push-itemSearcher" 
git push 
