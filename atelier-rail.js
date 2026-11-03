(function () {
  "use strict";

  const rail = document.querySelector("[data-work-rail]");
  if (!rail) return;

  const cards = Array.from(rail.querySelectorAll(".atelier-work-card"));
  const prev = document.querySelector("[data-work-prev]");
  const next = document.querySelector("[data-work-next]");
  const current = document.querySelector("[data-work-current]");
  const total = document.querySelector("[data-work-total]");
  const progress = document.querySelector("[data-work-progress]");

  if (!cards.length) return;

  const pad2 = n => String(n).padStart(2, "0");
  if (total) total.textContent = pad2(cards.length);

  if (prev) prev.disabled = false;
  if (next) next.disabled = false;

  function nearestIndex() {
    const left = rail.scrollLeft;
    let index = 0;
    let best = Infinity;

    cards.forEach((card, i) => {
      const delta = Math.abs(card.offsetLeft - left - rail.offsetLeft);
      if (delta < best) {
        best = delta;
        index = i;
      }
    });

    return index;
  }

  function updateUI() {
    const index = nearestIndex();
    const maxScroll = Math.max(1, rail.scrollWidth - rail.clientWidth);
    const ratio = Math.min(1, Math.max(0, rail.scrollLeft / maxScroll));

    if (current) current.textContent = pad2(index + 1);
    if (progress) progress.style.width = (ratio * 100) + "%";
    if (prev) prev.disabled = rail.scrollLeft <= 2;
    if (next) next.disabled = rail.scrollLeft >= maxScroll - 2;
  }

  function go(direction) {
    const index = nearestIndex();
    const target = Math.min(cards.length - 1, Math.max(0, index + direction));
    cards[target].scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "nearest",
      inline: "start"
    });
  }

  if (prev) prev.addEventListener("click", () => go(-1));
  if (next) next.addEventListener("click", () => go(1));

  let ticking = false;
  rail.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateUI();
      ticking = false;
    });
  }, { passive: true });

  rail.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  });

  window.addEventListener("resize", updateUI, { passive: true });
  updateUI();
})();