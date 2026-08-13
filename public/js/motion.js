(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var header = document.querySelector('[data-header]');

  function onScrollHeader() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
  }
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  var reveals = Array.from(document.querySelectorAll('[data-reveal]'));

  function reveal(el) {
    if (el.classList.contains('is-in')) return;
    var delay = Number(el.getAttribute('data-delay') || 0);
    window.setTimeout(function () {
      el.classList.add('is-in');
    }, delay);
  }

  if (reduce) {
    document.documentElement.classList.add('reduce-motion');
    reveals.forEach(function (el) {
      el.classList.add('is-in');
    });
    document.documentElement.classList.add('js-ready');
    return;
  }

  reveals.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight || 800;
    if (rect.top < vh * 0.9 && rect.bottom > 0) {
      el.classList.add('is-in');
    }
  });
  document.documentElement.classList.add('js-ready');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    reveals.forEach(function (el) {
      if (!el.classList.contains('is-in')) io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-in');
    });
  }

  // Safe float parallax via CSS variable --fy (does not fight left/top positioning)
  var floats = Array.from(document.querySelectorAll('[data-float]'));

  function updateFloat() {
    var vh = window.innerHeight || 800;
    var mid = vh * 0.5;
    floats.forEach(function (el) {
      var speed = Number(el.getAttribute('data-float') || 0.12);
      if (speed < 0.04) speed = 0.08;
      if (speed > 0.35) speed = 0.35;
      var rect = el.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > vh + 100) return;
      var y = (rect.top + rect.height * 0.5 - mid) * speed;
      if (y > 48) y = 48;
      if (y < -48) y = -48;
      el.style.setProperty('--fy', y.toFixed(1) + 'px');
    });
  }

  var ticking = false;
  function onScrollFloat() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      updateFloat();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScrollFloat, { passive: true });
  window.addEventListener('resize', updateFloat, { passive: true });
  updateFloat();

  document.querySelectorAll('[data-count]').forEach(function (el) {
    var target = Number(el.getAttribute('data-count') || 0);
    var decimals = Number(el.getAttribute('data-decimals') || 0);
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var started = false;

    function run() {
      if (started) return;
      started = true;
      var start = performance.now();
      var dur = 1400;
      function tick(now) {
        var t = Math.min(1, (now - start) / dur);
        var eased = 1 - Math.pow(1 - t, 3);
        var val = target * eased;
        el.textContent =
          prefix +
          (decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString()) +
          suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) run();

    if ('IntersectionObserver' in window) {
      var cio = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            run();
            cio.unobserve(el);
          });
        },
        { threshold: 0.2 }
      );
      cio.observe(el);
    }
  });
})();
