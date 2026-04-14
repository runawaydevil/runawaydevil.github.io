(function () {
  "use strict";
  var toc = document.getElementById("post-toc");
  var listEl = document.getElementById("post-toc-list");
  var content = document.querySelector("article.h-entry .e-content");
  if (!toc || !listEl || !content) return;

  var headings = content.querySelectorAll("h2, h3");
  if (headings.length < 2) {
    toc.remove();
    return;
  }

  function slugify(text) {
    return String(text || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  var used = new Set();
  for (var i = 0; i < headings.length; i++) {
    var h = headings[i];
    var base = h.id ? h.id : slugify(h.textContent || "") || "section-" + i;
    var id = base;
    var n = 0;
    while (used.has(id) || document.getElementById(id)) {
      n += 1;
      id = base + "-" + n;
    }
    used.add(id);
    if (!h.id) h.id = id;

    var li = document.createElement("li");
    if (h.tagName === "H3") li.className = "post-toc__sub";
    var a = document.createElement("a");
    a.href = "#" + id;
    a.textContent = (h.textContent || "").trim();
    li.appendChild(a);
    listEl.appendChild(li);
  }

  toc.hidden = false;
})();
