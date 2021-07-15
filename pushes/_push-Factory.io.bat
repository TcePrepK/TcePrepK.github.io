robocopy "../../shapez.io/src/" "./" "index.html" 
robocopy "../../shapez.io/build/" "../shapez/Factory.io" /S 
git add -A 
git commit -m "_push-Factory.io" 
git push 
