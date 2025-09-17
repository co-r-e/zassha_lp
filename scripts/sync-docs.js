const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");
const docsDir = path.join(process.cwd(), "docs");

if (!fs.existsSync(outDir)) {
  console.error("[sync-docs] The 'out' directory does not exist. Run `npm run build` first.");
  process.exit(1);
}

if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
}

fs.mkdirSync(docsDir, { recursive: true });

// Copy all files from out -> docs
fs.readdirSync(outDir).forEach((entry) => {
  const src = path.join(outDir, entry);
  const dest = path.join(docsDir, entry);
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.cpSync(src, dest, { recursive: true });
  } else {
    fs.copyFileSync(src, dest);
  }
});

const indexPath = path.join(docsDir, "index.html");
const notFoundPath = path.join(docsDir, "404.html");
const noJekyllPath = path.join(docsDir, ".nojekyll");

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
}

fs.writeFileSync(noJekyllPath, "");

console.log("[sync-docs] Synced 'out' to 'docs' and prepared 404/.nojekyll for GitHub Pages.");
