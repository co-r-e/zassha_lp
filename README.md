# ZASSHA Landing Page

Static marketing site for the ZASSHA open source project. The site is intentionally minimal – pure HTML, CSS, and a small amount of JavaScript – so it can be hosted anywhere (including GitHub Pages) without a build step.

## Getting started

```bash
npm start
```

This launches a tiny static server on <http://localhost:3000>. （依存パッケージは無いので `npm install` は不要です。）完全に静的なサイトのため、`index.html` を直接ブラウザで開いて確認することもできます。

## Project structure

```
.
├── app.js              # small enhancement scripts (language selector)
├── dev-server.mjs      # local static server (optional)
├── icons/              # favicons, logos, social previews
├── index.html          # English version of the landing page
├── ja/                 # Japanese version of the landing page
├── media/              # product demo videos
├── robots.txt          # search crawler directives
├── sitemap.xml         # submitted to Search Console
├── styles.css          # shared styling
└── package.json        # npm scripts for local preview
```

## Deployment

Pushes to the `main` branch trigger the **Deploy Pages** workflow. The workflow runs `npm run build` (no-op) and uploads the static files from the repository root.

## License

Licensed under MIT. See [LICENSE](LICENSE) if provided in the main project.
