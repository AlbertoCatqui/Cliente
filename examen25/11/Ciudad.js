export class Ciudad {
  #nombre;
  #carreras;

  constructor(nombre) {
    this.#nombre = nombre;
    this.#carreras = [];
    console.log("Ciudad " + this.#nombre + " creada");
  }
  aniadirCarrera(carrera) {
    this.#carreras.push(carrera);
    console.log("Se ha añadido " + carrera.getNombre() + " a " + this.#nombre);
  }
  getNombre() {
    return this.#nombre;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getCarreras() {
    return this.#nombre;
  }
  setCarreras(carreras) {
    this.#carreras = carreras;
  }
}
