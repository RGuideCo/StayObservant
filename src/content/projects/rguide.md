---
title: "RGuide"
description: "A better way to find your way."
tags: ["Product Design", "Development"]
cover: "/Projects/RGuide/rguide-imac-mockup.webp"
hero: "/Projects/RGuide/rguide-imac-mockup.webp"
role: "Founder, designer and developer"
tools: ["Next.js", "TypeScript", "Supabase", "PostGIS", "MapLibre", "Cloudflare R2"]
deliverables: ["A working travel platform"]
---

<section class="rguide-opening" aria-label="Project summary">
  <div class="rguide-opening-lower">
    <div class="rg-opening-copy">
      <p>RGuide turns researched city knowledge into an interactive travel guide that helps people explore cities with confidence and make better decisions while they are there.</p>
      <p>I designed and built the platform from the ground up. That meant shaping the experience on screen and the system behind it, so a useful idea could become a working product.</p>
    </div>
    <a class="rguide-live-link" href="https://www.rguide.co" target="_blank" rel="noreferrer">
      <span class="rguide-live-link-kicker">Open the live product</span>
      <span class="rguide-live-link-action"><span>Explore RGuide</span><i class="material-symbols-outlined" aria-hidden="true">north_east</i></span>
    </a>
  </div>
</section>

<nav class="rg-chapter-index" aria-label="RGuide case study chapters">
  <a href="#the-question"><span>01</span>The question</a>
  <a href="#the-experience"><span>02</span>The experience</a>
  <a href="#the-content"><span>03</span>The content</a>
  <a href="#the-publishing"><span>04</span>Publishing</a>
  <a href="#the-platform"><span>05</span>The platform</a>
  <a href="#the-result"><span>06</span>The result</a>
</nav>

<header class="rg-chapter" aria-labelledby="the-question">
  <div><p class="rg-eyebrow"><span class="rg-chapter-number" aria-hidden="true">01</span>Define the problem</p><h2 id="the-question">Give a recommendation a sense of place.</h2><p class="rg-chapter-lead">A good recommendation tells you why somewhere is worth visiting. A map tells you where it is. I wanted those two things to work together, from the first look at a city to the moment you choose a place.</p></div>
</header>
<div class="rg-brief">
  <div class="rg-prose">
    <h3>The starting point</h3>
    <p>A list can make a city feel like a collection of unrelated stops. It leaves the traveler to work out what is nearby and how one place connects to the next.</p>
    <p>With RGuide, I made geography part of the reading experience. The map gives each recommendation context, while the guide explains what makes it worth considering.</p>
  </div>
  <aside class="rg-design-note">
    <span class="rg-eyebrow">The design question</span>
    <p>How can someone explore a city without losing their bearings?</p>
  </aside>
</div>

<header class="rg-chapter" aria-labelledby="the-experience">
  <div><p class="rg-eyebrow"><span class="rg-chapter-number" aria-hidden="true">02</span>Design the experience</p><h2 id="the-experience">Keep the place in view.</h2><p class="rg-chapter-lead">The central decision was to let the guide and the map share the screen. People can compare recommendations, open a guide, and look at an individual stop while keeping a sense of the city around them.</p></div>
</header>
<div class="rg-experience-body">
<header class="rg-experience-phase">
  <span class="rg-eyebrow">Extended development phase</span>
  <p>From the interaction model to the finished interface</p>
</header>
<section class="rguide-design-system" aria-labelledby="rguide-design-system-title">
  <header class="rguide-ds-intro">
    <div>
      <span>The interaction model</span>
      <h3 id="rguide-design-system-title">A familiar way to explore</h3>
    </div>
    <p>I began with the relationship between the map and the guide, then worked through the details that make the interface consistent. The Barcelona views show how those decisions came together.</p>
  </header>
  <article class="rguide-ds-sheet rguide-ds-sheet--structure" aria-labelledby="rguide-ds-structure-title">
    <header class="rguide-ds-sheet-header">
      <h4 id="rguide-ds-structure-title">From the city to the detail</h4>
      <small>Keep the same sense of place</small>
    </header>
    <div class="rguide-ds-wireframes">
      <figure class="rguide-ds-specimen rguide-ds-specimen--home-shell">
        <figcaption><b>01</b><span><strong>Explorer layout</strong><small>The map stays in view</small></span></figcaption>
        <div class="rguide-ds-layout-theory">
          <ol class="rguide-ds-theory-key">
            <li><b>01</b><span><strong>Choose a place</strong><small>The left side lets people move from a broad destination to a neighborhood.</small></span></li>
            <li><b>02</b><span><strong>Keep your bearings</strong><small>The map stays visible while people compare places to visit.</small></span></li>
            <li><b>03</b><span><strong>Narrow the choice</strong><small>The categories work the same way in every destination.</small></span></li>
            <li><b>04</b><span><strong>Open what interests you</strong><small>Each card gives enough context to decide whether a guide is worth opening.</small></span></li>
          </ol>
          <article class="rguide-ds-home-wireframe" aria-label="Annotated wireframe showing the RGuide homepage as navigation, map, filters, and guide index">
            <ol class="rguide-ds-callouts rguide-ds-callouts--home" aria-hidden="true">
              <li style="--x:14%;--line:4.3rem">01</li><li style="--x:46%;--line:6.5rem">02</li><li style="--x:73%;--line:8.4rem">03</li><li style="--x:91%;--line:14.5rem">04</li>
            </ol>
            <aside class="rguide-ds-home-nav">
              <small class="rguide-ds-wf-label">Choose a destination</small>
              <div class="rguide-ds-home-heading"><i></i><i></i></div>
              <div class="rguide-ds-home-rows">
                <span><i></i><em><b></b><small></small></em></span>
                <span><i></i><em><b></b><small></small></em></span>
                <span><i></i><em><b></b><small></small></em></span>
                <span><i></i><em><b></b><small></small></em></span>
              </div>
            </aside>
            <div class="rguide-ds-home-map">
              <small class="rguide-ds-wf-label">Map</small>
              <div class="rguide-ds-map-streets" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <b style="--x:31%;--y:31%"></b><b style="--x:67%;--y:24%"></b><b style="--x:48%;--y:66%"></b><b style="--x:76%;--y:55%"></b>
              <div class="rguide-ds-map-controls" aria-hidden="true"><i>+</i><i>−</i></div>
            </div>
            <section class="rguide-ds-home-index">
              <header><small class="rguide-ds-wf-label">Guide index</small><div><i></i><i></i></div><span><i></i><i></i></span></header>
              <nav><small>Shared filters</small><div><i></i><i></i><i></i><i></i></div></nav>
              <div class="rguide-ds-home-cards">
                <small class="rguide-ds-wf-label">Guide cards</small>
                <article><figure><i class="material-symbols-outlined" aria-hidden="true">image</i></figure><span><b></b><small></small><small></small></span><em><i></i><i></i></em></article>
                <article><figure><i class="material-symbols-outlined" aria-hidden="true">image</i></figure><span><b></b><small></small><small></small></span><em><i></i><i></i></em></article>
                <article><figure><i class="material-symbols-outlined" aria-hidden="true">image</i></figure><span><b></b><small></small><small></small></span><em><i></i><i></i></em></article>
              </div>
            </section>
          </article>
        </div>
      </figure>
      <figure class="rguide-ds-specimen rguide-ds-specimen--guide-shell">
        <figcaption><b>02</b><span><strong>Inside a guide</strong><small>Give each detail a reason to be here</small></span></figcaption>
        <div class="rguide-ds-guide-theory">
          <ol class="rguide-ds-theory-key">
            <li><b>01</b><span><strong>Set expectations</strong><small>The title makes clear what the guide covers.</small></span></li>
            <li><b>02</b><span><strong>Keep context</strong><small>Related guides stay close so there is always another way to explore.</small></span></li>
            <li><b>03</b><span><strong>Explain the recommendation</strong><small>The introduction explains the choice. Sources let people follow the research.</small></span></li>
            <li><b>04</b><span><strong>Make it usable</strong><small>Each stop connects the recommendation to a place on the map.</small></span></li>
          </ol>
          <article class="rguide-ds-wireframe" aria-label="Annotated wireframe showing the four layers of an RGuide guide module">
            <header class="rguide-ds-wf-identity">
              <div class="rguide-ds-wf-title"><i></i><i></i></div>
              <div class="rguide-ds-wf-actions"><i></i><i></i><i></i></div>
            </header>
            <section class="rguide-ds-wf-related">
              <small>Related guides in current destination</small>
              <div><i></i><i></i><i></i><i></i></div>
            </section>
            <section class="rguide-ds-wf-context">
              <div class="rguide-ds-wf-context-copy">
                <small>Why these places</small>
                <i></i><i></i><i></i><i></i>
              </div>
              <div class="rguide-ds-wf-proof">
                <small>Sources</small>
                <span><i></i><i></i><i></i></span>
              </div>
              <div class="rguide-ds-wf-stops">
                <small>Ordered places</small>
                <ol><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li></ol>
              </div>
            </section>
            <section class="rguide-ds-wf-place">
              <div class="rguide-ds-wf-photo"><i class="material-symbols-outlined" aria-hidden="true">image</i></div>
              <div class="rguide-ds-wf-place-copy"><strong></strong><i></i><i></i><i></i><span></span></div>
              <div class="rguide-ds-wf-place-actions"><i></i><i></i><i></i></div>
            </section>
          </article>
        </div>
      </figure>
    </div>
  </article>
  <article class="rguide-ds-sheet" aria-labelledby="rguide-ds-foundations-title">
    <header class="rguide-ds-sheet-header">
      <h4 id="rguide-ds-foundations-title">Details that stay familiar</h4>
      <small>Consistency helps people find their way</small>
    </header>
    <div class="rguide-ds-foundations">
      <figure class="rguide-ds-specimen rguide-ds-specimen--categories">
        <figcaption><b>01</b><span><strong>Recognizable categories</strong><small>The same color follows a place across the interface</small></span></figcaption>
        <div class="rguide-ds-category-list" aria-label="RGuide category tokens">
          <span style="--category:#f59e0b"><i class="material-symbols-outlined" aria-hidden="true">restaurant</i><b>Food</b><small>#F59E0B</small></span>
          <span style="--category:#6366f1"><i class="material-symbols-outlined" aria-hidden="true">nightlife</i><b>Nightlife</b><small>#6366F1</small></span>
          <span style="--category:#f43f5e"><i class="material-symbols-outlined" aria-hidden="true">museum</i><b>Culture</b><small>#F43F5E</small></span>
          <span style="--category:#0891b2"><i class="material-symbols-outlined" aria-hidden="true">bed</i><b>Stay</b><small>#0891B2</small></span>
          <span style="--category:#10b981"><i class="material-symbols-outlined" aria-hidden="true">park</i><b>Nature</b><small>#10B981</small></span>
          <span style="--category:#f97316"><i class="material-symbols-outlined" aria-hidden="true">local_activity</i><b>Activities</b><small>#F97316</small></span>
          <span style="--category:#2563eb"><i class="material-symbols-outlined" aria-hidden="true">route</i><b>Routes</b><small>#2563EB</small></span>
          <span style="--category:#7c3aed"><i class="material-symbols-outlined" aria-hidden="true">info</i><b>Essentials</b><small>#7C3AED</small></span>
        </div>
      </figure>
      <figure class="rguide-ds-specimen rguide-ds-specimen--actions">
        <figcaption><b>02</b><span><strong>Shared controls</strong><small>Common actions keep a consistent appearance</small></span></figcaption>
        <div class="rguide-ds-actions" aria-label="Guide action button states">
          <button type="button" aria-label="Add guide"><i class="material-symbols-outlined" aria-hidden="true">add</i></button>
          <button type="button" aria-label="Save guide"><i class="material-symbols-outlined" aria-hidden="true">favorite</i></button>
          <button type="button" class="is-active" aria-label="Saved guide"><i class="material-symbols-outlined" aria-hidden="true">favorite</i></button>
          <button type="button" aria-label="Expand guide"><i class="material-symbols-outlined" aria-hidden="true">expand_more</i></button>
          <button type="button" class="rguide-ds-action-square" aria-label="Search"><i class="material-symbols-outlined" aria-hidden="true">search</i></button>
        </div>
      </figure>
      <figure class="rguide-ds-specimen rguide-ds-specimen--markers">
        <figcaption><b>03</b><span><strong>Map markers</strong><small>Numbered markers connect the guide to the map</small></span></figcaption>
        <div class="rguide-ds-markers" aria-label="Map marker hierarchy">
          <span class="rguide-ds-marker" style="--marker:#f59e0b">1</span>
          <span class="rguide-ds-marker is-selected" style="--marker:#f59e0b">5</span>
          <span class="rguide-ds-marker" style="--marker:#6366f1">8</span>
          <span class="rguide-ds-marker rguide-ds-marker--nested" style="--marker:#f59e0b">A</span>
        </div>
      </figure>
      <figure class="rguide-ds-specimen rguide-ds-specimen--route">
        <figcaption><b>04</b><span><strong>A shareable location</strong><small>The address follows where you are</small></span></figcaption>
        <nav class="rguide-ds-route" aria-label="Example geographic route">
          <span>World</span><i aria-hidden="true">→</i><span>Europe</span><i aria-hidden="true">→</i><span>Spain</span><i aria-hidden="true">→</i><strong>Barcelona</strong>
        </nav>
      </figure>
      <figure class="rguide-ds-specimen rguide-ds-specimen--sources">
        <figcaption><b>05</b><span><strong>Visible sources</strong><small>The research stays attached to the recommendation</small></span></figcaption>
        <div class="rguide-ds-source-row">
          <span>Sourced</span><i aria-hidden="true"></i>
          <div aria-label="Source publishers"><b>E</b><b>G</b><b>G</b></div>
          <strong>Eater, local publishers +2</strong>
          <i class="material-symbols-outlined" aria-hidden="true">expand_more</i>
        </div>
      </figure>
    </div>
  </article>
  <article class="rguide-ds-sheet rguide-ds-sheet--proof" aria-labelledby="rguide-ds-proof-title">
    <header class="rguide-ds-sheet-header">
      <h4 id="rguide-ds-proof-title">The finished interface</h4>
      <small>Barcelona, from browsing to choosing</small>
    </header>
    <div class="rguide-ds-product-proof">
      <figure class="rguide-ds-product-view">
        <figcaption><b>01</b><span><strong>City view</strong><small>Compare recommendations without losing the map</small></span></figcaption>
        <button type="button" class="rguide-ds-product-zoom" data-project-lightbox-trigger aria-label="Open City view at full size">
          <img src="/Projects/RGuide/rguide-barcelona-city-hd.png" alt="The Barcelona explorer with its map beside the available city guides" width="1600" height="900" loading="lazy" decoding="async" />
        </button>
      </figure>
      <figure class="rguide-ds-product-view">
        <figcaption><b>02</b><span><strong>Expanded guide</strong><small>Understand the recommendation, then explore each stop</small></span></figcaption>
        <button type="button" class="rguide-ds-product-zoom" data-project-lightbox-trigger aria-label="Open Expanded guide at full size">
          <img src="/Projects/RGuide/rguide-barcelona-expanded-hd.png" alt="A Barcelona food guide open beside its numbered stops on the map" width="1600" height="900" loading="lazy" decoding="async" />
        </button>
      </figure>
    </div>
  </article>

</section>

<div class="rg-decision-strip" aria-label="Interaction decisions">
  <article><span class="rg-eyebrow">Navigation</span><h3>Every view has an address</h3><p>Opening a guide updates the URL. Someone can share that exact view and return to it without starting again.</p></article>
  <article><span class="rg-eyebrow">Smaller screens</span><h3>The same journey, less space</h3><p>On mobile, panels and sheets reorganize the content around the map. The relationship between a guide and its places stays the same.</p></article>
  <article><span class="rg-eyebrow">Visual language</span><h3>Recognition before decoration</h3><p>A category keeps its color from the guide card to the map marker. Repeated controls make familiar actions easier to find.</p></article>
</div>
</div>

<header class="rg-chapter" aria-labelledby="the-content">
  <div><p class="rg-eyebrow"><span class="rg-chapter-number" aria-hidden="true">03</span>Design the content</p><h2 id="the-content">One place. More than one story.</h2><p class="rg-chapter-lead">A restaurant might belong in several guides, each for a different reason. Its address and opening hours should stay consistent, while each guide can explain what makes it relevant.</p></div>
</header>
<div class="rg-comparison" aria-label="How the content model changed">
  <article><span class="rg-eyebrow">The first version</span><h3>Each guide carried its own facts</h3><p>Local content objects let me build quickly. But the same venue appeared in multiple lists. A change in opening hours meant finding and updating every copy.</p></article>
  <article><span class="rg-eyebrow">The decision</span><h3>Give shared information one home</h3><p>I separated the venue record from its place in a guide. The venue holds the facts. The guide holds the recommendation and the order of its stops.</p></article>
</div>
<div class="rg-example">
  <span class="rg-eyebrow">A practical example</span>
  <p>The same restaurant can appear in a neighborhood walk and a guide to eating after midnight. Its hours come from one record. The reason to visit belongs to each guide.</p>
</div>
<figure class="rguide-schema" data-rguide-schema aria-labelledby="rguide-schema-title">
  <header>
    <span id="rguide-schema-title">Inside the content model</span>
    <p>Shared place records connect to individual guides. Prepared copies bring those relationships to the screen.</p>
  </header>
  <div class="rguide-schema-viewport" tabindex="0" role="group" aria-label="Scrollable core production data schema">
    <div class="rguide-schema-diagram">
      <div class="rguide-schema-primary">
        <article class="rguide-schema-node">
          <i class="material-symbols-outlined" aria-hidden="true">location_on</i>
          <span>Geography</span>
          <strong>destinations</strong>
          <div class="rguide-schema-relations">
            <small>parent_id → destinations</small>
            <small>destination_boundaries</small>
            <small>destination_translations</small>
          </div>
          <span class="rguide-schema-row-flow" aria-hidden="true"><i></i></span>
        </article>
        <span class="rguide-schema-edge rguide-schema-edge--reverse" aria-hidden="true"><i></i></span>
        <article class="rguide-schema-node rguide-schema-node--accent">
          <i class="material-symbols-outlined" aria-hidden="true">article</i>
          <span>Editorial</span>
          <strong>entries</strong>
          <div class="rguide-schema-relations">
            <small>destination_id → destinations</small>
            <small>entry_translations</small>
            <small>entry_render_cache</small>
          </div>
          <span class="rguide-schema-row-flow" aria-hidden="true"><i></i></span>
        </article>
        <span class="rguide-schema-edge" aria-hidden="true"><i></i></span>
        <article class="rguide-schema-node">
          <i class="material-symbols-outlined" aria-hidden="true">route</i>
          <span>Guide stops</span>
          <strong>entry_stops</strong>
          <div class="rguide-schema-relations">
            <small>entry_id → entries</small>
            <small>venue_id → venues</small>
            <small>event_occurrence_id → events</small>
          </div>
          <span class="rguide-schema-row-flow" aria-hidden="true"><i></i></span>
        </article>
        <span class="rguide-schema-edge rguide-schema-edge--both" aria-hidden="true"><i></i></span>
        <article class="rguide-schema-node">
          <i class="material-symbols-outlined" aria-hidden="true">storefront</i>
          <span>Shared places</span>
          <strong>venues</strong>
          <div class="rguide-schema-relations">
            <small>venue_hours · special_hours</small>
            <small>venue_media</small>
            <small>venue_taggings → venue_tags</small>
            <small>venue_translations</small>
          </div>
          <span class="rguide-schema-row-flow" aria-hidden="true"><i></i></span>
        </article>
      </div>
      <div class="rguide-schema-support">
        <article class="rguide-schema-node rguide-schema-node--support">
          <i class="material-symbols-outlined" aria-hidden="true">polyline</i>
          <span>Spatial views</span>
          <strong>destination_tree</strong>
          <div class="rguide-schema-relations"><small>boundaries_geojson</small></div>
          <span class="rguide-schema-drop" aria-hidden="true"><i></i></span>
        </article>
        <article class="rguide-schema-node rguide-schema-node--support">
          <i class="material-symbols-outlined" aria-hidden="true">hub</i>
          <span>Sources</span>
          <strong>entity_sources</strong>
          <div class="rguide-schema-relations"><small>source_id → sources</small></div>
          <span class="rguide-schema-drop" aria-hidden="true"><i></i></span>
        </article>
        <article class="rguide-schema-node rguide-schema-node--support">
          <i class="material-symbols-outlined" aria-hidden="true">event</i>
          <span>Event system</span>
          <strong>events</strong>
          <div class="rguide-schema-relations"><small>activations → occurrences</small><small>event_media · event_translations</small></div>
          <span class="rguide-schema-drop" aria-hidden="true"><i></i></span>
        </article>
        <article class="rguide-schema-node rguide-schema-node--support">
          <i class="material-symbols-outlined" aria-hidden="true">category</i>
          <span>Category fields</span>
          <strong>venue_tags</strong>
          <div class="rguide-schema-relations"><small>food · stay · nightlife</small></div>
          <span class="rguide-schema-drop" aria-hidden="true"><i></i></span>
        </article>
      </div>
      <div class="rguide-schema-view-layer">
        <article class="rguide-schema-node rguide-schema-node--derived rguide-schema-node--aggregate">
          <i class="material-symbols-outlined" aria-hidden="true">account_tree</i>
          <span>Combined guide data</span>
          <strong>entries_maplist</strong>
          <div class="rguide-schema-relations"><small>destinations + entries + stops + venues + sources</small></div>
          <span class="rguide-schema-view-flow" aria-hidden="true"><i></i></span>
        </article>
      </div>
      <div class="rguide-schema-delivery" aria-label="Prepared content path">
        <article class="rguide-schema-node rguide-schema-node--derived">
          <i class="material-symbols-outlined" aria-hidden="true">cached</i>
          <span>Prepared guide</span>
          <strong>entry_render_cache</strong>
        </article>
        <span class="rguide-schema-edge" aria-hidden="true"><i></i></span>
        <article class="rguide-schema-node rguide-schema-node--derived">
          <i class="material-symbols-outlined" aria-hidden="true">translate</i>
          <span>Translated guide</span>
          <strong>localized_cache</strong>
        </article>
        <span class="rguide-schema-edge" aria-hidden="true"><i></i></span>
        <article class="rguide-schema-node rguide-schema-node--output">
          <i class="material-symbols-outlined" aria-hidden="true">map</i>
          <span>On screen</span>
          <strong>explorer UI</strong>
        </article>
      </div>
    </div>
  </div>
  <figcaption>
    <span><i></i>Shared facts</span>
    <span><i></i>Guide context</span>
    <span><i></i>Prepared content</span>
  </figcaption>
</figure>
<div class="rg-brief rg-brief--filters">
  <div class="rg-prose"><h3>Filters that reflect the choice</h3><p>Choosing a place to stay raises different questions from choosing a restaurant. I gave each category its own fields so the filters could reflect those differences.</p><p>For a stay, that might mean the type of lodging and its atmosphere. For a restaurant, it might mean the cuisine and when it serves food. The way the information is stored determines what the interface can help someone find.</p></div>
  <aside class="rg-design-note"><span class="rg-eyebrow">A useful question</span><p>Where can I stay that feels social without being a party hostel?</p></aside>
</div>

<header class="rg-chapter" aria-labelledby="the-publishing">
  <div><p class="rg-eyebrow"><span class="rg-chapter-number" aria-hidden="true">04</span>Design the publishing process</p><h2 id="the-publishing">Make good content repeatable.</h2><p class="rg-chapter-lead">As the catalog grew, writing a guide became only part of the work. I built a publishing process that connects the research to the right places and checks the result before it reaches the site. I applied the same checks when updating venue hours and preparing translations.</p></div>
</header>
<div class="rguide-pipeline" aria-label="The six stages of publishing a guide">
  <div><span>01</span><i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">travel_explore</i><strong>Research</strong><p>Start with a useful question and find sources that support the recommendations.</p></div>
  <div><span>02</span><i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">hub</i><strong>Match</strong><p>Connect each place to an existing venue record, or create one if it is new.</p></div>
  <div><span>03</span><i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">account_tree</i><strong>Shape</strong><p>Write the guide and arrange its stops into a sequence that makes sense.</p></div>
  <div><span>04</span><i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">image</i><strong>Complete</strong><p>Add the supporting images and check the details someone will need to visit.</p></div>
  <div><span>05</span><i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">publish</i><strong>Publish</strong><p>Prepare the guide for the interface and refresh the saved version.</p></div>
  <div><span>06</span><i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">verified</i><strong>Verify</strong><p>Check the published page, including its sources and the places shown on the map.</p></div>
</div>
<section class="rguide-resilience" aria-labelledby="rguide-resilience-title">
  <header>
    <span>When a service slows down</span>
    <h3 id="rguide-resilience-title">Built to stay useful</h3>
    <p>A slow database should not leave someone with an empty guide. I built a fallback that can serve the last verified content while the live service recovers.</p>
  </header>
  <div class="rguide-resilience-paths">
    <article>
      <div class="rguide-resilience-path-heading">
        <i class="material-symbols-outlined" aria-hidden="true">cloud_done</i>
        <span>Normal operation</span>
        <b>01</b>
      </div>
      <h4>Show the latest guide</h4>
      <p>The page requests the published content for the place being viewed. Shared records are already assembled into a guide the interface can display.</p>
      <div class="rguide-resilience-flow" aria-label="Structured records flow to a published view and then to the explorer">
        <span>Structured records</span><i aria-hidden="true">→</i><span>Published view</span><i aria-hidden="true">→</i><span>Explorer</span>
      </div>
    </article>
    <article>
      <div class="rguide-resilience-path-heading">
        <i class="material-symbols-outlined" aria-hidden="true">offline_bolt</i>
        <span>If a service is interrupted</span>
        <b>02</b>
      </div>
      <h4>Keep the guide available</h4>
      <p>A saved version keeps the essential guide and map available. Backup images help the page remain usable if an image service is interrupted.</p>
      <div class="rguide-resilience-flow" aria-label="Verified guide data, boundary snapshots, and image fallbacks flow to the same explorer">
        <span>Verified content</span><i aria-hidden="true">+</i><span>Saved map and media</span><i aria-hidden="true">→</i><span>Same explorer</span>
      </div>
    </article>
  </div>
  <footer>
    <strong>Why this mattered</strong>
    <p>Both versions use the same structure, so the interface can display either one. This also let me improve the database in stages without rebuilding the guide cards. All editing still happens in the primary records.</p>
  </footer>
</section>

<header class="rg-chapter" aria-labelledby="the-platform">
  <div><p class="rg-eyebrow"><span class="rg-chapter-number" aria-hidden="true">05</span>Build for everyday use</p><h2 id="the-platform">Make the complexity earn its place.</h2><p class="rg-chapter-lead">The engineering decisions had to support the experience. I focused on loading what a person needs at that moment and keeping the guide useful as the amount of content grows.</p></div>
</header>
<div class="rguide-principles">
  <article><span>Load what is in view</span><p>A city page requests its own content. It does not need to fetch every guide in the catalog.</p></article>
  <article><span>Add detail when it matters</span><p>Neighborhood boundaries load as the traveler gets closer, keeping the first view lighter.</p></article>
  <article><span>Prepare the guide once</span><p>Saved versions bring related records together before the interface asks for them.</p></article>
  <article><span>Fit the image to the screen</span><p>The media process creates smaller versions for cards, so a small image does not require a large download.</p></article>
</div>
<details class="rg-deep-dive">
  <summary><span><strong>Inside the build</strong><small class="rg-disclosure-closed">View the technical decisions</small><small class="rg-disclosure-open">Close the technical decisions</small></span></summary>
  <div class="rguide-system" aria-label="How the platform is built">
    <details open><summary><span>01</span><strong>The interface</strong><small>Next.js</small></summary><div><p>I used Next.js to connect page routes with the map experience. Selecting a guide updates the visible content and its address together. Local interface state keeps those interactions responsive.</p></div></details>
    <details><summary><span>02</span><strong>The records</strong><small>Supabase and PostGIS</small></summary><div><p>Supabase stores the shared content in Postgres. PostGIS connects places to their coordinates and geographic boundaries. Access policies allow public reading while controlling who can make changes.</p></div></details>
    <details><summary><span>03</span><strong>The delivery</strong><small>Prepared content</small></summary><div><p>Database views assemble related records into the structure a guide needs. Versioned copies make those results reusable. Cloudflare R2 stores the images and their different sizes.</p></div></details>
    <details><summary><span>04</span><strong>The upkeep</strong><small>Publishing tools</small></summary><div><p>I built scripts to handle recurring content work and verify the result. This made publishing easier to repeat as the number of destinations increased.</p></div></details>
  </div>
</details>
<div class="rg-growth">
  <header><p class="rg-eyebrow">Room to develop</p><h3>More ways into the same product</h3><p>I treated growth as an extension of the core experience. Each addition needed to make the existing guide more useful.</p></header>
  <div class="rg-growth-rows">
    <article><h4>Read in another language</h4><p>Spanish content uses the same underlying records as English. Translations can develop without creating a separate product to maintain.</p></article>
    <article><h4>Find a guide through search</h4><p>City and guide pages have their own addresses and readable content before the interactive map loads.</p></article>
    <article><h4>Come back to a place</h4><p>Profiles and saved places give people a reason to return. The site can also be installed on a phone for easier access.</p></article>
    <article><h4>Support the service</h4><p>Relevant stays can link to booking partners. Those links sit within the guide context without determining its editorial order.</p></article>
  </div>
</div>

<header class="rg-chapter" aria-labelledby="the-result">
  <div><p class="rg-eyebrow"><span class="rg-chapter-number" aria-hidden="true">06</span>Reflect on the result</p><h2 id="the-result">An idea that became a working product.</h2><p class="rg-chapter-lead">The initial build ran from April to August 2026. Over 105 calendar days, I took RGuide from a map prototype to a published platform covering 47 cities.</p></div>
</header>
<section class="rguide-impact" data-rguide-impact aria-label="RGuide production data snapshot from September 19, 2026">
  <div class="rguide-city-map" role="img" aria-label="World map marking 78 cities with published RGuide content as of September 19, 2026">
    <img src="/Projects/RGuide/world-outline.svg" alt="" aria-hidden="true" />
    <i style="--x: 60.76%; --y: 44.99%" data-city="Addis Ababa" title="Addis Ababa: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 51.36%; --y: 20.91%" data-city="Amsterdam" title="Amsterdam: 24 published entries" aria-hidden="true"></i>
    <i style="--x: 56.59%; --y: 28.90%" data-city="Athens" title="Athens: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 98.55%; --y: 70.47%" data-city="Auckland" title="Auckland: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 77.92%; --y: 42.36%" data-city="Bangkok" title="Bangkok: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 50.60%; --y: 27.01%" data-city="Barcelona" title="Barcelona: 56 published entries" aria-hidden="true"></i>
    <i style="--x: 55.68%; --y: 25.12%" data-city="Belgrade" title="Belgrade: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 53.72%; --y: 20.82%" data-city="Berlin" title="Berlin: 54 published entries" aria-hidden="true"></i>
    <i style="--x: 29.42%; --y: 47.38%" data-city="Bogota" title="Bogota: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 49.28%; --y: 21.41%" data-city="Bristol" title="Bristol: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 55.29%; --y: 23.61%" data-city="Budapest" title="Budapest: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 33.78%; --y: 69.22%" data-city="Buenos Aires" title="Buenos Aires: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 58.68%; --y: 33.30%" data-city="Cairo" title="Cairo: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 55.12%; --y: 68.85%" data-city="Cape Town" title="Cape Town: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 53.49%; --y: 19.07%" data-city="Copenhagen" title="Copenhagen: 10 published entries" aria-hidden="true"></i>
    <i style="--x: 30.01%; --y: 57.52%" data-city="Cusco" title="Cusco: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 80.06%; --y: 41.08%" data-city="Danang" title="Danang: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 65.35%; --y: 36.00%" data-city="Dubai" title="Dubai: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 48.26%; --y: 20.37%" data-city="Dublin" title="Dublin: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 49.11%; --y: 18.91%" data-city="Edinburgh" title="Edinburgh: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 53.13%; --y: 25.68%" data-city="Florence" title="Florence: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 21.29%; --y: 38.52%" data-city="Guadalajara" title="Guadalajara: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 52.78%; --y: 20.25%" data-city="Hamburg" title="Hamburg: 10 published entries" aria-hidden="true"></i>
    <i style="--x: 79.40%; --y: 38.32%" data-city="Hanoi" title="Hanoi: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 79.64%; --y: 44.01%" data-city="Ho Chi Minh City" title="Ho Chi Minh City: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 81.71%; --y: 37.60%" data-city="Hong Kong" title="Hong Kong: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 23.51%; --y: 33.47%" data-city="Houston" title="Houston: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 58.05%; --y: 27.22%" data-city="Istanbul" title="Istanbul: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 71.05%; --y: 35.05%" data-city="Jaipur" title="Jaipur: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 55.54%; --y: 22.19%" data-city="Kraków" title="Kraków: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 78.25%; --y: 48.26%" data-city="Kuala Lumpur" title="Kuala Lumpur: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 87.71%; --y: 30.55%" data-city="Kyoto" title="Kyoto: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 50.94%; --y: 46.38%" data-city="Lagos" title="Lagos: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 18.02%; --y: 29.91%" data-city="Las Vegas" title="Las Vegas: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 28.60%; --y: 56.69%" data-city="Lima" title="Lima: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 47.46%; --y: 28.49%" data-city="Lisbon" title="Lisbon: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 49.96%; --y: 21.38%" data-city="London" title="London: 75 published entries" aria-hidden="true"></i>
    <i style="--x: 17.15%; --y: 31.08%" data-city="Los Angeles" title="Los Angeles: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 48.97%; --y: 27.55%" data-city="Madrid" title="Madrid: 39 published entries" aria-hidden="true"></i>
    <i style="--x: 49.38%; --y: 20.29%" data-city="Manchester" title="Manchester: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 47.78%; --y: 32.43%" data-city="Marrakesh" title="Marrakesh: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 29.01%; --y: 46.53%" data-city="Medellin" title="Medellin: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 90.27%; --y: 71.01%" data-city="Melbourne" title="Melbourne: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 22.46%; --y: 39.20%" data-city="Mexico City" title="Mexico City: 10 published entries" aria-hidden="true"></i>
    <i style="--x: 27.72%; --y: 35.69%" data-city="Miami" title="Miami: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 52.55%; --y: 24.74%" data-city="Milan" title="Milan: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 70.24%; --y: 39.40%" data-city="Mumbai" title="Mumbai: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 53.22%; --y: 23.26%" data-city="Munich" title="Munich: 10 published entries" aria-hidden="true"></i>
    <i style="--x: 60.23%; --y: 50.72%" data-city="Nairobi" title="Nairobi: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 71.45%; --y: 34.09%" data-city="New Delhi" title="New Delhi: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 29.44%; --y: 27.38%" data-city="New York City" title="New York City: 39 published entries" aria-hidden="true"></i>
    <i style="--x: 23.13%; --y: 40.51%" data-city="Oaxaca" title="Oaxaca: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 27.39%; --y: 34.15%" data-city="Orlando" title="Orlando: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 87.64%; --y: 30.73%" data-city="Osaka" title="Osaka: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 52.99%; --y: 16.72%" data-city="Oslo" title="Oslo: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 50.65%; --y: 22.86%" data-city="Paris" title="Paris: 55 published entries" aria-hidden="true"></i>
    <i style="--x: 54.01%; --y: 22.18%" data-city="Prague" title="Prague: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 96.85%; --y: 75.02%" data-city="Queenstown" title="Queenstown: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 53.47%; --y: 26.72%" data-city="Rome" title="Rome: 30 published entries" aria-hidden="true"></i>
    <i style="--x: 15.99%; --y: 29.01%" data-city="San Francisco" title="San Francisco: 13 published entries" aria-hidden="true"></i>
    <i style="--x: 30.37%; --y: 68.59%" data-city="Santiago" title="Santiago: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 85.27%; --y: 29.13%" data-city="Seoul" title="Seoul: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 83.74%; --y: 32.65%" data-city="Shanghai" title="Shanghai: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 78.84%; --y: 49.25%" data-city="Singapore" title="Singapore: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 55.02%; --y: 17.04%" data-city="Stockholm" title="Stockholm: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 92.00%; --y: 68.82%" data-city="Sydney" title="Sydney: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 83.76%; --y: 36.08%" data-city="Taipei" title="Taipei: 10 published entries" aria-hidden="true"></i>
    <i style="--x: 62.45%; --y: 26.84%" data-city="Tbilisi" title="Tbilisi: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 55.51%; --y: 27.04%" data-city="Tirana" title="Tirana: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 88.79%; --y: 30.18%" data-city="Tokyo" title="Tokyo: 40 published entries" aria-hidden="true"></i>
    <i style="--x: 27.95%; --y: 25.75%" data-city="Toronto" title="Toronto: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 49.90%; --y: 28.07%" data-city="Valencia" title="Valencia: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 53.42%; --y: 24.76%" data-city="Venice" title="Venice: 9 published entries" aria-hidden="true"></i>
    <i style="--x: 54.55%; --y: 23.22%" data-city="Vienna" title="Vienna: 10 published entries" aria-hidden="true"></i>
    <i style="--x: 55.84%; --y: 20.98%" data-city="Warsaw" title="Warsaw: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 98.55%; --y: 72.94%" data-city="Wellington" title="Wellington: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 60.89%; --y: 53.43%" data-city="Zanzibar" title="Zanzibar: 8 published entries" aria-hidden="true"></i>
    <i style="--x: 52.37%; --y: 23.68%" data-city="Zurich" title="Zurich: 9 published entries" aria-hidden="true"></i>
  </div>
  <header>
    <span>September 2026 snapshot</span>
    <h3 class="rguide-impact-title">Data driven exploration</h3>
    <p>Published guides now cover 78 cities. Behind each recommendation is a shared record that keeps its details connected to the wider guide.</p>
  </header>
  <div class="rguide-impact-data">
    <div><strong>1,011</strong><span>Published entries</span></div>
    <div><strong>8,545</strong><span>Published guide stops</span></div>
    <div><strong>7,486</strong><span>Shared venue records</span></div>
    <div><strong>15,020</strong><span>Links to sources</span></div>
    <div><strong>37,623</strong><span>Hours records</span></div>
    <div><strong>9,774</strong><span>Translated records</span></div>
  </div>
  <footer><span aria-hidden="true"></span><b>Production database · September 19, 2026</b><small>Map: <a href="https://commons.wikimedia.org/wiki/File:Equirectangular_projection_world_map_without_borders.svg">Ebrahim / Natural Earth · CC BY-SA 4.0</a></small></footer>
</section>
<section class="rguide-timeline" data-rguide-timeline aria-label="Interactive RGuide product evolution">
  <header>
    <span>105 calendar days</span>
    <strong>How the build developed</strong>
    <small>593 commits · 71 active days</small>
  </header>
  <div class="rguide-timeline-track">
    <span class="rguide-timeline-line" aria-hidden="true"><span data-rguide-timeline-progress></span></span>
    <button type="button" aria-pressed="true" data-rguide-phase data-phase="01" data-title="Start with the map" data-system="Interaction" data-copy="I built the first explorer to test how a map and a guide could work together.">
      <span>Apr 28</span><i aria-hidden="true"></i><strong>Prototype</strong>
    </button>
    <button type="button" aria-pressed="false" data-rguide-phase data-phase="02" data-title="Connect the content" data-system="Product" data-copy="I connected the interface to published content and gave each city its own address.">
      <span>Apr 29</span><i aria-hidden="true"></i><strong>Live data</strong>
    </button>
    <button type="button" aria-pressed="false" data-rguide-phase data-phase="03" data-title="Give each fact one home" data-system="Data" data-copy="I separated shared venue information from the story each guide tells about it.">
      <span>May 10</span><i aria-hidden="true"></i><strong>Shared records</strong>
    </button>
    <button type="button" aria-pressed="false" data-rguide-phase data-phase="04" data-title="Make publishing repeatable" data-system="Systems" data-copy="I built checks into publishing so new guides could follow the same standards.">
      <span>May 27</span><i aria-hidden="true"></i><strong>Publishing</strong>
    </button>
    <button type="button" aria-pressed="false" data-rguide-phase data-phase="05" data-title="Extend the platform" data-system="Platform" data-copy="The platform reached 47 cities. I added Spanish content and refined how the site loads on different devices.">
      <span>Aug 10</span><i aria-hidden="true"></i><strong>47 cities</strong>
    </button>
  </div>
  <div class="rguide-timeline-detail" aria-live="polite">
    <span data-rguide-phase-number>01</span>
    <div><strong data-rguide-phase-title>Start with the map</strong><p data-rguide-phase-copy>I built the first explorer to test how a map and a guide could work together.</p></div>
    <small data-rguide-phase-system>Interaction</small>
  </div>
</section>
<section class="rguide-analytics" data-rguide-analytics aria-label="RGuide audience data">
  <div class="rguide-analytics-toolbar" hidden>
    <p class="rg-eyebrow">Recorded use</p>
    <div class="rguide-analytics-tabs" role="tablist" aria-label="Choose an audience dataset">
      <button type="button" id="rguide-search-tab" role="tab" aria-controls="rguide-search-panel" aria-selected="true">Google Search</button>
      <button type="button" id="rguide-traffic-tab" role="tab" aria-controls="rguide-traffic-panel" aria-selected="false" tabindex="-1">Site traffic</button>
    </div>
  </div>
  <div class="rguide-analytics-panel" id="rguide-search-panel" role="tabpanel" aria-labelledby="rguide-search-tab" tabindex="0">
<figure class="rguide-traffic rguide-search" aria-labelledby="rguide-search-title">
  <header>
    <div>
      <span>Recent search performance</span>
      <h3 id="rguide-search-title">People found RGuide through search.</h3>
      <p>From August 20 to September 16, Google Search brought 356 clicks to RGuide, compared with 90 in the previous 28 days. The chart shows how that discovery developed over the full reporting period.</p>
    </div>
    <div class="rguide-analytics-totals">
      <p class="rguide-analytics-period">June 17 to September 16, 2026</p>
      <dl>
        <div><dt>Google Search clicks</dt><dd>494</dd></div>
        <div><dt>Search impressions</dt><dd>237,348</dd></div>
      </dl>
    </div>
  </header>
  <div class="rguide-traffic-stage">
    <div class="rguide-traffic-plot">
      <div class="rguide-traffic-axis" aria-hidden="true"><span>24</span><span>18</span><span>12</span><span>6</span><span>0</span></div>
      <svg class="rguide-traffic-svg" viewBox="0 0 1000 300" preserveAspectRatio="none" role="img" aria-labelledby="rg-search-chart-title rg-search-chart-description">
        <title id="rg-search-chart-title">Daily clicks from Google Search</title>
        <desc id="rg-search-chart-description">92 daily observations from June 17 to September 16, 2026, totaling 494 clicks. The latest 28 days recorded 356 clicks, compared with 90 in the preceding 28 days. The highest daily count was 22 on September 11.</desc>
        <defs><linearGradient id="rg-search-chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#f03a22" stop-opacity=".16" /><stop offset="100%" stop-color="#f03a22" stop-opacity="0" /></linearGradient></defs>
        <path class="rg-chart-grid" d="M 0 0 H 1000" />
        <path class="rg-chart-grid" d="M 0 75 H 1000" />
        <path class="rg-chart-grid" d="M 0 150 H 1000" />
        <path class="rg-chart-grid" d="M 0 225 H 1000" />
        <path class="rg-chart-grid" d="M 0 300 H 1000" />
        <path d="M 0.00 287.50 L 10.99 275.00 L 21.98 287.50 L 32.97 262.50 L 43.96 287.50 L 54.95 300.00 L 65.93 300.00 L 76.92 300.00 L 87.91 287.50 L 98.90 287.50 L 109.89 300.00 L 120.88 262.50 L 131.87 287.50 L 142.86 300.00 L 153.85 275.00 L 164.84 300.00 L 175.82 300.00 L 186.81 287.50 L 197.80 300.00 L 208.79 300.00 L 219.78 287.50 L 230.77 275.00 L 241.76 262.50 L 252.75 287.50 L 263.74 300.00 L 274.73 287.50 L 285.71 262.50 L 296.70 275.00 L 307.69 300.00 L 318.68 250.00 L 329.67 287.50 L 340.66 262.50 L 351.65 275.00 L 362.64 275.00 L 373.63 275.00 L 384.62 250.00 L 395.60 237.50 L 406.59 237.50 L 417.58 262.50 L 428.57 262.50 L 439.56 275.00 L 450.55 262.50 L 461.54 262.50 L 472.53 187.50 L 483.52 262.50 L 494.51 287.50 L 505.49 275.00 L 516.48 237.50 L 527.47 287.50 L 538.46 275.00 L 549.45 237.50 L 560.44 275.00 L 571.43 237.50 L 582.42 262.50 L 593.41 275.00 L 604.40 262.50 L 615.38 262.50 L 626.37 275.00 L 637.36 262.50 L 648.35 287.50 L 659.34 287.50 L 670.33 262.50 L 681.32 237.50 L 692.31 237.50 L 703.30 125.00 L 714.29 125.00 L 725.27 225.00 L 736.26 212.50 L 747.25 187.50 L 758.24 162.50 L 769.23 187.50 L 780.22 237.50 L 791.21 200.00 L 802.20 187.50 L 813.19 187.50 L 824.18 225.00 L 835.16 125.00 L 846.15 100.00 L 857.14 150.00 L 868.13 125.00 L 879.12 200.00 L 890.11 125.00 L 901.10 112.50 L 912.09 87.50 L 923.08 37.50 L 934.07 125.00 L 945.05 25.00 L 956.04 100.00 L 967.03 125.00 L 978.02 87.50 L 989.01 87.50 L 1000.00 75.00 L 1000 300 L 0 300 Z" fill="url(#rg-search-chart-fill)" />
        <path class="rg-chart-line" d="M 0.00 287.50 L 10.99 275.00 L 21.98 287.50 L 32.97 262.50 L 43.96 287.50 L 54.95 300.00 L 65.93 300.00 L 76.92 300.00 L 87.91 287.50 L 98.90 287.50 L 109.89 300.00 L 120.88 262.50 L 131.87 287.50 L 142.86 300.00 L 153.85 275.00 L 164.84 300.00 L 175.82 300.00 L 186.81 287.50 L 197.80 300.00 L 208.79 300.00 L 219.78 287.50 L 230.77 275.00 L 241.76 262.50 L 252.75 287.50 L 263.74 300.00 L 274.73 287.50 L 285.71 262.50 L 296.70 275.00 L 307.69 300.00 L 318.68 250.00 L 329.67 287.50 L 340.66 262.50 L 351.65 275.00 L 362.64 275.00 L 373.63 275.00 L 384.62 250.00 L 395.60 237.50 L 406.59 237.50 L 417.58 262.50 L 428.57 262.50 L 439.56 275.00 L 450.55 262.50 L 461.54 262.50 L 472.53 187.50 L 483.52 262.50 L 494.51 287.50 L 505.49 275.00 L 516.48 237.50 L 527.47 287.50 L 538.46 275.00 L 549.45 237.50 L 560.44 275.00 L 571.43 237.50 L 582.42 262.50 L 593.41 275.00 L 604.40 262.50 L 615.38 262.50 L 626.37 275.00 L 637.36 262.50 L 648.35 287.50 L 659.34 287.50 L 670.33 262.50 L 681.32 237.50 L 692.31 237.50 L 703.30 125.00 L 714.29 125.00 L 725.27 225.00 L 736.26 212.50 L 747.25 187.50 L 758.24 162.50 L 769.23 187.50 L 780.22 237.50 L 791.21 200.00 L 802.20 187.50 L 813.19 187.50 L 824.18 225.00 L 835.16 125.00 L 846.15 100.00 L 857.14 150.00 L 868.13 125.00 L 879.12 200.00 L 890.11 125.00 L 901.10 112.50 L 912.09 87.50 L 923.08 37.50 L 934.07 125.00 L 945.05 25.00 L 956.04 100.00 L 967.03 125.00 L 978.02 87.50 L 989.01 87.50 L 1000.00 75.00" />
        <path class="rg-chart-dot" d="M 0.00 287.50 h 0.01" data-date="2026-06-17" data-clicks="1"><title>2026-06-17: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 10.99 275.00 h 0.01" data-date="2026-06-18" data-clicks="2"><title>2026-06-18: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 21.98 287.50 h 0.01" data-date="2026-06-19" data-clicks="1"><title>2026-06-19: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 32.97 262.50 h 0.01" data-date="2026-06-20" data-clicks="3"><title>2026-06-20: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 43.96 287.50 h 0.01" data-date="2026-06-21" data-clicks="1"><title>2026-06-21: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 54.95 300.00 h 0.01" data-date="2026-06-22" data-clicks="0"><title>2026-06-22: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 65.93 300.00 h 0.01" data-date="2026-06-23" data-clicks="0"><title>2026-06-23: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 76.92 300.00 h 0.01" data-date="2026-06-24" data-clicks="0"><title>2026-06-24: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 87.91 287.50 h 0.01" data-date="2026-06-25" data-clicks="1"><title>2026-06-25: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 98.90 287.50 h 0.01" data-date="2026-06-26" data-clicks="1"><title>2026-06-26: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 109.89 300.00 h 0.01" data-date="2026-06-27" data-clicks="0"><title>2026-06-27: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 120.88 262.50 h 0.01" data-date="2026-06-28" data-clicks="3"><title>2026-06-28: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 131.87 287.50 h 0.01" data-date="2026-06-29" data-clicks="1"><title>2026-06-29: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 142.86 300.00 h 0.01" data-date="2026-06-30" data-clicks="0"><title>2026-06-30: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 153.85 275.00 h 0.01" data-date="2026-07-01" data-clicks="2"><title>2026-07-01: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 164.84 300.00 h 0.01" data-date="2026-07-02" data-clicks="0"><title>2026-07-02: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 175.82 300.00 h 0.01" data-date="2026-07-03" data-clicks="0"><title>2026-07-03: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 186.81 287.50 h 0.01" data-date="2026-07-04" data-clicks="1"><title>2026-07-04: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 197.80 300.00 h 0.01" data-date="2026-07-05" data-clicks="0"><title>2026-07-05: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 208.79 300.00 h 0.01" data-date="2026-07-06" data-clicks="0"><title>2026-07-06: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 219.78 287.50 h 0.01" data-date="2026-07-07" data-clicks="1"><title>2026-07-07: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 230.77 275.00 h 0.01" data-date="2026-07-08" data-clicks="2"><title>2026-07-08: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 241.76 262.50 h 0.01" data-date="2026-07-09" data-clicks="3"><title>2026-07-09: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 252.75 287.50 h 0.01" data-date="2026-07-10" data-clicks="1"><title>2026-07-10: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 263.74 300.00 h 0.01" data-date="2026-07-11" data-clicks="0"><title>2026-07-11: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 274.73 287.50 h 0.01" data-date="2026-07-12" data-clicks="1"><title>2026-07-12: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 285.71 262.50 h 0.01" data-date="2026-07-13" data-clicks="3"><title>2026-07-13: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 296.70 275.00 h 0.01" data-date="2026-07-14" data-clicks="2"><title>2026-07-14: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 307.69 300.00 h 0.01" data-date="2026-07-15" data-clicks="0"><title>2026-07-15: 0 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 318.68 250.00 h 0.01" data-date="2026-07-16" data-clicks="4"><title>2026-07-16: 4 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 329.67 287.50 h 0.01" data-date="2026-07-17" data-clicks="1"><title>2026-07-17: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 340.66 262.50 h 0.01" data-date="2026-07-18" data-clicks="3"><title>2026-07-18: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 351.65 275.00 h 0.01" data-date="2026-07-19" data-clicks="2"><title>2026-07-19: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 362.64 275.00 h 0.01" data-date="2026-07-20" data-clicks="2"><title>2026-07-20: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 373.63 275.00 h 0.01" data-date="2026-07-21" data-clicks="2"><title>2026-07-21: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 384.62 250.00 h 0.01" data-date="2026-07-22" data-clicks="4"><title>2026-07-22: 4 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 395.60 237.50 h 0.01" data-date="2026-07-23" data-clicks="5"><title>2026-07-23: 5 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 406.59 237.50 h 0.01" data-date="2026-07-24" data-clicks="5"><title>2026-07-24: 5 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 417.58 262.50 h 0.01" data-date="2026-07-25" data-clicks="3"><title>2026-07-25: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 428.57 262.50 h 0.01" data-date="2026-07-26" data-clicks="3"><title>2026-07-26: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 439.56 275.00 h 0.01" data-date="2026-07-27" data-clicks="2"><title>2026-07-27: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 450.55 262.50 h 0.01" data-date="2026-07-28" data-clicks="3"><title>2026-07-28: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 461.54 262.50 h 0.01" data-date="2026-07-29" data-clicks="3"><title>2026-07-29: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 472.53 187.50 h 0.01" data-date="2026-07-30" data-clicks="9"><title>2026-07-30: 9 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 483.52 262.50 h 0.01" data-date="2026-07-31" data-clicks="3"><title>2026-07-31: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 494.51 287.50 h 0.01" data-date="2026-08-01" data-clicks="1"><title>2026-08-01: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 505.49 275.00 h 0.01" data-date="2026-08-02" data-clicks="2"><title>2026-08-02: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 516.48 237.50 h 0.01" data-date="2026-08-03" data-clicks="5"><title>2026-08-03: 5 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 527.47 287.50 h 0.01" data-date="2026-08-04" data-clicks="1"><title>2026-08-04: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 538.46 275.00 h 0.01" data-date="2026-08-05" data-clicks="2"><title>2026-08-05: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 549.45 237.50 h 0.01" data-date="2026-08-06" data-clicks="5"><title>2026-08-06: 5 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 560.44 275.00 h 0.01" data-date="2026-08-07" data-clicks="2"><title>2026-08-07: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 571.43 237.50 h 0.01" data-date="2026-08-08" data-clicks="5"><title>2026-08-08: 5 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 582.42 262.50 h 0.01" data-date="2026-08-09" data-clicks="3"><title>2026-08-09: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 593.41 275.00 h 0.01" data-date="2026-08-10" data-clicks="2"><title>2026-08-10: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 604.40 262.50 h 0.01" data-date="2026-08-11" data-clicks="3"><title>2026-08-11: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 615.38 262.50 h 0.01" data-date="2026-08-12" data-clicks="3"><title>2026-08-12: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 626.37 275.00 h 0.01" data-date="2026-08-13" data-clicks="2"><title>2026-08-13: 2 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 637.36 262.50 h 0.01" data-date="2026-08-14" data-clicks="3"><title>2026-08-14: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 648.35 287.50 h 0.01" data-date="2026-08-15" data-clicks="1"><title>2026-08-15: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 659.34 287.50 h 0.01" data-date="2026-08-16" data-clicks="1"><title>2026-08-16: 1 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 670.33 262.50 h 0.01" data-date="2026-08-17" data-clicks="3"><title>2026-08-17: 3 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 681.32 237.50 h 0.01" data-date="2026-08-18" data-clicks="5"><title>2026-08-18: 5 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 692.31 237.50 h 0.01" data-date="2026-08-19" data-clicks="5"><title>2026-08-19: 5 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 703.30 125.00 h 0.01" data-date="2026-08-20" data-clicks="14"><title>2026-08-20: 14 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 714.29 125.00 h 0.01" data-date="2026-08-21" data-clicks="14"><title>2026-08-21: 14 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 725.27 225.00 h 0.01" data-date="2026-08-22" data-clicks="6"><title>2026-08-22: 6 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 736.26 212.50 h 0.01" data-date="2026-08-23" data-clicks="7"><title>2026-08-23: 7 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 747.25 187.50 h 0.01" data-date="2026-08-24" data-clicks="9"><title>2026-08-24: 9 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 758.24 162.50 h 0.01" data-date="2026-08-25" data-clicks="11"><title>2026-08-25: 11 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 769.23 187.50 h 0.01" data-date="2026-08-26" data-clicks="9"><title>2026-08-26: 9 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 780.22 237.50 h 0.01" data-date="2026-08-27" data-clicks="5"><title>2026-08-27: 5 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 791.21 200.00 h 0.01" data-date="2026-08-28" data-clicks="8"><title>2026-08-28: 8 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 802.20 187.50 h 0.01" data-date="2026-08-29" data-clicks="9"><title>2026-08-29: 9 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 813.19 187.50 h 0.01" data-date="2026-08-30" data-clicks="9"><title>2026-08-30: 9 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 824.18 225.00 h 0.01" data-date="2026-08-31" data-clicks="6"><title>2026-08-31: 6 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 835.16 125.00 h 0.01" data-date="2026-09-01" data-clicks="14"><title>2026-09-01: 14 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 846.15 100.00 h 0.01" data-date="2026-09-02" data-clicks="16"><title>2026-09-02: 16 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 857.14 150.00 h 0.01" data-date="2026-09-03" data-clicks="12"><title>2026-09-03: 12 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 868.13 125.00 h 0.01" data-date="2026-09-04" data-clicks="14"><title>2026-09-04: 14 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 879.12 200.00 h 0.01" data-date="2026-09-05" data-clicks="8"><title>2026-09-05: 8 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 890.11 125.00 h 0.01" data-date="2026-09-06" data-clicks="14"><title>2026-09-06: 14 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 901.10 112.50 h 0.01" data-date="2026-09-07" data-clicks="15"><title>2026-09-07: 15 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 912.09 87.50 h 0.01" data-date="2026-09-08" data-clicks="17"><title>2026-09-08: 17 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 923.08 37.50 h 0.01" data-date="2026-09-09" data-clicks="21"><title>2026-09-09: 21 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 934.07 125.00 h 0.01" data-date="2026-09-10" data-clicks="14"><title>2026-09-10: 14 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 945.05 25.00 h 0.01" data-date="2026-09-11" data-clicks="22"><title>2026-09-11: 22 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 956.04 100.00 h 0.01" data-date="2026-09-12" data-clicks="16"><title>2026-09-12: 16 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 967.03 125.00 h 0.01" data-date="2026-09-13" data-clicks="14"><title>2026-09-13: 14 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 978.02 87.50 h 0.01" data-date="2026-09-14" data-clicks="17"><title>2026-09-14: 17 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 989.01 87.50 h 0.01" data-date="2026-09-15" data-clicks="17"><title>2026-09-15: 17 Google Search clicks</title></path>
        <path class="rg-chart-dot" d="M 1000.00 75.00 h 0.01" data-date="2026-09-16" data-clicks="18"><title>2026-09-16: 18 Google Search clicks</title></path>
      </svg>
      <div class="rguide-traffic-dates" aria-hidden="true"><span>Jun 17, 2026</span><span>Aug 02</span><span>Sep 16, 2026</span></div>
    </div>
    <p class="rguide-analytics-note">Impressions count appearances in Google Search results. Clicks count interactions with those results, not unique visitors.</p>
  </div>
  <figcaption>
    <span class="rguide-traffic-key"><i aria-hidden="true"></i> Daily Google Search clicks</span>
    <span>Google Search Console. June 17 to September 16, 2026. Exported September 19.</span>
  </figcaption>
</figure>
  </div>
  <div class="rguide-analytics-panel" id="rguide-traffic-panel" role="tabpanel" aria-labelledby="rguide-traffic-tab" tabindex="0">
<figure
  class="rguide-traffic"
  data-rguide-traffic
  data-points="0,1176,2420,2703,3862,4401,4658,5094,5541,5935,6103,6871,7360,7455,7710,7912"
  data-labels="Apr 27,May 04,May 11,May 18,May 25,Jun 01,Jun 08,Jun 15,Jun 22,Jun 29,Jul 06,Jul 13,Jul 20,Jul 27,Aug 03,Aug 10"
  data-actual-count="16"
  aria-labelledby="rguide-traffic-title"
>
  <header>
    <div>
      <span>Site traffic during the initial build</span>
      <h3 id="rguide-traffic-title">People began using it</h3>
      <p>The saved analytics show 7,912 pageviews and 1,115 unique visitors during the initial build. These figures describe early use, not whether every recommendation helped someone make a better decision.</p>
    </div>
    <div class="rguide-analytics-totals">
      <p class="rguide-analytics-period">April 27 to August 10, 2026</p>
      <dl>
        <div><dt>Observed pageviews</dt><dd>7,912</dd></div>
        <div><dt>Unique visitors</dt><dd>1,115</dd></div>
      </dl>
    </div>
  </header>
  <div class="rguide-traffic-stage">
    <div class="rguide-traffic-plot">
      <div class="rguide-traffic-axis" aria-hidden="true"><span>8,000</span><span>6,000</span><span>4,000</span><span>2,000</span><span>0</span></div>
      <svg class="rguide-traffic-svg" viewBox="0 0 1000 300" preserveAspectRatio="none" role="img" aria-labelledby="rg-chart-title rg-chart-description">
        <title id="rg-chart-title">Recorded pageviews</title>
        <desc id="rg-chart-description">Cumulative pageviews rise from zero on April 27 to 7,912 on August 10, 2026. This is the latest saved analytics snapshot, not a projection.</desc>
        <defs><linearGradient id="rg-chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#f03a22" stop-opacity=".2" /><stop offset="100%" stop-color="#f03a22" stop-opacity="0" /></linearGradient></defs>
        <path class="rg-chart-grid" d="M 0 0 H 1000" />
        <path class="rg-chart-grid" d="M 0 75 H 1000" />
        <path class="rg-chart-grid" d="M 0 150 H 1000" />
        <path class="rg-chart-grid" d="M 0 225 H 1000" />
        <path class="rg-chart-grid" d="M 0 300 H 1000" />
        <path d="M 0.00 300.00 L 66.67 255.90 L 133.33 209.25 L 200.00 198.64 L 266.67 155.17 L 333.33 134.96 L 400.00 125.32 L 466.67 108.97 L 533.33 92.21 L 600.00 77.44 L 666.67 71.14 L 733.33 42.34 L 800.00 24.00 L 866.67 20.44 L 933.33 10.88 L 1000.00 3.30 L 1000 300 L 0 300 Z" fill="url(#rg-chart-fill)" />
        <path class="rg-chart-line" d="M 0.00 300.00 L 66.67 255.90 L 133.33 209.25 L 200.00 198.64 L 266.67 155.17 L 333.33 134.96 L 400.00 125.32 L 466.67 108.97 L 533.33 92.21 L 600.00 77.44 L 666.67 71.14 L 733.33 42.34 L 800.00 24.00 L 866.67 20.44 L 933.33 10.88 L 1000.00 3.30" />
        <path class="rg-chart-dot" d="M 0.00 300.00 h 0.01" tabindex="0" role="img" aria-label="Apr 27: 0 pageviews"><title>Apr 27: 0 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 66.67 255.90 h 0.01" tabindex="0" role="img" aria-label="May 04: 1,176 pageviews"><title>May 04: 1,176 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 133.33 209.25 h 0.01" tabindex="0" role="img" aria-label="May 11: 2,420 pageviews"><title>May 11: 2,420 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 200.00 198.64 h 0.01" tabindex="0" role="img" aria-label="May 18: 2,703 pageviews"><title>May 18: 2,703 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 266.67 155.17 h 0.01" tabindex="0" role="img" aria-label="May 25: 3,862 pageviews"><title>May 25: 3,862 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 333.33 134.96 h 0.01" tabindex="0" role="img" aria-label="Jun 01: 4,401 pageviews"><title>Jun 01: 4,401 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 400.00 125.32 h 0.01" tabindex="0" role="img" aria-label="Jun 08: 4,658 pageviews"><title>Jun 08: 4,658 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 466.67 108.97 h 0.01" tabindex="0" role="img" aria-label="Jun 15: 5,094 pageviews"><title>Jun 15: 5,094 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 533.33 92.21 h 0.01" tabindex="0" role="img" aria-label="Jun 22: 5,541 pageviews"><title>Jun 22: 5,541 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 600.00 77.44 h 0.01" tabindex="0" role="img" aria-label="Jun 29: 5,935 pageviews"><title>Jun 29: 5,935 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 666.67 71.14 h 0.01" tabindex="0" role="img" aria-label="Jul 06: 6,103 pageviews"><title>Jul 06: 6,103 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 733.33 42.34 h 0.01" tabindex="0" role="img" aria-label="Jul 13: 6,871 pageviews"><title>Jul 13: 6,871 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 800.00 24.00 h 0.01" tabindex="0" role="img" aria-label="Jul 20: 7,360 pageviews"><title>Jul 20: 7,360 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 866.67 20.44 h 0.01" tabindex="0" role="img" aria-label="Jul 27: 7,455 pageviews"><title>Jul 27: 7,455 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 933.33 10.88 h 0.01" tabindex="0" role="img" aria-label="Aug 03: 7,710 pageviews"><title>Aug 03: 7,710 cumulative pageviews</title></path>
        <path class="rg-chart-dot" d="M 1000.00 3.30 h 0.01" tabindex="0" role="img" aria-label="Aug 10: 7,912 pageviews"><title>Aug 10: 7,912 cumulative pageviews</title></path>
      </svg>
      <div class="rguide-traffic-dates" aria-hidden="true"><span>Apr 27, 2026</span><span>Jun 15</span><span>Aug 10, 2026</span></div>
    </div>
    <p class="rguide-analytics-note">The line shows cumulative pageviews. Unique visitors are reported separately for the same period.</p>
  </div>
  <figcaption>
    <span class="rguide-traffic-key"><i aria-hidden="true"></i> Recorded pageviews</span>
    <span>Source: saved Vercel Web Analytics snapshot, April to August 2026</span>
  </figcaption>
</figure>
  </div>
</section>
<div class="rg-reflection">
  <p class="rg-eyebrow">What I took from the project</p>
  <h3>The experience depends on what sits behind it.</h3>
  <div>
    <ul>
      <li>Building RGuide made one thing clear to me: the interface cannot do its job alone.</li>
      <li>A filter is only useful if the information behind it supports the choice.</li>
      <li>A guide is only dependable if its details can be maintained.</li>
    </ul>
    <p>The most valuable work was getting those decisions to support each other. It gave me a platform I could keep developing, with a clear relationship between what someone sees and how it is managed.</p>
  </div>
</div>
<section class="rguide-closing-film" aria-labelledby="rguide-closing-film-title">
  <header>
    <div>
      <span>See it in use</span>
      <h3 id="rguide-closing-film-title">From the world to a street</h3>
    </div>
    <div class="rguide-closing-hierarchy">
      <span>A closer look</span>
      <p>The walkthrough follows one journey into Barcelona. Each step brings the choice closer without losing its place on the map.</p>
      <p class="rguide-hierarchy-path" aria-label="World to continent to country to city to neighborhood to guide">
        <b>World</b><i aria-hidden="true">→</i><b>Continent</b><i aria-hidden="true">→</i><b>Country</b><i aria-hidden="true">→</i><b>City</b><i aria-hidden="true">→</i><b>Neighborhood</b><i aria-hidden="true">→</i><b>Guide</b>
      </p>
    </div>
  </header>
  <figure>
    <video
      muted
      loop
      playsinline
      controls
      preload="metadata"
      poster="/Projects/RGuide/rguide-walkthrough-poster.jpg"
      aria-label="RGuide walkthrough from the world map through Europe, Spain, Barcelona neighborhoods, and a selected Gràcia guide"
    >
      <source src="/Projects/RGuide/rguide-walkthrough.webm" type="video/webm" />
      <source src="/Projects/RGuide/rguide-walkthrough.mp4" type="video/mp4" />
    </video>
  </figure>
  <ol class="rguide-journey" aria-label="Walkthrough journey summary">
    <li>
      <span>01</span>
      <small>Orient</small>
      <strong>World</strong>
      <p>Start with the places covered by the platform.</p>
    </li>
    <li>
      <span>02</span>
      <small>Focus</small>
      <strong>Europe</strong>
      <p>Choose a part of the world to explore.</p>
    </li>
    <li>
      <span>03</span>
      <small>Narrow</small>
      <strong>Spain</strong>
      <p>Find a city within the country.</p>
    </li>
    <li>
      <span>04</span>
      <small>Explore</small>
      <strong>Barcelona</strong>
      <p>See the city alongside its guides.</p>
    </li>
    <li>
      <span>05</span>
      <small>Understand</small>
      <strong>Neighborhoods</strong>
      <p>Look more closely at a neighborhood.</p>
    </li>
    <li>
      <span>06</span>
      <small>Act</small>
      <strong>Selected guide</strong>
      <p>Open a guide and follow its places on the map.</p>
    </li>
  </ol>
</section>
<footer class="rg-case-end">
  <p>Explore it for yourself.</p>
  <a href="https://www.rguide.co" target="_blank" rel="noreferrer">Visit RGuide <span aria-hidden="true">↗</span></a>
  <a href="/#work">Back to selected work <span aria-hidden="true">↗</span></a>
</footer>

<style>
  .rguide-opening {
    display: grid;
    gap: clamp(1.5rem, 4vw, 3.5rem);
    padding-bottom: clamp(1rem, 3vw, 2rem);
  }

  .rguide-impact header > span,
  .rguide-impact-data span,
  .rguide-impact footer,
  .rguide-opening-lower a,
  .rguide-build-signals span {
    font-size: 0.62rem;
    font-weight: 800;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .rguide-opening-lower {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(12rem, 0.6fr);
    gap: 2rem;
    align-items: stretch;
    padding-top: 1rem;
    border-top: var(--rule);
  }

  .project-content .rguide-opening-lower p {
    max-width: 43rem;
    margin: 0;
    font-size: clamp(1rem, 1.45vw, 1.2rem);
    line-height: 1.6;
  }

  .rguide-opening-lower a {
    display: inline-flex;
    min-width: 13.5rem;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    flex-direction: column;
    gap: 0.85rem;
    align-items: flex-start;
    justify-content: space-between;
    align-self: stretch;
    justify-self: end;
    padding: 0.85rem 0.9rem;
    color: var(--ink);
    background: transparent;
    border: 1px solid var(--ink);
    box-shadow: 0.35rem 0.35rem 0 var(--signal);
    text-decoration: none;
    transition:
      color 240ms ease,
      box-shadow 240ms cubic-bezier(0.2, 0.8, 0.2, 1),
      transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .rguide-live-link::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: var(--signal);
    clip-path: polygon(0 0, 0 0, 0 0);
    transition: clip-path 520ms cubic-bezier(0.76, 0, 0.24, 1);
  }

  .rguide-live-link > span {
    position: relative;
    z-index: 1;
    line-height: 1.25;
  }

  .rguide-live-link .material-symbols-outlined {
    display: grid;
    position: relative;
    z-index: 1;
    width: 4.5rem;
    height: 4.5rem;
    place-items: center;
    color: var(--signal);
    font-size: 3.9rem;
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    letter-spacing: 0;
    line-height: 1;
    text-transform: none;
    transition:
      color 220ms ease,
      transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .rguide-live-link:hover,
  .rguide-live-link:focus-visible {
    color: #fff;
    box-shadow: 0.55rem 0.55rem 0 #09090b;
    transform: translate(-0.18rem, -0.18rem);
  }

  .rguide-live-link:hover::before,
  .rguide-live-link:focus-visible::before {
    clip-path: polygon(0 0, 200% 0, 0 200%);
  }

  .rguide-live-link:focus-visible {
    outline: 3px solid var(--signal);
    outline-offset: 3px;
  }

  .rguide-live-link:hover .material-symbols-outlined,
  .rguide-live-link:focus-visible .material-symbols-outlined {
    color: #fff;
    transform: translate(0.28rem, -0.28rem) rotate(3deg) scale(1.06);
  }

  .rguide-live-link:active {
    box-shadow: 0.15rem 0.15rem 0 var(--signal);
    transform: translate(0.08rem, 0.08rem);
  }

  .rguide-build-signals {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: var(--rule);
  }

  .rguide-build-signals > div {
    display: grid;
    gap: 0.45rem;
    padding: 0.9rem 1rem 0.9rem 0;
    border-right: var(--rule);
  }

  .rguide-build-signals > div:not(:first-child) {
    padding-left: 1rem;
  }

  .rguide-build-signals > div:last-child {
    border-right: 0;
  }

  .rguide-build-signals strong {
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2vw, 1.8rem);
    line-height: 1;
    letter-spacing: -0.05em;
  }

  .rguide-build-signals span {
    color: #71717a;
  }

  .rguide-impact {
    position: relative;
    min-height: 31rem;
    overflow: hidden;
    padding: clamp(1.2rem, 3vw, 2rem);
    color: #f4f0e7;
    background: #09090b;
    isolation: isolate;
  }

  .rguide-impact::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    opacity: 0.3;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px);
    background-size: 4rem 4rem;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 45%, #000);
    mask-image: linear-gradient(90deg, transparent, #000 45%, #000);
  }

  .rguide-impact header {
    position: relative;
    z-index: 2;
    display: grid;
    max-width: 31rem;
    gap: 0.45rem;
  }

  .rguide-impact header > span {
    color: var(--signal);
  }

  .rguide-impact header > strong {
    margin-top: 1rem;
    font-family: var(--font-display);
    font-size: clamp(4.5rem, 11vw, 9rem);
    font-weight: 700;
    line-height: 0.72;
    letter-spacing: -0.09em;
    text-transform: uppercase;
  }

  .rguide-impact header > .rguide-impact-title {
    max-width: 8ch;
    font-size: clamp(3.2rem, 7.4vw, 6.5rem);
    line-height: 0.78;
  }

  .project-content .rguide-impact header > p {
    max-width: 18rem;
    color: rgba(244, 240, 231, 0.62);
    font-size: 0.82rem;
    line-height: 1.45;
  }

  .rguide-city-map {
    position: absolute;
    top: 1.4rem;
    right: 1.4rem;
    z-index: 1;
    width: min(62%, 38rem);
    aspect-ratio: 2 / 1;
    clip-path: inset(0 0 18% 0);
  }

  .rguide-city-map img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0.58;
    object-fit: fill;
  }

  .rguide-city-map i {
    position: absolute;
    top: var(--y);
    left: var(--x);
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 50%;
    background: var(--signal);
    box-shadow: 0 0 0 0.04rem rgba(240, 58, 34, 0.18);
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }

  .rguide-impact.is-visible .rguide-city-map i {
    animation: rguide-city-in 520ms cubic-bezier(0.22, 1, 0.36, 1) var(--delay) both;
  }

  .rguide-impact-data {
    position: absolute;
    right: clamp(1.2rem, 3vw, 2rem);
    bottom: 3.8rem;
    left: clamp(1.2rem, 3vw, 2rem);
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    border-top: 1px solid rgba(244, 240, 231, 0.42);
  }

  .rguide-impact-data > div {
    display: grid;
    gap: 0.45rem;
    padding: 0.9rem 0.7rem 0 0;
  }

  .rguide-impact-data strong {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 2.6vw, 2.4rem);
    line-height: 0.9;
    letter-spacing: -0.055em;
  }

  .rguide-impact-data span {
    color: rgba(244, 240, 231, 0.52);
    line-height: 1.3;
  }

  .rguide-impact footer {
    position: absolute;
    right: clamp(1.2rem, 3vw, 2rem);
    bottom: 1.1rem;
    left: clamp(1.2rem, 3vw, 2rem);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(244, 240, 231, 0.5);
  }

  .rguide-impact footer span {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: var(--signal);
    box-shadow: 0 0 0 0 rgba(240, 58, 34, 0.5);
    animation: rguide-pulse 2.2s ease-out infinite;
  }

  .rguide-impact footer b {
    font: inherit;
  }

  .rguide-impact footer small {
    margin-left: auto;
    color: rgba(244, 240, 231, 0.36);
    font-size: 0.48rem;
    letter-spacing: 0.04em;
    text-transform: none;
  }

  .rguide-impact footer a {
    color: inherit;
  }

  .rguide-product-shot {
    margin: 0;
    overflow: hidden;
    border: var(--rule);
    background: #09090b;
  }

  .rguide-product-shot img {
    width: 100%;
    height: auto;
    margin: 0;
  }

  .rguide-product-shot figcaption {
    padding: 0.75rem 0.9rem;
    color: #f4f0e7;
    background: #09090b;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .rguide-online-mockup {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
  }

  .rguide-design-system {
    container-type: inline-size;
    border-bottom: var(--rule);
  }

  .rguide-ds-intro {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2rem;
    align-items: start;
    padding: clamp(1.5rem, 3cqw, 2.5rem) 0;
  }

  .rguide-ds-intro > div {
    display: grid;
    gap: 0.6rem;
  }

  .rguide-ds-intro span,
  .rguide-ds-sheet-header span,
  .rguide-ds-sheet-header small,
  .rguide-ds-specimen figcaption small {
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 0.09em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  .rguide-ds-intro span,
  .rguide-ds-sheet-header span {
    color: var(--signal);
  }

  .project-content .rguide-ds-intro h3 {
    max-width: none;
    margin: 0;
    font-family: var(--font-display);
    font-size: var(--rguide-type-display);
    font-weight: var(--rguide-weight-heading);
    line-height: var(--rguide-leading-display);
    letter-spacing: var(--rguide-tracking-display);
    white-space: nowrap;
  }

  .project-content .rguide-ds-intro > p {
    max-width: 64rem;
    margin: 0;
    color: #5f5d57;
    font-size: clamp(0.82rem, 1.25cqw, 1rem);
    line-height: 1.55;
  }

  .rguide-ds-sheet {
    border-top: var(--rule);
  }

  .rguide-ds-sheet-header {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 1.25rem;
    align-items: baseline;
    padding: 0.9rem 0;
    border-bottom: 1px solid rgba(9, 9, 11, 0.18);
  }

  .project-content .rguide-ds-sheet-header h4 {
    margin: 0;
    font-family: var(--font-display);
    font-size: var(--rguide-type-section-title);
    font-weight: var(--rguide-weight-heading);
    line-height: var(--rguide-leading-heading);
    letter-spacing: var(--rguide-tracking-heading);
    text-transform: none;
  }

  .rguide-ds-sheet-header small {
    color: #71717a;
  }

  .rguide-ds-foundations,
  .rguide-ds-components {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: clamp(3rem, 6cqw, 6rem) clamp(1.5rem, 3.5cqw, 3.5rem);
    padding: clamp(3rem, 6cqw, 6rem) 0 clamp(3.5rem, 7cqw, 7rem);
  }

  .rguide-ds-wireframes {
    display: grid;
    gap: clamp(4rem, 8cqw, 7rem);
    padding: clamp(3rem, 6cqw, 6rem) 0 clamp(4rem, 8cqw, 7rem);
  }

  .rguide-ds-sheet--structure .rguide-ds-sheet-header {
    padding-bottom: 0.25rem;
    border-bottom: 1px solid rgba(9, 9, 11, 0.18);
  }

  .rguide-ds-sheet--structure .rguide-ds-wireframes {
    padding-top: 0.75rem;
  }

  .rguide-ds-sheet--structure .rguide-ds-specimen--home-shell > figcaption {
    padding-top: 0;
    border-top: 0;
  }

  .rguide-ds-layout-theory,
  .rguide-ds-guide-theory {
    --guide-annotation-gap: clamp(2rem, 4cqw, 4rem);
    display: grid;
    grid-template-columns: minmax(13rem, 0.34fr) minmax(0, 0.66fr);
    gap: var(--guide-annotation-gap);
    align-items: stretch;
  }

  .rguide-ds-guide-theory > .rguide-ds-theory-key {
    grid-template-rows: 7rem 6rem minmax(14rem, 1fr) 11rem;
    height: 100%;
  }

  .rguide-ds-guide-theory > .rguide-ds-theory-key li {
    position: relative;
    align-content: center;
  }

  .rguide-ds-guide-theory > .rguide-ds-theory-key li::after {
    position: absolute;
    top: 50%;
    left: 100%;
    width: var(--guide-annotation-gap);
    height: 1px;
    content: "";
    background: rgba(240, 58, 34, 0.72);
  }

  .rguide-ds-guide-theory > .rguide-ds-theory-key li::before {
    position: absolute;
    z-index: 1;
    top: calc(50% - 0.22rem);
    right: -0.35rem;
    width: 0;
    height: 0;
    content: "";
    border-top: 0.22rem solid transparent;
    border-right: 0.35rem solid var(--signal);
    border-bottom: 0.22rem solid transparent;
  }

  .rguide-ds-home-wireframe {
    --wf-line: rgba(9, 9, 11, 0.54);
    --wf-soft: rgba(9, 9, 11, 0.1);
    display: grid;
    position: relative;
    grid-template-columns: minmax(7rem, 0.28fr) minmax(8rem, 0.32fr) minmax(10rem, 0.4fr);
    min-height: 29rem;
    overflow: visible;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid var(--wf-line);
    box-shadow: 0 1.5rem 3.5rem rgba(9, 9, 11, 0.08);
  }

  .rguide-ds-home-nav,
  .rguide-ds-home-map,
  .rguide-ds-home-index,
  .rguide-ds-home-cards,
  .rguide-ds-home-index nav {
    position: relative;
  }

  .rguide-ds-home-nav {
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 1.15rem;
    padding: 2.45rem 0.9rem 0.9rem;
    border-right: 1px solid var(--wf-line);
  }

  .rguide-ds-wf-label {
    color: rgba(9, 9, 11, 0.6);
    font-size: 0.46rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    line-height: 1.25;
    text-transform: uppercase;
  }

  .rguide-ds-home-heading {
    display: grid;
    gap: 0.45rem;
  }

  .rguide-ds-home-heading i,
  .rguide-ds-home-cards article small,
  .rguide-ds-home-cards article b {
    display: block;
    background: rgba(9, 9, 11, 0.22);
  }

  .rguide-ds-home-heading i:first-child { width: 82%; height: 1rem; background: rgba(9, 9, 11, 0.72); }
  .rguide-ds-home-heading i:last-child { width: 58%; height: 0.36rem; }

  .rguide-ds-home-rows {
    display: grid;
    align-content: start;
  }

  .rguide-ds-home-rows > span {
    display: grid;
    grid-template-columns: 1.25rem minmax(0, 1fr);
    gap: 0.65rem;
    align-items: center;
    min-height: 4.2rem;
    border-top: 1px solid var(--wf-line);
  }

  .rguide-ds-home-rows > span:last-child { border-bottom: 1px solid var(--wf-line); }

  .rguide-ds-home-rows > span > i {
    display: block;
    width: 1.15rem;
    height: 1.15rem;
    border: 1px solid var(--wf-line);
  }

  .rguide-ds-home-rows em {
    display: grid;
    gap: 0.38rem;
    font-style: normal;
  }

  .rguide-ds-home-rows b,
  .rguide-ds-home-rows small {
    display: block;
    height: 0.38rem;
    background: rgba(9, 9, 11, 0.22);
  }

  .rguide-ds-home-rows b { width: 74%; background: rgba(9, 9, 11, 0.6); }
  .rguide-ds-home-rows small { width: 52%; }

  .rguide-ds-home-map {
    overflow: hidden;
    padding: 2.45rem 0.85rem 0.85rem;
    background: rgba(9, 9, 11, 0.025);
    border-right: 1px solid var(--wf-line);
  }

  .rguide-ds-home-map > .rguide-ds-wf-label {
    position: absolute;
    top: 0.7rem;
    left: 0.85rem;
  }

  .rguide-ds-map-streets {
    position: absolute;
    inset: 2.45rem 0.85rem 0.85rem;
    overflow: hidden;
    border: 1px solid rgba(9, 9, 11, 0.28);
  }

  .rguide-ds-map-streets i {
    position: absolute;
    display: block;
    background: rgba(9, 9, 11, 0.13);
  }

  .rguide-ds-map-streets i:nth-child(1),
  .rguide-ds-map-streets i:nth-child(2),
  .rguide-ds-map-streets i:nth-child(3) {
    top: 0;
    bottom: 0;
    width: 1px;
  }

  .rguide-ds-map-streets i:nth-child(1) { left: 25%; }
  .rguide-ds-map-streets i:nth-child(2) { left: 50%; }
  .rguide-ds-map-streets i:nth-child(3) { left: 75%; }

  .rguide-ds-map-streets i:nth-child(n + 4) {
    right: 0;
    left: 0;
    height: 1px;
  }

  .rguide-ds-map-streets i:nth-child(4) { top: 20%; }
  .rguide-ds-map-streets i:nth-child(5) { top: 40%; }
  .rguide-ds-map-streets i:nth-child(6) { top: 60%; }
  .rguide-ds-map-streets i:nth-child(7) { top: 80%; }

  .rguide-ds-map-controls {
    position: absolute;
    right: 1.15rem;
    bottom: 1.15rem;
    display: grid;
    z-index: 2;
  }

  .rguide-ds-map-controls i {
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,.72);
    border: 1px solid var(--wf-line);
    font-size: 0.7rem;
    font-style: normal;
  }

  .rguide-ds-map-controls i + i {
    margin-top: -1px;
  }

  .rguide-ds-home-map b {
    position: absolute;
    top: var(--y);
    left: var(--x);
    display: inline-flex;
    width: 0.7rem;
    height: 0.7rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: rgba(9, 9, 11, 0.68);
    border: 0.12rem solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(9,9,11,.25);
  }

  .rguide-ds-home-index {
    display: grid;
    grid-template-rows: 5rem 4.5rem 1fr;
  }

  .rguide-ds-home-index > header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.45rem 0.8rem;
    align-content: center;
    padding: 0.8rem 1rem;
    border-bottom: 1px solid var(--wf-line);
  }

  .rguide-ds-home-index > header > .rguide-ds-wf-label { grid-column: 1 / -1; }

  .rguide-ds-home-index > header > div {
    display: grid;
    gap: 0.4rem;
  }

  .rguide-ds-home-index > header > div i {
    display: block;
    height: 0.34rem;
    background: rgba(9,9,11,.2);
  }

  .rguide-ds-home-index > header > div i:first-child { width: 78%; height: 0.75rem; background: rgba(9,9,11,.68); }
  .rguide-ds-home-index > header > div i:last-child { width: 46%; }

  .rguide-ds-home-index > header > span {
    display: flex;
    gap: 0.35rem;
  }

  .rguide-ds-home-index > header > span i,
  .rguide-ds-home-cards article > em i {
    display: block;
    width: 1.35rem;
    height: 1.35rem;
    border: 1px solid var(--wf-line);
    border-radius: 50%;
  }

  .rguide-ds-home-index nav {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 0.45rem;
    padding: 0.62rem 0.65rem;
    border-bottom: 1px solid var(--wf-line);
  }

  .rguide-ds-home-index nav > small {
    color: rgba(9, 9, 11, 0.6);
    font-size: 0.42rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .rguide-ds-home-index nav > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .rguide-ds-home-index nav > div i {
    min-height: 1.35rem;
    border: 1px solid var(--wf-line);
    border-right: 0;
  }

  .rguide-ds-home-index nav > div i:last-child {
    border-right: 1px solid var(--wf-line);
  }

  .rguide-ds-home-cards {
    display: grid;
    gap: 0.75rem;
    align-content: start;
    padding: 2.65rem 0.8rem 0.8rem;
  }

  .rguide-ds-home-cards > .rguide-ds-wf-label {
    position: absolute;
    top: 0.75rem;
    left: 0.8rem;
  }

  .rguide-ds-home-cards article {
    display: grid;
    grid-template-columns: 3rem minmax(0, 1fr) auto;
    min-height: 5.1rem;
    border: 1px solid var(--wf-line);
  }

  .rguide-ds-home-cards article > figure {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    color: rgba(9,9,11,.32);
    background: repeating-linear-gradient(135deg, transparent 0 0.55rem, rgba(9,9,11,.045) 0.55rem 1.1rem);
    border-right: 1px solid var(--wf-line);
  }

  .rguide-ds-home-cards article > figure i { font-size: 1rem; }

  .rguide-ds-home-cards article > span {
    display: grid;
    gap: 0.45rem;
    align-content: center;
    padding: 0.65rem;
  }

  .rguide-ds-home-cards article > em {
    display: flex;
    gap: 0.25rem;
    align-items: start;
    padding: 0.55rem 0.45rem 0 0;
    font-style: normal;
  }

  .rguide-ds-home-cards article > em i {
    width: 1rem;
    height: 1rem;
  }

  .rguide-ds-home-cards article b { width: 82%; height: 0.52rem; background: rgba(9,9,11,.62); }
  .rguide-ds-home-cards article small { width: 55%; height: 0.25rem; }
  .rguide-ds-home-cards article small:last-child { width: 70%; }

  .rguide-ds-product-proof {
    display: grid;
    gap: clamp(3rem, 6cqw, 5rem);
    padding: clamp(3rem, 6cqw, 5rem) 0 clamp(4rem, 8cqw, 7rem);
  }

  .rguide-ds-sheet--proof .rguide-ds-sheet-header {
    padding-bottom: 0.25rem;
  }

  .rguide-ds-sheet--proof .rguide-ds-product-proof {
    padding-top: 0.75rem;
  }

  .rguide-ds-sheet--proof .rguide-ds-product-view:first-child figcaption {
    padding-top: 0;
    border-top: 0;
  }

  .project-content .rguide-ds-product-view {
    display: grid;
    gap: 1rem;
    margin: 0;
  }

  .rguide-ds-product-view figcaption {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.7rem;
    align-items: start;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(9,9,11,.28);
  }

  .rguide-ds-product-view figcaption > b {
    color: var(--signal);
    font-family: var(--font-display);
    font-size: 0.66rem;
  }

  .rguide-ds-product-view figcaption > span {
    display: grid;
    gap: 0.2rem;
  }

  .rguide-ds-product-view figcaption strong {
    font-size: 0.72rem;
    text-transform: uppercase;
  }

  .rguide-ds-product-view figcaption small {
    color: #71717a;
    font-size: 0.52rem;
    font-weight: 800;
    letter-spacing: 0.09em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  .rguide-ds-product-view img {
    display: block;
    width: 100%;
    height: auto;
    background: #09090b;
  }

  .rguide-ds-product-zoom {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    background: #09090b;
    box-shadow: 0 1.5rem 3rem rgba(9,9,11,.12);
    color: #fff;
    cursor: zoom-in;
    font: inherit;
    text-align: left;
  }

  .rguide-ds-product-zoom:focus-visible {
    outline: 3px solid var(--signal);
    outline-offset: 4px;
  }

  .project-content .rguide-ds-specimen {
    display: grid;
    min-width: 0;
    gap: clamp(1.5rem, 3cqw, 2.5rem);
    align-content: start;
    margin: 0;
  }

  .rguide-ds-specimen figcaption {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.65rem;
    align-items: start;
    padding-top: 0.7rem;
    border-top: 1px solid rgba(9, 9, 11, 0.28);
  }

  .rguide-ds-specimen figcaption > b {
    color: var(--signal);
    font-family: var(--font-display);
    font-size: 0.66rem;
    line-height: 1.2;
  }

  .rguide-ds-specimen figcaption > span {
    display: grid;
    gap: 0.22rem;
  }

  .rguide-ds-specimen figcaption strong {
    font-size: 0.72rem;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .rguide-ds-specimen figcaption small {
    color: #71717a;
    font-size: 0.49rem;
  }

  .rguide-ds-specimen--categories { grid-column: span 7; }
  .rguide-ds-specimen--actions { grid-column: span 5; }
  .rguide-ds-specimen--markers { grid-column: span 4; }
  .rguide-ds-specimen--route { grid-column: span 8; }
  .rguide-ds-specimen--sources { grid-column: 3 / span 8; }

  .rguide-ds-category-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem 1rem;
  }

  .rguide-ds-category-list > span {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.15rem 0.5rem;
    align-items: center;
    min-width: 0;
    padding: 0.65rem 0;
    border-bottom: 0.18rem solid var(--category);
  }

  .rguide-ds-category-list .material-symbols-outlined {
    grid-row: 1 / span 2;
    color: var(--category);
    font-size: 1.35rem;
  }

  .rguide-ds-category-list b {
    font-size: 0.66rem;
    line-height: 1;
    text-transform: uppercase;
  }

  .rguide-ds-category-list small {
    color: #71717a;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.48rem;
  }

  .rguide-ds-actions,
  .rguide-ds-markers {
    display: flex;
    min-height: 6rem;
    gap: clamp(0.55rem, 1.2cqw, 1rem);
    align-items: center;
    justify-content: center;
  }

  .rguide-ds-actions button,
  .rguide-ds-guide-actions button {
    display: inline-flex;
    width: 2.6rem;
    height: 2.6rem;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: #111827;
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid #d5d8df;
    border-radius: 50%;
    box-shadow: 0 0.45rem 1rem rgba(9, 9, 11, 0.08);
    font: inherit;
  }

  .rguide-ds-actions button.is-active {
    color: #fff;
    background: var(--signal);
    border-color: var(--signal);
  }

  .rguide-ds-actions button.rguide-ds-action-square {
    margin-left: 0.65rem;
    color: #fff;
    background: #09090b;
    border-color: #09090b;
    border-radius: 0.25rem;
  }

  .rguide-ds-actions .material-symbols-outlined,
  .rguide-ds-guide-actions .material-symbols-outlined {
    font-size: 1.15rem;
  }

  .rguide-ds-marker {
    display: inline-flex;
    width: 2.35rem;
    height: 2.35rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: var(--marker);
    border: 0.2rem solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(9, 9, 11, 0.2), 0 0.55rem 1.1rem rgba(9, 9, 11, 0.15);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.68rem;
    font-weight: 800;
  }

  .rguide-ds-marker.is-selected {
    transform: scale(1.2);
    box-shadow: 0 0 0 0.22rem color-mix(in srgb, var(--marker) 28%, transparent);
  }

  .rguide-ds-marker--nested {
    width: 2rem;
    height: 2rem;
    margin-left: 0.8rem;
    background: #c2410c;
    border: 0;
    border-radius: 0;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }

  .rguide-ds-route {
    display: flex;
    min-height: 6rem;
    flex-wrap: wrap;
    gap: 0.65rem;
    align-items: center;
    justify-content: center;
    font-size: clamp(0.68rem, 1.2cqw, 0.85rem);
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .rguide-ds-route i {
    color: var(--signal);
    font-style: normal;
  }

  .rguide-ds-route strong {
    padding: 0.48rem 0.65rem;
    color: #fff;
    background: #09090b;
  }

  .rguide-ds-source-row {
    display: grid;
    grid-template-columns: auto 2.25rem auto minmax(0, 1fr) auto;
    gap: 0.7rem;
    align-items: center;
    min-height: 5rem;
    padding: 0.85rem 1rem;
    background: rgba(255, 255, 255, 0.58);
    border-top: 1px solid #d5d8df;
    border-bottom: 1px solid #d5d8df;
  }

  .rguide-ds-source-row > span {
    color: #6b7280;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.56rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .rguide-ds-source-row > i:not(.material-symbols-outlined) {
    height: 1px;
    background: #d5d8df;
  }

  .rguide-ds-source-row > div { display: flex; }

  .rguide-ds-source-row > div b {
    display: inline-flex;
    width: 1.45rem;
    height: 1.45rem;
    align-items: center;
    justify-content: center;
    margin-left: -0.15rem;
    color: #111827;
    background: #fff;
    border: 1px solid #d5d8df;
    font-size: 0.56rem;
  }

  .rguide-ds-source-row > div b:first-child {
    margin-left: 0;
    color: var(--signal);
  }

  .rguide-ds-source-row > strong {
    min-width: 0;
    overflow: hidden;
    color: #374151;
    font-size: 0.68rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .rguide-ds-source-row .material-symbols-outlined {
    color: #9ca3af;
    font-size: 1rem;
  }

  .rguide-ds-specimen--destination { grid-column: span 4; }
  .rguide-ds-specimen--filter { grid-column: span 8; }
  .rguide-ds-specimen--guide-shell { grid-column: 1 / -1; }

  .rguide-ds-destination {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 0.8rem;
    align-items: center;
    min-height: 6.4rem;
    padding: 1rem 1.1rem;
    color: #fff;
    background: #101010;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.13);
    font: inherit;
    text-align: left;
  }

  .rguide-ds-destination > .material-symbols-outlined:first-child { font-size: 2.1rem; }
  .rguide-ds-destination > .material-symbols-outlined:last-child { color: rgba(255,255,255,.4); font-size: 1.25rem; }
  .rguide-ds-destination span { display: grid; gap: 0.25rem; }
  .rguide-ds-destination strong { font-size: 1rem; }
  .rguide-ds-destination small { color: rgba(255,255,255,.62); font-size: 0.68rem; }

  .rguide-ds-filter {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    min-height: 6.4rem;
    border-top: 1px solid #d5d8df;
    border-bottom: 1px solid #d5d8df;
  }

  .rguide-ds-filter button {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    color: #111827;
    background: rgba(255, 255, 255, 0.58);
    border: 0;
    border-right: 1px solid #d5d8df;
    font: inherit;
    font-size: 0.62rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .rguide-ds-filter button:last-child { border-right: 0; }
  .rguide-ds-filter button.is-active { color: #fff; background: #f59e0b; }
  .rguide-ds-filter .material-symbols-outlined { font-size: 1.15rem; }

  .rguide-ds-guide-card {
    overflow: hidden;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #d5d8df;
    border-top: 0.28rem solid #f59e0b;
    box-shadow: 0 1.75rem 4rem rgba(9, 9, 11, 0.14);
  }

  .rguide-ds-guide-card > header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 1rem;
    align-items: center;
    padding: clamp(1rem, 2cqw, 1.5rem);
    background: #f59e0b;
  }

  .project-content .rguide-ds-guide-card h5 {
    max-width: 34ch;
    margin: 0;
    font-size: clamp(1.15rem, 2.6cqw, 2rem);
    line-height: 1.05;
    letter-spacing: -0.035em;
  }

  .project-content .rguide-ds-guide-card > header p {
    margin: 0.45rem 0 0;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.55rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .rguide-ds-guide-card > header p span { color: #fff; font-weight: 800; }
  .rguide-ds-guide-actions { display: flex; gap: 0.45rem; }
  .rguide-ds-guide-actions button { width: 2.25rem; height: 2.25rem; box-shadow: none; }

  .rguide-ds-related {
    display: grid;
    gap: 0.55rem;
    padding: 0.75rem 1rem;
    color: #fff;
    background: #111827;
  }

  .rguide-ds-related > span {
    font-size: 0.5rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .rguide-ds-related > div { display: flex; gap: 0.45rem; overflow: hidden; }

  .rguide-ds-related b {
    flex: 0 0 auto;
    padding: 0.45rem 0.65rem;
    color: #fff;
    background: #f59e0b;
    font-size: 0.5rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .rguide-ds-guide-body {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 1rem 1.5rem;
    padding: clamp(1rem, 2.5cqw, 2rem);
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(8, 145, 178, 0.11));
  }

  .rguide-ds-description > span,
  .rguide-ds-photo-strip > span {
    color: #6b7280;
    font-size: 0.52rem;
    font-weight: 800;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .project-content .rguide-ds-description p {
    margin: 0.65rem 0 0;
    color: #374151;
    font-size: 0.76rem;
    line-height: 1.55;
  }

  .rguide-ds-photo-strip ol {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.35rem;
    margin: 0.65rem 0 0;
    padding: 0;
    list-style: none;
  }

  .rguide-ds-photo-strip li {
    position: relative;
    min-width: 0;
    aspect-ratio: 1.35;
    overflow: hidden;
    background: #111827;
  }

  .rguide-ds-photo-strip img,
  .rguide-ds-photo-strip li > span { width: 100%; height: 100%; object-fit: cover; }

  .rguide-ds-photo-strip li > span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,.38);
    font-size: 1.2rem;
  }

  .rguide-ds-photo-strip li > b {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    width: 1.2rem;
    height: 1.2rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #f59e0b;
    font-size: 0.52rem;
  }

  .rguide-ds-source-row--card {
    grid-column: 1 / -1;
    min-height: 3.5rem;
    padding-inline: 0;
    background: transparent;
  }

  .rguide-ds-place-card {
    grid-column: 1 / -1;
    display: grid;
    position: relative;
    grid-template-columns: minmax(7rem, 0.65fr) minmax(0, 1.35fr);
    min-height: 11rem;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.88);
    border: 1px solid #d5d8df;
    border-left: 0.24rem solid #f59e0b;
  }

  .rguide-ds-place-card > img {
    width: 100%;
    height: 100%;
    min-height: 11rem;
    object-fit: cover;
  }

  .rguide-ds-place-card > div {
    align-self: center;
    padding: 1.25rem 3.5rem 1.25rem 1.25rem;
  }

  .rguide-ds-place-card > div strong {
    display: inline-block;
    margin-bottom: 0.55rem;
    padding: 0.35rem 0.55rem;
    color: #fff;
    background: #f59e0b;
    font-size: 0.82rem;
  }

  .project-content .rguide-ds-place-card p {
    margin: 0;
    color: #374151;
    font-size: 0.75rem;
    line-height: 1.5;
  }

  .rguide-ds-place-number,
  .rguide-ds-place-price {
    position: absolute;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.62rem;
    font-weight: 800;
  }

  .rguide-ds-place-number {
    top: 0.7rem;
    left: 0.7rem;
    width: 1.65rem;
    height: 1.65rem;
    color: #fff;
    background: #f59e0b;
    border-radius: 0.35rem;
  }

  .rguide-ds-place-price {
    top: 1rem;
    right: 1rem;
    width: 2.15rem;
    height: 2.15rem;
    background: #fff;
    border: 1px solid #d5d8df;
    border-radius: 50%;
  }

  .rguide-ds-guide-theory {
    display: grid;
    grid-template-columns: minmax(13rem, 0.34fr) minmax(0, 0.66fr);
    gap: clamp(2rem, 4cqw, 4rem);
    align-items: start;
  }

  .rguide-ds-theory-key {
    display: grid;
    gap: 0;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .project-content .rguide-ds-theory-key li {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.75rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(9, 9, 11, 0.24);
  }

  .rguide-ds-theory-key li:last-child {
    border-bottom: 1px solid rgba(9, 9, 11, 0.24);
  }

  .rguide-ds-theory-key li > b {
    display: inline-flex;
    width: 1.35rem;
    height: 1.35rem;
    align-items: center;
    justify-content: center;
    color: var(--signal);
    background: #f4f0e7;
    border: 1px solid var(--signal);
    border-radius: 50%;
    font-family: var(--font-display);
    font-size: 0.58rem;
  }

  .rguide-ds-theory-key li > span {
    display: grid;
    gap: 0.32rem;
  }

  .rguide-ds-theory-key strong {
    font-size: 0.7rem;
    text-transform: uppercase;
  }

  .rguide-ds-theory-key small {
    color: #66645f;
    font-size: 0.62rem;
    line-height: 1.45;
  }

  .project-content .rguide-ds-wireframe {
    --wf-line: rgba(9, 9, 11, 0.54);
    --wf-soft: rgba(9, 9, 11, 0.13);
    position: relative;
    overflow: visible;
    margin: 0;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid var(--wf-line);
    box-shadow: 0 1.5rem 3.5rem rgba(9, 9, 11, 0.08);
  }

  .project-content .rguide-ds-callouts {
    position: absolute;
    z-index: 8;
    inset: 0;
    overflow: visible;
    margin: 0;
    padding: 0;
    pointer-events: none;
    list-style: none;
  }

  .project-content .rguide-ds-callouts li {
    position: absolute;
    display: inline-flex;
    width: 1.4rem;
    height: 1.4rem;
    align-items: center;
    justify-content: center;
    margin: 0;
    color: var(--signal);
    background: #f4f0e7;
    border: 1px solid var(--signal);
    border-radius: 50%;
    font-family: var(--font-display);
    font-size: 0.54rem;
    line-height: 1;
  }

  .rguide-ds-callouts--home li {
    top: -1.85rem;
    left: var(--x);
    transform: translateX(-50%);
  }

  .rguide-ds-callouts--home li::after {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 1px;
    height: var(--line, 2.35rem);
    content: "";
    background: var(--signal);
  }

  .rguide-ds-callouts--home li::before {
    position: absolute;
    top: calc(100% + var(--line, 2.35rem) - 0.13rem);
    left: calc(50% - 0.13rem);
    z-index: 1;
    width: 0.26rem;
    height: 0.26rem;
    content: "";
    background: var(--signal);
    border-radius: 50%;
  }

  .rguide-ds-callouts--guide li {
    top: var(--y);
    left: -2.2rem;
    transform: translateY(-50%);
  }

  .rguide-ds-callouts--guide li::after {
    position: absolute;
    top: 50%;
    left: 100%;
    width: 2rem;
    height: 1px;
    content: "";
    background: var(--signal);
  }

  .rguide-ds-callouts--guide li::before {
    position: absolute;
    top: calc(50% - 0.13rem);
    left: calc(100% + 1.87rem);
    z-index: 1;
    width: 0.26rem;
    height: 0.26rem;
    content: "";
    background: var(--signal);
    border-radius: 50%;
  }

  .rguide-ds-wf-number {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: inline-flex;
    width: 1.65rem;
    height: 1.65rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: var(--signal);
    font-family: var(--font-display);
    font-size: 0.58rem;
  }

  .rguide-ds-wf-identity {
    display: grid;
    position: relative;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 1rem;
    align-items: center;
    min-height: 7rem;
    padding: 1.35rem;
    border-bottom: 1px solid var(--wf-line);
  }

  .rguide-ds-wf-title {
    display: grid;
    gap: 0.6rem;
  }

  .rguide-ds-wf-title i {
    display: block;
    height: 1rem;
    background: rgba(9, 9, 11, 0.72);
  }

  .rguide-ds-wf-title i:first-child {
    width: min(92%, 28rem);
    height: 1.3rem;
  }

  .rguide-ds-wf-title i:last-child {
    width: min(58%, 17rem);
    height: 0.42rem;
    background: rgba(9, 9, 11, 0.3);
  }

  .rguide-ds-wf-actions {
    display: flex;
    gap: 0.45rem;
  }

  .rguide-ds-wf-actions i,
  .rguide-ds-wf-place-actions i {
    display: block;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: 1px solid var(--wf-line);
    border-radius: 50%;
  }

  .rguide-ds-wf-related {
    display: grid;
    position: relative;
    gap: 0.65rem;
    min-height: 6rem;
    padding: 1rem 1.25rem;
    background: var(--wf-soft);
    border-bottom: 1px solid var(--wf-line);
  }

  .rguide-ds-wf-related > small,
  .rguide-ds-wf-context small {
    color: rgba(9, 9, 11, 0.6);
    font-size: 0.48rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .rguide-ds-wf-related > div {
    display: flex;
    gap: 0.45rem;
    overflow: hidden;
  }

  .rguide-ds-wf-related > div i {
    display: block;
    width: 6.5rem;
    height: 1.55rem;
    flex: 0 0 auto;
    border: 1px solid var(--wf-line);
  }

  .rguide-ds-wf-context {
    display: grid;
    position: relative;
    grid-template-columns: minmax(0, 1fr) minmax(10rem, 0.56fr);
    gap: 1.5rem;
    padding: 1.5rem 1.25rem 1.25rem;
    border-bottom: 1px solid var(--wf-line);
  }

  .rguide-ds-wf-context-copy,
  .rguide-ds-wf-proof,
  .rguide-ds-wf-stops {
    display: grid;
    gap: 0.55rem;
    align-content: start;
  }

  .rguide-ds-wf-context-copy > i {
    display: block;
    height: 0.48rem;
    background: rgba(9, 9, 11, 0.2);
  }

  .rguide-ds-wf-context-copy > i:nth-of-type(1) { width: 96%; }
  .rguide-ds-wf-context-copy > i:nth-of-type(2) { width: 88%; }
  .rguide-ds-wf-context-copy > i:nth-of-type(3) { width: 92%; }
  .rguide-ds-wf-context-copy > i:nth-of-type(4) { width: 62%; }

  .rguide-ds-wf-proof > span {
    display: flex;
    gap: 0.3rem;
  }

  .rguide-ds-wf-proof > span i {
    display: block;
    width: 1.45rem;
    height: 1.45rem;
    border: 1px solid var(--wf-line);
  }

  .rguide-ds-wf-stops {
    grid-column: 1 / -1;
    margin-top: 0.65rem;
  }

  .rguide-ds-wf-stops ol {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 0.4rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .rguide-ds-wf-stops li {
    display: flex;
    aspect-ratio: 1.5;
    align-items: center;
    justify-content: center;
    color: rgba(9, 9, 11, 0.58);
    background: var(--wf-soft);
    border: 1px solid var(--wf-line);
    font-size: 0.58rem;
    font-weight: 800;
  }

  .rguide-ds-wf-place {
    display: grid;
    position: relative;
    grid-template-columns: minmax(8rem, 0.38fr) minmax(0, 0.62fr) auto;
    min-height: 11rem;
    padding-left: 0;
  }

  .rguide-ds-wf-photo {
    display: flex;
    min-height: 11rem;
    align-items: center;
    justify-content: center;
    color: rgba(9, 9, 11, 0.34);
    background: repeating-linear-gradient(135deg, transparent 0 0.8rem, rgba(9,9,11,.035) 0.8rem 1.6rem);
    border-right: 1px solid var(--wf-line);
  }

  .rguide-ds-wf-photo .material-symbols-outlined {
    font-size: 2rem;
  }

  .rguide-ds-wf-place-copy {
    display: grid;
    gap: 0.55rem;
    align-content: center;
    padding: 1.25rem;
  }

  .rguide-ds-wf-place-copy > strong {
    display: block;
    width: 7rem;
    height: 1.1rem;
    background: rgba(9, 9, 11, 0.7);
  }

  .rguide-ds-wf-place-copy > i {
    display: block;
    height: 0.45rem;
    background: rgba(9, 9, 11, 0.18);
  }

  .rguide-ds-wf-place-copy > i:nth-of-type(2) { width: 92%; }
  .rguide-ds-wf-place-copy > i:nth-of-type(3) { width: 68%; }

  .rguide-ds-wf-place-copy > span {
    width: 4.5rem;
    height: 1.35rem;
    margin-top: 0.35rem;
    border: 1px solid var(--wf-line);
  }

  .rguide-ds-wf-place-actions {
    display: flex;
    gap: 0.35rem;
    align-items: start;
    padding: 1rem;
  }

  .rguide-ds-wf-place-actions i {
    width: 1.55rem;
    height: 1.55rem;
  }

  .rguide-timeline {
    overflow: hidden;
    color: #f4f0e7;
    background: #09090b;
    border: 1px solid #09090b;
  }

  .rguide-timeline > header {
    display: grid;
    grid-template-columns: minmax(8rem, 0.6fr) minmax(0, 1.4fr) auto;
    gap: 1rem;
    align-items: center;
    padding: 1rem 1.2rem;
    border-bottom: 1px solid rgba(244, 240, 231, 0.18);
  }

  .rguide-timeline > header > span,
  .rguide-timeline > header > small,
  .rguide-timeline-track button > span,
  .rguide-timeline-detail > small,
  .rguide-schema header > span,
  .rguide-pipeline span,
  .rguide-principles span {
    display: block;
    color: #71717a;
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .rguide-timeline > header > strong {
    font-family: var(--font-display);
    font-size: clamp(1rem, 1.8vw, 1.45rem);
    letter-spacing: -0.04em;
    text-transform: uppercase;
  }

  .rguide-timeline > header > small {
    color: rgba(244, 240, 231, 0.48);
    text-align: right;
  }

  .rguide-timeline-track {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding: 1.3rem 1.2rem 1.15rem;
  }

  .rguide-timeline-line {
    position: absolute;
    top: 3.18rem;
    right: calc(10% + 0.95rem);
    left: calc(10% + 0.95rem);
    height: 1px;
    overflow: hidden;
    background: rgba(244, 240, 231, 0.22);
  }

  .rguide-timeline-line > span {
    display: block;
    width: var(--rguide-progress, 0%);
    height: 100%;
    background: var(--signal);
    transition: width 760ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .rguide-timeline-track button {
    position: relative;
    z-index: 1;
    display: grid;
    min-width: 0;
    gap: 0.65rem;
    justify-items: center;
    padding: 0;
    color: #f4f0e7;
    background: transparent;
    border: 0;
    font: inherit;
    text-align: center;
    cursor: pointer;
  }

  .rguide-timeline-track button i {
    display: block;
    width: 0.68rem;
    height: 0.68rem;
    border: 1px solid rgba(244, 240, 231, 0.65);
    border-radius: 50%;
    background: #09090b;
    transition:
      transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
      background-color 320ms ease,
      box-shadow 320ms ease;
  }

  .rguide-timeline-track button strong {
    color: rgba(244, 240, 231, 0.72);
    font-size: 0.72rem;
    letter-spacing: -0.01em;
  }

  .rguide-timeline-track button[aria-pressed="true"] i {
    background: var(--signal);
    border-color: var(--signal);
    box-shadow: 0 0 0 0.35rem rgba(240, 58, 34, 0.14);
    transform: scale(1.32);
  }

  .rguide-timeline-track button[aria-pressed="true"] strong {
    color: var(--signal);
  }

  .rguide-timeline-detail {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 1.2rem;
    align-items: start;
    min-height: 8.5rem;
    padding: 1.2rem;
    color: #fff;
    background: transparent;
    border-top: 1px solid rgba(244, 240, 231, 0.18);
  }

  .rguide-timeline-detail > span {
    align-self: start;
    color: var(--signal);
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 0.8;
    letter-spacing: -0.07em;
  }

  .rguide-timeline-detail > div {
    display: grid;
    gap: 0.45rem;
    align-self: start;
  }

  .rguide-timeline-detail > div > strong {
    font-family: var(--font-display);
    font-size: clamp(1rem, 1.8vw, 1.4rem);
    letter-spacing: -0.035em;
    text-transform: uppercase;
  }

  .project-content .rguide-timeline-detail p {
    max-width: 39rem;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .rguide-timeline-detail > small {
    align-self: end;
    color: rgba(255, 255, 255, 0.42);
  }

  .project-content .rguide-pipeline p,
  .project-content .rguide-principles p {
    margin-top: 0.65rem;
    font-size: 0.78rem;
    line-height: 1.5;
  }

  .rguide-system {
    display: grid;
    gap: 0;
    border-top: var(--rule);
    border-left: var(--rule);
  }

  .rguide-system details {
    border-right: var(--rule);
    border-bottom: var(--rule);
    background: transparent;
  }

  .rguide-system summary {
    display: grid;
    grid-template-columns: 2.5rem minmax(0, 1fr) minmax(10rem, auto) auto;
    gap: 0.8rem;
    align-items: center;
    min-height: 4.2rem;
    padding: 0.8rem 1rem;
    cursor: pointer;
    list-style: none;
  }

  .rguide-system summary::-webkit-details-marker {
    display: none;
  }

  .rguide-system summary::after {
    content: "+";
    font-size: 1rem;
  }

  .rguide-system details[open] summary::after {
    content: "−";
  }

  .rguide-system details[open] summary {
    color: #fff;
    background: #09090b;
  }

  .rguide-system summary > span,
  .rguide-system summary > small {
    font-size: 0.6rem;
    font-weight: 750;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .rguide-system summary > small {
    color: #71717a;
  }

  .rguide-system details[open] summary > small {
    color: rgba(255, 255, 255, 0.58);
  }

  .rguide-system details > div {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(14rem, 0.8fr);
    gap: 2rem;
    padding: 1.25rem 1rem 1.5rem 4.3rem;
  }

  .project-content .rguide-system details > div > p {
    font-size: 0.9rem;
  }

  .rguide-system ul {
    font-size: 0.78rem;
  }

  .rguide-schema {
    margin: 0;
    color: #111113;
    border: var(--rule);
    background: #ece8de;
  }

  .rguide-schema > header {
    display: grid;
    grid-template-columns: minmax(12rem, 0.7fr) minmax(0, 1.3fr);
    gap: 1rem;
    align-items: end;
    padding: 0.8rem 1rem;
    border-bottom: var(--rule);
  }

  .project-content .rguide-schema > header > p {
    max-width: 34rem;
    margin: 0;
    justify-self: end;
    color: #5f5d57;
    font-size: 0.72rem;
    line-height: 1.45;
    text-align: right;
  }

  .rguide-schema-viewport {
    overflow-x: auto;
    scrollbar-color: var(--signal) rgba(17, 17, 19, 0.12);
    scrollbar-width: thin;
  }

  .rguide-schema-viewport:focus-visible {
    outline: 3px solid var(--signal);
    outline-offset: -3px;
  }

  .rguide-schema-diagram {
    min-width: 58rem;
    padding: clamp(1rem, 3vw, 2rem);
  }

  .rguide-schema-primary {
    position: relative;
    display: grid;
    grid-template-columns: minmax(8.5rem, 1fr) 2rem minmax(8.5rem, 1fr) 2rem minmax(8.5rem, 1fr) 2rem minmax(8.5rem, 1fr);
    align-items: stretch;
    padding-bottom: 1.5rem;
  }

  .rguide-schema-primary::after {
    content: none;
  }

  .rguide-schema-node {
    position: relative;
    z-index: 1;
    display: flex;
    min-width: 0;
    min-height: 11.5rem;
    flex-direction: column;
    gap: 0.35rem;
    align-items: center;
    padding: 0.85rem;
    background: #f4f0e7;
    border: 1px solid #111113;
    text-align: center;
  }

  .rguide-schema-primary > .rguide-schema-node::after {
    content: none;
  }

  .rguide-schema-node > .material-symbols-outlined {
    color: var(--signal);
    font-family: "Material Symbols Outlined";
    font-size: 2rem;
    font-style: normal;
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
    letter-spacing: normal;
    line-height: 1;
    text-transform: none;
  }

  .rguide-schema-node > span,
  .rguide-schema-relations small {
    min-width: 0;
    color: #6b6860;
    font-size: 0.54rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    line-height: 1.35;
    text-transform: uppercase;
  }

  .rguide-schema-node > strong {
    display: block;
    width: 100%;
    overflow-wrap: anywhere;
    font-family: monospace;
    font-size: clamp(0.67rem, 1vw, 0.78rem);
    line-height: 1.2;
    text-align: center;
  }

  .rguide-schema-relations {
    position: relative;
    display: grid;
    width: 100%;
    gap: 0.28rem;
    margin-top: auto;
    padding-top: 0.85rem;
  }

  .rguide-schema-relations::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 0.58rem;
    background: rgba(17, 17, 19, 0.35);
  }

  .rguide-schema-relations small {
    display: block;
    padding: 0.25rem 0.3rem;
    background: rgba(17, 17, 19, 0.035);
    border: 1px solid rgba(17, 17, 19, 0.16);
    font-weight: 650;
    letter-spacing: 0;
    text-transform: none;
  }

  .rguide-schema-node--accent {
    color: #fff;
    background: var(--signal);
    border-color: var(--signal);
  }

  .rguide-schema-node--accent > .material-symbols-outlined,
  .rguide-schema-node--accent > span,
  .rguide-schema-node--accent .rguide-schema-relations small {
    color: #fff;
  }

  .rguide-schema-node--accent .rguide-schema-relations::before {
    background: rgba(255, 255, 255, 0.48);
  }

  .rguide-schema-node--accent .rguide-schema-relations small {
    background: rgba(9, 9, 11, 0.1);
    border-color: rgba(255, 255, 255, 0.34);
  }

  .rguide-schema-edge {
    position: relative;
    display: grid;
    place-items: center;
  }

  .rguide-schema-edge::before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    height: 1px;
    background: rgba(17, 17, 19, 0.55);
  }

  .rguide-schema-edge > i {
    position: absolute;
    z-index: 1;
    display: block;
    left: -0.22rem;
    width: 0.4rem;
    height: 0.4rem;
    background: var(--signal);
    border: 1px solid #ece8de;
    border-radius: 50%;
    opacity: 0;
  }

  .rguide-schema-edge--both > i {
    background: #111113;
    box-shadow: 0.55rem 0 0 var(--signal);
  }

  .rguide-schema-support {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, minmax(8.5rem, 1fr));
    gap: 2rem;
    padding: 1.5rem 0 2rem;
  }

  .rguide-schema-support::after {
    content: none;
  }

  .rguide-schema-node--support {
    min-height: 8.2rem;
    padding: 0.65rem;
  }

  .rguide-schema-node--support::before {
    content: none;
  }

  .rguide-schema-node--support::after {
    content: none;
  }

  .rguide-schema-row-flow,
  .rguide-schema-drop,
  .rguide-schema-view-flow {
    position: absolute;
    right: auto;
    left: 50%;
    display: block;
    width: 1px;
    background: rgba(17, 17, 19, 0.32);
  }

  .rguide-schema-row-flow {
    bottom: -3rem;
    height: 3rem;
  }

  .rguide-schema-drop,
  .rguide-schema-view-flow {
    bottom: -2rem;
    height: 2rem;
  }

  .rguide-schema-view-flow {
    left: calc((100% - 4rem) / 6);
  }

  .rguide-schema-row-flow > i,
  .rguide-schema-drop > i,
  .rguide-schema-view-flow > i {
    position: absolute;
    top: -0.2rem;
    left: -0.2rem;
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    background: var(--signal);
    border: 1px solid #ece8de;
    border-radius: 50%;
    opacity: 0;
  }

  .rguide-schema-node--support > .material-symbols-outlined {
    font-size: 1.5rem;
  }

  .rguide-schema-node--support > strong {
    font-size: 0.68rem;
  }

  .rguide-schema-node--derived {
    background: #e2ded5;
    border-style: solid;
  }

  .rguide-schema-view-layer {
    position: relative;
  }

  .rguide-schema-node--aggregate {
    min-height: 6.6rem;
    justify-content: center;
    background: #dedad1;
  }

  .rguide-schema-node--aggregate .rguide-schema-relations {
    max-width: 34rem;
    margin-top: 0.2rem;
  }

  .rguide-schema-delivery {
    position: relative;
    display: grid;
    grid-template-columns: minmax(9rem, 1fr) 2rem minmax(9rem, 1fr) 2rem minmax(9rem, 1fr);
    align-items: stretch;
    margin-top: 0;
    padding-top: 2rem;
  }

  .rguide-schema-delivery::before {
    content: none;
  }

  .rguide-schema-delivery > .rguide-schema-node {
    min-height: 6.3rem;
    justify-content: center;
    background: #e2ded5;
  }

  .rguide-schema-delivery > .rguide-schema-node:first-child::before {
    content: none;
  }

  .rguide-schema-delivery > .rguide-schema-node:first-child::after {
    content: none;
  }

  .rguide-schema.is-visible .rguide-schema-edge > i {
    animation: rguide-schema-flow-x 10s linear infinite;
  }

  .rguide-schema.is-visible .rguide-schema-edge--reverse > i {
    animation-name: rguide-schema-flow-x-reverse;
  }

  .rguide-schema.is-visible .rguide-schema-primary > .rguide-schema-edge:nth-child(2) > i { animation-delay: 0s; }
  .rguide-schema.is-visible .rguide-schema-primary > .rguide-schema-edge:nth-child(4) > i { animation-delay: 0s; }
  .rguide-schema.is-visible .rguide-schema-primary > .rguide-schema-edge:nth-child(6) > i { animation-delay: 0.5s; }

  .rguide-schema.is-visible .rguide-schema-row-flow > i,
  .rguide-schema.is-visible .rguide-schema-drop > i,
  .rguide-schema.is-visible .rguide-schema-view-flow > i {
    animation: rguide-schema-flow-y 10s linear infinite;
  }

  .rguide-schema.is-visible .rguide-schema-primary > .rguide-schema-node:nth-child(1) .rguide-schema-row-flow > i { animation-delay: 1.7s; }
  .rguide-schema.is-visible .rguide-schema-primary > .rguide-schema-node:nth-child(3) .rguide-schema-row-flow > i { animation-delay: 1.8s; }
  .rguide-schema.is-visible .rguide-schema-primary > .rguide-schema-node:nth-child(5) .rguide-schema-row-flow > i { animation-delay: 1.9s; }
  .rguide-schema.is-visible .rguide-schema-primary > .rguide-schema-node:nth-child(7) .rguide-schema-row-flow > i { animation-delay: 2s; }

  .rguide-schema.is-visible .rguide-schema-node--support:nth-child(1) .rguide-schema-drop > i { animation-delay: 3s; }
  .rguide-schema.is-visible .rguide-schema-node--support:nth-child(2) .rguide-schema-drop > i { animation-delay: 3.1s; }
  .rguide-schema.is-visible .rguide-schema-node--support:nth-child(3) .rguide-schema-drop > i { animation-delay: 3.2s; }
  .rguide-schema.is-visible .rguide-schema-node--support:nth-child(4) .rguide-schema-drop > i { animation-delay: 3.3s; }

  .rguide-schema.is-visible .rguide-schema-view-flow > i { animation-delay: 4.4s; }
  .rguide-schema.is-visible .rguide-schema-delivery > .rguide-schema-edge:nth-child(2) > i { animation-delay: 5.8s; }
  .rguide-schema.is-visible .rguide-schema-delivery > .rguide-schema-edge:nth-child(4) > i { animation-delay: 7.2s; }

  .rguide-schema-node--output {
    color: #fff;
    background: #111113 !important;
    border-color: #111113;
  }

  .rguide-schema-node--output > span {
    color: rgba(255, 255, 255, 0.62);
  }

  .rguide-schema > figcaption {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem 1.5rem;
    padding: 0.7rem 1rem;
    border-top: var(--rule);
    color: #5f5d57;
    font-size: 0.58rem;
    font-weight: 750;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .rguide-schema > figcaption span {
    display: inline-flex;
    gap: 0.4rem;
    align-items: center;
  }

  .rguide-schema > figcaption i {
    display: block;
    width: 0.46rem;
    height: 0.46rem;
    background: #111113;
  }

  .rguide-schema > figcaption span:nth-child(2) i {
    background: var(--signal);
  }

  .rguide-schema > figcaption span:nth-child(3) i {
    background: #dedad1;
    border: 1px solid #111113;
  }

  .rguide-pipeline {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    color: #f4f0e7;
    background: #09090b;
  }

  .rguide-pipeline > div {
    position: relative;
    min-height: 14rem;
    padding: 1rem 0.8rem;
    border-right: 1px solid rgba(244, 240, 231, 0.18);
  }

  .rguide-pipeline > div:last-child {
    border-right: 0;
  }

  .rguide-pipeline > div::after {
    content: "";
    position: absolute;
    right: 0.8rem;
    bottom: 0.85rem;
    left: 0.8rem;
    height: 1px;
    background: linear-gradient(90deg, var(--signal) 0 28%, rgba(244, 240, 231, 0.18) 28%);
  }

  .rguide-pipeline strong {
    display: block;
    margin-top: 0.75rem;
    font-size: 0.95rem;
  }

  .rguide-pipeline span {
    color: var(--signal);
  }

  .rguide-pipeline-icon {
    display: block;
    margin-top: 1.15rem;
    color: var(--signal);
    font-family: "Material Symbols Outlined";
    font-size: 2rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "liga";
    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
  }

  .project-content .rguide-pipeline p {
    color: rgba(244, 240, 231, 0.58);
    font-size: 0.7rem;
  }

  .rguide-resilience {
    container-type: inline-size;
    margin: clamp(2.5rem, 5vw, 4.5rem) 0 clamp(4rem, 8vw, 7rem);
    background: rgba(255, 255, 255, 0.14);
    border: var(--rule);
  }

  .rguide-resilience > header {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    row-gap: 0.35rem;
    padding: clamp(1.25rem, 3cqw, 2rem);
  }

  .rguide-resilience > header > span,
  .rguide-resilience-path-heading > span,
  .rguide-resilience > footer > strong {
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.09em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  .rguide-resilience > header > span {
    grid-column: 1 / -1;
    color: var(--signal);
  }

  .project-content .rguide-resilience h3 {
    max-width: 12ch;
    margin: 0;
    font-family: var(--font-display);
    font-size: var(--rguide-type-display);
    font-weight: var(--rguide-weight-heading);
    line-height: var(--rguide-leading-display);
    letter-spacing: var(--rguide-tracking-display);
  }

  .project-content .rguide-resilience > header > p {
    max-width: 42rem;
    align-self: end;
    margin: 0;
    color: #5f5d57;
    font-size: clamp(0.88rem, 1.25cqw, 1.05rem);
    line-height: 1.55;
  }

  .rguide-resilience-paths {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: var(--rule);
    border-bottom: var(--rule);
  }

  .rguide-resilience-paths article {
    display: flex;
    min-height: 19rem;
    flex-direction: column;
    padding: clamp(1rem, 2.5cqw, 1.75rem);
  }

  .rguide-resilience-paths article:first-child {
    border-right: var(--rule);
  }

  .rguide-resilience-path-heading {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 0.75rem;
    align-items: center;
  }

  .rguide-resilience-path-heading > i {
    color: var(--signal);
    font-size: 1.8rem;
    font-weight: 300;
  }

  .rguide-resilience-path-heading > span {
    color: var(--signal);
  }

  .rguide-resilience-path-heading > b {
    color: #8a8881;
    font-family: var(--font-display);
    font-size: 0.72rem;
    letter-spacing: 0.06em;
  }

  .project-content .rguide-resilience h4 {
    max-width: 16ch;
    margin: clamp(1.75rem, 3cqw, 3rem) 0 0;
    font-family: var(--font-display);
    font-size: var(--rguide-type-card-title);
    font-weight: var(--rguide-weight-heading);
    line-height: var(--rguide-leading-heading);
    letter-spacing: var(--rguide-tracking-heading);
  }

  .project-content .rguide-resilience-paths article > p {
    max-width: 34rem;
    margin: 1rem 0 0;
    color: #5f5d57;
    font-size: clamp(0.76rem, 1cqw, 0.9rem);
    line-height: 1.55;
  }

  .rguide-resilience-flow {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    align-items: center;
    margin-top: auto;
    padding-top: 1.5rem;
  }

  .rguide-resilience-flow > span {
    padding: 0.45rem 0.55rem;
    background: rgba(255, 255, 255, 0.32);
    border: var(--rule);
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .rguide-resilience-flow > i {
    color: var(--signal);
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 800;
  }

  .rguide-resilience > footer {
    display: grid;
    grid-template-columns: minmax(9rem, 0.45fr) minmax(0, 1.55fr);
    gap: 1.5rem;
    padding: clamp(1.1rem, 2.5cqw, 1.75rem);
  }

  .rguide-resilience > footer > strong {
    color: var(--signal);
  }

  .project-content .rguide-resilience > footer > p {
    max-width: 58rem;
    margin: 0;
    font-size: clamp(0.84rem, 1.15cqw, 0.98rem);
    line-height: 1.55;
  }

  .rguide-principles {
    counter-reset: rguide-principle;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: var(--rule);
  }

  .rguide-principles article {
    counter-increment: rguide-principle;
    display: grid;
    grid-template-columns: 2.8rem minmax(0, 1fr);
    grid-template-rows: auto 1fr;
    min-height: 8rem;
    padding: 1rem 1rem 1rem 0;
    border-bottom: var(--rule);
  }

  .rguide-principles article:nth-child(odd) {
    border-right: var(--rule);
  }

  .rguide-principles article:nth-child(even) {
    padding-left: 1rem;
  }

  .rguide-principles article::before {
    content: counter(rguide-principle, decimal-leading-zero);
    grid-row: 1 / span 2;
    color: var(--signal);
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1;
  }

  .rguide-principles span {
    color: var(--ink);
  }

  .project-content .rguide-principles p {
    grid-column: 2;
    color: #5f5d57;
  }

  .rguide-build-proof {
    container-type: inline-size;
    margin-top: clamp(4rem, 8vw, 7rem);
    background: rgba(255, 255, 255, 0.14);
    border: var(--rule);
  }

  .rguide-build-proof > header {
    display: grid;
    grid-template-columns: minmax(16rem, 0.75fr) minmax(22rem, 1.25fr);
    gap: 1rem clamp(2rem, 6cqw, 6rem);
    padding: clamp(1.25rem, 3cqw, 2rem);
  }

  .rguide-build-proof > header > span,
  .rguide-proof-grid article > span,
  .rguide-build-proof > footer > strong {
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.09em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  .rguide-build-proof > header > span {
    grid-column: 1 / -1;
    color: var(--signal);
  }

  .project-content .rguide-build-proof h2 {
    max-width: 9ch;
    margin: 0;
    font-family: var(--font-display);
    font-size: var(--rguide-type-display);
    font-weight: var(--rguide-weight-heading);
    line-height: var(--rguide-leading-display);
    letter-spacing: var(--rguide-tracking-display);
  }

  .project-content .rguide-build-proof > header > p {
    max-width: 44rem;
    align-self: end;
    margin: 0;
    color: #5f5d57;
    font-size: clamp(0.9rem, 1.35cqw, 1.12rem);
    line-height: 1.55;
  }

  .rguide-proof-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: var(--rule);
    border-bottom: var(--rule);
  }

  .rguide-proof-grid article {
    display: flex;
    min-height: 20rem;
    flex-direction: column;
    padding: clamp(1rem, 2.5cqw, 1.75rem);
    border-right: var(--rule);
  }

  .rguide-proof-grid article:last-child {
    border-right: 0;
  }

  .rguide-proof-grid article > div {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: auto;
  }

  .rguide-proof-grid article > div i {
    color: var(--signal);
    font-size: clamp(2rem, 3cqw, 3rem);
    font-weight: 300;
  }

  .rguide-proof-grid article > div b {
    color: #8a8881;
    font-family: var(--font-display);
    font-size: 0.76rem;
    letter-spacing: 0.06em;
  }

  .rguide-proof-grid article > span {
    margin-top: 2rem;
    color: var(--signal);
  }

  .project-content .rguide-proof-grid h3 {
    max-width: 12ch;
    margin: 0.55rem 0 0;
    font-family: var(--font-display);
    font-size: var(--rguide-type-card-title);
    font-weight: var(--rguide-weight-heading);
    line-height: var(--rguide-leading-heading);
    letter-spacing: var(--rguide-tracking-heading);
  }

  .project-content .rguide-proof-grid p {
    margin: 1rem 0 0;
    color: #5f5d57;
    font-size: clamp(0.76rem, 1cqw, 0.9rem);
    line-height: 1.55;
  }

  .project-content .rguide-proof-grid small {
    display: block;
    margin-top: 1.25rem;
    padding-top: 0.8rem;
    color: var(--ink);
    border-top: 1px solid rgba(17, 17, 19, 0.24);
    font-size: 0.67rem;
    font-weight: 700;
    line-height: 1.45;
  }

  .rguide-build-proof > footer {
    display: grid;
    grid-template-columns: minmax(8rem, 0.45fr) minmax(0, 1.55fr);
    gap: 1.5rem;
    align-items: start;
    padding: clamp(1.1rem, 2.5cqw, 1.75rem);
  }

  .rguide-build-proof > footer > strong {
    color: var(--signal);
  }

  .project-content .rguide-build-proof > footer > p {
    max-width: 58rem;
    margin: 0;
    font-size: clamp(0.85rem, 1.2cqw, 1rem);
    line-height: 1.55;
  }

  .rguide-traffic {
    container-type: inline-size;
    margin-top: clamp(3rem, 7vw, 6rem);
    overflow: hidden;
    background: rgba(255, 255, 255, 0.14);
    border: var(--rule);
  }

  .rguide-traffic > header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(28rem, 0.8fr);
    gap: clamp(2rem, 5vw, 5rem);
    align-items: end;
    padding: clamp(1.2rem, 3vw, 2rem);
    border-bottom: var(--rule);
  }

  .rguide-traffic > header > div {
    display: grid;
    gap: 0.55rem;
  }

  .rguide-traffic > header span,
  .rguide-traffic dt,
  .rguide-traffic > figcaption {
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 0.09em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  .rguide-traffic > header span {
    color: var(--signal);
  }

  .project-content .rguide-traffic h3 {
    max-width: 15ch;
    font-family: var(--font-display);
    font-size: var(--rguide-type-display);
    font-weight: var(--rguide-weight-heading);
    line-height: var(--rguide-leading-display);
    letter-spacing: var(--rguide-tracking-display);
  }

  .project-content .rguide-traffic > header p {
    max-width: 36rem;
    color: #5f5d57;
    font-size: clamp(0.8rem, 1vw, 0.95rem);
    line-height: 1.5;
  }

  .rguide-traffic dl {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0;
    border-top: var(--rule);
    border-left: var(--rule);
  }

  .rguide-traffic dl > div {
    display: flex;
    min-height: 7rem;
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 0.8rem;
    border-right: var(--rule);
    border-bottom: var(--rule);
  }

  .rguide-traffic dt {
    color: #71717a;
  }

  .rguide-traffic dd {
    font-family: var(--font-display);
    font-size: clamp(1.7rem, 3.4vw, 3.2rem);
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.07em;
  }

  .rguide-traffic dd small {
    margin-left: 0.2rem;
    color: #71717a;
    font-size: 0.62rem;
    letter-spacing: 0.02em;
  }

  .rguide-traffic-stage {
    position: relative;
    height: clamp(18rem, 32vw, 29rem);
    padding: clamp(1rem, 2.5vw, 2rem);
    background:
      linear-gradient(rgba(8, 8, 8, 0.04) 1px, transparent 1px) 0 0 / 100% 25%,
      linear-gradient(90deg, rgba(8, 8, 8, 0.035) 1px, transparent 1px) 0 0 / 12.5% 100%;
  }

  .rguide-traffic canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  .rguide-traffic-tooltip {
    position: absolute;
    z-index: 2;
    min-width: 7rem;
    padding: 0.5rem 0.6rem;
    color: #fff;
    background: var(--ink);
    border: 1px solid var(--ink);
    font-size: 0.68rem;
    font-weight: 700;
    line-height: 1.35;
    pointer-events: none;
    transform: translate(-50%, calc(-100% - 0.65rem));
  }

  .rguide-traffic-tooltip b,
  .rguide-traffic-tooltip small {
    display: block;
  }

  .rguide-traffic-tooltip small {
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.56rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .rguide-traffic > figcaption {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem 1.5rem;
    padding: 0.75rem 1rem;
    border-top: var(--rule);
    color: #71717a;
  }

  .rguide-traffic > figcaption .rguide-traffic-key {
    display: inline-flex;
    gap: 0.45rem;
    align-items: center;
    color: var(--ink);
  }

  .rguide-traffic-key i {
    display: block;
    width: 0.48rem;
    height: 0.48rem;
    background: var(--signal);
    border-radius: 50%;
  }

  .rguide-traffic-key--projection i {
    background: var(--paper);
    border: 2px solid var(--signal);
  }

  .rguide-closing-film {
    container-type: inline-size;
    display: grid;
    gap: clamp(1.5rem, 3vw, 2.5rem);
    margin-top: clamp(4rem, 9vw, 8rem);
  }

  .rguide-closing-film > header {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(22rem, 0.8fr);
    gap: clamp(2rem, 5vw, 5rem);
    align-items: start;
  }

  .rguide-closing-film > header > div {
    display: grid;
    gap: 0.55rem;
  }

  .rguide-closing-film > header span {
    font-size: 0.62rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .rguide-closing-film > header span {
    color: var(--signal);
  }

  .project-content .rguide-closing-film h2 {
    margin: 0;
    color: var(--ink);
    font-size: var(--rguide-type-display);
    font-weight: var(--rguide-weight-heading);
    line-height: var(--rguide-leading-display);
    letter-spacing: var(--rguide-tracking-display);
    white-space: nowrap;
  }

  .rguide-closing-hierarchy {
    display: grid;
    gap: 0.75rem;
    padding: 0.2rem 0 0 1rem;
    border-left: 2px solid var(--signal);
  }

  .project-content .rguide-closing-hierarchy > p {
    max-width: 34rem;
    margin: 0;
    color: #5f5d57;
    font-size: clamp(0.86rem, 1.2vw, 1rem);
    line-height: 1.55;
  }

  .project-content .rguide-closing-hierarchy .rguide-hierarchy-path {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 0.5rem;
    align-items: center;
    color: var(--ink);
    font-size: 0.62rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  .rguide-hierarchy-path b {
    font-weight: 800;
  }

  .rguide-hierarchy-path i {
    color: var(--signal);
    font-style: normal;
  }

  .rguide-closing-film figure {
    margin: 0;
    overflow: hidden;
    background: #000;
    border: 0.5rem solid #09090b;
    border-radius: 0.25rem;
    box-shadow:
      0 2.5rem 5rem rgba(9, 9, 11, 0.2),
      0 0.5rem 1.25rem rgba(9, 9, 11, 0.16);
  }

  .rguide-closing-film video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    object-fit: cover;
  }

  .rguide-journey {
    counter-reset: none;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: var(--rule);
    border-left: var(--rule);
  }

  .project-content .rguide-journey li {
    position: relative;
    display: grid;
    grid-template-rows: auto auto auto 1fr;
    gap: 0.45rem;
    min-height: 13rem;
    margin: 0;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.16);
    border-right: var(--rule);
    border-bottom: var(--rule);
    transition:
      background-color 240ms ease,
      transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-content .rguide-journey li:hover {
    z-index: 1;
    background: rgba(240, 58, 34, 0.08);
    transform: translateY(-0.25rem);
  }

  .rguide-journey li > span,
  .rguide-journey li > small {
    font-size: 0.58rem;
    font-weight: 800;
    letter-spacing: 0.09em;
    line-height: 1;
    text-transform: uppercase;
  }

  .rguide-journey li > span {
    width: fit-content;
    padding: 0.35rem 0.42rem;
    color: #fff;
    background: var(--signal);
  }

  .rguide-journey li > small {
    margin-top: 0.7rem;
    color: #71717a;
  }

  .rguide-journey li > strong {
    min-height: 2.2em;
    font-family: var(--font-display);
    font-size: clamp(0.95rem, 1.35vw, 1.25rem);
    line-height: 1.05;
    letter-spacing: -0.04em;
  }

  .project-content .rguide-journey li > p {
    align-self: end;
    color: #5f5d57;
    font-size: 0.7rem;
    line-height: 1.45;
  }

  /* RGuide vertical rhythm: section / subsection / component / copy */
  .project-content {
    --rguide-type-display: clamp(2.35rem, 5.2vw, 4.25rem);
    --rguide-type-section-title: clamp(1.55rem, 2vw, 2.05rem);
    --rguide-type-card-title: clamp(1.4rem, 1.8vw, 1.8rem);
    --rguide-weight-heading: 700;
    --rguide-leading-display: 0.94;
    --rguide-leading-heading: 1.08;
    --rguide-tracking-display: -0.055em;
    --rguide-tracking-heading: -0.035em;
    --rguide-space-section: clamp(2.5rem, 3.5vw, 3rem);
    --rguide-space-subsection: clamp(2rem, 3vw, 2.5rem);
    --rguide-space-component: clamp(1.25rem, 2vw, 1.75rem);
    --rguide-space-copy: clamp(0.75rem, 1.25vw, 1rem);
  }

  .project-content > section,
  .project-content > figure,
  .project-content > div,
  .project-content > img {
    margin-block: 0;
  }

  .project-content > .rguide-opening {
    padding-bottom: 0;
  }

  .project-content > h2:not(:first-child) {
    margin-top: var(--rguide-space-section);
    padding-top: clamp(1rem, 1.5vw, 1.25rem);
  }

  .project-content > h3:not(:first-child) {
    margin-top: var(--rguide-space-subsection);
    padding-top: clamp(0.8rem, 1.25vw, 1rem);
  }

  .project-content > :is(h2, h3) + :is(p, ul, ol) {
    margin-top: var(--rguide-space-copy);
  }

  .project-content > :is(p, ul, ol) + :is(p, ul, ol) {
    margin-top: var(--rguide-space-copy);
  }

  .project-content > :is(p, ul, ol, h2, h3) + :is(
      .rguide-timeline,
      .rguide-system,
      .rguide-schema,
      .rguide-pipeline,
      .rguide-product-shot,
      .rguide-design-system,
      .rguide-principles,
      .rguide-traffic
    ) {
    margin-top: var(--rguide-space-component);
  }

  .project-content > :is(
      .rguide-timeline,
      .rguide-schema,
      .rguide-pipeline,
      .rguide-product-shot,
      .rguide-design-system
    ) + p {
    margin-top: var(--rguide-space-copy);
  }

  .project-content > .rguide-impact + .rguide-opening,
  .project-content > .rguide-opening + .rguide-online-mockup,
  .project-content > h2 + .rguide-design-system,
  .project-content > .rguide-product-shot + .rguide-design-system {
    margin-top: var(--rguide-space-component);
  }

  .project-content > p + .rguide-resilience,
  .project-content > .rguide-traffic + .rguide-build-proof,
  .project-content > .rguide-build-proof + .rguide-closing-film {
    margin-top: var(--rguide-space-section);
  }

  @keyframes rguide-schema-flow-x {
    0% { left: -0.22rem; opacity: 0; }
    2% { left: -0.22rem; opacity: 1; }
    12% { left: calc(100% - 0.18rem); opacity: 1; }
    14%, 100% { left: calc(100% - 0.18rem); opacity: 0; }
  }

  @keyframes rguide-schema-flow-x-reverse {
    0% { left: calc(100% - 0.18rem); opacity: 0; }
    2% { left: calc(100% - 0.18rem); opacity: 1; }
    12% { left: -0.22rem; opacity: 1; }
    14%, 100% { left: -0.22rem; opacity: 0; }
  }

  @keyframes rguide-schema-flow-y {
    0% { top: -0.2rem; opacity: 0; }
    2% { top: -0.2rem; opacity: 1; }
    12% { top: calc(100% - 0.2rem); opacity: 1; }
    14%, 100% { top: calc(100% - 0.2rem); opacity: 0; }
  }

  @keyframes rguide-city-in {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }

  @keyframes rguide-pulse {
    70% { box-shadow: 0 0 0 0.45rem rgba(240, 58, 34, 0); }
    100% { box-shadow: 0 0 0 0 rgba(240, 58, 34, 0); }
  }

  @keyframes rguide-detail-in {
    from { opacity: 0; transform: translateY(0.45rem); }
    to { opacity: 1; transform: translateY(0); }
  }

  @container (max-width: 54rem) {
    .rguide-ds-intro {
      grid-template-columns: 1fr;
      align-items: start;
    }

    .project-content .rguide-ds-intro h3 {
      max-width: none;
    }

    .rguide-ds-foundations,
    .rguide-ds-components {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .rguide-ds-specimen--categories,
    .rguide-ds-specimen--actions,
    .rguide-ds-specimen--markers,
    .rguide-ds-specimen--route,
    .rguide-ds-specimen--sources,
    .rguide-ds-specimen--destination,
    .rguide-ds-specimen--filter {
      grid-column: span 1;
    }

    .rguide-ds-specimen--guide-shell {
      grid-column: 1 / -1;
    }

    .rguide-ds-category-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .rguide-ds-layout-theory,
    .rguide-ds-guide-theory {
      grid-template-columns: 1fr;
      align-items: start;
    }

    .rguide-ds-guide-theory > .rguide-ds-theory-key {
      grid-template-rows: none;
      height: auto;
    }

    .rguide-ds-guide-theory > .rguide-ds-theory-key li::before,
    .rguide-ds-guide-theory > .rguide-ds-theory-key li::after {
      display: none;
    }

    .rguide-ds-theory-key {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0 1.5rem;
    }
  }

  @container (max-width: 34rem) {
    .project-content .rguide-ds-intro h3 {
      white-space: normal;
    }

    .rguide-ds-sheet-header {
      grid-template-columns: 1fr auto;
    }

    .rguide-ds-sheet-header h4 {
      grid-column: 1 / -1;
      grid-row: 2;
    }

    .rguide-ds-sheet-header small {
      grid-column: 2;
      grid-row: 1;
    }

    .rguide-ds-foundations,
    .rguide-ds-components {
      grid-template-columns: 1fr;
      gap: 3rem;
      padding-inline: 0;
    }

    .rguide-ds-specimen--categories,
    .rguide-ds-specimen--actions,
    .rguide-ds-specimen--markers,
    .rguide-ds-specimen--route,
    .rguide-ds-specimen--sources,
    .rguide-ds-specimen--destination,
    .rguide-ds-specimen--filter,
    .rguide-ds-specimen--guide-shell {
      grid-column: 1;
    }

    .rguide-ds-filter {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .rguide-ds-filter button:nth-child(2) {
      border-right: 0;
    }

    .rguide-ds-filter button:nth-child(-n + 2) {
      border-bottom: 1px solid #d5d8df;
    }

    .rguide-ds-guide-card > header,
    .rguide-ds-guide-body {
      grid-template-columns: 1fr;
    }

    .rguide-ds-guide-actions {
      justify-self: start;
    }

    .rguide-ds-source-row {
      grid-template-columns: auto 1.5rem auto minmax(0, 1fr);
    }

    .rguide-ds-source-row > .material-symbols-outlined {
      display: none;
    }

    .rguide-ds-place-card {
      grid-template-columns: 1fr;
    }

    .rguide-ds-place-card > img {
      max-height: 12rem;
    }

    .rguide-ds-theory-key {
      grid-template-columns: 1fr;
    }

    .rguide-ds-home-wireframe {
      grid-template-columns: minmax(7.5rem, 0.42fr) minmax(8rem, 0.58fr);
      min-height: 0;
    }

    .rguide-ds-home-nav,
    .rguide-ds-home-map {
      min-height: 20rem;
    }

    .rguide-ds-home-map {
      border-right: 0;
    }

    .rguide-ds-home-index {
      grid-column: 1 / -1;
      min-height: 25rem;
      border-top: 1px solid var(--wf-line);
    }

    .rguide-ds-wf-context,
    .rguide-ds-wf-place {
      grid-template-columns: 1fr;
    }

    .rguide-ds-wf-place {
      padding-left: 0;
    }

    .rguide-ds-callouts {
      display: none;
    }

    .rguide-ds-wf-photo {
      min-height: 8rem;
      border-right: 0;
      border-bottom: 1px solid var(--wf-line);
    }

    .rguide-ds-wf-place-actions {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  @container (max-width: 46rem) {
    .rguide-resilience > header {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .project-content .rguide-resilience h3 {
      max-width: 13ch;
    }

    .rguide-resilience-paths {
      grid-template-columns: 1fr;
    }

    .rguide-resilience-paths article {
      min-height: 0;
    }

    .rguide-resilience-paths article:first-child {
      border-right: 0;
      border-bottom: var(--rule);
    }

    .rguide-resilience-flow {
      margin-top: 2.5rem;
    }

    .rguide-resilience > footer {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
  }

  @container (max-width: 52rem) {
    .rguide-build-proof > header {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .project-content .rguide-build-proof h2 {
      max-width: 11ch;
    }

    .project-content .rguide-build-proof > header > p {
      max-width: 40rem;
    }

    .rguide-proof-grid {
      grid-template-columns: 1fr;
    }

    .rguide-proof-grid article {
      min-height: 0;
      border-right: 0;
      border-bottom: var(--rule);
    }

    .rguide-proof-grid article:last-child {
      border-bottom: 0;
    }

    .rguide-proof-grid article > div {
      margin-bottom: 2.75rem;
    }

    .rguide-build-proof > footer {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
  }

  @container (max-width: 90rem) {
    .rguide-traffic > header {
      grid-template-columns: 1fr;
      gap: clamp(1.5rem, 3cqw, 2.5rem);
      align-items: start;
    }

    .project-content .rguide-traffic h3 {
      max-width: 18ch;
    }

    .rguide-traffic dl {
      width: 100%;
      max-width: none;
    }
  }

  @container (max-width: 42rem) {
    .rguide-traffic dl {
      grid-template-columns: 1fr;
    }

    .rguide-traffic dl > div {
      min-height: 5.5rem;
    }
  }

  @container (max-width: 76rem) {
    .rguide-closing-film > header {
      grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.9fr);
      gap: clamp(1.25rem, 2.5cqw, 2.5rem);
    }

    .rguide-closing-hierarchy {
      max-width: none;
    }

  }

  @container (max-width: 42rem) {
    .rguide-closing-film > header {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .rguide-closing-hierarchy {
      max-width: 48rem;
    }

  }

  @container (max-width: 36rem) {
    .project-content .rguide-closing-film h2 {
      white-space: normal;
    }
  }

  .rguide-timeline.is-updating .rguide-timeline-detail > * {
    animation: rguide-detail-in 440ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .rguide-timeline.is-updating .rguide-timeline-detail > *:nth-child(2) {
    animation-delay: 60ms;
  }

  .rguide-timeline.is-updating .rguide-timeline-detail > *:nth-child(3) {
    animation-delay: 110ms;
  }

  @media (max-width: 900px) {
    .rguide-impact {
      min-height: 35rem;
    }

    .rguide-city-map {
      top: 3.2rem;
      right: 1rem;
      width: min(60%, 30rem);
    }

    .rguide-impact-data {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      row-gap: 1.1rem;
    }

    .rguide-timeline > header {
      grid-template-columns: 1fr auto;
    }

    .rguide-timeline > header > strong {
      grid-column: 1 / -1;
      grid-row: 2;
    }

    .rguide-pipeline {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .rguide-pipeline > div:nth-child(3) {
      border-right: 0;
    }

    .rguide-pipeline > div:nth-child(-n + 3) {
      border-bottom: 1px solid rgba(244, 240, 231, 0.18);
    }

    .rguide-schema-diagram {
      min-width: 54rem;
    }
  }

  @media (max-width: 640px) {
    .rguide-opening {
      gap: 1.5rem;
    }

    .rguide-opening-lower {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .rguide-opening-lower a {
      justify-self: start;
    }

    .rguide-build-signals {
      grid-template-columns: 1fr;
    }

    .rguide-build-signals > div,
    .rguide-build-signals > div:not(:first-child) {
      grid-template-columns: 1fr 1fr;
      align-items: end;
      padding: 0.75rem 0;
      border-right: 0;
      border-bottom: var(--rule);
    }

    .rguide-build-signals span {
      text-align: right;
    }

    .rguide-impact {
      min-height: 45rem;
    }

    .rguide-impact::before {
      background-size: 2.6rem 2.6rem;
    }

    .rguide-impact header > strong {
      font-size: clamp(4rem, 24vw, 6.2rem);
    }

    .rguide-impact header > .rguide-impact-title {
      font-size: clamp(3.1rem, 14vw, 4.2rem);
    }

    .project-content .rguide-impact header > p {
      color: rgba(244, 240, 231, 0.78);
    }

    .rguide-city-map {
      top: 14.75rem;
      right: 1rem;
      left: 1rem;
      width: auto;
    }

    .rguide-impact-data {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      row-gap: 1rem;
    }

    .rguide-impact-data strong {
      font-size: clamp(1.4rem, 8vw, 2rem);
    }

    .rguide-impact footer {
      flex-wrap: wrap;
      row-gap: 0.2rem;
    }

    .rguide-impact footer small {
      width: 100%;
      margin-left: 1rem;
    }

    .rguide-timeline > header {
      gap: 0.5rem;
    }

    .rguide-timeline-track {
      overflow-x: auto;
      grid-template-columns: repeat(5, minmax(5.8rem, 1fr));
      padding-bottom: 1.2rem;
      scrollbar-width: none;
    }

    .rguide-timeline-track::-webkit-scrollbar {
      display: none;
    }

    .rguide-timeline-line {
      right: 2.9rem;
      left: 2.9rem;
      min-width: 23.2rem;
    }

    .rguide-timeline-detail {
      grid-template-columns: auto minmax(0, 1fr);
      min-height: 10.5rem;
      padding: 1rem;
    }

    .rguide-timeline-detail > small {
      grid-column: 2;
      justify-self: start;
    }

    .rguide-system summary {
      grid-template-columns: 2rem minmax(0, 1fr) auto;
    }

    .rguide-system summary > small {
      display: none;
    }

    .rguide-system details > div {
      grid-template-columns: 1fr;
      gap: 1rem;
      padding: 1rem;
    }

    .rguide-schema > header {
      grid-template-columns: 1fr;
    }

    .project-content .rguide-schema > header > p {
      justify-self: start;
      text-align: left;
    }

    .rguide-schema-diagram {
      min-width: 54rem;
      padding: 1rem;
    }

    .rguide-principles {
      grid-template-columns: 1fr;
    }

    .rguide-traffic > header {
      grid-template-columns: 1fr;
    }

    .rguide-traffic dl {
      max-width: 42rem;
    }

    .rguide-pipeline {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .rguide-pipeline > div {
      min-height: 12rem;
    }

    .rguide-pipeline > div:nth-child(odd) {
      border-right: 1px solid rgba(244, 240, 231, 0.18);
    }

    .rguide-pipeline > div:nth-child(even) {
      border-right: 0;
    }

    .rguide-pipeline > div:nth-child(-n + 4) {
      border-bottom: 1px solid rgba(244, 240, 231, 0.18);
    }

    .rguide-principles article,
    .rguide-principles article:nth-child(even) {
      padding: 1rem 0;
      border-right: 0;
    }

    .rguide-closing-film > header {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .rguide-closing-hierarchy {
      max-width: 42rem;
    }

    .project-content .rguide-closing-film h2 {
      white-space: normal;
    }

    .rguide-journey {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .rguide-traffic dl {
      grid-template-columns: 1fr;
    }

    .rguide-traffic dl > div {
      min-height: 5.5rem;
    }

    .rguide-traffic-stage {
      height: 18rem;
      padding: 0.8rem;
    }

    .rguide-journey {
      grid-template-columns: 1fr;
    }

    .project-content .rguide-journey li {
      grid-template-columns: auto minmax(0, 1fr);
      grid-template-rows: auto auto;
      min-height: 0;
    }

    .rguide-journey li > span {
      grid-row: 1 / span 2;
    }

    .rguide-journey li > small,
    .rguide-journey li > strong,
    .project-content .rguide-journey li > p {
      grid-column: 2;
    }

    .rguide-journey li > small {
      margin-top: 0;
    }

    .rguide-journey li > strong {
      min-height: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rguide-impact footer span,
    .rguide-schema-edge > i,
    .rguide-schema-row-flow > i,
    .rguide-schema-drop > i,
    .rguide-schema-view-flow > i,
    .rguide-timeline.is-updating .rguide-timeline-detail > * {
      animation: none;
    }

    .rguide-impact.is-visible .rguide-city-map i {
      animation: none;
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .rguide-timeline-line > span,
    .rguide-timeline-track button i,
    .rguide-live-link,
    .rguide-live-link::before,
    .rguide-live-link .material-symbols-outlined {
      transition: none;
    }
  }
</style>
