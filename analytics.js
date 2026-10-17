(() => {
  const PROD_HOST = "kouboy.github.io";
  const PROD_BASE = "/portfolio-it/";

  // Keep local development and public previews out of the statistics.
  if (
    window.location.hostname !== PROD_HOST ||
    !window.location.pathname.startsWith(PROD_BASE) ||
    window.location.pathname.startsWith(PROD_BASE + "previews/")
  ) {
    return;
  }

  // Keep page reports clean even when a campaign parameter is present.
  // GoatCounter still reads campaign/source parameters from the page URL.
  window.goatcounter = {
    path: () => window.location.pathname
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = "https://kouboy.goatcounter.com/count";
  document.head.appendChild(script);
})();
