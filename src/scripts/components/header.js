import { icons } from "../utils/icons.js";

const logoDesktop = new URL(
  "../../assets/images/LogoDesktop.png",
  import.meta.url,
);
const logoMobile = new URL(
  "../../assets/images/LogoMobile.png",
  import.meta.url,
);

export function Header() {
  return `
    <header class="site-header">
      <div class="site-header__inner">

        <div class="site-header__left">
          <button class="site-header__hamburger" aria-label="Open menu" aria-expanded="false">
            ${icons.menu}
          </button>
          <button class="site-header__icon-btn site-header__search--mobile" aria-label="Search">
            ${icons.searchMobile}
          </button>
        </div>

        <div class="site-header__logo">
          <a href="/">
            <img src="${logoDesktop}" alt="Act+Acre" class="site-header__logo--desktop">
            <img src="${logoMobile}" alt="Act+Acre" class="site-header__logo--mobile">
          </a>
        </div>

        <nav class="site-header__nav" aria-label="Main navigation">
          <ul class="site-header__menu">
            <li><a href="#">Shop</a></li>
            <li><a href="#">Science</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Tutorial</a></li>
          </ul>
        </nav>

        <div class="site-header__actions">
          <button class="site-header__icon-btn site-header__search--desktop" aria-label="Search">
            ${icons.search}
          </button>
          <button class="site-header__icon-btn site-header__account--desktop" aria-label="Account">
            ${icons.account}
          </button>
          <button class="site-header__icon-btn site-header__account--mobile" aria-label="Account">
            <span class="site-header__account-mobile-icon">
              ${icons.account2Mobile}
              ${icons.account1Mobile}
            </span>
          </button>
          <button class="site-header__icon-btn site-header__cart--desktop site-header__icon-btn--disabled" aria-label="Cart" aria-disabled="true">
            ${icons.cart}
          </button>
          <button class="site-header__icon-btn site-header__cart--mobile site-header__icon-btn--disabled" aria-label="Cart" aria-disabled="true">
            ${icons.cartMobile}
          </button>
        </div>

      </div>
    </header>

    <div class="mobile-menu" aria-hidden="true">
      <ul class="mobile-menu__list">
        <li><a href="#">Shop</a></li>
        <li><a href="#">Science</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Tutorial</a></li>
      </ul>
    </div>
  `;
}

export function initHeader() {
  const hamburger = document.querySelector(".site-header__hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!hamburger || !mobileMenu) return () => {};

  function handleHamburgerClick() {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.classList.toggle("mobile-menu--open");
    mobileMenu.setAttribute("aria-hidden", String(isOpen));
  }

  hamburger.addEventListener("click", handleHamburgerClick);

  return () => {
    hamburger.removeEventListener("click", handleHamburgerClick);
  };
}
