# xHalo Buddhist — Rotating Halo V5

Cloudflare Pages static package based on the approved rotating-halo composition.

## V5 fixes

- Replaces the disconnected lower-scene raster islands that separated on 21:9 and wider screens.
- Adds a continuous full-width procedural river plane, so there is no rectangular missing area between the left bank and Buddha artwork.
- Restores the approved lower-left floating lotus flowers, shoreline lights and water reflections as one feathered transparent crop.
- Keeps the V3/V4 Buddha occluder and refined dual SVG rotating halo unchanged.
- Adds a lightweight Canvas water-glint layer with horizontal gold and cool-white shimmer strokes.
- Pauses all Canvas animation when the hero leaves the viewport or the tab is hidden.
- Disables water animation for mobile and `prefers-reduced-motion`.

## Layer order

1. CSS star field and aurora
2. Continuous procedural river plane
3. Feathered lower-left river/lotus artwork
4. Approved Buddha artwork
5. Refined dual SVG rotating halo
6. Exact-pixel Buddha/lotus occluder
7. Vignette, water shimmer, falling petals and live page UI

Deploy the directory contents directly to Cloudflare Pages. No build step or external dependency is required.
