@echo off
set /p name="Enter Mod Name: "

echo robocopy "../../shapez.io/src/" "./" "index.html" >> pushes/_push-%name%.bat
echo robocopy "../../shapez.io/build/" "../shapez/%name%" /S >> pushes/_push-%name%.bat
echo git add -A >> pushes/_push-%name%.bat
echo git commit -m "_push-%name%" >> pushes/_push-%name%.bat
echo git push >> pushes/_push-%name%.bat