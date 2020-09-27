const { app, BrowserWindow, ipcMain } = require("electron");
const discord = require("discord.js");
const robot = require("robotjs");

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

const client = new discord.Client();
const config = { token: "", serverId: "", channelId: "" };
let active = false;

client.on("ready", () => {
  console.info(`logged in as ${client.user.tag}`);

  const channel = client.channels.cache.get(config.channelId);

  channel.send(`discord plays pokemon bot connected`);
});

const dict = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  a: "x",
  b: "z",
  select: "backspace",
  start: "enter",
};
const inputs = Object.keys(dict);

client.on("message", (msg) => {
  if (
    msg.channel.guild.id !== config.serverId ||
    msg.channel.id !== config.channelId
  ) {
    return;
  }
  console.info(`${msg.author.username}: ${msg.content}`);

  const key = msg.content.toLowerCase();
  if (inputs.includes(key)) {
    robot.keyTap(dict[key]);
    console.log(`pressing key ${dict[key]}`);
  }
});

ipcMain.handle("discord-login", async (_, { token, serverId, channelId }) => {
  config.token = token;
  config.serverId = serverId;
  config.channelId = channelId;

  console.log(config);

  await client.login(token);
});

ipcMain.handle("discord-toggle", async (_, status) => {
  active = status;

  const channel = client.channels.cache.get(config.channelId);
  channel.send(active ? "inputs enabled" : "inputs disabled");

  return active;
});
