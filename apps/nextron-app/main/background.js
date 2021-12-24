import { app } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import { createServer } from "http";
const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

function httpRequestHandler(req, res) {
  res.writeHead(200);
  res.end(Date.now().toString());
}
const server = createServer(httpRequestHandler);

server.listen(8999, () => {
  console.log(`Server started on http://localhost:8999`);
});

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
  });

  console.log("Launched Main Window");

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});

app.on("before-quit", () => {
  console.log("App will quit.");
  server.close();
});
