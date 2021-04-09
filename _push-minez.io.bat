robocopy "../shapez.io/src/" "./" "index.html"

robocopy "../shapez.io/build/" "./shapez/minez.io" /S

git add -A

git commit -m "_push-minez.io"

git push