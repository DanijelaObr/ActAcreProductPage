import {
  QUANTITY_CONFIG,
  TOAST_DURATION,
  BADGES,
  BREADCRUMB_ITEMS,
} from "../utils/constants.js";

const productImg = new URL(
  "../../assets/images/product-hero.png",
  import.meta.url,
);
const organicBadge = new URL(
  "../../assets/images/organic-badge.svg",
  import.meta.url,
);
const arrowBack = new URL(
  "../../assets/images/arrow-back.svg",
  import.meta.url,
);

function createBreadcrumb(isMobile = false) {
  const className = isMobile
    ? "hero__breadcrumb--mobile"
    : "hero__breadcrumb--desktop";

  return `
    <nav class="${className}" aria-label="Breadcrumb">
      <a href="#" class="hero__breadcrumb-back">
        <img src="${arrowBack}" alt="" class="hero__breadcrumb-arrow">
      </a>
      <ol class="hero__breadcrumb-list">
        ${BREADCRUMB_ITEMS.map((item) => {
          if (item.current) {
            return `<li aria-current="page">${item.label}</li>`;
          }
          return `<li><a href="${item.href}">${item.label}</a></li>`;
        }).join("")}
      </ol>
    </nav>
  `;
}

export function Hero() {
  return `
    <section class="hero">

      <div class="hero__image-wrap">
        ${createBreadcrumb(true)}
        <img src="${productImg}" alt="Restorative Hair Mask" class="hero__image">
      </div>

      <div class="hero__content">
        ${createBreadcrumb(false)}

        <h1 class="hero__title">Restorative Hair Mask</h1>
        <p class="hero__subtitle">Nuturishment in a bottle</p>

        <hr class="hero__divider">

        <p class="hero__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus
          vestibulum. Luctus accumsan tortor posuere ac ut.
        </p>

        <div class="hero__badges">
          ${(() => {
            let badgesHTML = "";
            for (const badge of BADGES) {
              badgesHTML += `
                <div class="hero__badge">
                  <img src="${organicBadge}" alt="" class="hero__badge-icon">
                  <span class="hero__badge-label">${badge.label}</span>
                </div>
              `;
            }
            return badgesHTML;
          })()}
        </div>

        <hr class="hero__divider">

        <div class="hero__purchase-options">
          <label class="hero__radio-label">
            <input type="radio" name="purchase" value="once" checked>
            <span class="hero__radio-text">Buy Once | $38</span>
          </label>
          <label class="hero__radio-label">
            <input type="radio" name="purchase" value="subscribe">
            <span class="hero__radio-text hero__radio-text--muted">Subscribe (SAVE 20%) | <span class="hero__price-discount">$30</span></span>
          </label>
        </div>

        <div class="hero__cart-row">
          <div class="hero__quantity">
            <button class="hero__qty-btn" data-action="decrease" aria-label="Decrease quantity">-</button>
            <span class="hero__qty-value">1</span>
            <button class="hero__qty-btn" data-action="increase" aria-label="Increase quantity">+</button>
          </div>
          <button class="hero__add-to-cart" id="add-to-cart-btn">
            Add to Cart
          </button>
        </div>

        <div class="hero__toast" id="cart-toast" aria-live="polite">
          Added to cart!
        </div>

      </div>
    </section>
  `;
}

export function initHero() {
  const addToCartBtn = document.getElementById("add-to-cart-btn");
  const toast = document.getElementById("cart-toast");
  const qtyBtns = document.querySelectorAll(".hero__qty-btn");
  const qtyValue = document.querySelector(".hero__qty-value");

  if (!addToCartBtn || !toast || !qtyValue) return () => {};

  let quantity = QUANTITY_CONFIG.DEFAULT;
  let toastTimeout;

  function handleQuantityClick(e) {
    const btn = e.currentTarget;
    const action = btn.dataset.action;

    if (action === "increase") {
      if (quantity < QUANTITY_CONFIG.MAX) {
        quantity++;
      }
    } else if (action === "decrease") {
      if (quantity > QUANTITY_CONFIG.MIN) {
        quantity--;
      }
    }

    qtyValue.textContent = quantity;
  }

  function handleAddToCart() {
    addToCartBtn.classList.add("hero__add-to-cart--added");
    toast.classList.add("hero__toast--visible");

    toastTimeout = setTimeout(() => {
      addToCartBtn.classList.remove("hero__add-to-cart--added");
      toast.classList.remove("hero__toast--visible");
    }, TOAST_DURATION);
  }

  qtyBtns.forEach((btn) => {
    btn.addEventListener("click", handleQuantityClick);
  });

  addToCartBtn.addEventListener("click", handleAddToCart);

  return () => {
    qtyBtns.forEach((btn) => {
      btn.removeEventListener("click", handleQuantityClick);
    });
    addToCartBtn.removeEventListener("click", handleAddToCart);
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
  };
}
