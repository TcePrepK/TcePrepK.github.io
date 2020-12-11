robocopy "../shapez.io/src/" "./" "index.html"

robocopy "../shapez.io/build/" "./shapez/ShrimpModBrowserBeta" /S

git add -A

git commit -m "_push-ShrimpModBrowserBeta"

git push