import { Header, initHeader } from "./components/header";
import { Hero, initHero } from "./components/hero";
import { Accordion, initAccordion } from "./components/accordion";
import { Carousel, initCarousel } from "./components/carousel";
import "../styles/components/accordion.css";
import "../styles/components/carousel.css";
import "../styles/main.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Header()}
  ${Hero()}
  ${Accordion()}
  ${Carousel()}
`;

initHeader();
initHero();
initAccordion();
initCarousel();
