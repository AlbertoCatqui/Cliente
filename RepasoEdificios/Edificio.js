import { Propietario } from "./Propietario.js";

export class Edificio {
  #calle;
  #numero;
  #codigoPostal;
  #plantas;

  constructor(calle, numero, cp) {
    this.#calle = calle;
    this.#numero = numero;
    this.#codigoPostal = cp;
    this.#plantas = [];
    console.log(
      "Construido nuevo edificio en calle: " +
        this.#calle +
        ", nº:" +
        this.#numero +
        ", CP:" +
        this.#codigoPostal,
    );
  }

  agregaPlantasYPuertas(nPlantas, nPuertas) {
    for (let i = 0; i < nPlantas; i++) {
      this.#plantas.push(new Array(nPuertas).fill("VACÍO"));
    }
  }

  agregarPropietario(nombre, genero, nMiembros, planta, puerta) {
    if (
      planta <= this.#plantas.length - 1 &&
      puerta <= this.#plantas[0].length
    ) {
      if (this.#plantas[planta][puerta - 1] == "VACÍO") {
        this.#plantas[planta][puerta - 1] = new Propietario(
          nombre,
          genero,
          nMiembros,
        );
        console.log(
          nombre +
            " es ahora el propietario de la puerta" +
            puerta +
            " del piso " +
            planta,
        );
      } else {
        console.log(
          "La puerta " +
            puerta +
            " del piso " +
            planta +
            " esta ocupada por " +
            this.#plantas[planta][puerta - 1].getNombre(),
        );
      }
    } else {
      console.log("No es posible asignar el propietario");
    }
  }

  imprimePlantas() {
    for (let i = 0; i < this.#plantas.length; i++) {
      console.log("----------" + "PISO " + i + "----------");
      for (let j = 0; j < this.#plantas[i].length; j++) {
        console.log(
          "Puerta: " + (j + 1) + "->" + this.#plantas[i][j].getNombre(),
        );
      }
    }
  }

  getCalle() {
    return this.#calle;
  }
  setCalle(calle) {
    this.#calle = calle;
  }
  getNumero() {
    return this.#numero;
  }
  setNumero(numero) {
    this.#numero = numero;
  }
  getCodigoPostal() {
    return this.#codigoPostal;
  }
  setCodigoPostal(cp) {
    this.#codigoPostal = cp;
  }
}
