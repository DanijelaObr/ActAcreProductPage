# Act+Acre Product Page

Vanilla JavaScript implementation of a product detail page for Act+Acre haircare products.

## Project Structure

```
src/
├── assets/
│   └── images/
├── scripts/
│   ├── components/
│   │   ├── header.js
│   │   ├── hero.js
│   │   ├── accordion.js
│   │   └── carousel.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── icons.js
│   └── main.js
└── styles/
    ├── components/
    │   ├── header.css
    │   ├── hero.css
    │   ├── accordion.css
    │   └── carousel.css
    └── main.css
```

## Features

- Responsive design (mobile & desktop)
- Interactive product carousel with touch support
- Collapsible accordion for product information
- Quantity selector with min/max validation
- Add to cart functionality with toast notification
- Mobile hamburger menu
- Accessibility support (ARIA attributes, keyboard navigation)

## Code Refactoring

### Constants Extraction

All magic numbers and repeated values have been extracted to `utils/constants.js`:

- Breakpoints for responsive design
- Carousel configuration (visible items, swipe threshold, gap)
- Quantity configuration (min, max, default)
- Toast duration
- Badge and breadcrumb data
- Accordion configuration

### DRY Principle

- Badge rendering uses loop instead of duplicated HTML
- Breadcrumb is a reusable function (mobile & desktop variants)
- Accordion items generated from configuration
- CSS variables for repeated spacing values

### Memory Management

All component initialization functions return cleanup functions to prevent memory leaks:

- Event listeners are properly removed
- Timeouts are cleared
- Window resize handlers are cleaned up

### Data Attributes

Quantity buttons use `data-action` attributes instead of checking aria-labels for cleaner, more performant code.

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

## Build

```bash
npm run build
```

## Technologies

- Vanilla JavaScript (ES6+)
- CSS3 with CSS Variables
- Parcel bundler
- No frameworks or libraries
