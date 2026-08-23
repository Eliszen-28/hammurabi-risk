import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../dist/client/", import.meta.url));
const prefix = "/hammurabi-risk";
const textExtensions = new Set([".html", ".rsc", ".json"]);

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await visit(path);
    else if ([...textExtensions].some((extension) => entry.name.endsWith(extension))) {
      const source = await readFile(path, "utf8");
      const output = source
        .replaceAll('href="/', `href="${prefix}/`)
        .replaceAll('src="/', `src="${prefix}/`)
        .replaceAll('content="/og.png"', `content="${prefix}/og.png"`)
        .replaceAll('\\"href\\":\\"/', `\\"href\\":\\"${prefix}/`)
        .replaceAll('\\"src\\":\\"/', `\\"src\\":\\"${prefix}/`)
        .replaceAll('[\\"/', `[\\"${prefix}/`)
        .replaceAll(`${prefix}/${prefix}/`, `${prefix}/`);
      if (output !== source) await writeFile(path, output);
    }
  }
}

await visit(root);
await writeFile(join(root, ".nojekyll"), "");
