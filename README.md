# Restaurant Page

A small single-page restaurant site built with JavaScript modules and Webpack. The UI is generated entirely with JS and switches between Home, Menu, and Contact tabs without a full page reload.

## Features
- Tabbed navigation with DOM-driven rendering
- Modern styling with gradient background, glassy header, and card-based layout
- Responsive grid sections and lightweight animations
- Optional CTA behavior that jumps to the Menu tab

## Tech Stack
- JavaScript (ES modules)
- Webpack + webpack-dev-server
- HTML + CSS

## Getting Started

### Install
```
npm install
```

### Run the dev server
```
npm run start
```
Then open http://localhost:8080/.

### Build for production
```
npm run build
```
Outputs to `dist/`.

## Project Structure
```
.
├── src/
│   ├── index.js
│   ├── style.css
│   ├── template.html
│   └── tabs/
│       ├── home.js
│       ├── menu.js
│       └── contact.js
├── webpack.config.js
└── dist/
```

## Notes
- Content is rendered into `#content` in `src/index.js`.
- Navigation buttons use `data-tab` attributes to switch tabs.
- Styles live in `src/style.css` and are bundled via Webpack.

## License
MIT (see `LICENSE`).
