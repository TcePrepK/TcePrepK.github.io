const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");
const chokidar = require('chokidar');

/** @type {Electron.CrossProcessExports.BrowserWindow} */
let mainWindow;
app.whenReady().then(createWindow);

const watcherArgs = [
    ["electron.js", completeReload],
    ["../bundle.js", loadHTML],
    ["../index.html", loadHTML],
    ["../res", loadHTML],
];

/** @type {FSWatcher[]} */
const watchers = [];

async function createWindow() {
    console.log("Creating window...");
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,

        // frame: false,
        // resizable: false,
        show: false
    });

    loadHTML().then(() => {
        mainWindow.show();

        mainWindow.webContents.openDevTools();
        mainWindow.once("closed", app.quit);
    }).catch(e => {
        console.error(e);
    });

    console.log("Starting watchers...");
    for (const arg of watcherArgs) {
        const watcher = chokidar.watch(path.join(__dirname, arg[0]));
        watcher.on("change", () => {
            arg[1]();
            console.log("Watching for changes...");
        });

        watchers.push(watcher);
    }
}

async function loadHTML() {
    if (!mainWindow) return;
    console.log("Loading HTML...");
    await mainWindow.loadFile(path.join(__dirname, "../index.html"));
}

function completeReload() {
    if (!app) return;
    console.log("Completely reloading app...");
    app.relaunch();
    app.exit();
}
