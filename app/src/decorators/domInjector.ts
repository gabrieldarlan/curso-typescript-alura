export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    console.log(`Modificando prototype ${target.constructor.name}
     e adicionando getter para a propriedade ${propertyKey}`);
    let elemento: HTMLElement;
    const getter = function () {
      if (!elemento) {
        elemento = document.querySelector(seletor) as HTMLElement;
        console.log(
          `buscando elemendo do DOM com o seletor ${seletor} para injetar em ${propertyKey}`
        );
      }
      // const elemento = document.querySelector(seletor);
      return elemento;
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
