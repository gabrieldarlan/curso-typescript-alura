import { NecociacaoContoller } from "./controllers/negociacao-controller.js";
const controller = new NecociacaoContoller();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
