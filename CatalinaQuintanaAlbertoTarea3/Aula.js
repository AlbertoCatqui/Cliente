export class Aula {
  #numero;
  #equipos;
  #puestos;
  constructor(numero, filas, columnas) {
    this.#numero = numero;
    this.#puestos = filas * columnas;
    this.#equipos = Array.of(Array[filas], Array[columnas]);
  }
  activarEquipo(equipo, fila, columna) {}
  getPosicion(idEquipo) {}
  getPorcentajeOcupacion() {}
  setNumero(numero) {
    this.#numero = numero;
  }
  getNumero() {
    return this.#numero;
  }
  setPuestos(puestos) {
    this.#puestos = puestos;
  }
  getPuestos() {
    return this.#puestos;
  }
  getEquipos() {
    return this.#equipos;
  }
}
