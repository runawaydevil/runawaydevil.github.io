document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("photo-lightbox");
  const imgElement = document.getElementById("lightbox-img");
  if (!dialog || !imgElement) {
    return;
  }

  document.querySelectorAll(".photo-archive-item__img-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const image = link.querySelector("img");
      if (!image) {
        return;
      }

      imgElement.src = image.src;
      imgElement.alt = image.alt || "Enlarged photo";
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});
