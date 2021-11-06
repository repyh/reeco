const electron = require('electron');
const config = require('../ree.conf.json');
const { app, BrowserWindow } = electron;

app.on('ready', async () => {
    const mainWindow = new BrowserWindow({
        width: config.screenWidth ?? 1280,
        height: config.screenHeight ?? 720
    });
    await mainWindow.loadFile('public/index.html');
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});