// All page behaviour: reveals, counters, typed role, nav state, card spotlight, parallax, timeline, contact form.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $$ = <T extends HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));

/* ---- Scroll reveal ---- */
const revealEls = $$('[data-reveal]');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ---- Count-up numbers ---- */
const counters = $$('[data-count]');
if (!reduceMotion && 'IntersectionObserver' in window) {
  const co = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        co.unobserve(e.target);
        const el = e.target as HTMLElement;
        const target = Number(el.dataset.count);
        const start = performance.now();
        const duration = 1300;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(tick);
        };
        el.textContent = '0';
        requestAnimationFrame(tick);
      }
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => co.observe(el));
}

/* ---- Typed role in the hero ---- */
const typed = document.querySelector<HTMLElement>('[data-typed]');
if (typed && !reduceMotion) {
  const words: string[] = JSON.parse(typed.dataset.typed || '[]');
  let word = 0;
  let char = words[0]?.length ?? 0;
  let deleting = true;
  const step = () => {
    const current = words[word];
    char += deleting ? -1 : 1;
    typed.textContent = current.slice(0, char);
    let delay = deleting ? 32 : 62;
    if (!deleting && char === current.length) {
      deleting = true;
      delay = 2200;
    } else if (deleting && char === 0) {
      deleting = false;
      word = (word + 1) % words.length;
      delay = 380;
    }
    window.setTimeout(step, delay);
  };
  if (words.length > 1) window.setTimeout(step, 2800);
}

/* ---- Nav: scrolled state, progress bar, active link, mobile menu ---- */
const nav = document.querySelector<HTMLElement>('[data-nav]');
const progress = document.querySelector<HTMLElement>('[data-progress]');
const timeline = document.querySelector<HTMLElement>('[data-timeline]');
const timelineFill = document.querySelector<HTMLElement>('[data-timeline-fill]');

let ticking = false;
const onScroll = () => {
  ticking = false;
  const y = window.scrollY;
  nav?.toggleAttribute('data-scrolled', y > 16);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress?.style.setProperty('--progress', max > 0 ? String(Math.min(y / max, 1)) : '0');
  if (timeline && timelineFill) {
    const r = timeline.getBoundingClientRect();
    const p = (window.innerHeight * 0.62 - r.top) / r.height;
    timelineFill.style.setProperty('--fill', String(Math.max(0, Math.min(p, 1))));
  }
};
window.addEventListener(
  'scroll',
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(onScroll);
  },
  { passive: true },
);
window.addEventListener('resize', onScroll);
onScroll();

const navLinks = $$<HTMLAnchorElement>('[data-nav-link]');
if ('IntersectionObserver' in window) {
  const so = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        navLinks.forEach((a) => a.setAttribute('aria-current', String(a.hash === `#${e.target.id}`)));
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  $$('main section[id]').forEach((s) => so.observe(s));
}

const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const setMenu = (open: boolean) => {
  if (!menu || !menuToggle || !nav) return;
  menu.hidden = !open;
  nav.toggleAttribute('data-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
};
menuToggle?.addEventListener('click', () => setMenu(menu?.hidden ?? false));
$$('[data-menu-link]').forEach((a) => a.addEventListener('click', () => setMenu(false)));
window.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

/* ---- Cursor spotlight on cards ---- */
if (finePointer) {
  $$('[data-spotlight]').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* ---- Hero portrait parallax ---- */
const stage = document.querySelector<HTMLElement>('[data-parallax]');
const hero = stage?.closest('section');
if (stage && hero && finePointer && !reduceMotion) {
  hero.addEventListener('pointermove', (e) => {
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
    const y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
    stage.style.setProperty('--px', String(Math.max(-1, Math.min(1, x * 2))));
    stage.style.setProperty('--py', String(Math.max(-1, Math.min(1, y * 2))));
  });
  hero.addEventListener('pointerleave', () => {
    stage.style.setProperty('--px', '0');
    stage.style.setProperty('--py', '0');
  });
}

/* ---- Contact form: send through Web3Forms, which emails the message to the site owner ---- */
const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const from = String(data.get('email') || '').trim();
  const subject = String(data.get('subject') || '').trim() || `Portfolio enquiry from ${name}`;
  const message = String(data.get('message') || '').trim();
  const key = form.dataset.key;

  // No access key configured yet: fall back to the visitor's email app.
  if (!key) {
    const body = `${message}\n\n${name}\n${from}`;
    window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return;
  }

  const button = form.querySelector<HTMLButtonElement>('[data-form-button]');
  const label = form.querySelector<HTMLElement>('[data-form-label]');
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const setStatus = (state: string, text: string) => {
    if (!status) return;
    status.dataset.state = state;
    status.textContent = text;
  };

  if (button) button.disabled = true;
  if (label) label.textContent = 'Sending...';
  setStatus('', '');
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: key,
        from_name: 'Portfolio contact form',
        subject,
        name,
        email: from,
        message,
        botcheck: data.get('botcheck') ? 'on' : '',
      }),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json.success) throw new Error(json.message || 'Request failed');
    form.reset();
    setStatus('ok', 'Message sent. Thanks, I will get back to you soon.');
  } catch {
    setStatus('error', `Could not send the message. Please email ${form.dataset.email} instead.`);
  } finally {
    if (button) button.disabled = false;
    if (label) label.textContent = 'Send message';
  }
});

/* ---- Footer year ---- */
$$('[data-year]').forEach((el) => (el.textContent = String(new Date().getFullYear())));
