# ColorSpark web

The last deployed ColorSpark landing page, restored from Firebase Hosting, with its original layout, content, and rainbow styling. The requested additions are the Three.js hero artwork, an illustrated gallery below the original category cards, and a coloring studio after How to Play.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000. To use a different port, run `npm run dev -- --port 3100`.

## Checks and production build

```sh
npm run lint
npm run build
```

The build exports a static site to `out/`, compatible with the existing Firebase Hosting configuration. Preview that export with `python3 -m http.server 3100 --directory out`.

## Landing page

- `app/page.tsx`: page sections and copy.
- `app/globals.css`: original global styling and reduced-motion support.
- `app/retained-sections.css`: styles scoped to the retained 3D artwork and gallery.
- `components/ColorScene.tsx`: dynamically loaded Three.js pencil scene. Animation stops when hidden or offscreen, honors reduced motion, and releases GPU resources on unmount. The artwork remains visible without WebGL.
- `components/ArtGallery.tsx`: nine filterable categories, with three real game artworks per category.
- `components/ColorDemo.tsx`: keyboard-accessible color-by-number sample with palette selection, progress, completion, and reset. This preview does not save progress.
- `public/art/`, `lib/artwork.json`, and `lib/demo-art.json`: artwork derived from the original templates in `../ColorSpark/src/data/templates/`.
- Download buttons link to the App Store and Google Play on mobile and show store QR codes on desktop. Dialogs support Escape, keyboard focus containment, and focus restoration.

The page uses Nunito through `next/font/google`, so a fresh build needs access to Google Fonts.
