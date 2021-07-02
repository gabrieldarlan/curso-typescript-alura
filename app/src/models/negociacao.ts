import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
  constructor(
    private _data: Date, // após a criação do objeto as properties só podem ser lidas
    public readonly quantidade: number, // é o mesmo que criar private e os gets
    public readonly valor: number
  ) {}
  public static criaDe(
    dateString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dateString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public paraTexto(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade}
      Valor: ${this.valor}
    `;
  }

  /**
   * ehIgual
   */
  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }
}
