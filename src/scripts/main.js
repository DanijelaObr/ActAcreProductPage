import { Header, initHeader } from "./components/header";
import "../styles/main.css";
import "../styles/components/header.css";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Header()}
`;

initHeader();
