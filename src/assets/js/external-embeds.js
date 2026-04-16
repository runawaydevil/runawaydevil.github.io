function loadYouTubeEmbed(wrapper, mount) {
  const iframe = document.createElement("iframe");
  iframe.className = "deferred-embed__frame";
  iframe.src = wrapper.dataset.embedSrc || "";
  iframe.title = wrapper.dataset.embedTitle || "Embedded video";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;
  mount.replaceChildren(iframe);
}

function loadLetterbirdEmbed(wrapper, mount, index) {
  const script = document.createElement("script");
  script.src = wrapper.dataset.embedSrc || "https://letterbird.co/embed/v1.js";
  script.dataset.letterbirduser = wrapper.dataset.letterbirdUser || "";
  mount.id = mount.id || `deferred-letterbird-${index}`;
  script.dataset.targetelement = mount.id;
  document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-embed-provider]").forEach((wrapper, index) => {
    const button = wrapper.querySelector(".deferred-embed__button");
    const mount = wrapper.querySelector("[data-embed-mount]");
    if (!button || !mount) {
      return;
    }

    button.addEventListener("click", () => {
      if (wrapper.dataset.embedLoaded === "true") {
        return;
      }

      wrapper.dataset.embedLoaded = "true";
      button.disabled = true;

      const provider = wrapper.dataset.embedProvider;
      if (provider === "youtube") {
        button.textContent = "Loading video...";
        loadYouTubeEmbed(wrapper, mount);
      } else if (provider === "letterbird") {
        button.textContent = "Opening form...";
        loadLetterbirdEmbed(wrapper, mount, index);
      }

      wrapper.classList.add("deferred-embed--loaded");
    });
  });
});
