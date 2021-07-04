robocopy "../shapez.io/src/" "./" "index.html"

robocopy "../shapez.io/build/" "./shapez/BadShapez.io" /S

git add -A

git commit -m "_push-BadShapez.io"

git push