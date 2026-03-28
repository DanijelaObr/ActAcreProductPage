// Breakpoints - responsive design
export const BREAKPOINTS = {
  TABLET: 769, // Minimum width for desktop layout
};

// Carousel conf
export const CAROUSEL_CONFIG = {
  DESKTOP_VISIBLE: 3,
  MOBILE_VISIBLE: 1,
  SWIPE_THRESHOLD: 50,
  GAP: 40,
};

// Quantity conf
export const QUANTITY_CONFIG = {
  MIN: 1,
  MAX: 99,
  DEFAULT: 1,
};

// Toast notification duration
export const TOAST_DURATION = 2000; // milliseconds

// Badge data
// In real app, svaki badges would have different vaules, so we'll leave thse four even if they are the same
// (e.g. "100% Organic", "Vegan Friendly", "Cruelty Free", "Made in USA")
export const BADGES = [
  { label: "100% Organic" },
  { label: "100% Organic" },
  { label: "100% Organic" },
  { label: "100% Organic" },
];

// Breadcrumb items
export const BREADCRUMB_ITEMS = [
  { label: "All Products", href: "#" },
  { label: "Haircare", href: "#" },
  { label: "Restorative Hair Mask", current: true },
];

// Accordion items
export const ACCORDION_CONFIG = {
  title: "Ingredients",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.",
  count: 3,
};
