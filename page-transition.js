(() => {
  const KEY = 'portfolio-page-transition';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const html = document.documentElement;

  let resolveReady;
  window.__portfolioTransitionReady = new Promise(resolve => {
    resolveReady = resolve;
  });

  const directions = ['from-right', 'from-bottom', 'from-left', 'from-top'];
  const validDirection = value => directions.includes(value) ? value : 'from-right';

  let incoming = null;
  if (!reduce) {
    try {
      incoming = sessionStorage.getItem(KEY);
      if (incoming) sessionStorage.removeItem(KEY);
    } catch (_) {}
  }

  if (incoming) {
    incoming = validDirection(incoming);
    html.classList.add('pt-active', 'pt-covered', `pt-${incoming}`);
  }

  function finishIncoming() {
    html.classList.remove(
      'pt-active', 'pt-covered', 'pt-reveal',
      'pt-from-right', 'pt-from-bottom', 'pt-from-left', 'pt-from-top'
    );
    resolveReady();
    window.dispatchEvent(new CustomEvent('portfolio:transition-ready'));
  }

  if (!incoming || reduce) {
    resolveReady();
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const onEnd = event => {
          if (event.animationName && !event.animationName.startsWith('ptReveal')) return;
          html.removeEventListener('animationend', onEnd);
          finishIncoming();
        };
        html.addEventListener('animationend', onEnd);

        // Fail-safe: content must never stay blocked if animation events fail.
        window.setTimeout(() => {
          if (html.classList.contains('pt-active')) {
            html.removeEventListener('animationend', onEnd);
            finishIncoming();
          }
        }, 900);

        html.classList.add('pt-reveal');
      }));
    }, { once: true });
  }

  function isLocalNavigableLink(link) {
    if (!link || link.target === '_blank' || link.hasAttribute('download')) return false;
    if (link.dataset.noTransition === 'true') return false;

    let target;
    try { target = new URL(link.href, window.location.href); }
    catch (_) { return false; }

    if (target.origin !== window.location.origin) return false;
    if (!/^https?:$/.test(target.protocol)) return false;

    const current = new URL(window.location.href);

    // Same-document anchors remain instant scroll navigation.
    if (
      target.pathname === current.pathname &&
      target.search === current.search &&
      target.hash
    ) return false;

    return true;
  }

  function directionFor(link) {
    if (link.dataset.transitionDirection) {
      return validDirection(link.dataset.transitionDirection);
    }

    if (link.closest('.nextbar')) {
      const links = [...link.closest('.nextbar').querySelectorAll('a')];
      return links.indexOf(link) === 0 ? 'from-left' : 'from-right';
    }

    if (link.classList.contains('brand') || /index\.html(?:$|#)/.test(link.getAttribute('href') || '')) {
      return 'from-left';
    }

    if (link.classList.contains('project-row')) {
      const rows = [...document.querySelectorAll('.project-row')];
      return directions[rows.indexOf(link) % directions.length] || 'from-right';
    }

    return 'from-right';
  }

  window.addEventListener('DOMContentLoaded', () => {
    if (reduce) return;

    document.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest('a[href]');
      if (!isLocalNavigableLink(link)) return;

      event.preventDefault();

      const href = link.href;
      const direction = directionFor(link);

      try { sessionStorage.setItem(KEY, direction); } catch (_) {}

      html.classList.remove(
        'pt-from-right', 'pt-from-bottom', 'pt-from-left', 'pt-from-top',
        'pt-reveal', 'pt-covered'
      );
      html.classList.add('pt-active', 'pt-cover', `pt-${direction}`);

      let navigated = false;
      const go = () => {
        if (navigated) return;
        navigated = true;
        window.location.href = href;
      };

      const onEnd = event => {
        if (event.animationName && !event.animationName.startsWith('ptCover')) return;
        html.removeEventListener('animationend', onEnd);
        go();
      };

      html.addEventListener('animationend', onEnd);
      window.setTimeout(go, 700);
    });
  });
})();
