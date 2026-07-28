import fs from "node:fs/promises";
import path from "node:path";
import express from "express";

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// resolve against this file rather than the working directory, so the server
// boots the same whether it is started from the repo root or anywhere else
const root = import.meta.dirname;
const clientDir = path.resolve(root, "dist/client");

const templateHtml = isProduction
  ? await fs.readFile(path.resolve(clientDir, "index.html"), "utf-8")
  : "";

const app = express();

let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv(clientDir, { extensions: [] }));
  // a hashed asset that sirv did not find is genuinely gone, usually a stale
  // cached document asking for a previous build. 404 it here, otherwise it
  // falls through to the catch-all and answers a .js request with html
  app.use(base, (req, res, next) => {
    if (req.path.startsWith("/assets/")) {
      res.status(404).end();
      return;
    }
    next();
  });
}

app.use("*all", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    let template;
    let render;
    if (!isProduction) {
      template = await fs.readFile(path.resolve(root, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const rendered = await render(url);
    const html = template
      ?.replace("<!--app-head-->", rendered.head ?? "")
      .replace("<!--app-html-->", rendered.html ?? "");
    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
