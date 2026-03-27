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

export function Hero() {
  return `
    <section class="hero">

    <div class="hero__image-wrap">
    <nav class="hero__breadcrumb hero__breadcrumb--mobile" aria-label="Breadcrumb">
      <a href="#" class="hero__breadcrumb-back">
        <img src="${arrowBack}" alt="" class="hero__breadcrumb-arrow">
      </a>
      <ol class="hero__breadcrumb-list">
        <li><a href="#">All Products</a></li>
        <li><a href="#">Haircare</a></li>
        <li aria-current="page">Restorative Hair Mask</li>
      </ol>
    </nav>
    <img src="${productImg}" alt="Restorative Hair Mask" class="hero__image">
  </div>

      <div class="hero__content">

      <nav class="hero__breadcrumb hero__breadcrumb--desktop" aria-label="Breadcrumb">
      <a href="#" class="hero__breadcrumb-back">
        <img src="${arrowBack}" alt="" class="hero__breadcrumb-arrow">
      </a>
      <ol class="hero__breadcrumb-list">
        <li><a href="#">All Products</a></li>
        <li><a href="#">Haircare</a></li>
        <li aria-current="page">Restorative Hair Mask</li>
      </ol>
    </nav>

        <h1 class="hero__title">Restorative Hair Mask</h1>
        <p class="hero__subtitle">Nuturishment in a bottle</p>

        <hr class="hero__divider">

        <p class="hero__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus
          vestibulum. Luctus accumsan tortor posuere ac ut.
        </p>

        <div class="hero__badges">
          <div class="hero__badge">
            <img src="${organicBadge}" alt="" class="hero__badge-icon">
            <span class="hero__badge-label">100% Organic</span>
          </div>
          <div class="hero__badge">
            <img src="${organicBadge}" alt="" class="hero__badge-icon">
            <span class="hero__badge-label">100% Organic</span>
          </div>
          <div class="hero__badge">
            <img src="${organicBadge}" alt="" class="hero__badge-icon">
            <span class="hero__badge-label">100% Organic</span>
          </div>
          <div class="hero__badge">
            <img src="${organicBadge}" alt="" class="hero__badge-icon">
            <span class="hero__badge-label">100% Organic</span>
          </div>
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
            <button class="hero__qty-btn" aria-label="Decrease quantity">-</button>
            <span class="hero__qty-value">1</span>
            <button class="hero__qty-btn" aria-label="Increase quantity">+</button>
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

  if (!addToCartBtn || !toast || !qtyValue) return;

  let quantity = 1;

  qtyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.getAttribute("aria-label") === "Increase quantity") {
        quantity++;
      } else if (quantity > 1) {
        quantity--;
      }
      qtyValue.textContent = quantity;
    });
  });

  addToCartBtn.addEventListener("click", () => {
    addToCartBtn.classList.add("hero__add-to-cart--added");
    toast.classList.add("hero__toast--visible");

    setTimeout(() => {
      addToCartBtn.classList.remove("hero__add-to-cart--added");
      toast.classList.remove("hero__toast--visible");
    }, 2000);
  });
}
