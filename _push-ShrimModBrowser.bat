robocopy "../shapez.io/src/" "./" "index.html"

robocopy "../shapez.io/build/" "./shapez/ShrimpModBrowser" /S

git add -A

git commit -m "_push-ShrimpModBrowser"

git push --force