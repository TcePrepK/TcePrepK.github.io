robocopy "../shapez.io/src/" "./" "index.html"

robocopy "../shapez.io/build/" "./shapez/ShrimpZ-WirelessDisplay" /S

git add -A

git commit -m "_push-ShrimpZ"

git push