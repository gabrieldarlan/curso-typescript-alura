export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes);
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
//# sourceMappingURL=negociacoes.js.map