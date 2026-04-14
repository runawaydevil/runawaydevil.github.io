(() => {
  const bar = document.getElementById("reading-progress-bar");
  const zone = document.querySelector(".h-entry .e-content");
  if (!bar || !zone) return;

  const tick = () => {
    const top = window.scrollY + zone.getBoundingClientRect().top;
    const y = window.scrollY + window.innerHeight * 0.15;
    const p = (y - top) / zone.offsetHeight;
    const clamped = Math.min(100, Math.max(0, p * 100));
    bar.style.setProperty("--rp", String(clamped));
  };

  window.addEventListener("scroll", tick, { passive: true });
  window.addEventListener("resize", tick);
  tick();
})();
