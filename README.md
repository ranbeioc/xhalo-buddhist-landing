# xHalo Buddhist — Rotating Halo V7

Cloudflare Pages static package with a redesigned, ultra-wide-safe layered hero.

## V7 fixes

- Keeps the ambient star field full-bleed while capping the actual page frame at **1920px**.
- Removes the hard background break that appeared on ultra-wide monitors.
- Separates the visual composition into independent layers:
  1. CSS night sky and aurora
  2. Procedural water underlay
  3. Left river, floating lotus and shoreline-light background
  4. Static mandala/galaxy backdrop
  5. Dual SVG rotating halo
  6. Clean transparent Buddha and lotus-pedestal foreground
  7. Water shimmer, firefly lights and falling petals
  8. Live HTML interface
- Removes the baked lower-left scroll prompt from the river image.
- Recreates the scroll prompt and arrow as an absolutely positioned HTML link.
- Removes the baked “梵音静心” control from the image layer.
- Cleans the Buddha foreground edge so no dark fringe appears around the statue.
- Prevents duplicate pedestal imagery from appearing beneath the independent foreground.
- Constrains animated canvases to the **1920px** scene frame on ultra-wide displays.
- Adds centered **1440px** content containers to the second and third screens.
- Preserves mobile layout, reduced-motion handling, visibility pausing and Canvas performance limits.

## Deployment

Upload the contents of this directory directly to Cloudflare Pages. No build command or external runtime dependency is required.
