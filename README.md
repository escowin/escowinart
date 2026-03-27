# escowinart

A portfolio showcasing my artistic work. Planend & built out in the same way I approach anything: **blocking first, then refining down to the smallest details**. The site stays quietly consistent with that habit—structure before ornament. A stylistic through-line that can be seen both as an artist and as a software engineer. 

* [Repository](https://github.com/escowin/escowinart)
* [Live site](https://escowinart.com)

## About this project

The site exists to present studio work alongside engineering work: fine art and sequential art live next to design systems and front-end projects. The stack is deliberately small (React, Vite, client-side routing) so the focus stays on presentation, performance, and maintainability rather than framework churn.

The interface is tuned like a picture plane: **composition**, an **off-black and white** palette with **red used as accent** (not wallpaper), and deliberate **focal points** so attention moves in a calm order. That visual language doubles as **storytelling** and **wayfinding**—navigation cues stay subtle. **Vertical scrolling stays low** by keeping depth in tabs, volume lists, and dialogs instead of mile-long pages. Layout and density are **mobile-first**: the smallest viewport defines the essential, minimal frame; larger breakpoints refine rather than pile on.

Markup uses **semantic HTML** (meaningful sections, headings, and landmarks) plus **accessibility attributes** where they clarify roles, state, and relationships for keyboards and assistive tech.

## Architecture

- **Routing** — `react-router-dom` drives top-level views (home, artist, unified portfolio routes).
- **Portfolio** — One [`PortfolioPage`](src/pages/PortfolioPage.jsx) configures fine art, illustration, and graphic design from shared data and [`PORTFOLIO_CONFIG`](src/pages/PortfolioPage.jsx); route-level `key`s keep gallery state aligned when switching sections.
- **Gallery UI** — [`Gallery`](src/components/Gallery.jsx) and [`ArtNav`](src/components/ArtNav.jsx) handle tabbed series, volume lists, responsive imagery, and optional work-detail dialogs for catalogued pieces.
- **Data** — Portfolio structure lives in [`src/assets/data/index.js`](src/assets/data/index.js); homepage preview filenames are separated in [`src/data/homepage-img.js`](src/data/homepage-img.js).

This structure reduces duplicated page logic, keeps navigation and layout behavior in one place, and makes it simpler to add a new discipline or adjust shared gallery behavior once.

## CSS

Styling favors **modern, maintainable CSS** without a runtime CSS-in-JS layer:

- **Mobile-first** — Base rules target small viewports; min-width media queries layer in space and complexity so the default experience stays spare (this pairs with the “About” goals above).
- **`@import`** — e.g. [`gallery-variables.css`](src/assets/css/gallery-variables.css) is pulled into [`gallery.css`](src/assets/css/gallery.css) so tokens stay grouped and gallery rules stay readable.
- **`:root` custom properties** — shared palettes and gradients (illustration volumes, graphic-design accents) for theming and reuse.
- **Nesting, pseudo-classes, and combined selectors** — `:hover`, `:focus-visible`, attribute selectors (`[data-series]`, `[data-title]`), and chained class patterns for targeted specificity without scattering `!important`.
- **Scope** — Gallery-related presentation is loaded with the gallery surface so global noise stays low on routes that do not use it.

Global chrome (header, footer, homepage) uses smaller focused sheets imported where those views mount.

## Tech stack

| Area        | Choice                          |
| ----------- | ------------------------------- |
| Runtime     | React 18                        |
| Bundler     | Vite 6                          |
| Routing     | React Router 6                  |
| Icons       | Font Awesome (React components) |

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build
npm test         # Vitest
```

## Author

**Edwin Escobar**

* [Email](mailto:edwin@escowinart.com)
* [GitHub](https://github.com/escowin)
