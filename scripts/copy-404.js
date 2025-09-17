const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");
const indexPath = path.join(outDir, "index.html");
const notFoundPath = path.join(outDir, "404.html");
const noJekyllPath = path.join(outDir, ".nojekyll");

if (!fs.existsSync(outDir)) {
  console.error("[copy-404] The 'out' directory does not exist. Run `npm run export` first.");
  process.exit(1);
}

if (!fs.existsSync(indexPath)) {
  console.error("[copy-404] Could not find index.html in the 'out' directory.");
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
fs.writeFileSync(noJekyllPath, "");
console.log("[copy-404] 404.html created from index.html and .nojekyll written");
