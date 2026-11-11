export class Rio {
  #nombre;
  #cuenca;
  #caudalMedio;
  #poblaciones = [];
  constructor(nombre, cuenca, caudal) {
    this.#nombre = nombre;
    this.#cuenca = cuenca;
    this.#caudalMedio = caudal;
    console.log("El rio " + this.#nombre + ", de la cuenca: " + this.#cuenca);
  }
  agregarPoblacion(poblacion) {
    this.#poblaciones.push(poblacion);
  }
  eliminarPoblacion(poblacion) {
    this.#poblaciones = this.#poblaciones.filter((p) => p !== poblacion);
  }
  modificarCaudalmedio(caudal) {
    this.#caudalMedio = caudal;
  }
  imprimeNombre() {
    return this.#nombre;
  }
  imprimeCuenca() {
    return this.#cuenca;
  }
  imprimeCaudal() {
    return this.#caudalMedio;
  }
  imprimePoblaciones() {
    return this.#poblaciones.toString();
  }
  imprimeRio() {
    return `Nombre: ${this.#nombre}, Cuenca: ${this.#cuenca}, Caudal medio: ${this.#caudalMedio} , Poblaciones: ${this.#poblaciones} `;
  }
}
