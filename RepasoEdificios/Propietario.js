export class Propietario {
  #nombre;
  #genero;
  #miembros;

  constructor(nombre, genero, miembros) {
    this.#nombre = nombre;
    this.#genero = genero;
    this.#miembros = miembros;
  }
  getNombre() {
    return this.#nombre;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getGenero() {
    return this.#genero;
  }
  setGenero(genero) {
    this.#genero = genero;
  }
  getMiembros() {
    return this.#miembros;
  }
  setMiembros(miembros) {
    this.#miembros = miembros;
  }
}
