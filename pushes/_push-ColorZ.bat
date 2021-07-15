robocopy "../../shapez.io/src/" "./" "index.html" 
robocopy "../../shapez.io/build/" "../shapez/ColorZ" /S 
git add -A 
git commit -m "_push-ColorZ" 
git push 
