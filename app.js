(() => {
  'use strict';

  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const art = document.querySelector('[data-art]');
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
    menuButton.setAttribute('aria-label', '打开菜单');
    mobileMenu.classList.remove('open');
  };

  menuButton?.addEventListener('click', () => {
    const next = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(next));
    menuButton.setAttribute('aria-label', next ? '关闭菜单' : '打开菜单');
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
      pointerX = event.clientX;
      pointerY = event.clientY;
      targetX = ((event.clientX / innerWidth) - 0.5) * -10;
      targetY = ((event.clientY / innerHeight) - 0.5) * -7;
      requestParallax();
    }, { passive: true });
  }

  // Pause CSS aureole rotation while the hero is outside the viewport or the tab is hidden.
  const hero = document.querySelector('.hero');
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
  let waterEnabled = false;
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
      this.blur = random(0, 2.4);
      this.depth = random(0.65, 1.25);
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
      if (this.blur > 1.2) ctx.filter = `blur(${this.blur}px)`;
      const gradient = ctx.createRadialGradient(-this.size * .2, -this.size * .25, 0, 0, 0, this.size);
      gradient.addColorStop(0, 'rgba(255,248,224,.98)');
      gradient.addColorStop(.42, 'rgba(250,201,141,.88)');
      gradient.addColorStop(1, 'rgba(173,87,47,.18)');
      ctx.fillStyle = gradient;
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
      this.x = random(0.015, 0.985);
      this.y = random(0.765, 0.992);
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

  const drawWater = (time) => {
    if (!waterEnabled || !waterCtx) return;
    waterCtx.clearRect(0, 0, width, height);
    waterCtx.save();
    waterCtx.globalCompositeOperation = 'lighter';
    waterCtx.lineCap = 'round';
    for (const glint of glints) glint.draw(time);
    waterCtx.restore();
  };

  const resizeCanvas = () => {
    width = innerWidth;
    height = innerHeight;
    dpr = Math.min(devicePixelRatio || 1, coarsePointer.matches ? 1.15 : 1.5);

    if (canvas && ctx) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = coarsePointer.matches ? 10 : Math.min(28, Math.max(16, Math.round(width / 78)));
      petals = Array.from({ length: count }, () => new Petal(true));
    }

    waterEnabled = width >= 760 && Boolean(waterCanvas && waterCtx);
    if (waterCanvas && waterCtx) {
      waterCanvas.width = Math.round(width * dpr);
      waterCanvas.height = Math.round(height * dpr);
      waterCanvas.style.width = `${width}px`;
      waterCanvas.style.height = `${height}px`;
      waterCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const glintCount = waterEnabled ? Math.min(92, Math.max(46, Math.round(width / 24))) : 0;
      glints = Array.from({ length: glintCount }, () => new WaterGlint());
    }
  };

  const animate = (time) => {
    animationFrame = 0;
    if (!visible || !heroVisible) return;
    const dt = Math.min((time - lastTime) / 1000 || 0, 0.034);
    lastTime = time;
    drawWater(time);
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
      for (const petal of petals) {
        petal.update(dt, time);
        petal.draw();
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
