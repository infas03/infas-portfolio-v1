# infas portfolio

Personal portfolio built with Astro and Tailwind CSS. It is a static site with no backend.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server at http://localhost:4321 |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run deploy` | Build and deploy to Cloudflare with Wrangler |

## Editing content

All text, links, jobs and projects live in `src/data/site.ts`. Sections are in `src/components/`, and the animations are in `src/scripts/main.ts` and `src/styles/global.css`.

- Portrait: `src/assets/infas.png` (transparent cutout)
- Résumé: `public/HM_Infas_Resume.pdf`
- Share image: `public/og.png`
- Site URL: `site` in `astro.config.mjs`

`source-assets/` holds the original photo and résumé. It is not published.
