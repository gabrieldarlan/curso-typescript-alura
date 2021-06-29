import { NecociacaoContoller } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-views.js";

const controller = new NecociacaoContoller();
const form = document.querySelector(".form");
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  controller.adiciona();
});
