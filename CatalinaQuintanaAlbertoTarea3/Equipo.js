export class Equipo {
  #id;
  #fecha;
  #descripcion;
  #personal;
  constructor(descripcion, personal) {
    let tipo;
    if (personal == true) {
      tipo = "p";
    } else if (personal == false) {
      tipo = "s";
    }
    this.#fecha = new Date("2026-6-1");
    this.#descripcion = descripcion;
    this.#personal = personal;
    this.#id =
      tipo +
      "-" +
      descripcion[descripcion.length - 1] +
      descripcion[descripcion.length - 2] +
      descripcion[descripcion.length - 3] +
      "-" +
      this.#fecha.getDate() +
      "-" +
      this.#fecha.getMonth() +
      "-" +
      this.#fecha.getFullYear();
  }
  setId(id) {
    this.#id = id;
  }
  getId() {
    return this.#id;
  }
  setDescripcion(descripcion) {
    this.#descripcion = descripcion;
  }
  getDescripcion() {
    return this.#descripcion;
  }
  setPersonal(personal) {
    this.#personal = personal;
  }
  getPersonal() {
    return this.#personal;
  }
  toString() {
    return this.#id;
  }
}
