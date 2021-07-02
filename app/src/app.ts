import { NecociacaoContoller } from "./controllers/negociacao-controller.js";

const controller = new NecociacaoContoller();
const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw new Error(
    "Não foi possivel inicializar a aplicação. Verifique se o form existe"
  );
}

const botaoImporta = document.querySelector("#botao-importa");
if (botaoImporta) {
  botaoImporta.addEventListener("click", () => {
    controller.importaDados();
  });
} else {
  throw new Error("Botão importa não foi encontrado");
}
