export class Piloto {
  #nombre;
  #apellido;
  #especialidad;

  constructor(nombre, apellido, especialidad) {
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#especialidad = especialidad;
  }
  getNombre() {
    return this.#nombre;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getApellido() {
    return this.#apellido;
  }
  setApellido(apellido) {
    this.#apellido = apellido;
  }
  getEspecialidad() {
    return this.#especialidad;
  }
  setEspecialidad(especialidad) {
    this.#especialidad = especialidad;
  }
}
