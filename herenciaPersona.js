class Persona {
  #nombre;
  #apellidos;
  #dni;
  constructor(nombre, apellidos, dni) {
    this.#nombre = nombre;
    this.#apellidos = apellidos;
    this.#dni = dni;
  }
  getNombre() {
    return this.#nombre;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getApellidos() {
    return this.#apellidos;
  }
  setApellidos(apellidos) {
    this.#apellidos = apellidos;
  }
  getDni() {
    return this.#dni;
  }
  setDni(dni) {
    this.#dni = dni;
  }
}
class Estudiante extends Persona {
  #asignaturas;
  constructor(nombre, apellidos, dni) {
    super(nombre, apellidos, dni);
    this.#asignaturas = ["Cliente", "Servidor", "Interfaces"];
    console.log("He sido creado y mis atributos son:");
    console.log("Nombre: " + this.getNombre());
    console.log("Apellidos: " + this.getApellidos());
    console.log("DNI: " + this.getDni());
  }
  entregaEjercicio(ejercicio, profesor) {
    console.log(
      "El ejercicio " + ejercicio + " ha sido entregado a " + profesor,
    );
  }
}

class Profesor extends Persona {
  constructor(nombre, apellidos, dni) {
    super(nombre, apellidos, dni);
  }
  corregirEjercicio(ejercicio) {
    let nota = (Math.random() * 10).toFixed(2);
    console.log(
      "El ejercicio " +
        ejercicio +
        "ha sido corregido. Tiene una nota de: " +
        nota,
    );
  }
}

let prof1 = new Profesor("Pepito", "Julianez", "123456789A");
let prof2 = new Profesor("Julian", "Pepitez", "123456789B");

let es1 = new Estudiante("Juanito", "Juanez", "123456789C");
let es2 = new Estudiante("Maria", "Juanitez", "123456789D");
let es3 = new Estudiante("Benito", "Pancraciez", "123456789E");
let es4 = new Estudiante("Pancracio", "Benitez", "123456789F");

es1.entregaEjercicio("Ejercicio 1.1", "Pepito");
es1.entregaEjercicio("Ejercicio 1.2", "Julian");

es2.entregaEjercicio("Ejercicio 2.1", "Pepito");
es2.entregaEjercicio("Ejercicio 2.2", "Julian");

es3.entregaEjercicio("Ejercicio 3.1", "Pepito");
es4.entregaEjercicio("Ejercicio 3.2", "Julian");

es4.entregaEjercicio("Ejercicio 4.1", "Pepito");
es4.entregaEjercicio("Ejercicio 4.2", "Julian");

prof1.corregirEjercicio("Ejercicio 1.1");
prof1.corregirEjercicio("Ejercicio 1.2");
