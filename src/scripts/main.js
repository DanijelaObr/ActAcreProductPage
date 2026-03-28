import { Header, initHeader } from "./components/header";
import { Hero, initHero } from "./components/hero";
import { Accordion, initAccordion } from "./components/accordion";
import "../styles/components/accordion.css";
import "../styles/main.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Header()}
  ${Hero()}
  ${Accordion()}
`;

initHeader();
initHero();
initAccordion();
