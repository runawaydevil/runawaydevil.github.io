---
layout: page.njk
title: Colophon
permalink: /colophon/
---

In publishing, a **colophon** is the bit at the back of a book that says where the ink went, who paid for the paper, and which monastery’s goat supplied the glue. On the web, it’s the same idea, except the glue is npm and the monastery is me, in sweatpants, at 1:14 a.m., insisting that *this* spacing is “literally fine.”

I built this site myself. If something looks polished, thank Eleventy. If something looks haunted, that was also me, but on purpose.

## Technologies (the honest version)

**Eleventy (11ty)** — version 3.x, because static sites age like cheese: slowly, confidently, and with fewer runtime surprises than whatever JavaScript framework was trending last Tuesday. I write posts in **Markdown** and let **Nunjucks** templates do the heavy lifting in `src/_includes/`. Yes, that means I occasionally whisper {% raw %}`{% for %}`{% endraw %} into the void and the void whispers back “syntax error near line 47.”

**Feeds:** There is an **Atom** feed at `/feed.xml`, powered by `@11ty/eleventy-plugin-rss`. I still call it “RSS / Atom” in the footer because “Atom only, actually” sounds like a prog band nobody booked. Subscribe anyway; the XML does not judge your reader.

**Search:** **Pagefind** indexes the built site after every build (`eleventy.after` runs it like a tiny librarian with a blowtorch and a spreadsheet). The search UI lives on `/search/`. If you find nothing, try spelling it the way the universe intended—or the way I mistyped it in 2024.

**Typography:** **Geist** and **Geist Mono** (variable fonts) are self-hosted from `@fontsource-variable` and copied into `/assets/fonts/` at build time. No Google Fonts tracking my visitors’ taste in ligatures. Just me, tracking my own taste in ligatures.

**Icons:** Custom shortcodes render a carefully allow-listed subset of **Lucide** SVGs, because nothing says “indie personal site” like “I wrote a Node script to stop myself from importing all 1,400 icons at once.”

**ANSI header art:** The loud “PABLO” strip at the top is not a PNG you can right‑click—it’s a `<pre>` full of `<span>`s and inline colours, the way nature intended. The pipeline that gets textmode art into that shape lives in **[htmlansi](https://github.com/runawaydevil/htmlansi)**, a project of mine for turning `.ans` (and friends) into HTML you can drop into a static site without apologising to your linter. If the blocks line up, thank the converter; if they shimmer like a cheap CRT, blame subpixel rounding and move on.

**Motion:** A **Lottie** animation loads from unpkg for the header mark. It’s a sleeping blob. It has done more emotional labour than some of my dependencies.

**CSS:** Hand-tended in `src/assets/css/style.css`. Not Tailwind, not “a design system you can buy.” Just rules, regret, and the occasional `!important` that I will deny under oath.

**Hosting:** **GitHub Pages** serves the built `_site` output. The footer already admits it. The repo is public; the shame is curated.

## IndieWeb-ish credentials

There’s an **h-card** in the footer (machine-readable, slightly theatrical). **rel="me"** links point at the usual suspects. **Micropub** endpoints sit in the `<head>` for the day I post from something that isn’t a text editor. An **IndieWeb webring** link lets you wander to neighbours like it’s 1999 but with better fonts.

I did **not** bolt on Webmention.io, a Mastodon-powered comment engine for every post, or a headless CMS that requires a master’s degree in OAuth. If you miss those, close your eyes and imagine me apologising in Comic Sans.

## Closing statement

This colophon is accurate to the best of my knowledge at build time. If any tool version drifts, blame semver, not malice. If the site breaks, blame cached HTML, not malice. If you enjoyed this page, blame me — I built it, and I’d do it again.
