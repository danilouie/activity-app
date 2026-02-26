const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path');

let win; 

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 400,
        resizable: false,
        maximizable: false, 
        fullscreenable: false, 
        frame: false,
        transparent: false,
        enableScrollBounce: true,
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false,
            scrollBounce: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile("index.html");
}

ipcMain.on('close-app', () => {
    app.quit()
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform != "darwin") app.quit();
})