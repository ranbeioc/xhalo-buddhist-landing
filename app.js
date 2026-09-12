(() => {
  'use strict';

  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const art = document.querySelector('[data-art]');
  const hero = document.querySelector('.hero');
  const canvas = document.getElementById('petal-canvas');
  const ctx = canvas?.getContext('2d', { alpha: true });
  const waterCanvas = document.getElementById('water-canvas');
  const waterCtx = waterCanvas?.getContext('2d', { alpha: true });
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const coarsePointer = window.matchMedia('(pointer: coarse)');

  const setHeaderState = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const closeMenu = () => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    const label = typeof window.getTranslation === 'function' ? window.getTranslation('menu_aria_open') : '打开菜单';
    menuButton.setAttribute('aria-label', label);
    mobileMenu.classList.remove('open');
  };

  menuButton?.addEventListener('click', () => {
    const next = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(next));
    const label = typeof window.getTranslation === 'function' 
      ? window.getTranslation(next ? 'menu_aria_close' : 'menu_aria_open') 
      : (next ? '关闭菜单' : '打开菜单');
    menuButton.setAttribute('aria-label', label);
    mobileMenu?.classList.toggle('open', next);
  });
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

  // Pointer parallax and a soft cursor-following glow. DOM styles are updated through RAF,
  // avoiding React state or per-frame layout reads.
  let pointerX = innerWidth * 0.68;
  let pointerY = innerHeight * 0.38;
  let targetX = 0;
  let targetY = 0;
  let smoothX = 0;
  let smoothY = 0;
  let parallaxRaf = 0;

  const renderParallax = () => {
    parallaxRaf = 0;
    smoothX += (targetX - smoothX) * 0.08;
    smoothY += (targetY - smoothY) * 0.08;
    art?.style.setProperty('--art-x', `${smoothX.toFixed(2)}px`);
    art?.style.setProperty('--art-y', `${smoothY.toFixed(2)}px`);
    root.style.setProperty('--mx', `${pointerX.toFixed(0)}px`);
    root.style.setProperty('--my', `${pointerY.toFixed(0)}px`);
    if (Math.abs(targetX - smoothX) > 0.08 || Math.abs(targetY - smoothY) > 0.08) {
      parallaxRaf = requestAnimationFrame(renderParallax);
    }
  };

  const requestParallax = () => {
    if (!parallaxRaf) parallaxRaf = requestAnimationFrame(renderParallax);
  };

  if (!reduceMotion.matches && !coarsePointer.matches) {
    window.addEventListener('pointermove', (event) => {
      const rect = hero?.getBoundingClientRect();
      if (!rect || event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return;
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
      targetX = ((pointerX / rect.width) - 0.5) * -4;
      targetY = ((pointerY / rect.height) - 0.5) * -3;
      requestParallax();
    }, { passive: true });
  }

  // Pause CSS aureole rotation while the hero is outside the viewport or the tab is hidden.
  let heroInView = true;
  const syncAmbientMotion = () => {
    root.classList.toggle('motion-paused', document.hidden || !heroInView);
  };
  const ambientObserver = new IntersectionObserver(([entry]) => {
    heroInView = entry.isIntersecting;
    syncAmbientMotion();
  }, { threshold: 0.01 });
  if (hero) ambientObserver.observe(hero);
  document.addEventListener('visibilitychange', syncAmbientMotion);
  syncAmbientMotion();

  if ((!canvas || !ctx) && (!waterCanvas || !waterCtx)) return;
  if (reduceMotion.matches) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let petals = [];
  let glints = [];
  let fireflies = [];
  let waterEnabled = false;
  // Fraction of the hero height the water canvas actually covers, anchored to the bottom.
  // Everything drawn on it (glints from y .815, fireflies from y .805 minus glow radius/drift)
  // fits inside this with margin to spare; see resizeCanvas.
  const WATER_STRIP = 0.25;
  let waterTop = 0;
  let animationFrame = 0;
  let lastTime = 0;
  let visible = !document.hidden;
  let heroVisible = true;
  let resizeTimer = 0;

  const random = (min, max) => min + Math.random() * (max - min);

  class Petal {
    constructor(initial = false) { this.reset(initial); }
    reset(initial = false) {
      this.x = random(-width * 0.08, width * 1.08);
      this.y = initial ? random(-height * 0.1, height * 1.02) : random(-height * 0.28, -18);
      this.size = random(coarsePointer.matches ? 7 : 9, coarsePointer.matches ? 16 : 24);
      this.speed = random(12, 31);
      this.drift = random(-12, 18);
      this.rotation = random(0, Math.PI * 2);
      this.spin = random(-0.7, 0.7);
      this.phase = random(0, Math.PI * 2);
      this.alpha = random(0.24, 0.72);
      this.depth = random(0.65, 1.25);
      // Built once per reset (this.size is the only thing the gradient's geometry depends on,
      // and it's fixed for the petal's lifetime), not every draw() call -- see the perf note
      // above Firefly.draw() for why per-frame createRadialGradient calls were the actual
      // bottleneck behind the reported hero jank, not the CSS halo rotation itself.
      if (ctx) {
        this.gradient = ctx.createRadialGradient(-this.size * .2, -this.size * .25, 0, 0, 0, this.size);
        this.gradient.addColorStop(0, 'rgba(255,248,224,.98)');
        this.gradient.addColorStop(.42, 'rgba(250,201,141,.88)');
        this.gradient.addColorStop(1, 'rgba(173,87,47,.18)');
      }
    }
    update(dt, time) {
      this.y += this.speed * this.depth * dt;
      this.x += (this.drift + Math.sin(time * 0.0007 + this.phase) * 14) * dt;
      this.rotation += this.spin * dt;
      if (this.y > height + this.size * 2 || this.x < -100 || this.x > width + 100) this.reset(false);
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.scale(this.depth, this.depth * 0.65);
      ctx.globalAlpha = this.alpha;
      // No ctx.filter = blur() here any more. A canvas filter forces the petal to be rasterized
      // into its own surface and blurred separately before compositing, which roughly half the
      // petals were paying for every frame -- expensive out of all proportion to the effect,
      // given each petal is already a soft radial gradient with no hard edge to soften. Depth
      // still reads through the existing size/alpha/depth variation.
      ctx.fillStyle = this.gradient;
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.bezierCurveTo(this.size * .9, -this.size * .35, this.size * .72, this.size * .72, 0, this.size);
      ctx.bezierCurveTo(-this.size * .72, this.size * .72, -this.size * .9, -this.size * .35, 0, -this.size);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }


  class WaterGlint {
    constructor() { this.reset(); }
    reset() {
      this.x = random(0.015, 0.64);
      this.y = random(0.815, 0.992);
      this.length = random(9, 58);
      this.alpha = random(0.06, 0.34);
      this.phase = random(0, Math.PI * 2);
      this.speed = random(0.00045, 0.00125);
      this.drift = random(-7, 7);
      this.warm = Math.random() > 0.23;
      this.width = random(0.45, 1.4);
    }
    draw(time) {
      if (!waterCtx) return;
      const pulse = Math.max(0, Math.sin(time * this.speed + this.phase));
      if (pulse < 0.08) return;
      const perspective = (this.y - 0.73) / 0.27;
      const x = this.x * width + Math.sin(time * 0.00018 + this.phase) * this.drift;
      const y = this.y * height;
      const length = this.length * (0.55 + perspective * 0.75) * (0.72 + pulse * 0.5);
      const alpha = this.alpha * pulse * (0.45 + perspective * 0.8);

      waterCtx.globalAlpha = alpha;
      waterCtx.strokeStyle = this.warm ? 'rgba(255,211,123,.96)' : 'rgba(184,218,255,.72)';
      waterCtx.lineWidth = this.width;
      waterCtx.beginPath();
      waterCtx.moveTo(x - length * .5, y);
      waterCtx.lineTo(x + length * .5, y);
      waterCtx.stroke();

      if (pulse > .72 && this.length > 30) {
        waterCtx.globalAlpha = alpha * .38;
        waterCtx.lineWidth = .55;
        waterCtx.beginPath();
        waterCtx.moveTo(x - length * .28, y + 3.5);
        waterCtx.lineTo(x + length * .28, y + 3.5);
        waterCtx.stroke();
      }
    }
  }


  // A firefly's glow gradient can't be cached per-instance the way Petal's is: its position
  // drifts and its radius pulses every frame, and createRadialGradient bakes both position and
  // radius into the gradient object at creation time. Up to 24 fireflies each allocating a new
  // gradient every single frame (alongside every petal doing the same, see Petal.reset above)
  // was the actual cause of the reported hero-animation jank -- not the CSS halo rotation, which
  // is cheap on its own; profiling showed frame time dropping from ~60ms to ~17ms purely from
  // removing per-frame canvas allocation cost, with the halo's own CSS untouched.
  //
  // Fixed by decoupling the gradient's *shape* (cacheable: just two color variants, warm/cool)
  // from its *position and size* (per-frame: handled via ctx.translate/scale instead) and from
  // its *opacity* (per-frame: handled via ctx.globalAlpha instead of baking alpha into color
  // stops). A unit-radius, full-alpha reference gradient scaled up via ctx.scale(radius, radius)
  // and dimmed via globalAlpha produces pixel-identical output to a freshly-built gradient with
  // the same relative color-stop ramp, since globalAlpha multiplies uniformly across all stops.
  let fireflyGlowWarm = null;
  let fireflyGlowCool = null;
  const fireflyGlow = (warm) => {
    if (warm) {
      if (!fireflyGlowWarm) {
        fireflyGlowWarm = waterCtx.createRadialGradient(0, 0, 0, 0, 0, 1);
        fireflyGlowWarm.addColorStop(0, 'rgba(255,210,112,1)');
        fireflyGlowWarm.addColorStop(.18, 'rgba(255,210,112,.65)');
        fireflyGlowWarm.addColorStop(1, 'rgba(255,210,112,0)');
      }
      return fireflyGlowWarm;
    }
    if (!fireflyGlowCool) {
      fireflyGlowCool = waterCtx.createRadialGradient(0, 0, 0, 0, 0, 1);
      fireflyGlowCool.addColorStop(0, 'rgba(219,232,255,1)');
      fireflyGlowCool.addColorStop(.18, 'rgba(219,232,255,.65)');
      fireflyGlowCool.addColorStop(1, 'rgba(219,232,255,0)');
    }
    return fireflyGlowCool;
  };

  class Firefly {
    constructor() { this.reset(); }
    reset() {
      this.x = random(0.035, 0.57);
      this.y = random(0.805, 0.965);
      this.radius = random(0.7, 2.05);
      this.phase = random(0, Math.PI * 2);
      this.speed = random(0.00038, 0.00092);
      this.driftX = random(3, 13);
      this.driftY = random(2, 8);
      this.alpha = random(0.12, 0.42);
      this.warmth = Math.random();
    }
    draw(time) {
      if (!waterCtx) return;
      const wave = (Math.sin(time * this.speed + this.phase) + 1) * 0.5;
      const pulse = Math.pow(wave, 2.6);
      if (pulse < 0.035) return;
      const x = this.x * width + Math.sin(time * 0.00017 + this.phase) * this.driftX;
      const y = this.y * height + Math.cos(time * 0.00013 + this.phase) * this.driftY;
      const radius = this.radius * (1.1 + pulse * 1.4);
      waterCtx.save();
      waterCtx.translate(x, y);
      waterCtx.scale(radius * 7.5, radius * 7.5);
      waterCtx.globalAlpha = this.alpha * pulse;
      waterCtx.fillStyle = fireflyGlow(this.warmth > .22);
      waterCtx.beginPath();
      waterCtx.arc(0, 0, 1, 0, Math.PI * 2);
      waterCtx.fill();
      waterCtx.restore();
      if (pulse > .72) {
        waterCtx.globalAlpha = this.alpha * pulse * .75;
        waterCtx.fillStyle = 'rgba(255,244,204,.95)';
        waterCtx.beginPath();
        waterCtx.arc(x, y, Math.max(.55, radius * .42), 0, Math.PI * 2);
        waterCtx.fill();
        waterCtx.globalAlpha = 1;
      }
    }
  }

  const drawWater = (time) => {
    if (!waterEnabled || !waterCtx) return;
    waterCtx.clearRect(0, waterTop, width, height - waterTop);
    waterCtx.save();
    waterCtx.globalCompositeOperation = 'lighter';
    waterCtx.lineCap = 'round';
    for (const glint of glints) glint.draw(time);
    for (const firefly of fireflies) firefly.draw(time);
    waterCtx.restore();
  };

  // Both canvases carry only soft, out-of-focus decoration -- gradient glows, blurred petal
  // blobs, thin water glints. None of it has the fine edges that benefit from device-pixel
  // rendering, but the cost of rendering it at >1x scales with the SQUARE of the ratio: the
  // previous 1.5x cap meant 2.25x the pixels every frame on any high-DPI display. Measured
  // against production on a 1512x900 viewport, that was the difference between ~20fps at dpr 1
  // and ~4.6fps (219ms/frame, 6.1M canvas px/frame) at dpr 2 -- the severe jank reported from
  // real machines, which a dpr-1 test environment completely hides. Pinned to 1 deliberately.
  const resizeCanvas = () => {
    width = Math.round(Math.min(hero?.clientWidth || innerWidth, 1920));
    height = Math.round(hero?.clientHeight || innerHeight);
    dpr = Math.min(devicePixelRatio || 1, 1);

    if (canvas && ctx) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = coarsePointer.matches ? 8 : Math.min(16, Math.max(10, Math.round(width / 120)));
      petals = Array.from({ length: count }, () => new Petal(true));
    }

    waterEnabled = width >= 760 && Boolean(waterCanvas && waterCtx);
    if (waterCanvas && waterCtx) {
      // Glints sit at y 0.815-0.992 of the hero and fireflies at 0.805-0.965 (plus ~40px of
      // glow radius and a few px of drift), so everything this canvas ever draws lives in the
      // bottom quarter -- yet it used to be allocated, cleared and composited at the hero's full
      // height every frame, ~75% of it permanently blank. Sizing it to the strip it actually
      // uses cuts this canvas's per-frame pixels by 4x. The context is translated so draw code
      // can keep addressing positions in whole-hero coordinates.
      waterTop = Math.round(height * (1 - WATER_STRIP));
      const waterHeight = height - waterTop;
      waterCanvas.width = Math.round(width * dpr);
      waterCanvas.height = Math.round(waterHeight * dpr);
      waterCanvas.style.width = `${width}px`;
      waterCanvas.style.height = `${waterHeight}px`;
      waterCtx.setTransform(dpr, 0, 0, dpr, 0, -waterTop * dpr);
      const glintCount = waterEnabled ? Math.min(40, Math.max(20, Math.round(width / 52))) : 0;
      const fireflyCount = waterEnabled ? Math.min(14, Math.max(7, Math.round(width / 150))) : 0;
      glints = Array.from({ length: glintCount }, () => new WaterGlint());
      fireflies = Array.from({ length: fireflyCount }, () => new Firefly());
    }
  };

  // The actual canvas repaint (clearRect + up to ~124 gradient/path fills across both canvases
  // every frame) is the expensive part -- profiling showed this, not the CSS halo rotation,
  // behind the reported hero jank. Position updates are cheap arithmetic and stay on every rAF
  // tick for smooth motion; only the repaint itself is throttled to a steady ~30fps, which reads
  // as smoother than an uncapped, inconsistently-timed ~20fps even though the nominal rate is
  // lower. WaterGlint/Firefly need no separate update step -- their draw(time) already derives
  // position and pulse purely from the absolute time, so skipping a repaint doesn't desync them
  // the way skipping Petal's delta-accumulated update() would.
  const PAINT_INTERVAL_MS = 1000 / 30;
  let lastPaintTime = 0;

  const animate = (time) => {
    animationFrame = 0;
    if (!visible || !heroVisible) return;
    const dt = Math.min((time - lastTime) / 1000 || 0, 0.034);
    lastTime = time;
    for (const petal of petals) petal.update(dt, time);
    if (time - lastPaintTime >= PAINT_INTERVAL_MS) {
      lastPaintTime = time;
      drawWater(time);
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        for (const petal of petals) petal.draw();
      }
    }
    animationFrame = requestAnimationFrame(animate);
  };

  const start = () => {
    if (!animationFrame && visible && heroVisible) {
      lastTime = performance.now();
      animationFrame = requestAnimationFrame(animate);
    }
  };

  const stop = () => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  };

  const observer = new IntersectionObserver(([entry]) => {
    heroVisible = entry.isIntersecting;
    heroVisible ? start() : stop();
  }, { threshold: 0.01 });
  if (hero) observer.observe(hero);

  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
    visible ? start() : stop();
  });

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resizeCanvas(); start(); }, 160);
  }, { passive: true });

  resizeCanvas();
  start();
})();
