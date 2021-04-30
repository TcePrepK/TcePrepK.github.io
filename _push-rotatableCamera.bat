robocopy "../shapez.io/src/" "./" "index.html"

robocopy "../shapez.io/build/" "./shapez/rotatableCamera" /S

git add -A

git commit -m "_push-rotatableCamera"

git push