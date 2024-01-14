const {app, BrowserWindow, ipcMain} = require('electron');

const {contacts, chats} = require('./data');

function createWindow() {
    let win = new BrowserWindow ({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile("index.html");

    win.webContents.openDevTools();

    win.webContents.on('did-finish-load', () => {
        //console.log('did-finish-load');
        //win.webContents.send('data-from-server', 'Hello!');
        //win.webContents.send('data-from-server', {'key': 'value'});
        //win.webContents.send('pr-init', [chats, contacts])
        win.webContents.send('pr-contacts', contacts);
        //win.webContents.send('pr-chats', chats);
    })

    //DEMO, inicializar desde PR
    ipcMain.on('data-from-web', (event, data) => {
        console.log("msg from web" + data);
    })
    
    // ipcMain.on('pp-init', (event, data) => {
    //     win.webContents.send('pr-contacts', contacts);
    //     win.webContents.send('pr-chats', chats);
    // })

    ipcMain.on('pp-get-chat', (event, index) => {
        win.webContents.send('pr-chats', chats[index]);
    })
}

app.whenReady().then(createWindow);