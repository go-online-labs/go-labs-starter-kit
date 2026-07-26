/**
 * Post-build prerender script.
 * Renders each route with Puppeteer and writes the fully-rendered HTML
 * back to dist/, so crawlers see real content without executing JS.
 *
 * Usage: node scripts/prerender.mjs
 */

import { launch } from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = resolve(__dirname, "../dist");
const ROUTES = ["/", "/privacy"];
const PORT = 4173;

// Simple static file server for the dist folder
function createStaticServer() {
  return createServer((req, res) => {
    let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);

    // SPA fallback: if no file extension, serve index.html
    if (!filePath.includes(".")) {
      filePath = join(DIST, "index.html");
    }

    try {
      const content = readFileSync(filePath);
      const ext = filePath.split(".").pop();
      const mimeTypes = {
        html: "text/html",
        js: "application/javascript",
        css: "text/css",
        png: "image/png",
        svg: "image/svg+xml",
        json: "application/json",
      };
      res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
      res.end(content);
    } catch {
      // SPA fallback
      const fallback = readFileSync(join(DIST, "index.html"));
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fallback);
    }
  });
}

async function prerender() {
  const server = createStaticServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Static server running on http://localhost:${PORT}`);

  const browser = await launch({ headless: true });

  for (const route of ROUTES) {
    console.log(`Prerendering: ${route}`);
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait a bit for any animations/lazy content
    await page.waitForSelector("#root > *", { timeout: 10000 });

    const html = await page.content();

    // Determine output path
    const outputDir = route === "/" ? DIST : join(DIST, route);
    const outputFile = join(outputDir, "index.html");

    mkdirSync(outputDir, { recursive: true });
    writeFileSync(outputFile, html);
    console.log(`  Written: ${outputFile}`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log("Prerendering complete!");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
