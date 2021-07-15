robocopy "../../shapez.io/src/" "./" "index.html" 
robocopy "../../shapez.io/build/" "../shapez/ColorZ-ShapeViewer" /S 
git add -A 
git commit -m "_push-ColorZ-ShapeViewer" 
git push 
