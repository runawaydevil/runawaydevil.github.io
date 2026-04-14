/**
 * One-time / CI: fetch minimal Lucide SVGs from unpkg (MIT).
 * Run: node scripts/fetch-lucide-icons.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "src", "assets", "icons", "lucide");

const ICONS = [
  "home",
  "search",
  "library",
  "notebook-pen",
  "link-2",
  "bookmark",
  "image",
  "messages-square",
  "clock",
  "user-round",
  "mail",
  "rss",
  "layout-list",
  "tag",
  "cpu",
  "chevron-left",
  "chevron-right",
  "external-link",
  "calendar",
  "book-open",
  "heart",
];

const VERSION = "1.8.0";
const base = `https://unpkg.com/lucide-static@${VERSION}/icons`;

fs.mkdirSync(outDir, { recursive: true });

for (const name of ICONS) {
  const url = `${base}/${name}.svg`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed ${name}: ${res.status}`);
    process.exit(1);
  }
  const text = await res.text();
  fs.writeFileSync(path.join(outDir, `${name}.svg`), text, "utf8");
  console.log("OK", name);
}

console.log("Done:", outDir);
