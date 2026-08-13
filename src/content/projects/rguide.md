---
title: "RGuide"
description: "Designing and engineering a map-first travel platform—and the data, publishing, media, localization, and growth systems that make it scale."
tags: ["UI/UX", "Product Design", "Development", "Data Systems"]
cover: "/Projects/RGuide/rguide-imac-mockup.webp"
hero: "/Projects/RGuide/rguide-imac-mockup.webp"
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

<section class="rguide-resilience" aria-labelledby="rguide-resilience-title">
  <header>
    <span>Product resilience</span>
    <h3 id="rguide-resilience-title">Built to stay useful when a service fails.</h3>
    <p>A travel guide should not disappear because a database or image service is temporarily slow. RGuide prepares a verified version of published content so the essential experience can remain available.</p>
  </header>
  <div class="rguide-resilience-paths">
    <article>
      <div class="rguide-resilience-path-heading">
        <i class="material-symbols-outlined" aria-hidden="true">cloud_done</i>
        <span>Normal operation</span>
        <b>01</b>
      </div>
      <h4>Serve the newest published version.</h4>
      <p>Structured destination, venue, hours, source, and media records are assembled into a frontend-ready guide. The interface requests only the city or guide the traveler is viewing.</p>
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
      <h4>Use the last verified version.</h4>
      <p>Saved guide content, map boundaries, destination descriptions, and image fallbacks keep the page usable while the live service recovers.</p>
      <div class="rguide-resilience-flow" aria-label="Verified guide data, boundary snapshots, and image fallbacks flow to the same explorer">
        <span>Verified content</span><i aria-hidden="true">+</i><span>Saved map and media</span><i aria-hidden="true">→</i><span>Same explorer</span>
      </div>
    </article>
  </div>
  <footer>
    <strong>Why this mattered</strong>
    <p>Both paths deliver content in the same predictable structure. That let me replace the original all-in-one JSON records with a normalized data model in stages—without redesigning the guide cards, routes, or map interactions. The backup remains a read-only copy of published content, never a second place to edit it.</p>
  </footer>
</section>

<section class="rguide-design-system" aria-labelledby="rguide-design-system-title">
  <header class="rguide-ds-intro">
    <div>
      <span>Production interface system</span>
      <h3 id="rguide-design-system-title">A reusable product language.</h3>
    </div>
    <p>The wireframes isolate the logic behind the interface before the visual system is applied: geographic orientation stays visible, guides remain comparable, and every editorial claim resolves into a useful place.</p>
  </header>
  <article class="rguide-ds-sheet" aria-labelledby="rguide-ds-structure-title">
    <header class="rguide-ds-sheet-header">
      <span>Plate 01 / Structure</span>
      <h4 id="rguide-ds-structure-title">Two scales, one mental model</h4>
      <small>From product shell to guide detail</small>
    </header>
    <div class="rguide-ds-wireframes">
      <figure class="rguide-ds-specimen rguide-ds-specimen--home-shell">
        <figcaption><b>01</b><span><strong>Explorer layout</strong><small>Homepage / persistent geographic context</small></span></figcaption>
        <div class="rguide-ds-layout-theory">
          <ol class="rguide-ds-theory-key">
            <li><b>01</b><span><strong>Browse by hierarchy</strong><small>The left rail narrows the world into regions, countries, cities, and neighborhoods.</small></span></li>
            <li><b>02</b><span><strong>Keep position visible</strong><small>The map remains present while the traveler changes scope or compares options.</small></span></li>
            <li><b>03</b><span><strong>Filter consistently</strong><small>The same category system follows the traveler through every geographic level.</small></span></li>
            <li><b>04</b><span><strong>Compare before opening</strong><small>The guide index summarizes the choice before revealing the full editorial route.</small></span></li>
          </ol>
          <article class="rguide-ds-home-wireframe" aria-label="Annotated wireframe showing the RGuide homepage as navigation, map, filters, and guide index">
            <ol class="rguide-ds-callouts rguide-ds-callouts--home" aria-hidden="true">
              <li style="--x:14%;--line:4.3rem">01</li><li style="--x:46%;--line:6.5rem">02</li><li style="--x:73%;--line:8.4rem">03</li><li style="--x:91%;--line:14.5rem">04</li>
            </ol>
            <aside class="rguide-ds-home-nav">
              <small class="rguide-ds-wf-label">Destination hierarchy</small>
              <div class="rguide-ds-home-heading"><i></i><i></i></div>
              <div class="rguide-ds-home-rows">
                <span><i></i><em><b></b><small></small></em></span>
                <span><i></i><em><b></b><small></small></em></span>
                <span><i></i><em><b></b><small></small></em></span>
                <span><i></i><em><b></b><small></small></em></span>
              </div>
            </aside>
            <div class="rguide-ds-home-map">
              <small class="rguide-ds-wf-label">Persistent map</small>
              <div class="rguide-ds-map-streets" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <b style="--x:31%;--y:31%"></b><b style="--x:67%;--y:24%"></b><b style="--x:48%;--y:66%"></b><b style="--x:76%;--y:55%"></b>
              <div class="rguide-ds-map-controls" aria-hidden="true"><i>+</i><i>−</i></div>
            </div>
            <section class="rguide-ds-home-index">
              <header><small class="rguide-ds-wf-label">Guide index</small><div><i></i><i></i></div><span><i></i><i></i></span></header>
              <nav><small>Shared filters</small><div><i></i><i></i><i></i><i></i></div></nav>
              <div class="rguide-ds-home-cards">
                <small class="rguide-ds-wf-label">Comparable guide cards</small>
                <article><figure><i class="material-symbols-outlined" aria-hidden="true">image</i></figure><span><b></b><small></small><small></small></span><em><i></i><i></i></em></article>
                <article><figure><i class="material-symbols-outlined" aria-hidden="true">image</i></figure><span><b></b><small></small><small></small></span><em><i></i><i></i></em></article>
                <article><figure><i class="material-symbols-outlined" aria-hidden="true">image</i></figure><span><b></b><small></small><small></small></span><em><i></i><i></i></em></article>
              </div>
            </section>
          </article>
        </div>
      </figure>
      <figure class="rguide-ds-specimen rguide-ds-specimen--guide-shell">
        <figcaption><b>02</b><span><strong>Guide module</strong><small>MapListCardShell / editorial information hierarchy</small></span></figcaption>
        <div class="rguide-ds-guide-theory">
          <ol class="rguide-ds-theory-key">
            <li><b>01</b><span><strong>Orient</strong><small>Name the guide, its category, scope, and available actions.</small></span></li>
            <li><b>02</b><span><strong>Keep context</strong><small>Expose adjacent guides without ejecting the traveler from the city.</small></span></li>
            <li><b>03</b><span><strong>Explain and prove</strong><small>Pair editorial rationale with sources and an ordered visual route.</small></span></li>
            <li><b>04</b><span><strong>Resolve to action</strong><small>Turn the guide’s argument into a specific place a traveler can use.</small></span></li>
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
                <small>Editorial rationale</small>
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
      <span>Plate 02 / Foundations</span>
      <h4 id="rguide-ds-foundations-title">Tokens and controls</h4>
      <small>Small rules establish system-wide behavior</small>
    </header>
    <div class="rguide-ds-foundations">
      <figure class="rguide-ds-specimen rguide-ds-specimen--categories">
        <figcaption><b>01</b><span><strong>Category tokens</strong><small>Label · icon · map color · POI color</small></span></figcaption>
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
        <figcaption><b>02</b><span><strong>Action family</strong><small>Rest · hover · selected</small></span></figcaption>
        <div class="rguide-ds-actions" aria-label="Guide action button states">
          <button type="button" aria-label="Add guide"><i class="material-symbols-outlined" aria-hidden="true">add</i></button>
          <button type="button" aria-label="Save guide"><i class="material-symbols-outlined" aria-hidden="true">favorite</i></button>
          <button type="button" class="is-active" aria-label="Saved guide"><i class="material-symbols-outlined" aria-hidden="true">favorite</i></button>
          <button type="button" aria-label="Expand guide"><i class="material-symbols-outlined" aria-hidden="true">expand_more</i></button>
          <button type="button" class="rguide-ds-action-square" aria-label="Search"><i class="material-symbols-outlined" aria-hidden="true">search</i></button>
        </div>
      </figure>
      <figure class="rguide-ds-specimen rguide-ds-specimen--markers">
        <figcaption><b>03</b><span><strong>Map markers</strong><small>Guide stop · selected stop · nested POI</small></span></figcaption>
        <div class="rguide-ds-markers" aria-label="Map marker hierarchy">
          <span class="rguide-ds-marker" style="--marker:#f59e0b">1</span>
          <span class="rguide-ds-marker is-selected" style="--marker:#f59e0b">5</span>
          <span class="rguide-ds-marker" style="--marker:#6366f1">8</span>
          <span class="rguide-ds-marker rguide-ds-marker--nested" style="--marker:#f59e0b">A</span>
        </div>
      </figure>
      <figure class="rguide-ds-specimen rguide-ds-specimen--route">
        <figcaption><b>04</b><span><strong>Route hierarchy</strong><small>The navigation model becomes the URL model</small></span></figcaption>
        <nav class="rguide-ds-route" aria-label="Example geographic route">
          <span>World</span><i aria-hidden="true">→</i><span>Europe</span><i aria-hidden="true">→</i><span>Spain</span><i aria-hidden="true">→</i><strong>Barcelona</strong>
        </nav>
      </figure>
      <figure class="rguide-ds-specimen rguide-ds-specimen--sources">
        <figcaption><b>05</b><span><strong>Source proof</strong><small>Editorial claims keep visible provenance</small></span></figcaption>
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
      <span>Plate 03 / In production</span>
      <h4 id="rguide-ds-proof-title">The system in use</h4>
      <small>City orientation → expanded editorial guide</small>
    </header>
    <div class="rguide-ds-product-proof">
      <figure class="rguide-ds-product-view">
        <figcaption><b>01</b><span><strong>City view</strong><small>Barcelona / orientation and guide comparison</small></span></figcaption>
        <button type="button" class="rguide-ds-product-zoom" data-project-lightbox-trigger aria-label="Open City view at full size">
          <img src="/Projects/RGuide/rguide-barcelona-city-hd.png" alt="RGuide Barcelona city view with destination context, map, filters, neighborhoods, and guide index" width="1600" height="900" loading="lazy" decoding="async" />
          <span class="rguide-ds-product-zoom-cue" aria-hidden="true"><span class="material-symbols-outlined">open_in_full</span><b>View full size</b></span>
        </button>
      </figure>
      <figure class="rguide-ds-product-view">
        <figcaption><b>02</b><span><strong>Expanded guide</strong><small>Editorial rationale / sources / ordered places</small></span></figcaption>
        <button type="button" class="rguide-ds-product-zoom" data-project-lightbox-trigger aria-label="Open Expanded guide at full size">
          <img src="/Projects/RGuide/rguide-barcelona-expanded-hd.png" alt="RGuide Barcelona late-night food guide showing synchronized map markers, source-backed copy, ordered places, and place details" width="1600" height="900" loading="lazy" decoding="async" />
          <span class="rguide-ds-product-zoom-cue" aria-hidden="true"><span class="material-symbols-outlined">open_in_full</span><b>View full size</b></span>
        </button>
      </figure>
    </div>
  </article>
</section>

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

  .rguide-ds-product-zoom img {
    transition: transform 320ms cubic-bezier(.2,.7,.2,1), opacity 320ms ease;
  }

  .rguide-ds-product-zoom-cue {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    min-height: 2.75rem;
    padding: 0.7rem 0.9rem;
    background: #09090b;
    box-shadow: 0 0.5rem 1.5rem rgba(9,9,11,.2);
    color: #fff;
    transition: background 220ms ease, color 220ms ease, transform 220ms ease;
  }

  .rguide-ds-product-zoom-cue .material-symbols-outlined {
    font-size: 1.15rem;
    font-variation-settings: "wght" 500;
  }

  .rguide-ds-product-zoom-cue b {
    font-family: var(--font-display);
    font-size: 0.58rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .rguide-ds-product-zoom:focus-visible {
    outline: 3px solid var(--signal);
    outline-offset: 4px;
  }

  @media (hover: hover) {
    .rguide-ds-product-zoom:hover img {
      opacity: 0.94;
      transform: scale(1.012);
    }

    .rguide-ds-product-zoom:hover .rguide-ds-product-zoom-cue {
      background: var(--signal);
      transform: translate(-0.2rem, -0.2rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rguide-ds-product-zoom img,
    .rguide-ds-product-zoom-cue {
      transition: none;
    }
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
    grid-template-columns: minmax(18rem, 0.8fr) minmax(22rem, 1.2fr);
    gap: 1rem clamp(2rem, 6cqw, 6rem);
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
    margin: clamp(2.75rem, 5cqw, 4.5rem) 0 0;
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
