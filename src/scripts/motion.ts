import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

// Windows "Reduce motion" was blocking Lenis entirely — site motion stays on by design.
const osReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector<HTMLElement>('[data-header]');
const HEADER_OFFSET = -88;

document.documentElement.classList.add('js-ready');

function syncHeader(scrollY = window.scrollY) {
  if (header) header.classList.toggle('scrolled', scrollY > 12);
}

// --- Parallax (vanilla) ---
const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-speed]'));

function updateParallax() {
  if (!layers.length) return;
  const mid = window.innerHeight * 0.5;

  for (const el of layers) {
    const speed = Number(el.getAttribute('data-speed') || 0.4);
    const rect = el.getBoundingClientRect();
    const delta = rect.top + rect.height * 0.5 - mid;
    const y = delta * speed * -0.55;
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
  }
}

let ticking = false;
function requestParallax() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateParallax();
    ticking = false;
  });
}

// --- Lenis smooth scroll (always on) ---
const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  touchMultiplier: 1.5,
  autoRaf: false,
});

lenis.on('scroll', (e) => {
  syncHeader(e.scroll);
  requestParallax();
  ScrollTrigger.update();
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

syncHeader();
updateParallax();

window.addEventListener(
  'scroll',
  () => {
    syncHeader();
    requestParallax();
  },
  { passive: true },
);

// --- Anchor clicks ---
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    e.preventDefault();
    lenis.scrollTo(target, {
      offset: HEADER_OFFSET,
      duration: 1.35,
    });
    history.pushState(null, '', href);
  });
});

// --- Reveals ---
gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
  const delay = Number(el.getAttribute('data-delay') || 0) / 1000;
  const type = el.getAttribute('data-reveal');
  const from: gsap.TweenVars = {
    autoAlpha: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
  };

  if (type === 'left') from.x = -32;
  else if (type === 'right') from.x = 32;
  else if (type === 'scale') {
    from.y = 20;
    from.scale = 0.97;
  } else from.y = 28;

  gsap.from(el, {
    ...from,
    scrollTrigger: {
      trigger: el,
      start: 'top 92%',
      once: true,
    },
    onComplete: () => el.classList.add('is-in'),
  });
});

// Counters
gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
  const target = Number(el.getAttribute('data-count') || 0);
  const decimals = Number(el.getAttribute('data-decimals') || 0);
  const suffix = el.getAttribute('data-suffix') || '';
  const prefix = el.getAttribute('data-prefix') || '';
  const obj = { val: 0 };

  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(obj, {
        val: target,
        duration: 1.3,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent =
            prefix +
            (decimals ? obj.val.toFixed(decimals) : Math.round(obj.val).toLocaleString()) +
            suffix;
        },
      });
    },
  });
});

window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  lenis.resize();
  updateParallax();
});

window.addEventListener(
  'resize',
  () => {
    lenis.resize();
    ScrollTrigger.refresh();
    updateParallax();
  },
  { passive: true },
);

;(window as unknown as { __cfMotion: Record<string, unknown> }).__cfMotion = {
  ok: true,
  lenis: true,
  layers: layers.length,
  osReduceMotion,
};
