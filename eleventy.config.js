import pluginRss from "@11ty/eleventy-plugin-rss";
import { execFile, execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const iconsLucideDir = path.join(__dirname, "src", "assets", "icons", "lucide");
const iconsCustomDir = path.join(__dirname, "src", "assets", "icons", "custom");
const outputDir = path.join(__dirname, "_site");
const pagefindBin = path.join(__dirname, "node_modules", "pagefind", "lib", "runner", "bin.cjs");
const execFileAsync = promisify(execFile);

const SITE_VERSION = "0.0.2";
const SITE_VERSION_YEAR = "2026";

/** Short SHA + last commit subject for footer (no URLs). CI: set BUILD_COMMIT_SUBJECT if git metadata unavailable. */
function getGitBuildFooter() {
  try {
    const sha = execFileSync("git", ["rev-parse", "--short", "HEAD"], {
      cwd: __dirname,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    let subject = "";
    try {
      subject = execFileSync("git", ["log", "-1", "--format=%s"], {
        cwd: __dirname,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim();
    } catch {
      subject = "";
    }
    if (sha || subject) {
      return { sha, subject: truncateBuildCommitSubject(subject) };
    }
  } catch {
    // not a git checkout or git missing
  }
  const long = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || "";
  const sha = long ? long.slice(0, 7) : "";
  const rawSubject = String(
    process.env.BUILD_COMMIT_SUBJECT || process.env.VERCEL_GIT_COMMIT_MESSAGE || ""
  ).trim();
  const subject = truncateBuildCommitSubject(rawSubject.split(/\r?\n/)[0] || "");
  return { sha, subject };
}

function truncateBuildCommitSubject(s, max = 96) {
  const t = String(s || "").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}

/** Lucide filenames (no .svg) — keep in sync with scripts/fetch-lucide-icons.mjs */
const ALLOWED_LUCIDE = new Set([
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
]);

const ALLOWED_GLYPH = new Set(["ornament-divider", "empty-state", "guestbook-accent", "terminal-cursor"]);

const VALID_SIZES = new Set(["xs", "sm", "md", "lg"]);

const svgDataCache = new Map();

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function isTruthyDecorative(v) {
  if (v === false || v === "false") return false;
  return true;
}

function normalizeSize(size) {
  if (size && VALID_SIZES.has(size)) return size;
  return "md";
}

function parseStroke(strokeStr, fallback = 1.5) {
  if (strokeStr === undefined || strokeStr === null || strokeStr === "") return fallback;
  const n = Number.parseFloat(String(strokeStr), 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

function extractSvgInner(raw) {
  const m = raw.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return m ? m[1].trim() : "";
}

function loadSvgData(absPath) {
  if (svgDataCache.has(absPath)) return svgDataCache.get(absPath);
  const raw = fs.readFileSync(absPath, "utf8");
  const inner = extractSvgInner(raw);
  const vbMatch = raw.match(/viewBox="([^"]+)"/i);
  const viewBox = vbMatch ? vbMatch[1] : "0 0 24 24";
  const data = { inner, viewBox };
  svgDataCache.set(absPath, data);
  return data;
}

function sanitizeClassToken(s) {
  return String(s || "")
    .trim()
    .split(/\s+/)
    .filter((t) => /^[a-zA-Z0-9_-]+$/.test(t))
    .join(" ");
}

function stripHtml(input) {
  return String(input || "")
    .replace(/<figure[\s\S]*?<\/figure>/gi, " ")
    .replace(/<figcaption[\s\S]*?<\/figcaption>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function stripFrontMatter(input) {
  const text = String(input || "");
  if (!text.startsWith("---")) return text;
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
}

function stripMarkdown(input) {
  return String(input || "")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~`>#-]+/g, " ")
    .replace(/\{#[^}]+\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function trimWords(text, maxWords = 26) {
  const words = String(text || "").trim().split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return words.join(" ");
  return `${words.slice(0, maxWords).join(" ")}...`;
}

function getTypeLabel(item) {
  const inputPath = item?.inputPath?.replace(/\\/g, "/") || "";
  // Path first: type: "note" in front matter must not label articles/ as journal.
  if (inputPath.includes("/src/posts/journal/")) return "journal";
  if (inputPath.includes("/src/posts/articles/")) return "article";
  return item?.data?.type || "post";
}

function getDisplayTitle(item) {
  const typeLabel = getTypeLabel(item);
  if (typeLabel === "journal") {
    const noteId = item?.data?.globalNoteId;
    const noteLabel = noteId ? `Note #${noteId}` : "Journal note";
    return item?.data?.title ? item.data.title : noteLabel;
  }
  return item?.data?.title || "Untitled";
}

function getSummary(item, maxWords = 26) {
  const explicit = item?.data?.excerpt || item?.data?.dek || item?.data?.description;
  if (explicit) return trimWords(stripHtml(explicit), maxWords);
  const inputPath = item?.inputPath;
  if (inputPath && fs.existsSync(inputPath)) {
    const rawSource = fs.readFileSync(inputPath, "utf8");
    const sourceBody = stripFrontMatter(rawSource);
    return trimWords(stripMarkdown(stripHtml(sourceBody)), maxWords);
  }
  return "";
}

function sortByDateDesc(items) {
  return [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function pickFeaturedItem(collection) {
  if (!Array.isArray(collection) || collection.length === 0) return null;
  const sorted = sortByDateDesc(collection);
  const explicitFeatured = sorted.find((item) => item?.data?.featured);
  if (explicitFeatured) return explicitFeatured;
  return null;
}

function pickHomeHighlights(collection, featuredUrl, limit = 4) {
  if (!Array.isArray(collection)) return [];
  const filtered = collection.filter((item) => item?.url !== featuredUrl);
  const sorted = [...filtered].sort((a, b) => {
    // Freshness should always win here so older notes don't get "stuck"
    // just because they have a manual excerpt or richer metadata.
    const dateDiff = new Date(b.date) - new Date(a.date);
    if (dateDiff !== 0) return dateDiff;

    const aType = getTypeLabel(a);
    const bType = getTypeLabel(b);
    const aScore = (aType === "article" ? 2 : 0) + (a?.data?.excerpt || a?.data?.dek ? 1 : 0);
    const bScore = (bType === "article" ? 2 : 0) + (b?.data?.excerpt || b?.data?.dek ? 1 : 0);
    if (bScore !== aScore) return bScore - aScore;
    return a.inputPath.localeCompare(b.inputPath);
  });
  return sorted.slice(0, Number(limit) || 4);
}

async function buildPagefindIndex() {
  if (!fs.existsSync(pagefindBin)) {
    return;
  }

  const pagefindOutputDir = path.join(outputDir, "pagefind");
  fs.rmSync(pagefindOutputDir, { recursive: true, force: true });

  await execFileAsync(process.execPath, [pagefindBin, "--site", "_site"], {
    cwd: __dirname,
  });
}

function cleanOutputDirectory() {
  const resolvedOutputDir = path.resolve(outputDir);
  const expectedOutputDir = path.resolve(path.join(__dirname, "_site"));

  if (resolvedOutputDir !== expectedOutputDir || path.basename(resolvedOutputDir) !== "_site") {
    throw new Error(`Refusing to clean unexpected output directory: ${resolvedOutputDir}`);
  }

  fs.rmSync(resolvedOutputDir, { recursive: true, force: true });
}

/**
 * decorative true (default): aria-hidden. If decorative false and label set: role="img" + aria-label.
 */
function renderIconMarkup({ inner, viewBox, size, decorative, label, extraClass, strokeWidth }) {
  const extra = sanitizeClassToken(extraClass);
  const classes = ["icon", `icon--${size}`, extra].filter(Boolean).join(" ");
  const sw = parseStroke(strokeWidth, 1.5);
  const lab = label && String(label).trim() ? String(label).trim() : "";
  const isDec = isTruthyDecorative(decorative);
  const vb = viewBox || "0 0 24 24";

  let a11y = "";
  if (!isDec && lab) {
    a11y = ` role="img" aria-label="${escapeHtml(lab)}"`;
  } else {
    a11y = ' aria-hidden="true" focusable="false"';
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${escapeHtml(vb)}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${a11y}>${inner}</svg>`;
  return `<span class="${escapeHtml(classes)}">${svg}</span>`;
}

function assertSafeName(name) {
  if (!/^[a-z0-9-]+$/.test(name)) {
    throw new Error(`Invalid icon name: ${name}`);
  }
}

export default function(eleventyConfig) {
  eleventyConfig.addGlobalData("siteVersion", SITE_VERSION);
  eleventyConfig.addGlobalData("siteVersionYear", SITE_VERSION_YEAR);
  eleventyConfig.addGlobalData("buildFooter", getGitBuildFooter());

  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.on("eleventy.before", () => {
    cleanOutputDirectory();
  });
  eleventyConfig.on("eleventy.beforeWatch", () => {
    cleanOutputDirectory();
  });
  eleventyConfig.on("eleventy.after", async () => {
    await buildPagefindIndex();
  });

  /**
   * {% icon "name", "sm", true, "", "", "1.5" %}
   * name, size (xs|sm|md|lg), decorative, label, extraClass, stroke
   */
  eleventyConfig.addShortcode("icon", function iconShortcode(name, size, decorative, label, extraClass, strokeWidth) {
    assertSafeName(name);
    if (!ALLOWED_LUCIDE.has(name)) {
      throw new Error(`Icon not allowed: ${name}`);
    }
    const filePath = path.join(iconsLucideDir, `${name}.svg`);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Missing SVG: ${filePath}`);
    }
    const { inner, viewBox } = loadSvgData(filePath);
    const sz = normalizeSize(size);
    const dec = isTruthyDecorative(decorative);
    const lab = label !== undefined && label !== null && String(label).trim() !== "" ? String(label).trim() : "";
    const extra = extraClass ? String(extraClass).trim() : "";
    return renderIconMarkup({
      inner,
      viewBox,
      size: sz,
      decorative: dec,
      label: lab,
      extraClass: extra,
      strokeWidth,
    });
  });

  eleventyConfig.addShortcode("glyph", function glyphShortcode(name, size, decorative, label, extraClass, strokeWidth) {
    assertSafeName(name);
    if (!ALLOWED_GLYPH.has(name)) {
      throw new Error(`Glyph not allowed: ${name}`);
    }
    const filePath = path.join(iconsCustomDir, `${name}.svg`);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Missing glyph SVG: ${filePath}`);
    }
    const { inner, viewBox } = loadSvgData(filePath);
    const sz = normalizeSize(size);
    const dec = isTruthyDecorative(decorative);
    const lab = label !== undefined && label !== null && String(label).trim() !== "" ? String(label).trim() : "";
    const extra = extraClass ? String(extraClass).trim() : "";
    return renderIconMarkup({
      inner,
      viewBox,
      size: sz,
      decorative: dec,
      label: lab,
      extraClass: extra,
      strokeWidth,
    });
  });

  // Passthrough copy for CSS and Images
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/uploads");
  eleventyConfig.addPassthroughCopy("src/assets/pets.ico");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/pablo");
  eleventyConfig.addPassthroughCopy("notecards");
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource-variable/geist/files": "assets/fonts/geist",
    "node_modules/@fontsource-variable/geist-mono/files": "assets/fonts/geist-mono",
  });

  // Filters for date formatting (Vanilla JS)
  eleventyConfig.addFilter("dateToISO", (date) => {
    return date ? new Date(date).toISOString() : "";
  });
  
  eleventyConfig.addFilter("dateToPermalink", (date) => {
    if (!date) return "";
    const d = new Date(date);
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(d.getUTCDate()).padStart(2, '0');
    return `${yyyy}/${mm}/${dd}`;
  });

  function hostnameFromUrlValue(url) {
    if (url === undefined || url === null || String(url).trim() === "") return "";
    try {
      const u = new URL(String(url).trim());
      return u.hostname || "";
    } catch {
      return "";
    }
  }

  /** Public bookmark URL → hostname (favicons / labels). Invalid URLs → "". */
  eleventyConfig.addFilter("hostnameFromUrl", (url) => hostnameFromUrlValue(url));

  /**
   * Favicon URL via third-party resolver (loads at runtime in the browser, not at build).
   * Default size 64 matches common card thumbnails.
   */
  eleventyConfig.addFilter("remoteFavicon", (url, size = 64) => {
    const host = hostnameFromUrlValue(url);
    if (!host) return "";
    const sz = Math.min(128, Math.max(16, Number(size) || 64));
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=${sz}`;
  });

  eleventyConfig.addFilter("relatedItems", (collection, pageUrl, limit = 3) => {
    if (!Array.isArray(collection)) return [];
    const n = Number(limit) || 3;
    return collection.filter((item) => item.url !== pageUrl).slice(0, n);
  });

  eleventyConfig.addFilter("featuredOnly", (collection) => {
    if (!Array.isArray(collection)) return [];
    return collection.filter((item) => item.data && item.data.featured);
  });

  eleventyConfig.addFilter("homeFeatured", (collection) => pickFeaturedItem(collection));

  eleventyConfig.addFilter("homeHighlights", (collection, featuredUrl, limit = 4) => {
    return pickHomeHighlights(collection, featuredUrl, limit);
  });

  eleventyConfig.addFilter("homeTypeLabel", (item) => getTypeLabel(item));

  /** Presentation labels for home writing type (journal stream → Note, articles → Article). */
  eleventyConfig.addFilter("homeTypeDisplay", (item) => {
    const raw = getTypeLabel(item);
    if (raw === "journal") return "Note";
    if (raw === "article") return "Article";
    if (!raw || typeof raw !== "string") return "Post";
    return raw.charAt(0).toUpperCase() + raw.slice(1);
  });

  eleventyConfig.addFilter("homeTitle", (item) => getDisplayTitle(item));

  eleventyConfig.addFilter("homeSummary", (item, maxWords = 26) => getSummary(item, maxWords));

  // Coleção para Journal mantendo numeração global contínua (pastas canónicas: só ficheiros em journal/)
  eleventyConfig.addCollection("journalNotes", function(collectionApi) {
    const rawNotes = collectionApi.getAll().filter((item) => {
      const p = item.inputPath.replace(/\\/g, "/");
      return p.includes("/src/posts/journal/");
    });
    
    // Garante ordenação cronológica estrita (mais antigo primeiro)
    const sortedNotes = rawNotes.sort((a, b) => {
      const dateDiff = a.date - b.date;
      if (dateDiff !== 0) return dateDiff;

      return a.inputPath.localeCompare(b.inputPath);
    });
    
    // Atribui ID global contínuo
    sortedNotes.forEach((item, index) => {
      item.data.globalNoteId = index + 1;
    });
    
    return sortedNotes;
  });

  // Coleção para página inicial: apenas streams journal + articles (por pasta, não por type no FM)
  eleventyConfig.addCollection("homeFeed", function(collectionApi) {
    return collectionApi.getFilteredByTag("post").filter((item) => {
      const p = item.inputPath.replace(/\\/g, "/");
      return p.includes("/src/posts/journal/") || p.includes("/src/posts/articles/");
    });
  });

  eleventyConfig.addCollection("article", function(collectionApi) {
    return collectionApi.getFilteredByTag("post").filter((item) =>
      item.inputPath.replace(/\\/g, "/").includes("/src/posts/articles/")
    );
  });

  eleventyConfig.addCollection("bookmark", function(collectionApi) {
    return collectionApi.getFilteredByTag("post").filter((item) => {
      const p = item.inputPath.replace(/\\/g, "/");
      return item.data.type === "bookmark" || p.includes("/src/posts/bookmarks/");
    });
  });

  eleventyConfig.addCollection("photo", function(collectionApi) {
    return collectionApi.getFilteredByTag("post").filter((item) => {
      const p = item.inputPath.replace(/\\/g, "/");
      return item.data.type === "photo" || p.includes("/src/posts/photos/");
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
