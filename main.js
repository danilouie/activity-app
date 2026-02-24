const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 400,
        minWidth: 600,
        minHeight: 400,
        maxWidth: 800,
        maxHeight: 640,
        resizable: false,
        maximizable: false, 
        fullscreenable: false, 
        frame: false,
        transparent: false,
        enableScrollBounce: true,
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false,
            scrollBounce: true
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform != "darwin") app.quit();
})