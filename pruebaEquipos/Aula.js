
export class Aula {
    #numero;
    #equipos;
    #puestos;

    constructor(numero, filas, columnas) {
        this.#numero = numero;
        this.#puestos = filas * columnas;
        this.#equipos = [];
        for (let i = 0; i < filas; i++) {
            const fila = [];
            for (let j = 0; j < columnas; j++) {
                fila.push(null);
            }
            this.#equipos.push(fila);
        }
    }

    activaEquipo(equipo, fila, columna) {
        if (fila < 0 || fila >= this.#equipos.length || columna < 0) {
            return false;
        }

        if (equipo.getPersonal()) {
            if (columna > this.#equipos[fila].length) {
                columna = this.#equipos[fila].length;
            }
            this.#equipos[fila].splice(columna, 0, equipo);
            return true;
        }

        if (columna >= this.#equipos[fila].length) {
            return false;
        }
        this.#equipos[fila][columna] = equipo;
        return true;
    }

    getPosicion(idEquipo) {
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                const equipo = this.#equipos[i][j];
                if (equipo !== null && equipo.getId() === idEquipo) {
                    return [i, j];
                }
            }
        }
        return null;
    }

    getPorcentajeOcupacion() {
        let activos = 0;
        for (const fila of this.#equipos) {
            for (const equipo of fila) {
                if (equipo !== null) {
                    activos++;
                }
            }
        }
        return Math.round((activos / this.#puestos) * 100);
    }

    getNumero() {
        return this.#numero;
    }
    setNumero(numero) {
        this.#numero = numero;
    }

    getEquipos() {
        return this.#equipos;
    }
    setEquipos(equipos) {
        this.#equipos = equipos;
    }

    getPuestos() {
        return this.#puestos;
    }
    setPuestos(puestos) {
        this.#puestos = puestos;
    }
}