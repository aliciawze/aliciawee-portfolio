# Alicia Wee — portfolio

Static one-page site. No build step; deployed on Vercel from `main`.

## Structure

```
index.html        Page markup (structure and copy for static sections)
css/styles.css    All styles: design tokens in :root, then sections in page order
js/data.js        Content: tools, "Ask me about" answers, case studies
js/main.js        Behaviour: tool arc layout, case study flip, career history, copy buttons
assets/           Images and favicon
```

## Conventions

- Keep markup, styles and scripts in their own files; no inline `<style>` or `<script>` blocks.
- Colours, fonts and spacing come from the tokens at the top of `styles.css`.
- Edit content in `js/data.js`; only change `main.js` for behaviour.
- Image paths in CSS are relative to `css/` (for example `../assets/clouds.jpg`).

## Local preview

Open the folder in VS Code and use the Live Server extension, or run `npx serve .`.
