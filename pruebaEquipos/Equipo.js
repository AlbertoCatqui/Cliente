
export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal;

    constructor(descripcion, personal, dias) {
        this.#descripcion = descripcion;
        this.#personal = personal;
        this.#fecha = this.#calcularFecha(dias);
        this.#id = this.#generarId();
    }

    #calcularFecha(dias) {
        const hoy = new Date();
        if (dias) {
            hoy.setDate(hoy.getDate() + Number(dias));
            return hoy;
        }
        let anio = hoy.getFullYear();
        if (hoy.getMonth() >= 8) {
            anio++;
        }
        return new Date(anio, 5, 30);
    }

    #generarId() {
        const tipo = this.#personal ? "P" : "S";
        const zzz = this.#descripcion.slice(-3);
        const dd = this.#fecha.getDate();
        const mm = this.#fecha.getMonth() + 1;
        const yyyy = this.#fecha.getFullYear();
        return tipo + "-" + zzz + "-" + dd + "-" + mm + "-" + yyyy;
    }

    getId() {
        return this.#id;
    }
    setId(id) {
        this.#id = id;
    }

    getFecha() {
        return this.#fecha;
    }
    setFecha(fecha) {
        this.#fecha = fecha;
    }

    getDescripcion() {
        return this.#descripcion;
    }
    setDescripcion(descripcion) {
        this.#descripcion = descripcion;
    }

    getPersonal() {
        return this.#personal;
    }
    setPersonal(personal) {
        this.#personal = personal;
    }

    toString() {
        return this.#id;
    }
}