const { app, BrowserWindow } = require("electron");

let win = null;

createWindow = (onClose) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true },
  });

  win.loadFile(__dirname + "/../renderer/index.html");

  win.on("close", onClose);

  return win;
};

app.on("ready", () => {
  win = createWindow(() => {
    win = null;
  });

  app.on("activate", () => {
    if (win == null) {
      win = createWindow(() => {
        win = null;
      });
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
