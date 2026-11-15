(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('motion-ready');

  const revealTargets = [...document.querySelectorAll('.project-section, .project-row, .utility-band, .style-section')];
  revealTargets.forEach((el,i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 35}ms`;
  });

  if (reduced) {
    revealTargets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });

  revealTargets.forEach(el => io.observe(el));

  const mascots = [...document.querySelectorAll('.theme-mark, .mascot-chip')]
    .filter(el => !el.closest('.project-row'));
  let mascotIndex = 0;
  const pulseMascot = () => {
    if (!mascots.length) return;
    mascots.forEach(m => m.classList.remove('is-ambient'));
    const m = mascots[mascotIndex % mascots.length];
    m.classList.add('is-ambient');
    window.setTimeout(() => m.classList.remove('is-ambient'), 1100);
    mascotIndex++;
  };
  window.setTimeout(pulseMascot, 5500);
  window.setInterval(pulseMascot, 10000);

  const rails = [...document.querySelectorAll('.utility-band')];
  let railIndex = 0;
  const tickRail = () => {
    if (!rails.length) return;
    rails.forEach(r => r.classList.remove('is-pulsing'));
    const rail = rails[railIndex % rails.length];
    rail.classList.add('motion-rail','is-pulsing');
    window.setTimeout(() => rail.classList.remove('is-pulsing'), 900);
    railIndex++;
  };
  window.setTimeout(tickRail, 8000);
  window.setInterval(tickRail, 13500);
})();