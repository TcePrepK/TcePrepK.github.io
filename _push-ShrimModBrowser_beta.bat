robocopy "../shapez.io/src/" "./" "index.html"

robocopy "../shapez.io/build/" "./shapez/ShrimpModBrowser_beta" /S

git add -A

git commit -m "_push-ShrimpModBrowser_beta"

git push