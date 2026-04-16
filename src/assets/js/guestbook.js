document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("gb-form");
  if (!form) {
    return;
  }

  const API_URL = "https://zvhfozbloerfkljxngft.supabase.co/functions/v1/guestbook-api";
  const submitBtn = document.getElementById("gb-submit");
  const statusDiv = document.getElementById("gb-status");
  const feedDiv = document.getElementById("gb-feed");
  const formStatusDiv = document.getElementById("gb-form-status");
  const prevBtn = document.getElementById("gb-prev");
  const nextBtn = document.getElementById("gb-next");
  const pageInfo = document.getElementById("gb-page-info");
  const pagination = document.getElementById("gb-pagination");
  const vitrineView = document.getElementById("vitrine-view");
  const formView = document.getElementById("form-view");
  const btnShowForm = document.getElementById("btn-show-form");
  const btnBackVitrine = document.getElementById("btn-back-vitrine");

  let currentPage = 1;
  const perPage = 15;
  const themeFiles = [
    "01.png", "02.png", "03.png", "04.png",
    "05.png", "06.png", "07.png", "08.png",
    "09.jpg", "10.jpg", "11.jpg", "12.jpg",
    "13.png", "14.png", "15.png", "16.png",
    "17.png", "18.png", "19.png", "20.png",
    "21.png", "22.png", "23.png", "24.png",
    "25.png", "26.png", "27.png", "28.png",
  ];

  const preloadImages = () => {
    themeFiles.forEach((file) => {
      const image = new Image();
      image.src = `/notecards/${file}`;
    });
  };

  const goToVitrine = () => {
    formView.style.display = "none";
    vitrineView.style.display = "block";
  };

  const loadEntries = async (page) => {
    statusDiv.style.display = "block";
    statusDiv.textContent = "Loading signals...";
    feedDiv.innerHTML = "";
    pagination.style.display = "none";

    try {
      const response = await fetch(`${API_URL}?page=${page}&perPage=${perPage}&_t=${Date.now()}`, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch from guestbook API");
      }

      const data = await response.json();
      const entries = data.entries || [];
      const hasNext = (page * perPage) < data.total;

      statusDiv.style.display = "none";

      if (!entries.length) {
        statusDiv.style.display = "block";
        statusDiv.textContent = "Silence so far. Be the first to leave a message.";
        return;
      }

      entries.forEach((entry) => {
        let themeId = Number.parseInt(entry.theme, 10);
        if (Number.isNaN(themeId) || themeId < 1) {
          themeId = 1;
        }

        const safeThemeIndex = (themeId - 1) % themeFiles.length;
        const safeTheme = themeFiles[safeThemeIndex];

        const card = document.createElement("div");
        card.className = "guestbook-card";
        card.style.backgroundImage = `url("/notecards/${safeTheme}")`;

        const contentDiv = document.createElement("div");
        contentDiv.className = "guestbook-card-content";

        let safeContent = entry.content || "";
        if (safeContent.length > 500) {
          safeContent = `${safeContent.substring(0, 500)}...`;
        }
        safeContent = safeContent.replace(/(?:\r\n|\r|\n){3,}/g, "\n\n");
        contentDiv.textContent = safeContent;

        const footerDiv = document.createElement("div");
        footerDiv.className = "guestbook-card-footer";

        let safeAuthor = entry.author || "Anonymous";
        if (safeAuthor.length > 50) {
          safeAuthor = `${safeAuthor.substring(0, 50)}...`;
        }

        const authorSpan = document.createElement("span");
        if (entry.url && entry.url.trim().length > 0) {
          const urlStr = entry.url.trim();
          const link = document.createElement("a");
          if (/^javascript:/i.test(urlStr) || /^data:/i.test(urlStr) || /^vbscript:/i.test(urlStr)) {
            link.href = "#";
          } else {
            link.href = urlStr.startsWith("http") ? urlStr : `https://${urlStr}`;
          }
          link.rel = "noopener noreferrer";
          link.target = "_blank";
          link.textContent = `— ${safeAuthor}`;
          authorSpan.appendChild(link);
        } else {
          authorSpan.textContent = `— ${safeAuthor}`;
        }

        const dateSpan = document.createElement("span");
        if (entry.created_at) {
          dateSpan.textContent = new Date(entry.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
        }

        footerDiv.appendChild(authorSpan);
        footerDiv.appendChild(dateSpan);
        card.appendChild(contentDiv);
        card.appendChild(footerDiv);
        feedDiv.appendChild(card);
      });

      pagination.style.display = "flex";
      pageInfo.textContent = `Page ${page}`;
      prevBtn.disabled = page === 1;
      nextBtn.disabled = !hasNext;
    } catch (error) {
      statusDiv.style.display = "block";
      statusDiv.textContent = "Connection to the void lost. Try again later.";
      console.error(error);
    }
  };

  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(preloadImages);
  } else {
    window.setTimeout(preloadImages, 200);
  }

  btnShowForm.addEventListener("click", () => {
    vitrineView.style.display = "none";
    formView.style.display = "block";
    formStatusDiv.textContent = "";
  });

  btnBackVitrine.addEventListener("click", goToVitrine);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const special = formData.get("special");
    if (special) {
      formStatusDiv.style.color = "#ff6b6b";
      formStatusDiv.textContent = "Bot detected.";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Transmitting...";
    formStatusDiv.textContent = "";

    const randomTheme = Math.floor(Math.random() * themeFiles.length) + 1;
    const payload = {
      author: formData.get("author"),
      content: formData.get("content"),
      url: formData.get("url"),
      theme: randomTheme,
      special,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to transmit message");
      }

      form.reset();
      currentPage = 1;
      await new Promise((resolve) => window.setTimeout(resolve, 500));
      await loadEntries(1);
      goToVitrine();
    } catch (error) {
      formStatusDiv.style.color = "#d1bfae";
      formStatusDiv.textContent = error.message || "Network error signal.";
      console.error(error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Transmit Signal";
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage -= 1;
      loadEntries(currentPage);
      document.querySelector("#vitrine-view").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  nextBtn.addEventListener("click", () => {
    currentPage += 1;
    loadEntries(currentPage);
    document.querySelector("#vitrine-view").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  loadEntries(currentPage);
});
