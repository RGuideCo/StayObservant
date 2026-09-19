/** Keep chapter navigation within reach without covering its anchor targets. */
export function initProjectReadingHeader(header: HTMLElement) {
  const hero = document.querySelector<HTMLElement>("[data-project-hero]");
  const topline = header.querySelector<HTMLElement>(".rg-cover-topline");
  const nav = header.querySelector<HTMLElement>(".rg-page-nav");
  const scroller = header.querySelector<HTMLElement>(".rg-page-nav-scroll");
  const timeline = header.querySelector<HTMLOListElement>(".rg-page-timeline");
  if (!hero || !topline || !nav || !scroller || !timeline) return;

  const chapters = Array.from(timeline.querySelectorAll<HTMLAnchorElement>("a[href^='#']"))
    .map((link) => ({ link, target: document.getElementById(link.hash.slice(1)) }))
    .filter((chapter): chapter is { link: HTMLAnchorElement; target: HTMLElement } => Boolean(chapter.target));
  if (!chapters.length) return;

  // Stable targets retain their native hashes and land at their top divider.
  chapters.forEach(({ link, target }) => {
    target.classList.add("project-chapter-target");
    if (link.dataset.chapterLabel) target.dataset.chapterLabel = link.dataset.chapterLabel;
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeIndex = -1;
  let frame = 0;
  let navigationHeight = nav.getBoundingClientRect().height;

  const update = () => {
    frame = 0;
    const barBottom = topline.getBoundingClientRect().bottom;
    const keyboardWithin = nav.contains(document.activeElement) && document.activeElement?.matches(":focus-visible");
    const expanded = hero.getBoundingClientRect().bottom <= barBottom + 1 || Boolean(keyboardWithin);
    header.classList.toggle("is-reading", expanded);
    nav.inert = !expanded;
    nav.setAttribute("aria-hidden", String(!expanded));

    // Allow two pixels for fractional sticky dimensions at native anchor landings.
    const activationLine = barBottom + navigationHeight + 2;
    const positions = chapters.map(({ target }) => target.getBoundingClientRect().top);
    let nextIndex = -1;
    positions.forEach((position, index) => {
      if (position <= activationLine) nextIndex = index;
    });

    if (nextIndex !== activeIndex) {
      activeIndex = nextIndex;
      chapters.forEach(({ link }, index) => {
        if (index === activeIndex) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
        link.parentElement?.classList.toggle("is-past", index < activeIndex);
      });
      const activeLink = chapters[activeIndex]?.link;
      if (expanded && activeLink && scroller.scrollWidth > scroller.clientWidth) {
        // Only move the horizontal strip. scrollIntoView would move the page too.
        scroller.scrollTo({
          left: activeLink.offsetLeft + activeLink.offsetWidth / 2 - scroller.clientWidth / 2,
          behavior: reducedMotion.matches ? "instant" : "smooth",
        });
      }
    }

    const nextPosition = positions[activeIndex + 1];
    const fraction = activeIndex >= 0 && nextPosition !== undefined
      ? Math.max(0, Math.min(1, (activationLine - positions[activeIndex]) / Math.max(1, nextPosition - positions[activeIndex])))
      : 0;
    const progress = activeIndex < 0 ? 0 : (activeIndex + fraction) / Math.max(1, chapters.length - 1);
    timeline.style.setProperty("--chapter-progress", String(Math.min(1, progress)));
  };

  const scheduleUpdate = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  const measure = () => {
    navigationHeight = nav.getBoundingClientRect().height;
    const stickyTop = Number.parseFloat(getComputedStyle(header).top) || 0;
    const borderWidth = Number.parseFloat(getComputedStyle(nav).borderBottomWidth) || 0;
    // Share the navigator's bottom rule instead of landing below its border box.
    // Bounding rectangles retain the subpixels lost by integer offsetHeight values.
    const offset = stickyTop + topline.getBoundingClientRect().height + navigationHeight - borderWidth;
    document.documentElement.style.setProperty("--project-reading-offset", `${offset}px`);
    scheduleUpdate();
  };
  const observer = new ResizeObserver(measure);
  [hero, topline, nav].forEach((element) => observer.observe(element));
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", measure);
  window.addEventListener("pageshow", measure);
  window.addEventListener("hashchange", scheduleUpdate);
  nav.addEventListener("focusout", scheduleUpdate);
  void document.fonts.ready.then(measure);
  measure();
  update();

  // Native hash scrolling can precede image loading and client-built galleries.
  // Settle a direct chapter link once, without pulling a reader back after input.
  const initialHash = window.location.hash;
  const initialChapter = chapters.find(({ link }) => link.hash === initialHash);
  if (initialChapter) {
    let interrupted = false;
    const cancelLanding = () => { interrupted = true; };
    const inputEvents = ["pointerdown", "wheel", "touchstart", "keydown"] as const;
    inputEvents.forEach((event) => window.addEventListener(event, cancelLanding, { passive: true }));
    const settleLanding = async () => {
      await document.fonts.ready;
      requestAnimationFrame(() => {
        inputEvents.forEach((event) => window.removeEventListener(event, cancelLanding));
        if (interrupted || window.location.hash !== initialHash) return;
        measure();
        initialChapter.target.scrollIntoView({ block: "start", behavior: "instant" });
        scheduleUpdate();
      });
    };
    if (document.readyState === "complete") void settleLanding();
    else window.addEventListener("load", settleLanding, { once: true });
  }
}
