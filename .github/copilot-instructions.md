# Copilot Instructions for Layout Catalog

## Project Overview
A frontend catalog page built with HTML, SCSS, and BEM methodology. Uses Parcel as bundler, mate-academy scripts for tooling, and BackstopJS for visual regression testing. This is an educational layout practice project emphasizing responsive design, component-based styling, and code quality standards.

## Architecture & Key Patterns

### BEM Methodology (Strict)
All CSS follows Block-Element-Modifier pattern with configuration in `.bemlintrc.json`:
- **Element divider**: `__` (e.g., `.card__title`)
- **Modifier divider**: `--` (e.g., `.stars--4`)
- Run `npm run lint` to enforce BEM compliance via bemlint

**Key rules enforced**:
- One block per file (`src/styles/blocks/_card.scss`, `_stars.scss`)
- Elements must be children of their parent block
- No double nesting of elements (`.block__element__child` forbidden)

### SCSS Organization
```
src/styles/
  index.scss          # Main entry, imports variables and blocks
  _variables.scss     # Color palette and reusable values
  variables.css       # Generated from SCSS (for reference)
  blocks/
    _card.scss        # Card component (200px fixed width)
    _stars.scss       # Star rating system with SVG backgrounds
```

**Variables** (`_variables.scss`):
- `$color-primary: #00acdc` (primary accent)
- `$color-text-accent: #060b35` (navigation links, dark text)
- `$color-text-secondary: #616070` (body text)
- `$color-border: #f3f3f3` (card borders)
- `$color-white: #fff` (backgrounds)

### Responsive Grid System
Cards use CSS Grid with breakpoints (no media queries in block files - define globally):
- **1 column**: < 488px
- **2 columns**: ≥ 488px
- **3 columns**: ≥ 768px
- **4 columns**: ≥ 1024px

Card styling: 200px fixed width, 48px horizontal gap, 46px vertical gap, 50px vertical padding, 40px horizontal padding on container.

### Hover Effects (300ms Transitions)
All hover states use smooth 300ms transitions:
- **Cards**: Scale up 20% (no effect on neighbors)
- **Card title**: Text color → `#34568b`
- **Nav links**: Text color → `#00acdc`
- **Buy button**: Background → `#fff`, text color → `#00acdc`

Hover selectors use `data-qa` attributes for testing:
- `data-qa="nav-hover"` on 4th nav link (Laptops & computers)
- `data-qa="card-hover"` on Buy link inside first card
- `data-qa="card"` on first card

## Development Workflow

### Key Commands
- `npm start` - Start dev server with Parcel (watches changes)
- `npm run format` - Format HTML/CSS/SCSS with Prettier
- `npm run lint` - Run format + BEM lint + style lint (all checks)
- `npm test` - Run lint + visual regression tests
- `npm run build` - Build production assets
- `npm run deploy` - Deploy to GitHub Pages

### Testing Strategy
**BackstopJS** (`backstopConfig.js`) tests visual regression at 1024px and 1200px viewports:
- Document layout, header, nav elements
- Hover state interactions (`[data-qa="nav-hover"]`, `[data-qa="card-hover"]`)
- Reference URL: `/catalog/` path on deployed site
- Scripts in `backstop_data/engine_scripts/puppet/`:
  - `onBefore.js` - Initialization
  - `onReady.js` - Interaction prep (clicking, hovering)

### Before Committing
Run `npm run lint` to catch:
- BEM naming violations (bemlint)
- CSS rule order issues (stylelint)
- Code formatting (Prettier on HTML/SCSS)

## Common Patterns

### Adding a New Block
1. Create `src/styles/blocks/_blockname.scss` with single root block
2. Import in `src/styles/index.scss`: `@import './blocks/blockname'`
3. Use variables from `_variables.scss` for colors
4. Name elements/modifiers following BEM: `.blockname__element`, `.blockname--modifier`
5. Run `npm run lint` to validate

### Extending Existing Components
- **Card** (`.card`): Modify `_card.scss`, keep fixed width 200px, adjust padding/spacing
- **Stars** (`.stars`): Modify `_stars.scss`, uses modifiers `.stars--1` through `.stars--5` for ratings

## Code Style Rules
- **HTML**: Semantic tags (`<header>`, `<nav>`, `<main>` for cards), no data-qa attributes except for testing
- **SCSS**: Import variables at block top, nest selectors under parent, use `&` for pseudo-classes
- **Formatting**: Prettier enforces 2-space indentation, single quotes in HTML attributes
- **Colors**: Always use SCSS variables from `_variables.scss`, never hardcode hex values

## Integration Points
- **Parcel**: Automatically compiles SCSS → CSS, bundle linked via `href="styles/index.scss"` in HTML
- **Prettier**: Configured via `.prettierrc`, ignores paths in `.prettierignore`
- **Mate Academy Scripts**: Wraps build/deploy logic (see `package.json` mateAcademy config)
- **GitHub Pages**: Deploy target at `/layout_catalog/` (update demo link in PR checklist)

## Troubleshooting
- **SCSS not compiling**: Ensure Parcel cache is cleared, run `npm install` to reinstall dependencies
- **BEM lint errors**: Check class naming follows block/element/modifier rules in `.bemlintrc.json`
- **Hover not working in tests**: Verify `data-qa` selectors match `hoverSelector` in `backstopConfig.js`
- **Grid columns wrong**: Confirm responsive breakpoints are global (not duplicated in block files)
