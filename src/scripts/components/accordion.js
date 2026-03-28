export function Accordion() {
  const items = [
    {
      title: "Ingredients",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.",
      open: true,
    },
    {
      title: "Ingredients",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.",
      open: false,
    },
    {
      title: "Ingredients",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.",
      open: false,
    },
  ];

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

  items.forEach((item) => {
    const trigger = item.querySelector(".accordion__trigger");
    const panel = item.querySelector(".accordion__panel");
    const icon = item.querySelector(".accordion__icon");

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("accordion__item--open");

      // Zatvori sve
      items.forEach((i) => {
        i.classList.remove("accordion__item--open");
        i.querySelector(".accordion__icon").textContent = "+";
      });

      // Otvori kliknuti
      if (!isOpen) {
        item.classList.add("accordion__item--open");
        icon.textContent = "−";
      }
    });
  });
}
