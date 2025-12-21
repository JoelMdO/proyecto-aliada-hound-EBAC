# Proyecto Hound Express

This project uses SCSS source files to generate `styles.css`.

Setup (macOS, zsh):

1. Install dependencies:

```bash
npm install
```

2. Build once:

```bash
npm run build:sass
```

3. Watch for changes (auto-compile):

```bash
npm run watch:sass
```

Notes:

- The `sass` package compiles `main.scss` into `styles.css` in the project root.
- If your SCSS entry file is different, update the scripts in `package.json` accordingly.
