/** The globe and particle field only animate while the link is in view. */
export function initRguideLiveLink(link: HTMLAnchorElement) {
  if (link.dataset.liveLinkReady) return;
  link.dataset.liveLinkReady = "true";

  const field = link.querySelector<SVGGElement>(".rguide-live-link-particles");
  const globe = link.querySelector<HTMLVideoElement>("video");
  if (!field) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const segments = [[30, 90, 90, 30], [42, 30, 90, 30], [90, 30, 90, 78]];
  // Two densities make a continuous mist, with fine grains visible at desktop size.
  const haze = document.createElementNS("http://www.w3.org/2000/svg", "g");
  haze.setAttribute("class", "rguide-live-link-particle-haze");
  const grains = document.createElementNS("http://www.w3.org/2000/svg", "g");
  field.append(haze, grains);
  const random = (seed: number) => {
    const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
    return value - Math.floor(value);
  };
  const particles = Array.from({ length: 810 }, (_, index) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const isHaze = index < 150;
    const segment = segments[index % segments.length];
    const t = random(index + 1);
    const phase = index * 2.399963;
    const outer = index % 5 === 0;
    const spread = (isHaze ? 17 : outer ? 27 : 13) * Math.sqrt(random(index + 7));
    const width = Math.hypot(segment[2] - segment[0], segment[3] - segment[1]);
    const edge = (random(index + 19) - 0.5) * 2.4;
    circle.setAttribute("r", String(isHaze ? 1.2 + random(index + 11) : 0.3 + random(index + 11) * 0.42));
    (isHaze ? haze : grains).appendChild(circle);
    return {
      circle,
      x: segment[0] + (segment[2] - segment[0]) * t - (segment[3] - segment[1]) / width * edge,
      y: segment[1] + (segment[3] - segment[1]) * t + (segment[2] - segment[0]) / width * edge,
      dx: Math.cos(phase) * spread,
      dy: Math.sin(phase) * spread,
      phase,
      drift: outer ? 7 : 2.5 + random(index + 13) * 2,
      opacity: isHaze ? 0.12 + random(index + 17) * 0.13 : 0.3 + random(index + 17) * 0.48,
      delay: random(index + 23) * 0.16,
    };
  });
  link.dataset.particlesReady = "true";

  const initialBounds = link.getBoundingClientRect();
  let visible = initialBounds.bottom > 0 && initialBounds.top < window.innerHeight;
  let hovered = false;
  let focused = false;
  let progress = 0;
  let frame = 0;
  let previousTime = 0;
  let elapsed = 0;

  const paint = () => {
    // The core sharpens only as the surrounding particles reach the arrow.
    link.style.setProperty("--arrow-gather", progress.toFixed(3));
    particles.forEach((particle) => {
      const gather = Math.max(0, Math.min(1, (progress - particle.delay) / (1 - particle.delay)));
      const looseness = 1 - gather * gather * (3 - 2 * gather);
      const driftX = Math.sin(elapsed * 0.00075 + particle.phase) * particle.drift;
      const driftY = Math.cos(elapsed * 0.0006 + particle.phase * 1.3) * particle.drift;
      particle.circle.setAttribute("cx", (particle.x + (particle.dx + driftX) * looseness).toFixed(2));
      particle.circle.setAttribute("cy", (particle.y + (particle.dy + driftY) * looseness).toFixed(2));
      const dissolve = Math.max(0, (gather - 0.65) / 0.35);
      particle.circle.setAttribute("opacity", (particle.opacity * (1 - dissolve)).toFixed(3));
    });
  };

  const animate = (time: number) => {
    frame = 0;
    const delta = previousTime ? Math.min(time - previousTime, 64) : 16;
    previousTime = time;
    elapsed += delta;
    const target = hovered || focused ? 1 : 0;
    progress += (target - progress) * (1 - Math.exp(-delta / (target ? 260 : 360)));
    if (Math.abs(target - progress) < 0.002) progress = target;
    paint();
    frame = requestAnimationFrame(animate);
  };

  const syncPlayback = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    const playing = visible && !document.hidden && !reducedMotion.matches;
    if (globe) {
      globe.muted = true;
      globe.defaultMuted = true;
      globe.autoplay = !reducedMotion.matches;
      globe.playbackRate = 1.25;
      globe.hidden = reducedMotion.matches;
      if (playing) void globe.play().catch(() => {});
      else globe.pause();
    }
    if (playing) frame = requestAnimationFrame(animate);
    else if (reducedMotion.matches) {
      progress = 1;
      paint();
    }
  };

  const updateEngagement = () => link.classList.toggle("is-engaged", hovered || focused);
  link.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "touch") return;
    hovered = true;
    updateEngagement();
  });
  const leave = () => {
    hovered = false;
    updateEngagement();
  };
  link.addEventListener("pointerleave", leave);
  link.addEventListener("pointercancel", leave);
  link.addEventListener("focus", () => { focused = link.matches(":focus-visible"); updateEngagement(); });
  link.addEventListener("blur", () => { focused = false; updateEngagement(); });
  reducedMotion.addEventListener("change", syncPlayback);
  document.addEventListener("visibilitychange", syncPlayback);
  window.addEventListener("pageshow", syncPlayback);
  globe?.addEventListener("loadeddata", syncPlayback);
  globe?.addEventListener("error", () => { globe.hidden = true; });
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncPlayback();
  });
  observer.observe(link);
  paint();
  syncPlayback();
}
