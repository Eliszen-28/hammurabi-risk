import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] || "dist/client";
const basePath = process.argv[3] || "";
const pages = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory)) {
    const file = path.join(directory, entry);
    if (fs.statSync(file).isDirectory()) walk(file);
    else if (file.endsWith(".html")) pages.push(file);
  }
}

function pageFile(urlPath) {
  const relative = urlPath.replace(new RegExp(`^${basePath}/?`), "");
  return relative ? path.join(root, `${relative}.html`) : path.join(root, "index.html");
}

walk(root);
const errors = [];

for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = match[1];
    if (href.startsWith("#")) {
      const fragment = href.slice(1);
      if (fragment && !html.includes(`id="${fragment}"`)) errors.push(`${page}: no existe #${fragment}`);
      continue;
    }
    if (!href.startsWith(basePath || "/")) continue;
    const [urlPath, fragment] = href.split("#");
    const destination = pageFile(urlPath);
    if (!fs.existsSync(destination)) {
      errors.push(`${page}: no existe ${href}`);
      continue;
    }
    if (fragment && !fs.readFileSync(destination, "utf8").includes(`id="${fragment}"`)) {
      errors.push(`${page}: no existe #${fragment} en ${destination}`);
    }
  }
}

console.log(`Se revisaron ${pages.length} páginas HTML.`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("Todos los enlaces internos y sus anclas tienen un destino válido.");
