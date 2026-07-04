# xHalo Buddhist — Rotating Halo V6

Cloudflare Pages static package based on the approved rotating-halo composition.

## V6 fixes

- Caps the desktop hero at a centered maximum width of **1920px** so ultra-wide monitors cannot pull visual layers apart.
- Maps the desktop scene to one shared **1536 × 1024 source coordinate system**.
- Places the approved Buddha crop at its exact original source coordinates (`x=500`, `y=80`, `900 × 850`).
- Restores the lower river, floating lotuses, shoreline lights and reflections as an independent full-width background layer.
- Places the Buddha and lotus pedestal layer above the river layer, preserving the existing refined rotating halo and occlusion behavior.
- Removes the former independent `vw`-scaled river crop that produced visible rectangular seams at ordinary and ultra-wide aspect ratios.
- Adds restrained gold and cool-white water shimmer lines.
- Adds subtle firefly-like light particles only over the lower-left river region.
- Sizes all Canvas effects from the centered hero container rather than the physical ultra-wide browser width.
- Pauses Canvas and halo animation when the hero leaves the viewport or the tab is hidden.
- Keeps mobile and `prefers-reduced-motion` fallbacks.

## Desktop layer order

1. CSS night-sky background and aurora
2. Unified 1536 × 1024 scene plane
3. Procedural water underlay
4. Independent full-width river and lotus background
5. Approved Buddha artwork crop
6. Refined dual SVG rotating halo
7. Exact-pixel Buddha and lotus occluder
8. Water shimmer and lower-left firefly particles
9. Falling petals, vignette and live HTML interface

Deploy the directory contents directly to Cloudflare Pages. No build step or external dependency is required.
