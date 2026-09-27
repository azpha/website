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
  app.use(
    base,
    sirv(clientDir, {
      extensions: [],
      setHeaders(res, pathname) {
        if (pathname.startsWith("/assets/")) {
          // vite hashes these filenames, so the content can never change
          // under a given url
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        } else if (pathname.startsWith("/fonts/")) {
          // stable but unhashed, so cache for a while rather than forever
          res.setHeader("Cache-Control", "public, max-age=2592000");
        } else {
          res.setHeader("Cache-Control", "public, max-age=3600");
        }
      },
    }),
  );
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

/** load the SSR bundle, from source in dev and from the build in production */
async function loadServerEntry() {
  if (!isProduction) {
    return await vite.ssrLoadModule("/src/entry-server.tsx");
  }
  return await import("./dist/server/entry-server.js");
}

/**
 * Strip the deploy base from a request url, always leaving a rooted path.
 * The previous `originalUrl.replace(base, "")` dropped the leading slash when
 * base was "/", which would hand the router a relative location.
 */
function stripBase(originalUrl) {
  if (!originalUrl) return "/";
  if (base === "/") return originalUrl;
  if (originalUrl.startsWith(base)) {
    const rest = originalUrl.slice(base.length);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return originalUrl;
}

// generated from the route table rather than checked in, so it cannot go stale
app.get(`${base.replace(/\/$/, "")}/sitemap.xml`, async (req, res) => {
  try {
    const { renderSitemap } = await loadServerEntry();
    res
      .status(200)
      .set({
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      })
      .send(renderSitemap());
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error(e.stack);
    res.status(500).end();
  }
});

app.use("*all", async (req, res) => {
  try {
    const url = stripBase(req.originalUrl);

    let template;
    if (!isProduction) {
      template = await fs.readFile(path.resolve(root, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);
    } else {
      template = templateHtml;
    }

    const { render } = await loadServerEntry();
    const rendered = await render(url);
    const html = template
      ?.replace("<!--app-head-->", rendered.head ?? "")
      .replace("<!--app-html-->", rendered.html ?? "");

    res
      .status(rendered.statusCode ?? 200)
      .set({
        "Content-Type": "text/html",
        // short shared cache window; the page embeds live-ish data
        "Cache-Control":
          "public, max-age=0, s-maxage=60, stale-while-revalidate=300",
      })
      .send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
