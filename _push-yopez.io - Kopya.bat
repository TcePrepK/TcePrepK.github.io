robocopy "../shapez.io/src/" "./" "index.html"

robocopy "../shapez.io/build/" "./shapez/yopez.io" /S

git add -A

git commit -m "_push-yopez.io"

git push