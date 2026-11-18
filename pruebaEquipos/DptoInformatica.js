export class DptoInformatica {
  #aulas;

  constructor() {
    this.#aulas = new Map();
  }

  addAula(aula, grupo) {
    if (this.#aulas.has(aula.getNumero())) {
      return false;
    }
    this.#aulas.set(aula.getNumero(), { aula: aula, grupo: grupo });
    return true;
  }

  getAula(numero) {
    let dato = this.#aulas.get(Number(numero));
    return dato ? dato.aula : undefined;
  }

  getUbicacion(idEquipo) {
    for (let dato of this.#aulas.values()) {
      let posicion = dato.aula.getPosicion(idEquipo);
      if (posicion !== null) {
        return (
          "Aula número: " +
          dato.aula.getNumero() +
          ", Fila: " +
          posicion[0] +
          ", Columna: " +
          posicion[1]
        );
      }
    }
    return "Equipo desconocido";
  }

  getNEquipos() {
    let total = 0;
    for (let dato of this.#aulas.values()) {
      for (let fila of dato.aula.getEquipos()) {
        total += fila.length;
      }
    }
    return total;
  }
}
