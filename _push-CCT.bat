robocopy "../shapez.io/src/" "./" "index.html"

robocopy "../shapez.io/build/" "./shapez/CCT" /S

git add -A

git commit -m "_push-CCT"

git push