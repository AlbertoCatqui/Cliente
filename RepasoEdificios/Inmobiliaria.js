export class Inmobiliaria {
  #nombre;
  #edificios;
  constructor(nombre) {
    this.#nombre = nombre;
    this.#edificios = [];
  }
  addEdificio(edificio) {
    this.#edificios.push(edificio);
    console.log(
      "El edificio en la calle: " +
        edificio.getCalle() +
        ", nº:" +
        edificio.getNumero() +
        ", CP:" +
        edificio.getCodigoPostal() +
        " ha sido adquirido por " +
        this.#nombre +
        "®",
    );
  }
  getEdificio(calle, numero) {
    for (let i = 0; i < this.#edificios.length; i++) {
      if (
        this.#edificios[i].getCalle() == calle &&
        this.#edificios[i].getNumero() == numero
      ) {
        return (
          "El edificio" +
          this.#edificios[i].getCalle() +
          " en el numero " +
          this.#edificios[i].getNumero() +
          " esta disponible en TecnoEdificio®"
        );
      } else {
        return "Este edificio no esta disponible en " + this.#nombre + "®";
      }
    }
  }
}
