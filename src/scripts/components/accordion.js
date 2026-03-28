import { ACCORDION_CONFIG } from "../utils/constants.js";

export function Accordion() {
  const items = Array.from({ length: ACCORDION_CONFIG.count }, (_, index) => ({
    title: ACCORDION_CONFIG.title,
    content: ACCORDION_CONFIG.content,
    open: index === 0,
  }));

  return `
    <section class="accordion">
      ${items
        .map(
          (item, index) => `
        <div class="accordion__item ${item.open ? "accordion__item--open" : ""}">
          <button class="accordion__trigger" aria-expanded="${item.open}" aria-controls="accordion-panel-${index}">
            <span class="accordion__title">${item.title}</span>
            <span class="accordion__icon">${item.open ? "−" : "+"}</span>
          </button>
          <div class="accordion__panel" id="accordion-panel-${index}" ${item.open ? "" : "hidden"}>
            <p class="accordion__content">${item.content}</p>
          </div>
          <hr class="accordion__divider">
        </div>
      `,
        )
        .join("")}
    </section>
  `;
}

export function initAccordion() {
  const items = document.querySelectorAll(".accordion__item");

  if (!items.length) return () => {};

  const handlers = [];

  items.forEach((item) => {
    const trigger = item.querySelector(".accordion__trigger");
    const icon = item.querySelector(".accordion__icon");

    function handleClick() {
      const isOpen = item.classList.contains("accordion__item--open");

      items.forEach((i) => {
        i.classList.remove("accordion__item--open");
        i.querySelector(".accordion__trigger").setAttribute(
          "aria-expanded",
          "false",
        );
        i.querySelector(".accordion__icon").textContent = "+";
      });

      if (!isOpen) {
        item.classList.add("accordion__item--open");
        trigger.setAttribute("aria-expanded", "true");
        icon.textContent = "−";
      }
    }

    trigger.addEventListener("click", handleClick);
    handlers.push({ trigger, handleClick });
  });

  return () => {
    handlers.forEach(({ trigger, handleClick }) => {
      trigger.removeEventListener("click", handleClick);
    });
  };
}
