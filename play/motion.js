/* CREATIVE ARCHIVE / PLAY-SIGNAL
   Staged motion: structure -> pictogram -> typography -> explanation.
   Does not affect SUN/SIGNAL or PAPER/SIGNAL. */
(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const replay = document.querySelector('[data-motion-replay]');
  const demo = document.querySelector('[data-motion-demo]');
  const toggle = document.querySelector('[data-motion-toggle]');

  const disableControls = () => {
    for (const button of [replay, toggle]) {
      if (!button) continue;
      button.disabled = true;
      button.title = 'Animations désactivées par la préférence de mouvement réduit du système';
    }
  };

  if (reduced.matches) {
    disableControls();
    return;
  }

  const stages = [...document.querySelectorAll('[data-reveal], [data-build]')];

  function category(element) {
    if (element.matches('.ps-title > span')) return { delay: 120 + [...element.parentElement.children].filter(x => x.tagName === 'SPAN').indexOf(element) * 270, duration: 780 };
    if (element.matches('.ps-page-lead h1')) return { delay: 200, duration: 980 };
    if (element.matches('.ps-section-head h2')) return { delay: 250, duration: 900 };
    if (element.matches('.ps-hero-side strong')) return { delay: 480, duration: 700 };
    if (element.matches('.ps-project h3')) return { delay: 760, duration: 740 };
    if (element.matches('.ps-kicker,.ps-label,.ps-lang-en')) return { delay: 95, duration: 430 };
    if (element.matches('.ps-jp,.ps-lang-jp')) return { delay: 260, duration: 440 };
    if (element.matches('.ps-fr,.ps-lang-fr')) return { delay: 430, duration: 520 };
    return { delay: 520, duration: 620 };
  }

  function prepare(stage) {
    // Only the nearest animation stage owns a target: prevents double animations.
    const source = [
      '.ps-title > span', '.ps-page-lead h1',
      '.ps-section-head h2', '.ps-section-head .ps-kicker',
      '.ps-rail-label .ps-jp', '.ps-rail-label .ps-fr',
      '.ps-lang-en','.ps-lang-jp','.ps-lang-fr','.ps-band-number',
      '.ps-hero-main > .ps-kicker','.ps-hero-side strong','.ps-hero-side .ps-label',
      '.ps-project h3','.ps-project .ps-kicker','.ps-project .ps-label',
      '.ps-card strong','.ps-card b','.ps-card .ps-chip',
      '.ps-proof-slot strong','.ps-page-lead > .ps-kicker'
    ];
    const seen = new Set();
    for (const element of stage.querySelectorAll(source.join(','))) {
      if (seen.has(element) || element.closest('[data-reveal],[data-build]') !== stage) continue;
      seen.add(element);
      if (element.closest('svg') || element.closest('button')) continue;
      const content = element.textContent.trim();
      if (!content) continue;
      const settings = category(element);
      element.classList.add('ps-type-target');
      element.style.setProperty('--ps-type-delay', settings.delay + 'ms');
      element.style.setProperty('--ps-type-duration', Math.min(settings.duration, Math.max(250, content.length * 24)) + 'ms');
      element.style.setProperty('--ps-type-steps', String(Math.max(8, Math.min(34, content.length))));
    }
    for (const element of stage.querySelectorAll('.ps-intro,.ps-section-head p,.ps-project p,.ps-card p,.ps-page-lead p,.ps-proof-slot small')) {
      if (element.closest('[data-reveal],[data-build]') !== stage) continue;
      element.classList.add('ps-copy-target');
      element.style.setProperty('--ps-copy-delay', element.closest('.ps-project') ? '1040ms' : '810ms');
    }
  }

  for (const stage of stages) {
    prepare(stage);
    stage.classList.add('ps-armed');
  }
  root.classList.add('ps-motion');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('ps-visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: .06, rootMargin: '0px 0px -15px 0px' });
    for (const stage of stages) observer.observe(stage);
  } else {
    for (const stage of stages) stage.classList.add('ps-visible');
  }

  replay?.addEventListener('click', () => {
    if (!demo || root.classList.contains('ps-calm')) return;
    const parts = [...demo.querySelectorAll('[data-build],[data-reveal]')];
    for (const part of parts) part.classList.remove('ps-visible');
    demo.classList.remove('is-replaying');
    void demo.offsetWidth;
    requestAnimationFrame(() => {
      demo.classList.add('is-replaying');
      for (const part of parts) part.classList.add('ps-visible');
    });
  });

  toggle?.addEventListener('click', () => {
    const calm = root.classList.toggle('ps-calm');
    toggle.textContent = calm ? 'Activer les animations' : 'Réduire les animations';
    toggle.setAttribute('aria-pressed', String(calm));
  });

  reduced.addEventListener?.('change', (event) => {
    if (event.matches) {
      root.classList.add('ps-calm');
      disableControls();
    }
  });
})();
