const {app, BrowserWindow} = require('electron')

let win
function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})
  win.webContents.session.setCertificateVerifyProc((hostname, cert, callback) => {
    callback(true)
  })
  win.loadURL("https://www.google.com")

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})
