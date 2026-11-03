/* PLAY/SIGNAL motion engine. No dependencies. No impact on SUN/SIGNAL. */
(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) return;
  root.classList.add('ps-motion');

  const targets = [...document.querySelectorAll('[data-reveal], [data-build]')];
  targets.forEach((element) => element.classList.add('ps-armed'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('ps-visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    targets.forEach((element) => observer.observe(element));
  } else {
    targets.forEach((element) => element.classList.add('ps-visible'));
  }

  const replay = document.querySelector('[data-motion-replay]');
  const demo = document.querySelector('[data-motion-demo]');
  const toggle = document.querySelector('[data-motion-toggle]');
  replay?.addEventListener('click', () => {
    if (!demo || root.classList.contains('ps-calm')) return;
    demo.classList.remove('is-replaying');
    void demo.offsetWidth;
    demo.classList.add('is-replaying');
  });
  toggle?.addEventListener('click', () => {
    const calm = root.classList.toggle('ps-calm');
    toggle.textContent = calm ? 'Activer les animations' : 'Réduire les animations';
    toggle.setAttribute('aria-pressed', String(calm));
  });
})();
