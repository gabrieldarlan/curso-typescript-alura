export class Negociacao {
  constructor(
    private _data: Date, // após a criação do objeto as properties só podem ser lidas
    public readonly quantidade: number, // é o mesmo que criar private e os gets
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }
}
