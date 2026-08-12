---
title: "RGuide"
description: "Designing and engineering a map-first travel platform—and the data, publishing, media, localization, and growth systems that make it scale."
tags: ["UI/UX", "Product Design", "Development", "Data Systems"]
cover: "/Projects/RGuide/rguide-imac-mockup.webp"
hero: "/Projects/RGuide/rguide-world-4k.webp"
role: "Founder · Product & Engineering"
tools: ["Next.js", "TypeScript", "Supabase", "PostGIS", "MapLibre", "Cloudflare R2"]
deliverables: ["Product strategy", "UX/UI", "Design system", "Data model", "Publishing pipelines", "Production build"]
---

<section class="rguide-impact" data-rguide-impact aria-label="RGuide production data snapshot from August 11, 2026">
  <div class="rguide-city-map" role="img" aria-label="World map marking cities with published RGuide content">
    <img src="/Projects/RGuide/world-outline.svg" alt="" aria-hidden="true" />
    <i style="--x: 51.36%; --y: 20.91%; --delay: 0ms" data-city="Amsterdam"></i>
    <i style="--x: 56.59%; --y: 28.9%; --delay: 45ms" data-city="Athens"></i>
    <i style="--x: 77.92%; --y: 42.36%; --delay: 90ms" data-city="Bangkok"></i>
    <i style="--x: 50.6%; --y: 27.01%; --delay: 135ms" data-city="Barcelona"></i>
    <i style="--x: 53.72%; --y: 20.82%; --delay: 180ms" data-city="Berlin"></i>
    <i style="--x: 29.42%; --y: 47.38%; --delay: 225ms" data-city="Bogota"></i>
    <i style="--x: 33.78%; --y: 69.22%; --delay: 270ms" data-city="Buenos Aires"></i>
    <i style="--x: 53.49%; --y: 19.07%; --delay: 315ms" data-city="Copenhagen"></i>
    <i style="--x: 30.01%; --y: 57.52%; --delay: 360ms" data-city="Cusco"></i>
    <i style="--x: 65.35%; --y: 36%; --delay: 405ms" data-city="Dubai"></i>
    <i style="--x: 48.26%; --y: 20.36%; --delay: 450ms" data-city="Dublin"></i>
    <i style="--x: 53.13%; --y: 25.68%; --delay: 495ms" data-city="Florence"></i>
    <i style="--x: 79.4%; --y: 38.32%; --delay: 0ms" data-city="Hanoi"></i>
    <i style="--x: 81.71%; --y: 37.6%; --delay: 45ms" data-city="Hong Kong"></i>
    <i style="--x: 58.05%; --y: 27.22%; --delay: 90ms" data-city="Istanbul"></i>
    <i style="--x: 78.25%; --y: 48.26%; --delay: 135ms" data-city="Kuala Lumpur"></i>
    <i style="--x: 87.71%; --y: 30.55%; --delay: 180ms" data-city="Kyoto"></i>
    <i style="--x: 18.02%; --y: 29.91%; --delay: 225ms" data-city="Las Vegas"></i>
    <i style="--x: 28.6%; --y: 56.69%; --delay: 270ms" data-city="Lima"></i>
    <i style="--x: 47.46%; --y: 28.49%; --delay: 315ms" data-city="Lisbon"></i>
    <i style="--x: 49.96%; --y: 21.38%; --delay: 360ms" data-city="London"></i>
    <i style="--x: 17.15%; --y: 31.08%; --delay: 405ms" data-city="Los Angeles"></i>
    <i style="--x: 48.97%; --y: 27.55%; --delay: 450ms" data-city="Madrid"></i>
    <i style="--x: 29.01%; --y: 46.53%; --delay: 495ms" data-city="Medellin"></i>
    <i style="--x: 90.27%; --y: 71.01%; --delay: 0ms" data-city="Melbourne"></i>
    <i style="--x: 22.46%; --y: 39.2%; --delay: 45ms" data-city="Mexico City"></i>
    <i style="--x: 27.72%; --y: 35.69%; --delay: 90ms" data-city="Miami"></i>
    <i style="--x: 52.55%; --y: 24.74%; --delay: 135ms" data-city="Milan"></i>
    <i style="--x: 53.22%; --y: 23.26%; --delay: 180ms" data-city="Munich"></i>
    <i style="--x: 29.44%; --y: 27.38%; --delay: 225ms" data-city="New York City"></i>
    <i style="--x: 27.39%; --y: 34.15%; --delay: 270ms" data-city="Orlando"></i>
    <i style="--x: 87.64%; --y: 30.73%; --delay: 315ms" data-city="Osaka"></i>
    <i style="--x: 50.65%; --y: 22.86%; --delay: 360ms" data-city="Paris"></i>
    <i style="--x: 54.01%; --y: 22.18%; --delay: 405ms" data-city="Prague"></i>
    <i style="--x: 53.47%; --y: 26.72%; --delay: 450ms" data-city="Rome"></i>
    <i style="--x: 15.99%; --y: 29.01%; --delay: 495ms" data-city="San Francisco"></i>
    <i style="--x: 30.37%; --y: 68.59%; --delay: 0ms" data-city="Santiago"></i>
    <i style="--x: 85.27%; --y: 29.13%; --delay: 45ms" data-city="Seoul"></i>
    <i style="--x: 83.74%; --y: 32.65%; --delay: 90ms" data-city="Shanghai"></i>
    <i style="--x: 78.84%; --y: 49.25%; --delay: 135ms" data-city="Singapore"></i>
    <i style="--x: 92%; --y: 68.82%; --delay: 180ms" data-city="Sydney"></i>
    <i style="--x: 83.77%; --y: 36.09%; --delay: 225ms" data-city="Taipei"></i>
    <i style="--x: 88.79%; --y: 30.18%; --delay: 270ms" data-city="Tokyo"></i>
    <i style="--x: 27.95%; --y: 25.75%; --delay: 315ms" data-city="Toronto"></i>
    <i style="--x: 53.42%; --y: 24.76%; --delay: 360ms" data-city="Venice"></i>
    <i style="--x: 54.55%; --y: 23.22%; --delay: 405ms" data-city="Vienna"></i>
    <i style="--x: 52.37%; --y: 23.68%; --delay: 450ms" data-city="Zurich"></i>
  </div>
  <header>
    <span>Live platform footprint</span>
    <strong class="rguide-impact-title">Travel knowledge,<br />mapped.</strong>
    <p>Published city guides connected through one geographic system</p>
  </header>
  <div class="rguide-impact-data">
    <div><strong data-rguide-count="749">749</strong><span>Published entries</span></div>
    <div><strong data-rguide-count="5979">5,979</strong><span>Guide stops</span></div>
    <div><strong data-rguide-count="4950">4,950</strong><span>Canonical venues</span></div>
    <div><strong data-rguide-count="11362">11,362</strong><span>Source connections</span></div>
    <div><strong data-rguide-count="24813">24,813</strong><span>Hours records</span></div>
    <div><strong data-rguide-count="7364">7,364</strong><span>Localized records</span></div>
  </div>
  <footer><span aria-hidden="true"></span><b>Production data · August 11, 2026</b><small>Map: <a href="https://commons.wikimedia.org/wiki/File:Equirectangular_projection_world_map_without_borders.svg">Ebrahim / Natural Earth · CC BY-SA 4.0</a></small></footer>
</section>

<section class="rguide-opening" aria-label="Project summary">
  <div class="rguide-opening-lower">
    <p>RGuide turns researched city knowledge into a spatial product travelers can browse, trust, and use in place. I designed and engineered the complete platform—from the interaction model and responsive system to the database, publishing tools, media pipeline, localization, and production operations.</p>
    <a class="rguide-live-link" href="https://www.rguide.co" target="_blank" rel="noreferrer">
      <i class="material-symbols-outlined" aria-hidden="true">open_in_new</i>
      <span>Explore the live product</span>
    </a>
  </div>
  <div class="rguide-build-signals" aria-label="Build record">
    <div><strong data-rguide-count="593">593</strong><span>Commits</span></div>
    <div><strong data-rguide-count="71">71</strong><span>Active build days</span></div>
    <div><strong>Apr 28 → Aug 10</strong><span>Prototype to platform</span></div>
  </div>
</section>

<img class="rguide-online-mockup" src="/Projects/RGuide/rguide-imac-mockup.webp" alt="RGuide world explorer displayed on a desktop monitor" width="2800" height="1920" loading="lazy" decoding="async" />

<section class="rguide-impact" data-rguide-impact hidden aria-hidden="true" aria-label="RGuide production data snapshot from August 11, 2026">
  <div class="rguide-city-map" role="img" aria-label="World map marking cities with published RGuide content">
    <img src="/Projects/RGuide/world-outline.svg" alt="" aria-hidden="true" />
    <i style="--x: 51.36%; --y: 20.91%; --delay: 0ms" data-city="Amsterdam"></i>
    <i style="--x: 56.59%; --y: 28.9%; --delay: 45ms" data-city="Athens"></i>
    <i style="--x: 77.92%; --y: 42.36%; --delay: 90ms" data-city="Bangkok"></i>
    <i style="--x: 50.6%; --y: 27.01%; --delay: 135ms" data-city="Barcelona"></i>
    <i style="--x: 53.72%; --y: 20.82%; --delay: 180ms" data-city="Berlin"></i>
    <i style="--x: 29.42%; --y: 47.38%; --delay: 225ms" data-city="Bogota"></i>
    <i style="--x: 33.78%; --y: 69.22%; --delay: 270ms" data-city="Buenos Aires"></i>
    <i style="--x: 53.49%; --y: 19.07%; --delay: 315ms" data-city="Copenhagen"></i>
    <i style="--x: 30.01%; --y: 57.52%; --delay: 360ms" data-city="Cusco"></i>
    <i style="--x: 65.35%; --y: 36%; --delay: 405ms" data-city="Dubai"></i>
    <i style="--x: 48.26%; --y: 20.36%; --delay: 450ms" data-city="Dublin"></i>
    <i style="--x: 53.13%; --y: 25.68%; --delay: 495ms" data-city="Florence"></i>
    <i style="--x: 79.4%; --y: 38.32%; --delay: 0ms" data-city="Hanoi"></i>
    <i style="--x: 81.71%; --y: 37.6%; --delay: 45ms" data-city="Hong Kong"></i>
    <i style="--x: 58.05%; --y: 27.22%; --delay: 90ms" data-city="Istanbul"></i>
    <i style="--x: 78.25%; --y: 48.26%; --delay: 135ms" data-city="Kuala Lumpur"></i>
    <i style="--x: 87.71%; --y: 30.55%; --delay: 180ms" data-city="Kyoto"></i>
    <i style="--x: 18.02%; --y: 29.91%; --delay: 225ms" data-city="Las Vegas"></i>
    <i style="--x: 28.6%; --y: 56.69%; --delay: 270ms" data-city="Lima"></i>
    <i style="--x: 47.46%; --y: 28.49%; --delay: 315ms" data-city="Lisbon"></i>
    <i style="--x: 49.96%; --y: 21.38%; --delay: 360ms" data-city="London"></i>
    <i style="--x: 17.15%; --y: 31.08%; --delay: 405ms" data-city="Los Angeles"></i>
    <i style="--x: 48.97%; --y: 27.55%; --delay: 450ms" data-city="Madrid"></i>
    <i style="--x: 29.01%; --y: 46.53%; --delay: 495ms" data-city="Medellin"></i>
    <i style="--x: 90.27%; --y: 71.01%; --delay: 0ms" data-city="Melbourne"></i>
    <i style="--x: 22.46%; --y: 39.2%; --delay: 45ms" data-city="Mexico City"></i>
    <i style="--x: 27.72%; --y: 35.69%; --delay: 90ms" data-city="Miami"></i>
    <i style="--x: 52.55%; --y: 24.74%; --delay: 135ms" data-city="Milan"></i>
    <i style="--x: 53.22%; --y: 23.26%; --delay: 180ms" data-city="Munich"></i>
    <i style="--x: 29.44%; --y: 27.38%; --delay: 225ms" data-city="New York City"></i>
    <i style="--x: 27.39%; --y: 34.15%; --delay: 270ms" data-city="Orlando"></i>
    <i style="--x: 87.64%; --y: 30.73%; --delay: 315ms" data-city="Osaka"></i>
    <i style="--x: 50.65%; --y: 22.86%; --delay: 360ms" data-city="Paris"></i>
    <i style="--x: 54.01%; --y: 22.18%; --delay: 405ms" data-city="Prague"></i>
    <i style="--x: 53.47%; --y: 26.72%; --delay: 450ms" data-city="Rome"></i>
    <i style="--x: 15.99%; --y: 29.01%; --delay: 495ms" data-city="San Francisco"></i>
    <i style="--x: 30.37%; --y: 68.59%; --delay: 0ms" data-city="Santiago"></i>
    <i style="--x: 85.27%; --y: 29.13%; --delay: 45ms" data-city="Seoul"></i>
    <i style="--x: 83.74%; --y: 32.65%; --delay: 90ms" data-city="Shanghai"></i>
    <i style="--x: 78.84%; --y: 49.25%; --delay: 135ms" data-city="Singapore"></i>
    <i style="--x: 92%; --y: 68.82%; --delay: 180ms" data-city="Sydney"></i>
    <i style="--x: 83.77%; --y: 36.09%; --delay: 225ms" data-city="Taipei"></i>
    <i style="--x: 88.79%; --y: 30.18%; --delay: 270ms" data-city="Tokyo"></i>
    <i style="--x: 27.95%; --y: 25.75%; --delay: 315ms" data-city="Toronto"></i>
    <i style="--x: 53.42%; --y: 24.76%; --delay: 360ms" data-city="Venice"></i>
    <i style="--x: 54.55%; --y: 23.22%; --delay: 405ms" data-city="Vienna"></i>
    <i style="--x: 52.37%; --y: 23.68%; --delay: 450ms" data-city="Zurich"></i>
  </div>
  <header>
    <span>Live platform footprint</span>
    <strong class="rguide-impact-title">One platform,<br />built to scale.</strong>
    <p>Published city guides connected through one geographic system</p>
  </header>
  <div class="rguide-impact-data">
    <div><strong data-rguide-count="749">749</strong><span>Published entries</span></div>
    <div><strong data-rguide-count="5979">5,979</strong><span>Guide stops</span></div>
    <div><strong data-rguide-count="4950">4,950</strong><span>Canonical venues</span></div>
    <div><strong data-rguide-count="11362">11,362</strong><span>Source connections</span></div>
    <div><strong data-rguide-count="24813">24,813</strong><span>Hours records</span></div>
    <div><strong data-rguide-count="7364">7,364</strong><span>Localized records</span></div>
  </div>
  <footer><span aria-hidden="true"></span><b>Production data · August 11, 2026</b><small>Map: <a href="https://commons.wikimedia.org/wiki/File:Equirectangular_projection_world_map_without_borders.svg">Ebrahim / Natural Earth · CC BY-SA 4.0</a></small></footer>
</section>

## From Prototype to Platform

The product moved from a local-data map prototype to a production platform in 105 calendar days. Select a milestone—or watch the build advance—to follow the change in emphasis.

<section class="rguide-timeline" data-rguide-timeline aria-label="Interactive RGuide product evolution">
  <header>
    <span>105 calendar days</span>
    <strong>Prototype → product → platform</strong>
    <small>593 commits · 71 active days</small>
  </header>
  <div class="rguide-timeline-track">
    <span class="rguide-timeline-line" aria-hidden="true"><span data-rguide-timeline-progress></span></span>
    <button type="button" aria-pressed="true" data-rguide-phase data-phase="01" data-title="Frame the experience" data-system="Interaction" data-copy="Built the split-screen explorer, responsive map behavior, route structure, and first local guide model.">
      <span>Apr 28</span><i aria-hidden="true"></i><strong>Prototype</strong>
    </button>
    <button type="button" aria-pressed="false" data-rguide-phase data-phase="02" data-title="Make it live" data-system="Product" data-copy="Connected authentication, editable profiles, submissions, runtime editorial content, and crawlable city routes.">
      <span>Apr 29</span><i aria-hidden="true"></i><strong>Live data</strong>
    </button>
    <button type="button" aria-pressed="false" data-rguide-phase data-phase="03" data-title="Normalize the product" data-system="Data" data-copy="Replaced blob records with reusable destinations, entries, stops, venues, sources, hours, events, and render views.">
      <span>May 10</span><i aria-hidden="true"></i><strong>Normalize</strong>
    </button>
    <button type="button" aria-pressed="false" data-rguide-phase data-phase="04" data-title="Operationalize quality" data-system="Systems" data-copy="Added publishing and verification flows, boundaries, media ingestion, analytics, hours, and schema audits.">
      <span>May 27</span><i aria-hidden="true"></i><strong>Operate</strong>
    </button>
    <button type="button" aria-pressed="false" data-rguide-phase data-phase="05" data-title="Scale the surface" data-system="Platform" data-copy="Expanded to 47 cities, hardened access, localized Spanish content, added responsive media, caches, and PWA installation.">
      <span>Aug 10</span><i aria-hidden="true"></i><strong>Scale</strong>
    </button>
  </div>
  <div class="rguide-timeline-detail" aria-live="polite">
    <span data-rguide-phase-number>01</span>
    <div><strong data-rguide-phase-title>Frame the experience</strong><p data-rguide-phase-copy>Built the split-screen explorer, responsive map behavior, route structure, and first local guide model.</p></div>
    <small data-rguide-phase-system>Interaction</small>
  </div>
</section>

The governing decision stayed consistent: **increase the structure behind the interface without increasing the complexity in front of the traveler.**

## The System at a Glance

The system is organized in layers. Open any layer below to see what it owns and why the separation matters.

<div class="rguide-system" aria-label="Interactive RGuide system architecture">
  <details open>
    <summary>
      <span>01</span>
      <strong>Experience</strong>
      <small>Map + route + responsive UI</small>
    </summary>
    <div>
      <p>A Next.js App Router interface keeps the map, destination hierarchy, filters, guide rail, selected guide, and selected place synchronized. URLs represent real product state, so an interaction can also become a shareable and indexable page.</p>
      <ul>
        <li>Desktop split-screen and mobile sheet patterns</li>
        <li>Map camera, boundary, marker, and guide-selection state</li>
        <li>City, category, guide, event, venue, creator, and locale routes</li>
      </ul>
    </div>
  </details>
  <details>
    <summary>
      <span>02</span>
      <strong>Application</strong>
      <small>Server reads + client state</small>
    </summary>
    <div>
      <p>Server components and scoped endpoints assemble only the destination and guide data a route needs. Zustand and focused React hooks handle transient explorer state, favorites, itinerary workspaces, and places-been behavior without turning the database into UI state.</p>
      <ul>
        <li>Scoped app-data and editorial-guide reads</li>
        <li>Authentication, profile, submission, and analytics endpoints</li>
        <li>Static HTML and local fallbacks for graceful degradation</li>
      </ul>
    </div>
  </details>
  <details>
    <summary>
      <span>03</span>
      <strong>Data</strong>
      <small>Normalized source of truth</small>
    </summary>
    <div>
      <p>Supabase/Postgres stores destinations, venues, editorial entries, stops, events, schedules, classifications, hours, media, and citations as reusable records. PostGIS points and boundary polygons turn the editorial model into a geographic one.</p>
      <ul>
        <li>Relational records replace legacy blob-table workflows</li>
        <li>Canonical venues share facts across many guides</li>
        <li>Row-level policies separate public reading from controlled writes</li>
      </ul>
    </div>
  </details>
  <details>
    <summary>
      <span>04</span>
      <strong>Delivery</strong>
      <small>Views + caches + media</small>
    </summary>
    <div>
      <p>Database views and versioned render caches transform normalized records into the stable card shape expected by the interface. Cloudflare R2 holds canonical imagery and responsive renditions, while local snapshots protect key destination and boundary experiences from upstream outages.</p>
      <ul>
        <li>Normalized records → render view → versioned cache</li>
        <li>Source image → canonical media → responsive renditions</li>
        <li>Live data → scoped fallback → crawlable output</li>
      </ul>
    </div>
  </details>
  <details>
    <summary>
      <span>05</span>
      <strong>Operations</strong>
      <small>Publish + verify + learn</small>
    </summary>
    <div>
      <p>Purpose-built scripts and runbooks make content operations repeatable. Guide publishing resolves entities, verifies structure and hours, ingests media, refreshes caches, and audits the final route. Localization, analytics, SEO, and event workflows use the same operational discipline.</p>
      <ul>
        <li>Guide, event, media, hours, and translation pipelines</li>
        <li>Schema, content-source, SEO, and publish verification</li>
        <li>First-party click analytics and affiliate attribution</li>
      </ul>
    </div>
  </details>
</div>

## Designing the Data Model

The decisive implementation shift was separating authored meaning from rendered presentation. Early content could move quickly as local objects, but every new guide repeated destinations, venue facts, images, and sources. That made scale fragile: a venue closure or changed opening time could require edits in many unrelated lists.

The normalized model gives each fact one owner and lets guides compose those facts into an editorial point of view.

<figure class="rguide-schema" data-rguide-schema aria-labelledby="rguide-schema-title">
  <header>
    <span id="rguide-schema-title">Production schema · core relationships</span>
    <p>Canonical records converge through secure views, versioned caches, and localized delivery.</p>
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
          <span>Join model</span>
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
          <span>Canonical place</span>
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
          <span>Provenance</span>
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
          <span>Typed taxonomy</span>
          <strong>venue_tags</strong>
          <div class="rguide-schema-relations"><small>food · stay · nightlife</small></div>
          <span class="rguide-schema-drop" aria-hidden="true"><i></i></span>
        </article>
      </div>
      <div class="rguide-schema-view-layer">
        <article class="rguide-schema-node rguide-schema-node--derived rguide-schema-node--aggregate">
          <i class="material-symbols-outlined" aria-hidden="true">account_tree</i>
          <span>Security-invoker view</span>
          <strong>entries_maplist</strong>
          <div class="rguide-schema-relations"><small>destinations + entries + stops + venues + sources</small></div>
          <span class="rguide-schema-view-flow" aria-hidden="true"><i></i></span>
        </article>
      </div>
      <div class="rguide-schema-delivery" aria-label="Derived delivery path">
        <article class="rguide-schema-node rguide-schema-node--derived">
          <i class="material-symbols-outlined" aria-hidden="true">cached</i>
          <span>Versioned payload</span>
          <strong>entry_render_cache</strong>
        </article>
        <span class="rguide-schema-edge" aria-hidden="true"><i></i></span>
        <article class="rguide-schema-node rguide-schema-node--derived">
          <i class="material-symbols-outlined" aria-hidden="true">translate</i>
          <span>Locale payload</span>
          <strong>localized_cache</strong>
        </article>
        <span class="rguide-schema-edge" aria-hidden="true"><i></i></span>
        <article class="rguide-schema-node rguide-schema-node--output">
          <i class="material-symbols-outlined" aria-hidden="true">map</i>
          <span>Product surface</span>
          <strong>explorer UI</strong>
        </article>
      </div>
    </div>
  </div>
  <figcaption>
    <span><i></i>Canonical truth</span>
    <span><i></i>Editorial meaning</span>
    <span><i></i>Derived delivery</span>
  </figcaption>
</figure>

This structure supports both reuse and editorial specificity. A venue owns its address, coordinates, operating state, classification, hours, and canonical media. A guide stop owns the reason that venue belongs in a particular story, its order, contextual copy, and journey timing. Updating shared truth no longer erases the authorial reason for inclusion.

### A Typed Taxonomy Instead of Generic Tags

Food, nightlife, stay, nature, culture, activities, routes, and essentials need different filters. The schema therefore uses typed fields—lodging type, food service type, cuisine, nightlife type, music genre, price tier, and curated attribute vocabularies—rather than a single undifferentiated tag array.

That structure powers useful questions in the interface: *Which neighborhoods are strongest for cocktail bars? Which stays are social but not party hostels? Which restaurants are reliable after midnight?* The filtering model is a direct expression of the content model.

## Building the Publishing Engine

Content quality depends on operations, not only copy. I created a repeatable pipeline that treats a guide as a dataset with editorial judgment.

<div class="rguide-pipeline" aria-label="RGuide publishing pipeline">
  <div>
    <span>01</span>
    <i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">travel_explore</i>
    <strong>Research</strong>
    <p>Define the user need, guide scope, authoritative sources, and minimum stop quality.</p>
  </div>
  <div>
    <span>02</span>
    <i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">hub</i>
    <strong>Resolve</strong>
    <p>Match destinations and reuse canonical venues before creating any new entity.</p>
  </div>
  <div>
    <span>03</span>
    <i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">account_tree</i>
    <strong>Structure</strong>
    <p>Write entries and ordered stops with classification, coordinates, sources, and hours.</p>
  </div>
  <div>
    <span>04</span>
    <i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">auto_awesome</i>
    <strong>Enrich</strong>
    <p>Ingest canonical media, responsive renditions, boundaries, and provider-backed details.</p>
  </div>
  <div>
    <span>05</span>
    <i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">publish</i>
    <strong>Publish</strong>
    <p>Generate render views, refresh current caches, and expose the guide through scoped routes.</p>
  </div>
  <div>
    <span>06</span>
    <i class="material-symbols-outlined rguide-pipeline-icon" aria-hidden="true">verified</i>
    <strong>Verify</strong>
    <p>Audit hours, sources, schema shape, media, URLs, SEO output, and live rendering.</p>
  </div>
</div>

The repository contains dedicated workflows for editorial guides, destination descriptions, city boundaries, venue hours, weekly events, R2 media, translation batches, cache refreshes, and verification. These are small operational products inside the product: each one defines inputs, quality gates, failure handling, and a deterministic output.

### Resilience Is Part of the Content Model

The live interface prefers normalized views and current render caches. Static descriptions, guide payloads, boundary snapshots, and destination-image fallbacks protect the experience when a database or media request is temporarily unavailable. The fallback never becomes the authoring system; it is a deliberately derived safety layer.

That distinction made it possible to migrate away from legacy blob tables without sacrificing the stable card shape already used by the frontend.

## Translating the System Into an Experience

<figure class="rguide-product-shot rguide-product-shot--feature">
  <img src="/Projects/RGuide/rguide-barcelona.jpg" alt="RGuide Barcelona late-night food guide showing synchronized map markers, source-backed copy, image strip, and place details" width="1280" height="720" loading="lazy" decoding="async" />
  <figcaption>A guide is simultaneously editorial content, a map layer, a set of sourced places, and a deep-linkable route.</figcaption>
</figure>

The interface uses one consistent mental model across scales. The left side answers **where am I?** The map answers **how does it relate spatially?** The guide rail answers **what is worth doing and why?** Selecting a destination, neighborhood, category, guide, or place updates the other surfaces rather than creating disconnected navigation modes.

### Interaction and Routing Work Together

- City and neighborhood boundaries load only when they become relevant.
- Guide markers, selected places, and the camera share one state model.
- Expanded guides update the URL immediately, preserving the current destination and category context.
- Each city, category, guide, event, and venue has crawlable server-rendered output in addition to the interactive explorer.
- The responsive system reorganizes the same hierarchy into mobile controls and sheets rather than reducing it to a separate, weaker product.

## Performance and Delivery Systems

Map products become slow when everything is treated as global. RGuide instead reduces work at every layer.

<div class="rguide-principles">
  <article>
    <span>Scoped reads</span>
    <p>Routes request the current city, destination, or guide instead of repeatedly loading the complete editorial catalog.</p>
  </article>
  <article>
    <span>Deferred geography</span>
    <p>Neighborhood scoring and boundary geometry wait until the user reaches the relevant destination scope.</p>
  </article>
  <article>
    <span>Render caches</span>
    <p>Normalized joins are converted into versioned, frontend-ready payloads with an explicit current-cache contract.</p>
  </article>
  <article>
    <span>Responsive media</span>
    <p>R2 ingestion creates canonical, deduplicated image records and right-sized renditions for cards and details.</p>
  </article>
  <article>
    <span>Stable crawling</span>
    <p>Metadata, sitemaps, canonical URLs, server output, and local fallbacks keep search access independent of client interaction.</p>
  </article>
  <article>
    <span>Installable product</span>
    <p>A web manifest and service worker turn the responsive site into an installable web app without forking the experience.</p>
  </article>
</div>

## Systems for Growth

The same architecture supports product growth without turning the core explorer into an advertising shell.

- **Localization:** normalized translation tables and locale-specific render caches preserve one canonical English record while delivering complete Spanish routes, metadata, and sitemaps.
- **SEO:** city, category, query-focused guide, event, venue, country, and continent routes translate explorer state into useful entry points for search.
- **Analytics:** first-party click collection batches events, records campaign context, and powers a protected internal dashboard while retaining a Vercel analytics layer.
- **Monetization:** stay calls-to-action use city and guide context to create attributable affiliate routes without changing editorial ranking.
- **Participation:** authentication, profiles, favorites, saved places, and controlled guide submission add user value while keeping public write paths gated.

<figure
  class="rguide-traffic"
  data-rguide-traffic
  data-points="0,1176,2420,2703,3862,4401,4658,5094,5541,5935,6103,6871,7360,7455,7710,7912,8267,8622,8977,9332"
  data-labels="Apr 27,May 04,May 11,May 18,May 25,Jun 01,Jun 08,Jun 15,Jun 22,Jun 29,Jul 06,Jul 13,Jul 20,Jul 27,Aug 03,Aug 10,Aug 17,Aug 24,Aug 31,Sep 07"
  data-actual-count="16"
  aria-labelledby="rguide-traffic-title"
>
  <header>
    <div>
      <span>Production traffic · Cumulative pageview growth</span>
      <h3 id="rguide-traffic-title">Pageview growth, actual to projected.</h3>
      <p>The solid line accumulates verified production pageviews. The dotted continuation projects the recent viewing rate forward four weeks.</p>
    </div>
    <dl>
      <div><dt>Observed pageviews</dt><dd data-rguide-count="7912">7,912</dd></div>
      <div><dt>Unique visitors</dt><dd data-rguide-count="1115">1,115</dd></div>
      <div><dt>Four-week projection</dt><dd data-rguide-count="9332">9,332</dd></div>
    </dl>
  </header>
  <div class="rguide-traffic-stage">
    <canvas
      data-rguide-traffic-canvas
      role="img"
      aria-label="Cumulative pageviews rise from zero on April 27 to 7,912 observed pageviews on August 10, 2026, followed by a four-week projection reaching 9,332 pageviews by September 7."
    ></canvas>
    <output class="rguide-traffic-tooltip" data-rguide-traffic-tooltip hidden></output>
  </div>
  <figcaption>
    <span class="rguide-traffic-key"><i aria-hidden="true"></i> Observed cumulative pageviews</span>
    <span class="rguide-traffic-key rguide-traffic-key--projection"><i aria-hidden="true"></i> Projected cumulative pageviews</span>
    <span>Vercel Web Analytics · Production · Apr 28–Aug 12, 2026 · UTC</span>
    <span>Projection: trailing five complete-week average · +355/week</span>
  </figcaption>
</figure>

<section class="rguide-build-proof" aria-labelledby="rguide-build-proof-title">
  <header>
    <span>Implementation outcome</span>
    <h2 id="rguide-build-proof-title">What the build proved.</h2>
    <p>RGuide proved that a travel platform can grow without making the traveler experience harder to use. From the first prototype to 749 published entries, the interface kept the same clear pattern while the system underneath became more structured and reusable.</p>
  </header>
  <div class="rguide-proof-grid">
    <article>
      <div><i class="material-symbols-outlined" aria-hidden="true">database</i><b>01</b></div>
      <span>Reusable foundation</span>
      <h3>Facts are stored once.</h3>
      <p>Destinations, venues, events, hours, sources, and images each have one shared record instead of being copied into every guide.</p>
      <small>Correct a fact once; every guide that uses it receives the update.</small>
    </article>
    <article>
      <div><i class="material-symbols-outlined" aria-hidden="true">edit_note</i><b>02</b></div>
      <span>Editorial layer</span>
      <h3>Guides add the meaning.</h3>
      <p>Editors can explain why a place matters, when to visit, and where it belongs in a route without rewriting its underlying facts.</p>
      <small>Shared data stays accurate while every guide keeps its own point of view.</small>
    </article>
    <article>
      <div><i class="material-symbols-outlined" aria-hidden="true">speed</i><b>03</b></div>
      <span>Fast delivery</span>
      <h3>The interface stays simple.</h3>
      <p>Focused APIs, ready-to-render views, responsive images, caches, and fallbacks keep the map fast as the catalog grows.</p>
      <small>Travelers see a consistent product—not the complexity behind it.</small>
    </article>
  </div>
  <footer>
    <strong>The result</strong>
    <p>RGuide can add cities, languages, content, and contributors without redesigning the product for every destination. Editors get a dependable publishing system, and travelers get the same clear journey from world to street.</p>
  </footer>
</section>

<section class="rguide-closing-film" aria-labelledby="rguide-closing-film-title">
  <header>
    <div>
      <span>Live product walkthrough · 32 sec</span>
      <h2 id="rguide-closing-film-title">World to street.</h2>
    </div>
    <div class="rguide-closing-hierarchy">
      <span>Navigation hierarchy</span>
      <p>The same geographic model carries a traveler from broad orientation to a useful, editorially curated route.</p>
      <p class="rguide-hierarchy-path" aria-label="World to continent to country to city to neighborhood to guide">
        <b>World</b><i aria-hidden="true">→</i><b>Continent</b><i aria-hidden="true">→</i><b>Country</b><i aria-hidden="true">→</i><b>City</b><i aria-hidden="true">→</i><b>Neighborhood</b><i aria-hidden="true">→</i><b>Guide</b>
      </p>
    </div>
  </header>
  <figure>
    <video
      autoplay
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
      <p>Begin with a spatial overview of available travel knowledge.</p>
    </li>
    <li>
      <span>02</span>
      <small>Focus</small>
      <strong>Europe</strong>
      <p>Move from the global index into a browsable regional collection.</p>
    </li>
    <li>
      <span>03</span>
      <small>Narrow</small>
      <strong>Spain</strong>
      <p>Compare destinations through a country-level view.</p>
    </li>
    <li>
      <span>04</span>
      <small>Explore</small>
      <strong>Barcelona</strong>
      <p>Pair city context, live geography, and editorial guides.</p>
    </li>
    <li>
      <span>05</span>
      <small>Understand</small>
      <strong>Neighborhoods</strong>
      <p>Move between districts without losing city context.</p>
    </li>
    <li>
      <span>06</span>
      <small>Act</small>
      <strong>Selected guide</strong>
      <p>Open a curated route designed for use on the street.</p>
    </li>
  </ol>
</section>

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
    font-size: clamp(3rem, 6cqw, 5.5rem);
    line-height: 0.9;
    letter-spacing: -0.065em;
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
    font-size: clamp(1.6rem, 2.6cqw, 2.5rem);
    line-height: 0.96;
    letter-spacing: -0.055em;
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
    font-size: clamp(1.8rem, 4vw, 3.8rem);
    line-height: 0.96;
    letter-spacing: -0.06em;
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
    font-size: clamp(2.8rem, 6vw, 5.9rem);
    line-height: 0.84;
    letter-spacing: -0.075em;
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

  @container (max-width: 52rem) {
    .rguide-build-proof > header {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .project-content .rguide-build-proof h2 {
      max-width: 11ch;
      font-size: clamp(2.8rem, 11cqw, 4.6rem);
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

    .project-content .rguide-proof-grid h3 {
      font-size: clamp(1.75rem, 6cqw, 2.5rem);
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
      font-size: clamp(2.8rem, 6cqw, 4.8rem);
    }

    .rguide-traffic dl {
      width: 100%;
      max-width: none;
    }
  }

  @container (max-width: 42rem) {
    .project-content .rguide-traffic h3 {
      font-size: clamp(2.35rem, 10cqw, 3.7rem);
    }

    .rguide-traffic dl {
      grid-template-columns: 1fr;
    }

    .rguide-traffic dl > div {
      min-height: 5.5rem;
    }
  }

  @container (max-width: 76rem) {
    .rguide-closing-film > header {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .rguide-closing-hierarchy {
      max-width: 48rem;
    }

    .project-content .rguide-closing-film h2 {
      font-size: clamp(3rem, 8cqw, 5.5rem);
    }
  }

  @container (max-width: 36rem) {
    .project-content .rguide-closing-film h2 {
      font-size: clamp(2.75rem, 12cqw, 4.2rem);
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
      font-size: clamp(2.75rem, 14vw, 4.2rem);
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
