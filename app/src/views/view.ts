export abstract class View<T> {
  protected elemento: HTMLElement;
  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw new Error(`Seletor ${seletor} não existe no DOM.`);
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
