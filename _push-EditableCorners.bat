robocopy "../shapez.io/src/" "./" "index.html"

robocopy "../shapez.io/build/" "./shapez/EditableCorners" /S

git add -A

git commit -m "_push-EditableCorners"

git push