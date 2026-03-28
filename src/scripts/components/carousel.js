import { icons } from "../utils/icons.js";

const productCard = new URL(
  "../../assets/images/product-card.png",
  import.meta.url,
);

const product = {
  name: "Hand Pomade / Pommade Mains",
  subtitle: "Nourishment for your hands",
  price: "159,00 KR",
};

const products = Array(4).fill(product);

export function Carousel() {
  return `
    <section class="carousel">
      <h2 class="carousel__title">You May Also Like</h2>

      <div class="carousel__wrapper">
        <button class="carousel__btn carousel__btn--prev" aria-label="Previous">
          ${icons.arrowCarousel}
        </button>

        <div class="carousel__track-container">
          <div class="carousel__track">
            ${products
              .map(
                (product) => `
              <div class="carousel__item">
                <div class="carousel__image-wrap">
                  <img src="${productCard}" alt="${product.name}" class="carousel__image">
                </div>
                <div class="carousel__info">
                  <p class="carousel__name">${product.name}</p>
                  <p class="carousel__subtitle">${product.subtitle}</p>
                  <p class="carousel__price">${product.price}</p>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        <button class="carousel__btn carousel__btn--next" aria-label="Next">
          ${icons.arrowCarousel}
        </button>
      </div>
    </section>
  `;
}

export function initCarousel() {
  const track = document.querySelector(".carousel__track");
  const items = document.querySelectorAll(".carousel__item");
  const prevBtn = document.querySelector(".carousel__btn--prev");
  const nextBtn = document.querySelector(".carousel__btn--next");

  if (!track || !items.length) return;

  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;

  function getVisibleCount() {
    return window.innerWidth >= 769 ? 3 : 1;
  }

  function getItemWidth() {
    return items[0].getBoundingClientRect().width + 40;
  }

  function updateCarousel() {
    const visibleCount = getVisibleCount();
    const maxIndex = items.length - visibleCount;
    currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);
    track.style.transform = `translateX(-${currentIndex * getItemWidth()}px)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    updateCarousel();
  });

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) currentIndex++;
      else currentIndex--;
    }
    isDragging = false;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
}
