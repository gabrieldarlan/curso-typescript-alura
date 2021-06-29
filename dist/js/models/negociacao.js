export class Negociacao {
    constructor(_data, // após a criação do objeto as properties só podem ser lidas
    quantidade, // é o mesmo que criar private e os gets
    valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
