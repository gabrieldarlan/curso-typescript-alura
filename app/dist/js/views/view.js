export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM.`);
        }
    }
    update(model) {
        let template = this.template(model);
        template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map