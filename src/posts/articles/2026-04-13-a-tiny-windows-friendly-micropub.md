---
type: "note"
title: "A tiny Windows-friendly Micropub publisher"
date: "2026-04-13T05:10:39.000-03:00"
updated: "2026-04-13T05:25:45.292-03:00"
tags: ["personal","projects","python"]
---

<p>I’m building a very simple <strong>Python app</strong> for publishing through Micropub, mostly because I got tired of not finding good native Windows tools for these protocols, which is where I do most of my daily work. The project is still early and intentionally lightweight, but that is also part of the point: it is small, practical, and easy to understand.<br>
<img src="https://pablo.space/assets/uploads/photos/2026/04/pypub-1.png" alt=""><br>
Under the hood, the architecture is straightforward and clean. It uses a simplified Domain-Driven Design structure, separating the core domain, application services, infrastructure, and UI. Authentication is handled with IndieAuth using PKCE and a local callback flow, while tokens are stored more safely through the system credential store instead of being hardcoded anywhere. On the writing side, the editor supports rich text, Markdown, HTML, and plain text, with draft recovery, media uploads, and a workflow designed to stay simple rather than clever.<br>
<img src="https://pablo.space/assets/uploads/photos/2026/04/pypub1.png" alt=""><br>
It is still a primitive little beast, and I will probably release it as open source on GitHub without much ceremony. There is no complicated installation process, no giant stack of dependencies pretending to be innovation, and no desire to turn it into a bloated monster. Just a small desktop tool that tries to make publishing to the IndieWeb a bit less annoying on Windows.</p>
<p>I’m also open to contributions, suggestions, and people who enjoy helping small weird software grow into <em>something genuinely useful</em>.</p>
