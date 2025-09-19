#!/usr/bin/env node
import { createServer } from "http";
import { existsSync, createReadStream, statSync } from "fs";
import { extname, join, resolve } from "path";

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const root = resolve(process.cwd());

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp4": "video/mp4",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

function sendFile(res, filePath) {
  const ext = extname(filePath);
  const mime = mimeTypes[ext] ?? "application/octet-stream";
  res.writeHead(200, { "Content-Type": mime });
  createReadStream(filePath).pipe(res);
}

const server = createServer((req, res) => {
  if (!req.url) {
    res.writeHead(400);
    res.end();
    return;
  }

  const cleanPath = req.url.split("?")[0];
  const requested = cleanPath.endsWith("/") ? `${cleanPath}index.html` : cleanPath;
  let filePath = join(root, requested);

  if (!existsSync(filePath)) {
    // fallback to HTML file if request has no extension
    if (!extname(requested)) {
      const htmlPath = `${requested}.html`;
      filePath = join(root, htmlPath);
    }
  }

  if (!existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not Found");
    return;
  }

  const stats = statSync(filePath);
  if (stats.isDirectory()) {
    const indexFile = join(filePath, "index.html");
    if (existsSync(indexFile)) {
      sendFile(res, indexFile);
      return;
    }
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  sendFile(res, filePath);
});

server.listen(port, () => {
  console.log(`ZASSHA LP running at http://localhost:${port}`);
});
