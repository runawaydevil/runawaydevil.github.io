---
type: "note"
title: "A cleaner way to bring web links into handwritten notes"
date: "2026-04-16T17:48:31.448-03:00"
tags: ["indieweb","nice","fediverse","url"]
---

The problem is easy to explain: the web was built for screens, not notebooks.

If you spend part of your life in paper journals, planners, or handwritten notes, URLs become a mess almost immediately. They are long, ugly, easy to mistype, and annoying to copy. That friction matters more than people like to admit. A system can be technically simple and still be miserable to use in practice.

That is the gap Benjamin Hollon set out to close with **urlref**, a tiny tool built for one specific job: turning any webpage into a short reference code that is easy to write by hand and easy to resolve later.

Instead of copying a full link into a notebook, the user saves the current page and gets back a short identifier such as `A06`. That code can be written in the margin, inside a journal entry, or next to a task. Later, typing that code into the browser sends the user straight back to the original page.

That is the whole trick. No cloud service. No third-party URL shortener. No dependence on somebody else’s infrastructure. Just a small local system that translates a human-friendly code into a real URL.

## The real idea behind the project

What makes the project interesting is not the database or the browser scripting. The real idea is that Hollon is optimizing for **ease of use**, not for theoretical simplicity.

A lot of people confuse those two things.

The simplest answer to the problem would be: write the full URL down. That is conceptually trivial. It is also terrible in the real world. Long links are annoying to copy, annoying to read back, and fragile enough that one small mistake can make the whole thing useless.

urlref takes the opposite approach. The setup is a little more involved, but the day-to-day workflow gets dramatically easier. Once it is in place, the user can save a page, jot down a tiny code, and move on.

That tradeoff is the point. The project is basically a declaration that convenience at the moment of use matters more than keeping the underlying mechanism minimal or obvious.

## How the workflow feels in practice

The flow is straightforward.

You find a page you want to keep.

You trigger a shortcut in the browser.

The tool stores the current URL locally and returns a short code.

You write that code in your notebook, usually with a marker like `@A06` so it clearly reads as a reference.

Later, when you want to revisit the source, you enter the code into the browser and the system opens the saved page.

The small details matter here. The codes are short. They stay short for a long time because they are generated sequentially. They are also designed to be forgiving: letter case does not matter, and characters that are easy to confuse by hand or by eye are treated as equivalents. That makes the system better suited to real handwriting rather than idealized, perfectly typed input.

This is where the project stops being a cute hack and becomes a well-thought-out tool. It respects how messy human input actually is.

## What is happening under the hood

Underneath the nice user experience, the implementation is refreshingly plain.

Hollon built urlref in **Nim**, chose **SQLite** as the storage layer, and keeps everything local on his own machine. When a URL is saved, it is inserted into the local database. The database row’s sequential ID is then turned into a short code using **Crockford Base32**, which is designed for human-readable identifiers and intentionally avoids characters that are easy to confuse.

That gives the system a few advantages right away.

First, it stays private. Nothing has to leave the machine.

Second, it is easy to back up. An SQLite file is not exotic or fragile.

Third, it is durable. Even if the surrounding tool stops being maintained someday, the underlying data is still stored in a boring, well-understood format.

There is also a small local HTTP server in the picture. That server takes a short code, looks up the matching record, and redirects the browser to the original URL. Once that exists, the browser can treat urlref like a custom local search target.

That integration is probably the cleverest part of the whole design.

Instead of building a bloated interface, the project piggybacks on behavior modern browsers already support. A short trigger phrase in the address bar gets converted into a request to the local server, and the server does the rest. It is neat, fast, and weirdly elegant.

## Why this project works

The best thing about urlref is that it does not pretend to solve everything.

It is not trying to be a general bookmarking platform, a read-later service, a tagging system, or a second brain. It solves one annoying problem: how to bridge the gap between handwritten notes and web pages without dragging in complexity from the rest of the internet.

That narrow scope is a strength.

A lot of personal software fails because the creator keeps adding features until the original point gets buried. Hollon does the opposite here. He finds one concrete irritation, removes it cleanly, and stops.

That discipline shows up in the tone of the project too. He is not selling a productivity revolution. He is describing a tool he built because the existing options were clumsy, privacy-hostile, or dependent on external services.

There is something convincing about software that comes from a very specific annoyance rather than a vague desire to optimize life.

## The limits are obvious, and that is fine

The project is opinionated.

That is not a flaw by itself, but it does narrow the audience.

If you do most of your thinking inside paper notebooks, this makes immediate sense. If you live entirely inside digital tools, it may feel unnecessary. And if you are not using a highly scriptable browser, copying the exact setup will take extra work.

That matters because part of the elegance comes from the browser integration. In the article, Qutebrowser clearly makes the whole flow smoother. Reproducing the same feel in Chrome, Firefox, or Safari would likely require an extension or some alternate automation layer.

So no, this is not universal. But it does not need to be.

Software can be excellent without being general-purpose. In fact, many of the best personal tools are excellent precisely because they are narrowly built around a real habit.

## Final take

urlref is a smart little system for turning messy web addresses into short, notebook-friendly references. That sounds minor until you realize how often small bits of friction are what kill a workflow.

Its strengths are not flashy. It is local, private, fast, easy to back up, and designed around actual human use rather than abstract neatness. More importantly, it understands the difference between something that is technically simple and something that is pleasant to live with.

That is why the project works.

It is not ambitious in the grand startup sense. It is ambitious in the more useful sense: it notices a real problem, solves it cleanly, and stays out of the way.

---

## Comments on Benjamin Hollon’s original text

Here are my honest comments on the original article.

### What the original does well

The strongest part of the piece is the framing around **simplicity versus ease**. That distinction gives the article a spine. Without it, the project could come off like a niche bookmark hack. With it, the article becomes an argument about interface design and practical tradeoffs.

The other thing that works is credibility. Hollon is clearly writing from actual use, not from theory. The article reads like something made to solve his own irritation, and that gives the technical explanation more weight.

The technical section is also clean. It explains just enough to make the mechanism understandable without drowning the reader in implementation trivia. That is harder to do than it looks.

### Where the original is weaker

The article is sharp, but it is also very tailored to the author’s setup. That is fine, except it means some readers will immediately think, “Cool, but this only works for you.” The piece acknowledges that, but it could have gone further in showing how the idea might transfer to other browsers or workflows.

It also could have used one stronger example earlier on. The article explains the system clearly, but a concrete before-and-after moment near the top would have made the pain point hit faster.

And while the conclusion is solid, it slightly undersells the broader value of the idea. This is not just a story about a tiny tool. It is also a useful example of how good personal software gets built: narrow scope, low dependency burden, humane input design, and a workflow that respects reality.

**Ref: https://benjaminhollon.com/musings/urlref/**
